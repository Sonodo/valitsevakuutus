// ============================================================
// Vakuutusvertailu — Educational Guides Data
// 5 comprehensive Finnish-language guides
// ============================================================

import type { Guide, InsuranceType, TOCItem } from '@/types';

// ============================================================
// Guide 1: Näin valitset autovakuutuksen
// ============================================================

const autovakuutusOpas: Guide = {
  slug: 'nain-valitset-autovakuutuksen',
  title: 'Näin valitset autovakuutuksen — Täydellinen opas',
  description:
    'Kattava opas autovakuutuksen valintaan Suomessa. Liikennevakuutus, osakasko, täyskasko — mitä tarvitset, mitä ne maksavat ja miten vertailet oikein.',
  category: 'auto',
  author: 'Vakuutusvertailu.fi toimitus',
  publishedAt: '2026-03-15',
  updatedAt: '2026-03-15',
  readTime: 18,
  targetKeyword: 'autovakuutuksen valinta',
  relatedGuides: ['kotivakuutus-opas', 'vakuutuksen-irtisanominen-ja-vaihto'],
  relatedInsuranceTypes: ['auto'],
  tableOfContents: [
    { id: 'johdanto', title: 'Johdanto: Autovakuutus Suomessa', level: 2 },
    { id: 'liikennevakuutus', title: 'Liikennevakuutus — lakisääteinen perus', level: 2 },
    { id: 'kaskovakuutus', title: 'Kaskovakuutus — vapaaehtoinen turva', level: 2 },
    { id: 'osakasko', title: 'Osakasko yksityiskohtaisesti', level: 3 },
    { id: 'tayskasko', title: 'Täyskasko yksityiskohtaisesti', level: 3 },
    { id: 'laaja-tayskasko', title: 'Laaja täyskasko', level: 3 },
    { id: 'hintaan-vaikuttavat', title: 'Hintaan vaikuttavat tekijät', level: 2 },
    { id: 'bonusjarjestelma', title: 'Bonusjärjestelmä', level: 2 },
    { id: 'omavastuu', title: 'Omavastuun valinta', level: 2 },
    { id: 'vertailu-vaiheet', title: 'Vertailun vaiheet', level: 2 },
    { id: 'erityistilanteet', title: 'Erityistilanteet', level: 2 },
    { id: 'usein-kysytyt', title: 'Usein kysytyt kysymykset', level: 2 },
  ],
  content: `
<p>Autovakuutus on monen suomalaisen suurin yksittäinen vakuutuskulu. Oikean vakuutuksen valinta voi säästää satoja euroja vuodessa — mutta väärä valinta voi jättää sinut ilman turvaa juuri silloin, kun sitä eniten tarvitset. Tämä opas kattaa kaiken, mitä sinun tulee tietää autovakuutuksen valinnasta Suomessa.</p>

<h2 id="johdanto">Johdanto: Autovakuutus Suomessa</h2>

<p>Suomessa on yli 3,5 miljoonaa rekisteröityä ajoneuvoa. Jokainen liikenteessä käytettävä ajoneuvo tarvitsee lakisääteisen liikennevakuutuksen. Sen lisäksi noin 60–70 % alle 10-vuotiaista autoista on kaskovakuutettu.</p>

<p>Autovakuutusmarkkinat ovat noin 1,8 miljardia euroa vuodessa, ja neljä suurinta yhtiötä (OP/Pohjola, LähiTapiola, If, Fennia) hallitsevat noin 90 % markkinoista. Hintaerot ovat kuitenkin merkittäviä — <strong>jopa 30–50 % samankaltaisen turvan osalta</strong>.</p>

<h2 id="liikennevakuutus">Liikennevakuutus — lakisääteinen perus</h2>

<p>Liikennevakuutus on Suomen liikennevakuutuslain (460/2016) mukainen pakollinen vakuutus. Se korvaa:</p>

<ul>
  <li><strong>Kolmannelle osapuolelle aiheutuneet henkilövahingot</strong> — loukkaantumisen hoitokulut, ansionmenetys, pysyvä haitta, kuolema</li>
  <li><strong>Kolmannelle osapuolelle aiheutuneet omaisuusvahingot</strong> — toisen auton, kiinteistön tai muun omaisuuden vauriot</li>
  <li><strong>Oman auton matkustajien henkilövahingot</strong> — mutta kuljettajan omat vahingot vain rajoitetusti, jos kuljettaja on syyllinen</li>
</ul>

<p><strong>Liikennevakuutus EI korvaa:</strong></p>
<ul>
  <li>Oman auton vaurioita (tarvitset kaskon)</li>
  <li>Auton hinauspalvelua</li>
  <li>Lasivahinkoja</li>
  <li>Varkausvahinkoja</li>
</ul>

<p><strong>Hinta:</strong> Liikennevakuutuksen keskimääräinen vuosimaksu on 200–600 €. Nuorille kuljettajille (alle 25 v) hinta voi olla 500–1 200 €. Korkeimmassa bonusluokassa (S) hinta voi olla alle 150 €.</p>

<p><strong>Bonusjärjestelmä:</strong> Liikennevakuutuksen hinta riippuu vahvasti bonusluokasta. Uusi kuljettaja aloittaa luokasta 0 ja voi saavuttaa korkeimman S-luokan noin 13–15 vahingottoman vuoden jälkeen. S-luokassa alennus on 70–80 % perusmaksusta.</p>

<h2 id="kaskovakuutus">Kaskovakuutus — vapaaehtoinen turva</h2>

<p>Kaskovakuutus on vapaaehtoinen vakuutus, joka korvaa oman autosi vahinkoja. Kasko on kolmitasoinen: osakasko, täyskasko ja laaja täyskasko.</p>

<h3 id="osakasko">Osakasko yksityiskohtaisesti</h3>

<p>Osakasko on peruskasko, joka korvaa:</p>
<ul>
  <li><strong>Palovahingot:</strong> Auto syttyy palamaan — sähkövika, itsesyttyminen, ulkoinen tulipalo</li>
  <li><strong>Varkausvahingot:</strong> Auto varastetaan tai varkausyritys vahingoittaa autoa</li>
  <li><strong>Lasivahingot:</strong> Tuulilasin ja ikkunoiden halkeamat ja rikkoutumiset — yleisimmin käytetty kaskoturva</li>
  <li><strong>Eläinvahingot:</strong> Hirvi-, peura- ja muu eläinkolari — erityisen tärkeä maaseudulla</li>
  <li><strong>Hinauspalvelu:</strong> Auton hinaus lähimpään korjaamoon rikkoutumis- tai onnettomuustilanteessa</li>
</ul>

<p><strong>Osakasko EI korvaa:</strong> Kolarissa oman auton vaurioita (törmäys toiseen autoon, tieltä suistuminen), ilkivaltavahinkoja.</p>

<p><strong>Kenelle sopii:</strong> 5–15 vuotta vanhoille autoille, joiden arvo on 3 000–15 000 €. Hyvä kompromissi hinta/kattavuus.</p>

<p><strong>Hinta:</strong> 150–400 €/vuosi kaskon osuus (liikennevakuutuksen päälle).</p>

<h3 id="tayskasko">Täyskasko yksityiskohtaisesti</h3>

<p>Täyskasko sisältää kaikki osakaskon turvat sekä lisäksi:</p>
<ul>
  <li><strong>Törmäysvahinko:</strong> Kolari toisen auton tai esteen kanssa — oman auton korjauskulut</li>
  <li><strong>Tieltä suistuminen:</strong> Ajat ojaan, kaatuu — oman auton vahingot</li>
  <li><strong>Ilkivalta:</strong> Auton tahallinen vahingoittaminen — naarmutus, rengasrikko, polttaminen</li>
</ul>

<p><strong>Kenelle sopii:</strong> Alle 10 vuotta vanhoille autoille tai autoille, joiden arvo on yli 10 000 €. Kaupungissa pysäköiville (ilkivaltariski).</p>

<p><strong>Hinta:</strong> 350–1 200 €/vuosi kaskon osuus (liikennevakuutuksen päälle).</p>

<h3 id="laaja-tayskasko">Laaja täyskasko</h3>

<p>Laajin kaskotaso, joka sisältää edellisten lisäksi:</p>
<ul>
  <li><strong>Lunastusturva:</strong> Jos auto lunastetaan (arvo laskee alle korjauskulujen), saat korvauksen, joka ylittää auton käyvän arvon — esimerkiksi uuden auton hankintahintaa vastaavan summan</li>
  <li><strong>Keskeytysturva:</strong> Sijaisauto korjauksen ajaksi (tyypillisesti 14–30 päivää)</li>
  <li><strong>Autopalveluvakuutus:</strong> 24/7 tiepalvelu — apua rikkoutumisen, polttoaineen loppumisen tai avainten lukitsemisen tilanteissa</li>
  <li><strong>Pysäköintivakuutus:</strong> Joissakin yhtiöissä (esim. If Superkasko) pysäköintialueella syntyneet vahingot ilman tunnistettua tekijää</li>
</ul>

<p><strong>Kenelle sopii:</strong> Uudet ja premium-autot, rahoitus- ja leasing-autot, paljon ajavat.</p>

<p><strong>Hinta:</strong> 600–1 900 €/vuosi kaskon osuus.</p>

<h2 id="hintaan-vaikuttavat">Hintaan vaikuttavat tekijät</h2>

<p>Autovakuutuksen hinta muodostuu usean tekijän perusteella. Tässä ne tärkeysjärjestyksessä:</p>

<ol>
  <li>
    <strong>Bonusluokka (tärkein)</strong>
    <p>Vahingottoman ajon historia on suurin yksittäinen tekijä. S-luokassa maksat 70–80 % vähemmän kuin 0-luokassa. Uudelle kuljettajalle tämä tarkoittaa aluksi korkeita maksuja.</p>
  </li>
  <li>
    <strong>Kuljettajan ikä</strong>
    <p>Alle 25-vuotiaat maksavat merkittävästi enemmän tilastollisen riskin perusteella. Ero voi olla 2–3-kertainen verrattuna 40-vuotiaaseen.</p>
  </li>
  <li>
    <strong>Auton arvo ja ikä</strong>
    <p>Kaskovakuutuksen hinta on suoraan sidoksissa auton arvoon — mitä arvokkaampi auto, sitä kalliimpi kasko.</p>
  </li>
  <li>
    <strong>Moottorin teho (kW)</strong>
    <p>Liikennevakuutuksen hinta nousee moottorin tehon mukaan. Tehokas auto = korkeampi riski.</p>
  </li>
  <li>
    <strong>Postinumero</strong>
    <p>Kaupunkialueilla (Helsinki, Tampere, Turku) hinnat ovat korkeampia kuin maaseudulla — enemmän liikennettä, enemmän vahinkoja.</p>
  </li>
  <li>
    <strong>Vuotuinen ajomäärä</strong>
    <p>Vähemmän ajoa = pienempi riski. Ilmoita todellinen ajokilometrimäärä — älä liioittele.</p>
  </li>
  <li>
    <strong>Omavastuu</strong>
    <p>Korkeampi omavastuu = matalampi vakuutusmaksu. 500 € omavastuulla voit säästää 10–20 % verrattuna 150 € omavastuuseen.</p>
  </li>
</ol>

<h2 id="bonusjarjestelma">Bonusjärjestelmä</h2>

<p>Bonusjärjestelmä on autovakuutuksen hintaan eniten vaikuttava tekijä pitkällä aikavälillä. Perusperiaatteet:</p>

<ul>
  <li>Joka vahingoton vuosi nostaa bonusta yhden luokan</li>
  <li>Vahinko laskee bonusta tyypillisesti 2–3 luokkaa</li>
  <li>Bonus on henkilökohtainen ja siirtyy yhtiöstä toiseen</li>
  <li>Eläin-, lasi- ja varkausvahingot eivät yleensä laske kaskobonusta</li>
  <li>Bonustodistus on voimassa 12 kuukautta</li>
</ul>

<p>Bonus on niin merkittävä, että pienen vahingon maksaminen itse (ilman vakuutuskorvausta) on usein kannattavampaa kuin bonuksen menettäminen.</p>

<h2 id="omavastuu">Omavastuun valinta</h2>

<p>Omavastuu on summa, jonka maksat itse vahinkohetkellä ennen kuin vakuutus korvaa loput. Yleiset omavastuutasot:</p>

<ul>
  <li><strong>150 €:</strong> Matalin omavastuu — korkein vakuutusmaksu. Sopii, jos pienetkin vahingot haluat korvauksen piiriin.</li>
  <li><strong>200 €:</strong> Yleisin valinta — kohtuullinen tasapaino.</li>
  <li><strong>500 €:</strong> Matalampi vakuutusmaksu — sopii kokeneille kuljettajille, joille vahinkoja sattuu harvoin.</li>
  <li><strong>1 000 €:</strong> Matalin vakuutusmaksu — sopii vain, jos vahingon sattuessa 1 000 € maksaminen ei tuota ongelmia.</li>
</ul>

<p><strong>Vinkki:</strong> Laita omavastuun suuruinen summa sivuun säästöön. Näin voit valita korkeamman omavastuun ja säästää vakuutusmaksussa — ja silti selviät vahinkohetkellä.</p>

<h2 id="vertailu-vaiheet">Vertailun vaiheet</h2>

<ol>
  <li><strong>Määritä turvan taso:</strong> Tarvitsetko liikenteen, osakaskon, täyskaskon vai laajan kaskon?</li>
  <li><strong>Selvitä bonusluokkasi:</strong> Pyydä tarvittaessa bonustodistus nykyiseltä yhtiöltä.</li>
  <li><strong>Pyydä tarjoukset 3–5 yhtiöstä:</strong> Käytä verkkolaskureita tai vertailupalveluamme.</li>
  <li><strong>Vertaa kokonaisuutta:</strong> Hinta + kattavuus + omavastuu + korvausten katot.</li>
  <li><strong>Tarkista korvausehdot:</strong> Mitä tarkalleen korvataan? Mitkä ovat rajaukset?</li>
  <li><strong>Huomioi palvelun laatu:</strong> Asiakastyytyväisyys, korvausten nopeus, digitaalisten palveluiden taso.</li>
  <li><strong>Tee päätös ja vaihda:</strong> Varmista katkeamaton turva — uusi vakuutus alkaa samana päivänä kuin vanha päättyy.</li>
</ol>

<h2 id="erityistilanteet">Erityistilanteet</h2>

<h3>Rahoitusauto / leasing</h3>
<p>Rahoitusyhtiö vaatii yleensä vähintään täyskaskon. Lunastusturva on erityisen suositeltava, koska auton arvo voi laskea alle lainan saldon.</p>

<h3>Sähköauto</h3>
<p>Sähköautojen vakuutushinnat ovat usein korkeampia akun korkean arvon ja korjauskustannusten vuoksi. Tarkista, kattaako kasko akkuvauriot.</p>

<h3>Nuori kuljettaja</h3>
<p>Vertaile erityisen huolellisesti — hintaerot ovat suurimmillaan nuorilla kuljettajilla. POP Vakuutus ja If ovat usein edullisimpia.</p>

<h3>Kakkosauto / kesäauto</h3>
<p>Kausivakuutus (seisontavakuutus) on mahdollinen, kun auto ei ole käytössä. Säästät merkittävästi talvikuukausien vakuutusmaksuissa.</p>

<h2 id="usein-kysytyt">Usein kysytyt kysymykset</h2>

<p><strong>Voiko liikennevakuutuksen vaihtaa kesken kauden?</strong></p>
<p>Kyllä. Liikennevakuutuksen voi irtisanoa milloin tahansa, ja uusi vakuutus astuu voimaan heti. Vanha vakuutus päättyy automaattisesti, kun uusi yhtiö ilmoittaa Traficomille.</p>

<p><strong>Siirtyykö bonus automaattisesti uuteen yhtiöön?</strong></p>
<p>Käytännössä kyllä. Uusi yhtiö tarkistaa bonustiedot vakuutusyhtiöiden yhteisestä tietojärjestelmästä. Bonustodistuksen toimittaminen nopeuttaa prosessia.</p>

<p><strong>Mitä jos en maksa liikennevakuutusta?</strong></p>
<p>Maksamaton liikennevakuutus johtaa perintään ja mahdollisesti liikennevakuutusmaksun korotettuun määrään. Liikennevakuutuskeskus voi periä korvauksia suoraan.</p>

<p><strong>Tarvitseeko mopo vakuutusta?</strong></p>
<p>Kyllä. Kaikki moottoriajoneuvot tarvitsevat liikennevakuutuksen — myös mopot, moottoripyörät, mönkijät ja traktorit.</p>
`,
};

