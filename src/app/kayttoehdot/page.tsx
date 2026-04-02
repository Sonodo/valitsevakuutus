import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Käyttöehdot',
  description: `${SITE_NAME}n käyttöehdot. Lue palvelun käyttöä koskevat ehdot, vastuunrajoitukset ja tietosuojakäytännöt.`,
  alternates: {
    canonical: `${SITE_URL}/kayttoehdot`,
  },
};

const breadcrumbs = [
  { label: 'Etusivu', href: '/' },
  { label: 'Käyttöehdot', href: '/kayttoehdot' },
];

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-3xl font-bold text-navy sm:text-4xl">
            Käyttöehdot
          </h1>
          <p className="mb-10 text-sm text-gray-500">
            Päivitetty: 28.3.2026
          </p>

          <div className="prose max-w-none">
            <h2>1. Palvelun kuvaus</h2>
            <p>
              {SITE_NAME} (jäljempänä &quot;Palvelu&quot;) on riippumaton vakuutusten
              vertailupalvelu, joka tarjoaa kuluttajille tietoa ja työkaluja
              vakuutusten vertailuun. Palvelu on saatavilla osoitteessa{' '}
              <Link href="/" className="text-teal underline">
                vakuutusvertailu.fi
              </Link>
              .
            </p>
            <p>
              <strong>
                Palvelu on tietopalvelu, ei vakuutuksenvälittäjä eikä
                vakuutusasiamies.
              </strong>{' '}
              Emme myy, välitä tai tarjoa vakuutuksia. Emme anna vakuutusneuvontaa.
              Palvelu ei ole rekisteröity Finanssivalvonnan (FIN-FSA)
              vakuutusasiamiesten rekisteriin.
            </p>

            <h2>2. Käyttöoikeus</h2>
            <p>
              Palvelun käyttö on maksutonta. Käyttämällä Palvelua hyväksyt nämä
              käyttöehdot. Jos et hyväksy ehtoja, älä käytä Palvelua.
            </p>
            <p>
              Palvelua saa käyttää vain henkilökohtaiseen, ei-kaupalliseen
              tarkoitukseen. Palvelun sisällön automaattinen kerääminen, kopiointi
              tai uudelleenjulkaisu ilman kirjallista lupaa on kielletty.
            </p>

            <h2>3. Vastuunrajoitukset</h2>
            <p>
              Palvelu tarjotaan &quot;sellaisena kuin se on&quot; ilman takuuta sen
              täydellisyydestä, virheettömyydestä tai ajantasaisuudesta.
            </p>
            <ul>
              <li>
                Emme takaa, että Palvelussa esitetyt tiedot ovat virheettömiä tai
                ajan tasalla
              </li>
              <li>
                Emme vastaa vahingoista, jotka aiheutuvat Palvelun käytöstä tai
                sen tietojen perusteella tehdyistä päätöksistä
              </li>
              <li>
                Emme vastaa Palvelun keskeytyksistä tai teknisistä ongelmista
              </li>
              <li>
                Vakuutuksen ostopäätös on aina käyttäjän ja vakuutusyhtiön välinen
                asia
              </li>
            </ul>

            <h2>4. Affiliate-linkit ja kaupallinen yhteistyö</h2>
            <p>
              Osa Palvelun linkeistä on affiliate-linkkejä. Kun käyttäjä siirtyy
              affiliate-linkin kautta vakuutusyhtiön sivuille ja ostaa
              vakuutuksen, saamme pienen korvauksen.
            </p>
            <ul>
              <li>
                Affiliate-linkit on merkitty selkeästi{' '}
                <span className="rounded bg-amber/10 px-1.5 py-0.5 text-amber not-prose">
                  Mainos
                </span>
                -tunnisteella
              </li>
              <li>
                Affiliate-status <strong>ei vaikuta</strong> vertailujärjestykseen
                tai suosituksiimme
              </li>
              <li>
                Vertailujärjestys perustuu hintaan, kattavuuteen ja
                asiakastyytyväisyyteen
              </li>
              <li>
                Näytämme myös vakuutusyhtiöt, joiden kanssa meillä ei ole
                yhteistyösopimusta
              </li>
            </ul>
            <p>
              Lisätietoja ansaintamallista:{' '}
              <Link href="/metodologia" className="text-teal underline">
                Näin vertailemme
              </Link>
              .
            </p>

            <h2>5. Hintatiedot ja arviot</h2>
            <p>
              Palvelussa esitetyt hintatiedot ovat{' '}
              <strong>suuntaa-antavia arvioita</strong>, jotka perustuvat
              vakuutusyhtiöiden julkisiin hintatietoihin ja verkkolaskureihin.
            </p>
            <ul>
              <li>
                Hinta-arviot <strong>eivät ole sitovia tarjouksia</strong>
              </li>
              <li>
                Lopullinen vakuutuksen hinta määräytyy vakuutusyhtiön
                yksilöllisen arvion perusteella
              </li>
              <li>
                Hintatiedot päivitetään neljännesvuosittain — todellinen hinta
                voi poiketa arviosta
              </li>
              <li>
                Käyttäjän on aina tarkistettava lopullinen hinta suoraan
                vakuutusyhtiöltä
              </li>
            </ul>

            <h2>6. Immateriaalioikeudet</h2>
            <p>
              Palvelun sisältö, mukaan lukien tekstit, kuvat, grafiikat, logot ja
              ohjelmistokoodi, on {SITE_NAME}n tai sen lisenssinantajien
              omaisuutta ja suojattu tekijänoikeuslailla.
            </p>
            <p>
              Vakuutusyhtiöiden logot ja tuotenimet ovat niiden omistajien
              tavaramerkkejä. Käytämme niitä ainoastaan vertailutarkoituksessa.
            </p>

            <h2>7. Tietosuoja</h2>
            <p>
              Käsittelemme henkilötietoja EU:n yleisen tietosuoja-asetuksen
              (GDPR) mukaisesti. Yksityiskohtaiset tiedot henkilötietojen
              käsittelystä löydät{' '}
              <Link href="/tietosuoja" className="text-teal underline">
                tietosuojaselosteestamme
              </Link>
              .
            </p>
            <p>
              Evästeiden käytöstä kerromme{' '}
              <Link href="/evasteet" className="text-teal underline">
                evästekäytännössämme
              </Link>
              .
            </p>

            <h2>8. Muutokset ehtoihin</h2>
            <p>
              Pidätämme oikeuden muuttaa näitä käyttöehtoja milloin tahansa.
              Merkittävistä muutoksista ilmoitetaan Palvelun sivuilla. Palvelun
              jatkuva käyttö muutosten jälkeen katsotaan ehtojen hyväksymiseksi.
            </p>

            <h2>9. Sovellettava laki ja riidanratkaisu</h2>
            <p>
              Näihin käyttöehtoihin sovelletaan Suomen lakia. Mahdolliset
              erimielisyydet pyritään ratkaisemaan ensisijaisesti neuvottelemalla.
              Mikäli neuvottelu ei johda ratkaisuun, erimielisyydet ratkaistaan
              Helsingin käräjäoikeudessa.
            </p>
            <p>
              Kuluttajalla on oikeus saattaa riita-asia myös kuluttajariita&shy;lautakunnan
              (
              <a
                href="https://www.kuluttajariita.fi"
                target="_blank"
                rel="noopener"
                className="text-teal underline"
              >
                kuluttajariita.fi
              </a>
              ) käsiteltäväksi.
            </p>

            <h2>10. Yhteystiedot</h2>
            <p>
              Näihin ehtoihin liittyvissä kysymyksissä voit ottaa meihin yhteyttä
              sähköpostitse:{' '}
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
