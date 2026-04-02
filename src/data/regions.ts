// ============================================================
// Vakuutusvertailu — Regional / City Insurance Data
// City-specific data for local SEO pages
// ============================================================

export interface CityInsuranceData {
  slug: string;
  name: string;
  nameInessive: string; // Finnish inessive case (e.g., "Helsingissä")
  population: number;
  region: string; // maakunta
  description: string;
  averageAutoPrice: string;
  averageHomePrice: string;
  localProviders: string[]; // Provider IDs with strong local presence
  keyFacts: string[];
  popularTypes: string[];
}

// ============================================================
// 15 Largest Finnish Cities
// ============================================================

export const cities: CityInsuranceData[] = [
  {
    slug: 'helsinki',
    name: 'Helsinki',
    nameInessive: 'Helsingissä',
    population: 670000,
    region: 'Uusimaa',
    description:
      'Helsinki on Suomen pääkaupunki ja suurin kaupunki, jossa asuu noin 670 000 ihmistä. Pääkaupunkiseudun tiivis asutus, vilkas liikenne ja korkea asumiskustannustaso heijastuvat vakuutustarpeisiin. Liikennevahinkojen riski on suurempi tiheään rakennetussa kaupunkiympäristössä, ja asuntojen hintataso nostaa kotivakuutusten merkitystä.',
    averageAutoPrice: '350–1 100 €/vuosi',
    averageHomePrice: '120–500 €/vuosi',
    localProviders: ['pohjola', 'lahitapiola', 'if', 'fennia', 'aktia'],
    keyFacts: [
      'Liikennevakuutus on keskimäärin 10–15 % kalliimpi kuin muualla Suomessa',
      'Kerrostaloasuntojen kotivakuutus on tyypillisesti 120–300 €/vuosi',
      'Autovarkaudet ovat yleisempiä pääkaupunkiseudulla — kaskovakuutus on tärkeä',
      'Kaikki suuret vakuutusyhtiöt ovat edustettuna Helsingissä',
      'Pyörävarkauksien määrä nostaa kotivakuutuksen arvoa kaupungissa',
    ],
    popularTypes: ['auto', 'home', 'travel', 'life', 'pet'],
  },
  {
    slug: 'espoo',
    name: 'Espoo',
    nameInessive: 'Espoossa',
    population: 300000,
    region: 'Uusimaa',
    description:
      'Espoo on Suomen toiseksi suurin kaupunki ja osa pääkaupunkiseutua. Espoo on tunnettu korkeasta elintasosta, perheasumisesta ja teknologia-yrityksistä. Omakoti- ja rivitaloalueet nostavat kotivakuutusten merkitystä, ja kahden auton taloudet ovat yleisiä.',
    averageAutoPrice: '330–1 050 €/vuosi',
    averageHomePrice: '150–600 €/vuosi',
    localProviders: ['pohjola', 'lahitapiola', 'if', 'fennia', 'aktia'],
    keyFacts: [
      'Espoon omakotitaloalueilla laaja kotivakuutus on erityisen tärkeä',
      'Kahden auton taloudet hyötyvät monivakuutusalennuksista',
      'Vesivahingot ovat yleinen korvaussyy alueen vanhemmissa taloyhtiöissä',
      'Espoon korkea tulotaso näkyy laajempien vakuutustuotteiden suosiossa',
      'Teknologia-alan yrittäjille Fennia tarjoaa räätälöityjä ratkaisuja',
    ],
    popularTypes: ['home', 'auto', 'life', 'child', 'pet'],
  },
  {
    slug: 'tampere',
    name: 'Tampere',
    nameInessive: 'Tampereella',
    population: 250000,
    region: 'Pirkanmaa',
    description:
      'Tampere on Suomen kolmanneksi suurin kaupunki ja sisämaan suurin keskus. Kaupunki kasvaa nopeasti ja vetää puoleensa erityisesti nuoria ja opiskelijoita. Tampereen kohtuullisempi hintataso verrattuna pääkaupunkiseutuun näkyy myös vakuutusmaksuissa.',
    averageAutoPrice: '280–900 €/vuosi',
    averageHomePrice: '100–420 €/vuosi',
    localProviders: ['lahitapiola', 'pohjola', 'if', 'fennia', 'turva'],
    keyFacts: [
      'Autovakuutus on tyypillisesti 10–20 % edullisempi kuin Helsingissä',
      'Tampereen raitiotie on vähentänyt autoilun tarvetta keskustassa',
      'LähiTapiola on alueella erityisen vahva paikallinen toimija',
      'Opiskelijoille matkavakuutus ja tapaturmavakuutus ovat tärkeitä',
      'Turva on ay-liikkeen kautta suosittu Pirkanmaalla',
    ],
    popularTypes: ['auto', 'home', 'travel', 'accident', 'pet'],
  },
  {
    slug: 'vantaa',
    name: 'Vantaa',
    nameInessive: 'Vantaalla',
    population: 240000,
    region: 'Uusimaa',
    description:
      'Vantaa on osa pääkaupunkiseutua ja Helsinki-Vantaan lentoaseman kotikaupunki. Kaupungissa on sekä tiivistä kerrostaloasumista että väljempiä pientaloalueita. Lentoaseman läheisyys ja logistiikkakeskittymät tuovat omat vakuutustarpeensa.',
    averageAutoPrice: '320–1 000 €/vuosi',
    averageHomePrice: '110–450 €/vuosi',
    localProviders: ['pohjola', 'if', 'lahitapiola', 'fennia', 'pop-vakuutus'],
    keyFacts: [
      'Liikennevahinkojen riski on korkea vilkasliikenteisellä kehätiealueella',
      'Kotivakuutustarve vaihtelee asuinalueen mukaan — kerrostalosta omakotitaloon',
      'Lentoaseman lähialueella matkavakuutukset ovat suosittuja',
      'POP Vakuutus on kasvattanut markkinaosuuttaan pääkaupunkiseudulla',
      'Logistiikka-alan yrittäjille Fennia tarjoaa yritysvakuutuksia',
    ],
    popularTypes: ['auto', 'home', 'travel', 'life', 'accident'],
  },
  {
    slug: 'oulu',
    name: 'Oulu',
    nameInessive: 'Oulussa',
    population: 210000,
    region: 'Pohjois-Pohjanmaa',
    description:
      'Oulu on Pohjois-Suomen suurin kaupunki ja teknologiakeskus. Pohjoiset olosuhteet — kylmät talvet, pitkät pimeät jaksot ja liukkaat tiet — tekevät vakuutuksista erityisen tärkeitä. Autovakuutuksen merkitys korostuu talviolosuhteissa.',
    averageAutoPrice: '300–950 €/vuosi',
    averageHomePrice: '90–380 €/vuosi',
    localProviders: ['pohjola', 'lahitapiola', 'if', 'pohjantahti', 'fennia'],
    keyFacts: [
      'Kylmät talvet lisäävät autovahinkojen riskiä — kaskovakuutus on suositeltava',
      'Putkivuotoriskit kasvavat kovilla pakkasilla — kotivakuutuksen merkitys korostuu',
      'Pohjantähti on alueella vahva paikallinen toimija',
      'Oulu on Suomen pyöräilykaupunki — tapaturmavakuutus on tärkeä',
      'Teknologia-alan startup-yrityksille Oulu tarjoaa yritysvakuutustarpeita',
    ],
    popularTypes: ['auto', 'home', 'accident', 'child', 'travel'],
  },
  {
    slug: 'turku',
    name: 'Turku',
    nameInessive: 'Turussa',
    population: 200000,
    region: 'Varsinais-Suomi',
    description:
      'Turku on Suomen vanhin kaupunki ja Lounais-Suomen keskus. Satama, merellinen sijainti ja vilkas turismi heijastuvat vakuutustarpeisiin. Turun saaristo tuo erityistarpeita vene- ja merenkulkuvakuutuksiin.',
    averageAutoPrice: '280–880 €/vuosi',
    averageHomePrice: '95–400 €/vuosi',
    localProviders: ['lahitapiola', 'if', 'pohjola', 'alandia', 'fennia'],
    keyFacts: [
      'Turun saariston venevakuutuksissa Alandia on vahva erikoisosaaja',
      'Meri-ilmasto lisää rakennusten kosteusvaurioriskiä — laaja kotivakuutus suositeltava',
      'Opiskelijakaupunkina matkavakuutus on suosittu nuorten keskuudessa',
      'Telakkateollisuus ja satama tuovat erityisiä yritysvakuutustarpeita',
      'Lähijunayhteys Helsinkiin vähentää autoilun tarvetta osalla asukkaista',
    ],
    popularTypes: ['auto', 'home', 'travel', 'pet', 'life'],
  },
  {
    slug: 'jyvaskyla',
    name: 'Jyväskylä',
    nameInessive: 'Jyväskylässä',
    population: 145000,
    region: 'Keski-Suomi',
    description:
      'Jyväskylä on Keski-Suomen maakuntakeskus ja vilkas opiskelukaupunki. Kaupungissa on monipuolinen yrityskenttä ja aktiivinen urheiluseuraelämä. Keskisuomalainen sijainti tekee vakuutusten hinnoista kohtuullisia.',
    averageAutoPrice: '260–850 €/vuosi',
    averageHomePrice: '85–350 €/vuosi',
    localProviders: ['lahitapiola', 'pohjola', 'if', 'pohjantahti', 'fennia'],
    keyFacts: [
      'Pohjantähti on perinteisesti vahva Keski-Suomessa',
      'Opiskelijoille tapaturma- ja matkavakuutus ovat tärkeitä',
      'Keskisuomalaiset loma-asunnot nostavat kesämökkivakuutusten kysyntää',
      'Liukkaat talvitiet lisäävät autovahinkojen riskiä',
      'Monipuolinen urheilutarjonta lisää tapaturmavakuutuksen tarvetta',
    ],
    popularTypes: ['auto', 'home', 'accident', 'travel', 'child'],
  },
  {
    slug: 'lahti',
    name: 'Lahti',
    nameInessive: 'Lahdessa',
    population: 120000,
    region: 'Päijät-Häme',
    description:
      'Lahti on Päijät-Hämeen maakuntakeskus, tunnettu urheilukaupunki ja ympäristöpääkaupunki. Lahden sijainti pääkaupunkiseudun kupeessa ja kohtuulliset elinkustannukset tekevät siitä houkuttelevan asuinpaikan pendelöijille.',
    averageAutoPrice: '260–830 €/vuosi',
    averageHomePrice: '80–340 €/vuosi',
    localProviders: ['lahitapiola', 'pohjola', 'if', 'fennia', 'turva'],
    keyFacts: [
      'Pendelöinti Helsinkiin lisää autovakuutuksen merkitystä',
      'Lahden asuntohinnat ovat kohtuulliset — kotivakuutus on edullinen',
      'Urheilukaupunkina tapaturmavakuutus on erityisen suosittu',
      'LähiTapiola on alueella perinteisesti vahva',
      'Päijänteen mökkialueilla kesämökkivakuutus on yleinen',
    ],
    popularTypes: ['auto', 'home', 'accident', 'travel', 'pet'],
  },
  {
    slug: 'kuopio',
    name: 'Kuopio',
    nameInessive: 'Kuopiossa',
    population: 120000,
    region: 'Pohjois-Savo',
    description:
      'Kuopio on Pohjois-Savon maakuntakeskus ja Itä-Suomen suurin kaupunki. Kaupunki on tunnettu terveys- ja hyvinvointiosaamisesta. Vesistöt ja luontokohteet ympäröivät kaupunkia, mikä luo omia vakuutustarpeita.',
    averageAutoPrice: '260–830 €/vuosi',
    averageHomePrice: '80–340 €/vuosi',
    localProviders: ['lahitapiola', 'pohjola', 'if', 'fennia', 'pohjantahti'],
    keyFacts: [
      'Vesistöjen läheisyys lisää vene- ja mökkivakuutusten kysyntää',
      'Talviolosuhteet ovat haastavat — kattava autovakuutus on tärkeä',
      'LähiTapiola on alueella perinteisesti vahva toimija',
      'Terveysteknologia-yritysten yritysvakuutustarve kasvaa',
      'Omakotitaloasuminen on yleistä — kotivakuutuksen merkitys korostuu',
    ],
    popularTypes: ['auto', 'home', 'life', 'accident', 'pet'],
  },
  {
    slug: 'pori',
    name: 'Pori',
    nameInessive: 'Porissa',
    population: 84000,
    region: 'Satakunta',
    description:
      'Pori on Satakunnan maakuntakeskus ja Länsi-Suomen merkittävä teollisuuskaupunki. Meren läheisyys ja teollinen perinne muovaavat vakuutustarpeita. Porin asuntohinnat ovat kohtuulliset, mikä tekee vakuutuksista edullisempia.',
    averageAutoPrice: '240–780 €/vuosi',
    averageHomePrice: '75–320 €/vuosi',
    localProviders: ['lahitapiola', 'pohjola', 'if', 'turva', 'fennia'],
    keyFacts: [
      'Merituulet ja kosteus lisäävät rakennusvaurioriskiä — kotivakuutus on tärkeä',
      'Teollisuustyöntekijöille Turva tarjoaa liittojäsenalennuksia',
      'Asuntohinnat ovat kohtuulliset — vakuutukset ovat edullisempia kuin kasvukeskuksissa',
      'Porin seutu on suosittu kesämökkialue — mökkivakuutusten kysyntä on merkittävä',
      'LähiTapiola on vahva paikallinen toimija Satakunnassa',
    ],
    popularTypes: ['auto', 'home', 'accident', 'life', 'travel'],
  },
  {
    slug: 'joensuu',
    name: 'Joensuu',
    nameInessive: 'Joensuussa',
    population: 78000,
    region: 'Pohjois-Karjala',
    description:
      'Joensuu on Pohjois-Karjalan maakuntakeskus ja Itä-Suomen merkittävä opiskelukaupunki. Luonnon läheisyys ja pohjoiset olosuhteet tekevät vakuutuksista erityisen tärkeitä.',
    averageAutoPrice: '240–780 €/vuosi',
    averageHomePrice: '70–300 €/vuosi',
    localProviders: ['lahitapiola', 'pohjola', 'if', 'fennia', 'pohjantahti'],
    keyFacts: [
      'Pitkät etäisyydet korostavat autovakuutuksen merkitystä',
      'Luonnon läheisyys lisää tapaturmavakuutuksen tarvetta',
      'Asuntohinnat ovat edullisia — vakuutukset ovat Suomen edullisimpia',
      'Opiskelijakaupunkina matkavakuutus on suosittu',
      'Metsätalous tuo erityisiä vakuutustarpeita maaseutualueella',
    ],
    popularTypes: ['auto', 'home', 'accident', 'travel', 'child'],
  },
  {
    slug: 'lappeenranta',
    name: 'Lappeenranta',
    nameInessive: 'Lappeenrannassa',
    population: 73000,
    region: 'Etelä-Karjala',
    description:
      'Lappeenranta on Etelä-Karjalan maakuntakeskus, sijaitsee Saimaan rannalla lähellä Venäjän rajaa. Teknillinen yliopisto (LUT) tuo kaupunkiin opiskelijoita ja yritystoimintaa. Saimaan vesistö luo erityistarpeita.',
    averageAutoPrice: '240–760 €/vuosi',
    averageHomePrice: '70–290 €/vuosi',
    localProviders: ['lahitapiola', 'pohjola', 'if', 'fennia'],
    keyFacts: [
      'Saimaan ranta-asunnoille ja veneille omat vakuutustarpeensa',
      'Rajan läheisyys — kansainvälinen matkavakuutus on ajankohtainen',
      'LUT-yliopiston opiskelijoille tapaturma- ja matkavakuutukset ovat tärkeitä',
      'Edullinen asuminen pitää kotivakuutusmaksut kohtuullisina',
      'Tuulienergia-alan kasvu tuo uusia yritysvakuutustarpeita',
    ],
    popularTypes: ['auto', 'home', 'travel', 'accident', 'life'],
  },
  {
    slug: 'hameenlinna',
    name: 'Hämeenlinna',
    nameInessive: 'Hämeenlinnassa',
    population: 68000,
    region: 'Kanta-Häme',
    description:
      'Hämeenlinna on Kanta-Hämeen maakuntakeskus ja historiallinen kaupunki. Sijainti Helsingin ja Tampereen välissä tekee siitä suositun pendelöintikaupungin. Kohtuullinen hintataso ja hyvät yhteydet houkuttelevat perheitä.',
    averageAutoPrice: '250–790 €/vuosi',
    averageHomePrice: '75–310 €/vuosi',
    localProviders: ['lahitapiola', 'pohjola', 'if', 'fennia', 'turva'],
    keyFacts: [
      'Pendelöinti Helsinkiin ja Tampereelle lisää autovakuutuksen merkitystä',
      'Perheystävällinen kaupunki — lapsivakuutukset ovat suosittuja',
      'Vanha rakennuskanta lisää kotivakuutuksen tarvetta',
      'Vesistöjen läheisyys tuo mökkivakuutustarpeita',
      'LähiTapiola ja Pohjola ovat alueen suurimmat vakuuttajat',
    ],
    popularTypes: ['auto', 'home', 'child', 'life', 'travel'],
  },
  {
    slug: 'vaasa',
    name: 'Vaasa',
    nameInessive: 'Vaasassa',
    population: 68000,
    region: 'Pohjanmaa',
    description:
      'Vaasa on Pohjanmaan maakuntakeskus ja Suomen energiapääkaupunki. Kaksikielinen kaupunki (suomi/ruotsi) on tunnettu energiateollisuudestaan ja korkeasta elintasostaan. Merellinen sijainti vaikuttaa vakuutustarpeisiin.',
    averageAutoPrice: '250–800 €/vuosi',
    averageHomePrice: '80–330 €/vuosi',
    localProviders: ['pohjantahti', 'lahitapiola', 'pohjola', 'if', 'aktia'],
    keyFacts: [
      'Pohjantähti on erityisen vahva Pohjanmaalla — paikallinen vakuuttaja',
      'Aktia on suosittu ruotsinkielisten keskuudessa',
      'Merellinen sijainti lisää venevakuutusten kysyntää',
      'Energiateollisuus tuo erityisiä yritysvakuutustarpeita',
      'Kaksikielisyys — palvelua saa sekä suomeksi että ruotsiksi',
    ],
    popularTypes: ['auto', 'home', 'travel', 'life', 'accident'],
  },
  {
    slug: 'rovaniemi',
    name: 'Rovaniemi',
    nameInessive: 'Rovaniemellä',
    population: 65000,
    region: 'Lappi',
    description:
      'Rovaniemi on Lapin maakuntakeskus ja Suomen pohjoisin suurempi kaupunki. Äärimmäiset sääolosuhteet, pitkät etäisyydet ja turismi luovat erityiset vakuutustarpeet. Napapiirin sijainti tuo ainutlaatuisia riskejä.',
    averageAutoPrice: '280–880 €/vuosi',
    averageHomePrice: '75–310 €/vuosi',
    localProviders: ['pohjola', 'lahitapiola', 'if', 'pohjantahti'],
    keyFacts: [
      'Äärimmäiset talviolosuhteet nostavat autovahinkojen riskiä merkittävästi',
      'Pakkanen ja routavauriot lisäävät kotivakuutuksen tarvetta',
      'Pitkät etäisyydet tekevät autovakuutuksesta välttämättömän',
      'Matkailu- ja safariyritykset tarvitsevat erikoistettuja yritysvakuutuksia',
      'Poronhoitoalueella eläinvahingot ovat yleisempiä',
    ],
    popularTypes: ['auto', 'home', 'accident', 'travel', 'life'],
  },
];

// ============================================================
// Helper Functions
// ============================================================

export function getCityBySlug(slug: string): CityInsuranceData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

export function getCitiesByRegion(region: string): CityInsuranceData[] {
  return cities.filter((c) => c.region === region);
}
