'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

import './style.scss';

export default function Navigation() {
  const [open, setOpen] = useState(false); // Mobile menu
  const [locationsOpen, setLocationsOpen] = useState(false); // Dropdown
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const locations = [
    { name: 'Konawa', href: '/locations/konawa' },
    { name: 'Enid', href: '/locations/enid' },
    { name: 'Valliant', href: '/locations/valliant' },
  ];

  return (
    <header className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-7 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Image
            src="/img/vhouse-logo-horizontal.svg"
            alt="VHouse Logo"
            width={250}
            height={30}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium relative">
          <Link href="/about" className={isActive('/about') ? 'active' : ''}>
            About Us
          </Link>

          {/* Locations Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLocationsOpen(!locationsOpen)}
              className={`flex items-center gap-1 cursor-pointer ${isActive('/locations') ? 'active' : ''}`}
            >
              Locations
              {locationsOpen ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {locationsOpen && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-lg shadow-md flex flex-col overflow-hidden">
                {locations.map((loc) => (
                  <Link
                    key={loc.href}
                    href={loc.href}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/testimonials"
            className={isActive('/testimonials') ? 'active' : ''}
          >
            Testimonials
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-sm font-medium"
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
            <Link
              href="/about"
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>

            {/* Locations Mobile Dropdown */}
            <div>
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className={`flex items-center justify-between w-full ${isActive('/locations') ? 'active' : ''}`}
              >
                Locations
                {locationsOpen ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>
              {locationsOpen && (
                <div className="flex flex-col mt-2 ml-4 gap-2 rounded-lg shadow-md bg-white overflow-hidden">
                  {locations.map((loc) => (
                    <Link
                      key={loc.href}
                      href={loc.href}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/testimonials"
              className={isActive('/testimonials') ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              Testimonials
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
