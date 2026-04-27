import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

// ============================================================
// Vakuutussanasto — 25 confirmed Finnish insurance terms
// Sources cited where directly relevant: Finanssivalvonta (FIN-FSA),
// Liikenne- ja potilasvahinkolautakunta, Finanssiala ry (vakuutusyhtiöiden keskusliitto).
// 2-4 sentence definitions. Plain-language Finnish.
// ============================================================

interface GlossaryTerm {
  id: string;          // URL slug / fragment
  term: string;        // Finnish display term
  definition: string;  // 2-4 sentences
  source?: string;     // Optional citation
  relatedTypeSlug?: string; // Internal link to insurance type page
}

const TERMS: GlossaryTerm[] = [
  {
    id: 'liikennevakuutus',
    term: 'Liikennevakuutus',
    definition:
      'Lakisääteinen vakuutus, joka korvaa liikenteessä ulkopuolisille aiheutetut henkilö- ja omaisuusvahingot. Liikennevakuutus on pakollinen jokaiselle rekisteröidylle ajoneuvolle Suomessa, ja se korvaa myös oman ajoneuvon matkustajien henkilövahingot. Liikennevakuutusta valvoo Finanssivalvonta (FIN-FSA), ja vahinkojen ratkaisukäytäntöä Liikennevahinkolautakunta.',
    source: 'Finanssivalvonta (FIN-FSA), Liikennevahinkolautakunta',
    relatedTypeSlug: 'autovakuutus',
  },
  {
    id: 'kasko',
    term: 'Kasko',
    definition:
      'Vapaaehtoinen autovakuutus, joka täydentää lakisääteistä liikennevakuutusta korvaamalla oman ajoneuvon vahinkoja. Kaskovakuutus jaetaan tyypillisesti osa- ja täyskaskoihin, ja korvauksen laajuus määräytyy valitun turvatason mukaan.',
    relatedTypeSlug: 'autovakuutus',
  },
  {
    id: 'osakasko',
    term: 'Osakasko',
    definition:
      'Kaskovakuutuksen perustaso, joka korvaa tyypillisesti palo-, varkaus-, lasi- ja eläinvahingot sekä hinauksen. Osakasko ei korvaa kolarissa oman auton vaurioita — siihen tarvitaan täyskasko. Sopii useimmiten 5–15 vuotta vanhoille ajoneuvoille.',
    relatedTypeSlug: 'autovakuutus',
  },
  {
    id: 'tayskasko',
    term: 'Täyskasko',
    definition:
      'Laaja autovakuutus, joka kattaa osakaskon turvat sekä lisäksi törmäys-, ilkivalta- ja tieltä suistumisvahingot. Täyskasko on yleensä järkevä uudehkoille ja arvokkaille autoille sekä rahoitus- tai leasingautoille. Korvauksen määrä on aina rajattu ajoneuvon käypään arvoon, ellei lunastusturvaa ole erikseen valittu.',
    relatedTypeSlug: 'autovakuutus',
  },
  {
    id: 'kotivakuutus',
    term: 'Kotivakuutus',
    definition:
      'Asunnon ja sen irtaimiston vahinkoja korvaava vakuutus. Tyypillinen kotivakuutus sisältää palo-, vuoto-, murto-, vastuu- ja oikeusturvavakuutuksen. Suomessa noin 84 % kotitalouksista on kotivakuutettu, ja vakuutus on käytännössä välttämätön sekä omistus- että vuokra-asukkaille.',
    relatedTypeSlug: 'kotivakuutus',
  },
  {
    id: 'kotitalousvakuutus',
    term: 'Kotitalousvakuutus',
    definition:
      'Kotivakuutuksen vanhempi rinnakkaistermi, jolla viitataan tavallisesti kodin irtaimiston ja asukkaiden vakuuttamiseen. Käytännössä useimmat vakuutusyhtiöt käyttävät nykyisin termiä kotivakuutus, joka kattaa myös kotitalousvakuutuksen perinteisen sisällön.',
    relatedTypeSlug: 'kotivakuutus',
  },
  {
    id: 'henkivakuutus',
    term: 'Henkivakuutus',
    definition:
      'Vakuutus, joka maksaa korvauksen vakuutetun kuoleman jälkeen sopimuksessa nimetyille edunsaajille. Henkivakuutuksen tarkoitus on turvata perheen tai läheisten talous lainojen, asumisen ja arjen kulujen osalta. Suomessa vain noin 26 % aikuisista on henkivakuutettu — selvästi alle Pohjoismaiden keskitason.',
    relatedTypeSlug: 'henkivakuutus',
  },
  {
    id: 'tapaturmavakuutus',
    term: 'Tapaturmavakuutus',
    definition:
      'Vapaa-ajan ja työajan tapaturmista aiheutuvia hoitokuluja, työkyvyttömyyttä tai pysyvää haittaa korvaava vakuutus. Yksityishenkilön tapaturmavakuutus on vapaaehtoinen, mutta työnantajalle pakollinen lakisääteinen tapaturmavakuutus on aina järjestettävä työntekijöilleen.',
    relatedTypeSlug: 'tapaturmavakuutus',
  },
  {
    id: 'matkavakuutus',
    term: 'Matkavakuutus',
    definition:
      'Matkalla sattuvia tapaturmia, sairastumisia, peruutuksia ja matkatavaravahinkoja korvaava vakuutus. Matkavakuutus voi olla kertavakuutus yksittäiselle matkalle tai jatkuva matkavakuutus, joka on voimassa kaikilla vuoden aikaisilla matkoilla.',
    relatedTypeSlug: 'matkavakuutus',
  },
  {
    id: 'oikeusturvavakuutus',
    term: 'Oikeusturvavakuutus',
    definition:
      'Vakuutus, joka korvaa asianajo- ja oikeudenkäyntikuluja yksityiselämään, työsuhteeseen tai kuluttajariita-asioihin liittyvissä tilanteissa. Oikeusturvavakuutus sisältyy yleensä kotivakuutukseen tiettyyn enimmäismäärään (esim. 10 000–15 000 €) ja se on tärkeä turva yllättävissä riitatilanteissa.',
    relatedTypeSlug: 'kotivakuutus',
  },
  {
    id: 'vastuuvakuutus',
    term: 'Vastuuvakuutus',
    definition:
      'Korvaa vahinkoja, jotka vakuutuksenottaja aiheuttaa toiselle henkilölle tai sivullisen omaisuudelle. Vastuuvakuutus sisältyy lähes kaikkiin kotivakuutuksiin ja sen korvauskatto on tyypillisesti 200 000–500 000 euroa. Tärkeä turva esim. vesivahingon tai yllättävän omaisuusvahingon yhteydessä.',
    relatedTypeSlug: 'kotivakuutus',
  },
  {
    id: 'omavastuu',
    term: 'Omavastuu',
    definition:
      'Vahinkokohtainen rahasumma, jonka vakuutuksenottaja maksaa itse ennen kuin vakuutusyhtiö korvaa loput. Omavastuun valinta vaikuttaa suoraan vakuutusmaksuun: korkeampi omavastuu pienentää maksua, matalampi omavastuu nostaa sitä. Tyypilliset omavastuut ovat 150–500 €.',
  },
  {
    id: 'bonus',
    term: 'Bonus (vakuutusbonus)',
    definition:
      'Liikennevakuutuksessa vahingottomilta vuosilta kertyvä alennus, joka pienentää vakuutusmaksua. Bonusasteikko on Suomessa S0–S13, ja maksimibonus tarkoittaa noin 70 % alennusta perusmaksusta. Yhden vahingon jälkeen bonus tippuu yhtiön hinnastosta riippuen, ja se voi vaikuttaa hintaan vuosia.',
    relatedTypeSlug: 'autovakuutus',
  },
  {
    id: 'vakuutusmaksu',
    term: 'Vakuutusmaksu',
    definition:
      'Vakuutuksenottajan vakuutusyhtiölle maksama korvaus vakuutusturvasta. Vakuutusmaksu määräytyy vakuutuslajin, valitun turvatason, omavastuun, kohteen tietojen ja asiakaskohtaisten tekijöiden perusteella. Maksu voidaan periä kuukausittain, neljännesvuosittain tai kerran vuodessa.',
  },
  {
    id: 'vakuutuskausi',
    term: 'Vakuutuskausi',
    definition:
      'Aikaväli, jonka ajan vakuutus on yhtäjaksoisesti voimassa — tyypillisesti yksi vuosi. Vakuutuskauden päättyessä jatkuvat sopimukset uusiutuvat automaattisesti, ellei kumpikaan osapuoli irtisano sopimusta. Vakuutusmaksu ja ehdot tarkistetaan yleensä jokaisen kauden vaihtuessa.',
  },
  {
    id: 'vakuutuskirja',
    term: 'Vakuutuskirja',
    definition:
      'Vakuutusyhtiön antama dokumentti, joka kuvaa vakuutuksen olennaiset tiedot: vakuutuskohteen, voimassaoloajan, korvauskatot, omavastuut ja vakuutusmaksun. Vakuutuskirja yhdessä yleisten vakuutusehtojen kanssa muodostaa vakuutussopimuksen sisällön.',
  },
  {
    id: 'vakuutusehdot',
    term: 'Vakuutusehdot',
    definition:
      'Tarkat säännöt, jotka määrittävät mitä vakuutus korvaa, mitä rajoituksia on ja mikä on osapuolten vastuu. Yleisten vakuutusehtojen lisäksi sovelletaan tuotekohtaisia erityisehtoja sekä Suomen vakuutussopimuslakia (543/1994). Ehtoihin kannattaa tutustua aina ennen vakuutuksen ottamista.',
  },
  {
    id: 'korvaushakemus',
    term: 'Korvaushakemus',
    definition:
      'Vakuutuksenottajan tekemä ilmoitus, jolla haetaan vakuutuskorvausta sattuneen vahingon perusteella. Korvaushakemukseen liitetään yleensä selvitys vahingon syystä, määrästä ja olosuhteista. Vakuutusyhtiön on käsiteltävä hakemus ilman aiheetonta viivytystä — tyypillisesti 1–4 viikon kuluessa.',
  },
  {
    id: 'ikaalennus',
    term: 'Ikäalennus',
    definition:
      'Vakuutusyhtiön soveltama vähennys korvaukseen, joka huomioi vahingoittuneen tavaran iän ja kulumisen. Esimerkiksi 8 vuotta vanhasta televisiosta korvataan vain käypä arvo, ei uutta vastaavan hintaa. Ikäalennukset perustuvat vakuutusehtoihin ja ne voivat olla merkittäviä elektroniikassa.',
  },
  {
    id: 'ennakkomaksu',
    term: 'Ennakkomaksu',
    definition:
      'Vakuutusmaksun ensimmäinen erä, joka maksetaan vakuutuksen alkaessa ennen vakuutuskauden täsmällisen hinnoittelun valmistumista. Ennakkomaksu perustuu arvioon, ja lopullinen maksu tasataan vakuutuskauden lopussa todellisen riskin tai käytön mukaan.',
  },
  {
    id: 'jatkuva-sopimus',
    term: 'Jatkuva sopimus',
    definition:
      'Vakuutussopimuksen muoto, joka uusiutuu automaattisesti vakuutuskausittain ilman erillistä toimenpidettä. Jatkuva sopimus on Suomessa vakuutusten yleisin muoto, ja sen voi irtisanoa tyypillisesti minä tahansa hetkenä — uusi sopimus astuu voimaan irtisanomispäivästä.',
  },
  {
    id: 'maaraaikainen-sopimus',
    term: 'Määräaikainen sopimus',
    definition:
      'Vakuutussopimus, joka on voimassa ennalta sovitun ajan — esimerkiksi yhden matkavakuutuksen pituuden tai rakennusprojektin keston. Määräaikainen sopimus päättyy automaattisesti sovittuna päivänä, eikä se uusiudu ilman uutta sopimusta.',
  },
  {
    id: 'vakuutusarvo',
    term: 'Vakuutusarvo',
    definition:
      'Vakuutuskohteen arvo, jonka mukaan korvaus määräytyy vahinkotilanteessa. Vakuutusarvo voi olla joko jälleenhankinta-arvo (uusi vastaava) tai käypä arvo (markkina-arvo huomioiden iän ja kulumisen). Valinta vaikuttaa sekä korvauksen määrään että vakuutusmaksuun.',
  },
  {
    id: 'jalleenhankinta-arvo',
    term: 'Jälleenhankinta-arvo',
    definition:
      'Vahingoittuneen tai tuhoutuneen omaisuuden korvaaminen uutta vastaavalla esineellä tai rakennuksella. Jälleenhankinta-arvoon perustuva vakuutus on yleensä kalliimpi mutta antaa täyden korvauksen ilman ikäalennusta — tärkeä erityisesti rakennuksille ja arvokkaille kodinkoneille.',
  },
  {
    id: 'kaypa-arvo',
    term: 'Käypä arvo',
    definition:
      'Omaisuuden todellinen markkina-arvo vahinkohetkellä, ottaen huomioon iän, kulumisen ja kysynnän. Korvaus käyvän arvon perusteella jää usein selvästi alle uuden esineen hinnan. Vakuutuksissa puhutaan usein "alennetusta jälleenhankinta-arvosta", jossa ikäalennukset on jo huomioitu.',
  },
];

