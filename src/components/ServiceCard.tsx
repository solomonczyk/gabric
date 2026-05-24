import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/lib/services';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-dark-surface border border-outline-variant overflow-hidden group hover:border-gold-primary/50 transition-all duration-300">
      <div className="h-48 overflow-hidden relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/60 to-transparent" />
        <div className="absolute top-4 right-4 bg-gold-primary text-dark-primary px-3 py-1 font-label-caps text-label-caps">
          {service.priceLabel}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-headline-md text-headline-md text-white mb-2">
          {service.title}
        </h3>
        <p className="font-body-md text-body-md text-text-light mb-4">
          {service.description}
        </p>
        <Link
          href="/usluge"
          className="font-label text-label text-gold-primary flex items-center gap-2 group/link"
        >
          SAZNAJTE VIŠE
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
