import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { providers, getProviderBySlug } from '@/data/providers';
import { SITE_URL, SITE_NAME, getInsuranceTypeByType } from '@/lib/constants';
import { formatSatisfaction, formatPercentage, classifyRating, formatDate } from '@/lib/utils';
import type { InsuranceProvider, InsuranceProduct, FAQItem } from '@/types';

// --- Static params for all provider slugs ---
export function generateStaticParams() {
  return providers.map((p) => ({
    slug: p.slug,
  }));
}

// --- Dynamic metadata ---
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  if (!provider) return {};

  return {
    title: `${provider.name} — Arvio, tuotteet ja hinnat 2026`,
    description: `${provider.name} vakuutusvertailu: tuotteet, hinnat, asiakastyytyväisyys ja puolueeton arvio. ${provider.description}`,
    alternates: {
      canonical: `${SITE_URL}/vakuutusyhtiot/${provider.slug}`,
    },
    openGraph: {
      title: `${provider.name} — Arvio, tuotteet ja hinnat 2026 | ${SITE_NAME}`,
      description: provider.description,
      url: `${SITE_URL}/vakuutusyhtiot/${provider.slug}`,
    },
  };
}

export default async function ProviderDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  if (!provider) notFound();

  const breadcrumbs = [
    { label: 'Etusivu', href: '/' },
    { label: 'Vakuutusyhtiöt', href: '/vakuutusyhtiot' },
    { label: provider.name, href: `/vakuutusyhtiot/${provider.slug}` },
  ];

  // Products grouped by insurance type
  const productsByType = provider.products.reduce(
    (acc: Record<string, InsuranceProduct[]>, product) => {
      if (!acc[product.type]) acc[product.type] = [];
      acc[product.type].push(product);
      return acc;
    },
    {} as Record<string, InsuranceProduct[]>
  );

  // Related providers (same size or adjacent market share)
  const relatedProviders = providers
    .filter((p) => p.id !== provider.id)
    .sort(
      (a, b) =>
        Math.abs(a.marketShare - provider.marketShare) -
        Math.abs(b.marketShare - provider.marketShare)
    )
    .slice(0, 3);

  // Schema.org
  const providerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: provider.name,
    url: provider.website,
    description: provider.longDescription,
    foundingDate: String(provider.founded),
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: provider.employeeCount,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: provider.satisfaction,
      bestRating: 10,
      worstRating: 0,
      reviewCount: provider.reviewCount,
    },
  };

  const faqSchema = provider.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: provider.faq.map((faq: FAQItem) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />

        {/* Provider Hero */}
        <section className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white p-3 text-2xl font-bold text-navy">
                {provider.shortName}
              </div>
              <div>
                <h1 className="mb-2 text-3xl font-bold sm:text-4xl">
                  {provider.name}
                </h1>
                <p className="text-lg text-white/80">{provider.description}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">
                  <span>Perustettu {provider.founded}</span>
                  <span>|</span>
                  <span>Markkinaosuus {formatPercentage(provider.marketShare)}</span>
                  <span>|</span>
                  <span>Tyytyväisyys {formatSatisfaction(provider.satisfaction)}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About */}
              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-navy">
                  Tietoa — {provider.name}
                </h2>
                <p className="mb-6 leading-relaxed text-gray-700">
                  {provider.longDescription}
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
                    <p className="text-sm text-gray-500">Omistusmuoto</p>
                    <p className="font-semibold text-navy">{provider.ownership}</p>
                  </div>
                  <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
                    <p className="text-sm text-gray-500">Pääkonttori</p>
                    <p className="font-semibold text-navy">{provider.headquarters}</p>
                  </div>
                  <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
                    <p className="text-sm text-gray-500">Henkilöstö</p>
                    <p className="font-semibold text-navy">{provider.employeeCount}</p>
                  </div>
                  <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
                    <p className="text-sm text-gray-500">Asiakkaita</p>
                    <p className="font-semibold text-navy">{provider.customerCount}</p>
                  </div>
                </div>
              </section>

              {/* Ratings */}
              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-navy">Arvosanat</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: 'Asiakastyytyväisyys', value: provider.satisfaction },
                    { label: 'Korvauspalvelu', value: provider.claimProcessRating },
                    { label: 'Verkkopalvelu', value: provider.onlineServiceRating },
                    { label: 'Hintakilpailukyky', value: provider.priceCompetitiveness },
                  ].map((rating) => (
                    <div
                      key={rating.label}
                      className="rounded-lg bg-white p-4 ring-1 ring-gray-200"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm text-gray-600">{rating.label}</span>
                        <span className="text-lg font-bold text-navy">
                          {rating.value.toFixed(1)}/10
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100">
                        <div
                          className="h-2 rounded-full bg-teal"
                          style={{ width: `${(rating.value / 10) * 100}%` }}
                        />
                      </div>
                      <p className="mt-1 text-xs capitalize text-gray-500">
                        {classifyRating(rating.value)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Strengths & Weaknesses */}
              <section className="mb-12 grid gap-6 sm:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-xl font-bold text-green-700">Vahvuudet</h2>
                  <ul className="space-y-2">
                    {provider.strengths.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-0.5 text-green-600">+</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="mb-4 text-xl font-bold text-red-700">Heikkoudet</h2>
                  <ul className="space-y-2">
                    {provider.weaknesses.map((w, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-0.5 text-red-600">-</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Products Table */}
              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-navy">
                  Tuotteet ja hinnat
                </h2>
                {Object.entries(productsByType).map(([type, products]) => {
                  const typeInfo = getInsuranceTypeByType(type);
                  return (
                    <div key={type} className="mb-8">
                      <h3 className="mb-3 text-lg font-semibold text-navy">
                        {typeInfo?.name || type}
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
                              <th className="px-4 py-3 font-semibold">Tuote</th>
                              <th className="px-4 py-3 font-semibold">Taso</th>
                              <th className="px-4 py-3 font-semibold">Hinta</th>
                              <th className="px-4 py-3 font-semibold">Päivitetty</th>
                            </tr>
                          </thead>
                          <tbody>
                            {products.map((product) => (
                              <tr
                                key={product.id}
                                className="border-b border-gray-100"
                              >
                                <td className="px-4 py-3 font-medium text-navy">
                                  {product.name}
                                </td>
                                <td className="px-4 py-3 capitalize text-gray-600">
                                  {product.tier}
                                </td>
                                <td className="px-4 py-3 font-medium text-navy">
                                  {product.priceRange.min}–{product.priceRange.max} €/
                                  {product.priceRange.unit === 'eur/year' ? 'v' : 'kk'}
                                </td>
                                <td className="px-4 py-3 text-gray-500">
                                  {formatDate(product.lastVerified)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })}
                <p className="text-xs text-gray-400">
                  Hinnat ovat arvioita ja perustuvat julkisiin hintatietoihin. Lopullinen hinta
                  riippuu yksilöllisistä tekijöistä.
                </p>
              </section>

              {/* Coverage Details */}
              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-navy">
                  Erityisominaisuudet
                </h2>
                <div className="flex flex-wrap gap-2">
                  {provider.specialFeatures.map((feature, i) => (
                    <span
                      key={i}
                      className="inline-block rounded-full bg-teal/10 px-3 py-1.5 text-sm text-teal-dark"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                {provider.concentrationBenefits && (
                  <div className="mt-6 rounded-lg bg-amber/5 p-4 ring-1 ring-amber/20">
                    <h3 className="mb-2 text-sm font-semibold text-navy">
                      Keskittämisetu
                    </h3>
                    <p className="text-sm text-gray-600">
                      {provider.concentrationBenefits}
                    </p>
                  </div>
                )}
              </section>

              {/* FAQ */}
              {provider.faq.length > 0 && (
                <section className="mb-12">
                  <h2 className="mb-4 text-2xl font-bold text-navy">
                    Usein kysytyt kysymykset — {provider.name}
                  </h2>
                  <div className="space-y-3">
                    {provider.faq.map((faq: FAQItem, index: number) => (
                      <details
                        key={index}
                        className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200"
                      >
                        <summary className="cursor-pointer text-base font-medium text-navy group-open:mb-2">
                          {faq.question}
                        </summary>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA */}
              <section className="rounded-xl bg-teal/5 p-8 text-center ring-1 ring-teal/20">
                <h2 className="mb-3 text-xl font-bold text-navy">
                  Kiinnostaako {provider.name}?
                </h2>
                <p className="mb-6 text-sm text-gray-600">
                  {provider.isAffiliate
                    ? 'Siirry vakuutusyhtiön sivuille ja pyydä tarjous.'
                    : 'Käy vakuutusyhtiön sivuilla saadaksesi tarjouksen.'}
                </p>
                {provider.isAffiliate && provider.affiliateUrl ? (
                  <a
                    href={provider.affiliateUrl}
                    rel="sponsored nofollow noopener"
                    target="_blank"
                    className="inline-block rounded-lg bg-teal px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-teal-dark"
                  >
                    Siirry sivuille
                    <span className="ml-2 rounded bg-white/20 px-1.5 py-0.5 text-xs">
                      Mainos
                    </span>
                  </a>
                ) : (
                  <a
                    href={provider.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-navy px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-navy-light"
                  >
                    Käy sivuilla
                  </a>
                )}
                {provider.isAffiliate && provider.affiliateDisclosure && (
                  <p className="mt-3 text-xs text-gray-400">
                    {provider.affiliateDisclosure}
                  </p>
                )}
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Quick Info Card */}
              <div className="sticky top-24 space-y-6">
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                  <h3 className="mb-4 text-lg font-semibold text-navy">Pikafaktat</h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Verkkopalvelu</dt>
                      <dd className="font-medium text-navy">
                        {provider.onlineServiceRating.toFixed(1)}/10
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Mobiilisovellus</dt>
                      <dd className="font-medium text-navy">
                        {provider.appAvailable ? 'Kyllä' : 'Ei'}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Vakuutuslajit</dt>
                      <dd className="font-medium text-navy">
                        {provider.insuranceTypes.length}
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <h4 className="mb-2 text-xs font-semibold uppercase text-gray-400">
                      Verkkopalvelut
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {provider.onlineCapabilities.map((cap, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-green-500">&#10003;</span>
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Related Providers */}
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                  <h3 className="mb-4 text-lg font-semibold text-navy">
                    Muut vakuutusyhtiöt
                  </h3>
                  <ul className="space-y-3">
                    {relatedProviders.map((rp: InsuranceProvider) => (
                      <li key={rp.id}>
                        <Link
                          href={`/vakuutusyhtiot/${rp.slug}`}
                          className="flex items-center justify-between rounded-lg p-2 text-sm transition-colors hover:bg-gray-50"
                        >
                          <span className="font-medium text-navy">{rp.name}</span>
                          <span className="text-gray-400">
                            {formatSatisfaction(rp.satisfaction)}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/vakuutusyhtiot"
                    className="mt-4 block text-center text-sm font-medium text-teal hover:text-teal-dark"
                  >
                    Näytä kaikki yhtiöt &rarr;
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(providerSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
