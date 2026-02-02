'use client';
import VideoSection, { type BulletItem } from '@/app/components/video-section';
import FacilityHighlights, { type HighlightItem } from '@/app/components/facility-highlights';

const highlights: HighlightItem[] = [
  {
    title: "Men’s Specialized Care",
    description:
      "Dedicated facility designed specifically for men's addiction recovery needs with tailored programming and support.",
    icon: 'Users',
  },
  {
    title: '60-Day Program',
    description:
      'Comprehensive 60-day residential treatment program providing intensive support and skill development.',
    icon: 'Calendar',
  },
  {
    title: 'Family Visitation',
    description:
      'Structured family visitation programs to maintain important relationships during recovery process.',
    icon: 'Heart',
  },
  {
    title: 'Insurance Accepted',
    description:
      'We work with most major insurance providers to make treatment accessible and affordable for our patients.',
    icon: 'Shield',
  },
];

const bullets: BulletItem[] = [
  { icon: 'TreePine', text: '50 Acre Farm with numerous amenities and peaceful environment for recovery.' },
  { icon: 'BookHeart', text: 'Hands-on personal attention and support from staff that is in recovery themselves.' },
  { icon: 'Calendar', text: 'Men’s Specialized Care, 60-Day Program.' },
];

const bulletsSecond: BulletItem[] = [
  { icon: 'Users', text: '50 Acre Farm with numerous amenities and peaceful environment for recovery.' },
  { icon: 'Shield', text: 'Hands-on personal attention and support from staff that is in recovery themselves.' },
  { icon: 'Heart', text: 'Men’s Specialized Care, 60-Day Program.' },
];

export default function KonawaPage() {
return (
    <div className="min-h-screen flex flex-col items-center justify-start">

      <div className="w-full mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-semibold mb-2 align-left">
        Konawa
      </h1>
        <VideoSection
          media={{
            type: 'video',
            src: 'https://player.vimeo.com/video/1110534524?h=6e36d6e60c',
          }}
          bullets={bullets}
          videoOnLeft={true}
        />
        <VideoSection
          media={{
            type: 'video',
            src: 'https://player.vimeo.com/video/1111809935?h=11842906',
          }}
          bullets={bulletsSecond}
          videoOnLeft={false}
        />
      </div>

        <FacilityHighlights items={highlights} />

    </div>
  );
}
