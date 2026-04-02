import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { guides } from '@/data/guides';
import { SITE_URL } from '@/lib/constants';
import { formatDate } from '@/lib/utils';
import type { Guide } from '@/types';

export const metadata: Metadata = {
  title: 'Vakuutusoppaat — Kaikki mitä sinun pitää tietää vakuutuksista',
  description:
    'Kattavat vakuutusoppaat: autovakuutus, kotivakuutus, vakuutuksen irtisanominen ja vakuutussanasto. Opi tekemään parempia vakuutuspäätöksiä.',
  alternates: {
    canonical: `${SITE_URL}/oppaat`,
  },
};

const breadcrumbs = [
  { label: 'Etusivu', href: '/' },
  { label: 'Oppaat', href: '/oppaat' },
];

export default function GuidesListingPage() {
  // Sort guides by publish date (newest first)
  const sortedGuides = [...guides].sort(
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
              Vakuutusoppaat
            </h1>
            <p className="text-lg text-white/80 sm:text-xl">
              Kattavat oppaat vakuutusten maailmaan. Opi valitsemaan oikea vakuutus,
              ymmärtämään ehdot ja säästämään rahaa.
            </p>
          </div>
        </section>

        {/* Guide Grid */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sortedGuides.map((guide: Guide) => (
              <Link
                key={guide.slug}
                href={`/oppaat/${guide.slug}`}
                className="group flex flex-col rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:ring-teal/30"
              >
                <div className="flex flex-1 flex-col p-6">
                  {/* Category Badge */}
                  <span className="mb-3 inline-block w-fit rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy">
                    {guide.category === 'general' ? 'Yleinen' : guide.category}
                  </span>

                  {/* Title */}
                  <h2 className="mb-2 text-lg font-semibold text-navy group-hover:text-teal">
                    {guide.title}
                  </h2>

                  {/* Description */}
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
                    {guide.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{formatDate(guide.publishedAt)}</span>
                    <span>{guide.readTime} min lukuaika</span>
                  </div>
                </div>

                {/* TOC Preview */}
                {guide.tableOfContents.length > 0 && (
                  <div className="border-t border-gray-100 px-6 py-3">
                    <p className="mb-1 text-xs font-semibold text-gray-400">Sisältö:</p>
                    <ul className="space-y-0.5">
                      {guide.tableOfContents.slice(0, 3).map((item) => (
                        <li key={item.id} className="text-xs text-gray-500">
                          {item.title}
                        </li>
                      ))}
                      {guide.tableOfContents.length > 3 && (
                        <li className="text-xs text-teal">
                          + {guide.tableOfContents.length - 3} lisää...
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal/5 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-navy">
              Valmis vertailemaan?
            </h2>
            <p className="mb-6 text-gray-600">
              Nyt kun tiedät enemmän vakuutuksista, vertaa hintoja ilmaisella laskurillamme.
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
