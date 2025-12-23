'use client';

import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

export type HighlightItem = {
  title: string;
  description: string;
  icon: keyof typeof Icons;
};

type FacilityHighlightsProps = {
  items: HighlightItem[];
};

export default function FacilityHighlights({ items }: FacilityHighlightsProps) {
  return (
    <section className="w-full bg-[#F0FDFA] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => {
          const IconComponent = Icons[item.icon] as LucideIcon;
          return (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <IconComponent size={24} className="text-teal-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-1 text-gray-700">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
