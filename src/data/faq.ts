// ============================================================
// Vakuutusvertailu — FAQ Data
// General and insurance-type-specific FAQ items
// ============================================================

import type { FAQItem, InsuranceType } from '@/types';

// ============================================================
// General FAQ — Common Insurance Questions
// ============================================================

export const generalFAQ: FAQItem[] = [
  {
    question: 'Mitä vakuutuksia jokainen suomalainen tarvitsee?',
    answer:
      'Vähimmäistarpeet ovat: liikennevakuutus (lakisääteinen, jos omistat auton), kotivakuutus (korvaa irtaimiston ja sisältää vastuuvakuutuksen) ja matkavakuutus (jos matkustat ulkomaille). Näiden lisäksi henkivakuutus on suositeltava perheellisille ja asuntolainan ottajille, ja lemmikkivakuutus lemmikkieläimen omistajille.',
  },
  {
    question: 'Miten vakuutusten vertailu toimii Vakuutusvertailu.fi:ssä?',
    answer:
      'Vertailemme kaikkien kymmenen suomalaisen vakuutusyhtiön tuotteita avoimesti ja puolueettomasti. Hinta-arviot perustuvat julkisiin hintatietoihin ja vakuutuslaskureihin. Vertailussa huomioimme hinnan, kattavuuden, asiakastyytyväisyyden ja erityisehdot. Osa linkeistä on mainoslinkkejä, joista saamme pienen korvauksen — tämä ei vaikuta vertailujärjestykseen.',
  },
  {
    question: 'Maksaako vakuutusten vertailu jotain?',
    answer:
      'Ei. Vakuutusten vertailu on aina 100 % ilmaista. Saamme tulomme vakuutusyhtiöiden maksamista affiliate-palkkioista, jotka eivät vaikuta sinulle näytettävään hintaan tai vertailujärjestykseen.',
  },
  {
    question: 'Voiko vakuutusyhtiötä vaihtaa milloin tahansa?',
    answer:
      'Liikennevakuutuksen voi vaihtaa milloin tahansa — uusi vakuutus korvaa vanhan automaattisesti. Muissa vakuutuksissa (kasko, koti, matka) irtisanominen tulee tehdä ennen vakuutuskauden päättymistä, yleensä kuukauden irtisanomisajalla. Jos yhtiö korottaa hintoja, sinulla on erityinen irtisanomisoikeus heti korotuksen yhteydessä.',
  },
  {
    question: 'Siirtyykö autovakuutuksen bonus uuteen yhtiöön?',
    answer:
      'Kyllä. Bonusluokka on henkilökohtainen ja siirtyy automaattisesti yhtiöstä toiseen. Uusi yhtiö voi tarkistaa bonustietosi suoraan vakuutusyhtiöiden yhteisestä tietojärjestelmästä. Voit myös pyytää bonustodistuksen vanhalta yhtiöltäsi. Bonustodistus on voimassa 12 kuukautta.',
  },
  {
    question: 'Mitä tarkoittaa omavastuu?',
    answer:
      'Omavastuu on summa, jonka maksat itse vahinkohetkellä ennen kuin vakuutus korvaa loput. Esimerkiksi: jos omavastuu on 200 € ja vahinko 1 000 €, vakuutus korvaa 800 €. Korkeampi omavastuu laskee vakuutusmaksua. Yleisimmät omavastuutasot ovat 150 €, 200 €, 300 € ja 500 €.',
  },
  {
    question: 'Mitä keskittämisetu tarkoittaa?',
    answer:
      'Keskittämisetu (keskittämisalennus) on vakuutusyhtiöiden tarjoama alennus asiakkaille, joilla on useita vakuutuksia samassa yhtiössä. Esimerkiksi OP-bonus voi olla jopa 17 % vakuutusmaksuista, If:n Kotiturva-alennus 10–15 % ja LähiTapiolan Turva & Etu 5–15 %. Keskittämisetu ei aina tarkoita kokonaisedullisinta ratkaisua — kilpailuttaminen voi olla halvempaa.',
  },
  {
    question: 'Onko matkavakuutus tarpeellinen, jos minulla on eurooppalainen sairaanhoitokortti?',
    answer:
      'Kyllä. Eurooppalainen sairaanhoitokortti (EHIC) antaa oikeuden vain julkiseen sairaanhoitoon kohdemaassa — usein pitkillä jonotusajoilla. Matkavakuutus kattaa yksityisen sairaanhoidon, kotiinkuljetuksen, matkan peruuntumisen, matkatavarat ja monia muita tilanteita, joita EHIC ei kata.',
  },
  {
    question: 'Miten vahinkoilmoitus tehdään?',
    answer:
      'Vahinkoilmoituksen voi tehdä verkossa (useimmilla yhtiöillä helppokäyttöinen lomake), mobiilisovelluksessa tai puhelimitse. Ilmoita vahinko mahdollisimman pian. Dokumentoi vahinko valokuvaamalla ja säilytä mahdolliset kuitit. Pyri myös rajoittamaan vahinkoa (esim. sulkemalla vesivuoto).',
  },
  {
    question: 'Mitä tehdä, jos vakuutusyhtiö ei hyväksy korvaushakemusta?',
    answer:
      'Jos olet tyytymätön korvauspäätökseen, pyydä ensin kirjallinen perustelu. Sen jälkeen voit valittaa yhtiön sisäiseen muutoksenhakuun. Jos se ei auta, ota yhteyttä FINE:en (Vakuutus- ja rahoitusneuvonta), joka tarjoaa maksutonta ja puolueetonta apua. Viime kädessä asia voidaan viedä Kuluttajariitalautakuntaan tai tuomioistuimeen.',
  },
  {
    question: 'Miten vakuutusten kilpailuttaminen kannattaa aloittaa?',
    answer:
      'Selvitä ensin nykyiset vakuutuksesi: mitä vakuutuksia sinulla on, mitä ne maksavat ja mikä on kattavuustaso. Pyydä sitten tarjoukset 3–5 yhtiöstä — helpoiten yhtiöiden verkkolaskureilla. Vertaile kokonaisuutta: hinta + kattavuus + omavastuu + korvauspalvelun laatu. Muista huomioida keskittämisedut nykyisessä yhtiössäsi.',
  },
  {
    question: 'Tarvitseeko lemmikille vakuutus?',
    answer:
      'Lemmikkivakuutus ei ole pakollinen, mutta se on erittäin suositeltava. Eläinlääkärikulut voivat yllättää: koiran ristisideleikkaus voi maksaa 2 000–4 000 €, ja kissan munuaissairaus satoja euroja kuukaudessa. Lemmikkivakuutus maksaa tyypillisesti 15–65 €/kk — yksi vakava sairaus voi maksaa vuosien vakuutusmaksut.',
  },
  {
    question: 'Mitä eroa on kaskovakuutuksella ja liikennevakuutuksella?',
    answer:
      'Liikennevakuutus on lakisääteinen ja korvaa muille osapuolille aiheutetut vahingot. Kaskovakuutus on vapaaehtoinen ja korvaa oman autosi vahinkoja (palo, varkaus, kolari, ilkivalta riippuen kaskotasosta). Käytännössä liikennevakuutus suojaa muita, kasko suojaa omaa autoasi.',
  },
  {
    question: 'Kannattaako vakuutuksen omavastuu nostaa korkeammaksi?',
    answer:
      'Usein kyllä. Omavastuun nosto esimerkiksi 200 eurosta 500 euroon voi laskea vakuutusmaksua 10–20 %. Jos sinulla on säästöjä omavastuun kattamiseen ja vahinkoja sattuu harvoin, korkeampi omavastuu on taloudellisesti järkevä valinta. Laita omavastuun suuruinen summa sivuun säästöön.',
  },
  {
    question: 'Miten voin tarkistaa, onko vakuutusyhtiö luotettava?',
    answer:
      'Kaikki Suomessa toimivat vakuutusyhtiöt ovat Finanssivalvonnan (FIN-FSA) valvonnassa, mikä takaa perusturvallisuuden. Lisäksi voit tarkistaa asiakastyytyväisyysarviot, korvausten käsittelyn nopeuden ja yhtiön taloudellisen vakauden. Vertailusivustollamme näytämme jokaisen yhtiön tyytyväisyysarvion.',
  },
  {
    question: 'Voiko vakuutuksen ottaa verkossa?',
    answer:
      'Kyllä — useimmat suomalaiset vakuutusyhtiöt tarjoavat vakuutusten oston verkossa. POP Vakuutus on kokonaan digitaalinen (ei konttoreita). OP, If, LähiTapiola ja Fennia tarjoavat kattavat verkko-ostomahdollisuudet. Verkossa saat yleensä myös hinta-arvion vakuutuslaskurilla ennen ostopäätöstä.',
  },
  {
    question: 'Mikä on paras vakuutusyhtiö Suomessa?',
    answer:
      'Paras vakuutusyhtiö riippuu yksilöllisistä tarpeistasi. POP Vakuutus on usein edullisin ja asiakastyytyväisin (9,1/10). If tarjoaa parhaat digitaaliset palvelut ja erinomaisen korvauspalvelun. OP/Pohjola on kattavin keskittäjille OP-bonuksen ansiosta. Turva on parhaimmistoa asiakastyytyväisyydessä. Suosittelemme vertailemaan omien tarpeidesi pohjalta.',
  },
];

