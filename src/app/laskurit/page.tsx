import type { Metadata } from 'next';
import Link from 'next/link';
import { Car, Home, PiggyBank, Award, PawPrint, Calculator } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Vakuutuslaskurit — Laske vakuutuksen hinta | Vakuutusvertailu',
  description:
    'Ilmaiset vakuutuslaskurit: autovakuutuslaskuri, kotivakuutuslaskuri, säästölaskuri, bonuslaskuri ja lemmikkivakuutuslaskuri. Laske vakuutuksen hinta ja vertaa vakuutusyhtiöitä.',
  alternates: {
    canonical: `${SITE_URL}/laskurit`,
  },
  openGraph: {
    title: 'Vakuutuslaskurit — Laske vakuutuksen hinta',
    description:
      'Ilmaiset vakuutuslaskurit kaikille vakuutustyypeille. Vertaa hintoja ja löydä halvin vakuutus.',
  },
};

const calculators = [
  {
    title: 'Autovakuutuslaskuri',
    description:
      'Laske autovakuutuksen hinta auton ja kuljettajan tietojen perusteella. Vertaa liikenne- ja kaskovakuutusten hintoja kaikilta vakuutusyhtiöiltä.',
    href: '/laskurit/autovakuutuslaskuri',
    icon: Car,
    color: 'bg-teal/10 text-teal',
    popular: true,
  },
  {
    title: 'Kotivakuutuslaskuri',
    description:
      'Laske kotivakuutuksen hinta asunnon tyypin, koon ja irtaimiston arvon perusteella. Vertaa kotivakuutuksia eri yhtiöiltä.',
    href: '/laskurit/kotivakuutuslaskuri',
    icon: Home,
    color: 'bg-green-100 text-green-700',
    popular: true,
  },
  {
    title: 'Säästölaskuri',
    description:
      'Selvitä kuinka paljon voit säästää vaihtamalla vakuutusyhtiötä. Syötä nykyiset vakuutusmaksusi ja näe potentiaaliset säästöt.',
    href: '/laskurit/saastolaskuri',
    icon: PiggyBank,
    color: 'bg-amber/10 text-amber',
    popular: false,
  },
  {
    title: 'Bonuslaskuri',
    description:
      'Laske autovakuutuksen bonusluokan vaikutus hintaan. Näe miten bonus kehittyy vuosi vuodelta ja miten vahinko vaikuttaa.',
    href: '/laskurit/bonuslaskuri',
    icon: Award,
    color: 'bg-purple-100 text-purple-700',
    popular: false,
  },
  {
    title: 'Lemmikkivakuutuslaskuri',
    description:
      'Laske lemmikkivakuutuksen hinta koiralle, kissalle tai kanille. Vertaa lemmikkivakuutuksia eri vakuutusyhtiöiltä.',
    href: '/laskurit/lemmikkivakuutuslaskuri',
    icon: PawPrint,
    color: 'bg-orange-100 text-orange-600',
    popular: false,
  },
];

export default function LaskuritIndexPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Etusivu', href: '/' },
              { label: 'Laskurit' },
            ]}
          />

          {/* Hero */}
          <section className="pb-8 pt-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10">
                <Calculator className="h-6 w-6 text-teal" />
              </div>
              <h1 className="text-3xl font-bold text-navy sm:text-4xl">
                Vakuutuslaskurit
              </h1>
            </div>
            <p className="max-w-2xl text-lg text-gray-600">
              Ilmaiset vakuutuslaskurit auttavat sinua vertaamaan vakuutusten hintoja
              ja löytämään edullisimman vaihtoehdon. Valitse laskuri alta.
            </p>
          </section>

          {/* Calculator Cards Grid */}
          <section className="grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
            {calculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <Link
                  key={calc.href}
                  href={calc.href}
                  className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-teal/30"
                >
                  {calc.popular && (
                    <span className="absolute -top-2.5 right-4 rounded-full bg-amber px-3 py-0.5 text-xs font-semibold text-white">
                      Suosittu
                    </span>
                  )}
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${calc.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mb-2 text-xl font-bold text-navy group-hover:text-teal transition-colors">
                    {calc.title}
                  </h2>
                  <p className="flex-1 text-sm text-gray-600 leading-relaxed">
                    {calc.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-semibold text-teal">
                    Avaa laskuri
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </section>

          {/* Disclaimer */}
          <section className="pb-12">
            <div className="rounded-xl bg-amber/5 border border-amber/20 p-4">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-800">Huomio:</strong> Hinta-arviot
                ovat suuntaa-antavia ja perustuvat julkisiin hintatietoihin.
                Lopullinen vakuutuksen hinta riippuu yksilöllisistä tekijöistä ja
                määräytyy vakuutusyhtiön omassa laskurissa.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
