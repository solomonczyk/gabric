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
        {IconComponent && <IconComponent className="w-8 h-8 text-primary shrink-0" />}
        <h3 className="font-headline-lg text-headline-lg md:text-headline-lg">{category.title}</h3>
      </div>

      <div className="md:hidden space-y-3">
        {category.rows.map((row, idx) => (
          <div
            key={idx}
            className={`border border-concrete-grey rounded-lg p-4 ${
              idx % 2 === 0 ? 'bg-plaster-white' : 'bg-surface-container-low'
            }`}
          >
            <div className="flex justify-between items-start gap-4">
              <div className="min-w-0">
                <p className="font-bold text-deep-slate">{row.title}</p>
                <p className="text-sm text-on-surface-variant mt-1">{row.subtitle}</p>
              </div>
              <span className="font-label text-label text-primary shrink-0 whitespace-nowrap">
                {row.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-hidden border border-concrete-grey rounded">
        <div className="grid grid-cols-12 bg-deep-slate text-plaster-white p-4 font-label text-label">
          <div className="col-span-8 lg:col-span-9 uppercase">Opis usluge</div>
          <div className="col-span-4 lg:col-span-3 text-right uppercase">Cena po m²</div>
        </div>
        <div className="divide-y divide-concrete-grey">
          {category.rows.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-12 p-4 ${
                idx % 2 === 0 ? 'bg-plaster-white' : 'bg-surface-container-low'
              } hover:bg-surface-container-high transition-colors`}
            >
              <div className="col-span-8 lg:col-span-9 flex flex-col min-w-0">
                <span className="font-bold text-deep-slate">{row.title}</span>
                <span className="text-sm text-on-surface-variant">{row.subtitle}</span>
              </div>
              <div className="col-span-4 lg:col-span-3 text-right flex items-center justify-end">
                <span className="font-label text-label text-primary">{row.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
