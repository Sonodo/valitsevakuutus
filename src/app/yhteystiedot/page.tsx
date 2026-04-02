import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Yhteystiedot — Ota yhteyttä',
  description:
    'Ota yhteyttä Vakuutusvertailuun. Autamme mielellämme kaikissa vakuutusvertailuun liittyvissä kysymyksissä.',
  alternates: {
    canonical: `${SITE_URL}/yhteystiedot`,
  },
};

const breadcrumbs = [
  { label: 'Etusivu', href: '/' },
  { label: 'Yhteystiedot', href: '/yhteystiedot' },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold text-navy sm:text-4xl">
            Yhteystiedot
          </h1>

          <div className="mb-12 rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <h2 className="mb-6 text-xl font-semibold text-navy">
              Ota meihin yhteyttä
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Sähköposti</h3>
                  <a
                    href="mailto:info@vakuutusvertailu.fi"
                    className="text-teal hover:text-teal-dark"
                  >
                    info@vakuutusvertailu.fi
                  </a>
                  <p className="mt-1 text-sm text-gray-500">
                    Vastaamme yleensä 1–2 arkipäivän kuluessa.
                  </p>
                </div>
              </div>

              {/* General Inquiries */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Yleiset kysymykset</h3>
                  <p className="text-sm text-gray-600">
                    Kysymykset palvelustamme, vertailustamme tai vakuutuksista yleisesti?
                    Lähetä meille sähköpostia — autamme mielellämme.
                  </p>
                </div>
              </div>

              {/* Business Inquiries */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Yritysyhteistyö</h3>
                  <p className="text-sm text-gray-600">
                    Oletko vakuutusyhtiön edustaja tai kiinnostunut yhteistyöstä?
                    Lähetä viesti osoitteeseen{' '}
                    <a
                      href="mailto:info@vakuutusvertailu.fi"
                      className="text-teal hover:text-teal-dark"
                    >
                      info@vakuutusvertailu.fi
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Corrections */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.834-1.964-.834-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Virhe tiedoissa?</h3>
                  <p className="text-sm text-gray-600">
                    Huomasitko virheen hintatiedoissa tai muussa sisällössä?
                    Ilmoita meille, niin korjaamme asian mahdollisimman nopeasti.
                    Arvostamme kaikkia korjausehdotuksia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="rounded-lg bg-gray-100 p-6 text-sm text-gray-600">
            <p className="mb-2 font-semibold text-navy">Huomautus</p>
            <p>
              {SITE_NAME} on tietopalvelu, ei vakuutusneuvoja. Emme anna
              henkilökohtaista vakuutusneuvontaa. Jos tarvitset apua vakuutusasioissa,
              ota yhteyttä suoraan vakuutusyhtiöön tai itsenäiseen vakuutusmeklariin.
            </p>
          </div>

          {/* Related Links */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/tietoa"
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold text-navy">Tietoa meistä</h3>
              <p className="text-sm text-gray-600">Lue lisää palvelustamme.</p>
            </Link>
            <Link
              href="/metodologia"
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold text-navy">Näin vertailemme</h3>
              <p className="text-sm text-gray-600">
                Tutustu vertailumenetelmäämme.
              </p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