// ============================================================
// Insurance-Type-Specific FAQs
// ============================================================

export const autoInsuranceFAQ: FAQItem[] = [
  {
    question: 'Onko liikennevakuutus pakollinen?',
    answer:
      'Kyllä. Liikennevakuutus on Suomen lain mukaan pakollinen kaikille liikenteessä käytettäville moottoriajoneuvoille: autoille, moottoripyörille, mopoille, mönkijöille ja traktoreille. Ilman voimassa olevaa liikennevakuutusta ajaminen on rikos.',
  },
  {
    question: 'Tarvitseeko vanha auto kaskovakuutusta?',
    answer:
      'Nyrkkisäännön mukaan: jos auton arvo on alle 3 000–5 000 €, kaskovakuutuksen hinta voi olla suhteettoman korkea verrattuna auton arvoon. Silloin pelkkä liikennevakuutus voi riittää. Jos auto on 5 000–15 000 € arvoinen, osakasko on hyvä kompromissi.',
  },
  {
    question: 'Miten nuori kuljettaja saa halvemman autovakuutuksen?',
    answer:
      'Vertaile vähintään 3–5 yhtiötä (POP ja If ovat usein edullisimpia nuorille). Valitse pienitehoisempi auto. Nosta omavastuu 500 euroon. Kysy vanhempien bonuksen siirtomahdollisuutta. Aja vahingoitta — bonus nousee vuosittain. Ilmoita matala ajokilometrimäärä, jos ajat vähän.',
  },
  {
    question: 'Laskeeko bonus hirvikolarin jälkeen?',
    answer:
      'Ei. Eläinvahingot (hirvi, peura, muu eläin) eivät yleensä vaikuta kaskovakuutuksen bonukseen. Myöskään lasivahingot eivät laske bonusta. Sen sijaan liikennevakuutuksessa bonus voi laskea, jos olet aiheuttanut vahingon.',
  },
  {
    question: 'Mitä tarkoittaa bonusluokka S?',
    answer:
      'S-luokka on autovakuutuksen korkein bonusluokka, jonka saavuttaminen edellyttää noin 13–15 vuotta vahingotonta ajoa. S-luokassa saat 70–80 % alennuksen vakuutusmaksun perusmaksusta. S-luokka on merkittävä taloudellinen etu.',
  },
  {
    question: 'Voiko sähköautolle saada normaalia autovakuutusta?',
    answer:
      'Kyllä. Kaikki suomalaiset vakuutusyhtiöt vakuuttavat sähköautoja. Sähköauton vakuutusmaksu on usein korkeampi perinteistä autoa kalliimman korjaushinnan vuoksi, erityisesti akkuvaurioissa. Tarkista, kattaako kaskovakuutus myös akun vauriot.',
  },
];

