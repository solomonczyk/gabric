import SectionContainer from '@/components/SectionContainer';
import Button from '@/components/Button';
import { History, Calendar, Wallet, Shield, FileText, MapPin, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[795px] min-h-[600px] flex items-center overflow-hidden bg-deep-slate">
        <img
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAALIKIhBPqV2ilM0jpkOxOQaIncp8ABTKug_AbiaxW14Jp2MvoYJQeS7x030zl8lh-kog7GVaGGt5yvqKZYocFVvBWSMS-XRXaxUTxsf893RYr5-xagaIP0AOWhkRwXIVOMLvf62B85gsFcCamalauGduGMAlyYk7QBjRQKAZ3HjrSoG1zvurcg96EsWIg34lsc3i7mMKNO5dJkfPQK4hwzuhvrZoi6MYc9vgJDmmNP8vbFojaJjDDePLzFEzhoJXy9__t3ZM6ZdM"
        />
        <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
          <div className="max-w-2xl">
            <h1 className="font-headline-xl text-headline-xl text-white mb-6 md:text-headline-xl-mobile">
              Gipsarski i molerski radovi u Subotici i okolini
            </h1>
            <p className="font-body-lg text-body-lg text-concrete-grey mb-8">
              Montaža pregrada, spuštenih plafona, rigips konstrukcija i završnih molerskih radova — kvalitetno i povoljno.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Zatražite ponudu</Button>
              <button className="border-2 border-white text-white px-8 py-4 rounded font-bold font-headline-md hover:bg-white/10 transition-colors">
                Pogledajte radove
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-construction-amber"></div>
      </section>

      {/* Why Us Section */}
      <SectionContainer className="bg-plaster-white">
        <div className="mb-12 border-l-4 border-construction-amber pl-6">
          <span className="font-label text-label text-primary uppercase">Profesionalizam na delu</span>
          <h2 className="font-headline-lg text-headline-lg mt-2">Zašto izabrati nas?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 border border-concrete-grey hover:border-deep-slate transition-colors group">
            <History className="w-10 h-10 text-construction-amber mb-4" />
            <h3 className="font-headline-md text-headline-md mb-2">10+ Godina Iskustva</h3>
            <p className="text-on-surface-variant">Decenija rada na najzahtevnijim projektima u Subotici i okolini garantuje vrhunsku izradu.</p>
          </div>
          <div className="p-8 border border-concrete-grey hover:border-deep-slate transition-colors group">
            <Calendar className="w-10 h-10 text-construction-amber mb-4" />
            <h3 className="font-headline-md text-headline-md mb-2">Garantovani Rokovi</h3>
            <p className="text-on-surface-variant">Poštujemo dogovorene termine bez izuzetaka. Vaše vreme je za nas prioritet broj jedan.</p>
          </div>
          <div className="p-8 border border-concrete-grey hover:border-deep-slate transition-colors group">
            <Wallet className="w-10 h-10 text-construction-amber mb-4" />
            <h3 className="font-headline-md text-headline-md mb-2">Bez Skrivenih Troškova</h3>
            <p className="text-on-surface-variant">Transparentne ponude koje se ne menjaju tokom procesa. Sve je jasno od samog početka.</p>
          </div>
          <div className="p-8 border border-concrete-grey hover:border-deep-slate transition-colors group">
            <Shield className="w-10 h-10 text-construction-amber mb-4" />
            <h3 className="font-headline-md text-headline-md mb-2">Kvalitetni Materijali</h3>
            <p className="text-on-surface-variant">Koristimo isključivo sertifikovane Knauf i Rigips sisteme za maksimalnu dugotrajnost.</p>
          </div>
          <div className="p-8 border border-concrete-grey hover:border-deep-slate transition-colors group">
            <FileText className="w-10 h-10 text-construction-amber mb-4" />
            <h3 className="font-headline-md text-headline-md mb-2">Besplatna Procena</h3>
            <p className="text-on-surface-variant">Dolazimo na vašu adresu, vršimo merenje i dajemo ponudu potpuno besplatno.</p>
          </div>
          <div className="p-8 border border-concrete-grey hover:border-deep-slate transition-colors group">
            <MapPin className="w-10 h-10 text-construction-amber mb-4" />
            <h3 className="font-headline-md text-headline-md mb-2">Subotica i Okolina</h3>
            <p className="text-on-surface-variant">Pokrivamo celu teritoriju Subotice, Palića i okolnih naselja brzo i efikasno.</p>
          </div>
        </div>
      </SectionContainer>

      {/* Services Overview */}
      <SectionContainer className="bg-surface-container-low">
        <h2 className="font-headline-lg text-headline-lg text-center mb-12">Naše Ključne Usluge</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-white border border-concrete-grey overflow-hidden group">
            <div className="h-64 overflow-hidden">
              <img
                alt="Gipsarski radovi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjvdZaOFhEaLU4tC9fkmKKjSME87yNJt0kPxEZYwv1s-D8UThISjTVjjseojnFwilWgLtNPCK18z47bdAMZhDDW-CEjkEDCxK1mo1akAqGDRlpMmSh_Yu0iReckILqvkji5QtNSTdaYB2kuDryoAW8VTCm9Wr8DZx6Hk8kg5Z9TiixOQZeZNKSHFrFRaOtFwOqHj9F6ky9UL3OL67KoRanUEcETE3BlLwQG2abCjAf_QbkK5etO0FSwZzM1a6hDGxbMjLV_SJBzjc"
              />
            </div>
            <div className="p-8">
              <h3 className="font-headline-md text-headline-md mb-4">Gipsarski radovi</h3>
              <p className="text-on-surface-variant mb-6">Izrada spuštenih plafona sa integrisanom rasvetom, oblaganje zidova i dekorativni elementi.</p>
              <Link href="/usluge" className="font-label text-label text-primary flex items-center gap-2 group/link">
                SAZNAJTE VIŠE
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="bg-white border border-concrete-grey overflow-hidden group">
            <div className="h-64 overflow-hidden">
              <img
                alt="Rigips konstrukcije"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBSFFEiuBJrRMglqWD180W8gBDzXdPlZ2QPFHsjhEq3Iy0kWQGYeaH0al46hrV5WU98200mjSAlf9nTy3bUbnLK-img4EYbxebAxzNWVNFvq8-_xXHQOx9cYE2SG_WTtjhnym7HLS1l2YmkFOXPM2ZTfiD5pEPhcDd_zIfG218HpvE9rGgoZc3WUzviO_WKnxJS6E89D7RWIUUfkM22GdeGZRj31NQaFlz0svrmrsX8xVq9HN1HjrxVxKObGNlHhb_ipVxpjfMXPQ"
              />
            </div>
            <div className="p-8">
              <h3 className="font-headline-md text-headline-md mb-4">Rigips konstrukcije</h3>
              <p className="text-on-surface-variant mb-6">Brza i precizna montaža pregradnih zidova i termoizolacionih sistema za vaš dom ili kancelariju.</p>
              <Link href="/usluge" className="font-label text-label text-primary flex items-center gap-2 group/link">
                SAZNAJTE VIŠE
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="bg-white border border-concrete-grey overflow-hidden group">
            <div className="h-64 overflow-hidden">
              <img
                alt="Molerski radovi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-l3XBxbK3dFHylkS4zxa6469k4OL7M5-kpM3T1H-iC2zfR8N2rcUerZ0-Kg4eWHGEAwz4wWUFAChc1Uws8RS-4gtWZZrryqQ7GngjQDG2ADQr83wueSS8eLE73XgBLVilOLhyseYDtkekP4oShN-3jfc_ynLTSkWmzBWE_LZdVTTXANju-yGFIpTfuN2JJH7ygP9UAXGmIlXpdV6crAFjsoJnp2p3HKJJIDYT4210MQGN-CQmtifUsBEuPEnVWQG7Nf5qOqyc048"
              />
            </div>
            <div className="p-8">
              <h3 className="font-headline-md text-headline-md mb-4">Molerski radovi</h3>
              <p className="text-on-surface-variant mb-6">Gletovanje, krečenje i nanošenje dekorativnih tehnika uz maksimalnu čistoću i pažnju na detalje.</p>
              <Link href="/usluge" className="font-label text-label text-primary flex items-center gap-2 group/link">
                SAZNAJTE VIŠE
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Process Section */}
      <section className="py-section-padding bg-deep-slate text-white overflow-hidden relative">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="font-label text-label text-construction-amber uppercase">Kako radimo</span>
            <h2 className="font-headline-lg text-headline-lg mt-4">Od ideje do gotovog projekta u 4 koraka</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-base relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-white/10 z-0"></div>
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 bg-construction-amber text-deep-slate rounded-full flex items-center justify-center mx-auto mb-6 font-headline-lg text-headline-lg shadow-lg">01</div>
              <h4 className="font-headline-md text-headline-md mb-2">Kontaktirajte nas</h4>
              <p className="text-concrete-grey font-body-md">Poziv ili poruka je prvi korak ka vašem novom prostoru.</p>
            </div>
            <div className="relative z-10 text-center mt-12 md:mt-0">
              <div className="w-24 h-24 bg-white text-deep-slate rounded-full flex items-center justify-center mx-auto mb-6 font-headline-lg text-headline-lg shadow-lg">02</div>
              <h4 className="font-headline-md text-headline-md mb-2">Merenje na terenu</h4>
              <p className="text-concrete-grey font-body-md">Dolazimo besplatno da precizno izmerimo prostor i damo savet.</p>
            </div>
            <div className="relative z-10 text-center mt-12 md:mt-0">
              <div className="w-24 h-24 bg-white text-deep-slate rounded-full flex items-center justify-center mx-auto mb-6 font-headline-lg text-headline-lg shadow-lg">03</div>
              <h4 className="font-headline-md text-headline-md mb-2">Zvanična Ponuda</h4>
              <p className="text-concrete-grey font-body-md">Dobijate detaljnu specifikaciju materijala i fiksnu cenu radova.</p>
            </div>
            <div className="relative z-10 text-center mt-12 md:mt-0">
              <div className="w-24 h-24 bg-construction-amber text-deep-slate rounded-full flex items-center justify-center mx-auto mb-6 font-headline-lg text-headline-lg shadow-lg">04</div>
              <h4 className="font-headline-md text-headline-md mb-2">Izvođenje radova</h4>
              <p className="text-concrete-grey font-body-md">Realizacija u dogovorenom roku uz garantovan vrhunski kvalitet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <SectionContainer className="bg-plaster-white">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label text-label text-primary">PORTFOLIO</span>
            <h2 className="font-headline-lg text-headline-lg mt-2">Pogledajte naše nedavne projekte</h2>
          </div>
          <Link href="/portfolio" className="hidden md:block bg-deep-slate text-white px-6 py-3 rounded hover:bg-black transition-colors font-bold">
            Pogledajte sve radove
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="aspect-square bg-concrete-grey overflow-hidden group relative cursor-pointer">
            <img
              alt="Portfolio 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeWJy2glH66d3DUBBgU3byZXEQ1iIxbsslh-O_cTwCLoy7Vur_JExxbhndLKGm39BH8_meiHmygPWkwEvbCqN7cS8wjIszpLHjERbCyLT2T0lwtXQPNaHst51-hAhx4LaCz1IQvCJ6JOlkPkOIVno4QiJa4XM0GEmL7wZ1Vo-quGDzl239ie2CgtDEwxMCknGL3kn__lgJagvygCqNgrIjieTQ7zfCGnA3YNkexpVr1fcnHf3Nkfw9gY2e28K1npS9KSesvbhL-Gg"
            />
            <div className="absolute inset-0 bg-deep-slate/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white p-4">
              <span className="font-label">SPUŠTENI PLAFONI</span>
            </div>
          </div>
          <div className="aspect-square bg-concrete-grey overflow-hidden group relative cursor-pointer">
            <img
              alt="Portfolio 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDijyq4H3tico8-heJ31Dax43ZAtmipkGxq28uttKIIxcJtZIlezkzzv3GAeEnQsSnGhmR8kYyYxwRy00tknJx7KJ1FHqB6h4HuekMQa_vqH8ncIr3xPuNefhjKRNnfaUmSHqKyEOmhRBsOItbwhY18J19GO0L-Kj5Kq6EE3ARLgajEZJJWSM4wfWaLnZKvYFWHR7_My_ZkVTdBKBi0OJr5t7HTiUcLD9TjRlxMNTrh5YfGqnc6GDzwri7i8AzCpnqlGfuY2kRhl_g"
            />
            <div className="absolute inset-0 bg-deep-slate/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white p-4">
              <span className="font-label">PREGRADNI ZIDOVI</span>
            </div>
          </div>
          <div className="aspect-square bg-concrete-grey overflow-hidden group relative cursor-pointer">
            <img
              alt="Portfolio 3"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSpkGm3BaJM7nTn0gpEwR8N_ivADADHMmp6YEr4SxX7EpKhZ6UhNQp57BqdRk1R_BrOhZP-E9Qtk_Zn1-ZdbGVpYbpJwm_lIPNRTgshS88uihlx6byTMhHN2ML__UuwgcJKvCbHBAEdhI-DrfCtxl34qJrz5vLqApbm6Qw_447pK-k7H2TaajrdCYLO0hprzNPCG2YqSUpOYObEP65cqN9x4FmklAUyl6vHZuNA3a28flHEYPd4JvOF1FPW-Lb91w_8mYKJafdXEQ"
            />
            <div className="absolute inset-0 bg-deep-slate/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white p-4">
              <span className="font-label">FINO GLETOVANJE</span>
            </div>
          </div>
          <div className="aspect-square bg-concrete-grey overflow-hidden group relative cursor-pointer">
            <img
              alt="Portfolio 4"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBayhFj8w7ier72TiIDvEGCGTEnyKocbfMB_JerPS_fC6nX7g0x3yYzynXKBBsiMBX4iWG_a109jst-pY_txNHujp82HHJpv2kdf40iD4z2N40tSDQoNBerqspcAuPCDAMLmAWG43pntgHmS4tOyw1TvQjG_rSlwJektoAxc2BoI-HPHH-4xKyH6pkkdQ70QAg2zc-Z4yYC3KShs5rtkLrhYs_Ri1SrcGfdpAY0KXkHZCsvf87Dut2jXnb-CpshLNFv_AMid01qy3E"
            />
            <div className="absolute inset-0 bg-deep-slate/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white p-4">
              <span className="font-label">DEKORATIVNI RADOVI</span>
            </div>
          </div>
          <div className="aspect-square bg-concrete-grey overflow-hidden group relative cursor-pointer">
            <img
              alt="Portfolio 5"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfrOAKN85ry8U_Qj2POOWrE8cVHLu58EahG0aFFBB1AnX_AyQajsdnvt257wpYrv_tr9aB1ds_STIl7EaFyweO7-zy5TmpCvirKFEKjQAM4MhWBNJkpCUtoYLmZ8qhgq__EfkqmXj3IPu9gguwLwULM8Q0F5cVvw-pqDDoCDB_5vgLOypZnrtt_X95tjdI7Vls0nEHwlieCr34dm9POP3j90JQRiDH8j-XvBnb26uvnXOZIX3m0UG-qskxyT4O_J1Z6CQTH96SCng"
            />
            <div className="absolute inset-0 bg-deep-slate/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white p-4">
              <span className="font-label">POSLOVNI PROSTORI</span>
            </div>
          </div>
          <div className="aspect-square bg-concrete-grey overflow-hidden group relative cursor-pointer">
            <img
              alt="Portfolio 6"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwzgUztCmboFXSiIBwWJ_Hca0Rv-itVAwmeCVhi84-1qo4AgLVaWiUGKRIaXBLpfD_Laiez44s288fMG8MNeWJflz5sr6--0HMArEL08y4sE_VIZPQu87jJ_6P4tX4ekBAN53JW5-u2bQyVH2HvBpUF6vcHYIVDEzxTJzk24sbRb3k97vQ_W7aFeb-0lCHbG7yhU6DiSZoKSXFmS-ThqiEJyho3wudyKb-kwKr1gwaQ46j4P3RA036Ry3K3ATp8dSlKD-p8p7iro"
            />
            <div className="absolute inset-0 bg-deep-slate/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white p-4">
              <span className="font-label">MODERAN DIZAJN</span>
            </div>
          </div>
        </div>
        <Link href="/portfolio" className="w-full mt-8 md:hidden bg-deep-slate text-white px-6 py-4 rounded font-bold block text-center">
          Pogledajte sve radove
        </Link>
      </SectionContainer>

      {/* Contact Banner */}
      <section className="py-24 bg-construction-amber relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-deep-slate skew-x-[-20deg] translate-x-1/2 opacity-10"></div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center">
          <h2 className="font-headline-xl text-headline-xl text-deep-slate mb-8 md:text-headline-xl-mobile">
            Spremni da započete renoviranje?
          </h2>
          <div className="mb-12">
            <a className="font-headline-xl text-headline-xl text-deep-slate hover:opacity-80 transition-opacity block" href="tel:0695791925">
              069 579 1925
            </a>
            <p className="font-label text-label text-deep-slate/80 mt-2">DOSTUPNI SMO SVAKOG RADNOG DANA OD 08:00 DO 18:00</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a className="bg-deep-slate text-white px-10 py-4 rounded-lg font-bold font-headline-md flex items-center gap-3 hover:shadow-xl transition-shadow" href="tel:0695791925">
              <Phone className="w-5 h-5" />
              Pozovite odmah
            </a>
            <a className="bg-white text-deep-slate px-10 py-4 rounded-lg font-bold font-headline-md flex items-center gap-3 border border-concrete-grey hover:bg-concrete-grey transition-colors" href="https://viber.click/381695791925">
              <MessageCircle className="w-5 h-5" />
              Pošaljite poruku
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
