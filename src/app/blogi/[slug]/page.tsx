import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { blogPosts, getBlogPostBySlug, getRelatedBlogPosts } from '@/data/blog-posts';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { formatDateLong } from '@/lib/utils';
import type { BlogPost, TOCItem } from '@/types';

// --- Static params for all blog post slugs ---
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// --- Dynamic metadata ---
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${SITE_URL}/blogi/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      url: `${SITE_URL}/blogi/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedBlogPosts(post.slug);

  const breadcrumbs = [
    { label: 'Etusivu', href: '/' },
    { label: 'Blogi', href: '/blogi' },
    { label: post.title, href: `/blogi/${post.slug}` },
  ];

  // Schema.org Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
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
      '@id': `${SITE_URL}/blogi/${post.slug}`,
    },
    wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />

        <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Table of Contents Sidebar */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                  <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Sisällysluettelo
                  </h2>
                  <nav>
                    <ul className="space-y-2">
                      {post.tableOfContents.map((item: TOCItem) => (
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
                </div>
              </aside>
            )}

            {/* Main Content */}
            <div
              className={
                post.tableOfContents && post.tableOfContents.length > 0
                  ? 'lg:col-span-3'
                  : 'lg:col-span-4 lg:mx-auto lg:max-w-3xl'
              }
            >
              {/* Article Header */}
              <header className="mb-8">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal-dark">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-400">
                    {post.readTime} min lukuaika
                  </span>
                </div>
                <h1 className="mb-4 text-3xl font-bold text-navy sm:text-4xl">
                  {post.title}
                </h1>
                <p className="mb-4 text-lg text-gray-600">{post.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>|</span>
                  <time dateTime={post.publishedAt}>
                    {formatDateLong(post.publishedAt)}
                  </time>
                  {post.updatedAt && (
                    <>
                      <span>|</span>
                      <span>
                        Päivitetty: {formatDateLong(post.updatedAt)}
                      </span>
                    </>
                  )}
                </div>
              </header>

              {/* Mobile TOC */}
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <details className="mb-8 rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200 lg:hidden">
                  <summary className="cursor-pointer text-sm font-semibold text-navy">
                    Sisällysluettelo
                  </summary>
                  <nav className="mt-3">
                    <ul className="space-y-1.5">
                      {post.tableOfContents.map((item: TOCItem) => (
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

              {/* Article Content */}
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="mb-3 text-sm font-semibold text-gray-500">Avainsanat</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12 border-t border-gray-200 pt-8">
                  <h2 className="mb-6 text-2xl font-bold text-navy">
                    Lue myös
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedPosts.slice(0, 3).map((related: BlogPost) => (
                      <Link
                        key={related.slug}
                        href={`/blogi/${related.slug}`}
                        className="group rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
                      >
                        <h3 className="mb-2 text-base font-semibold text-navy group-hover:text-teal">
                          {related.title}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {related.description}
                        </p>
                        <span className="mt-2 inline-block text-sm font-medium text-teal">
                          Lue lisää &rarr;
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
