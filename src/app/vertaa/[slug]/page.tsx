import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import TransparencyBar from '@/components/ui/TransparencyBar';
import { comparisons, getComparisonBySlug } from '@/data/comparisons';
import { getProviderById } from '@/data/providers';
import { SITE_URL, SITE_NAME, INSURANCE_TYPES } from '@/lib/constants';

// ============================================================
// Static Params — Generate all 20 comparison pages
// ============================================================

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

// ============================================================
// Dynamic Metadata
// ============================================================

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return {};

  const provider1 = getProviderById(comparison.provider1Id);
  const provider2 = getProviderById(comparison.provider2Id);

  return {
    title: `${provider1?.shortName ?? comparison.provider1Id} vs ${provider2?.shortName ?? comparison.provider2Id} — Vakuutusyhtiövertailu 2026`,
    description: comparison.description,
    alternates: {
      canonical: `${SITE_URL}/vertaa/${comparison.slug}`,
    },
    openGraph: {
      title: comparison.title,
      description: comparison.description,
      url: `${SITE_URL}/vertaa/${comparison.slug}`,
      type: 'article',
    },
  };
}

// ============================================================
// Score Bar Component
// ============================================================

function ScoreBar({ score, color }: { score: number; color: string }) {
  const pct = (score / 10) * 100;
  return (
    <div className="flex items-center gap-2">
      <div className="h-3 flex-1 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <span className="w-8 text-right text-sm font-semibold text-gray-700">
        {score}/10
      </span>
    </div>
  );
}

