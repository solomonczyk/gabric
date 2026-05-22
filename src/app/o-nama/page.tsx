import SectionContainer from '@/components/SectionContainer';
import { Star, Quote, Building2, Sparkles, Clock, Calendar, Phone, Mail, MapPin } from 'lucide-react';

export default function ONama() {
  return (
    <>
      {/* Hero Section: The Founder Story */}
      <SectionContainer className="flex flex-col md:flex-row gap-section-padding items-center">
        <div className="w-full md:w-1/2">
          <span className="font-label text-label text-construction-amber mb-4 block">OSNIVAČ I MAJSTOR</span>
          <h1 className="font-headline-xl text-headline-xl text-primary mb-6 leading-tight">
            Decenija Preciznosti: <br/>Saša Gabrić
          </h1>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              Gipsarko nije samo ime firme, to je obećanje kvaliteta koje lično potpisujem od 2014. godine. Moja vizija je bila jednostavna: doneti industrijski standard preciznosti u svaki dom i poslovni prostor u Srbiji.
            </p>
            <p>
              Specijalizovan za gipsarske radove i moleraj visoke završne obrade, moj pristup se zasniva na "dust-free" tehnologiji i matematičkoj tačnosti. Svaki zid koji obradimo je platno za vaš budući život ili rad.
            </p>
            <div className="pt-4">
              <img
                alt="Potpis Saše Gabrića"
                className="h-16 opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYmlINUdRVnvFstY1XSj2eRnKMsfv6Na6h5L-d_pVwxviiDmFv2k7283KNNmC21RPJ4zqZ4TSccWuinn4eFOkwU-ucjQaAWhNgUZPCpjOe9rjm7DxSSzA9iZ6a9h2EJH8tYPjP_nxtm2W7LcVVJb5b7GnTjDqTD3CcgTOk5MAQZgLhD5RClxwWTZt0B_0ZxL5IPCEpqA_CnvlFtTqUgK5ZTocXuhixNe0ZgnC7R1B7Z05Wbrf03um1dEbmu1qOOup8EqM8X_NaViE"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-construction-amber z-0"></div>
          <div className="relative z-10 border border-concrete-grey overflow-hidden">
            <img
              alt="Saša Gabrić na radu"
              className="w-full hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4uv6tXyXLZ3XB0cPaU4mPBMChxdAUNic6-P-TmisnMb0f4Nx0_xaJ4WtDJZ7GqPrVsttbboLEYF_Z9O2YDFK0FhZY1vDY4-V9uDZGsfxukQLWqr7nR2at28zY-Yiq_xbMGVbS8Ca5k81RPblVRAjBrXS6cns5YJIJZL6O0EYs1TyrJ6_4dMfn6oamPLiYd-bVq5igSV9q0TjJ0uJVQ9-630P4Mja0QuUOehsi4_WLoAd6vy64n1_KDxnFDZiGiUrgZxnQrqY2qpY"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-deep-slate text-plaster-white p-6 max-w-xs shadow-xl">
            <p className="font-body-md text-body-md italic text-concrete-grey">
              "U poslu molera, jedina granica je milimetar. Ako on nije savršen, posao nije završen."
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Stats Bar */}
      <section className="bg-deep-slate py-8">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="border-r border-concrete-grey last:border-0">
            <div className="font-headline-xl text-headline-xl text-construction-amber">10+</div>
            <div className="font-label text-label text-concrete-grey">GODINA ISKUSTVA</div>
          </div>
          <div className="border-r border-concrete-grey last:border-0">
            <div className="font-headline-xl text-headline-xl text-construction-amber">200+</div>
            <div className="font-label text-label text-concrete-grey">USPEŠNIH PROJEKATA</div>
          </div>
          <div className="border-r border-concrete-grey last:border-0">
            <div className="font-headline-xl text-headline-xl text-construction-amber">15k</div>
            <div className="font-label text-label text-concrete-grey">KVADRATA GIPSA</div>
          </div>
          <div>
            <div className="font-headline-xl text-headline-xl text-construction-amber">100%</div>
            <div className="font-label text-label text-concrete-grey">ZADOVOLJNIH KLIJENATA</div>
          </div>
        </div>
      </section>

      {/* Testimonials Bento Grid */}
      <SectionContainer>
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label text-label text-construction-amber mb-4 block">RECENZIJE</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Šta klijenti kažu o nama</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Featured Testimonial */}
          <div className="md:col-span-2 bg-surface-container-low border border-concrete-grey p-6 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              <img
                alt="Moderni enterijer"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNeslVgNeeWOhC3HsVprx0xwhqM1GuNClzCUwFZsDFjizpN-50nF7ochU6K5pBItvHc2zLjYxpds5KZefs-HjE_n5EbolQ2Z3CUeCxZNOGWZRmZFJTsdVq0np9C9oVF-aEbRMlW3rPU2JWP9nmJFqQW0dg6nvy3P-_QX3KdW-Was1NyVAByzAPbXb_qqidCit-6N4KXJPhW7OMLW3qkcNQQ135KctPbhw-rymTL--F-7ErMbYYobkkA-ePG2R-Y1wlutwaaZ2tfJA"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-between">
              <div>
                <div className="flex text-construction-amber mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant italic mb-6">
                  "Angažovali smo Sašu za kompletnu adaptaciju potkrovlja. Preciznost kojom su montirani gipsani profili je neverovatna. Nema nijednog spoja koji se primećuje pod reflektorima. Izuzetno čisto i profesionalno."
                </p>
              </div>
              <div>
                <p className="font-headline-md text-headline-md text-primary">Marko Jovanović</p>
                <p className="font-label text-label text-on-surface-variant">VLASNIK VILE, BEOGRAD</p>
              </div>
            </div>
          </div>

          {/* Small Testimonial 1 */}
          <div className="bg-plaster-white border border-concrete-grey p-6 flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-construction-amber mb-4" />
              <p className="font-body-md text-body-md text-on-surface mb-6">
                "Najčistiji moleri sa kojima sam ikada radila. Zaštitili su svaki komad nameštaja i ostavili stan blistavim."
              </p>
            </div>
            <div>
              <p className="font-headline-md text-headline-md text-primary">Jelena Kostić</p>
              <p className="font-label text-label text-on-surface-variant">DIZAJNER ENTERIJERA</p>
            </div>
          </div>

          {/* Small Testimonial 2 */}
          <div className="bg-deep-slate p-6 text-plaster-white flex flex-col justify-between">
            <div>
              <div className="bg-construction-amber w-8 h-1 mb-6"></div>
              <p className="font-body-md text-body-md text-concrete-grey mb-6">
                "Brzina i poštovanje rokova su za svaku pohvalu. Gipsani radovi u našoj novoj kancelariji su gotovi pre termina."
              </p>
            </div>
            <div>
              <p className="font-headline-md text-headline-md text-construction-amber">Luka Babić</p>
              <p className="font-label text-label text-outline-variant">TECH SOLUTIONS DOO</p>
            </div>
          </div>

          {/* Medium Testimonial */}
          <div className="md:col-span-2 bg-surface-container border border-concrete-grey p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-center">
              <p className="font-body-lg text-body-lg text-on-surface-variant italic">
                "Kada kažem molerski radovi, od sada mislim samo na Gipsarka. Saša ima neverovatno oko za detalje koje retko koji majstor danas poseduje."
              </p>
              <div className="mt-6">
                <p className="font-headline-md text-headline-md text-primary">Nikola Stanković</p>
                <p className="font-label text-label text-on-surface-variant">RESTORAN 'CENTAR'</p>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                alt="Komercijalni prostor"
                className="w-full h-48 object-cover border border-concrete-grey"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGQ9GY5qggqkQ4K8rWqLuJNHsnksMOTFv_L_V0J2Yl2BzWxojYGzMRojA-n0DaHbBrR___t5UMikymTDns-eYW0ktQNabWe6RiRz_fHA6EKU-zvVKrBeIG97Ie1K-bSBskkNXT_DlGloD2Dxl6b9ykvWgN0x709sORzCvt9K92CR8EHXsy35798bvLskxg7IkUs14-GQKZ4m4vR7TDu5DlvEzGYd8Kf_5MDoR8IKGkUm9HBTeJENev83ZR1U5Xqcbt6n82YcnZP-c"
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Values Spec Sheet */}
      <SectionContainer>
        <div className="text-center mb-6">
          <h2 className="font-headline-lg text-headline-lg text-primary">Naši Standardi Rada</h2>
        </div>
        <div className="border border-concrete-grey overflow-hidden">
          <div className="grid grid-cols-2 bg-deep-slate text-plaster-white p-4 font-label text-label">
            <div className="px-6 uppercase">VREDNOST</div>
            <div className="px-6 uppercase">NAŠ PRISTUP</div>
          </div>
          <div className="grid grid-cols-2 bg-plaster-white p-6 border-b border-concrete-grey items-center">
            <div className="font-headline-md text-headline-md flex items-center gap-4">
              <Building2 className="w-6 h-6 text-construction-amber" />
              Preciznost
            </div>
            <div className="font-body-md text-body-md text-on-surface-variant">Odstupanje manje od 1mm na 3 metra gipsanog profila.</div>
          </div>
          <div className="grid grid-cols-2 bg-surface-container-low p-6 border-b border-concrete-grey items-center">
            <div className="font-headline-md text-headline-md flex items-center gap-4">
              <Sparkles className="w-6 h-6 text-construction-amber" />
              Čistoća
            </div>
            <div className="font-body-md text-body-md text-on-surface-variant">Industrijsko usisavanje tokom šmirglanja za prostor bez prašine.</div>
          </div>
          <div className="grid grid-cols-2 bg-plaster-white p-6 border-b border-concrete-grey items-center">
            <div className="font-headline-md text-headline-md flex items-center gap-4">
              <Clock className="w-6 h-6 text-construction-amber" />
              Rokovi
            </div>
            <div className="font-body-md text-body-md text-on-surface-variant">Poštovanje dogovorenih termina bez izuzetaka.</div>
          </div>
          <div className="grid grid-cols-2 bg-surface-container-low p-6 items-center">
            <div className="font-headline-md text-headline-md flex items-center gap-4">
              <Calendar className="w-6 h-6 text-construction-amber" />
              Radno Vreme
            </div>
            <div className="font-body-md text-body-md text-on-surface-variant">Dostupni smo radnim danima od 07:00 do 17:00.</div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
