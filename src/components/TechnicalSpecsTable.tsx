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
            className={`border border-concrete-grey rounded-lg p-4 ${
              idx % 2 === 0 ? 'bg-plaster-white' : 'bg-surface-container-low'
            }`}
          >
            <p className="font-headline-md text-headline-md text-deep-slate mb-3">
              {spec.category}
            </p>
            <dl className="space-y-2 text-body-md text-on-surface-variant">
              <div>
                <dt className="font-label-caps text-label-caps text-primary mb-1">Standard</dt>
                <dd>
                  <span className="bg-construction-amber/10 text-primary px-2 py-1 text-sm font-label inline-block">
                    {spec.standard}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="font-label-caps text-label-caps text-primary mb-1">Opis</dt>
                <dd>{spec.description}</dd>
              </div>
              <div>
                <dt className="font-label-caps text-label-caps text-primary mb-1">Detalji</dt>
                <dd>{spec.details}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      <div className="hidden md:block border border-concrete-grey overflow-hidden rounded">
        <div className="grid grid-cols-4 bg-deep-slate text-plaster-white p-4 font-label-caps text-label-caps">
          <div className="px-4">Kategorija</div>
          <div className="px-4">Standard</div>
          <div className="px-4">Opis</div>
          <div className="px-4">Detalji</div>
        </div>
        {specs.map((spec, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-4 p-4 ${
              idx % 2 === 0 ? 'bg-plaster-white' : 'bg-surface-container-low'
            } border-b border-concrete-grey last:border-b-0`}
          >
            <div className="px-4 font-headline-md text-headline-md">{spec.category}</div>
            <div className="px-4 flex items-center">
              <span className="bg-construction-amber/10 text-primary px-2 py-1 text-sm font-label">
                {spec.standard}
              </span>
            </div>
            <div className="px-4 text-body-md text-on-surface-variant">{spec.description}</div>
            <div className="px-4 text-body-md text-on-surface-variant">{spec.details}</div>
          </div>
        ))}
      </div>
    </>
  );
}
