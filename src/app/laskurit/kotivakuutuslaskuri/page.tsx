import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/lib/constants';
import HomeCalculator from './HomeCalculator';

export const metadata: Metadata = {
  title: 'Kotivakuutuslaskuri — Laske kotivakuutuksen hinta | Vakuutusvertailu',
  description:
    'Laske kotivakuutuksen hinta ilmaisella laskurilla. Vertaa kotivakuutuksia kerrostalolle, rivitalolle ja omakotitalolle kaikilta Suomen vakuutusyhtiöiltä.',
  alternates: {
    canonical: `${SITE_URL}/laskurit/kotivakuutuslaskuri`,
  },
  openGraph: {
    title: 'Kotivakuutuslaskuri — Laske kotivakuutuksen hinta',
    description:
      'Ilmainen kotivakuutuslaskuri. Vertaa kotivakuutusten hintoja 10 vakuutusyhtiöltä.',
  },
};

export default function KotivakuutuslaskuriPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Etusivu', href: '/' },
              { label: 'Laskurit', href: '/laskurit' },
              { label: 'Kotivakuutuslaskuri' },
            ]}
          />
          <HomeCalculator />
        </div>
      </main>
      <Footer />
    </>
  );
}
