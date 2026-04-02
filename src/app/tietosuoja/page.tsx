import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tietosuojaseloste — Evästeet ja yksityisyys',
  description:
    'Vakuutusvertailun tietosuojaseloste. Lue miten käsittelemme tietojasi, mitä evästeitä käytämme ja mitkä ovat oikeutesi.',
  alternates: {
    canonical: `${SITE_URL}/tietosuoja`,
  },
};

const breadcrumbs = [
  { label: 'Etusivu', href: '/' },
  { label: 'Tietosuoja', href: '/tietosuoja' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-3xl font-bold text-navy sm:text-4xl">
            Tietosuojaseloste
          </h1>
          <p className="mb-8 text-sm text-gray-500">
            Päivitetty: 28.3.2026
          </p>

          <div className="prose max-w-none">
            <h2>1. Rekisterinpitäjä</h2>
            <p>
              <strong>Sonodo — Henri Linnainmaa</strong>
              <br />
              Helsinki, Suomi
              <br />
              Sähköposti: info@vakuutusvertailu.fi
              <br />
              Verkkosivusto: {SITE_URL}
            </p>

            <h2>2. Mitä tietoja keräämme</h2>
            <p>
              {SITE_NAME} on suunniteltu toimimaan ilman henkilötietojen keräämistä.
              Vakuutusvertailun käyttö ei edellytä rekisteröitymistä eikä henkilötietojen
              antamista.
            </p>
            <h3>2.1 Automaattisesti kerättävät tiedot</h3>
            <p>
              Verkkosivustollamme kerätään automaattisesti seuraavia tietoja:
            </p>
            <ul>
              <li>IP-osoite (anonymisoituna)</li>
              <li>Selaimen tyyppi ja versio</li>
              <li>Käyttöjärjestelmä</li>
              <li>Vieraillut sivut ja sivuilla vietetty aika</li>
              <li>Viittaava sivusto (mistä tulit sivuillemme)</li>
              <li>Maantieteellinen sijainti (maa/kaupunkitaso)</li>
            </ul>
            <p>
              Nämä tiedot kerätään analytiikkatarkoituksiin eikä niitä yhdistetä
              henkilöllisyystietoihin.
            </p>

            <h3>2.2 Vakuutusvertailun käyttötiedot</h3>
            <p>
              Kun käytät vakuutuslaskuriamme, tallennamme anonyymejä käyttötietoja:
            </p>
            <ul>
              <li>Valittu vakuutustyyppi</li>
              <li>Syötetyt vertailuparametrit (esim. auton tyyppi, ikä, postinumero)</li>
              <li>Mille vakuutusyhtiöille käyttäjä klikkasi</li>
            </ul>
            <p>
              <strong>Emme tallenna henkilötietoja</strong> (kuten nimeä, sähköpostia tai
              puhelinnumeroa) vertailun yhteydessä.
            </p>

            <h2>3. Evästeet</h2>
            <p>Käytämme seuraavia evästeitä:</p>

            <h3>3.1 Välttämättömät evästeet</h3>
            <p>
              Nämä evästeet ovat teknisesti välttämättömiä sivuston toiminnalle. Niitä ei
              voi estää käyttämästä palvelua.
            </p>
            <ul>
              <li>Istuntoevästeet (poistetaan selaimen sulkemisen yhteydessä)</li>
              <li>Evästeasetukset (muistaa suostumuksesi)</li>
            </ul>

            <h3>3.2 Analytiikkaevästeet</h3>
            <p>
              Käytämme Google Analytics 4 -palvelua kävijäanalytiikkaan.
              GA4 kerää anonymisoitua dataa sivuston käytöstä. Tiedot auttavat
              meitä parantamaan palvelua.
            </p>
            <ul>
              <li>Google Analytics (_ga, _ga_*) — voimassaolo: 2 vuotta</li>
            </ul>
            <p>
              IP-osoitteiden anonymisointi on käytössä. Google Analytics -tietoja ei
              yhdistetä muihin Google-palveluihin ilman suostumustasi.
            </p>

            <h3>3.3 Mainosevästeet</h3>
            <p>
              Jos sivustolla näytetään mainoksia (esim. Google AdSense), mainontapalvelu
              saattaa asettaa evästeitä. Nämä evästeet mahdollistavat kohdennetun
              mainonnan näyttämisen.
            </p>
            <p>
              Voit estää mainosevästeet evästeasetuksista tai selaimen asetuksista.
            </p>

            <h2>4. Tietojen käsittelyn oikeusperuste</h2>
            <p>Käsittelemme tietoja seuraavilla oikeusperusteilla (GDPR art. 6):</p>
            <ul>
              <li>
                <strong>Suostumus (art. 6.1.a):</strong> Analytiikka- ja mainosevästeet
                edellyttävät suostumustasi
              </li>
              <li>
                <strong>Oikeutettu etu (art. 6.1.f):</strong> Palvelun tekninen toiminta,
                turvallisuus ja petosten esto
              </li>
            </ul>

            <h2>5. Tietojen siirto</h2>
            <p>
              Google Analytics -tietoja käsitellään EU/ETA-alueella. Google on sitoutunut
              EU:n tietosuojavaatimuksiin (Standard Contractual Clauses). Emme siirrä
              henkilötietoja EU/ETA-alueen ulkopuolelle ilman asianmukaisia suojatoimia.
            </p>

            <h2>6. Tietojen säilytys</h2>
            <ul>
              <li>Analytiikkatiedot: 14 kuukautta (Google Analytics -oletusasetus)</li>
              <li>Evästeasetukset: 12 kuukautta</li>
              <li>Palvelimen lokitiedostot: 30 päivää</li>
            </ul>

            <h2>7. Oikeutesi</h2>
            <p>
              EU:n yleisen tietosuoja-asetuksen (GDPR) mukaisesti sinulla on seuraavat
              oikeudet:
            </p>
            <ul>
              <li>
                <strong>Oikeus saada pääsy tietoihin</strong> — Voit pyytää tietoa sinusta
                kerätyistä tiedoista
              </li>
              <li>
                <strong>Oikeus tietojen oikaisuun</strong> — Voit pyytää virheellisten
                tietojen korjaamista
              </li>
              <li>
                <strong>Oikeus tietojen poistamiseen</strong> — Voit pyytää tietojesi
                poistamista
              </li>
              <li>
                <strong>Oikeus käsittelyn rajoittamiseen</strong> — Voit pyytää tietojen
                käsittelyn rajoittamista
              </li>
              <li>
                <strong>Oikeus vastustaa käsittelyä</strong> — Voit vastustaa tietojen
                käsittelyä
              </li>
              <li>
                <strong>Oikeus tietojen siirrettävyyteen</strong> — Voit pyytää tietojasi
                koneluettavassa muodossa
              </li>
              <li>
                <strong>Oikeus peruuttaa suostumus</strong> — Voit milloin tahansa peruuttaa
                evästeiden suostumuksen
              </li>
            </ul>
            <p>
              Voit käyttää oikeuksiasi lähettämällä sähköpostia osoitteeseen{' '}
              <a href="mailto:info@vakuutusvertailu.fi">info@vakuutusvertailu.fi</a>.
              Vastaamme pyyntöihin 30 päivän kuluessa.
            </p>

            <h2>8. Valvontaviranomainen</h2>
            <p>
              Jos koet, että tietojesi käsittely rikkoo tietosuojalainsäädäntöä,
              voit tehdä valituksen valvontaviranomaiselle:
            </p>
            <p>
              <strong>Tietosuojavaltuutetun toimisto</strong>
              <br />
              Lintulahdenkuja 4, 00530 Helsinki
              <br />
              Puhelin: 029 566 6700
              <br />
              Sähköposti: tietosuoja@om.fi
              <br />
              Verkkosivusto: tietosuoja.fi
            </p>

            <h2>9. Kolmannen osapuolen palvelut</h2>
            <p>Sivustollamme käytetään seuraavia kolmannen osapuolen palveluita:</p>
            <ul>
              <li>
                <strong>Google Analytics 4</strong> — Kävijäanalytiikka (Google Ireland Ltd)
              </li>
              <li>
                <strong>Vercel</strong> — Sivuston ylläpito ja CDN (Vercel Inc.)
              </li>
              <li>
                <strong>Google AdSense</strong> — Mainonta (Google Ireland Ltd) — jos käytössä
              </li>
            </ul>

            <h2>10. Tietoturva</h2>
            <p>
              Suojaamme sivuston ja sen tiedot asianmukaisilla teknisillä ja
              organisatorisilla toimenpiteillä:
            </p>
            <ul>
              <li>HTTPS-salaus kaikessa tiedonsiirrossa</li>
              <li>Säännölliset tietoturvapäivitykset</li>
              <li>Pääsyoikeuksien rajoittaminen</li>
              <li>Tietojen minimointi — keräämme vain välttämättömiä tietoja</li>
            </ul>

            <h2>11. Muutokset tietosuojaselosteeseen</h2>
            <p>
              Pidätämme oikeuden päivittää tätä tietosuojaselostetta. Merkittävistä
              muutoksista ilmoitamme sivuston kautta. Suosittelemme tarkistamaan
              tämän selosteen säännöllisesti.
            </p>

            <h2>12. Yhteystiedot</h2>
            <p>
              Tietosuojaan liittyvissä kysymyksissä ota yhteyttä:
              <br />
              <a href="mailto:info@vakuutusvertailu.fi">info@vakuutusvertailu.fi</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