// ============================================================
// Guide 2: Kotivakuutus-opas
// ============================================================

const kotivakuutusOpas: Guide = {
  slug: 'kotivakuutus-opas',
  title: 'Kotivakuutus-opas: Kaikki mitä sinun pitää tietää',
  description:
    'Täydellinen opas kotivakuutukseen Suomessa. Mitä kotivakuutus korvaa, miten valita oikea turvataso, miten arvioida irtaimiston arvo ja miten säästää.',
  category: 'home',
  author: 'Vakuutusvertailu.fi toimitus',
  publishedAt: '2026-03-14',
  updatedAt: '2026-03-14',
  readTime: 15,
  targetKeyword: 'kotivakuutus opas',
  relatedGuides: ['nain-valitset-autovakuutuksen', 'mita-vakuutus-korvaa'],
  relatedInsuranceTypes: ['home'],
  tableOfContents: [
    { id: 'johdanto', title: 'Miksi kotivakuutus on tärkeä?', level: 2 },
    { id: 'mita-sisaltaa', title: 'Mitä kotivakuutus sisältää?', level: 2 },
    { id: 'irtaimisto', title: 'Irtaimiston arviointi', level: 2 },
    { id: 'asuntotyypit', title: 'Kotivakuutus eri asuntotyypeille', level: 2 },
    { id: 'turvataso', title: 'Oikean turvatason valinta', level: 2 },
    { id: 'yleisimmat-vahingot', title: 'Yleisimmät kotivahingot ja korvaukset', level: 2 },
    { id: 'hinta', title: 'Kotivakuutuksen hinta 2026', level: 2 },
    { id: 'vertailu', title: 'Miten vertailla kotivakuutuksia?', level: 2 },
    { id: 'faq', title: 'Usein kysytyt kysymykset', level: 2 },
  ],
  content: `
<p>Kotivakuutus on suomalaisen perusvakuutus — <strong>84 % suomalaisista omistaa sellaisen</strong>. Silti luku on laskenut 95 %:sta vuoteen 2014 verrattuna. Taloudellisten paineiden kasvaessa moni harkitsee kotivakuutuksesta luopumista — mutta se on usein suuri virhe. Tämä opas kertoo kaiken, mitä sinun pitää tietää.</p>

<h2 id="johdanto">Miksi kotivakuutus on tärkeä?</h2>

<p>Kotivakuutus suojaa kodin irtaimistoa ja sinua taloudellisesti monenlaisilta riskeiltä. Ilman kotivakuutusta:</p>

<ul>
  <li>Tulipalossa menetät kaikki tavarasii — arvo tyypillisesti 20 000–100 000 €</li>
  <li>Vesivahingossa remontti voi maksaa tuhansia euroja (omavastuu taloyhtiönkin vakuutuksessa)</li>
  <li>Jos aiheutat vahinkoa naapurille, olet henkilökohtaisesti vastuussa (ilman vastuuvakuutusta)</li>
  <li>Oikeudenkäyntikulut riitatilanteessa voivat olla tuhansia euroja</li>
</ul>

<p>Kotivakuutus maksaa tyypillisesti <strong>8–70 €/kuukausi</strong> — vain murto-osa siitä, mitä yksi vakava vahinko maksaisi.</p>

<h2 id="mita-sisaltaa">Mitä kotivakuutus sisältää?</h2>

<h3>Perusturva (sisältyy käytännössä aina)</h3>
<ul>
  <li><strong>Irtaimistovakuutus:</strong> Kodin tavarat — huonekalut, vaatteet, elektroniikka, harrastusvälineet, keittiövälineet</li>
  <li><strong>Paloturva:</strong> Tulipalosta aiheutuneet vahingot irtaimistolle (ja rakennukselle omakotitalossa)</li>
  <li><strong>Vuototurva:</strong> Putkivuodoista ja koneiden vuodoista aiheutuneet vesivahingot</li>
  <li><strong>Murtoturva:</strong> Murtovarkaudessa varastettu tai vaurioitunut omaisuus</li>
  <li><strong>Vastuuvakuutus:</strong> Korvaa vahingot, jotka sinä tai perheesi aiheuttaa toiselle</li>
  <li><strong>Oikeusturvavakuutus:</strong> Kattaa oikeudenkäyntikuluja riitatilanteissa</li>
</ul>

<h3>Laaja turva (lisämaksullinen tai laajemmassa paketissa)</h3>
<ul>
  <li><strong>Polkupyörävarkaus:</strong> Lukitun polkupyörän varkaus — tärkeä kaupungissa</li>
  <li><strong>Rikkoutumisturva:</strong> Kodin elektroniikan ja kodinkoneiden äkillinen rikkoutuminen</li>
  <li><strong>Luonnonilmiöturva:</strong> Myrsky-, tulva- ja raesadevahingot</li>
  <li><strong>Matkatavaraturva:</strong> Matkatavaroiden vauriot tai katoaminen matkoilla</li>
  <li><strong>Viherkasvivakuutus:</strong> Pihan puut ja istutukset (omakotitaloille)</li>
</ul>

<h2 id="irtaimisto">Irtaimiston arviointi</h2>

<p>Irtaimiston oikea arviointi on kriittistä. Alivakuuttaminen on yleisin virhe kotivakuutuksessa.</p>

<p><strong>Miten arvioida:</strong></p>
<ol>
  <li>Käy läpi jokainen huone ja listaa tavarat</li>
  <li>Arvioi jokaisen tavaran <strong>jälleenhankinta-arvo</strong> (uuden hinta)</li>
  <li>Muista erityisesti: vaatekaappi (usein 3 000–10 000 €), keittiövälineet, elektroniikka, harrastusvälineet</li>
  <li>Lisää varastojen, parvekkeen ja autotallin tavarat</li>
</ol>

<p><strong>Tyypilliset irtaimiston arvot:</strong></p>
<ul>
  <li>Yksiö/kaksio: 15 000–30 000 €</li>
  <li>Perheasunto (3–4h): 30 000–60 000 €</li>
  <li>Omakotitalo: 40 000–100 000 €</li>
</ul>

<p><strong>Alivakuutussääntö:</strong> Jos vakuutusmäärä on esimerkiksi 30 000 € mutta todellinen irtaimiston arvo on 60 000 €, vakuutusyhtiö voi korvata vain 50 % vahingosta. Tämä on yksi yleisimmistä ikävistä yllätyksistä vahinkohetkellä.</p>

<h2 id="asuntotyypit">Kotivakuutus eri asuntotyypeille</h2>

<h3>Kerrostaloasunto (vuokra)</h3>
<p>Vuokralaisena tarvitset irtaimistovakuutuksen. Vuokranantajan kiinteistövakuutus kattaa itse rakennuksen. Vastuuvakuutus on tärkeä — jos aiheutat esimerkiksi vesivahingon, olet vastuussa.</p>

<h3>Kerrostaloasunto (oma)</h3>
<p>Asunto-osakeyhtiön vakuutus kattaa rakennuksen. Sinä tarvitset irtaimistovakuutuksen. Huomaa: taloyhtiön vakuutus ei kata kaikkea — esimerkiksi pintamateriaalit (parketti, kaakelit) voivat olla asukkaan vastuulla.</p>

<h3>Omakotitalo</h3>
<p>Tarvitset sekä irtaimistovakuutuksen että rakennusvakuutuksen. Rakennusvakuutus kattaa itse rakennuksen vauriot (palo, vesi, myrsky). Ilman sitä olet täysin oma vastuullasi.</p>

<h3>Rivitalo</h3>
<p>Kuten kerrostaloasunto — taloyhtiö vastaa rakennuksesta, sinä irtaimistosta. Tarkista taloyhtiön vakuutuksen laajuus yhtiökokouspöytäkirjoista.</p>

<h2 id="turvataso">Oikean turvatason valinta</h2>

<p>Valitse turvataso elämäntilanteesi mukaan:</p>

<p><strong>Perusturva sopii:</strong></p>
<ul>
  <li>Opiskelijoille ja nuorille, joilla on vähän irtaimistoa</li>
  <li>Vuokra-asukkaille pienessä asunnossa</li>
  <li>Budjettitietoisille, joilla ei ole kallista elektroniikkaa</li>
</ul>

<p><strong>Laaja turva sopii:</strong></p>
<ul>
  <li>Perheille, joilla on paljon irtaimistoa</li>
  <li>Kalliin elektroniikan tai pyörän omistajille</li>
  <li>Omakotitalon omistajille</li>
  <li>Kaikille, jotka haluavat mielenrauhaa</li>
</ul>

<h2 id="yleisimmat-vahingot">Yleisimmät kotivahingot ja korvaukset</h2>

<ol>
  <li><strong>Vesivahinko (putkivuoto)</strong> — yleisin vahinkotyyppi. Keskimääräinen korvaus: 3 000–15 000 €</li>
  <li><strong>Murto tai varkaus</strong> — erityisesti kellarivarastoissa ja ensimmäisen kerroksen asunnoissa</li>
  <li><strong>Sähkölaitteen aiheuttama palo tai oikosulku</strong></li>
  <li><strong>Astianpesukoneen tai pyykinpesukoneen vuoto</strong></li>
  <li><strong>Polkupyörävarkaus</strong> — yleinen kaupungeissa</li>
</ol>

<h2 id="hinta">Kotivakuutuksen hinta 2026</h2>

<table>
  <thead>
    <tr><th>Asuntotyyppi</th><th>Perusturva (€/v)</th><th>Laaja turva (€/v)</th></tr>
  </thead>
  <tbody>
    <tr><td>Yksiö/kaksio (kerrostalo)</td><td>80–180</td><td>150–300</td></tr>
    <tr><td>Perheasunto (kerrostalo)</td><td>120–280</td><td>200–420</td></tr>
    <tr><td>Rivitalo</td><td>150–350</td><td>250–500</td></tr>
    <tr><td>Omakotitalo (sis. rakennus)</td><td>300–600</td><td>450–850</td></tr>
  </tbody>
</table>

<h2 id="vertailu">Miten vertailla kotivakuutuksia?</h2>

<ol>
  <li>Määritä irtaimiston arvo ja asuntotyyppi</li>
  <li>Päätä turvataso (perus vai laaja)</li>
  <li>Pyydä tarjoukset vähintään 3 yhtiöstä</li>
  <li>Vertaa: hinta, kattavuus, korvauskatot, omavastuu</li>
  <li>Tarkista erityisesti: vastuuvakuutuksen katto, polkupyöräsuoja, rikkoutumisturva</li>
</ol>

<h2 id="faq">Usein kysytyt kysymykset</h2>

<p><strong>Tarvitseeko opiskelija kotivakuutusta?</strong></p>
<p>Kyllä — vanhempien kotivakuutus ei yleensä kata muualle muuttaneen opiskelijan irtaimistoa. Edullinen perusvakuutus voi maksaa vain 7–10 €/kk.</p>

<p><strong>Kattaako kotivakuutus etätyövälineet?</strong></p>
<p>Yleensä kyllä, jos ne ovat sinun omaisuuttasi. Työnantajan laitteet kuuluvat työnantajan vakuutukseen.</p>

<p><strong>Pitääkö ilmoittaa pienet vahingot?</strong></p>
<p>Jos vahinko on lähellä omavastuun tasoa, voi olla järkevää maksaa itse. Vahinkoilmoitus voi vaikuttaa tuleviin maksuihin joissain yhtiöissä.</p>
`,
};

