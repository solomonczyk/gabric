import { portfolioPairs } from '@/lib/portfolio';

function PortfolioCard({ pair }: { pair: (typeof portfolioPairs)[number] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 group">
      <div className="relative overflow-hidden border border-outline-variant">
        <img
          src={pair.before.image}
          alt={pair.before.label}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="relative overflow-hidden border border-outline-variant">
        <img
          src={pair.after.image}
          alt={pair.after.label}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <>
      {/* Header Section */}
      <div className="max-w-container-max mx-auto px-4 md:px-gutter pt-24 md:pt-32 pb-12">
        <div className="mb-12 border-l-4 border-gold-primary pl-6">
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-white mb-4">
            Portfolio radova
          </h1>
          <p className="font-body-lg text-body-lg text-text-light">
            Pregled izvedenih radova kroz različite faze — konstrukcija, montaža gipsanih ploča, bandažiranje, gletovanje, krečenje i završna obrada.
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="space-y-12">
          {portfolioPairs.map((pair) => (
            <PortfolioCard key={pair.id} pair={pair} />
          ))}
        </div>
      </div>
    </>
  );
}
