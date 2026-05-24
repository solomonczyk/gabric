import { icons } from 'lucide-react';
import type { PriceCategory } from '@/lib/prices';

export default function PriceTable({
  category,
}: {
  category: PriceCategory;
}) {
  const IconComponent = (icons as Record<string, React.ComponentType<{ className?: string }>>)[
    category.icon
  ];

  return (
    <section className="mb-12 md:mb-section-padding">
      <div className="flex items-center gap-4 mb-8">
        {IconComponent && <IconComponent className="w-8 h-8 text-gold-primary shrink-0" />}
        <h3 className="font-headline-lg text-headline-lg md:text-headline-lg text-white">{category.title}</h3>
      </div>

      <div className="md:hidden space-y-3">
        {category.rows.map((row, idx) => (
          <div
            key={idx}
            className={`border border-outline-variant rounded-sm p-4 ${
              idx % 2 === 0 ? 'bg-dark-graphite' : 'bg-dark-surface'
            }`}
          >
            <div className="flex justify-between items-start gap-4">
              <div className="min-w-0">
                <p className="font-bold text-white">{row.title}</p>
                <p className="text-sm text-text-light mt-1">{row.subtitle}</p>
              </div>
              <span className="font-label text-label text-gold-primary shrink-0 whitespace-nowrap">
                {row.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-hidden border border-outline-variant rounded-sm">
        <div className="grid grid-cols-12 bg-dark-primary text-white p-4 font-label text-label border-b border-gold-primary/30">
          <div className="col-span-8 lg:col-span-9 uppercase tracking-wider">Opis usluge</div>
          <div className="col-span-4 lg:col-span-3 text-right uppercase tracking-wider">Cena po m²</div>
        </div>
        <div className="divide-y divide-outline-variant">
          {category.rows.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-12 p-4 ${
                idx % 2 === 0 ? 'bg-dark-graphite' : 'bg-dark-surface'
              } hover:bg-dark-surface/80 transition-colors`}
            >
              <div className="col-span-8 lg:col-span-9 flex flex-col min-w-0">
                <span className="font-bold text-white">{row.title}</span>
                <span className="text-sm text-text-light">{row.subtitle}</span>
              </div>
              <div className="col-span-4 lg:col-span-3 text-right flex items-center justify-end">
                <span className="font-label text-label text-gold-primary">{row.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
