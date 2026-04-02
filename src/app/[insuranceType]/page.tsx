import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CoverageMatrix from '@/components/comparison/CoverageMatrix';
import TransparencyBar from '@/components/ui/TransparencyBar';
import { INSURANCE_TYPES, getInsuranceTypeBySlug, SITE_URL, SITE_NAME } from '@/lib/constants';
import { getProductsByType } from '@/data/providers';
import { getBlogPostsByInsuranceType } from '@/data/blog-posts';
import { getInsuranceTypeFAQ } from '@/data/faq';
import type { InsuranceTypeInfo, InsuranceProduct, BlogPost, FAQItem } from '@/types';

// --- Static params for all 7 insurance types ---
export function generateStaticParams() {
  return INSURANCE_TYPES.map((t) => ({
    insuranceType: t.slug,
  }));
}

// --- Dynamic metadata ---
export async function generateMetadata({
  params,
}: {
  params: Promise<{ insuranceType: string }>;
}): Promise<Metadata> {
  const { insuranceType } = await params;
  const typeInfo = getInsuranceTypeBySlug(insuranceType);
  if (!typeInfo) return {};

  return {
    title: `${typeInfo.name} vertailu 2026 — Vertaa hintoja ja säästä`,
    description: typeInfo.description,
    alternates: {
      canonical: `${SITE_URL}/${typeInfo.slug}`,
    },
    openGraph: {
      title: `${typeInfo.name} vertailu 2026 — Vertaa hintoja ja säästä | ${SITE_NAME}`,
      description: typeInfo.description,
      url: `${SITE_URL}/${typeInfo.slug}`,
    },
  };
}

export default async function InsuranceTypePage({
  params,
}: {
  params: Promise<{ insuranceType: string }>;
}) {
  const { insuranceType } = await params;
  const typeInfo = getInsuranceTypeBySlug(insuranceType);
  if (!typeInfo) notFound();

  const products = getProductsByType(typeInfo.type);
  const relatedPosts = getBlogPostsByInsuranceType(typeInfo.type);
  const faqs = getInsuranceTypeFAQ(typeInfo.type);

  const breadcrumbs = [
    { label: 'Etusivu', href: '/' },
    { label: typeInfo.name, href: `/${typeInfo.slug}` },
  ];

  // Schema.org structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq: FAQItem) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${typeInfo.name} vertailu 2026`,
    description: typeInfo.description,
    url: `${SITE_URL}/${typeInfo.slug}`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  // Group products by provider
  const productsByProvider = products.reduce(
    (acc: Record<string, InsuranceProduct[]>, product: InsuranceProduct) => {
      if (!acc[product.providerId]) acc[product.providerId] = [];
      acc[product.providerId].push(product);
      return acc;
    },
    {} as Record<string, InsuranceProduct[]>
  );

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />
        <TransparencyBar />

        {/* Hero Section */}
        <section className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              {typeInfo.name} vertailu 2026
            </h1>
            <p className="mb-6 text-lg text-white/80 sm:text-xl">
              {typeInfo.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              <span>Markkinan koko: {typeInfo.marketSize}</span>
              <span className="hidden sm:inline">|</span>
              <span>Keskihinta: {typeInfo.averagePrice}</span>
              <span className="hidden sm:inline">|</span>
              <span>{typeInfo.keyFact}</span>
            </div>
            <Link
              href="/vertailu"
              className="mt-8 inline-block rounded-lg bg-teal px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-teal-dark"
            >
              Aloita vertailu
            </Link>
          </div>
        </section>

        {/* Products Grid */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-navy">
            {typeInfo.name} — Yhtiöiden vertailu
          </h2>

          {Object.keys(productsByProvider).length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(productsByProvider).map(
                ([providerId, providerProducts]) => (
                  <div
                    key={providerId}
                    className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
                  >
                    <h3 className="mb-3 text-lg font-semibold text-navy">
                      {providerProducts[0]?.name || providerId}
                    </h3>
                    <ul className="mb-4 space-y-2 text-sm text-gray-600">
                      {providerProducts.map((product) => (
                        <li key={product.id} className="flex items-center justify-between">
                          <span>{product.tier === 'basic' ? 'Perus' : product.tier === 'standard' ? 'Laaja' : product.tier === 'premium' ? 'Premium' : 'Kattava'}</span>
                          <span className="font-medium text-navy">
                            {product.priceRange.min}–{product.priceRange.max} €/{product.priceRange.unit === 'eur/year' ? 'v' : 'kk'}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {providerProducts[0]?.highlights.slice(0, 3).map((h, i) => (
                        <span
                          key={i}
                          className="inline-block rounded-full bg-teal/10 px-3 py-1 text-xs text-teal-dark"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/vakuutusyhtiot/${providerId}`}
                      className="mt-4 block text-center text-sm font-medium text-teal hover:text-teal-dark"
                    >
                      Lue lisää
                    </Link>
                  </div>
                )
              )}
            </div>
          ) : (
            <p className="text-gray-500">Tuotteita ladataan...</p>
          )}
        </section>

        {/* Coverage Comparison Matrix */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-2xl font-bold text-navy">
            Vertaa kattavuutta — {typeInfo.name}
          </h2>
          <p className="mb-6 text-sm text-gray-500">
            Katso mihin turva ulottuu eri vakuutusyhtiöillä. Vihreä merkki tarkoittaa, että turva sisältyy.
          </p>
          <CoverageMatrix
            insuranceType={typeInfo.type}
            maxProviders={6}
          />
        </section>

        {/* Comparison CTA */}
        <section className="bg-teal/5 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-navy">
              Vertaa {typeInfo.shortName.toLowerCase()}vakuutuksia ilmaiseksi
            </h2>
            <p className="mb-6 text-gray-600">
              Käytä ilmaista vakuutuslaskuriamme ja löydä sinulle sopivin {typeInfo.name.toLowerCase()}.
              Vertailemme {Object.keys(productsByProvider).length} vakuutusyhtiön tuotteet puolestasi.
            </p>
            <Link
              href="/vertailu"
              className="inline-block rounded-lg bg-amber px-8 py-3 text-lg font-semibold text-navy transition-colors hover:bg-amber-light"
            >
              Avaa vakuutuslaskuri
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-navy">
              Usein kysytyt kysymykset — {typeInfo.name}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq: FAQItem, index: number) => (
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

        {/* Related Blog Posts */}
        {relatedPosts.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-navy">
              Aiheeseen liittyvät artikkelit
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.slice(0, 3).map((post: BlogPost) => (
                <Link
                  key={post.slug}
                  href={`/blogi/${post.slug}`}
                  className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-2 text-base font-semibold text-navy group-hover:text-teal">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500">{post.description}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-teal">
                    Lue lisää &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}
