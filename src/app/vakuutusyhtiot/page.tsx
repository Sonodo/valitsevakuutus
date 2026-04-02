import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { providers } from '@/data/providers';
import { SITE_URL } from '@/lib/constants';
import { formatSatisfaction, formatPercentage } from '@/lib/utils';
import type { InsuranceProvider } from '@/types';

export const metadata: Metadata = {
  title: 'Vakuutusyhtiöt Suomessa — Vertaa ja löydä paras',
  description:
    'Kattava lista Suomen vakuutusyhtiöistä. Vertaa vakuutusyhtiöiden hintoja, asiakastyytyväisyyttä ja tuotevalikoimaa. 10 yhtiötä vertailussa.',
  alternates: {
    canonical: `${SITE_URL}/vakuutusyhtiot`,
  },
};

const breadcrumbs = [
  { label: 'Etusivu', href: '/' },
  { label: 'Vakuutusyhtiöt', href: '/vakuutusyhtiot' },
];

export default function ProvidersPage() {
  // Sort providers by market share (largest first)
  const sortedProviders = [...providers].sort(
    (a, b) => b.marketShare - a.marketShare
  );

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />

        {/* Intro Section */}
        <section className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Vakuutusyhtiöt Suomessa
            </h1>
            <p className="text-lg text-white/80 sm:text-xl">
              Vertailemme {providers.length} Suomen suurinta vakuutusyhtiötä.
              Puolueeton arvio jokaisesta yhtiöstä — vahvuudet, heikkoudet ja asiakastyytyväisyys.
            </p>
          </div>
        </section>

        {/* Provider Grid */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedProviders.map((provider: InsuranceProvider) => (
              <Link
                key={provider.id}
                href={`/vakuutusyhtiot/${provider.slug}`}
                className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:ring-teal/30"
              >
                {/* Provider Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-navy group-hover:text-teal">
                      {provider.name}
                    </h2>
                    <p className="text-sm text-gray-500">{provider.ownership}</p>
                  </div>
                  {provider.isAffiliate && (
                    <span className="rounded-full bg-amber/10 px-2 py-0.5 text-xs font-medium text-amber">
                      Yhteistyökumppani
                    </span>
                  )}
                </div>

                {/* Key Stats */}
                <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-500">Markkinaosuus</span>
                    <p className="font-semibold text-navy">
                      {formatPercentage(provider.marketShare)}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">Tyytyväisyys</span>
                    <p className="font-semibold text-navy">
                      {formatSatisfaction(provider.satisfaction)}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">Perustettu</span>
                    <p className="font-semibold text-navy">{provider.founded}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Asiakkaita</span>
                    <p className="font-semibold text-navy">{provider.customerCount}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-3">
                  {provider.description}
                </p>

                {/* Strengths Preview */}
                <div className="flex flex-wrap gap-1.5">
                  {provider.strengths.slice(0, 2).map((strength, i) => (
                    <span
                      key={i}
                      className="inline-block rounded-full bg-green-50 px-2.5 py-0.5 text-xs text-green-700"
                    >
                      {strength}
                    </span>
                  ))}
                </div>

                <span className="mt-4 block text-sm font-medium text-teal group-hover:text-teal-dark">
                  Lue arvio &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-teal/5 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-navy">
              Etkö tiedä mikä yhtiö sopii sinulle?
            </h2>
            <p className="mb-6 text-gray-600">
              Käytä ilmaista vertailulaskuriamme ja löydä sinulle sopivin vakuutusyhtiö.
            </p>
            <Link
              href="/vertailu"
              className="inline-block rounded-lg bg-teal px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-teal-dark"
            >
              Aloita vertailu
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