const breadcrumbs = [
  { label: 'Etusivu', href: '/' },
  { label: 'Vakuutussanasto', href: '/sanasto' },
];

export const metadata: Metadata = {
  title: 'Vakuutussanasto — 25 keskeistä vakuutustermiä selitettynä',
  description:
    'Selkokielinen vakuutussanasto: liikennevakuutus, kasko, omavastuu, bonus, vakuutuskirja ja muut keskeiset termit suomeksi. Lähteinä Finanssivalvonta ja vakuutusalan käytännöt.',
  alternates: {
    canonical: `${SITE_URL}/sanasto`,
  },
  openGraph: {
    title: `Vakuutussanasto — 25 keskeistä vakuutustermiä | ${SITE_NAME}`,
    description:
      'Selkokielinen vakuutussanasto suomeksi. Tunne vakuutusten avainsanat ennen kuin valitset.',
    url: `${SITE_URL}/sanasto`,
  },
};

export default function GlossaryPage() {
  // Sort alphabetically (Finnish locale)
  const sortedTerms = [...TERMS].sort((a, b) =>
    a.term.localeCompare(b.term, 'fi')
  );

  // ── Schema.org: DefinedTermSet + DefinedTerms ────────────────
  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${SITE_URL}/sanasto`,
    name: 'Vakuutussanasto',
    description:
      'Suomalaisten vakuutusten keskeisten termien selkokielinen sanasto.',
    url: `${SITE_URL}/sanasto`,
    inLanguage: 'fi-FI',
    hasDefinedTerm: sortedTerms.map((t) => ({
      '@type': 'DefinedTerm',
      '@id': `${SITE_URL}/sanasto#${t.id}`,
      name: t.term,
      description: t.definition,
      inDefinedTermSet: `${SITE_URL}/sanasto`,
      url: `${SITE_URL}/sanasto#${t.id}`,
    })),
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

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-3xl font-bold text-navy sm:text-4xl">
            Vakuutussanasto
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Suomalaisten vakuutusten 25 keskeistä termiä selitettynä selkokielellä —
            jotta tunnet sopimuksesi ehdot ennen allekirjoitusta.
          </p>
          <p className="mb-12 text-sm text-gray-500">
            Lähteinä on käytetty <strong>Finanssivalvonta (FIN-FSA)</strong>:n vakuutusvalvonnan
            ohjeistusta sekä Liikennevahinkolautakunnan ja Finanssiala ry:n
            (vakuutusyhtiöiden keskusliitto) yleistä alan käytäntöä. Sanasto on
            yleisluontoinen — yksittäisen sopimuksen sisältö määräytyy aina
            vakuutusehtojen ja vakuutuskirjan mukaan.
          </p>

          {/* Alphabetical jump links */}
          <nav className="mb-12 rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Termit aakkosjärjestyksessä
            </h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {sortedTerms.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="text-teal hover:text-teal-dark hover:underline"
                  >
                    {t.term}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Term definitions */}
          <div className="space-y-8">
            {sortedTerms.map((t) => (
              <article
                key={t.id}
                id={t.id}
                className="scroll-mt-24 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <h2 className="mb-3 text-xl font-semibold text-navy">{t.term}</h2>
                <p className="leading-relaxed text-gray-700">{t.definition}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                  {t.relatedTypeSlug && (
                    <Link
                      href={`/${t.relatedTypeSlug}`}
                      className="font-medium text-teal hover:text-teal-dark"
                    >
                      Lue lisää &rarr;
                    </Link>
                  )}
                  {t.source && (
                    <span className="text-xs text-gray-400">Lähde: {t.source}</span>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Footer disclaimer */}
          <div className="mt-12 rounded-xl bg-amber/5 p-5 ring-1 ring-amber/20">
            <p className="text-sm text-gray-600">
              <strong className="text-navy">Huomaa:</strong> Sanasto on yleisluontoinen
              tietopalvelu — ei henkilökohtaista vakuutusneuvontaa. Yksittäisen vakuutuksen
              sisältö ja korvauskäytäntö määräytyvät aina valitun vakuutusyhtiön ehtojen
              ja sopimuksen mukaan. Tarkista yksityiskohdat omasta vakuutuskirjastasi tai
              ota yhteys vakuutusyhtiöösi.
            </p>
          </div>

          {/* Cross-links */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Link
              href="/oppaat"
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold text-navy">Vakuutusoppaat</h3>
              <p className="text-sm text-gray-600">
                Syvällisemmät oppaat eri vakuutuslajeihin ja vertailuun.
              </p>
            </Link>
            <Link
              href="/metodologia"
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold text-navy">Näin vertailemme</h3>
              <p className="text-sm text-gray-600">
                Lue miten {SITE_NAME} laskee vertailujärjestyksen.
              </p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(definedTermSetSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
