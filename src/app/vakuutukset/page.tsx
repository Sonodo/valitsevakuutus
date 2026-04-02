import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { cities } from '@/data/regions';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

// ============================================================
// Metadata
// ============================================================

export const metadata: Metadata = {
  title: `Vakuutukset alueittain — Vertaa vakuutuksia kaupungeittain | ${SITE_NAME}`,
  description:
    'Vertaa vakuutuksia kaupungeittain: Helsinki, Tampere, Oulu, Turku ja 11 muuta kaupunkia. Löydä paras vakuutus omalla alueellasi.',
  alternates: {
    canonical: `${SITE_URL}/vakuutukset`,
  },
  openGraph: {
    title: 'Vakuutukset alueittain — Vertaa vakuutuksia kaupungeittain',
    description:
      'Vertaa vakuutuksia 15 suomalaisessa kaupungissa. Alueelliset hinnat, paikalliset vakuutusyhtiöt ja vinkit.',
    url: `${SITE_URL}/vakuutukset`,
  },
};

// ============================================================
// Group cities by region
// ============================================================

function groupByRegion(
  cityList: typeof cities
): Record<string, typeof cities> {
  const grouped: Record<string, typeof cities> = {};
  for (const city of cityList) {
    if (!grouped[city.region]) grouped[city.region] = [];
    grouped[city.region].push(city);
  }
  return grouped;
}

// ============================================================
// Page Component
// ============================================================

