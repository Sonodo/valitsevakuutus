import { providers } from '@/data/providers';
import { formatPercentage, formatSatisfaction } from '@/lib/utils';

export default function TopProviders() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">
          Vertailemme kaikki Suomen suurimmat vakuutusyhtiöt
        </h2>
        <p className="mt-3 text-gray-600">
          10 vakuutusyhtiötä — puolueeton ja kattava vertailu
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm"
          >
            <div
              className="mb-3 flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white"
              style={{ backgroundColor: provider.color }}
            >
              {provider.shortName.slice(0, 2)}
            </div>
            <h3 className="text-sm font-semibold text-navy">
              {provider.shortName}
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              Markkinaosuus: {formatPercentage(provider.marketShare)}
            </p>
            <p className="text-xs text-gray-500">
              Tyytyväisyys: {formatSatisfaction(provider.satisfaction)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
