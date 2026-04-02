import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { blogPosts } from '@/data/blog-posts';
import { SITE_URL } from '@/lib/constants';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

export const metadata: Metadata = {
  title: 'Vakuutusblogi — Vinkit, oppaat ja vertailut',
  description:
    'Vakuutusvertailun blogi: parhaat vinkit vakuutusten valintaan, vertailut ja asiantuntija-artikkelit. Säästä vakuutuksissa.',
  alternates: {
    canonical: `${SITE_URL}/blogi`,
  },
};

const breadcrumbs = [
  { label: 'Etusivu', href: '/' },
  { label: 'Blogi', href: '/blogi' },
];

const categoryLabels: Record<string, string> = {
  vertailu: 'Vertailu',
  opas: 'Opas',
  uutiset: 'Uutiset',
  vinkit: 'Vinkit',
  lakiasiat: 'Lakiasiat',
};

export default function BlogListingPage() {
  // Sort by publish date (newest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Vakuutusblogi
            </h1>
            <p className="text-lg text-white/80 sm:text-xl">
              Asiantuntija-artikkelit, vertailut ja vinkit vakuutusten maailmasta.
              Opi säästämään vakuutuksissa.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post: BlogPost) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:ring-teal/30"
              >
                <div className="flex flex-1 flex-col p-6">
                  {/* Category Badge */}
                  <span className="mb-3 inline-block w-fit rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal-dark">
                    {categoryLabels[post.category] || post.category}
                  </span>

                  {/* Title */}
                  <h2 className="mb-2 text-lg font-semibold text-navy group-hover:text-teal">
                    <Link href={`/blogi/${post.slug}`}>{post.title}</Link>
                  </h2>

                  {/* Description */}
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>{post.readTime} min lukuaika</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="border-t border-gray-100 px-6 py-3">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal/5 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-navy">
              Valmis vertailemaan vakuutuksia?
            </h2>
            <p className="mb-6 text-gray-600">
              Käytä ilmaista laskuriamme ja löydä sinulle sopivin vakuutus.
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
