import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/lib/constants';
import AutoCalculator from './AutoCalculator';

export const metadata: Metadata = {
  title: 'Autovakuutuslaskuri — Laske autovakuutuksen hinta | Vakuutusvertailu',
  description:
    'Laske autovakuutuksen hinta ilmaisella laskurilla. Syötä auton ja kuljettajan tiedot ja vertaa liikenne- ja kaskovakuutusten hintoja kaikilta Suomen vakuutusyhtiöiltä.',
  alternates: {
    canonical: `${SITE_URL}/laskurit/autovakuutuslaskuri`,
  },
  openGraph: {
    title: 'Autovakuutuslaskuri — Laske autovakuutuksen hinta',
    description:
      'Ilmainen autovakuutuslaskuri. Vertaa liikennevakuutuksen ja kaskon hintoja 10 vakuutusyhtiöltä.',
  },
};

export default function AutovakuutuslaskuriPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Etusivu', href: '/' },
              { label: 'Laskurit', href: '/laskurit' },
              { label: 'Autovakuutuslaskuri' },
            ]}
          />
          <AutoCalculator />
        </div>
      </main>
      <Footer />
    </>
  );
}
