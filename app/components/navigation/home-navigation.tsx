'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './style.scss';

export default function HomeNavigation() {
  const [locationsOpen, setLocationsOpen] = useState(false);

  const locations = [
    { name: 'Konawa', href: '/locations/konawa' },
    { name: 'Enid', href: '/locations/enid' },
    { name: 'Valliant', href: '/locations/valliant' },
  ];

  return (
    <nav className="home-nav w-full flex justify-center gap-12 mt-6 text-base font-semibold text-secondary relative">
      <Link href="/about">About Us</Link>

      {/* Locations Dropdown */}
      <div className="relative">
        <button
          onClick={() => setLocationsOpen(!locationsOpen)}
          className="flex items-center gap-1 text-white font-regular cursor-pointer"
        >
          Locations
          {locationsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {locationsOpen && (
          <div className="sub-menu absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-white rounded-lg shadow-md flex flex-col overflow-hidden z-50">
            {locations.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="px-4 py-2 hover:bg-gray-100 transition-colors text-center"
                onClick={() => setLocationsOpen(false)}
              >
                {loc.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link href="/testimonials">Testimonials</Link>
    </nav>
  );
}
