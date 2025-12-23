'use client';

import { useState } from 'react';
import { X, Play } from 'lucide-react';

type VimeoVideo = {
  id: string; // Vimeo video ID
  title?: string;
  thumbnail?: string; // optional custom thumbnail
};

interface VimeoVideoGridProps {
  videos: VimeoVideo[];
}

export default function VimeoVideoGrid({ videos }: VimeoVideoGridProps) {
  const [activeVideo, setActiveVideo] = useState<VimeoVideo | null>(null);

  return (
    <>
      {/* GRID */}
      <section className="w-full mt-12 mb-16">
        <div
          className={`grid gap-6 ${
            videos.length === 3
              ? 'grid-cols-1 sm:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative aspect-video overflow-hidden rounded-xl bg-gray-200 shadow-sm focus:outline-none"
            >
              {/* Thumbnail */}
              <img
                src={
                  video.thumbnail ??
                  `https://vumbnail.com/${video.id}.jpg`
                }
                alt={video.title ?? 'Video thumbnail'}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                  <Play className="w-6 h-6 text-[var(--color-navy-900)] ml-1" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2"
            >
              <X className="w-5 h-5 text-[var(--color-navy-900)]" />
            </button>

            <iframe
              src={`https://player.vimeo.com/video/${activeVideo.id}?autoplay=1`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