// ============================================================
// Guide 3: Vakuutuksen irtisanominen ja vaihto
// ============================================================

const vakuutuksenIrtisanominen: Guide = {
  slug: 'vakuutuksen-irtisanominen-ja-vaihto',
  title: 'Vakuutuksen irtisanominen ja vaihto — Käytännön opas',
  description:
    'Miten irtisanot vakuutuksen ja vaihdat yhtiötä? Irtisanomisajat, bonusten siirto, oikeutesi ja käytännön ohjeet. Kaikki yhdessä paikassa.',
  category: 'general',
  author: 'Vakuutusvertailu.fi toimitus',
  publishedAt: '2026-03-13',
  updatedAt: '2026-03-13',
  readTime: 12,
  targetKeyword: 'vakuutuksen irtisanominen',
  relatedGuides: ['nain-valitset-autovakuutuksen', 'mita-vakuutus-korvaa'],
  relatedInsuranceTypes: ['auto', 'home'],
  tableOfContents: [
    { id: 'oikeutesi', title: 'Oikeutesi vakuutuksenottajana', level: 2 },
    { id: 'irtisanomisajat', title: 'Irtisanomisajat vakuutustyypeittäin', level: 2 },
    { id: 'nain-irtisanot', title: 'Näin irtisanot vakuutuksen', level: 2 },
    { id: 'vaihdon-vaiheet', title: 'Vakuutuksen vaihto vaiheittain', level: 2 },
    { id: 'bonus-siirto', title: 'Bonusten siirto uuteen yhtiöön', level: 2 },
    { id: 'erityistilanteet', title: 'Erityistilanteet', level: 2 },
    { id: 'faq', title: 'Usein kysytyt kysymykset', level: 2 },
  ],
  content: `
<p>Vakuutuksen vaihtaminen toiseen yhtiöön on jokaisen suomalaisen oikeus — mutta prosessi voi tuntua monimutkaiselta. Tämä opas kattaa kaiken irtisanomisajoista bonusten siirtoon ja erityistilanteisiin.</p>

<h2 id="oikeutesi">Oikeutesi vakuutuksenottajana</h2>

<p>Suomen vakuutussopimuslaki (543/1994) antaa sinulle seuraavat oikeudet:</p>

<ul>
  <li><strong>Oikeus irtisanoa:</strong> Voit irtisanoa vakuutuksen vakuutuskauden päättyessä</li>
  <li><strong>Oikeus saada tietoa:</strong> Vakuutusyhtiön on annettava selkeät tiedot vakuutusehdoista ja hinnoista</li>
  <li><strong>Oikeus vaihtaa yhtiötä:</strong> Bonus siirtyy yhtiöstä toiseen — kukaan ei voi estää vaihtoa</li>
  <li><strong>Erityinen irtisanomisoikeus:</strong> Hinnankorotuksen yhteydessä voit irtisanoa vakuutuksen välittömästi</li>
  <li><strong>14 päivän peruutusoikeus:</strong> Etämyynnissä (verkko-osto) otetun vakuutuksen voi peruuttaa 14 päivän kuluessa</li>
</ul>

<h2 id="irtisanomisajat">Irtisanomisajat vakuutustyypeittäin</h2>

<table>
  <thead>
    <tr><th>Vakuutustyyppi</th><th>Irtisanomisaika</th><th>Erityishuomio</th></tr>
  </thead>
  <tbody>
    <tr><td>Liikennevakuutus</td><td>Voi irtisanoa milloin tahansa</td><td>Uusi vakuutus voimaan samana päivänä; vanha päättyy automaattisesti</td></tr>
    <tr><td>Kaskovakuutus</td><td>1 kuukausi ennen vakuutuskauden päättymistä</td><td>Tarkista vakuutuskirjasta vakuutuskauden päättymispäivä</td></tr>
    <tr><td>Kotivakuutus</td><td>1 kuukausi ennen vakuutuskauden päättymistä</td><td>Vakuutuskausi on yleensä 12 kuukautta</td></tr>
    <tr><td>Matkavakuutus</td><td>1 kuukausi ennen vakuutuskauden päättymistä</td><td>Jatkuva matkavakuutus uusiutuu automaattisesti</td></tr>
    <tr><td>Lemmikkivakuutus</td><td>1 kuukausi ennen vakuutuskauden päättymistä</td><td>Huomaa karenssiajat uudessa yhtiössä</td></tr>
    <tr><td>Henkivakuutus</td><td>Vaihtelee — tarkista ehdot</td><td>Pitkäaikaisissa vakuutuksissa erityissäännöt</td></tr>
  </tbody>
</table>

<h2 id="nain-irtisanot">Näin irtisanot vakuutuksen</h2>

<ol>
  <li>
    <strong>Tarkista vakuutuskauden päättymispäivä</strong>
    <p>Löytyy vakuutuskirjasta tai verkkopalvelusta. Irtisanominen tulee tehdä vähintään kuukautta ennen.</p>
  </li>
  <li>
    <strong>Tee irtisanomisilmoitus kirjallisesti</strong>
    <p>Sähköposti riittää useimmilla yhtiöillä. Osa yhtiöistä tarjoaa irtisanomislomakkeen verkossa.</p>
  </li>
  <li>
    <strong>Sisällytä ilmoitukseen:</strong>
    <ul>
      <li>Nimesi ja henkilötunnuksesi</li>
      <li>Vakuutusnumero</li>
      <li>Mikä vakuutus irtisanotaan</li>
      <li>Päättymispäivä</li>
    </ul>
  </li>
  <li>
    <strong>Varmista kuittaus</strong>
    <p>Pyydä vahvistus irtisanomisesta kirjallisesti.</p>
  </li>
</ol>

<p><strong>Huomaa liikennevakuutus:</strong> Liikennevakuutuksen vaihto on erityisen helppoa. Kun otat uuden liikennevakuutuksen toisesta yhtiöstä, uusi yhtiö ilmoittaa muutoksesta Traficomille ja vanha vakuutus päättyy automaattisesti.</p>

<h2 id="vaihdon-vaiheet">Vakuutuksen vaihto vaiheittain</h2>

<ol>
  <li><strong>Vertaile vaihtoehtoja</strong> — pyydä tarjoukset 3–5 yhtiöstä</li>
  <li><strong>Valitse uusi yhtiö ja tuote</strong></li>
  <li><strong>Ota uusi vakuutus</strong> — varmista, että alkamispäivä on sama kuin vanhan päättymispäivä</li>
  <li><strong>Irtisano vanha vakuutus</strong> — tai liikennevakuutuksessa: vanha päättyy automaattisesti</li>
  <li><strong>Siirrä bonus</strong> — pyydä bonustodistus vanhasta yhtiöstä tai anna uuden yhtiön hakea tiedot</li>
  <li><strong>Tarkista uusi vakuutuskirja</strong> — varmista, että kattavuus vastaa sovittua</li>
</ol>

<h2 id="bonus-siirto">Bonusten siirto uuteen yhtiöön</h2>

<p>Autovakuutuksen bonusluokka on henkilökohtainen ja siirtyy yhtiöstä toiseen. Käytännössä:</p>

<ul>
  <li>Uusi yhtiö voi hakea bonustiedot suoraan vakuutusyhtiöiden yhteisestä tietojärjestelmästä</li>
  <li>Voit myös pyytää kirjallisen bonustodistuksen vanhalta yhtiöltä</li>
  <li>Bonustodistus on voimassa 12 kuukautta</li>
  <li>Jos vakuutuksessa on yli 12 kuukauden tauko, bonus voi nollautua</li>
</ul>

<h2 id="erityistilanteet">Erityistilanteet</h2>

<h3>Vakuutusyhtiö korottaa hintaa</h3>
<p>Jos yhtiö ilmoittaa hinnankorotuksesta, sinulla on oikeus irtisanoa vakuutus heti korotuksen tullessa voimaan — riippumatta normaalista irtisanomisajasta. Tämä on lakisääteinen oikeutesi.</p>

<h3>Vahinko on kesken käsittelyssä</h3>
<p>Voit vaihtaa yhtiötä, vaikka korvausasia olisi kesken. Vahingon käsittelee se yhtiö, jossa vakuutus oli voimassa vahingon sattuessa.</p>

<h3>Keskittämisedun menetys</h3>
<p>Jos siirrät yhden vakuutuksen pois, se voi vaikuttaa jäljelle jäävien vakuutusten keskittämisalennukseen. Laske kokonaisuus ennen siirtoa.</p>

<h3>Karenssiajat</h3>
<p>Joissain vakuutuksissa (erityisesti lemmikki- ja henkivakuutus) uudessa yhtiössä voi olla karenssi — eli jakso, jonka aikana korvauksia ei makseta. Tarkista karenssiajat ennen vaihtoa.</p>

<h2 id="faq">Usein kysytyt kysymykset</h2>

<p><strong>Voiko vakuutusyhtiö kieltäytyä vastaanottamasta irtisanomista?</strong></p>
<p>Ei. Irtisanomisoikeus on lakisääteinen. Yhtiö voi yrittää tehdä vastatarjouksen, mutta ei voi estää irtisanomista.</p>

<p><strong>Saanko takaisin etukäteen maksetun vakuutusmaksun?</strong></p>
<p>Kyllä. Jos olet maksanut vakuutusmaksun etukäteen koko kauden, yhtiö palauttaa käyttämättömän ajan osuuden.</p>

<p><strong>Kuinka nopeasti vaihto tapahtuu?</strong></p>
<p>Liikennevakuutuksen vaihto voi tapahtua päivässä. Muissa vakuutuksissa vaihto tapahtuu yleensä vakuutuskauden vaihtuessa.</p>
`,
};

