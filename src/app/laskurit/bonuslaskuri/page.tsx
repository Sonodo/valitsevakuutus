import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/lib/constants';
import BonusCalculator from './BonusCalculator';

export const metadata: Metadata = {
  title: 'Bonuslaskuri — Autovakuutuksen bonusluokan vaikutus | Vakuutusvertailu',
  description:
    'Laske autovakuutuksen bonusluokan vaikutus hintaan. Näe miten bonus kehittyy vuosi vuodelta ja kuinka vahinko vaikuttaa bonuksiisi.',
  alternates: {
    canonical: `${SITE_URL}/laskurit/bonuslaskuri`,
  },
  openGraph: {
    title: 'Autovakuutuksen bonuslaskuri',
    description:
      'Laske miten bonusluokka vaikuttaa autovakuutuksen hintaan ja miten vahinko muuttaa bonustasi.',
  },
};

export default function BonuslaskuriPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Etusivu', href: '/' },
              { label: 'Laskurit', href: '/laskurit' },
              { label: 'Bonuslaskuri' },
            ]}
          />
          <BonusCalculator />
        </div>
      </main>
      <Footer />
    </>
  );
}
