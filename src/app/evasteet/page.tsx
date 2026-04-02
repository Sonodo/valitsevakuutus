import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Evästekäytäntö',
  description: `${SITE_NAME}n evästekäytäntö. Lue mitä evästeitä käytämme, miksi ja miten voit hallita evästeasetuksiasi.`,
  alternates: {
    canonical: `${SITE_URL}/evasteet`,
  },
};

const breadcrumbs = [
  { label: 'Etusivu', href: '/' },
  { label: 'Evästekäytäntö', href: '/evasteet' },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-3xl font-bold text-navy sm:text-4xl">
            Evästekäytäntö
          </h1>
          <p className="mb-10 text-sm text-gray-500">
            Päivitetty: 28.3.2026
          </p>

          <div className="prose max-w-none">
            <h2>Mitä evästeet ovat?</h2>
            <p>
              Evästeet (cookies) ovat pieniä tekstitiedostoja, joita verkkosivusto
              tallentaa selaimellesi. Niiden avulla sivusto voi muistaa asetuksiasi
              ja tarjota paremman käyttökokemuksen.
            </p>

            <h2>Mitä evästeitä käytämme?</h2>
            <p>
              {SITE_NAME} käyttää evästeitä kolmessa kategoriassa:
            </p>

            {/* Necessary cookies */}
            <h3>1. Välttämättömät evästeet</h3>
            <p>
              Nämä evästeet ovat sivuston toiminnan kannalta välttämättömiä.
              Ne eivät kerää henkilötietoja eivätkä vaadi suostumustasi.
            </p>
            <div className="not-prose overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-left">
                    <th className="py-2 pr-4 font-semibold text-navy">Eväste</th>
                    <th className="py-2 pr-4 font-semibold text-navy">Tarkoitus</th>
                    <th className="py-2 font-semibold text-navy">Voimassaolo</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-mono text-xs">vakuutusvertailu-cookie-consent</td>
                    <td className="py-2 pr-4">Evästeasetustesi tallennus</td>
                    <td className="py-2">365 päivää</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Analytics cookies */}
            <h3>2. Analytiikkaevästeet</h3>
            <p>
              Käytämme Google Analytics 4 -palvelua (GA4) ymmärtääksemme, miten
              sivustoamme käytetään. Analytiikkaevästeet auttavat meitä
              parantamaan palvelua. Nämä evästeet asetetaan{' '}
              <strong>vain suostumuksellasi</strong>.
            </p>
            <div className="not-prose overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-left">
                    <th className="py-2 pr-4 font-semibold text-navy">Eväste</th>
                    <th className="py-2 pr-4 font-semibold text-navy">Tarkoitus</th>
                    <th className="py-2 font-semibold text-navy">Voimassaolo</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-mono text-xs">_ga</td>
                    <td className="py-2 pr-4">Google Analytics — käyttäjän erottaminen</td>
                    <td className="py-2">2 vuotta</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-mono text-xs">_ga_*</td>
                    <td className="py-2 pr-4">Google Analytics — istunnon tila</td>
                    <td className="py-2">2 vuotta</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Marketing cookies */}
            <h3>3. Markkinointievästeet</h3>
            <p>
              Markkinointievästeitä voidaan tulevaisuudessa käyttää kohdennetun
              mainonnan näyttämiseen. Tällä hetkellä emme käytä
              markkinointievästeitä. Nämä evästeet asetetaan{' '}
              <strong>vain suostumuksellasi</strong>.
            </p>

            <h2>Google Consent Mode v2</h2>
            <p>
              Käytämme Google Consent Mode v2 -tekniikkaa, joka varmistaa
              evästeidesi hallinnan seuraavasti:
            </p>
            <ul>
              <li>
                <strong>Ennen suostumusta:</strong> Google Analytics ei tallenna
                evästeitä eikä kerää tunnistettavia tietoja
              </li>
              <li>
                <strong>Suostumuksen jälkeen:</strong> Vain ne evästeluokat
                aktivoidaan, jotka olet hyväksynyt
              </li>
              <li>
                <strong>Kieltäytymisen jälkeen:</strong> Google Analytics
                toimii cookieless-tilassa, joka ei tallenna evästeitä mutta
                tarjoaa meille kokonaistason kävijätilastoja
              </li>
            </ul>
            <p>
              Consent Mode v2 -signaalit:
            </p>
            <ul>
              <li>
                <code>analytics_storage</code> — Analytiikkaevästeiden tila
              </li>
              <li>
                <code>ad_storage</code> — Mainosevästeiden tila
              </li>
              <li>
                <code>ad_user_data</code> — Käyttäjätietojen jakaminen
                mainontaan
              </li>
              <li>
                <code>ad_personalization</code> — Personoidun mainonnan tila
              </li>
            </ul>

            <h2>Evästeiden hallinta</h2>
            <p>
              Voit hallita evästeasetuksiasi seuraavilla tavoilla:
            </p>
            <h3>Sivustomme kautta</h3>
            <p>
              Kun vierailet sivustollamme ensimmäistä kertaa, evästebanneri
              antaa sinulle kolme vaihtoehtoa:
            </p>
            <ul>
              <li>
                <strong>Hyväksy kaikki</strong> — Kaikki evästeluokat
                aktivoidaan
              </li>
              <li>
                <strong>Vain välttämättömät</strong> — Vain sivuston toiminnalle
                välttämättömät evästeet
              </li>
              <li>
                <strong>Muokkaa</strong> — Valitse itse mitkä evästeluokat
                hyväksyt
              </li>
            </ul>
            <p>
              Voit muuttaa valintaasi milloin tahansa tyhjentämällä selaimen
              evästeet, jolloin banneri näytetään uudelleen.
            </p>

            <h3>Selaimen asetuksissa</h3>
            <p>
              Voit myös hallita evästeitä suoraan selaimesi asetuksista. Ohjeita
              löydät selaimesi ohjesivuilta:
            </p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener"
                  className="text-teal underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/fi/kb/evasteet-sivustojen-tietokoneeseesi-tallentama-tie"
                  target="_blank"
                  rel="noopener"
                  className="text-teal underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/fi-fi/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener"
                  className="text-teal underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/fi-fi/microsoft-edge/evästeiden-poistaminen-microsoft-edgessä-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener"
                  className="text-teal underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              Huomaa, että evästeiden estäminen voi vaikuttaa sivuston
              toiminnallisuuteen.
            </p>

            <h2>Lisätietoja</h2>
            <p>
              Lisätietoja henkilötietojen käsittelystä löydät{' '}
              <Link href="/tietosuoja" className="text-teal underline">
                tietosuojaselosteestamme
              </Link>
              . Evästeitä koskevissa kysymyksissä voit ottaa yhteyttä:{' '}
              <a
                href="mailto:info@vakuutusvertailu.fi"
                className="text-teal underline"
              >
                info@vakuutusvertailu.fi
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
