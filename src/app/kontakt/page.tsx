'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import WorkingHours from '@/components/WorkingHours';

type FormState = {
  name: string;
  email: string;
  phone: string;
  workType: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  workType: 'Gipsarski radovi',
  message: '',
};

export default function Kontakt() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setSubmitError(
          data.error ??
            'Greška pri slanju poruke. Pišite nam na info@gipsarko.rs ili pozovite 069 579 1925.'
        );
        return;
      }

      setFormSubmitted(true);
      setForm(initialForm);
    } catch {
      setSubmitError(
        'Nije moguće poslati poruku. Pišite nam na info@gipsarko.rs ili pozovite 069 579 1925.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-4 md:px-gutter mb-12 pt-24 md:pt-32">
        <div className="border-l-4 border-gold-primary pl-4 md:pl-6">
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-white mb-2">
            KONTAKTIRAJTE NAS
          </h1>
          <p className="font-body-lg text-body-lg text-text-light max-w-2xl">
            Spremni smo da vaše zidove pretvorimo u remek-delo. Pošaljite nam upit ili nas pozovite direktno za besplatnu procenu radova na vašem objektu.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-container-max mx-auto px-4 md:px-gutter grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 min-w-0">
        {/* Left Column: Details */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-dark-graphite p-6 border border-outline-variant">
            <span className="font-label text-label text-gold-primary block mb-4 tracking-[0.15em]">Saša Gabrić</span>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-gold-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-headline-md text-body-md text-white">Adresa Sedista</p>
                  <p className="font-body-md text-body-md text-text-light">Subotica, Srbija</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-gold-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-headline-md text-body-md text-white">Telefon</p>
                  <a className="font-body-md text-body-md text-text-light hover:text-gold-primary transition-colors" href="tel:0695791925">
                    069 579 1925
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-gold-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-headline-md text-body-md text-white">E-mail</p>
                  <a className="font-body-md text-body-md text-text-light hover:text-gold-primary transition-colors" href="mailto:info@gipsarko.rs">
                    info@gipsarko.rs
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-gold-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-headline-md text-body-md text-white">Radno Vreme</p>
                  <WorkingHours className="font-body-md text-body-md text-text-light" />
                </div>
              </div>
            </div>
          </div>

          {/* Spec Sheet for quick services */}
          <div className="border border-outline-variant">
            <div className="bg-dark-primary p-4 border-b border-gold-primary/30">
              <h3 className="font-label text-label text-white">NAŠE PRIMARNE ZONE RADA</h3>
            </div>
            <div className="bg-dark-graphite p-4 flex justify-between items-center">
              <span className="font-body-md text-body-md text-text-light">{siteConfig.location}</span>
              <span className="font-label text-label text-gold-primary">AKTIVNO</span>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="bg-dark-primary border border-gold-primary/30 p-6 text-center">
            <p className="font-headline-md text-headline-md text-white mb-4">Pozovite nas odmah</p>
            <a
              href="tel:0695791925"
              className="text-headline-xl text-headline-xl text-gold-primary hover:text-gold-accent transition-colors block font-extrabold"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="md:col-span-7">
          <div className="bg-dark-graphite p-6 border border-outline-variant relative">
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-gold-primary -mt-1 -mr-1"></div>

            {!formSubmitted ? (
              <>
                <h2 className="font-headline-lg text-headline-lg text-white mb-6">POŠALJITE PORUKU</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-label text-label text-text-light" htmlFor="contact-name">
                        IME I PREZIME
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        className="border border-outline-variant bg-dark-surface text-white p-3 focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-all placeholder-text-muted"
                        placeholder="Petar Petrović"
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label text-label text-text-light" htmlFor="contact-email">
                        E-MAIL ADRESA
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        className="border border-outline-variant bg-dark-surface text-white p-3 focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-all placeholder-text-muted"
                        placeholder="petar@email.com"
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-label text-label text-text-light" htmlFor="contact-phone">
                        BROJ TELEFONA
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        className="border border-outline-variant bg-dark-surface text-white p-3 focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-all placeholder-text-muted"
                        placeholder="+381 60 ..."
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label text-label text-text-light" htmlFor="work-type">
                        VRSTA RADOVA
                      </label>
                      <select
                        id="work-type"
                        name="workType"
                        className="border border-outline-variant bg-dark-surface text-white p-3 focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-all"
                        value={form.workType}
                        onChange={(e) => setForm((f) => ({ ...f, workType: e.target.value }))}
                      >
                        <option>Gipsarski radovi</option>
                        <option>Molerski radovi</option>
                        <option>Fasade</option>
                        <option>Kompletna adaptacija</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-label text-text-light" htmlFor="contact-message">
                      VAŠA PORUKA (DETALJI OBJEKTA)
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="border border-outline-variant bg-dark-surface text-white p-3 focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-all placeholder-text-muted"
                      placeholder="Opišite nam vaš projekat, kvadraturu i željene rokove..."
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    />
                  </div>
                  {submitError && (
                    <p className="font-body-md text-body-md text-red-300 border border-red-500/30 bg-red-900/20 p-3" role="alert">
                      {submitError}
                    </p>
                  )}
                  <button
                    className="w-full bg-gold-primary text-dark-primary font-headline-md text-body-md py-4 hover:bg-gold-accent transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 rounded-sm"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⟳</span>
                        SLANJE...
                      </>
                    ) : (
                      <>
                        POŠALJI UPIT
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="p-4 bg-dark-surface text-text-light font-body-md border border-outline-variant">
                <span className="text-gold-primary font-bold">Hvala vam!</span> Vaš upit je uspešno poslat. Odgovorićemo vam u najkraćem mogućem roku.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-dark-graphite h-[500px] relative overflow-hidden">
        <iframe
          title="Mapa — SG Gipsarko Subotica"
          src="https://maps.google.com/maps?q=46.1,19.66&hl=sr&z=14&output=embed"
          className="w-full h-full border-0 opacity-70 hover:opacity-100 transition-all duration-700"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="absolute bottom-6 left-6 bg-dark-primary/90 text-white p-6 max-w-sm backdrop-blur-sm pointer-events-none border-l-2 border-gold-primary">
          <h4 className="font-headline-md text-body-md mb-2 text-gold-primary">POSLOVNICA SUBOTICA</h4>
          <p className="font-body-md text-body-md text-text-light">
            Pronađite nas u Subotici. Naš tim je dostupan za sastanke uz prethodnu najavu telefonom.
          </p>
        </div>
      </section>
    </>
  );
}