export const homeInsuranceFAQ: FAQItem[] = [
  {
    question: 'Tarvitseeko vuokralainen kotivakuutusta?',
    answer:
      'Ehdottomasti kyllä. Vuokranantajan kiinteistövakuutus kattaa rakennuksen, mutta sinun irtaimistosi (tavarat) eivät kuulu siihen. Lisäksi kotivakuutuksen vastuuvakuutus korvaa, jos aiheutat vahinkoa vuokra-asunnolle — esimerkiksi vesivahinko voi tulla kalliiksi ilman vakuutusta.',
  },
  {
    question: 'Kattaako kotivakuutus polkupyörän varkauden?',
    answer:
      'Riippuu vakuutuksesta ja yhtiöstä. If ja LähiTapiola kattavat polkupyörävarkauden jo perusturvassa (1 500–2 000 € asti). OP, Fennia ja POP eivät kata perusturvassa — tarvitset laajemman paketin. Tarkista oma vakuutuksesi ja varmista, että pyörä on ollut lukittuna.',
  },
  {
    question: 'Miten arvioin irtaimistoni arvon?',
    answer:
      'Käy läpi jokainen huone ja arvioi tavaroiden jälleenhankinta-arvo (uuden hinta). Muista vaatekaappi (usein 3 000–10 000 €), elektroniikka, keittiövälineet, harrastusvälineet ja varastot. Tyypillinen kerrostaloasunnon irtaimiston arvo on 20 000–60 000 €. Alivakuuttaminen on yleinen virhe.',
  },
  {
    question: 'Korvataanko vesivahingot aina?',
    answer:
      'Äkilliset vesivahingot (putkivuoto, koneen vuoto) korvataan yleensä. Hitaasti kehittyneitä kosteusvaurioita ei korvata — esimerkiksi vuosia jatkunutta kosteuden tunkeutumista rakenteisiin. Vakuutuksenottajan tulee rajoittaa vahinkoa heti (sulkea vesi) ja tehdä vahinkoilmoitus pikaisesti.',
  },
  {
    question: 'Onko omakotitalon vakuutus paljon kalliimpi kuin kerrostaloasunnon?',
    answer:
      'Kyllä, merkittävästi. Omakotitalon vakuutus sisältää irtaimiston lisäksi rakennusvakuutuksen, jota kerrostaloasukas ei tarvitse. Tyypillinen hintaero: kerrostalo 100–250 €/vuosi vs. omakotitalo 300–850 €/vuosi. Rakennusvakuutus on välttämätön omakotitalon omistajalle.',
  },
];