export default function RegionalIndexPage() {
  const regionGroups = groupByRegion(cities);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Vakuutukset alueittain',
    description:
      'Vertaa vakuutuksia kaupungeittain. Alueelliset hinnat ja paikalliset vakuutusyhtiöt 15 suomalaisessa kaupungissa.',
    url: `${SITE_URL}/vakuutukset`,
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
              { label: 'Vakuutukset alueittain' },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="bg-navy py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Vakuutukset alueittain
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Vertaa vakuutuksia omalla paikkakunnallasi. Alueelliset hintaerot voivat olla merkittäviä
              — erityisesti auto- ja kotivakuutuksissa.
            </p>
          </div>
        </section>

        {/* City Grid */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cities
                .sort((a, b) => b.population - a.population)
                .map((city) => (
                  <Link
                    key={city.slug}
                    href={`/vakuutukset/${city.slug}`}
                    className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg"
                  >
                    {/* Top bar with city name */}
                    <div className="bg-navy px-5 py-4">
                      <h2 className="text-lg font-bold text-white group-hover:text-teal-light">
                        {city.name}
                      </h2>
                      <div className="mt-1 flex items-center gap-3 text-xs text-white/70">
                        <span>{city.region}</span>
                        <span>&middot;</span>
                        <span>{city.population.toLocaleString('fi-FI')} asukasta</span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5">
                      {/* Price info */}
                      <div className="mb-4 grid grid-cols-2 gap-3">
                        <div>
                          <div className="text-xs text-gray-500">Autovakuutus</div>
                          <div className="text-sm font-semibold text-navy">
                            {city.averageAutoPrice}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Kotivakuutus</div>
                          <div className="text-sm font-semibold text-navy">
                            {city.averageHomePrice}
                          </div>
                        </div>
                      </div>

                      {/* Top fact */}
                      <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-gray-600">
                        {city.keyFacts[0]}
                      </p>

                      {/* Provider count */}
                      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                        <div className="flex -space-x-2">
                          {city.localProviders.slice(0, 4).map((providerId) => {
                            const provider = (() => {
                              // Inline provider lookup to avoid importing full data
                              const colors: Record<string, string> = {
                                pohjola: '#FF6600',
                                lahitapiola: '#003DA5',
                                if: '#0054A6',
                                fennia: '#ED1C24',
                                turva: '#009639',
                                pohjantahti: '#002F6C',
                                'pop-vakuutus': '#E4002B',
                                aktia: '#8B1FA9',
                                alandia: '#004B87',
                                saastopankki: '#00A3E0',
                              };
                              const names: Record<string, string> = {
                                pohjola: 'P',
                                lahitapiola: 'L',
                                if: 'I',
                                fennia: 'F',
                                turva: 'T',
                                pohjantahti: 'P',
                                'pop-vakuutus': 'P',
                                aktia: 'A',
                                alandia: 'A',
                                saastopankki: 'S',
                              };
                              return {
                                color: colors[providerId] ?? '#6b7280',
                                initial: names[providerId] ?? '?',
                              };
                            })();
                            return (
                              <div
                                key={providerId}
                                className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white"
                                style={{ backgroundColor: provider.color }}
                                title={providerId}
                              >
                                {provider.initial}
                              </div>
                            );
                          })}
                          {city.localProviders.length > 4 && (
                            <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-xs font-bold text-gray-600">
                              +{city.localProviders.length - 4}
                            </div>
                          )}
                        </div>
                        <span className="text-xs font-medium text-teal group-hover:text-teal-dark">
                          Vertaa &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Region groups */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-navy sm:text-3xl">
              Kaupungit maakunnittain
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(regionGroups)
                .sort(([, a], [, b]) => {
                  const popA = a.reduce((s, c) => s + c.population, 0);
                  const popB = b.reduce((s, c) => s + c.population, 0);
                  return popB - popA;
                })
                .map(([region, regionCities]) => (
                  <div
                    key={region}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-5"
                  >
                    <h3 className="mb-3 text-lg font-semibold text-navy">{region}</h3>
                    <div className="space-y-2">
                      {regionCities
                        .sort((a, b) => b.population - a.population)
                        .map((city) => (
                          <Link
                            key={city.slug}
                            href={`/vakuutukset/${city.slug}`}
                            className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-sm transition-colors hover:bg-teal/5"
                          >
                            <span className="font-medium text-gray-700 hover:text-teal">
                              {city.name}
                            </span>
                            <span className="text-xs text-gray-500">
                              {city.population.toLocaleString('fi-FI')} as.
                            </span>
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* SEO text */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-2xl font-bold text-navy">
              Miksi vakuutusten hinta vaihtelee alueittain?
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>
                Vakuutusten hinnoittelu perustuu osittain alueellisiin riskitekijöihin. Autovakuutuksen
                hintaan vaikuttavat esimerkiksi alueen liikennetiheys, onnettomuustilastot ja
                varkausriski. Pääkaupunkiseudulla autovakuutus on tyypillisesti 10–20 % kalliimpi kuin
                muualla Suomessa.
              </p>
              <p>
                Kotivakuutuksen hintaan vaikuttavat alueen asuntohinnat, rakennustyyppi ja
                vahinkohistoria. Rannikkoalueilla kosteusvahinkojen riski on suurempi, kun taas
                Pohjois-Suomessa pakkasvauriot ovat yleisempiä.
              </p>
              <p>
                Vakuutusyhtiöiden paikallinen läsnäolo vaihtelee alueittain. Suuret yhtiöt kuten Pohjola,
                LähiTapiola ja If toimivat valtakunnallisesti, mutta pienemmillä yhtiöillä kuten
                Pohjantähdellä ja Alandialla on vahva paikallinen asema tietyillä alueilla.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Vertaa vakuutuksia omalla alueellasi
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Anna postinumerosi ja löydä paras vakuutus juuri sinulle. Puolueeton ja ilmainen vertailu.
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
            <h2 className="mb-6 text-xl font-bold text-navy">Tutustu myös</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/vertaa"
                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-teal hover:text-teal"
              >
                Vertaa vakuutusyhtiöitä
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
                href="/vakuutusyhtiot"
                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-teal hover:text-teal"
              >
                Kaikki vakuutusyhtiöt
              </Link>
              <Link
                href="/oppaat"
                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-teal hover:text-teal"
              >
                Vakuutusoppaat
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
