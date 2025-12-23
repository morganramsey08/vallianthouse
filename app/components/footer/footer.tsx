import Image from 'next/image';
import Link from 'next/link';
import './style.scss';

export default function GlobalFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Logo */}
        <div className="footer-brand">
          <Image
            src="/img/vhouse-logo-horizontal.svg"
            alt="Valliant House"
            width={220}
            height={32}
          />
        </div>

        {/* Navigation */}
        <nav className="footer-nav">
          <Link href="/about">About Us</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/testimonials">Testimonials</Link>
        </nav>

        {/* Contact */}
        <div className="footer-contact">
          <span>Call Us</span>
          <a href="tel:15806038881">(580) 603-8881</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Valliant House. All rights reserved.
      </div>
    </footer>
  );
}
