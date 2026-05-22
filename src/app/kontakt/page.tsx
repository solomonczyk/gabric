'use client';

import { useState } from 'react';
import SectionContainer from '@/components/SectionContainer';
import { MapPin, Phone, Mail, Clock, Send, Home } from 'lucide-react';

export default function Kontakt() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter mb-12 pt-32">
        <div className="border-l-4 border-construction-amber pl-6">
          <h1 className="font-headline-xl text-headline-xl text-deep-slate mb-2">KONTAKTIRAJTE NAS</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Spremni smo da vaše zidove pretvorimo u remek-delo. Pošaljite nam upit ili nas pozovite direktno za besplatnu procenu radova na vašem objektu.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        {/* Left Column: Details */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-surface-container-low p-6 border border-concrete-grey">
            <span className="font-label text-label text-construction-amber block mb-4">DETALJI O FIRMI</span>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-headline-md text-body-md text-deep-slate">Adresa Sedista</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">Subotica, Srbija</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-headline-md text-body-md text-deep-slate">Telefon</p>
                  <a className="font-body-md text-body-md text-on-surface-variant hover:text-construction-amber transition-colors" href="tel:0695791925">
                    069 579 1925
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-headline-md text-body-md text-deep-slate">E-mail</p>
                  <a className="font-body-md text-body-md text-on-surface-variant hover:text-construction-amber transition-colors" href="mailto:info@gipsarko.rs">
                    info@gipsarko.rs
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-headline-md text-body-md text-deep-slate">Radno Vreme</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Pon - Pet: 07:00 - 17:00<br/>Subota: 08:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Spec Sheet for quick services */}
          <div className="border border-concrete-grey">
            <div className="bg-deep-slate p-4">
              <h3 className="font-label text-label text-plaster-white">NAŠE PRIMARNE ZONE RADA</h3>
            </div>
            <div className="bg-plaster-white p-4 flex justify-between">
              <span className="font-body-md text-body-md">Subotica i okolina</span>
              <span className="font-label text-label text-construction-amber">AKTIVNO</span>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="md:col-span-7">
          <div className="bg-plaster-white p-6 border border-concrete-grey relative">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-construction-amber -mt-1 -mr-1"></div>
            
            {!formSubmitted ? (
              <>
                <h2 className="font-headline-lg text-headline-lg text-deep-slate mb-6">POŠALJITE PORUKU</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-label text-label text-on-surface-variant">IME I PREZIME</label>
                      <input
                        className="border border-concrete-grey bg-surface-container-low p-3 focus:outline-none focus:border-deep-slate focus:ring-1 focus:ring-construction-amber transition-all"
                        placeholder="Petar Petrović"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label text-label text-on-surface-variant">E-MAIL ADRESA</label>
                      <input
                        className="border border-concrete-grey bg-surface-container-low p-3 focus:outline-none focus:border-deep-slate focus:ring-1 focus:ring-construction-amber transition-all"
                        placeholder="petar@email.com"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-label text-label text-on-surface-variant">BROJ TELEFONA</label>
                      <input
                        className="border border-concrete-grey bg-surface-container-low p-3 focus:outline-none focus:border-deep-slate focus:ring-1 focus:ring-construction-amber transition-all"
                        placeholder="+381 60 ..."
                        type="tel"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label text-label text-on-surface-variant">VRSTA RADOVA</label>
                      <select className="border border-concrete-grey bg-surface-container-low p-3 focus:outline-none focus:border-deep-slate focus:ring-1 focus:ring-construction-amber transition-all">
                        <option>Gipsarski radovi</option>
                        <option>Molerski radovi</option>
                        <option>Fasade</option>
                        <option>Kompletna adaptacija</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-label text-on-surface-variant">VAŠA PORUKA (DETALJI OBJEKTA)</label>
                    <textarea
                      className="border border-concrete-grey bg-surface-container-low p-3 focus:outline-none focus:border-deep-slate focus:ring-1 focus:ring-construction-amber transition-all"
                      placeholder="Opišite nam vaš projekat, kvadraturu i željene rokove..."
                      required
                      rows={5}
                    />
                  </div>
                  <button
                    className="w-full bg-deep-slate text-plaster-white font-headline-md text-body-md py-4 hover:bg-construction-amber hover:text-deep-slate transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
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
              <div className="p-4 bg-surface-container-low text-on-surface-variant font-body-md border border-concrete-grey animate-pulse">
                Hvala vam! Vaš upit je uspešno poslat. Odgovorićemo vam u najkraćem mogućem roku.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-concrete-grey h-[500px] relative overflow-hidden group">
        <div className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700">
          <img
            className="w-full h-full object-cover"
            alt="Mapa Subotice"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlXoZeGkGsStjtV1OwGNGXDD0cZ7QWLGaXsG_S0uRPf80iJkkCYhqq-SAs_pER1K9WYq8emnp6YyXgi-f6f5hNb416cSsN0-Y-kdjZGOhxtMcw3xHUBeORpmXmHqmarZVnxQGpf8EpBDk63RQgeX8mPFyBihAD3P7qxawxJMlEheRnp-u9oGP6ZNaDY0SzdDF4SEUjHQTR9qHIG6x_94pRUNthbwDNAvlCKpDuMpuowgyNN2lMo9tA_WVsYD-R-8MSe3ErcX4kEeA"
          />
          <div className="absolute inset-0 pointer-events-none border-[24px] border-plaster-white/10"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-plaster-white p-4 shadow-xl border-b-4 border-construction-amber flex flex-col items-center gap-2 transform group-hover:scale-110 transition-transform duration-300">
            <Home className="w-8 h-8 text-primary fill-current" />
            <span className="font-label text-label text-deep-slate">GIPSARKO HQ</span>
          </div>
        </div>
        <div className="absolute bottom-6 left-6 bg-deep-slate/90 text-plaster-white p-6 max-w-sm backdrop-blur-sm">
          <h4 className="font-headline-md text-body-md mb-2">POSLOVNICA SUBOTICA</h4>
          <p className="font-body-md text-body-md opacity-80">
            Pronađite nas u Subotici. Naš tim je dostupan za sastanke uz prethodnu najavu telefonom.
          </p>
        </div>
      </section>
    </>
  );
}
