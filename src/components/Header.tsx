'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Hammer } from 'lucide-react';
import Link from 'next/link';
import { navItems } from '@/lib/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-plaster-white border-b border-concrete-grey transition-shadow ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="flex justify-between items-center h-14 md:h-16 gap-2 px-4 md:px-gutter max-w-container-max mx-auto min-w-0">
        <Link href="/" className="flex items-center gap-2 min-w-0 shrink">
          <span className="text-primary shrink-0">
            <Hammer className="w-6 h-6" />
          </span>
          <span className="text-primary leading-tight min-w-0">
            <span className="font-headline-md font-extrabold text-base md:text-headline-md block truncate">
              GIPSARKO
            </span>
            <span className="font-body-md font-light text-xs md:text-body-md hidden sm:block truncate">
              MOLERSKI RADOVI
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex gap-6 lg:gap-8 shrink-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-body-md text-body-md transition-colors whitespace-nowrap ${
                pathname === item.href
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="tel:0695791925"
            className="bg-construction-amber text-deep-slate px-4 py-2 rounded-lg font-bold text-sm hover:shadow-md transition-all active:opacity-80 hidden lg:block whitespace-nowrap"
          >
            Pozovite nas
          </a>

          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-concrete-grey text-deep-slate hover:bg-surface-container-low"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Zatvori meni' : 'Otvori meni'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            className="md:hidden fixed inset-0 top-14 bg-deep-slate/40 z-40"
            aria-label="Zatvori meni"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="md:hidden fixed left-0 right-0 top-14 z-50 max-h-[calc(100dvh-3.5rem)] overflow-y-auto bg-plaster-white border-b border-concrete-grey shadow-lg">
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-body-md text-body-md py-3 px-3 rounded-lg ${
                    pathname === item.href
                      ? 'text-primary font-bold bg-surface-container-low'
                      : 'text-on-surface-variant hover:bg-surface-container-low'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:0695791925"
                className="mt-2 bg-construction-amber text-deep-slate px-6 py-3 rounded-lg font-bold text-center"
              >
                Pozovite nas — 069 579 1925
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
