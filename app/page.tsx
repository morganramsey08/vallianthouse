'use client';

import Image from 'next/image';
import './page.scss';

export default function HomePage() {
  /* ==========================================================
     STATIC CONTENT VARIABLES
     ========================================================== */
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
      <div className="flex flex-col items-center mt-20">
        {/* We assume your SVG logo might be colored, otherwise, no color class needed here */}
        <Image
          src="/img/vhouse-logo-large.svg"
          alt="Valliant House Logo"
          width={220}
          height={220}
          className="w-[300px] md:w-[520px] lg:w-[600px] xl:w-[700px]"
        />
        
        {/* LOCATION PHONE NUMBERS - The secondary highlight */}
        <div className="location-group w-full mt-20 mb-12 text-center text-white">
          <div className="p-4">
            <p className="text-xl font-medium">{ENID_LABEL}</p>
            <a href={`tel:${ENID_PHONE}`} className="location-phone underline text-lg font-bold">
              {ENID_PHONE}
            </a>
          </div>

          <div className="p-4">
            <p className="text-xl font-medium">{KONAWA_LABEL}</p>
            <a href={`tel:${KONAWA_PHONE}`} className="location-phone underline text-lg font-bold">
              {KONAWA_PHONE}
            </a>
          </div>

          <div className="p-4">
            <p className="text-xl font-medium">{VALLIANT_LABEL}</p>
            <a href={`tel:${VALLIANT_PHONE}`} className="location-phone underline text-lg font-bold">
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