export const travelInsuranceFAQ: FAQItem[] = [
  {
    question: 'Riittääkö eurooppalainen sairaanhoitokortti matkavakuutukseksi?',
    answer:
      'Ei. EHIC kattaa vain julkisen sairaanhoidon kohdemaassa — usein pitkillä jonoilla ja rajoitetulla hoidolla. Se ei kata yksityistä sairaanhoitoa, kotiinkuljetusta (jopa 10 000–50 000 €), matkatavaroita, matkan peruuntumista tai myöhästymisiä.',
  },
  {
    question: 'Kumpi on parempi: jatkuva vai kertamatkan matkavakuutus?',
    answer:
      'Jos matkustat vähintään 2–3 kertaa vuodessa, jatkuva matkavakuutus on edullisempi (35–180 €/vuosi kaikille matkoille). Kertamatkan vakuutus (15–80 €/matka) kannattaa, jos matkustat harvoin tai matkan kesto ylittää jatkuvan vakuutuksen enimmäiskeston (yleensä 45 vrk).',
  },
  {
    question: 'Kattaako matkavakuutus riskiurheilulajit?',
    answer:
      'Yleensä perusmatkavakuutus ei kata riskiurheilulajeja kuten sukellusta, laskuvarjohyppyä tai extreme-lajeja. Laskettelu ja hiihto kuuluvat yleensä perusturvaan. Jos harrastat riskiurheilua matkalla, tarkista vakuutusehdot tai ota lisäturva.',
  },
  {
    question: 'Korvataanko matkan peruuntuminen, jos perun oman haluni takia?',
    answer:
      'Ei. Matkan peruuntumisturva korvaa yleensä vain pakottavasta syystä (vakava sairastuminen, lähiomaisen kuolema, kohdemaahan kohdistuva matkustusvaroitus) johtuvan peruuntumisen. Oman mielen muuttuminen ei ole korvattava syy.',
  },
];

