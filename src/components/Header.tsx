'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-primary/95 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-dark-primary'
      }`}
    >
      <div className="flex justify-between items-center h-14 md:h-16 gap-2 px-4 md:px-gutter max-w-container-max mx-auto min-w-0">
        <Link href="/" className="flex items-center gap-3 min-w-0 shrink group">
          {/* SG Logo */}
          <img
            src="/logo-sg.png"
            alt="SG Gipsarko"
            className="h-8 md:h-10 w-auto shrink-0"
          />
        </Link>

        <nav className="hidden md:flex gap-6 lg:gap-8 shrink-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-body-md text-body-md transition-colors whitespace-nowrap ${
                pathname === item.href
                  ? 'text-gold-primary font-bold border-b-2 border-gold-primary'
                  : 'text-text-light hover:text-gold-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="tel:0695791925"
            className="bg-gold-primary text-dark-primary px-4 py-2 rounded-sm font-bold text-sm hover:bg-gold-accent transition-all active:opacity-80 hidden lg:flex items-center gap-2 whitespace-nowrap"
          >
            <span className="hidden xl:inline">Pozovite nas</span>
            <span>069 579 1925</span>
          </a>

          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-sm border border-outline-variant text-text-light hover:bg-dark-surface hover:text-gold-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Zatvori meni' : 'Otvori meni'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <button
            type="button"
            className="md:hidden fixed inset-0 top-14 bg-black/60 z-40"
            aria-label="Zatvori meni"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="md:hidden fixed left-0 right-0 top-14 z-50 max-h-[calc(100dvh-3.5rem)] overflow-y-auto bg-dark-primary border-t border-outline-variant shadow-xl">
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-body-md text-body-md py-3 px-3 rounded-sm ${
                    pathname === item.href
                      ? 'text-gold-primary font-bold bg-dark-surface border-l-2 border-gold-primary'
                      : 'text-text-light hover:bg-dark-surface hover:text-gold-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:0695791925"
                className="mt-2 bg-gold-primary text-dark-primary px-6 py-4 rounded-sm font-bold text-center text-lg"
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
