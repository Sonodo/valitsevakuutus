import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import TransparencyBar from '@/components/ui/TransparencyBar';
import { comparisons } from '@/data/comparisons';
import { getProviderById } from '@/data/providers';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

// ============================================================
// Metadata
// ============================================================

export const metadata: Metadata = {
  title: `Vertaa vakuutusyhtiöitä — Kaikki vakuutusyhtiövertailut | ${SITE_NAME}`,
  description:
    'Vertaa Suomen vakuutusyhtiöitä keskenään. If vs Pohjola, LähiTapiola vs Fennia ja 18 muuta vertailua. Löydä paras vakuutusyhtiö puolueettomalla vertailulla.',
  alternates: {
    canonical: `${SITE_URL}/vertaa`,
  },
  openGraph: {
    title: 'Vertaa vakuutusyhtiöitä — Kaikki vakuutusyhtiövertailut',
    description:
      'Vertaa Suomen vakuutusyhtiöitä keskenään. 20 yksityiskohtaista vertailua auttaa valitsemaan parhaan vakuutusyhtiön.',
    url: `${SITE_URL}/vertaa`,
  },
};

// ============================================================
// Page Component
// ============================================================

export default function ComparisonIndexPage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Vakuutusyhtiövertailut',
    description:
      'Kattava kokoelma Suomen vakuutusyhtiöiden vertailuja. Vertaa hintoja, palvelua, korvauksia ja digitaalisia palveluita.',
    url: `${SITE_URL}/vertaa`,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Etusivu', href: '/' },
              { label: 'Vertaa yhtiöitä' },
            ]}
          />
        </div>
        <TransparencyBar />

        {/* Hero */}
        <section className="bg-navy py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Vertaa vakuutusyhtiöitä
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Puolueeton, yksityiskohtainen vertailu Suomen vakuutusyhtiöiden välillä. Vertaa
              hintoja, palvelua, korvauksia ja digitaalisia palveluita.
            </p>
          </div>
        </section>

        {/* Grid of comparison cards */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {comparisons.map((comparison) => {
                const p1 = getProviderById(comparison.provider1Id);
                const p2 = getProviderById(comparison.provider2Id);

                const p1Avg =
                  comparison.comparisonPoints.reduce((s, p) => s + p.provider1Score, 0) /
                  comparison.comparisonPoints.length;
                const p2Avg =
                  comparison.comparisonPoints.reduce((s, p) => s + p.provider2Score, 0) /
                  comparison.comparisonPoints.length;

                return (
                  <Link
                    key={comparison.slug}
                    href={`/vertaa/${comparison.slug}`}
                    className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg"
                  >
                    {/* Provider badges */}
                    <div className="flex items-center justify-center gap-3 bg-navy px-4 py-5">
                      <div className="flex flex-col items-center">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white"
                          style={{ backgroundColor: p1?.color ?? '#6b7280' }}
                        >
                          {p1?.shortName?.charAt(0) ?? '?'}
                        </div>
                        <span className="mt-1 text-xs font-medium text-white/80">
                          {p1?.shortName}
                        </span>
                      </div>
                      <span className="rounded-full bg-amber px-3 py-1 text-xs font-bold text-navy">
                        VS
                      </span>
                      <div className="flex flex-col items-center">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white"
                          style={{ backgroundColor: p2?.color ?? '#6b7280' }}
                        >
                          {p2?.shortName?.charAt(0) ?? '?'}
                        </div>
                        <span className="mt-1 text-xs font-medium text-white/80">
                          {p2?.shortName}
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5">
                      <h2 className="mb-2 text-sm font-semibold text-navy group-hover:text-teal">
                        {p1?.shortName} vs {p2?.shortName}
                      </h2>
                      <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-gray-600">
                        {comparison.description}
                      </p>

                      {/* Score summary */}
                      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                        <div className="text-center">
                          <div className="text-lg font-bold" style={{ color: p1?.color }}>
                            {p1Avg.toFixed(1)}
                          </div>
                          <div className="text-xs text-gray-500">{p1?.shortName}</div>
                        </div>
                        <span className="text-xs text-gray-400">keskiarvo /10</span>
                        <div className="text-center">
                          <div className="text-lg font-bold" style={{ color: p2?.color }}>
                            {p2Avg.toFixed(1)}
                          </div>
                          <div className="text-xs text-gray-500">{p2?.shortName}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Etkö löytänyt haluamaasi vertailua?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Käytä vertailulaskuriamme ja vertaa kaikkia 10 vakuutusyhtiötä samalla kertaa.
            </p>
            <Link
              href="/vertailu"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-teal shadow-md transition-colors hover:bg-gray-100"
            >
              Aloita vertailu
            </Link>
          </div>
        </section>

        {/* Internal links */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-xl font-bold text-navy">
              Tutustu myös
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/vakuutusyhtiot"
                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-teal hover:text-teal"
              >
                Kaikki vakuutusyhtiöt
              </Link>
              <Link
                href="/autovakuutus"
                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-teal hover:text-teal"
              >
                Autovakuutusvertailu
              </Link>
              <Link
                href="/kotivakuutus"
                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-teal hover:text-teal"
              >
                Kotivakuutusvertailu
              </Link>
              <Link
                href="/matkavakuutus"
                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-teal hover:text-teal"
              >
                Matkavakuutusvertailu
              </Link>
              <Link
                href="/oppaat"
                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-teal hover:text-teal"
              >
                Vakuutusoppaat
              </Link>
              <Link
                href="/vakuutukset"
                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-teal hover:text-teal"
              >
                Vakuutukset alueittain
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
    </>
  );
}