export const petInsuranceFAQ: FAQItem[] = [
  {
    question: 'Milloin lemmikkivakuutus kannattaa ottaa?',
    answer:
      'Mahdollisimman aikaisin — mieluiten heti pennun hankittua. Nuorena vakuutusmaksu on edullisempi, eikä aiempia sairauksia ole rajaamassa korvauksia. Useimmat yhtiöt edellyttävät, että vakuutus otetaan ennen koiran 7–8 vuoden ikää.',
  },
  {
    question: 'Korvataanko rokotukset ja madotukset?',
    answer:
      'Ei. Ennaltaehkäisevät hoidot (rokotukset, madotukset, sterilisaatio, ruokavalio, rutiininomaiset tarkastukset) eivät kuulu lemmikkivakuutuksen korvauksen piiriin. Vakuutus korvaa sairauksien ja tapaturmien hoitoa.',
  },
  {
    question: 'Mikä on lemmikkivakuutuksen karenssi?',
    answer:
      'Karenssi on odotusaika vakuutuksen voimaantulon jälkeen, jonka aikana sairauksien hoitoa ei korvata. Tyypillinen karenssi on 14–30 päivää. Tapaturmissa vakuutus on voimassa yleensä heti. Karenssi estää vakuutuksen ottamisen vasta, kun sairaus on jo havaittu.',
  },
  {
    question: 'Ovatko rotukohtaiset sairaudet vakuutuksen piirissä?',
    answer:
      'Osittain. Useimmat vakuutusyhtiöt korvaavat rotukohtaisia sairauksia, mutta voivat soveltaa korkeampaa omavastuuta tai matalampaa korvausrajaa tietyille roduille. Esimerkiksi bulldogeilla hengitystieleikkaukset voivat olla rajattuja. Tarkista ehdot rotukohtaisesti.',
  },
];

