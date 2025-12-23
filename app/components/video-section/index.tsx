'use client';

import React from 'react';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface BulletItem {
  icon: keyof typeof Icons; // same as your highlights page
  text: string;
}

interface VideoSectionProps {
  videoUrl: string;
  bullets: BulletItem[];
  videoOnLeft?: boolean; // default true
  className?: string; // optional extra classes
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoUrl,
  bullets,
  videoOnLeft = true,
  className = '',
}) => {
  return (
    <section className={`w-full flex flex-col md:flex-row items-start md:items-center gap-8 ${className}`}>
      {videoOnLeft && (
        <div className="w-full md:w-1/2 mx-auto">
          <div className="aspect-video">
            <iframe
              src={videoUrl}
              title="Video"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {bullets.map((bullet, index) => {
          const IconComponent = Icons[bullet.icon] as LucideIcon;
          return (
            <div key={index} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <IconComponent size={24} className="text-[var(--color-navy-900)]" />
              </div>
              <p className="text-gray-700">{bullet.text}</p>
            </div>
          );
        })}
      </div>

      {!videoOnLeft && (
        <div className="w-full md:w-1/2 mx-auto">
          <div className="aspect-video">
            <iframe
              src={videoUrl}
              title="Video"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