// ============================================================
// Page Component
// ============================================================

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) notFound();

  const provider1 = getProviderById(comparison.provider1Id);
  const provider2 = getProviderById(comparison.provider2Id);

  if (!provider1 || !provider2) notFound();

  const p1Name = provider1.shortName;
  const p2Name = provider2.shortName;
  const p1Color = provider1.color;
  const p2Color = provider2.color;

  // Calculate total scores
  const p1Total = comparison.comparisonPoints.reduce((s, p) => s + p.provider1Score, 0);
  const p2Total = comparison.comparisonPoints.reduce((s, p) => s + p.provider2Score, 0);
  const p1Avg = (p1Total / comparison.comparisonPoints.length).toFixed(1);
  const p2Avg = (p2Total / comparison.comparisonPoints.length).toFixed(1);

  // JSON-LD
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: comparison.title,
    description: comparison.description,
    url: `${SITE_URL}/vertaa/${comparison.slug}`,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    dateModified: '2026-03-28',
  };

  const faqItems = [
    {
      question: `Kumpi on parempi, ${p1Name} vai ${p2Name}?`,
      answer: comparison.verdict,
    },
    {
      question: `Onko ${p1Name} halvempi kuin ${p2Name}?`,
      answer: `Hintavertailussa ${p1Name} saa arvosanan ${comparison.comparisonPoints.find((p) => p.category === 'Hintataso')?.provider1Score ?? '—'}/10 ja ${p2Name} arvosanan ${comparison.comparisonPoints.find((p) => p.category === 'Hintataso')?.provider2Score ?? '—'}/10. Lopullinen hinta riippuu henkilökohtaisista tekijöistä kuten iästä, asuinpaikasta ja vakuutushistoriasta.`,
    },
    {
      question: `Voiko ${p1Name} ja ${p2Name} vakuutuksia vertailla verkossa?`,
      answer: `Kyllä! Vakuutusvertailu.fi tarjoaa ilmaisen ja puolueettoman vertailupalvelun, jossa voit vertailla ${p1Name} ja ${p2Name} vakuutuksia ominaisuuksien, hintojen ja asiakastyytyväisyyden perusteella.`,
    },
    {
      question: `Miten ${p1Name} ja ${p2Name} eroavat korvauspalvelussa?`,
      answer: `Korvauspalveluvertailussa ${p1Name} saa arvosanan ${comparison.comparisonPoints.find((p) => p.category === 'Korvauspalvelu')?.provider1Score ?? '—'}/10 ja ${p2Name} arvosanan ${comparison.comparisonPoints.find((p) => p.category === 'Korvauspalvelu')?.provider2Score ?? '—'}/10. ${comparison.comparisonPoints.find((p) => p.category === 'Korvauspalvelu')?.provider1Text ?? ''}`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
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
              { label: 'Vertaa yhtiöitä', href: '/vertaa' },
              { label: `${p1Name} vs ${p2Name}` },
            ]}
          />
        </div>
        <TransparencyBar />

        {/* Hero Section */}
        <section className="bg-navy py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center justify-center gap-4 sm:gap-8">
              {/* Provider 1 */}
              <div className="flex flex-col items-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white sm:h-20 sm:w-20 sm:text-3xl"
                  style={{ backgroundColor: p1Color }}
                >
                  {p1Name.charAt(0)}
                </div>
                <span className="mt-2 text-lg font-semibold text-white sm:text-xl">
                  {p1Name}
                </span>
              </div>

              {/* VS badge */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber text-lg font-bold text-navy sm:h-14 sm:w-14 sm:text-xl">
                VS
              </div>

              {/* Provider 2 */}
              <div className="flex flex-col items-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white sm:h-20 sm:w-20 sm:text-3xl"
                  style={{ backgroundColor: p2Color }}
                >
                  {p2Name.charAt(0)}
                </div>
                <span className="mt-2 text-lg font-semibold text-white sm:text-xl">
                  {p2Name}
                </span>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {comparison.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
              {comparison.description}
            </p>

            {/* Overall scores */}
            <div className="mx-auto mt-8 flex max-w-md justify-center gap-8 rounded-xl bg-white/10 px-6 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{p1Avg}</div>
                <div className="text-sm text-white/70">{p1Name}</div>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{p2Avg}</div>
                <div className="text-sm text-white/70">{p2Name}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-navy sm:text-3xl">
              Yksityiskohtainen vertailu
            </h2>

            <div className="space-y-6">
              {comparison.comparisonPoints.map((point) => {
                const winner =
                  point.provider1Score > point.provider2Score
                    ? 'p1'
                    : point.provider2Score > point.provider1Score
                      ? 'p2'
                      : 'tie';

                return (
                  <div
                    key={point.category}
                    className="overflow-hidden rounded-xl bg-white shadow-sm"
                  >
                    {/* Category header */}
                    <div className="border-b border-gray-100 bg-gray-50 px-4 py-3 sm:px-6">
                      <h3 className="text-center text-lg font-semibold text-navy">
                        {point.category}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                      {/* Provider 1 */}
                      <div
                        className={`border-b p-4 sm:border-b-0 sm:border-r sm:p-6 ${winner === 'p1' ? 'bg-green-50/50' : ''}`}
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className="font-semibold text-gray-900">{p1Name}</span>
                          {winner === 'p1' && (
                            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                              Voittaja
                            </span>
                          )}
                        </div>
                        <ScoreBar score={point.provider1Score} color={p1Color} />
                        <p className="mt-3 text-sm leading-relaxed text-gray-600">
                          {point.provider1Text}
                        </p>
                      </div>

                      {/* Provider 2 */}
                      <div
                        className={`p-4 sm:p-6 ${winner === 'p2' ? 'bg-green-50/50' : ''}`}
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className="font-semibold text-gray-900">{p2Name}</span>
                          {winner === 'p2' && (
                            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                              Voittaja
                            </span>
                          )}
                        </div>
                        <ScoreBar score={point.provider2Score} color={p2Color} />
                        <p className="mt-3 text-sm leading-relaxed text-gray-600">
                          {point.provider2Text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Score Summary Chart */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-navy sm:text-3xl">
              Pisteyhteenveto
            </h2>

            <div className="space-y-4">
              {comparison.comparisonPoints.map((point) => (
                <div key={point.category} className="flex items-center gap-3">
                  <span className="w-32 shrink-0 text-right text-sm font-medium text-gray-700 sm:w-40">
                    {point.category}
                  </span>
                  <div className="flex flex-1 items-center gap-2">
                    {/* P1 bar (grows right) */}
                    <div className="flex flex-1 justify-end">
                      <div
                        className="h-6 rounded-l-md"
                        style={{
                          width: `${(point.provider1Score / 10) * 100}%`,
                          backgroundColor: p1Color,
                          opacity: 0.8,
                        }}
                      />
                    </div>
                    <div className="flex w-16 items-center justify-center gap-1 text-xs font-semibold">
                      <span style={{ color: p1Color }}>{point.provider1Score}</span>
                      <span className="text-gray-400">|</span>
                      <span style={{ color: p2Color }}>{point.provider2Score}</span>
                    </div>
                    {/* P2 bar (grows left) */}
                    <div className="flex flex-1 justify-start">
                      <div
                        className="h-6 rounded-r-md"
                        style={{
                          width: `${(point.provider2Score / 10) * 100}%`,
                          backgroundColor: p2Color,
                          opacity: 0.8,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-6 flex justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div
                  className="h-3 w-8 rounded"
                  style={{ backgroundColor: p1Color, opacity: 0.8 }}
                />
                <span className="text-gray-600">{p1Name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="h-3 w-8 rounded"
                  style={{ backgroundColor: p2Color, opacity: 0.8 }}
                />
                <span className="text-gray-600">{p2Name}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-navy sm:text-3xl">
              Lopputulos: Kumpi on parempi?
            </h2>
            <div className="rounded-xl border-l-4 border-amber bg-white p-6 shadow-sm sm:p-8">
              <p className="text-lg leading-relaxed text-gray-700">{comparison.verdict}</p>
            </div>
          </div>
        </section>

        {/* Which is better for... */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-navy sm:text-3xl">
              Kumpi on parempi mihinkin vakuutukseen?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  type: 'Autovakuutus',
                  slug: 'autovakuutus',
                  icon: '\uD83D\uDE97',
                  text: `Autovakuutuksessa ${Number(p1Avg) >= Number(p2Avg) ? p1Name : p2Name} on hieman edellä kokonaispisteissä. Vertaa aina omilla tiedoillasi — hinta riippuu autosta, iästä ja bonusluokasta.`,
                },
                {
                  type: 'Kotivakuutus',
                  slug: 'kotivakuutus',
                  icon: '\uD83C\uDFE0',
                  text: `Kotivakuutuksessa tuotevalikoima ja korvauspalvelun laatu ratkaisevat. ${provider1.insuranceTypes.includes('home') && provider2.insuranceTypes.includes('home') ? 'Molemmat yhtiöt tarjoavat kattavan kotivakuutuksen.' : ''}`,
                },
                {
                  type: 'Matkavakuutus',
                  slug: 'matkavakuutus',
                  icon: '\u2708\uFE0F',
                  text: `Matkavakuutuksissa vertaa erityisesti korvausrajoja, omavastuita ja peruutusturvaa. Hintaero yhtiöiden välillä on usein pieni.`,
                },
              ].map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-teal hover:shadow-md"
                >
                  <div className="mb-3 text-3xl">{item.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold text-navy group-hover:text-teal">
                    {item.type}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-navy sm:text-3xl">
              Usein kysyttyä: {p1Name} vs {p2Name}
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-xl bg-white shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-semibold text-navy hover:text-teal">
                    {faq.question}
                    <span className="ml-2 shrink-0 text-gray-400 transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="border-t border-gray-100 px-6 pb-4 pt-3">
                    <p className="text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-teal py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Vertaa vakuutuksia ja säästä
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Löydä paras vakuutus juuri sinulle. Puolueeton vertailu 10 vakuutusyhtiön välillä.
            </p>
            <Link
              href="/vertailu"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-teal shadow-md transition-colors hover:bg-gray-100"
            >
              Aloita vertailu
            </Link>
          </div>
        </section>

        {/* Related Comparisons */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-navy">
              Muut vertailut
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {comparisons
                .filter((c) => c.slug !== comparison.slug)
                .slice(0, 6)
                .map((c) => {
                  const cp1 = getProviderById(c.provider1Id);
                  const cp2 = getProviderById(c.provider2Id);
                  return (
                    <Link
                      key={c.slug}
                      href={`/vertaa/${c.slug}`}
                      className="group flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-all hover:border-teal hover:shadow-md"
                    >
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
                        style={{ backgroundColor: cp1?.color ?? '#6b7280' }}
                      >
                        {cp1?.shortName?.charAt(0) ?? '?'}
                      </div>
                      <span className="text-xs font-semibold text-gray-400">vs</span>
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
                        style={{ backgroundColor: cp2?.color ?? '#6b7280' }}
                      >
                        {cp2?.shortName?.charAt(0) ?? '?'}
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-teal">
                        {cp1?.shortName} vs {cp2?.shortName}
                      </span>
                    </Link>
                  );
                })}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/vertaa"
                className="text-sm font-medium text-teal hover:text-teal-dark"
              >
                Katso kaikki vertailut &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Insurance Disclaimer */}
        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-relaxed text-amber-800">
              <strong>Huomautus:</strong> Tämä on vertailupalvelu, ei vakuutusneuvontaa. Hinta-arviot perustuvat julkisiin hintatietoihin ja ovat suuntaa-antavia. Lopullinen vakuutuksen hinta riippuu yksilöllisistä tekijöistä.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