export const lifeInsuranceFAQ: FAQItem[] = [
  {
    question: 'Kenelle henkivakuutus on tarpeellinen?',
    answer:
      'Henkivakuutus on erityisen tärkeä perheellisille, joiden tuloista perhe on riippuvainen. Se on myös suositeltava asuntolainan ottajille — korvaus kattaa lainan kuolemantapauksessa. Yrittäjille henkivakuutus turvaa yritystoiminnan jatkuvuutta.',
  },
  {
    question: 'Kuinka suuri korvaussumman pitäisi olla?',
    answer:
      'Nyrkkisäännön mukaan korvaussumman tulisi kattaa vähintään 2–3 vuoden nettotulot tai jäljellä olevan asuntolainan määrä. Suomessa keskimääräinen vakuutusvaje on noin 65 000–70 000 €. Mieti, miten perheesi pärjäisi taloudellisesti ilman tulojasi.',
  },
  {
    question: 'Pitääkö henkivakuutukseen läpäistä terveystarkastus?',
    answer:
      'Kyllä. Henkivakuutuksen saaminen edellyttää terveysselvitystä (kyselylomake). Vakavat sairaudet voivat johtaa korotettuun maksuun tai vakuutuksen epäämiseen. Tämän vuoksi henkivakuutus kannattaa ottaa nuorena ja terveenä.',
  },
  {
    question: 'Mitä henkivakuutus maksaa Suomessa?',
    answer:
      'Henkivakuutuksen hinta riippuu iästä, terveydentilasta, korvaussummasta ja vakuutusajasta. 35-vuotiaalle terveelle henkilölle 100 000 euron henkivakuutus maksaa tyypillisesti 5–15 €/kuukausi. Hinta nousee merkittävästi iän myötä — 50-vuotiaalle sama turva voi maksaa 25–60 €/kuukausi.',
  },
  {
    question: 'Voiko henkivakuutuksen yhdistää työkyvyttömyysturvaan?',
    answer:
      'Kyllä. Useimmat vakuutusyhtiöt tarjoavat henkivakuutuksen oheen työkyvyttömyysturvan, joka maksaa kuukausittaista korvausta, jos menetät työkyvyn sairauden tai tapaturman vuoksi. Yhdistelmävakuutus on usein edullisempi kuin erilliset vakuutukset.',
  },
];

export const accidentInsuranceFAQ: FAQItem[] = [
  {
    question: 'Mitä eroa on tapaturmavakuutuksella ja sairausvakuutuksella?',
    answer:
      'Tapaturmavakuutus korvaa vain tapaturmia — äkillisiä, odottamattomia ulkoisia tapahtumia (kaatuminen, urheiluvamma, liikenneonnettomuus). Se ei korvaa sairauksia. Sairausvakuutus (sairauskuluvakuutus) korvaa myös sairauksien hoitoa. Tapaturmavakuutus on edullisempi.',
  },
  {
    question: 'Kattaako tapaturmavakuutus urheiluvammat?',
    answer:
      'Perustapaturmavakuutus kattaa yleensä harrastusluontoisen urheilun. Kilpa- ja ammatteurheilu on tyypillisesti rajattu pois tai vaatii lisäturvaa. Riskiurheilulajit (laskuvarjohyppy, moottoriurheilu, kamppailu-urheilu) vaativat usein erillisen vakuutuksen.',
  },
  {
    question: 'Mitä tapaturmavakuutus maksaa?',
    answer:
      'Aikuisen tapaturmavakuutus maksaa tyypillisesti 5–20 €/kuukausi turvatasosta riippuen. Perusturva (hoitokulut + pysyvä haitta) on edullisimmillaan 5–8 €/kk. Laajempi turva, joka sisältää myös päivärahaa ja ammatillista kuntoutusta, on 12–20 €/kk. Tapaturmavakuutus on yksi edullisimmista vakuutuksista.',
  },
  {
    question: 'Korvaako tapaturmavakuutus pysyvän haitan?',
    answer:
      'Kyllä. Pysyvän haitan korvaus on yksi tapaturmavakuutuksen tärkeimmistä turvista. Korvaus maksetaan kertakorvauksena haittaluokan mukaan. Täyden pysyvän haitan korvaussumma on tyypillisesti 30 000–200 000 € vakuutuksen tasosta riippuen. Haittaluokat määritellään sosiaali- ja terveysministeriön asetuksen mukaan.',
  },
  {
    question: 'Eikö lakisääteinen tapaturmavakuutus riitä työntekijöille?',
    answer:
      'Lakisääteinen työtapaturmavakuutus kattaa vain työ- ja työmatkatapaturmat. Se ei korvaa vapaa-ajan tapaturmia. Koska suurin osa tapaturmista sattuu vapaa-ajalla (koti, liikunta, harrastukset), erillinen vapaa-ajan tapaturmavakuutus on suositeltava. Joillakin työnantajilla on vapaa-ajan ryhmätapaturmavakuutus — tarkista oma tilanteesi.',
  },
];

