interface SpecRow {
  category: string;
  standard: string;
  description: string;
  details: string;
}

export default function TechnicalSpecsTable({
  specs,
}: {
  specs: SpecRow[];
}) {
  return (
    <>
      <div className="md:hidden space-y-4">
        {specs.map((spec, idx) => (
          <div
            key={idx}
            className={`border border-outline-variant rounded-sm p-4 ${
              idx % 2 === 0 ? 'bg-dark-graphite' : 'bg-dark-surface'
            }`}
          >
            <p className="font-headline-md text-headline-md text-white mb-3">
              {spec.category}
            </p>
            <dl className="space-y-2 text-body-md text-text-light">
              <div>
                <dt className="font-label-caps text-label-caps text-gold-primary mb-1">Standard</dt>
                <dd>
                  <span className="bg-gold-primary/10 text-gold-primary px-2 py-1 text-sm font-label inline-block">
                    {spec.standard}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="font-label-caps text-label-caps text-gold-primary mb-1">Opis</dt>
                <dd>{spec.description}</dd>
              </div>
              <div>
                <dt className="font-label-caps text-label-caps text-gold-primary mb-1">Detalji</dt>
                <dd>{spec.details}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      <div className="hidden md:block border border-outline-variant overflow-hidden rounded-sm">
        <div className="grid grid-cols-4 bg-dark-primary text-white p-4 font-label-caps text-label-caps border-b border-gold-primary/30">
          <div className="px-4">Kategorija</div>
          <div className="px-4">Standard</div>
          <div className="px-4">Opis</div>
          <div className="px-4">Detalji</div>
        </div>
        {specs.map((spec, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-4 p-4 ${
              idx % 2 === 0 ? 'bg-dark-graphite' : 'bg-dark-surface'
            } border-b border-outline-variant last:border-b-0`}
          >
            <div className="px-4 font-headline-md text-headline-md text-white">{spec.category}</div>
            <div className="px-4 flex items-center">
              <span className="bg-gold-primary/10 text-gold-primary px-2 py-1 text-sm font-label">
                {spec.standard}
              </span>
            </div>
            <div className="px-4 text-body-md text-text-light">{spec.description}</div>
            <div className="px-4 text-body-md text-text-light">{spec.details}</div>
          </div>
        ))}
      </div>
    </>
  );
}
