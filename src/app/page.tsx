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
  Ruler,
  Layers,
  Paintbrush,
  CheckCircle,
  Hammer,
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

const processSteps = [
  {
    icon: Ruler,
    step: '01',
    title: 'Konstrukcija metalnih profila',
    description: 'Postavljanje pocinkovanih profila po projektu — osnova za svaku gipsanu konstrukciju koja garantuje stabilnost i dugovečnost.',
  },
  {
    icon: Layers,
    step: '02',
    title: 'Postavljanje gips-kartona',
    description: 'Montaža gipsanih ploča na profilnu konstrukciju sa preciznošću na milimetar — brza i čista ugradnja.',
  },
  {
    icon: Hammer,
    step: '03',
    title: 'Gletovanje i izravnavanje',
    description: 'Fino gletovanje svih spojeva i izravnavanje celokupne površine do nivoa Q3 — savršeno glatka podloga.',
  },
  {
    icon: Paintbrush,
    step: '04',
    title: 'Krečenje i završni izgled',
    description: 'Finalni molerski radovi — krečenje i dekorativne tehnike koje prostoru daju konačan, vrhunski izgled.',
  },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDBuRBKI7T-MkXKVKpiUPFZvzelxPsJ3f1aj1J1t4OI-yRZ-SMQFV7tb6iBbVWlh5FjKd34UjuJZYh_59flmfB7j1yq0cH5Z6oyr8KHSQBiqFB8H4J_VMKDIK2gZEzT_STfAC4xJwxnAxUcI2PJNKE1q7R5gombuz8CdBeAKVT3W4cckaHfo4fPSo4dKUaR3NhnRnS6KRdFJ0Ph8qb7HKAnf7VWbVs23JS0MKfKxufb7XJp94tchxWybIkKvoGabvtopToXvHU2uto"
        label="SG Gipsarko Molerski Radovi Subotica"
        title="Gipsarski i molerski radovi kojima možete verovati."
        description="Specijalizovani smo za gipsarske i molerske radove najvišeg standarda. Od spuštenih plafona do savršenog gletovanja — gradimo kvalitet koji traje."
      >
        <a
          href="tel:0695791925"
          className="bg-gold-primary text-dark-primary font-headline-md font-bold px-8 py-4 rounded-sm hover:bg-gold-accent transition-all inline-flex items-center gap-3"
        >
          <Phone className="w-5 h-5" />
          Pozovite nas
        </a>
        <Link
          href="/kontakt"
          className="border-2 border-white text-white font-headline-md px-8 py-4 rounded-sm hover:bg-white hover:text-dark-primary transition-all inline-flex items-center gap-3"
        >
          Zatražite ponudu
        </Link>
        <Link
          href="/portfolio"
          className="text-text-light hover:text-white font-headline-md px-8 py-4 transition-all inline-flex items-center gap-2"
        >
          Pogledajte radove
          <ArrowRight className="w-5 h-5" />
        </Link>
      </HeroSection>

      {/* 2. Trust Bar — Stats */}
      <section className="bg-dark-primary border-y border-outline-variant/30 py-8">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          <div className="border-r border-outline-variant last:border-0">
            <div className="font-headline-xl text-headline-xl text-gold-primary">10+</div>
            <div className="font-label text-label text-text-light">GODINA ISKUSTVA</div>
          </div>
          <div className="border-r border-outline-variant last:border-0">
            <div className="font-headline-xl text-headline-xl text-gold-primary">200+</div>
            <div className="font-label text-label text-text-light">USPEŠNIH PROJEKATA</div>
          </div>
          <div className="border-r border-outline-variant last:border-0">
            <div className="font-headline-xl text-headline-xl text-gold-primary">15k</div>
            <div className="font-label text-label text-text-light">KVADRATA GIPSA</div>
          </div>
          <div>
            <div className="font-headline-xl text-headline-xl text-gold-primary">100%</div>
            <div className="font-label text-label text-text-light">ZADOVOLJNIH KLIJENATA</div>
          </div>
        </div>
      </section>

      {/* 3. Why Us Section */}
      <SectionContainer className="bg-dark-graphite">
        <SectionTitle
          title="Zašto Izabrati SG?"
          subtitle="Profesionalizam i preciznost na svakom projektu."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
          <div className="p-base border border-outline-variant hover:border-gold-primary/50 transition-all duration-300 bg-dark-surface">
            <div className="w-12 h-12 bg-gold-primary/10 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-gold-primary" />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-white">
              Nemački Standard
            </h3>
            <p className="font-body-md text-body-md text-text-light">
              Koristimo isključivo vrhunske materijale i tehnike koje
              garantuju dugovečnost i savršen finiš na svakom projektu.
            </p>
          </div>
          <div className="p-base border border-outline-variant hover:border-gold-primary/50 transition-all duration-300 bg-dark-surface">
            <div className="w-12 h-12 bg-gold-primary/10 flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-gold-primary" />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-white">
              Poštovanje Rokova
            </h3>
            <p className="font-body-md text-body-md text-text-light">
              Vaše vreme je dragoceno. Svaki projekat završavamo u
              dogovorenom roku bez kompromisa u kvalitetu.
            </p>
          </div>
          <div className="p-base border border-outline-variant hover:border-gold-primary/50 transition-all duration-300 bg-dark-surface">
            <div className="w-12 h-12 bg-gold-primary/10 flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-gold-primary" />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-white">
              Subotica i Okolina
            </h3>
            <p className="font-body-md text-body-md text-text-light">
              Naš tim je fokusiran na grad Suboticu i bližu okolinu, što
              omogućava brzu reakciju i efikasan rad.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* 4. Services Section */}
      <SectionContainer className="bg-dark-primary">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label-caps text-label-caps text-gold-primary tracking-[0.15em]">
              Naše Usluge
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white mt-2">
              Sve za Vaš Enterijer
            </h2>
          </div>
          <Link
            href="/usluge"
            className="hidden md:flex items-center gap-2 font-headline-md text-headline-md text-gold-primary hover:text-gold-accent transition-colors"
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

      {/* 5. Proces Rada — NEW BLOCK */}
      <section className="py-16 md:py-24 bg-dark-graphite relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-gold-primary to-transparent" />
        </div>
        <div className="max-w-container-max mx-auto px-4 md:px-gutter relative z-10">
          <SectionTitle
            title="Kako Radimo?"
            subtitle="Proces rada od konstrukcije do završnog izgleda — četiri koraka do savršenog enterijera."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-dark-surface border border-outline-variant p-6 h-full hover:border-gold-primary/50 transition-all duration-300">
                  {/* Step number */}
                  <span className="font-headline-xl text-5xl md:text-6xl font-black text-gold-primary/10 absolute top-2 right-4 select-none">
                    {step.step}
                  </span>
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gold-primary/10 flex items-center justify-center mb-6 group-hover:bg-gold-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-gold-primary" />
                  </div>
                  {/* Content */}
                  <h3 className="font-headline-md text-headline-md text-white mb-3 relative z-10">
                    {step.title}
                  </h3>
                  <p className="font-body-md text-body-md text-text-light relative z-10">
                    {step.description}
                  </p>
                </div>
                {/* Connector line (desktop) */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gold-primary/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Portfolio: Pre i Posle */}
      <SectionContainer className="bg-dark-primary">
        <SectionTitle
          title="Portfolio: Pre i Posle"
          subtitle="Pogledajte transformaciju prostora kroz naše faze rada — od grubih konstrukcija do finalnog rezultata."
        />
        <div className="space-y-12">
          {portfolioPairs.map((pair) => (
            <div
              key={pair.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-gutter group"
            >
              <div className="relative overflow-hidden border border-outline-variant">
                <img
                  src={pair.before.image}
                  alt={pair.before.label}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-dark-primary/80 text-white px-3 py-1 font-label-caps text-xs border-l-2 border-gold-primary">
                  {pair.before.label}
                </div>
              </div>
              <div className="relative overflow-hidden border border-outline-variant">
                <img
                  src={pair.after.image}
                  alt={pair.after.label}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-gold-primary text-dark-primary px-3 py-1 font-label-caps text-xs">
                  {pair.after.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="bg-gold-primary text-dark-primary px-8 py-4 rounded-sm font-bold inline-block hover:bg-gold-accent transition-all"
          >
            Pogledajte Sve Radove
          </Link>
        </div>
      </SectionContainer>

      {/* 7. Technical Specs */}
      <SectionContainer className="bg-dark-graphite">
        <SectionTitle
          title="Tehničke Specifikacije i Standardi"
          subtitle="Transparentnost u svakom segmentu našeg poslovanja."
        />
        <TechnicalSpecsTable specs={technicalSpecs} />
      </SectionContainer>

      {/* 8. CTA Banner */}
      <section className="py-16 md:py-24 bg-dark-primary relative overflow-hidden border-t border-gold-primary/20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-primary to-transparent" />
        </div>
        <div className="max-w-container-max mx-auto px-4 md:px-gutter relative z-10 text-center">
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-white mb-8">
            Spremni da započnete renoviranje?
          </h2>
          <div className="mb-12">
            <a
              className="font-headline-xl text-headline-xl text-gold-primary hover:text-gold-accent transition-colors block"
              href={`tel:${siteConfig.phoneRaw}`}
            >
              {siteConfig.phone}
            </a>
            <p className="font-label text-label text-text-muted mt-2">
              {siteConfig.workingHours.banner}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              className="bg-gold-primary text-dark-primary px-10 py-4 rounded-sm font-bold font-headline-md flex items-center gap-3 hover:bg-gold-accent transition-all"
              href={`tel:${siteConfig.phoneRaw}`}
            >
              <Phone className="w-5 h-5" />
              Pozovite odmah
            </a>
            <a
              className="bg-dark-surface text-white px-10 py-4 rounded-sm font-bold font-headline-md flex items-center gap-3 border border-outline-variant hover:border-gold-primary/50 transition-all"
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
