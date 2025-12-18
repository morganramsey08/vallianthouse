'use client';

import Image from 'next/image';
import './page.scss';

export default function HomePage() {
  /* ==========================================================
     STATIC CONTENT VARIABLES
     ========================================================== */
  const NAV_LOCATIONS = "Locations";
  const NAV_ABOUT = "About Us";
  const NAV_TESTIMONIALS = "Testimonials";


  const ENID_LABEL = "Enid";
  const ENID_PHONE = "(580) 603-8881";

  const KONAWA_LABEL = "Konawa";
  const KONAWA_PHONE = "(580) 925-2650";

  const VALLIANT_LABEL = "Valliant";
  const VALLIANT_PHONE = "(580) 203-3600";

  const TAG_LINE = "Tagline Goes Here";

  /* ========================================================== */

  return (
    // Use text-secondary (navy) as the default text color
    <main className="home flex flex-col items-center justify-between min-h-screen text-secondary"> 
      {/* NAV */}
      {/* Replaced 'text-sm' with 'nav' class which is styled in SCSS */}
      <nav className="nav w-full flex justify-center gap-12 mt-6 text-base font-semibold"> 
        <a href="#about">{NAV_ABOUT}</a>
        <a href="#locations">{NAV_LOCATIONS}</a>
        <a href="#testimonials">{NAV_TESTIMONIALS}</a>
      </nav>

      {/* LOGO + TITLE */}
      <div className="flex flex-col items-center mt-20">
        {/* We assume your SVG logo might be colored, otherwise, no color class needed here */}
        <Image
          src="/img/vhouse-logo-large.svg"
          alt="Valliant House Logo"
          width={220}
          height={220}
          className="w-[480px] md:w-[520px]"
        />
        
        {/* LOCATION PHONE NUMBERS - The secondary highlight */}
        <div className="w-full flex justify-center gap-10 md:gap-40 mt-20 mb-12 text-center text-white">
           {/* ENID */}
        <div className="p-4 "> 
          <p className="text-xl font-medium text-white">{ENID_LABEL}</p>
          <a href={`tel:${ENID_PHONE}`} className="location-phone underline text-lg font-bold text-white"> 
            {ENID_PHONE}
          </a>
        </div>

        {/* KONAWA */}
        <div className="p-4">
          <p className="text-xl font-medium">{KONAWA_LABEL}</p>
          <a href={`tel:${KONAWA_PHONE}`} className="location-phone underline text-lg font-bold text-white">
            {KONAWA_PHONE}
          </a>
        </div>

        {/* VALLIANT */}
        <div className="p-4">
          <p className="text-xl font-medium">{VALLIANT_LABEL}</p>
          <a href={`tel:${VALLIANT_PHONE}`} className="location-phone underline text-lg font-bold text-white">
            {VALLIANT_PHONE}
          </a>
        </div>
        </div>
      </div>

      {/* TAG LINE - The primary highlight */}
      <section className="w-full flex justify-center mt-20 mb-12 text-center">
        {/* Uses the site-title class for the green color */}
        <h2 className="site-title mt-8 text-4xl md:text-4xl font-extrabold"> 
          {TAG_LINE}
        </h2>
      </section>
    </main>
  );
}