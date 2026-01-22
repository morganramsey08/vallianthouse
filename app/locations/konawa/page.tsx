'use client';
import VideoSection, { type BulletItem } from '@/app/components/video-section';
import FacilityHighlights, { type HighlightItem } from '@/app/components/facility-highlights';

const highlights: HighlightItem[] = [
  {
    title: "Men's Specialized Care",
    description:
      "Dedicated facility designed specifically for men's addiction recovery needs with tailored programming and support.",
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
  {
    title: 'Transportation Services',
    description:
      'Transportation provided to detox facilities, outside meetings, and essential appointments.',
    icon: 'Car',
  },
];

const bullets: BulletItem[] = [
  { icon: 'Users', text: 'High-quality team collaboration' },
  { icon: 'Shield', text: 'Secure and reliable solutions' },
  { icon: 'Heart', text: 'Customer-first philosophy' },
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
          bullets={bullets}
          videoOnLeft={false}
        />
      </div>

        <FacilityHighlights items={highlights} />

    </div>
  );
}
