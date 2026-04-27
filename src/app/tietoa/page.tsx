import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tietoa meistä — Toimitus, periaatteet ja vastuut',
  description:
    'Valitse Vakuutus auttaa suomalaisia löytämään sopivimman vakuutuksen. Sonodon toimituksen periaatteet, vertailumetodologia, sponsorointi ja yhteystiedot.',
  alternates: {
    canonical: `${SITE_URL}/tietoa`,
  },
  openGraph: {
    title: `Tietoa meistä — Toimitus ja periaatteet | ${SITE_NAME}`,
    description:
      'Sonodon ylläpitämä riippumaton vakuutusvertailupalvelu. Toimituksen periaatteet, vertailumetodologia ja sponsoroinnin avoin merkintä.',
    url: `${SITE_URL}/tietoa`,
  },
};

const breadcrumbs = [
  { label: 'Etusivu', href: '/' },
  { label: 'Tietoa meistä', href: '/tietoa' },
];

// ── Schema.org: Organization + WebPage ────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}#organization`,
  name: SITE_NAME,
  legalName: 'Sonodo',
  url: SITE_URL,
  description:
    'Riippumaton suomalainen vakuutusten vertailupalvelu. Vertaa autovakuutuksia, kotivakuutuksia, matkavakuutuksia, lemmikkivakuutuksia ja henkivakuutuksia.',
  taxID: '2887416-4',
  vatID: 'FI28874164',
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'FI Y-tunnus',
    value: '2887416-4',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'FI',
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/tietoa`,
  url: `${SITE_URL}/tietoa`,
  name: 'Tietoa meistä — Valitse Vakuutus',
  about: { '@id': `${SITE_URL}#organization` },
  mainEntity: { '@id': `${SITE_URL}#organization` },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.label,
    item: `${SITE_URL}${b.href}`,
  })),
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold text-navy sm:text-4xl">
            Tietoa meistä
          </h1>

          <div className="prose max-w-none">
            <h2>Mikä on {SITE_NAME}?</h2>
            <p>
              {SITE_NAME} on puolueeton vakuutusvertailupalvelu, joka auttaa
              suomalaisia löytämään sopivimman vakuutuksen omiin tarpeisiinsa.
              Vertailemme <strong>Suomen merkittävimpien vakuutusyhtiöiden</strong>{' '}
              tuotteita, hintoja ja ehtoja yhdessä paikassa.
            </p>

            <h2>Missiomme</h2>
            <p>
              Autamme suomalaisia tekemään paremman vakuutusvalinnan. Vertailemme
              hintoja, kattavuutta ja asiakastyytyväisyyttä samalla menetelmällä
              jokaiselle tuotteelle — jotta sinä saat selkeän kuvan markkinasta
              yhdellä silmäyksellä ja voit päättää itse.
            </p>
          </div>

          {/* ── Toimitus ja vastuu ──────────────────── */}
          <section
            id="toimitus"
            className="mt-12 scroll-mt-24 border-t border-gray-200 pt-10"
          >
            <h2 className="text-2xl font-bold text-navy">
              Toimitus ja vastuu
            </h2>

            <div className="mt-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <div className="prose max-w-none">
                <p>
                  {SITE_NAME}in toimituksellisesta sisällöstä, vertailumetodologiasta
                  ja datankäsittelystä vastaa <strong>Sonodo</strong>. Toimitus
                  määrittelee, miten vakuutusyhtiöiden hintatiedot kerätään, miten
                  ne normalisoidaan vertailtavaan muotoon ja miten järjestysalgoritmi
                  painottaa hintaa, kattavuutta ja asiakastyytyväisyyttä.
                </p>

                <p>
                  Toimituksen työtapa on data-analyyttinen: vertailun ja sivuston
                  suorituskykyä seurataan mittareiden avulla, poikkeamat tunnistetaan
                  datasta ja kehityspäätökset perustuvat todennettuihin havaintoihin.
                  Tämä on edellytys luotettavalle ja jatkuvasti ajantasaiselle
                  vakuutusvertailupalvelulle.
                </p>

                <p>
                  Toimitus toimii itsenäisesti suhteessa kaupallisiin kumppaneihin —
                  affiliate-sopimukset eivät vaikuta vertailujärjestykseen eivätkä
                  toimituksellisiin sisältöihin.
                </p>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Yhteys toimitukseen:{' '}
                <Link
                  href="/yhteystiedot"
                  className="text-teal hover:text-teal-dark"
                >
                  /yhteystiedot
                </Link>
              </p>
            </div>
          </section>

          {/* ── Toimituksen periaatteet ───────────────────────────── */}
          <section
            id="toimituksen-periaatteet"
            className="mt-12 scroll-mt-24 border-t border-gray-200 pt-10"
          >
            <h2 className="text-2xl font-bold text-navy">
              Toimituksen periaatteet
            </h2>
            <p className="mt-4 text-gray-700">
              Seuraavat periaatteet ohjaavat kaikkea {SITE_NAME}illa julkaistavaa
              sisältöä — vertailutaulukoista oppaisiin ja blogiartikkeleihin.
            </p>

            <div className="mt-6 space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                <h3 className="font-semibold text-navy">
                  1. Vertailujärjestys ja pisteytys
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Vertailujärjestys lasketaan samalla menetelmällä jokaiselle
                  tuotteelle: painotamme hintaa, kattavuutta ja
                  asiakastyytyväisyyttä. Affiliate-sopimus tai mainostulot{' '}
                  <strong>eivät vaikuta</strong> vertailujärjestykseen. Tarkka
                  metodologia on luettavissa erillisellä{' '}
                  <Link
                    href="/metodologia"
                    className="text-teal hover:text-teal-dark"
                  >
                    metodologia-sivulla
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                <h3 className="font-semibold text-navy">
                  2. Sponsoroinnin avoin merkintä
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Mahdolliset kumppanuuslinkit on merkitty selkeästi{' '}
                  <strong>Mainos</strong>-merkinnällä, ja ne käyttävät teknistä{' '}
                  <code className="rounded bg-gray-100 px-1 py-0.5 text-xs">
                    rel=&quot;sponsored&quot;
                  </code>{' '}
                  -määritettä. Sivuston alalaidassa on jatkuvasti näkyvissä
                  yleinen sponsorointi-disclosure ja kuvaus siitä, miten
                  ansaitsemme rahaa. Linkin tyyppi ei vaikuta tuotteen sijoitukseen
                  vertailussa.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                <h3 className="font-semibold text-navy">
                  3. Tietojen päivittäminen
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Pyrimme päivittämään hinta- ja kattavuustiedot{' '}
                  <strong>vähintään kvartaaleittain</strong> ja merkittävien
                  hinnastomuutosten yhteydessä viipymättä. Jokainen tuoterivi
                  näyttää viimeisimmän tarkistuspäivämäärän. Hinnat ovat
                  suuntaa-antavia arvioita julkisten tietojen perusteella —
                  lopullinen hinta perustuu vakuutusyhtiön omaan tarjoukseen.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                <h3 className="font-semibold text-navy">
                  4. Korjaukset ja palautteet
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Jos havaitset sisällössämme virheen, ota yhteyttä toimitukseen.
                  Käsittelemme palautteet pääsääntöisesti viiden arkipäivän
                  kuluessa ja merkitsemme korjaukset näkyvästi. Vakuutusyhtiöiden
                  oikaisupyynnöt käsitellään samalla prosessilla — emme poista
                  perusteltua kritiikkiä, mutta korjaamme tosiasiavirheet aina.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                <h3 className="font-semibold text-navy">
                  5. Sääntelyrooli
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  {SITE_NAME} toimii <strong>tietopalveluna</strong>, ei
                  vakuutusneuvojana eikä vakuutusasiamiehenä. Emme ole
                  rekisteröityneet <strong>Finanssivalvontaan (FIN-FSA)</strong>,
                  koska emme välitä vakuutussopimuksia emmekä anna
                  henkilökohtaista vakuutusneuvontaa. Lopullinen sopimus tehdään
                  aina sinun ja vakuutusyhtiön välillä.
                </p>
              </div>
            </div>
          </section>

          {/* ── Yhteystiedot ──────────────────────────────────── */}
          <section
            id="yhteystiedot"
            className="mt-12 scroll-mt-24 border-t border-gray-200 pt-10"
          >
            <h2 className="text-2xl font-bold text-navy">Yhteystiedot</h2>
            <div className="mt-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <dl className="space-y-2 text-sm text-gray-700">
                <div>
                  <dt className="inline font-semibold text-navy">Toiminimi: </dt>
                  <dd className="inline">Sonodo</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-navy">Y-tunnus: </dt>
                  <dd className="inline">2887416-4</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-navy">Sijainti: </dt>
                  <dd className="inline">Suomi</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-navy">
                    Yhteyslomake:{' '}
                  </dt>
                  <dd className="inline">
                    <Link
                      href="/yhteystiedot"
                      className="text-teal hover:text-teal-dark"
                    >
                      /yhteystiedot
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          {/* ── Cross-links ───────────────────────────────────── */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <Link
              href="/metodologia"
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold text-navy">Näin vertailemme</h3>
              <p className="text-sm text-gray-600">
                Lue miten vertailujärjestys ja pisteet lasketaan.
              </p>
            </Link>
            <Link
              href="/sanasto"
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold text-navy">Vakuutussanasto</h3>
              <p className="text-sm text-gray-600">
                25 keskeistä vakuutustermiä selitettynä selkokielellä.
              </p>
            </Link>
            <Link
              href="/tietosuoja"
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold text-navy">Tietosuoja</h3>
              <p className="text-sm text-gray-600">
                Miten käsittelemme tietojasi ja mitä evästeitä käytämme.
              </p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
