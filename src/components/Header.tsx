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

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-plaster-white border-b border-concrete-grey transition-shadow ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-primary">
            <Hammer className="w-6 h-6" />
          </span>
          <span className="text-primary leading-tight">
            <span className="font-headline-md font-extrabold text-headline-md">GIPSARKO</span>{' '}
            <span className="font-body-md font-light">MOLERSKI RADOVI</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-body-md text-body-md transition-colors ${
                pathname === item.href
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a href="tel:0695791925" className="bg-construction-amber text-deep-slate px-6 py-2 rounded-lg font-bold hover:shadow-md transition-all active:opacity-80 hidden md:block">
          Pozovite nas
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-plaster-white border-t border-concrete-grey">
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-body-md text-body-md ${
                  pathname === item.href ? 'text-primary font-bold' : 'text-on-surface-variant'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:0695791925" className="bg-construction-amber text-deep-slate px-6 py-2 rounded-lg font-bold text-center">
              Pozovite nas
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
