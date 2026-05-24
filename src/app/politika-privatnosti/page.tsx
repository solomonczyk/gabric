import { siteConfig } from '@/lib/siteConfig';

export default function PolitikaPrivatnosti() {
  return (
    <>
      <section className="max-w-container-max mx-auto px-4 md:px-gutter pt-24 md:pt-32 pb-12">
        <div className="mb-12 border-l-4 border-gold-primary pl-6">
          <h1 className="font-headline-xl text-headline-xl text-white mb-4">
            Politika Privatnosti
          </h1>
          <p className="font-body-lg text-body-lg text-text-light max-w-2xl">
            Vaša privatnost nam je važna. Ova politika objašnjava kako prikupljamo, koristimo i štitimo vaše podatke.
          </p>
        </div>

        <div className="max-w-3xl space-y-8">
          <section>
            <h2 className="font-headline-lg text-headline-lg text-white mb-4">
              1. Prikupljanje podataka
            </h2>
            <p className="font-body-md text-body-md text-text-light">
              Prilikom popunjavanja kontakt forme na našem sajtu, prikupljamo sledeće podatke: ime i prezime, e-mail adresu, broj telefona i poruku koju nam šaljete. Ove podatke koristimo isključivo u svrhu odgovora na vaš upit.
            </p>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-white mb-4">
              2. Korišćenje podataka
            </h2>
            <p className="font-body-md text-body-md text-text-light">
              Vaše podatke koristimo samo za komunikaciju u vezi sa vašim upitom. Ne delimo vaše podatke sa trećim stranama bez vaše izričite saglasnosti, osim ako to ne zahteva zakon.
            </p>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-white mb-4">
              3. Čuvanje podataka
            </h2>
            <p className="font-body-md text-body-md text-text-light">
              Vaše podatke čuvamo samo onoliko dugo koliko je potrebno za svrhu zbog koje su prikupljeni. Nakon toga, podaci se bezbedno brišu.
            </p>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-white mb-4">
              4. Vaša prava
            </h2>
            <p className="font-body-md text-body-md text-text-light">
              Imate pravo da zatražite uvid u podatke koje čuvamo o vama, kao i da zatražite njihovo brisanje ili izmenu. Za sve zahteve vezane za privatnost, kontaktirajte nas putem e-maila ili telefona.
            </p>
          </section>

          <section>
            <h2 className="font-headline-lg text-headline-lg text-white mb-4">
              5. Kontakt
            </h2>
            <p className="font-body-md text-body-md text-text-light">
              Za sva pitanja u vezi sa politikom privatnosti, možete nas kontaktirati na{' '}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-gold-primary hover:text-gold-accent"
              >
                {siteConfig.email}
              </a>{' '}
              ili putem telefona{' '}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="text-gold-primary hover:text-gold-accent"
              >
                {siteConfig.phone}
              </a>.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
