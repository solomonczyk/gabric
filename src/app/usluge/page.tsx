import SectionContainer from '@/components/SectionContainer';
import { Construction, Building, CheckCircle2 } from 'lucide-react';

export default function Usluge() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-deep-slate overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            alt="Professional plastering work"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnp0yYl1SKEZmXX7Cv9TeNtrXr0MgWgeHVyMhEWj6F1KXh35PvlxAY376OUxOxmVgWauEgosdzrQlMl7Gq8sHvYR5Ks4Be4THDskHTVP-Zvf3HVEfHZdwnN1Vl4tJvAAerF-9nvKU20vKCEs1dtS5KzSV8iUpfEFf6Ubtbe4QbJ5qAslThUAJSfRjXIrdlViYJ5L9fg57MrzH8i90WT-lEZf1jtZWAMpDXs09JeeDcvyfH5ErewVZRgNHK17CUSHLH-Hqjo6F-oZI"
          />
        </div>
        <div className="relative z-10 text-center text-plaster-white max-w-container-max px-gutter">
          <span className="font-label text-label text-construction-amber uppercase mb-4 block">Naša stručnost</span>
          <h1 className="font-headline-xl text-headline-xl mb-6">Profesionalne usluge za Vaš enterijer</h1>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto opacity-90">
            Od grubih gipsarskih radova do najfinijih molerskih tehnika, pretvaramo Vaš prostor u funkcionalno okruženje.
          </p>
        </div>
      </section>

      {/* Services Grid - Alternating Layout */}
      <SectionContainer className="space-y-32">
        {/* Service 1: Gipsarski radovi */}
        <div className="flex flex-col md:flex-row gap-gutter items-center">
          <div className="w-full md:w-1/2">
            <img
              className="w-full aspect-[4/3] object-cover border border-concrete-grey shadow-sm"
              alt="Gipsarski radovi"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNdJeMIyoBtTSH_Icr4hzlakISOecSIMD3OCZO0oxeXtklr-PzL-NJvI3AwMf0l7fKVrVbe8pYukH2k6Uhys7ldDx4QmtSHxQ2uCoXQT83clyDJGhNpxbw6t7RMJQnncXirGy-JQcxkKYaRCeXjP0bPjEgWafriUw82UtAyQ15jhHIWwxqTWvsErfSHvb8GnlZ9B-uaDBvrS39-bFAKZv_53MOmBqQGTASBJnry03TiKtb0HDwZGV_x6w0HoLxYeYmx8DOOTrDPcM"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-2">
              <Construction className="w-6 h-6 text-construction-amber" />
              <h2 className="font-headline-lg text-headline-lg">Gipsarski radovi</h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Specijalizovani smo za sve vrste gipsarskih radova, pružajući stručna rešenja za preoblikovanje vašeg prostora. Naš pristup kombinuje tehničku preciznost i estetsku funkcionalnost.
            </p>
            <div className="bg-surface-container-low p-6 border-l-4 border-construction-amber">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body-md">Izrada spuštenih plafona svih nivoa</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body-md">Oblaganje zidova (suvo malterisanje)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body-md">Sve vrste gipsarskih elemenata</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-4 items-center">
              <span className="font-label text-label bg-concrete-grey px-3 py-1">MATERIJAL: KNAUF / RIGIPS</span>
            </div>
          </div>
        </div>

        {/* Service 2: Rigips konstrukcije (Reversed) */}
        <div className="flex flex-col md:flex-row-reverse gap-gutter items-center">
          <div className="w-full md:w-1/2">
            <img
              className="w-full aspect-[4/3] object-cover border border-concrete-grey shadow-sm"
              alt="Rigips konstrukcije"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF6whdPEvjWJYNsYA3VqmzgiIfZqiLMlSllBr4ewtxKyhporhGdBLLGOWxkpRtDL15CytfYGjoSpQh4PlqXPrcM3vgC3xCYW_maMf654PpFFiTn4nO1SQGAlxPfcMndeQNVTtIZOGsVUDH5mulAppD-Om5GaS63_Kf44dtJiDqRfGp8so5Pv21D6Fv8T8o4GMFp38LtPP0--USrDvjscigAUJTLENYh14fUANJCOBNu-gYHHjvVGGmm1Lnlq3d-MVo2WQfO5iZqKc"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-2">
              <Building className="w-6 h-6 text-construction-amber" />
              <h2 className="font-headline-lg text-headline-lg">Rigips konstrukcije</h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Precizno projektovane metalne konstrukcije za pregradne zidove i specifične arhitektonske forme. Naše konstrukcije garantuju stabilnost i vrhunsku zvučnu izolaciju.
            </p>
            <div className="bg-surface-container-low p-6 border-l-4 border-construction-amber">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body-md">Pregradni zidovi sa termo i zvučnom izolacijom</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body-md">Skrivači svetla i kaskadni plafoni</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body-md">Izrada lukova i specifičnih formi</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-4 items-center">
              <span className="font-label text-label bg-concrete-grey px-3 py-1">PROFILI: POCINKOVANI ČELIK</span>
            </div>
          </div>
        </div>

        {/* Service 3: Molerski radovi */}
        <div className="flex flex-col md:flex-row gap-gutter items-center">
          <div className="w-full md:w-1/2">
            <img
              className="w-full aspect-[4/3] object-cover border border-concrete-grey shadow-sm"
              alt="Molerski radovi"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-l3XBxbK3dFHylkS4zxa6469k4OL7M5-kpM3T1H-iC2zfR8N2rcUerZ0-Kg4eWHGEAwz4wWUFAChc1Uws8RS-4gtWZZrryqQ7GngjQDG2ADQr83wueSS8eLE73XgBLVilOLhyseYDtkekP4oShN-3jfc_ynLTSkWmzBWE_LZdVTTXANju-yGFIpTfuN2JJH7ygP9UAXGmIlXpdV6crAFjsoJnp2p3HKJJIDYT4210MQGN-CQmtifUsBEuPEnVWQG7Nf5qOqyc048"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-2">
              <Construction className="w-6 h-6 text-construction-amber" />
              <h2 className="font-headline-lg text-headline-lg">Molerski radovi</h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Završni molerski radovi koji daju vašem prostoru karakter i stil. Od fino gletovanja do dekorativnih tehnika, svaki detalj je pažljivo izveden.
            </p>
            <div className="bg-surface-container-low p-6 border-l-4 border-construction-amber">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body-md">Fino gletovanje i priprema za krečenje</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body-md">Krečenje svih vrsta boja i tehnika</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body-md">Dekorativne tehnike (venecijanka, stucco)</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-4 items-center">
              <span className="font-label text-label bg-concrete-grey px-3 py-1">BOJE: JUB / CAPAROL</span>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Geography Section */}
      <SectionContainer className="bg-surface-container-low">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg mb-6">Područje rada</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Naš tim je mobilan i spreman da odgovori na vaše potrebe širom Subotice i okoline. Brzo dolazimo na teren i pružamo profesionalnu procenu i izvođenje radova.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 border border-concrete-grey text-center">
              <span className="font-headline-md text-headline-md text-primary">Subotica</span>
            </div>
            <div className="bg-white p-4 border border-concrete-grey text-center">
              <span className="font-headline-md text-headline-md text-primary">Palić</span>
            </div>
            <div className="bg-white p-4 border border-concrete-grey text-center">
              <span className="font-headline-md text-headline-md text-primary">Bački Vinogradi</span>
            </div>
            <div className="bg-white p-4 border border-concrete-grey text-center">
              <span className="font-headline-md text-headline-md text-primary">Okolina</span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
