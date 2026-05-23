import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import WorkingHours from '@/components/WorkingHours';

export default function Footer() {
  return (
    <footer className="bg-deep-slate border-t-4 border-construction-amber">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-4 md:px-gutter py-12 md:py-section-padding max-w-container-max mx-auto">
        {/* Column 1: Logo & Description */}
        <div className="space-y-6">
          <h3 className="font-headline-md text-headline-md text-plaster-white">GIPSARKO</h3>
          <p className="font-body-md text-body-md text-concrete-grey">
            Profesionalni gipsarski i molerski radovi u Subotici. Kvalitet, preciznost i čistoća su naš zaštitni znak.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6">
          <h4 className="font-label-caps text-label-caps text-construction-amber">NAVIGACIJA</h4>
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <Link href="/" className="text-concrete-grey hover:text-construction-amber transition-colors">
                Početna
              </Link>
            </li>
            <li>
              <Link href="/usluge" className="text-concrete-grey hover:text-construction-amber transition-colors">
                Usluge
              </Link>
            </li>
            <li>
              <Link href="/cenovnik" className="text-concrete-grey hover:text-construction-amber transition-colors">
                Cenovnik
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-concrete-grey hover:text-construction-amber transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/o-nama" className="text-concrete-grey hover:text-construction-amber transition-colors">
                O nama
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="text-concrete-grey hover:text-construction-amber transition-colors">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/politika-privatnosti" className="text-concrete-grey hover:text-construction-amber transition-colors">
                Politika privatnosti
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="space-y-6">
          <h4 className="font-label-caps text-label-caps text-construction-amber">KONTAKT INFO</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-4 text-concrete-grey">
              <MapPin className="w-5 h-5 text-construction-amber flex-shrink-0 mt-0.5" />
              <span>Subotica i okolina, Srbija</span>
            </div>
            <div className="flex items-start gap-4 text-concrete-grey">
              <Phone className="w-5 h-5 text-construction-amber flex-shrink-0 mt-0.5" />
              <a href="tel:0695791925" className="hover:text-construction-amber transition-colors">
                069 579 1925
              </a>
            </div>
            <div className="flex items-start gap-4 text-concrete-grey">
              <Mail className="w-5 h-5 text-construction-amber flex-shrink-0 mt-0.5" />
              <a href="mailto:info@gipsarko.rs" className="hover:text-construction-amber transition-colors">
                info@gipsarko.rs
              </a>
            </div>
          </div>
          <div className="mt-8 bg-surface-container-high/10 p-4 border border-construction-amber/20">
            <p className="font-body-md text-sm text-concrete-grey uppercase tracking-wider mb-1">Radno vreme:</p>
            <WorkingHours variant="footer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-concrete-grey/10 py-8 px-4 md:px-gutter text-center">
        <p className="font-body-md text-body-md text-concrete-grey">
          © 2025 Gipsarko Molerski Radovi · Saša Gabrić
        </p>
      </div>
    </footer>
  );
}
