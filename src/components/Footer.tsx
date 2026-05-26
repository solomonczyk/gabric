import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import WorkingHours from '@/components/WorkingHours';
import { siteConfig } from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-dark-primary border-t-2 border-gold-primary/60">
      {/* Top CTA Bar */}
      <div className="bg-dark-graphite border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-headline-md text-headline-md text-white">Imate pitanje ili želite ponudu?</p>
            <p className="text-text-light text-body-md">Pozovite nas ili pošaljite poruku — odgovaramo u roku od 24h.</p>
          </div>
          <a
            href="tel:0695791925"
            className="bg-gold-primary text-dark-primary px-8 py-4 rounded-sm font-bold text-lg hover:bg-gold-accent transition-all flex items-center gap-3 shrink-0"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phone}
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-4 md:px-gutter py-12 md:py-section-padding max-w-container-max mx-auto">
        {/* Column 1: Logo & Description */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo-sg.png"
              alt="SG Gipsarko"
              className="h-14 md:h-16 w-auto shrink-0"
            />
          </div>
          <p className="font-body-md text-body-md text-text-light">
            Profesionalni gipsarski i molerski radovi u Subotici. Kvalitet, preciznost i čistoća su naš zaštitni znak.
          </p>
          <div className="flex gap-4">
            <a
              href="tel:0695791925"
              className="text-gold-primary hover:text-gold-accent transition-colors"
              aria-label="Pozovite nas na 069 579 1925"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@gipsarko.rs"
              className="text-gold-primary hover:text-gold-accent transition-colors"
              aria-label="Pošaljite e-mail na info@gipsarko.rs"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6">
          <h4 className="font-label-caps text-label-caps text-gold-primary">NAVIGACIJA</h4>
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <Link href="/" className="text-text-light hover:text-gold-primary transition-colors">
                Početna
              </Link>
            </li>
            <li>
              <Link href="/usluge" className="text-text-light hover:text-gold-primary transition-colors">
                Usluge
              </Link>
            </li>
            <li>
              <Link href="/cenovnik" className="text-text-light hover:text-gold-primary transition-colors">
                Cenovnik
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-text-light hover:text-gold-primary transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/o-nama" className="text-text-light hover:text-gold-primary transition-colors">
                O nama
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="text-text-light hover:text-gold-primary transition-colors">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/politika-privatnosti" className="text-text-light hover:text-gold-primary transition-colors">
                Politika privatnosti
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="space-y-6">
          <h4 className="font-label-caps text-label-caps text-gold-primary">KONTAKT INFO</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-4 text-text-light">
              <MapPin className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
              <span>Subotica i okolina, Srbija</span>
            </div>
            <div className="flex items-start gap-4 text-text-light">
              <Phone className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
              <a href="tel:0695791925" className="hover:text-gold-primary transition-colors">
                {siteConfig.phone}
              </a>
            </div>
            <div className="flex items-start gap-4 text-text-light">
              <Mail className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
              <a href="mailto:info@gipsarko.rs" className="hover:text-gold-primary transition-colors">
                info@gipsarko.rs
              </a>
            </div>
          </div>
          <div className="mt-8 bg-dark-surface/50 p-4 border border-gold-border/20">
            <p className="font-body-md text-sm text-text-light uppercase tracking-wider mb-1">Radno vreme:</p>
            <WorkingHours variant="footer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-outline-variant/30 py-8 px-4 md:px-gutter text-center">
        <p className="font-body-md text-body-md text-text-muted">
          © 2025 SG Gipsarko Molerski Radovi Subotica · {siteConfig.company.owner}
        </p>
      </div>
    </footer>
  );
}