// ============================================================
// Guide 4: Mitä vakuutus oikeasti korvaa?
// ============================================================

const mitaVakuutusKorvaa: Guide = {
  slug: 'mita-vakuutus-korvaa',
  title: 'Mitä vakuutus oikeasti korvaa? Korvausopas',
  description:
    'Selvitä, mitä vakuutukset todella korvaavat ja mitä ne eivät korvaa. Yleisimmät korvausrajaukset, omavastuut ja korvausten hakeminen selitettynä.',
  category: 'general',
  author: 'Vakuutusvertailu.fi toimitus',
  publishedAt: '2026-03-12',
  updatedAt: '2026-03-12',
  readTime: 14,
  targetKeyword: 'mitä vakuutus korvaa',
  relatedGuides: ['kotivakuutus-opas', 'vakuutuksen-irtisanominen-ja-vaihto', 'lemmikkivakuutus-opas'],
  relatedInsuranceTypes: ['auto', 'home', 'pet'],
  tableOfContents: [
    { id: 'perusperiaatteet', title: 'Vakuutuskorvausten perusperiaatteet', level: 2 },
    { id: 'autovakuutus', title: 'Autovakuutuksen korvaukset', level: 2 },
    { id: 'kotivakuutus', title: 'Kotivakuutuksen korvaukset', level: 2 },
    { id: 'ei-korvata', title: 'Mitä vakuutukset EIVÄT korvaa', level: 2 },
    { id: 'korvausten-hakeminen', title: 'Miten korvauksia haetaan?', level: 2 },
    { id: 'riitatilantteet', title: 'Mitä tehdä, jos korvaus evätään?', level: 2 },
  ],
  content: `
<p>Vakuutus on lupaus korvauksesta — mutta kaikki vahingot eivät kuulu korvauksen piiriin. Suomessa <strong>86 % vakuutuksenottajista pitää korvauksia oikeudenmukaisina</strong>, mutta pettymyksiä syntyy, kun korvausehtoja ei tunneta etukäteen. Tämä opas selittää, mitä vakuutukset todella korvaavat.</p>

<h2 id="perusperiaatteet">Vakuutuskorvausten perusperiaatteet</h2>

<p>Kaikkien vakuutuskorvausten taustalla ovat samat perusperiaatteet:</p>

<ol>
  <li><strong>Äkillisyys ja ennalta arvaamattomuus:</strong> Vakuutus korvaa äkillisiä ja ennalta arvaamattomia vahinkoja. Hitaasti kehittyviä vahinkoja (esim. kosteusvaurion eteneminen vuosien varrella) ei yleensä korvata.</li>
  <li><strong>Vakuutustapahtuman tulee vastata vakuutusehtoja:</strong> Vahinko korvataan vain, jos se kuuluu vakuutusehtojen kattamiin tapahtumiin.</li>
  <li><strong>Rikastumiskielto:</strong> Vakuutuskorvaus ei saa tuottaa voittoa. Korvaus on enintään vahingon suuruinen.</li>
  <li><strong>Omavastuu:</strong> Omavastuu vähennetään korvauksesta. Jos vahinko on omavastuuta pienempi, korvausta ei makseta.</li>
  <li><strong>Vahingon rajoittamisvelvollisuus:</strong> Vakuutuksenottajan tulee pyrkiä rajoittamaan vahinkoa — esimerkiksi vesivuodon sattuessa tulee sulkea vesihana ja soittaa putkimiehelle.</li>
</ol>

<h2 id="autovakuutus">Autovakuutuksen korvaukset</h2>

<h3>Liikennevakuutus korvaa:</h3>
<ul>
  <li>Muiden osapuolten henkilövahingot (hoitokulut, ansionmenetys, kipu ja särky)</li>
  <li>Muiden osapuolten omaisuusvahingot (auto, kiinteistö, muu omaisuus)</li>
  <li>Oman auton matkustajien henkilövahingot</li>
  <li>Oman kuljettajan henkilövahingot, jos ei ole itse aiheuttanut vahinkoa</li>
</ul>

<h3>Kaskovakuutus korvaa (turvatason mukaan):</h3>
<ul>
  <li><strong>Palovahinko:</strong> Auto syttyy palamaan mistä tahansa syystä</li>
  <li><strong>Varkaus:</strong> Auton tai sen osien varkaus, varkausyrityksen aiheuttamat vahingot</li>
  <li><strong>Lasivahinko:</strong> Tuulilasin halkeama tai rikkoutuminen (matalalla omavastuulla)</li>
  <li><strong>Eläinvahinko:</strong> Hirvi- ja muu eläinkolari</li>
  <li><strong>Kolarissa oman auton vahingot:</strong> Törmäys, tieltä suistuminen (täyskasko)</li>
  <li><strong>Ilkivalta:</strong> Auton tahallinen vahingoittaminen (täyskasko)</li>
</ul>

<h3>Esimerkkejä korvattavista tilanteista:</h3>
<ul>
  <li>Kivi lentää tuulilasiin moottoritiellä → <strong>lasivakuutus korvaa</strong> (omavastuu tyypillisesti 150 €)</li>
  <li>Hirvi hyppää tielle ja kolhaisee autoa → <strong>eläinvahinko korvataan</strong> (osakasko ja täyskasko)</li>
  <li>Parkkipaikalla joku naarmuttaa autoa ja lähtee paikalta → <strong>ilkivalta korvataan</strong> (täyskasko)</li>
  <li>Ajat liukkaalla ojaan → <strong>tieltä suistuminen korvataan</strong> (täyskasko)</li>
</ul>

<h2 id="kotivakuutus">Kotivakuutuksen korvaukset</h2>

<h3>Tyypillisiä korvattavia vahinkoja:</h3>
<ul>
  <li><strong>Putkivuoto:</strong> Putki rikkoutuu ja vesi vahingoittaa lattia- ja seinämateriaaleja → vakuutus korvaa</li>
  <li><strong>Astianpesukone vuotaa:</strong> Äkillinen vuoto vahingoittaa lattiaa → vakuutus korvaa</li>
  <li><strong>Murto kellarivarastoon:</strong> Varastetut tavarat → vakuutus korvaa (korvauskattoihin asti)</li>
  <li><strong>Tulipalo:</strong> Kynttilä sytyttää verhon → vakuutus korvaa (irtaimisto ja mahdollisesti asumisen keskeytys)</li>
  <li><strong>Lapsi rikkoo naapurin ikkunan:</strong> Vastuuvakuutus korvaa</li>
</ul>

<h3>Korvauskatot:</h3>
<p>Jokaisella turvalla on korvausyläraja. Tyypillisiä kattoja:</p>
<ul>
  <li>Irtaimisto kokonaisuudessaan: vakuutusmäärän mukaan (20 000–100 000 €)</li>
  <li>Yksittäinen esine: usein enintään 2 000–5 000 € (arvoesineet vaativat erillisen vakuutuksen)</li>
  <li>Vastuuvakuutus: 170 000–500 000 € yhtiöstä riippuen</li>
  <li>Oikeusturva: 5 000–15 000 €</li>
  <li>Polkupyörä: 1 000–5 000 € (yhtiöstä riippuen)</li>
</ul>

<h2 id="ei-korvata">Mitä vakuutukset EIVÄT korvaa</h2>

<p>Yleisimmät korvauksen ulkopuolelle jäävät tilanteet:</p>

<ol>
  <li><strong>Kuluminen ja ikääntyminen:</strong> Vanhan laitteen rikkoutuminen normaalin kulumisen seurauksena</li>
  <li><strong>Huolimattomuus ja laiminlyönti:</strong> Jos olet jättänyt ikkunan auki ja sadetta tulee sisään, tai jos et ole huoltanut putkistoa asianmukaisesti</li>
  <li><strong>Tahallinen vahinko:</strong> Oman omaisuuden tahallinen vahingoittaminen</li>
  <li><strong>Sota, terrorismi, ydinvahinko:</strong> Poikkeustilanteiden rajaukset</li>
  <li><strong>Olemassa olevat viat:</strong> Vahinko, joka on alkanut ennen vakuutuksen ottamista</li>
  <li><strong>Päihtymys:</strong> Rattijuopumuksen yhteydessä korvauksia voidaan alentaa tai evätä</li>
  <li><strong>Ammattimainen toiminta:</strong> Kotivakuutus ei kata yritystoiminnan tavaroita</li>
</ol>

<h2 id="korvausten-hakeminen">Miten korvauksia haetaan?</h2>

<ol>
  <li><strong>Ilmoita vahingosta heti:</strong> Tee vahinkoilmoitus mahdollisimman pian — mieluiten saman päivän aikana</li>
  <li><strong>Dokumentoi vahinko:</strong> Valokuvaa vahingot, kerää kuitit, kirjaa ylös mitä tapahtui</li>
  <li><strong>Rajoita vahinkoa:</strong> Tee tarvittavat hätätoimenpiteet (sammuta vesi, peitä vuotokohta)</li>
  <li><strong>Tee vahinkoilmoitus:</strong> Verkossa (useimmilla yhtiöillä), puhelimitse tai konttorissa</li>
  <li><strong>Toimita pyydetyt dokumentit:</strong> Vakuutusyhtiö voi pyytää lisäselvityksiä, kuitteja tai valokuvia</li>
  <li><strong>Odota korvauspäätöstä:</strong> Yhtiöllä on yleensä 30 päivää aikaa tehdä päätös</li>
</ol>

<h2 id="riitatilantteet">Mitä tehdä, jos korvaus evätään?</h2>

<p>Jos olet tyytymätön korvauspäätökseen:</p>

<ol>
  <li><strong>Pyydä kirjallinen perustelu:</strong> Yhtiön on kerrottava tarkasti, miksi korvaus evättiin tai korvausmäärä on odotetusta poikkeava</li>
  <li><strong>Ota yhteyttä yhtiön sisäiseen muutoksenhakulautakuntaan:</strong> Monissa yhtiöissä on mahdollisuus pyytää päätöksen uudelleenarviointia</li>
  <li><strong>Vakuutuslautakunta (FINE):</strong> Voit valittaa korvauspäätöksestä Vakuutuslautakuntaan, joka antaa suosituksen asiassa. Palvelu on maksuton.</li>
  <li><strong>Kuluttajariitalautakunta:</strong> Jos FINE:n suositus ei johda ratkaisuun</li>
  <li><strong>Tuomioistuin:</strong> Viimesijainen keino — oikeusturvavakuutus voi kattaa oikeudenkäyntikulut</li>
</ol>

<p><strong>FINE (Vakuutus- ja rahoitusneuvonta):</strong> Tarjoaa maksutonta ja puolueetonta neuvontaa vakuutusasioissa. Sivusto: <strong>fine.fi</strong></p>
`,
};

