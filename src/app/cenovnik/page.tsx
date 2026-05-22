import SectionContainer from '@/components/SectionContainer';
import { Hammer, PaintRoller, Info, Calendar, Download } from 'lucide-react';
import Button from '@/components/Button';

export default function Cenovnik() {
  return (
    <>
      {/* Disclaimer Banner */}
      <div className="bg-surface-container-low border-l-4 border-construction-amber flex gap-4 items-start p-gutter mt-16 max-w-container-max mx-auto px-gutter">
        <Info className="w-6 h-6 text-construction-amber flex-shrink-0 mt-1" />
        <div>
          <span className="font-label text-label block mb-1">VAŽNA NAPOMENA</span>
          <p className="font-body-md text-on-surface-variant">
            Prikazane cene su informativnog karaktera i odnose se na rad po m². Konačna cena se formira nakon besplatnog izlaska na teren, preciznog merenja i procene stanja površina. Cene ne uključuju materijal osim ako nije drugačije naznačeno.
          </p>
        </div>
      </div>

      {/* Page Title Area */}
      <SectionContainer>
        <div className="mb-section-padding">
          <span className="font-label text-label text-primary mb-2 block uppercase tracking-widest">Transparentnost i kvalitet</span>
          <h2 className="font-headline-xl text-headline-xl text-deep-slate mb-4">Cenovnik usluga</h2>
          <div className="h-1 w-24 bg-construction-amber"></div>
        </div>

        {/* Pricing Section: Gipsarski Radovi */}
        <section className="mb-section-padding">
          <div className="flex items-center gap-4 mb-8">
            <Hammer className="w-8 h-8 text-primary" />
            <h3 className="font-headline-lg text-headline-lg">Gipsarski Radovi</h3>
          </div>
          <div className="overflow-hidden border border-concrete-grey rounded-lg">
            <div className="grid grid-cols-12 bg-deep-slate text-plaster-white p-4 font-label text-label">
              <div className="col-span-8 lg:col-span-9 uppercase">Opis usluge</div>
              <div className="col-span-4 lg:col-span-3 text-right uppercase">Cena po m²</div>
            </div>
            <div className="divide-y divide-concrete-grey">
              <div className="grid grid-cols-12 p-4 bg-plaster-white hover:bg-surface-container-high transition-colors">
                <div className="col-span-8 lg:col-span-9 flex flex-col">
                  <span className="font-bold text-deep-slate">Spušteni plafoni na metalnu potkonstrukciju</span>
                  <span className="text-sm text-on-surface-variant">Standardne ploče 12.5mm</span>
                </div>
                <div className="col-span-4 lg:col-span-3 text-right flex items-center justify-end">
                  <span className="font-label text-label text-primary">od 12 € / RSD</span>
                </div>
              </div>
              <div className="grid grid-cols-12 p-4 bg-surface-container-low hover:bg-surface-container-high transition-colors">
                <div className="col-span-8 lg:col-span-9 flex flex-col">
                  <span className="font-bold text-deep-slate">Pregradni zidovi (obostrano jedna ploča)</span>
                  <span className="text-sm text-on-surface-variant">Debljina profila 50/75/100mm</span>
                </div>
                <div className="col-span-4 lg:col-span-3 text-right flex items-center justify-end">
                  <span className="font-label text-label text-primary">od 18 € / RSD</span>
                </div>
              </div>
              <div className="grid grid-cols-12 p-4 bg-plaster-white hover:bg-surface-container-high transition-colors">
                <div className="col-span-8 lg:col-span-9 flex flex-col">
                  <span className="font-bold text-deep-slate">Obloga zida na lepak (suvi malter)</span>
                  <span className="text-sm text-on-surface-variant">Lepljenje gips tabli direktno na zid</span>
                </div>
                <div className="col-span-4 lg:col-span-3 text-right flex items-center justify-end">
                  <span className="font-label text-label text-primary">od 8 € / RSD</span>
                </div>
              </div>
              <div className="grid grid-cols-12 p-4 bg-surface-container-low hover:bg-surface-container-high transition-colors">
                <div className="col-span-8 lg:col-span-9 flex flex-col">
                  <span className="font-bold text-deep-slate">Skrivači svetla i kaskade</span>
                  <span className="text-sm text-on-surface-variant">Izrada dekorativnih elemenata (po m')</span>
                </div>
                <div className="col-span-4 lg:col-span-3 text-right flex items-center justify-end">
                  <span className="font-label text-label text-primary">od 10 € / RSD</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section: Molerski Radovi */}
        <section className="mb-section-padding">
          <div className="flex items-center gap-4 mb-8">
            <PaintRoller className="w-8 h-8 text-primary" />
            <h3 className="font-headline-lg text-headline-lg">Molerski Radovi</h3>
          </div>
          <div className="overflow-hidden border border-concrete-grey rounded-lg">
            <div className="grid grid-cols-12 bg-deep-slate text-plaster-white p-4 font-label text-label">
              <div className="col-span-8 lg:col-span-9 uppercase">Opis usluge</div>
              <div className="col-span-4 lg:col-span-3 text-right uppercase">Cena po m²</div>
            </div>
            <div className="divide-y divide-concrete-grey">
              <div className="grid grid-cols-12 p-4 bg-plaster-white hover:bg-surface-container-high transition-colors">
                <div className="col-span-8 lg:col-span-9 flex flex-col">
                  <span className="font-bold text-deep-slate">Gletovanje zidova (dve ruke)</span>
                  <span className="text-sm text-on-surface-variant">Uključuje brušenje i pripremu za krečenje</span>
                </div>
                <div className="col-span-4 lg:col-span-3 text-right flex items-center justify-end">
                  <span className="font-label text-label text-primary">od 4 € / RSD</span>
                </div>
              </div>
              <div className="grid grid-cols-12 p-4 bg-surface-container-low hover:bg-surface-container-high transition-colors">
                <div className="col-span-8 lg:col-span-9 flex flex-col">
                  <span className="font-bold text-deep-slate">Krečenje poludisperzijom (dve ruke)</span>
                  <span className="text-sm text-on-surface-variant">Bela boja, standardni materijali</span>
                </div>
                <div className="col-span-4 lg:col-span-3 text-right flex items-center justify-end">
                  <span className="font-label text-label text-primary">od 2.5 € / RSD</span>
                </div>
              </div>
              <div className="grid grid-cols-12 p-4 bg-plaster-white hover:bg-surface-container-high transition-colors">
                <div className="col-span-8 lg:col-span-9 flex flex-col">
                  <span className="font-bold text-deep-slate">Mašinsko šmirglanje (Žirafa)</span>
                  <span className="text-sm text-on-surface-variant">Sa upotrebom usisivača (bez prašine)</span>
                </div>
                <div className="col-span-4 lg:col-span-3 text-right flex items-center justify-end">
                  <span className="font-label text-label text-primary">od 1.5 € / RSD</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative overflow-hidden bg-deep-slate rounded-xl p-12 flex flex-col md:flex-row items-center justify-between gap-gutter">
          <div className="relative z-10 max-w-2xl">
            <h3 className="font-headline-lg text-headline-lg text-plaster-white mb-4">Potrebna Vam je precizna ponuda?</h3>
            <p className="font-body-lg text-body-lg text-concrete-grey">
              Zakažite besplatan izlazak na teren i merenje. Naši stručnjaci će proceniti obim posla i dati Vam tačnu cenu bez skrivenih troškova.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <a href="tel:0695791925" className="bg-construction-amber text-deep-slate px-8 py-4 rounded font-bold text-lg hover:brightness-110 transition-all flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              Zakaži merenje
            </a>
            <button className="border border-concrete-grey text-plaster-white px-8 py-4 rounded font-bold text-lg hover:bg-surface-container-highest/10 transition-all flex items-center gap-3">
              <Download className="w-5 h-5" />
              Preuzmi PDF cenovnik
            </button>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
            <img
              alt="Blueprint background"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGTmWceuvEBqaDsQKWfq9FO4Znkg732ZQjJchTKyF3ze-ktJtOw8BRLiKL5Ok6dO_pOfF4XgsYhMw6lc9diLXyoeT2Y3VcDGaIkHTtj2l6KtlZxwvK0JsEtqAg60EnVjAM4wDfaB6sCIQRmjdQYheKUzPUv7-dcAHE3_q_-KIwmGUplKrvSvX0_DzhdufBqcZmeb4t30Vvw6MZx9WLWv31NikKhjNEB-UX9sEwOv1j3nEGZ0F-QVrBYi326vPKbhi3aLfyiB4HWgI"
            />
          </div>
        </section>
      </SectionContainer>
    </>
  );
}