export const childInsuranceFAQ: FAQItem[] = [
  {
    question: 'Milloin lapsivakuutus kannattaa ottaa?',
    answer:
      'Mahdollisimman aikaisin — mielellään jo raskauden aikana tai heti syntymän jälkeen. Myöhemmin ilmenneet sairaudet voivat rajoittaa korvauksia. Mitä nuorempana vakuutus otetaan, sitä laajemmin sairaudet ovat korvausten piirissä.',
  },
  {
    question: 'Korvataanko lapsen silmälasit?',
    answer:
      'Yleensä ei, koska näön heikkeneminen ei ole tapaturma eikä äkillinen sairaus. Jotkin laajemmat lapsivakuutukset voivat korvata silmälasit, jos ne rikkoutuvat tapaturmassa. Tarkista oman vakuutuksesi ehdot.',
  },
  {
    question: 'Mihin asti lapsivakuutus on voimassa?',
    answer:
      'Lapsivakuutus on tyypillisesti voimassa 18–25 ikävuoteen asti, yhtiöstä riippuen. Sen jälkeen vakuutus voidaan muuttaa aikuisen tapaturma- tai sairauskuluvakuutukseksi.',
  },
  {
    question: 'Mitä eroa on lapsen tapaturmavakuutuksella ja sairauskuluvakuutuksella?',
    answer:
      'Lapsen tapaturmavakuutus korvaa vain tapaturmista aiheutuvat hoitokulut (kaatumiset, murtumat, urheiluvammat). Sairauskuluvakuutus korvaa myös sairauksien hoidon — esimerkiksi korvatulehdukset, allergiatutkimukset ja erikoislääkärikäynnit. Sairauskuluvakuutus on kattavampi ja kalliimpi (15–35 €/kk vs. 5–10 €/kk), mutta monelle perheelle tarpeellinen.',
  },
  {
    question: 'Korvaako lapsivakuutus yksityisen lääkärin kulut?',
    answer:
      'Sairauskuluvakuutus korvaa yleensä yksityisen lääkärin vastaanottomaksut, tutkimukset ja toimenpiteet. Pelkkä tapaturmavakuutus korvaa yksityislääkärin vain tapaturmatilanteissa. Korvausraja on tyypillisesti 5 000–15 000 € vuodessa. Julkisen terveydenhuollon maksut korvataan myös.',
  },
];

// ============================================================
// FAQ by Insurance Type — Lookup Helper
// ============================================================

export const faqByInsuranceType: Record<InsuranceType, FAQItem[]> = {
  auto: autoInsuranceFAQ,
  home: homeInsuranceFAQ,
  travel: travelInsuranceFAQ,
  pet: petInsuranceFAQ,
  life: lifeInsuranceFAQ,
  accident: accidentInsuranceFAQ,
  child: childInsuranceFAQ,
};

/**
 * Get FAQ items for a specific insurance type.
 */
export function getFAQByInsuranceType(type: InsuranceType): FAQItem[] {
  return faqByInsuranceType[type] || [];
}

export const getInsuranceTypeFAQ = getFAQByInsuranceType;

/**
 * Get all FAQ items (general + all insurance types).
 */
export function getAllFAQ(): FAQItem[] {
  return [
    ...generalFAQ,
    ...autoInsuranceFAQ,
    ...homeInsuranceFAQ,
    ...travelInsuranceFAQ,
    ...petInsuranceFAQ,
    ...lifeInsuranceFAQ,
    ...accidentInsuranceFAQ,
    ...childInsuranceFAQ,
  ];
}

/**
 * Search FAQ items by keyword.
 */
export function searchFAQ(query: string): FAQItem[] {
  const lowerQuery = query.toLowerCase();
  return getAllFAQ().filter(
    (item) =>
      item.question.toLowerCase().includes(lowerQuery) ||
      item.answer.toLowerCase().includes(lowerQuery)
  );
}
