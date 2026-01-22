'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null);
    };

    if (activeImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(image)}
            className="relative aspect-square overflow-hidden rounded-lg focus:outline-none"
          >
            <Image
              src={image.src}
              alt={image.alt ?? ''}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt ?? ''}
              width={1600}
              height={1600}
              className="w-full h-auto rounded-lg"
              priority
            />

            {/* Close button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              aria-label="Close image"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
