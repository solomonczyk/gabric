import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';
import Button from '@/components/Button';
import { services } from '@/lib/services';
import { portfolioPairs } from '@/lib/portfolio';
import { siteConfig } from '@/lib/siteConfig';
import {
  Shield,
  Calendar,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const technicalSpecs = [
  {
    category: 'Gipsani Sistemi',
    standard: 'Knauf / Rigips',
    description: 'Sertifikovani sistemi za suvu gradnju',
    details: 'DE standard DIN 18181',
  },
  {
    category: 'Priprema Površine',
    standard: 'Fino gletovanje Q3',
    description: 'Priprema za visokokvalitetno farbanje',
    details: 'Bez vidljivih spojeva',
  },
  {
    category: 'Materijali',
    standard: 'Jub / Caparol',
    description: 'Premijum boje i premazi',
    details: 'ECO sertifikat',
  },
  {
    category: 'Zona Rada',
    standard: 'Subotica + 30km',
    description: 'Pokrivamo celu teritoriju',
    details: 'Besplatan izlazak na teren',
  },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDBuRBKI7T-MkXKVKpiUPFZvzelxPsJ3f1aj1J1t4OI-yRZ-SMQFV7tb6iBbVWlh5FjKd34UjuJZYh_59flmfB7j1yq0cH5Z6oyr8KHSQBiqFB8H4J_VMKDIK2gZEzT_STfAC4xJwxnAxUcI2PJNKE1q7R5gombuz8CdBeAKVT3W4cckaHfo4fPSo4dKUaR3NhnRnS6KRdFJ0Ph8qb7HKAnf7VWbVs23JS0MKfKxufb7XJp94tchxWybIkKvoGabvtopToXvHU2uto"
        label="Vrhunska Zanatska Preciznost u Subotici"
        title="Pretvaramo Vaš prostor u arhitektonsko remek-delo."
        description="Specijalizovani smo za gipsarske i molerske radove najvišeg standarda. Od spuštenih plafona do savršenog gletovanja, gradimo kvalitet koji traje."
      >
        <Button>Zatražite Ponudu</Button>
        <Link
          href="/portfolio"
          className="border-2 border-plaster-white text-plaster-white font-headline-md px-8 py-4 rounded hover:bg-plaster-white hover:text-deep-slate transition-all"
        >
          Naši Radovi
        </Link>
      </HeroSection>

      {/* 2. Why Us Section */}
      <SectionContainer className="bg-plaster-white">
        <SectionTitle
          title="Zašto Izabrati Gipsarko?"
          subtitle="Profesionalizam i preciznost na svakom projektu."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
          <div className="p-base border border-concrete-grey hover:border-construction-amber transition-colors">
            <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-construction-amber" />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-deep-slate">
              Nemački Standard
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Koristimo isključivo vrhunske materijale i tehnike koje
              garantuju dugovečnost i savršen finiš na svakom projektu.
            </p>
          </div>
          <div className="p-base border border-concrete-grey hover:border-construction-amber transition-colors">
            <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-construction-amber" />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-deep-slate">
              Poštovanje Rokova
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Vaše vreme je dragoceno. Svaki projekat završavamo u
              dogovorenom roku bez kompromisa u kvalitetu.
            </p>
          </div>
          <div className="p-base border border-concrete-grey hover:border-construction-amber transition-colors">
            <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-construction-amber" />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-deep-slate">
              Subotica i Okolina
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Naš tim je fokusiran na grad Suboticu i bližu okolinu, što
              omogućava brzu reakciju i efikasan rad.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* 3. Services Section */}
      <SectionContainer className="bg-surface-container-low">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label-caps text-label-caps text-construction-amber">
              Naše Usluge
            </span>
            <h2 className="font-headline-lg text-headline-lg text-deep-slate mt-2">
              Sve za Vaš Enterijer
            </h2>
          </div>
          <Link
            href="/usluge"
            className="hidden md:flex items-center gap-2 font-headline-md text-headline-md text-primary hover:underline"
          >
            Sve usluge
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </SectionContainer>

      {/* 4. Portfolio: Pre i Posle */}
      <SectionContainer className="bg-plaster-white">
        <SectionTitle
          title="Portfolio: Pre i Posle"
          subtitle="Pogledajte transformaciju prostora kroz naše faze rada - od grubih konstrukcija do finalnog rezultata."
        />
        <div className="space-y-12">
          {portfolioPairs.map((pair) => (
            <div
              key={pair.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-gutter group"
            >
              <div className="relative overflow-hidden border border-concrete-grey">
                <img
                  src={pair.before.image}
                  alt={pair.before.label}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-deep-slate/80 text-plaster-white px-3 py-1 font-label-caps text-xs">
                  {pair.before.label}
                </div>
              </div>
              <div className="relative overflow-hidden border border-concrete-grey">
                <img
                  src={pair.after.image}
                  alt={pair.after.label}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-construction-amber text-deep-slate px-3 py-1 font-label-caps text-xs">
                  {pair.after.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="bg-deep-slate text-white px-8 py-4 rounded font-bold inline-block hover:bg-black transition-colors"
          >
            Pogledajte Sve Radove
          </Link>
        </div>
      </SectionContainer>

      {/* 5. Technical Specs */}
      <SectionContainer className="bg-surface-container-low">
        <SectionTitle
          title="Tehničke Specifikacije i Standardi"
          subtitle="Transparentnost u svakom segmentu našeg poslovanja."
        />
        <TechnicalSpecsTable specs={technicalSpecs} />
      </SectionContainer>

      {/* 6. CTA Banner */}
      <section className="py-16 md:py-24 bg-construction-amber relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-deep-slate/10 skew-x-[-20deg] translate-x-1/2 hidden sm:block"></div>
        <div className="max-w-container-max mx-auto px-4 md:px-gutter relative z-10 text-center">
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-deep-slate mb-8">
            Spremni da započnete renoviranje?
          </h2>
          <div className="mb-12">
            <a
              className="font-headline-xl text-headline-xl text-deep-slate hover:opacity-80 transition-opacity block"
              href={`tel:${siteConfig.phoneRaw}`}
            >
              {siteConfig.phone}
            </a>
            <p className="font-label text-label text-deep-slate/80 mt-2">
              {siteConfig.workingHours.banner}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              className="bg-deep-slate text-white px-10 py-4 rounded-lg font-bold font-headline-md flex items-center gap-3 hover:shadow-xl transition-shadow"
              href={`tel:${siteConfig.phoneRaw}`}
            >
              <Phone className="w-5 h-5" />
              Pozovite odmah
            </a>
            <a
              className="bg-white text-deep-slate px-10 py-4 rounded-lg font-bold font-headline-md flex items-center gap-3 border border-concrete-grey hover:bg-concrete-grey transition-colors"
              href={`https://viber.click/${siteConfig.phoneViber}`}
            >
              <MessageCircle className="w-5 h-5" />
              Pošaljite poruku
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
