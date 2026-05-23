import type { Metadata } from 'next';
import SectionContainer from '@/components/SectionContainer';
import PriceTable from '@/components/PriceTable';
import { Info, Calendar } from 'lucide-react';
import { priceCategories } from '@/lib/prices';

export const metadata: Metadata = {
  title: 'Cenovnik | Gipsarko — Transparentne cene radova u Subotici',
  description:
    'Informativni cenovnik gipsarskih i molerskih radova po m². Besplatna procena na terenu.',
};

export default function Cenovnik() {
  return (
    <>
      <div className="bg-surface-container-low border-l-4 border-construction-amber flex gap-4 items-start p-4 md:p-gutter mt-14 md:mt-16 max-w-container-max mx-auto px-4 md:px-gutter">
        <Info className="w-6 h-6 text-construction-amber flex-shrink-0 mt-1" />
        <div className="min-w-0">
          <span className="font-label text-label block mb-1">VAŽNA NAPOMENA</span>
          <p className="font-body-md text-on-surface-variant">
            Prikazane cene su informativnog karaktera i odnose se na rad po m². Konačna cena se
            formira nakon besplatnog izlaska na teren, preciznog merenja i procene stanja površina.
            Cene ne uključuju materijal osim ako nije drugačije naznačeno.
          </p>
        </div>
      </div>

      <SectionContainer>
        <div className="mb-12 md:mb-section-padding">
          <span className="font-label text-label text-primary mb-2 block uppercase tracking-widest">
            Transparentnost i kvalitet
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-deep-slate mb-4">
            Cenovnik usluga
          </h2>
          <div className="h-1 w-24 bg-construction-amber" />
        </div>

        {priceCategories.map((category) => (
          <PriceTable key={category.id} category={category} />
        ))}

        <section className="relative overflow-hidden bg-deep-slate rounded-xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-gutter">
          <div className="relative z-10 max-w-2xl">
            <h3 className="font-headline-lg text-headline-lg text-plaster-white mb-4">
              Potrebna Vam je precizna ponuda?
            </h3>
            <p className="font-body-lg text-body-lg text-concrete-grey">
              Zakažite besplatan izlazak na teren i merenje. Naši stručnjaci će proceniti obim
              posla i dati Vam tačnu cenu bez skrivenih troškova.
            </p>
          </div>
          <div className="relative z-10 w-full md:w-auto">
            <a
              href="tel:0695791925"
              className="bg-construction-amber text-deep-slate px-8 py-4 rounded font-bold text-lg hover:brightness-110 transition-all flex items-center justify-center gap-3 w-full md:w-auto"
            >
              <Calendar className="w-5 h-5" />
              Zakaži merenje
            </a>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none hidden md:block">
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
