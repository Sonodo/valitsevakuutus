import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { guides, getGuideBySlug, getRelatedGuides } from '@/data/guides';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { formatDateLong } from '@/lib/utils';
import type { Guide, TOCItem } from '@/types';

// --- Static params for all guide slugs ---
export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

// --- Dynamic metadata ---
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `${SITE_URL}/oppaat/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.title} | ${SITE_NAME}`,
      description: guide.description,
      url: `${SITE_URL}/oppaat/${guide.slug}`,
      type: 'article',
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt || guide.publishedAt,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedGuides = getRelatedGuides(guide.slug);

  const breadcrumbs = [
    { label: 'Etusivu', href: '/' },
    { label: 'Oppaat', href: '/oppaat' },
    { label: guide.title, href: `/oppaat/${guide.slug}` },
  ];

  // Schema.org Article for guide
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt || guide.publishedAt,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/oppaat/${guide.slug}`,
    },
    wordCount: guide.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Table of Contents Sidebar */}
            {guide.tableOfContents.length > 0 && (
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                  <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Sisällysluettelo
                  </h2>
                  <nav>
                    <ul className="space-y-2">
                      {guide.tableOfContents.map((item: TOCItem) => (
                        <li
                          key={item.id}
                          style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
                        >
                          <a
                            href={`#${item.id}`}
                            className="block text-sm text-gray-600 transition-colors hover:text-teal"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Related Guides in sidebar */}
                  {relatedGuides.length > 0 && (
                    <div className="mt-6 border-t border-gray-100 pt-6">
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                        Muut oppaat
                      </h3>
                      <ul className="space-y-2">
                        {relatedGuides.map((rg: Guide) => (
                          <li key={rg.slug}>
                            <Link
                              href={`/oppaat/${rg.slug}`}
                              className="block text-sm text-gray-600 hover:text-teal"
                            >
                              {rg.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </aside>
            )}

            {/* Main Content */}
            <div
              className={
                guide.tableOfContents.length > 0
                  ? 'lg:col-span-3'
                  : 'lg:col-span-4 lg:mx-auto lg:max-w-4xl'
              }
            >
              {/* Guide Header */}
              <header className="mb-8">
                <span className="mb-3 inline-block rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy">
                  Opas
                </span>
                <h1 className="mb-4 text-3xl font-bold text-navy sm:text-4xl">
                  {guide.title}
                </h1>
                <p className="mb-4 text-lg text-gray-600">{guide.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{guide.author}</span>
                  <span>|</span>
                  <time dateTime={guide.publishedAt}>
                    {formatDateLong(guide.publishedAt)}
                  </time>
                  <span>|</span>
                  <span>{guide.readTime} min lukuaika</span>
                  {guide.updatedAt && (
                    <>
                      <span>|</span>
                      <span>Päivitetty: {formatDateLong(guide.updatedAt)}</span>
                    </>
                  )}
                </div>
              </header>

              {/* Mobile TOC */}
              {guide.tableOfContents.length > 0 && (
                <details className="mb-8 rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200 lg:hidden">
                  <summary className="cursor-pointer text-sm font-semibold text-navy">
                    Sisällysluettelo
                  </summary>
                  <nav className="mt-3">
                    <ul className="space-y-1.5">
                      {guide.tableOfContents.map((item: TOCItem) => (
                        <li
                          key={item.id}
                          style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
                        >
                          <a
                            href={`#${item.id}`}
                            className="text-sm text-gray-600 hover:text-teal"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </details>
              )}

              {/* Guide Content */}
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: guide.content }}
              />

              {/* Related Guides (bottom, mobile-visible) */}
              {relatedGuides.length > 0 && (
                <div className="mt-12 border-t border-gray-200 pt-8">
                  <h2 className="mb-6 text-2xl font-bold text-navy">
                    Muut oppaat
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {relatedGuides.map((rg: Guide) => (
                      <Link
                        key={rg.slug}
                        href={`/oppaat/${rg.slug}`}
                        className="group rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
                      >
                        <h3 className="mb-2 text-base font-semibold text-navy group-hover:text-teal">
                          {rg.title}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {rg.description}
                        </p>
                        <span className="mt-2 inline-block text-sm font-medium text-teal">
                          Lue opas &rarr;
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 rounded-xl bg-teal/5 p-8 text-center ring-1 ring-teal/20">
                <h2 className="mb-3 text-xl font-bold text-navy">
                  Valmis vertailemaan vakuutuksia?
                </h2>
                <p className="mb-6 text-sm text-gray-600">
                  Käytä ilmaista laskuriamme ja löydä sinulle sopivin vakuutus.
                </p>
                <Link
                  href="/vertailu"
                  className="inline-block rounded-lg bg-teal px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-teal-dark"
                >
                  Aloita vertailu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