// ============================================================
// Guide 5: Vakuutussanasto A–Ö
// ============================================================

const vakuutussanasto: Guide = {
  slug: 'vakuutussanasto',
  title: 'Vakuutussanasto A–Ö',
  description:
    'Kattava vakuutussanasto suomeksi. Kaikki vakuutusalan termit selitettynä selkeästi. Liikennevakuutuksesta kaskovakuutukseen, omavastuusta bonusjärjestelmään.',
  category: 'general',
  author: 'Vakuutusvertailu.fi toimitus',
  publishedAt: '2026-03-11',
  updatedAt: '2026-03-11',
  readTime: 20,
  targetKeyword: 'vakuutussanasto',
  relatedGuides: ['nain-valitset-autovakuutuksen', 'kotivakuutus-opas', 'mita-vakuutus-korvaa', 'lemmikkivakuutus-opas'],
  relatedInsuranceTypes: ['auto', 'home', 'travel', 'pet', 'life', 'accident'],
  tableOfContents: [
    { id: 'a', title: 'A', level: 2 },
    { id: 'b', title: 'B', level: 2 },
    { id: 'e', title: 'E', level: 2 },
    { id: 'h', title: 'H', level: 2 },
    { id: 'i', title: 'I', level: 2 },
    { id: 'k', title: 'K', level: 2 },
    { id: 'l', title: 'L', level: 2 },
    { id: 'm', title: 'M', level: 2 },
    { id: 'o', title: 'O', level: 2 },
    { id: 'p', title: 'P', level: 2 },
    { id: 'r', title: 'R', level: 2 },
    { id: 's', title: 'S', level: 2 },
    { id: 't', title: 'T', level: 2 },
    { id: 'v', title: 'V', level: 2 },
    { id: 'y', title: 'Y', level: 2 },
  ],
  content: `
<p>Vakuutusmaailma on täynnä erikoistermejä, jotka voivat hämmentää. Tämä sanasto selittää tärkeimmät vakuutustermit selkeällä suomen kielellä.</p>

<h2 id="a">A</h2>

<p><strong>Alivakuuttaminen</strong><br/>
Tilanne, jossa vakuutusmäärä on pienempi kuin omaisuuden todellinen arvo. Alivakuutustilanteessa vakuutusyhtiö voi soveltaa suhdealennusta: jos vakuutusmäärä on 50 % todellisesta arvosta, korvataan vain 50 % vahingosta.</p>

<p><strong>Arvoesineet</strong><br/>
Kodin erityisen arvokkaat esineet, kuten korut, taideteokset ja antiikki. Useimmissa kotivakuutuksissa yksittäisen esineen korvausraja on 2 000–5 000 €. Arvokkaammille esineille tarvitaan erillinen arvoesineen vakuutus.</p>

<h2 id="b">B</h2>

<p><strong>Bonusjärjestelmä</strong><br/>
Autovakuutuksen alennusjärjestelmä, joka palkitsee vahingottomasta ajosta. Bonus nousee vuosittain, jos ei synny korvattavia vahinkoja. Korkein bonusluokka (S) voi tuoda jopa 70–80 % alennuksen perusmaksusta. Bonus on henkilökohtainen ja siirtyy yhtiöstä toiseen.</p>

<p><strong>Bonustodistus</strong><br/>
Vakuutusyhtiön antama todistus kuljettajan bonusluokasta. Tarvitaan vakuutusyhtiötä vaihdettaessa. Voimassa yleensä 12 kuukautta.</p>

<h2 id="e">E</h2>

<p><strong>Edunsaaja</strong><br/>
Henkilö, joka saa vakuutuskorvauksen vakuutetun kuollessa (erityisesti henkivakuutuksessa). Edunsaajan voi yleensä nimetä vapaasti.</p>

<p><strong>Eläinvahinko</strong><br/>
Eläimen aiheuttama liikennevahinko — tyypillisesti hirvikolari. Korvataan osakaskosta ja täyskaskosta. Eläinvahinko ei yleensä alenna kaskon bonusta.</p>

<h2 id="h">H</h2>

<p><strong>Henkivakuutus</strong><br/>
Vakuutus, joka maksaa korvauksen vakuutetun kuollessa. Korvaus maksetaan nimetyille edunsaajille. Turvaa perheen talouden pääasiallisen tulon menetyksen varalta.</p>

<p><strong>Hinauspalvelu</strong><br/>
Kaskovakuutukseen usein sisältyvä palvelu, jossa auto hinataan lähimpään korjaamoon rikkoutumis- tai onnettomuustilanteessa. Joissain vakuutuksissa hinauspalvelun kattama matka on rajattu.</p>

<h2 id="i">I</h2>

<p><strong>Ilkivalta</strong><br/>
Omaisuuden tahallinen vahingoittaminen. Korvataan täyskaskosta (autovakuutus) ja laajoista kotivakuutuksista.</p>

<p><strong>Irtaimistovakuutus</strong><br/>
Kotivakuutuksen osa, joka korvaa kodin irtaimen omaisuuden vahinkoja — huonekalut, vaatteet, elektroniikka, keittiövälineet jne.</p>

<h2 id="k">K</h2>

<p><strong>Karenssi</strong><br/>
Odotusaika vakuutuksen voimaantulon jälkeen, jonka aikana korvauksia ei makseta. Erityisesti lemmikki- ja henkivakuutuksissa karenssi voi olla 14–90 päivää sairauksille.</p>

<p><strong>Kaskovakuutus</strong><br/>
Vapaaehtoinen autovakuutus, joka korvaa oman auton vahinkoja. Kolme tasoa: osakasko (perus), täyskasko (kattava) ja laaja täyskasko (kaikki turvat).</p>

<p><strong>Keskittämisetu</strong><br/>
Vakuutusyhtiöiden tarjoama alennus, kun asiakkaalla on useita vakuutuksia samassa yhtiössä. Tyypillisesti 5–17 % vakuutusmaksuista. OP:n bonusjärjestelmä on markkinoiden kattavin.</p>

<p><strong>Korvausraja / korvuskatto</strong><br/>
Enimmäissumma, jonka vakuutusyhtiö korvaa yhdestä vahingosta tai vuodessa. Esimerkiksi lemmikkivakuutuksen vuotuinen korvausraja voi olla 3 000–6 000 €.</p>

<p><strong>Kotivakuutus</strong><br/>
Vakuutus, joka korvaa kodin irtaimiston ja siihen liittyviä vahinkoja. Sisältää tyypillisesti myös vastuu- ja oikeusturvavakuutuksen. Omakotitaloille saatavilla myös rakennuksen vakuutus.</p>

<h2 id="l">L</h2>

<p><strong>Lasivakuutus</strong><br/>
Kaskovakuutuksen osa, joka korvaa tuulilasin ja ikkunoiden rikkoutumiset. Usein matalampi omavastuu (100–150 €) kuin muissa kaskaturvissa.</p>

<p><strong>Liikennevakuutus</strong><br/>
Suomessa lakisääteinen vakuutus kaikille liikenteessä käytettäville moottoriajoneuvoille. Korvaa muille osapuolille aiheutuneet henkilö- ja omaisuusvahingot.</p>

<p><strong>Lunastusturva</strong><br/>
Kaskovakuutuksen lisäturva, joka korvaa auton lunastustilanteessa käypää arvoa korkeamman korvauksen — esimerkiksi uuden auton hankintahintaa vastaavan summan.</p>

<h2 id="m">M</h2>

<p><strong>Matkavakuutus</strong><br/>
Vakuutus, joka korvaa matkan aikana sattuneita vahinkoja: sairastuminen, tapaturma, matkatavaroiden katoaminen, matkan peruuntuminen. Jatkuva matkavakuutus on voimassa kaikilla matkoilla, kertamatkan vakuutus vain yhdellä matkalla.</p>

<h2 id="o">O</h2>

<p><strong>Oikeusturvavakuutus</strong><br/>
Vakuutus, joka kattaa oikeudenkäyntikuluja riitatilanteissa. Sisältyy tyypillisesti kotivakuutukseen. Korvausraja usein 5 000–15 000 €.</p>

<p><strong>Omavastuu</strong><br/>
Summa, jonka vakuutuksenottaja maksaa itse ennen kuin vakuutus korvaa loput. Esimerkiksi 200 euron omavastuulla 1 000 euron vahingosta korvataan 800 €. Korkeampi omavastuu = matalampi vakuutusmaksu.</p>

<p><strong>Osakasko</strong><br/>
Kaskovakuutuksen perustaso. Korvaa palo-, varkaus-, lasi- ja eläinvahingot sekä hinauspalvelun. Ei korvaa kolarivahinkoja tai ilkivaltaa.</p>

<h2 id="p">P</h2>

<p><strong>Paloturva</strong><br/>
Vakuutuksen osa, joka korvaa tulipalosta aiheutuneet vahingot. Sisältyy käytännössä kaikkiin koti- ja kaskovakuutuksiin.</p>

<p><strong>Putkivuototurva</strong><br/>
Kotivakuutuksen osa, joka korvaa putkivuodosta aiheutuneet vesivahingot. Yksi kotivakuutuksen tärkeimmistä turvista — vesivahinko on yleisin kotivahingon tyyppi Suomessa.</p>

<h2 id="r">R</h2>

<p><strong>Rakennusvakuutus</strong><br/>
Omakotitalon omistajan vakuutus, joka korvaa itse rakennuksen vahinkoja (palo, vesi, myrsky). Kerrostaloissa taloyhtiön vakuutus kattaa rakennuksen.</p>

<p><strong>Rikkoutumisturva</strong><br/>
Kotivakuutuksen lisäturva, joka korvaa kodin elektroniikan ja kodinkoneiden äkillisen rikkoutumisen. Ei sisälly aina perusturvaan.</p>

<h2 id="s">S</h2>

<p><strong>Suojeluohje</strong><br/>
Vakuutusehtoihin sisältyvä ohje, jota vakuutuksenottajan tulee noudattaa. Esimerkiksi: "Auto tulee lukita aina, kun se jätetään vartioimatta." Suojeluohjeen laiminlyönti voi johtaa korvauksen alentamiseen.</p>

<h2 id="t">T</h2>

<p><strong>Tapaturmavakuutus</strong><br/>
Vakuutus, joka korvaa tapaturman (äkillinen, odottamaton ulkoinen tapahtuma) aiheuttamia henkilövahinkoja: hoitokulut, pysyvä haitta, kuolema. Ei korvaa sairauksia.</p>

<p><strong>Täyskasko</strong><br/>
Kaskovakuutuksen laajempi taso. Sisältää osakaskon turvat sekä lisäksi kolarivahingot, ilkivaltavahingot ja tieltä suistumisen.</p>

<h2 id="v">V</h2>

<p><strong>Vakuutusehtojen rajaus</strong><br/>
Vakuutusehdoissa määritellyt tilanteet, joita vakuutus ei korvaa. Yleisin rajaus: "Vakuutus ei korvaa vahinkoa, joka aiheutuu kulumisesta, huollon laiminlyönnistä tai hitaasti kehittyvästä prosessista."</p>

<p><strong>Vakuutusmäärä</strong><br/>
Enimmäissumma, jonka vakuutus korvaa. Irtaimistovakuutuksen vakuutusmäärä tulee vastata irtaimiston todellista jälleenhankinta-arvoa.</p>

<p><strong>Vastuuvakuutus</strong><br/>
Vakuutus, joka korvaa vakuutuksenottajan toiselle henkilölle tai tämän omaisuudelle aiheuttamat vahingot. Sisältyy tyypillisesti kotivakuutukseen. Korvauskatot vaihtelevat 170 000–500 000 € yhtiöstä riippuen.</p>

<h2 id="y">Y</h2>

<p><strong>Ylivakuuttaminen</strong><br/>
Tilanne, jossa vakuutusmäärä on suurempi kuin omaisuuden todellinen arvo. Ylivakuuttaminen ei hyödytä, koska vakuutus korvaa enintään todellisen vahingon suuruuden (rikastumiskielto). Maksat turhaan liikaa vakuutusmaksuissa.</p>
`,
};

