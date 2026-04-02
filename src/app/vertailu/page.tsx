import type { Metadata } from 'next';
import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ComparisonCalculator from '@/components/calculator/ComparisonCalculator';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Vertaa vakuutuksia — Ilmainen vakuutuslaskuri',
  description:
    'Vertaa vakuutuksia ilmaiseksi. Vakuutuslaskuri vertailee autovakuutuksia, kotivakuutuksia, matkavakuutuksia ja muita vakuutuksia 10 yhtiöltä. 100% puolueeton.',
  alternates: {
    canonical: `${SITE_URL}/vertailu`,
  },
};

const breadcrumbs = [
  { label: 'Etusivu', href: '/' },
  { label: 'Vertailu', href: '/vertailu' },
];

export default function ComparisonPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />

        {/* Transparency Bar */}
        <div className="border-b border-teal/20 bg-teal/5 px-4 py-3 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center gap-3 text-sm text-teal-dark">
            <span className="flex-shrink-0 font-semibold">
              Näin vertailumme toimii:
            </span>
            <p className="text-gray-600">
              Vertaamme 10 vakuutusyhtiön tuotteita. Osa linkeistä on mainoslinkkejä,
              joista saamme pienen korvauksen. Tämä ei vaikuta vertailujärjestykseen tai
              suosituksiimme.{' '}
              <a
                href="/metodologia"
                className="font-medium text-teal underline hover:text-teal-dark"
              >
                Lue lisää &rarr;
              </a>
            </p>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy px-4 py-12 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
              Vertaa vakuutuksia
            </h1>
            <p className="text-lg text-white/80">
              Valitse vakuutustyyppi, kerro tarpeesi ja vertaa hintoja ja ehtoja.
              Ilmainen ja puolueeton palvelu.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="py-12 text-center text-gray-400">Ladataan laskuria...</div>}>
            <ComparisonCalculator />
          </Suspense>
        </section>

        {/* Disclaimer */}
        <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-gray-100 p-4 text-xs text-gray-500">
            <p className="mb-2 font-semibold">Huomautus</p>
            <p>
              Tämä on vertailupalvelu, ei vakuutusneuvontaa. Hinta-arviot perustuvat
              julkisiin hintatietoihin ja ovat suuntaa-antavia. Lopullinen hinta riippuu
              yksilöllisistä tekijöistä. Pyydä sitova tarjous suoraan vakuutusyhtiöltä.
              Affiliate-linkit on merkitty &quot;Mainos&quot;-tunnisteella.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
