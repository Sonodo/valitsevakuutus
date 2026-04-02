import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/lib/constants';
import PetCalculator from './PetCalculator';

export const metadata: Metadata = {
  title: 'Lemmikkivakuutuslaskuri — Laske lemmikkivakuutuksen hinta | Vakuutusvertailu',
  description:
    'Laske lemmikkivakuutuksen hinta koiralle, kissalle tai kanille. Vertaa lemmikkivakuutuksia kaikilta Suomen vakuutusyhtiöiltä ja löydä halvin vaihtoehto.',
  alternates: {
    canonical: `${SITE_URL}/laskurit/lemmikkivakuutuslaskuri`,
  },
  openGraph: {
    title: 'Lemmikkivakuutuslaskuri — Laske lemmikkivakuutuksen hinta',
    description:
      'Ilmainen lemmikkivakuutuslaskuri. Vertaa koiran, kissan ja kanin vakuutuksia.',
  },
};

export default function LemmikkivakuutuslaskuriPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Etusivu', href: '/' },
              { label: 'Laskurit', href: '/laskurit' },
              { label: 'Lemmikkivakuutuslaskuri' },
            ]}
          />
          <PetCalculator />
        </div>
      </main>
      <Footer />
    </>
  );
}
