import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tietoa meistä — Kuka tekee Vakuutusvertailun?',
  description:
    'Vakuutusvertailu on riippumaton vertailupalvelu. Lue miten toimimme, miten ansaitsemme ja miksi voit luottaa meihin.',
  alternates: {
    canonical: `${SITE_URL}/tietoa`,
  },
};

const breadcrumbs = [
  { label: 'Etusivu', href: '/' },
  { label: 'Tietoa meistä', href: '/tietoa' },
];

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
              {SITE_NAME} on riippumaton vakuutusvertailupalvelu, joka auttaa suomalaisia
              löytämään parhaan vakuutuksen omiin tarpeisiinsa. Vertailemme{' '}
              <strong>10 suurimman suomalaisen vakuutusyhtiön</strong> tuotteita ja hintoja
              yhdessä paikassa.
            </p>

            <h2>Miksi me olemme olemassa?</h2>
            <p>
              Suomen vakuutusmarkkinoilla on valtava läpinäkyvyysongelma. Monet
              &quot;vertailusivustot&quot; näyttävät vain yhden tai kahden yhtiön tuotteita, eivätkä
              kerro avoimesti miten ansaitsevat rahaa. Me halusimme tehdä toisin.
            </p>
            <p>
              Uskomme, että kuluttajien tulisi voida vertailla kaikkien yhtiöiden tuotteita
              yhdestä paikasta — mukaan lukien ne yhtiöt, jotka eivät maksa meille mitään.
              Tämä on ainoa tapa tehdä aidosti puolueetonta vertailua.
            </p>

            <h2>Miten ansaitsemme rahaa?</h2>
            <p>
              Olemme täysin avoimia ansaintamallimme suhteen:
            </p>
            <ul>
              <li>
                <strong>Affiliate-linkit:</strong> Osa vakuutusyhtiöistä maksaa meille pienen
                korvauksen, jos käyttäjä siirtyy sivuillemme kautta vakuutusyhtiön sivulle ja
                ostaa vakuutuksen. Nämä linkit on merkitty selkeästi{' '}
                <span className="rounded bg-amber/10 px-1.5 py-0.5 text-amber not-prose">
                  Mainos
                </span>
                -tunnisteella.
              </li>
              <li>
                <strong>Mainonta:</strong> Sivuillamme voi näkyä mainoksia. Mainokset on
                eroteltu selkeästi toimituksellisesta sisällöstä.
              </li>
            </ul>

            <div className="rounded-lg bg-teal/5 p-6 not-prose ring-1 ring-teal/20">
              <p className="text-base font-semibold text-navy">
                Affiliate-status EI vaikuta vertailujärjestykseen.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Vertailumme järjestys perustuu aina hintaan, kattavuuteen ja
                asiakastyytyväisyyteen — ei siihen, maksaako yhtiö meille vai ei.
                Lue lisää{' '}
                <Link href="/metodologia" className="font-medium text-teal underline">
                  metodologiastamme
                </Link>
                .
              </p>
            </div>

            <h2>Mitä näytämme — ja mitä emme</h2>
            <ul>
              <li>
                Näytämme <strong>kaikki 10 suurinta vakuutusyhtiötä</strong>, myös ne
                joiden kanssa meillä ei ole yhteistyösopimusta
              </li>
              <li>
                Hinta-arviot perustuvat <strong>julkisiin hintatietoihin</strong> ja ovat
                suuntaa-antavia — emme tarjoa sitovia tarjouksia
              </li>
              <li>
                Emme ole vakuutusneuvoja emmekä vakuutusmeklari — olemme tietopalvelu
              </li>
              <li>
                Lopullinen päätös vakuutuksen ostamisesta on aina sinun ja vakuutusyhtiön
                välinen asia
              </li>
            </ul>

            <h2>Tietolähteemme</h2>
            <p>
              Hintatietomme perustuvat vakuutusyhtiöiden julkisiin hintatietoihin,
              verkkolaskureihin ja kuluttajakyselyihin. Päivitämme hintatiedot
              neljännesvuosittain. Jokainen vertailusivu näyttää viimeisimmän
              päivityspäivämäärän.
            </p>

            <h2>Arvomme</h2>
            <ul>
              <li>
                <strong>Läpinäkyvyys:</strong> Kerromme avoimesti miten toimimme ja miten
                ansaitsemme
              </li>
              <li>
                <strong>Puolueettomuus:</strong> Vertailujärjestys perustuu dataan, ei
                maksettuihin sopimuksiin
              </li>
              <li>
                <strong>Koulutus:</strong> Autamme kuluttajia ymmärtämään vakuutuksia ennen
                ostopäätöstä
              </li>
              <li>
                <strong>Yksityisyyden suoja:</strong> Emme kerää henkilötietoja vertailun
                tekemiseen
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
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
    </>
  );
}