// ============================================================
// Guide 6: Lemmikkivakuutus-opas
// ============================================================

const lemmikkivakuutusOpas: Guide = {
  slug: 'lemmikkivakuutus-opas',
  title: 'Lemmikkivakuutus-opas — Kattava opas koiran ja kissan vakuuttamiseen',
  description:
    'Kaikki mitä sinun tulee tietää lemmikkivakuutuksesta: koiran ja kissan vakuutusten vertailu, hinnat, korvausrajat, karenssiajat ja vinkit parhaan vakuutuksen valintaan Suomessa vuonna 2026.',
  category: 'pet',
  author: 'Vakuutusvertailu.fi toimitus',
  publishedAt: '2026-03-18',
  updatedAt: '2026-03-18',
  readTime: 22,
  targetKeyword: 'lemmikkivakuutus opas',
  relatedGuides: ['nain-valitset-autovakuutuksen', 'mita-vakuutus-korvaa', 'vakuutuksen-irtisanominen-ja-vaihto'],
  relatedInsuranceTypes: ['pet'],
  tableOfContents: [
    { id: 'johdanto', title: 'Johdanto: miksi lemmikkivakuutus?', level: 2 },
    { id: 'mita-korvaa', title: 'Mitä lemmikkivakuutus korvaa?', level: 2 },
    { id: 'mita-ei-korvaa', title: 'Mitä lemmikkivakuutus EI korvaa?', level: 2 },
    { id: 'koira-vs-kissa', title: 'Koiran ja kissan vakuutuksen erot', level: 2 },
    { id: 'hinnat-2026', title: 'Lemmikkivakuutusten hinnat 2026', level: 2 },
    { id: 'vakuutustasot', title: 'Vakuutustasot: perus, laaja ja premium', level: 2 },
    { id: 'korvausrajat', title: 'Korvausrajat ja omavastuu', level: 2 },
    { id: 'karenssi', title: 'Karenssiajat', level: 2 },
    { id: 'rotukohtaiset', title: 'Rotukohtaiset erot', level: 2 },
    { id: 'yhtiovertailu', title: 'Vakuutusyhtiöiden vertailu', level: 2 },
    { id: 'milloin-ottaa', title: 'Milloin vakuutus kannattaa ottaa?', level: 2 },
    { id: 'vahinkoilmoitus', title: 'Näin haet korvausta lemmikkivakuutuksesta', level: 2 },
    { id: 'vinkit', title: 'Vinkit parhaan vakuutuksen valintaan', level: 2 },
    { id: 'usein-kysytyt', title: 'Usein kysytyt kysymykset', level: 2 },
  ],
  content: `
<p>Eläinlääkärikulut ovat Suomessa nousseet merkittävästi viime vuosina — yksittäinen leikkaus voi maksaa <strong>2 000–6 000 euroa</strong> ja kroonisen sairauden hoito satoja euroja kuukaudessa. Lemmikkivakuutus suojaa yllättäviltä kuluilta ja varmistaa, ettei hoitopäätöstä tarvitse tehdä taloudellisista syistä. Tämä opas kattaa kaiken tarvittavan lemmikkivakuutuksen valintaan.</p>

<h2 id="johdanto">Johdanto: miksi lemmikkivakuutus?</h2>

<p>Suomessa on arviolta 800 000 koiraa ja 600 000 kissaa. Eläinlääkintä on kehittynyt valtavasti — lemmikille on saatavilla magneettikuvauksia, syöpähoitoja, tekoniveliä ja sydänleikkauksia. Tämä on hienoa lemmikin terveyden kannalta, mutta se tarkoittaa myös korkeampia kustannuksia.</p>

<p>Tässä esimerkkejä tyypillisistä eläinlääkärikustannuksista:</p>

<table>
  <thead>
    <tr><th>Toimenpide</th><th>Arvioitu kustannus</th></tr>
  </thead>
  <tbody>
    <tr><td>Koiran ristisideleikkaus</td><td>2 500–5 000 €</td></tr>
    <tr><td>Kissan virtsatietukos (akuuttihoito)</td><td>800–2 500 €</td></tr>
    <tr><td>Koiran mahankääntö (akuuttileikkaus)</td><td>3 000–6 000 €</td></tr>
    <tr><td>Koiran tai kissan murtuman leikkaus</td><td>1 500–4 000 €</td></tr>
    <tr><td>Kissan munuaissairauden kuukausihoito</td><td>100–300 €/kk</td></tr>
    <tr><td>Koiran allergiatutkimukset</td><td>500–1 500 €</td></tr>
    <tr><td>Hammashoidot (koira)</td><td>400–1 200 €</td></tr>
    <tr><td>MRI-tutkimus</td><td>800–1 500 €</td></tr>
    <tr><td>Syöpähoito (koira)</td><td>2 000–8 000 €</td></tr>
  </tbody>
</table>

<p>Lemmikkivakuutus maksaa tyypillisesti <strong>15–65 €/kuukausi</strong> (180–780 €/vuosi). Yksi vakava sairaus voi ylittää usean vuoden vakuutusmaksut. Vakuutus on siis järkevä taloudellinen päätös — eikä vain taloudellinen, vaan myös emotionaalinen: vakuutettu lemmikki saa aina parhaan mahdollisen hoidon.</p>

<h2 id="mita-korvaa">Mitä lemmikkivakuutus korvaa?</h2>

<p>Lemmikkivakuutus korvaa tyypillisesti:</p>

<h3>Sairauden hoitokulut</h3>
<ul>
  <li>Eläinlääkärin vastaanottomaksut</li>
  <li>Tutkimukset: verikokeet, röntgen, ultraääni, MRI</li>
  <li>Leikkaukset ja anestesia</li>
  <li>Lääkkeet (reseptilääkkeet)</li>
  <li>Sairaalassaolopäivät</li>
  <li>Jälkitarkastukset ja kontrollikäynnit</li>
</ul>

<h3>Tapaturman hoitokulut</h3>
<ul>
  <li>Kaatuminen, putoaminen, tielle juokseminen</li>
  <li>Toisen eläimen purema</li>
  <li>Myrkytykset (esim. suklaa, ratkisin, kasvit)</li>
  <li>Vierasesineen nieleminen</li>
</ul>

<h3>Lisäturvat (laajemmissa vakuutuksissa)</h3>
<ul>
  <li><strong>Hammashoito:</strong> Hammaskivi, hammasleikkaukset</li>
  <li><strong>Fysioterapia:</strong> Leikkauksen jälkeinen kuntoutus</li>
  <li><strong>Henkivakuutus lemmikille:</strong> Korvaus lemmikin kuolemasta tai lopettamisesta sairauden vuoksi (yleensä hankintahinta tai sovittu summa)</li>
  <li><strong>Katoamisturva:</strong> Kustannuksia kadonneen lemmikin etsintään</li>
  <li><strong>Vastuuvakuutus:</strong> Korvaa vahinkoja, jotka lemmikki aiheuttaa muille (esim. koira puree vierasta henkilöä)</li>
</ul>

<h2 id="mita-ei-korvaa">Mitä lemmikkivakuutus EI korvaa?</h2>

<p>Ymmärtäminen siitä, mitä vakuutus <strong>ei</strong> korvaa, on yhtä tärkeää kuin tieto korvattavista asioista. Monet lemmikkien omistajat yllättyvät, kun tietty hoito ei kuulukaan vakuutuksen piiriin. Tutustu rajauksiin huolella ennen vakuutuksen valintaa:</p>

<ul>
  <li><strong>Ennaltaehkäisevät hoidot:</strong> Rokotukset, madotukset, punkkitorjunta, vuosittaiset tarkastukset</li>
  <li><strong>Sterilisaatio/kastraatio:</strong> Rutiinileikkaus, ei sairaus</li>
  <li><strong>Ruokavaliot ja ravintolisät:</strong> Vaikka eläinlääkäri suosittelisi</li>
  <li><strong>Raskaus ja synnytys:</strong> Yleensä ei korvata, ellei kyseessä ole komplikaatio</li>
  <li><strong>Aiemmin diagnosoidut sairaudet:</strong> Sairaudet, jotka ovat ilmenneet ennen vakuutuksen alkamista — siksi vakuutus kannattaa ottaa nuorena</li>
  <li><strong>Karenssiajan sairaudet:</strong> Sairaudet, jotka ilmenevät vakuutuksen alun karenssiaikana</li>
  <li><strong>Kosmeettinen hoito:</strong> Esim. kynsien leikkaus, turkin trimmaus</li>
  <li><strong>Käyttäytymishoidot:</strong> Käyttäytymisterapia, koulutus (joillakin yhtiöillä korvattavissa lisäturvalla)</li>
</ul>

<h2 id="koira-vs-kissa">Koiran ja kissan vakuutuksen erot</h2>

<p>Koiran ja kissan vakuutusten välillä on merkittäviä eroja:</p>

<table>
  <thead>
    <tr><th>Tekijä</th><th>Koiravakuutus</th><th>Kissavakuutus</th></tr>
  </thead>
  <tbody>
    <tr><td>Keskimääräinen hinta</td><td>25–65 €/kk</td><td>15–40 €/kk</td></tr>
    <tr><td>Yleisimmät sairaudet</td><td>Nivelongelmat, allergiat, syöpä</td><td>Munuaissairaudet, virtsatietulehdukset, diabetes</td></tr>
    <tr><td>Rotukohtaiset erot</td><td>Suuret (bulldogit, labradorit kalliimpia)</td><td>Pienet (sisäkissa vs. ulkokissa merkittävin ero)</td></tr>
    <tr><td>Tapaturmariski</td><td>Korkeampi (ulkoilu, muut koirat)</td><td>Matalampi sisäkissoilla, korkeampi ulkokissoilla</td></tr>
    <tr><td>Elinikäodotus</td><td>10–14 vuotta rodusta riippuen</td><td>12–18 vuotta</td></tr>
    <tr><td>Vastuuvakuutus</td><td>Erittäin suositeltava</td><td>Vähemmän tarpeellinen</td></tr>
  </tbody>
</table>

<p><strong>Koiran vakuuttaminen on kalliimpaa</strong>, koska koirien eläinlääkärikulut ovat keskimäärin suurempia (koira on isompi, leikkaukset monimutkaisempia ja rotukohtaiset sairaudet yleisempiä). Lisäksi koiran vastuuvakuutus on käytännössä välttämätön — koira voi purra tai aiheuttaa vahinkoa toiselle.</p>

<h2 id="hinnat-2026">Lemmikkivakuutusten hinnat 2026</h2>

<p>Lemmikkivakuutusten hinnat vaihtelevat merkittävästi eläimen tyypin, rodun, iän ja vakuutustason mukaan:</p>

<h3>Koiravakuutus — esimerkkihintoja</h3>
<table>
  <thead>
    <tr><th>Rotu/tyyppi</th><th>Perusturva (€/kk)</th><th>Laaja turva (€/kk)</th><th>Premium (€/kk)</th></tr>
  </thead>
  <tbody>
    <tr><td>Sekarotuinen, 10 kg</td><td>18–25</td><td>30–40</td><td>40–55</td></tr>
    <tr><td>Labradorinnoutaja</td><td>25–35</td><td>38–50</td><td>50–65</td></tr>
    <tr><td>Saksanpaimenkoira</td><td>28–38</td><td>40–55</td><td>55–70</td></tr>
    <tr><td>Ranskanbulldoggi</td><td>35–50</td><td>50–70</td><td>70–90</td></tr>
    <tr><td>Chihuahua</td><td>15–22</td><td>25–35</td><td>35–45</td></tr>
    <tr><td>Kultainennoutaja</td><td>25–35</td><td>35–50</td><td>50–65</td></tr>
  </tbody>
</table>

<h3>Kissavakuutus — esimerkkihintoja</h3>
<table>
  <thead>
    <tr><th>Tyyppi</th><th>Perusturva (€/kk)</th><th>Laaja turva (€/kk)</th><th>Premium (€/kk)</th></tr>
  </thead>
  <tbody>
    <tr><td>Kotikissa (sisäkissa)</td><td>12–18</td><td>20–30</td><td>28–40</td></tr>
    <tr><td>Kotikissa (ulkokissa)</td><td>15–22</td><td>25–35</td><td>32–45</td></tr>
    <tr><td>Maine Coon</td><td>18–28</td><td>30–40</td><td>38–50</td></tr>
    <tr><td>Ragdoll</td><td>16–25</td><td>28–38</td><td>35–48</td></tr>
    <tr><td>Brittiläinen lyhytkarva</td><td>15–22</td><td>25–35</td><td>32–45</td></tr>
  </tbody>
</table>

<p><em>Hinnat ovat suuntaa antavia ja riippuvat eläimen iästä, asuinpaikasta ja vakuutusyhtiöstä. Lähde: vakuutusyhtiöiden verkkosivut, maaliskuu 2026.</em></p>

<h2 id="vakuutustasot">Vakuutustasot: perus, laaja ja premium</h2>

<h3>Perusturva</h3>
<p>Perusturva korvaa sairauksien ja tapaturmien hoitokulut perustarpeisiin:</p>
<ul>
  <li>Vuotuinen korvausraja: 2 000–4 000 €</li>
  <li>Omavastuu: 100–200 €/vahinko</li>
  <li>Ei kata: hammashoitoa, fysioterapiaa, katoamista</li>
  <li>Hinta: 12–35 €/kk</li>
</ul>

<h3>Laaja turva</h3>
<p>Laaja turva tarjoaa kattavamman suojan:</p>
<ul>
  <li>Vuotuinen korvausraja: 4 000–7 000 €</li>
  <li>Omavastuu: 100–150 €/vahinko</li>
  <li>Lisäksi: hammashoito, fysioterapia</li>
  <li>Hinta: 25–55 €/kk</li>
</ul>

<h3>Premium</h3>
<p>Kattavin turva, joka vastaa parasta mahdollista hoitoa:</p>
<ul>
  <li>Vuotuinen korvausraja: 7 000–10 000 € tai ei rajaa</li>
  <li>Omavastuu: 0–100 €/vahinko</li>
  <li>Kaikki lisäturvat mukana: hammashoito, fysioterapia, katoaminen, henkivakuutus</li>
  <li>Hinta: 35–90 €/kk</li>
</ul>

<h2 id="korvausrajat">Korvausrajat ja omavastuu</h2>

<p>Korvausraja ja omavastuu ovat lemmikkivakuutuksen tärkeimmät ehdot hinnan ohella:</p>

<h3>Korvausraja</h3>
<p>Korvausraja tarkoittaa enimmäissummaa, jonka vakuutus korvaa vuodessa tai yksittäisestä vahingosta. Tyypilliset rajat:</p>
<ul>
  <li><strong>Perusvakuutus:</strong> 2 000–4 000 €/vuosi</li>
  <li><strong>Laaja vakuutus:</strong> 4 000–7 000 €/vuosi</li>
  <li><strong>Premium:</strong> 7 000–10 000 €/vuosi tai rajoittamaton</li>
</ul>
<p><strong>Suositus:</strong> Valitse vähintään 5 000 euron vuotuinen korvausraja. Tämä kattaa useimmat yksittäiset leikkaukset. Jos lemmikillä on krooninen sairaus, korkeampi raja on tarpeen.</p>

<h3>Omavastuu</h3>
<p>Omavastuu on summa, jonka maksat itse ennen kuin vakuutus korvaa loput. Lemmikkivakuutuksissa omavastuu on tyypillisesti:</p>
<ul>
  <li><strong>50–200 €</strong> per vahinko tai hoitojakso</li>
  <li>Joissakin vakuutuksissa on myös <strong>prosentuaalinen omavastuu</strong> (esim. 20 % korvaussummasta)</li>
</ul>
<p>Korkeampi omavastuu laskee kuukausimaksua, mutta muista, että pienetkin sairaudet jäävät silloin kokonaan omaksi maksettavaksi.</p>

<h2 id="karenssi">Karenssiajat</h2>

<p>Karenssi on odotusaika vakuutuksen voimaantulon jälkeen, jonka aikana sairauksia ei korvata. Karenssi estää vakuutuksen ottamisen vasta, kun sairaus on jo havaittu.</p>

<table>
  <thead>
    <tr><th>Yhtiö</th><th>Sairauden karenssi</th><th>Tapaturman karenssi</th></tr>
  </thead>
  <tbody>
    <tr><td>OP/Pohjola</td><td>30 päivää</td><td>0 päivää</td></tr>
    <tr><td>If</td><td>30 päivää</td><td>0 päivää</td></tr>
    <tr><td>LähiTapiola</td><td>14 päivää</td><td>0 päivää</td></tr>
    <tr><td>POP Vakuutus</td><td>14 päivää</td><td>0 päivää</td></tr>
    <tr><td>Fennia</td><td>30 päivää</td><td>0 päivää</td></tr>
  </tbody>
</table>

<p><strong>Huomio:</strong> Tapaturmat ovat yleensä voimassa heti vakuutuksen alusta alkaen. Vain sairauksissa on karenssi.</p>

<h2 id="rotukohtaiset">Rotukohtaiset erot</h2>

<p>Eri rotujen vakuuttamisessa on merkittäviä eroja, koska tietyt rodut ovat alttiimpia tietyille sairauksille:</p>

<h3>Kalleimmat koirarodut vakuuttaa</h3>
<ul>
  <li><strong>Ranskanbulldoggi / Englanninbulldoggi:</strong> Hengitystieongelmat (BOAS), selkäongelmat, iho-ongelmat. Vakuutusmaksu 35–90 €/kk. Joillakin yhtiöillä rajoituksia hengitystieleikkauksiin.</li>
  <li><strong>Saksanpaimenkoira / Bernhardinkoira:</strong> Lonkkadysplasia, nivelongelmat. Korkeampi maksu johtuen suuresta koosta.</li>
  <li><strong>Cavalier King Charles -spanieli:</strong> Sydänsairaudet (MVD), syringomyelia. Joillakin yhtiöillä rotukohtaisia rajoituksia.</li>
</ul>

<h3>Edullisimmat koirarodut vakuuttaa</h3>
<ul>
  <li><strong>Sekarotuiset koirat:</strong> Yleensä terveempiä kuin puhdasrotuiset</li>
  <li><strong>Pienet terveät rodut:</strong> Bichon frisé, shih tzu (ilman selkä- tai hengitysongelmia)</li>
</ul>

<h3>Kissojen vakuuttaminen</h3>
<p>Kissaroduilla hintaerot ovat pienempiä kuin koirilla. Merkittävin ero on sisäkissa vs. ulkokissa — ulkokissan vakuutusmaksu on tyypillisesti 15–30 % korkeampi tapaturmariskin vuoksi.</p>

<h2 id="yhtiovertailu">Vakuutusyhtiöiden vertailu</h2>

<p>Vertailimme Suomen vakuutusyhtiöiden lemmikkivakuutuksia:</p>

<table>
  <thead>
    <tr><th>Yhtiö</th><th>Hinta (koira, laaja)</th><th>Korvausraja (€/v)</th><th>Karenssi</th><th>Erityistä</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/vakuutusyhtiot/pop-vakuutus">POP Vakuutus</a></td><td>25–45 €/kk</td><td>5 000–8 000</td><td>14 pv</td><td>Edullisin, verkkopalvelu</td></tr>
    <tr><td><a href="/vakuutusyhtiot/if">If</a></td><td>30–55 €/kk</td><td>5 000–10 000</td><td>30 pv</td><td>Hyvä korvauspalvelu</td></tr>
    <tr><td><a href="/vakuutusyhtiot/pohjola">OP/Pohjola</a></td><td>32–58 €/kk</td><td>4 000–8 000</td><td>30 pv</td><td>OP-bonus pienentää maksua</td></tr>
    <tr><td><a href="/vakuutusyhtiot/lahitapiola">LähiTapiola</a></td><td>30–55 €/kk</td><td>5 000–7 500</td><td>14 pv</td><td>Laaja palveluverkosto</td></tr>
    <tr><td><a href="/vakuutusyhtiot/fennia">Fennia</a></td><td>28–50 €/kk</td><td>4 000–7 000</td><td>30 pv</td><td>Hyvä hinta-laatusuhde</td></tr>
  </tbody>
</table>

<p>Tarkempi vertailu löytyy <a href="/lemmikkivakuutus">lemmikkivakuutuksen vertailusivultamme</a>.</p>

<h2 id="milloin-ottaa">Milloin vakuutus kannattaa ottaa?</h2>

<p>Lyhyt vastaus: <strong>mahdollisimman aikaisin</strong>. Tässä syyt:</p>

<ol>
  <li><strong>Nuorena ei ole aiempia sairauksia:</strong> Aiemmin diagnosoidut sairaudet jätetään korvauksen ulkopuolelle. Mitä nuorempana vakuutat, sitä laajempi turva.</li>
  <li><strong>Hinta on matalampi:</strong> Pennun vakuutusmaksu on yleensä edullisempi kuin aikuisen eläimen.</li>
  <li><strong>Ikäraja vakuuttamiselle:</strong> Useimmat yhtiöt eivät vakuuta yli 7–8-vuotiasta koiraa tai yli 10-vuotiasta kissaa (uutena asiakkaana). Jos vakuutus on otettu nuorena, se jatkuu elinikäisesti.</li>
  <li><strong>Pennun tapaturmariski on korkea:</strong> Pennut ovat uteliaita — vierasesineiden nieleminen, putoamiset ja myrkytykset ovat yleisiä.</li>
</ol>

<p><strong>Suositus:</strong> Ota vakuutus heti, kun haet pennun tai kissanpennun. Ihanteellinen aika on ensimmäisen eläinlääkärikäynnin yhteydessä.</p>

<h2 id="vahinkoilmoitus">Näin haet korvausta lemmikkivakuutuksesta</h2>

<p>Korvauksen hakeminen lemmikkivakuutuksesta on tyypillisesti suoraviivaista:</p>

<ol>
  <li><strong>Käy eläinlääkärissä</strong> — hoida lemmikkisi ensin, vakuutusasiat hoidetaan jälkikäteen</li>
  <li><strong>Säilytä kuitit ja lausunnot:</strong> Eläinlääkärin kuitit, diagnoosi ja hoitosuunnitelma</li>
  <li><strong>Tee vahinkoilmoitus:</strong> Vakuutusyhtiösi verkkopalvelussa tai sovelluksessa. Liitä kuitit ja eläinlääkärin lausunto.</li>
  <li><strong>Odota päätöstä:</strong> Käsittely kestää tyypillisesti 3–10 arkipäivää</li>
  <li><strong>Korvaus tilillesi:</strong> Hyväksytty korvaus maksetaan pankkitilillesi, vähennettynä omavastuulla</li>
</ol>

<p><strong>Vinkki:</strong> Jotkin eläinlääkäriasemat voivat laskuttaa vakuutusyhtiötä suoraan. Kysy tätä mahdollisuutta eläinlääkäriltäsi — se helpottaa prosessia merkittävästi. Lisätietoja löydät artikkelistamme <a href="/blogi/vakuutuskorvauksen-hakeminen">Vakuutuskorvauksen hakeminen vaihe vaiheelta</a>.</p>

<h2 id="vinkit">Vinkit parhaan vakuutuksen valintaan</h2>

<ol>
  <li><strong>Vertaile kokonaisuutta, älä pelkkää hintaa:</strong> Halvin vakuutus voi olla kallis, jos korvausraja on matala tai omavastuu korkea</li>
  <li><strong>Tarkista korvausraja:</strong> Varmista, että vuotuinen korvausraja on vähintään 5 000 € — yksi leikkaus voi ylittää matalamman rajan</li>
  <li><strong>Huomioi karenssi:</strong> Jos sinulla on jo pentu, lyhyempi karenssi (14 pv) on parempi kuin pidempi (30 pv)</li>
  <li><strong>Rotukohtaiset rajoitukset:</strong> Jos sinulla on brachykefaalinen rotu (bulldoggi, mopsi), tarkista, kattaako vakuutus hengitystieleikkaukset</li>
  <li><strong>Lue ehdot tarkkaan:</strong> Erityisesti "Mitä vakuutus ei korvaa" -osio on luettava huolella</li>
  <li><strong>Harkitse laajaa turvaa:</strong> Perusturvasta usein puuttuu hammashoito ja fysioterapia — nämä voivat kuitenkin olla välttämättömiä</li>
  <li><strong>Älä unohda vastuuvakuutusta:</strong> Koiran vastuuvakuutus korvaa, jos koirasi puree tai aiheuttaa vahinkoa — ilman sitä olet henkilökohtaisesti korvausvelvollinen</li>
  <li><strong>Kysy eläinlääkäriltä:</strong> Monet eläinlääkärit osaavat suositella rotusi tyypillisiin sairauksiin sopivaa vakuutusta</li>
</ol>

<h2 id="usein-kysytyt">Usein kysytyt kysymykset</h2>

<h3>Voiko vanhalle lemmikille saada vakuutuksen?</h3>
<p>Rajallisesti. Useimmat yhtiöt eivät ota uusia asiakkaita yli 7–8-vuotiaille koirille tai yli 10-vuotiaille kissoille. Jos lemmikki on jo vakuutettu, vakuutus jatkuu yleensä elinikäisesti (maksu voi nousta iän myötä).</p>

<h3>Nousevatko vakuutusmaksut lemmikin vanhetessa?</h3>
<p>Kyllä. Useimmilla yhtiöillä vakuutusmaksu nousee lemmikin ikääntyessä, koska sairauksien riski kasvaa. Tyypillinen korotus on 5–15 % vuodessa 5-vuotiaasta eteenpäin.</p>

<h3>Voiko lemmikkivakuutuksen irtisanoa?</h3>
<p>Kyllä. Lemmikkivakuutuksen voi irtisanoa milloin tahansa, mutta huomioi: jos saat uuden vakuutuksen toisesta yhtiöstä, aiemmin diagnosoidut sairaudet voivat jäädä korvausten ulkopuolelle. Lue lisää oppaastamme <a href="/oppaat/vakuutuksen-irtisanominen-ja-vaihto">Vakuutuksen irtisanominen ja vaihto</a>.</p>

<h3>Korvataanko lemmikin lopettaminen?</h3>
<p>Lopettaminen sairauteen liittyvästä syystä korvataan yleensä osana hoitokuluja. Jos vakuutuksessa on henkivakuutusturva lemmikille, maksetaan lisäksi erillinen kertakorvaus.</p>

<h3>Kannattaako vakuuttaa useampi lemmikki?</h3>
<p>Jos sinulla on useampi lemmikki, jotkin yhtiöt tarjoavat monilemmikkialennuksen (5–10 %). Kysy tästä tarjousta pyytäessäsi. <a href="/blogi/keskittamisetu-vai-kilpailutus">Keskittämisedut</a> pätevät myös lemmikkivakuutuksiin.</p>

<h3>Tarvitseeko kissan omistaja vastuuvakuutusta?</h3>
<p>Kissan omistajan vastuuriski on pienempi kuin koiran omistajan, mutta ei olematon. Kissa voi aiheuttaa vahinkoa naapurin omaisuudelle (esim. naarmuttaa autoa) tai harvinaisissa tapauksissa raaputtaa vierasta henkilöä. Kotivakuutuksen vastuuvakuutus kattaa yleensä nämä tilanteet, mutta tarkista oma vakuutuksesi.</p>

<h3>Miten lemmikkivakuutus eroaa kotivakuutuksen vastuuturvasta?</h3>
<p>Kotivakuutuksen vastuuvakuutus korvaa vahinkoja, jotka lemmikki aiheuttaa <em>muille</em> — esimerkiksi koira puree vierasta henkilöä tai vahingoittaa toisen omaisuutta. Lemmikkivakuutus korvaa <em>lemmikin oman</em> hoidon. Nämä ovat siis täysin eri vakuutuksia, ja lemmikille tarvitaan molemmat: kotivakuutus vastuuturvineen ja erillinen lemmikkivakuutus eläinlääkärikuluihin.</p>

<p>Vertaile lemmikkivakuutuksia <a href="/lemmikkivakuutus">vertailusivullamme</a> ja löydä lemmikillesi paras turva. Jos sinulla on kysyttävää vakuutuksen valinnasta, tutustu myös <a href="/oppaat/mita-vakuutus-korvaa">korvausoppaaseemme</a> tai lue artikkelimme <a href="/blogi/lemmikkivakuutus-2026">lemmikkivakuutuksista vuonna 2026</a>.</p>
`,
};

// ============================================================
// All Guides Array
// ============================================================

export const guides: Guide[] = [
  autovakuutusOpas,
  kotivakuutusOpas,
  vakuutuksenIrtisanominen,
  mitaVakuutusKorvaa,
  vakuutussanasto,
  lemmikkivakuutusOpas,
];

// ============================================================
// Helper Functions
// ============================================================

/**
 * Get a guide by its URL slug.
 */
export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

/**
 * Get all guides in a specific category.
 */
export function getGuidesByCategory(category: string): Guide[] {
  return guides.filter((g) => g.category === category);
}

/**
 * Get related guides based on the relatedGuides field.
 */
export function getRelatedGuides(slug: string): Guide[] {
  const current = getGuideBySlug(slug);
  if (!current || !current.relatedGuides) return [];

  return current.relatedGuides
    .map((relSlug) => getGuideBySlug(relSlug))
    .filter((g): g is Guide => g !== undefined);
}
