'use client';

import React from 'react';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

export interface BulletItem {
  icon: keyof typeof Icons;
  text: string;
}

type Media =
  | { type: 'video'; src: string }
  | { type: 'image'; src: string; alt?: string };

interface VideoSectionProps {
  media: Media;
  bullets: BulletItem[];
  videoOnLeft?: boolean;
  className?: string;
}

const MediaBlock = ({ media }: { media: Media }) => {
  if (media.type === 'video') {
    return (
      <div className="aspect-video">
        <iframe
          src={media.src}
          title="Video"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video">
      <Image
        src={media.src}
        alt={media.alt ?? ''}
        fill
        className="object-cover rounded-lg"
      />
    </div>
  );
};

const VideoSection: React.FC<VideoSectionProps> = ({
  media,
  bullets,
  videoOnLeft = true,
  className = '',
}) => {
  return (
    <section
      className={`w-full flex flex-col md:flex-row items-start md:items-center gap-8 ${className}`}
    >
      {videoOnLeft && (
        <div className="w-full md:w-1/2 mx-auto">
          <MediaBlock media={media} />
        </div>
      )}

      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {bullets.map((bullet, index) => {
          const IconComponent = Icons[bullet.icon] as LucideIcon;

          return (
            <div key={index} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <IconComponent
                  size={24}
                  className="text-[var(--color-navy-900)]"
                />
              </div>
              <p className="text-gray-700">{bullet.text}</p>
            </div>
          );
        })}
      </div>

      {!videoOnLeft && (
        <div className="w-full md:w-1/2 mx-auto">
          <MediaBlock media={media} />
        </div>
      )}
    </section>
  );
};

export default VideoSection;
