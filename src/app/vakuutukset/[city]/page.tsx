import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { cities, getCityBySlug } from '@/data/regions';
import { getProviderById } from '@/data/providers';
import { SITE_URL, SITE_NAME, INSURANCE_TYPES } from '@/lib/constants';

// ============================================================
// Static Params — Generate all 15 city pages
// ============================================================

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

// ============================================================
// Dynamic Metadata
// ============================================================

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  const title = `Vakuutukset ${city.nameInessive} — Vertaa vakuutuksia ${city.nameInessive} 2026`;
  const description = `Vertaa vakuutuksia ${city.nameInessive}: autovakuutus, kotivakuutus, matkavakuutus ja muut. Löydä paras vakuutus ${city.name} seudulla. Hinnat ja yhtiövertailu.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/vakuutukset/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/vakuutukset/${city.slug}`,
      type: 'article',
    },
  };
}

// ============================================================
// Page Component
// ============================================================

export default async function CityInsurancePage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const localProviders = city.localProviders
    .map((id) => getProviderById(id))
    .filter(Boolean);

  const popularInsuranceTypes = city.popularTypes
    .map((type) => INSURANCE_TYPES.find((t) => t.type === type))
    .filter(Boolean);

  // JSON-LD
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Vakuutukset ${city.nameInessive}`,
    description: `Vertaa vakuutuksia ${city.nameInessive}. Autovakuutus, kotivakuutus ja muut vakuutukset ${city.name} seudulla.`,
    url: `${SITE_URL}/vakuutukset/${city.slug}`,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: city.region,
      },
    },
    dateModified: '2026-03-28',
  };

  const faqItems = [
    {
      question: `Mikä on halvin vakuutusyhtiö ${city.nameInessive}?`,
      answer: `Halvin vakuutusyhtiö ${city.nameInessive} riippuu vakuutustyypistä ja henkilökohtaisista tekijöistä. POP Vakuutus on usein edullisin perusvakuutuksissa, mutta keskittämisetujen jälkeen suuret yhtiöt kuten Pohjola tai LähiTapiola voivat olla kokonaisedullisempia. Suosittelemme vertailemaan vähintään 3 yhtiötä.`,
    },
    {
      question: `Paljonko autovakuutus maksaa ${city.nameInessive}?`,
      answer: `Autovakuutuksen hinta ${city.nameInessive} on tyypillisesti ${city.averageAutoPrice}. Hinta vaihtelee merkittävästi auton iän, tyypin, bonusluokan ja kuljettajan iän mukaan.`,
    },
    {
      question: `Paljonko kotivakuutus maksaa ${city.nameInessive}?`,
      answer: `Kotivakuutuksen hinta ${city.nameInessive} on tyypillisesti ${city.averageHomePrice}. Hinta riippuu asunnon koosta, tyypistä (kerrostalo/rivitalo/omakotitalo), iästä ja valitusta turvatasosta.`,
    },
    {
      question: `Mitkä vakuutusyhtiöt toimivat ${city.nameInessive}?`,
      answer: `${city.nameInessive} toimivat kaikki suuret vakuutusyhtiöt. Erityisen vahvoja paikallisia toimijoita ovat ${localProviders.map((p) => p!.shortName).join(', ')}. Useimmat yhtiöt tarjoavat palvelua myös verkossa.`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Etusivu', href: '/' },
              { label: 'Vakuutukset alueittain', href: '/vakuutukset' },
              { label: city.name },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="bg-navy py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-white/80">
              {city.region} &middot; {city.population.toLocaleString('fi-FI')} asukasta
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Vakuutukset {city.nameInessive}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Vertaa vakuutuksia {city.nameInessive} ja löydä paras vakuutus sinulle. Puolueeton vertailu 10
              vakuutusyhtiön välillä.
            </p>
          </div>
        </section>

        {/* City overview */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main content */}
              <div className="lg:col-span-2">
                <h2 className="mb-4 text-2xl font-bold text-navy">
                  Vakuutukset {city.nameInessive} — Miksi vertailla?
                </h2>
                <p className="mb-6 text-base leading-relaxed text-gray-700">
                  {city.description}
                </p>

                {/* Price overview */}
                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-white p-5 shadow-sm">
                    <div className="mb-2 text-sm font-medium text-gray-500">
                      Autovakuutus {city.nameInessive}
                    </div>
                    <div className="text-2xl font-bold text-navy">
                      {city.averageAutoPrice}
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      Tyypillinen hintahaitari (liikenne + kasko)
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-5 shadow-sm">
                    <div className="mb-2 text-sm font-medium text-gray-500">
                      Kotivakuutus {city.nameInessive}
                    </div>
                    <div className="text-2xl font-bold text-navy">
                      {city.averageHomePrice}
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      Tyypillinen hintahaitari (perus–laaja)
                    </div>
                  </div>
                </div>

                {/* Key facts */}
                <h3 className="mb-4 text-xl font-bold text-navy">
                  Vakuutustietoa: {city.name}
                </h3>
                <ul className="mb-8 space-y-3">
                  {city.keyFacts.map((fact, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-gray-700">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar: local providers */}
              <div>
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-bold text-navy">
                      Vakuutusyhtiöt {city.nameInessive}
                    </h3>
                    <div className="space-y-3">
                      {localProviders.map((provider) => (
                        <Link
                          key={provider!.id}
                          href={`/vakuutusyhtiot/${provider!.slug}`}
                          className="group flex items-center gap-3 rounded-lg border border-gray-100 p-3 transition-all hover:border-teal hover:shadow-sm"
                        >
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
                            style={{ backgroundColor: provider!.color }}
                          >
                            {provider!.shortName.charAt(0)}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-teal">
                              {provider!.shortName}
                            </div>
                            <div className="text-xs text-gray-500">
                              {provider!.satisfaction}/10 tyytyväisyys
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* CTA card */}
                  <div className="rounded-xl bg-teal p-6 text-white">
                    <h3 className="mb-2 text-lg font-bold">Vertaa hintoja</h3>
                    <p className="mb-4 text-sm text-white/90">
                      Löydä halvin vakuutus {city.nameInessive}. Vertaa 10 yhtiön hintoja ilmaiseksi.
                    </p>
                    <Link
                      href="/vertailu"
                      className="block rounded-lg bg-white px-4 py-2 text-center text-sm font-semibold text-teal transition-colors hover:bg-gray-100"
                    >
                      Aloita vertailu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance type cards */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-navy sm:text-3xl">
              Suosituimmat vakuutukset {city.nameInessive}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {popularInsuranceTypes.map((insuranceType) => (
                <Link
                  key={insuranceType!.type}
                  href={`/${insuranceType!.slug}`}
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-teal hover:shadow-md"
                >
                  <div
                    className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl text-xl text-white"
                    style={{ backgroundColor: insuranceType!.color }}
                  >
                    {insuranceType!.type === 'auto'
                      ? '\uD83D\uDE97'
                      : insuranceType!.type === 'home'
                        ? '\uD83C\uDFE0'
                        : insuranceType!.type === 'travel'
                          ? '\u2708\uFE0F'
                          : insuranceType!.type === 'pet'
                            ? '\uD83D\uDC3E'
                            : insuranceType!.type === 'life'
                              ? '\u2764\uFE0F'
                              : insuranceType!.type === 'accident'
                                ? '\uD83D\uDEE1\uFE0F'
                                : '\uD83D\uDC76'}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-navy group-hover:text-teal">
                    {insuranceType!.name} {city.nameInessive}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-gray-600">
                    {insuranceType!.description}
                  </p>
                  <div className="text-xs text-gray-500">
                    {insuranceType!.averagePrice}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tips section */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-navy sm:text-3xl">
              Vinkkejä vakuutusten vertailuun {city.nameInessive}
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Vertaa vähintään 3 yhtiötä',
                  text: `Älä tyydy ensimmäiseen tarjoukseen. ${city.nameInessive} toimivat kaikki suuret vakuutusyhtiöt, ja hintaerot voivat olla satoja euroja vuodessa.`,
                },
                {
                  title: 'Huomioi keskittämisedut',
                  text: 'Vakuutusten keskittäminen yhteen yhtiöön voi tuoda merkittäviä alennuksia. Erityisesti Pohjolan OP-bonus ja LähiTapiolan etuohjelma palkitsevat kokonaisasiakkaita.',
                },
                {
                  title: 'Tarkista turvataso, älä vain hintaa',
                  text: 'Halvin vakuutus ei aina ole paras. Vertaa korvausrajoja, omavastuita ja turvan laajuutta. Edullinen vakuutus voi osoittautua kalliiksi vahinkotilanteessa.',
                },
                {
                  title: 'Kilpailuta säännöllisesti',
                  text: `Vakuutusmarkkinat muuttuvat jatkuvasti. Suosittelemme kilpailuttamaan vakuutukset ${city.nameInessive} vähintään 2–3 vuoden välein.`,
                },
              ].map((tip, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-navy">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber text-sm font-bold text-navy">
                      {index + 1}
                    </span>
                    {tip.title}
                  </h3>
                  <p className="pl-9 text-sm leading-relaxed text-gray-600">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-navy sm:text-3xl">
              Usein kysyttyä: Vakuutukset {city.nameInessive}
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-xl bg-gray-50 shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-semibold text-navy hover:text-teal">
                    {faq.question}
                    <span className="ml-2 shrink-0 text-gray-400 transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="border-t border-gray-200 px-6 pb-4 pt-3">
                    <p className="text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-teal py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Vertaa vakuutuksia {city.nameInessive}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Löydä paras ja edullisin vakuutus {city.nameInessive}. Puolueeton vertailu 10 yhtiön välillä.
            </p>
            <Link
              href="/vertailu"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-teal shadow-md transition-colors hover:bg-gray-100"
            >
              Aloita vertailu
            </Link>
          </div>
        </section>

        {/* Other cities */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-xl font-bold text-navy">
              Vakuutukset muissa kaupungeissa
            </h2>
            <div className="flex flex-wrap gap-3">
              {cities
                .filter((c) => c.slug !== city.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/vakuutukset/${c.slug}`}
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:border-teal hover:text-teal"
                  >
                    {c.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
