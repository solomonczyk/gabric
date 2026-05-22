import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/lib/services';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-plaster-white border border-concrete-grey overflow-hidden group hover:border-construction-amber transition-colors">
      <div className="h-48 overflow-hidden relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-construction-amber text-deep-slate px-3 py-1 font-label-caps text-label-caps">
          {service.priceLabel}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-headline-md text-headline-md mb-2">
          {service.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">
          {service.description}
        </p>
        <Link
          href="/usluge"
          className="font-label text-label text-primary flex items-center gap-2 group/link"
        >
          SAZNAJTE VIŠE
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
