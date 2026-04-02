import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/lib/constants';
import SavingsCalculator from './SavingsCalculator';

export const metadata: Metadata = {
  title: 'Säästölaskuri — Kuinka paljon voit säästää? | Vakuutusvertailu',
  description:
    'Selvitä kuinka paljon voit säästää vaihtamalla vakuutusyhtiötä. Syötä nykyiset vakuutusmaksusi ja näe potentiaaliset säästöt kaikilta Suomen vakuutusyhtiöiltä.',
  alternates: {
    canonical: `${SITE_URL}/laskurit/saastolaskuri`,
  },
  openGraph: {
    title: 'Vakuutuksen säästölaskuri',
    description:
      'Laske kuinka paljon voisit säästää vakuutusmaksuissa kilpailuttamalla vakuutukset.',
  },
};

export default function SaastolaskuriPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Etusivu', href: '/' },
              { label: 'Laskurit', href: '/laskurit' },
              { label: 'Säästölaskuri' },
            ]}
          />
          <SavingsCalculator />
        </div>
      </main>
      <Footer />
    </>
  );
}
