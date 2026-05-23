'use client';

import { useState } from 'react';
import { portfolioPairs } from '@/lib/portfolio';
import type { PortfolioPair } from '@/lib/portfolio';

function PortfolioCard({ pair }: { pair: PortfolioPair }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 group">
      <div className="relative overflow-hidden border border-concrete-grey">
        <img
          src={pair.before.image}
          alt={pair.before.label}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-deep-slate/80 text-plaster-white px-2 py-1 text-xs font-label tracking-wider">
          {pair.before.label}
        </div>
      </div>
      <div className="relative overflow-hidden border border-concrete-grey">
        <img
          src={pair.after.image}
          alt={pair.after.label}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-construction-amber/90 text-deep-slate px-2 py-1 text-xs font-label tracking-wider">
          {pair.after.label}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('svi');

  const filtered =
    activeFilter === 'svi'
      ? portfolioPairs
      : portfolioPairs.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Header Section */}
      <div className="max-w-container-max mx-auto px-4 md:px-gutter pt-24 md:pt-32 pb-12">
        <div className="mb-12 border-l-4 border-construction-amber pl-6">
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-deep-slate mb-4">
            Portfolio: Pre i Posle
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Uvid u proces našeg rada. Uporedite fazu pre i posle završetka radova.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button
            type="button"
            onClick={() => setActiveFilter('svi')}
            className={`px-6 py-3 font-label text-label border border-concrete-grey rounded transition-all ${
              activeFilter === 'svi'
                ? 'bg-construction-amber text-deep-slate border-construction-amber'
                : 'hover:border-construction-amber'
            }`}
          >
            Svi projekti
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('gips')}
            className={`px-6 py-3 font-label text-label border border-concrete-grey rounded transition-all ${
              activeFilter === 'gips'
                ? 'bg-construction-amber text-deep-slate border-construction-amber'
                : 'hover:border-construction-amber'
            }`}
          >
            Gipsarski radovi
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('moler')}
            className={`px-6 py-3 font-label text-label border border-concrete-grey rounded transition-all ${
              activeFilter === 'moler'
                ? 'bg-construction-amber text-deep-slate border-construction-amber'
                : 'hover:border-construction-amber'
            }`}
          >
            Molerski radovi
          </button>
        </div>

        {/* Before/After Grid */}
        <div className="space-y-12">
          {filtered.map((pair) => (
            <PortfolioCard key={pair.id} pair={pair} />
          ))}
        </div>
      </div>
    </>
  );
}
