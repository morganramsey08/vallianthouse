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

  const TAG_LINE = "Tag Line Here";

  /* ========================================================== */

  return (
    <main className="home flex flex-col items-center justify-between">
      {/* NAV */}
      <nav className="w-full flex justify-center gap-12 mt-6 text-sm">
        <a href="#about">{NAV_ABOUT}</a>
        <a href="#locations">{NAV_LOCATIONS}</a>
        <a href="#testimonials">{NAV_TESTIMONIALS}</a>
      </nav>

      {/* LOGO + TITLE */}
      <div className="flex flex-col items-center">
        <Image
          src="/img/vhouse-logo-large.svg"
          alt="Valliant House Logo"
          width={220}
          height={220}
          className="w-[480px] md:w-[520px]"
        />
        <div className="w-full flex justify-center gap-10 md:gap-40 mt-20 mb-12 text-center">
           {/* ENID */}
        <div>
          <p className="text-lg font-medium">{ENID_LABEL}</p>
          <a href={`tel:${ENID_PHONE}`} className="underline font-semibold">
            {ENID_PHONE}
          </a>
        </div>

        {/* KONAWA */}
        <div>
          <p className="text-lg font-medium">{KONAWA_LABEL}</p>
          <a href={`tel:${KONAWA_PHONE}`} className="underline font-semibold">
            {KONAWA_PHONE}
          </a>
        </div>

        {/* VALLIANT */}
        <div>
          <p className="text-lg font-medium">{VALLIANT_LABEL}</p>
          <a href={`tel:${VALLIANT_PHONE}`} className="underline font-semibold">
            {VALLIANT_PHONE}
          </a>
        </div>
        </div>
      </div>

      {/* LOCATION BLOCKS */}
      <section className="w-full flex justify-center gap-10 md:gap-40 mb-12 text-center">
        <h2 className="site-title mt-8 text-3xl md:text-4xl font-bold tracking-wider">
          {TAG_LINE}
        </h2>
      </section>
    </main>
  );
}
