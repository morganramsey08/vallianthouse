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
          <h4>Contact Us</h4>
            <a href="tel:15802033600"><span className='block mt-2'>For Women&apos;s Treatment:</span> Val (580) 203-3600 ext 127</a>
            <a href="tel:15809252650"><span className='block'>For Men&apos;s Treatment:</span> Josh (580) 925-2650</a>
            <a href="tel:1580"><span className='block'>After Hours Treatment:</span> (580) 111-1111</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Valliant House. All rights reserved.
      </div>
    </footer>
  );
}
