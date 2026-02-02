'use client';

import VideoSection, { type BulletItem } from '@/app/components/video-section';
import FacilityHighlights, { type HighlightItem } from '@/app/components/facility-highlights';
import VimeoVideoGrid from "@/app/components/video-grid";

const bullets: BulletItem[] = [
  { icon: 'Users', text: 'In operation for over 20 years, over 10,000 served' },
  { icon: 'Shield', text: 'Highly professional, credentialed staff, many of whom are in recovery themselves' },
  { icon: 'Heart', text: 'Adjacent police and fire protection and city park with numerous amenities' },
];

const highlights: HighlightItem[] = [
  {
    title: "Women's Specialized Care",
    description:
      "Dedicated facility designed specifically for women's addiction recovery needs with tailored programming and support.",
    icon: 'Users', // Lucide icon name
  },
  {
    title: 'Group Therapy',
    description:
      'Regular group therapy sessions fostering peer support and shared healing experiences in recovery.',
    icon: 'MessageCircle',
  },
  {
    title: 'Insurance Accepted',
    description:
      'We work with most major insurance providers to make treatment accessible and affordable for our patients.',
    icon: 'Shield',
  },
  {
    title: 'Family Visitation',
    description:
      'Structured family visitation programs to maintain important relationships during recovery process.',
    icon: 'Heart',
  },
  {
    title: '60-Day Program',
    description:
      'Comprehensive 60-day residential treatment program providing intensive support and skill development.',
    icon: 'Calendar',
  },
];

export default function ValliantPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <div className="w-full mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl font-semibold mb-2 align-left">
            Valliant
          </h1>
          <VideoSection
                media={{
                  type: 'image',
                  src: '/img/vhouse-drone.JPG',
                  alt: 'Valliant House',
                }}
              bullets={bullets}
              videoOnLeft={true}
            />
            <VimeoVideoGrid
              videos={[
                { id: '1111870777', title: 'Amanda' },
                { id: '1111870878', title: 'Frances' },
                { id: '1111870850', title: 'Baily' },
              ]}
            />
        </div>
         <FacilityHighlights items={highlights} />
      </div>
  );
}
