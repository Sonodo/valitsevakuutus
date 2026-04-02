import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Näin vertailemme — Metodologia ja läpinäkyvyys',
  description:
    'Lue miten Vakuutusvertailu vertailee vakuutuksia, miten järjestys lasketaan ja miksi affiliate-status ei vaikuta tuloksiin.',
  alternates: {
    canonical: `${SITE_URL}/metodologia`,
  },
};

const breadcrumbs = [
  { label: 'Etusivu', href: '/' },
  { label: 'Näin vertailemme', href: '/metodologia' },
];

export default function MethodologyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold text-navy sm:text-4xl">
            Näin vertailemme vakuutuksia
          </h1>

          <div className="prose max-w-none">
            <div className="rounded-lg bg-amber/5 p-6 not-prose ring-1 ring-amber/20">
              <p className="text-base font-bold text-navy">
                Affiliate-status EI vaikuta vertailujärjestykseen.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Tämä on ehdoton periaatteemme. Vaikka osa vakuutusyhtiöistä maksaa meille
                korvauksen klikkauksista tai myynneistä, tämä ei koskaan vaikuta siihen,
                miten vertailutulokset järjestetään tai miten yhtiöitä arvioidaan.
              </p>
            </div>

            <h2>Vertailujärjestys</h2>
            <p>
              Oletuksena vertailutulokset järjestetään <strong>halvimmasta kalleimpaan</strong>.
              Käyttäjä voi vaihtaa järjestyksen myös seuraaviin:
            </p>
            <ol>
              <li>
                <strong>Halvin ensin</strong> — Edullisin arvioitu vuosihinta ylimmäisenä
              </li>
              <li>
                <strong>Kattavin ensin</strong> — Laajin turva ja eniten sisältyvät korvaukset
              </li>
              <li>
                <strong>Suosituin</strong> — Suurimman markkinaosuuden omaavat yhtiöt
              </li>
              <li>
                <strong>Tyytyväisimmät asiakkaat</strong> — Korkein asiakastyytyväisyysarvosana
              </li>
            </ol>

            <h2>Miten hinnat lasketaan?</h2>
            <p>
              {SITE_NAME} esittää <strong>hinta-arvioita, ei sitovia tarjouksia</strong>.
              Hinta-arviot perustuvat:
            </p>
            <ul>
              <li>Vakuutusyhtiöiden julkisiin verkkosivuihin ja hintatietoihin</li>
              <li>Vakuutusyhtiöiden omiin verkkolaskureihin</li>
              <li>Kuluttajakyselyihin ja julkisiin tutkimuksiin</li>
              <li>Toimialan raportteihin ja tilastoihin</li>
            </ul>
            <p>
              Hinta-arviot päivitetään <strong>neljännesvuosittain</strong>. Jokainen
              vertailusivu näyttää viimeisimmän päivityspäivämäärän.
            </p>

            <h2>Asiakastyytyväisyysarvosanat</h2>
            <p>
              Asiakastyytyväisyysarvosanat perustuvat useisiin julkisiin lähteisiin:
            </p>
            <ul>
              <li>EPSI Rating Suomi — vuosittainen vakuutusalan tutkimus</li>
              <li>Suomen Asiakastieto / Alma Talent tutkimukset</li>
              <li>Vakuutusyhtiöiden omat julkaisemat NPS-luvut</li>
              <li>Kuluttajapalautteet ja arviot verkossa</li>
            </ul>
            <p>
              Laskemme painotetun keskiarvon näistä lähteistä ja esitämme sen asteikolla 0–10.
            </p>

            <h2>Kattavuusvertailu</h2>
            <p>
              Vertailemme vakuutustuotteiden kattavuutta seuraavien tekijöiden perusteella:
            </p>
            <ul>
              <li>Mitä tuotteen perusturva sisältää</li>
              <li>Mitä lisäturvia on saatavilla</li>
              <li>Omavastuun vaihtoehdot ja tasot</li>
              <li>Korvauksen ylärajat</li>
              <li>Erityisominaisuudet (esim. bonusturva, sijaisauto)</li>
            </ul>

            <h2>Vakuutusyhtiöiden valinta</h2>
            <p>
              Vertailuumme sisältyy <strong>10 suurinta suomalaista vakuutusyhtiötä</strong>,
              jotka kattavat yhteensä yli 95 % Suomen vakuutusmarkkinoista:
            </p>
            <ol>
              <li>Pohjola Vakuutus / OP (32,6 % markkinaosuus)</li>
              <li>LähiTapiola (26,4 %)</li>
              <li>If Vakuutus (21,1 %)</li>
              <li>Fennia (9,9 %)</li>
              <li>Turva (~3–4 %)</li>
              <li>Pohjantähti (~2–3 %)</li>
              <li>POP Vakuutus (~2–3 %)</li>
              <li>Aktia (&lt;2 %)</li>
              <li>Alandia (erikoisvakuuttaja)</li>
              <li>Säästöpankki Vakuutus</li>
            </ol>
            <p>
              Näytämme kaikki yhtiöt — myös ne, joiden kanssa meillä ei ole
              yhteistyösopimusta. Jos yhtiö puuttuu vertailusta, se johtuu siitä,
              ettei yhtiöstä ole riittävästi julkista hintatietoa.
            </p>

            <h2>Tietojen todentaminen</h2>
            <p>
              Jokainen hintatieto ja kattavuustieto tarkistetaan ennen julkaisua.
              Todentamisprosessimme:
            </p>
            <ol>
              <li>Kerätään hintatiedot vakuutusyhtiöiden verkkolaskureista</li>
              <li>Ristiinajetaan usean lähteen tiedot</li>
              <li>Merkitään viimeinen tarkistuspäivämäärä jokaiselle tiedolle</li>
              <li>Päivitetään tiedot neljännesvuosittain tai kun hinnanmuutoksia havaitaan</li>
            </ol>

            <h2>Affiliate-linkit ja läpinäkyvyys</h2>
            <p>
              Joidenkin vakuutusyhtiöiden linkit ovat affiliate-linkkejä, mikä tarkoittaa:
            </p>
            <ul>
              <li>Saamme pienen korvauksen, jos käyttäjä ostaa vakuutuksen linkin kautta</li>
              <li>Linkki on merkitty selkeästi &quot;Mainos&quot;-tunnisteella</li>
              <li>Linkki sisältää <code>rel=&quot;sponsored nofollow&quot;</code> -attribuutin</li>
              <li>
                <strong>
                  Korvaus ei vaikuta vertailujärjestykseen, pisteytykseen tai
                  toimitukselliseen sisältöön
                </strong>
              </li>
            </ul>

            <h2>Vastuuvapauslauseke</h2>
            <p>
              {SITE_NAME} on tietopalvelu, ei vakuutusneuvoja eikä vakuutusmeklari.
              Emme anna henkilökohtaista vakuutusneuvontaa. Hinta-arviot ovat
              suuntaa-antavia ja perustuvat julkisiin tietoihin. Lopullinen
              vakuutuksen hinta ja ehdot määräytyvät aina vakuutusyhtiön ja asiakkaan
              välisessä sopimuksessa.
            </p>
          </div>

          {/* Related Links */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Link
              href="/tietoa"
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold text-navy">Tietoa meistä</h3>
              <p className="text-sm text-gray-600">
                Keitä me olemme ja miksi teemme tätä.
              </p>
            </Link>
            <Link
              href="/yhteystiedot"
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold text-navy">Yhteystiedot</h3>
              <p className="text-sm text-gray-600">
                Ota yhteyttä — vastaamme mielellämme kysymyksiisi.
              </p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
