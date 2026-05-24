import type { Metadata } from 'next';
import SectionContainer from '@/components/SectionContainer';
import { Star, Quote, Building2, Sparkles, Clock, Calendar } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'O nama | Saša Gabrić — SG Gipsarko Subotica',
  description:
    'Decenija iskustva u gipsarskim i molerskim radovima. Osnivač Saša Gabrić i tim Gipsarka.',
};

export default function ONama() {
  return (
    <>
      {/* Hero Section: The Founder Story */}
      <SectionContainer className="flex flex-col gap-8 bg-dark-primary">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-white mb-6 leading-tight">
            Saša Gabrić — majstor za gips i molerske radove
          </h1>
          <div className="space-y-6 font-body-lg text-body-lg text-text-light">
            <p>
              Saša Gabrić je majstor sa 9 godina iskustva u radu sa gips-kartonom, spuštenim plafonima, pregradnim zidovima i molerskim radovima. Njegov pristup se zasniva na jasnom dogovoru, preciznoj izvedbi, urednom radu i poštovanju rokova.
            </p>
            <p>
              Bilo da je potrebno uraditi gipsane ploče, rigips konstrukciju, spušteni plafon, pregradni zid ili završno krečenje, Saša svakom prostoru pristupa pažljivo — od pripreme do završnog izgleda.
            </p>
            <p>
              Cilj je da prostor bude ravan, čist, funkcionalan i estetski sređen, bez nepotrebnog komplikovanja i bez skrivenih troškova. Klijent dobija majstora koji zna svoj posao, poštuje dogovor i radi tako da se rezultat vidi odmah.
            </p>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto relative">
          <div className="border border-outline-variant overflow-hidden">
            <img
              alt="Saša Gabrić na radu"
              className="w-full hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4uv6tXyXLZ3XB0cPaU4mPBMChxdAUNic6-P-TmisnMb0f4Nx0_xaJ4WtDJZ7GqPrVsttbboLEYF_Z9O2YDFK0FhZY1vDY4-V9uDZGsfxukQLWqr7nR2at28zY-Yiq_xbMGVbS8Ca5k81RPblVRAjBrXS6cns5YJIJZL6O0EYs1TyrJ6_4dMfn6oamPLiYd-bVq5igSV9q0TjJ0uJVQ9-630P4Mja0QuUOehsi4_WLoAd6vy64n1_KDxnFDZiGiUrgZxnQrqY2qpY"
            />
          </div>
          <div className="absolute -bottom-6 right-6 bg-dark-graphite text-white p-6 max-w-xs shadow-xl border-l-2 border-gold-primary">
            <p className="font-body-md text-body-md italic text-text-light">
              &quot;U poslu molera, jedina granica je milimetar. Ako on nije savršen, posao nije završen.&quot;
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Stats Bar */}
      <section className="bg-dark-primary border-y border-outline-variant/30 py-8">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          <div className="border-r border-outline-variant last:border-0">
            <div className="font-headline-xl text-headline-xl text-gold-primary">9+</div>
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

      {/* Testimonials Bento Grid */}
      <SectionContainer className="bg-dark-primary">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label text-label text-gold-primary mb-4 block tracking-[0.15em]">RECENZIJE</span>
            <h2 className="font-headline-lg text-headline-lg text-white">Šta klijenti kažu o nama</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Featured Testimonial */}
          <div className="md:col-span-2 bg-dark-graphite border border-outline-variant p-6 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              <img
                alt="Moderni enterijer"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNeslVgNeeWOhC3HsVprx0xwhqM1GuNClzCUwFZsDFjizpN-50nF7ochU6K5pBItvHc2zLjYxpds5KZefs-HjE_n5EbolQ2Z3CUeCxZNOGWZRmZFJTsdVq0np9C9oVF-aEbRMlW3rPU2JWP9nmJFqQW0dg6nvy3P-_QX3KdW-Was1NyVAByzAPbXb_qqidCit-6N4KXJPhW7OMLW3qkcNQQ135KctPbhw-rymTL--F-7ErMbYYobkkA-ePG2R-Y1wlutwaaZ2tfJA"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-between">
              <div>
                <div className="flex text-gold-primary mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="font-body-lg text-body-lg text-text-light italic mb-6">
                  &quot;Angažovali smo Sašu za kompletnu adaptaciju potkrovlja. Preciznost kojom su montirani gipsani profili je neverovatna. Nema nijednog spoja koji se primećuje pod reflektorima. Izuzetno čisto i profesionalno.&quot;
                </p>
              </div>
              <div>
                <p className="font-headline-md text-headline-md text-gold-primary">Marko Jovanović</p>
                <p className="font-label text-label text-text-muted">VLASNIK VILE, BEOGRAD</p>
              </div>
            </div>
          </div>

          {/* Small Testimonial 1 */}
          <div className="bg-dark-surface border border-outline-variant p-6 flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-gold-primary mb-4" />
              <p className="font-body-md text-body-md text-text-light mb-6">
                &quot;Najčistiji moleri sa kojima sam ikada radila. Zaštitili su svaki komad nameštaja i ostavili stan blistavim.&quot;
              </p>
            </div>
            <div>
              <p className="font-headline-md text-headline-md text-gold-primary">Jelena Kostić</p>
              <p className="font-label text-label text-text-muted">DIZAJNER ENTERIJERA</p>
            </div>
          </div>

          {/* Small Testimonial 2 */}
          <div className="bg-dark-primary p-6 text-white border border-gold-primary/20 flex flex-col justify-between">
            <div>
              <div className="bg-gold-primary w-8 h-1 mb-6"></div>
              <p className="font-body-md text-body-md text-text-light mb-6">
                &quot;Brzina i poštovanje rokova su za svaku pohvalu. Gipsani radovi u našoj novoj kancelariji su gotovi pre termina.&quot;
              </p>
            </div>
            <div>
              <p className="font-headline-md text-headline-md text-gold-primary">Luka Babić</p>
              <p className="font-label text-label text-text-muted">TECH SOLUTIONS DOO</p>
            </div>
          </div>

          {/* Medium Testimonial */}
          <div className="md:col-span-2 bg-dark-graphite border border-outline-variant p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-center">
              <p className="font-body-lg text-body-lg text-text-light italic">
                &quot;Kada kažem molerski radovi, od sada mislim samo na Gipsarka. Saša ima neverovatno oko za detalje koje retko koji majstor danas poseduje.&quot;
              </p>
              <div className="mt-6">
                <p className="font-headline-md text-headline-md text-gold-primary">Nikola Stanković</p>
                <p className="font-label text-label text-text-muted">RESTORAN &apos;CENTAR&apos;</p>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                alt="Komercijalni prostor"
                className="w-full h-48 object-cover border border-outline-variant"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGQ9GY5qggqkQ4K8rWqLuJNHsnksMOTFv_L_V0J2Yl2BzWxojYGzMRojA-n0DaHbBrR___t5UMikymTDns-eYW0ktQNabWe6RiRz_fHA6EKU-zvVKrBeIG97Ie1K-bSBskkNXT_DlGloD2Dxl6b9ykvWgN0x709sORzCvt9K92CR8EHXsy35798bvLskxg7IkUs14-GQKZ4m4vR7TDu5DlvEzGYd8Kf_5MDoR8IKGkUm9HBTeJENev83ZR1U5Xqcbt6n82YcnZP-c"
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Values Spec Sheet */}
      <SectionContainer className="bg-dark-primary">
        <div className="text-center mb-6">
          <h2 className="font-headline-lg text-headline-lg text-white">Naši Standardi Rada</h2>
        </div>
        <div className="border border-outline-variant overflow-hidden">
          <div className="grid grid-cols-2 bg-dark-primary text-white p-4 font-label text-label border-b border-gold-primary/30">
            <div className="px-6 uppercase">VREDNOST</div>
            <div className="px-6 uppercase">NAŠ PRISTUP</div>
          </div>
          <div className="grid grid-cols-2 bg-dark-graphite p-6 border-b border-outline-variant items-center">
            <div className="font-headline-md text-headline-md flex items-center gap-4 text-white">
              <Building2 className="w-6 h-6 text-gold-primary" />
              Preciznost
            </div>
            <div className="font-body-md text-body-md text-text-light">Odstupanje manje od 1mm na 3 metra gipsanog profila.</div>
          </div>
          <div className="grid grid-cols-2 bg-dark-surface p-6 border-b border-outline-variant items-center">
            <div className="font-headline-md text-headline-md flex items-center gap-4 text-white">
              <Sparkles className="w-6 h-6 text-gold-primary" />
              Čistoća
            </div>
            <div className="font-body-md text-body-md text-text-light">Industrijsko usisavanje tokom šmirglanja za prostor bez prašine.</div>
          </div>
          <div className="grid grid-cols-2 bg-dark-graphite p-6 border-b border-outline-variant items-center">
            <div className="font-headline-md text-headline-md flex items-center gap-4 text-white">
              <Clock className="w-6 h-6 text-gold-primary" />
              Rokovi
            </div>
            <div className="font-body-md text-body-md text-text-light">Poštovanje dogovorenih termina bez izuzetaka.</div>
          </div>
          <div className="grid grid-cols-2 bg-dark-surface p-6 items-center">
            <div className="font-headline-md text-headline-md flex items-center gap-4 text-white">
              <Calendar className="w-6 h-6 text-gold-primary" />
              Radno Vreme
            </div>
            <div className="font-body-md text-body-md text-text-light">Dostupni smo radnim danima od {siteConfig.workingHours.weekday}.</div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
