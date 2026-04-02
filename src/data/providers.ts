// ============================================================
// Vakuutusvertailu — Insurance Provider Data
// Complete database of Finnish insurance providers and products
// ============================================================

import type {
  InsuranceProvider,
  InsuranceProduct,
  InsuranceType,
  InsuranceTier,
  CoverageItem,
  DeductibleOption,
  FAQItem,
  PriceRange,
} from '@/types';

// ============================================================
// Provider 1: Pohjola / OP (32.6% market share)
// ============================================================

const pohjola: InsuranceProvider = {
  id: 'pohjola',
  slug: 'pohjola',
  name: 'Pohjola Vakuutus (OP)',
  shortName: 'Pohjola',
  founded: 1891,
  ownership: 'OP Osuuskuntaryhmä (osuustoiminnallinen)',
  marketShare: 32.0,
  size: 'large',
  headquarters: 'Helsinki',
  employeeCount: '~12 000 (OP-ryhmä)',
  customerCount: '4,5 miljoonaa omistaja-asiakasta (OP-ryhmä)',
  website: 'https://www.op.fi/vakuutukset',
  description:
    'Suomen suurin vakuuttaja — OP-ryhmän vahinkovakuutusyhtiö. Tarjoaa kattavan valikoiman vakuutuksia henkilö- ja yritysasiakkaille. Osuuskunta-asiakkuus tuo merkittävät bonusedut.',
  longDescription:
    'Pohjola Vakuutus on osa OP-ryhmää, joka on Suomen suurin finanssiryhmä. OP-ryhmällä on yli 4,5 miljoonaa omistaja-asiakasta ja laaja konttoriverkosto ympäri Suomen. Vakuutusasiakkaat hyötyvät OP-bonuksesta, joka voi olla jopa 17 % vakuutusmaksuista. Pohjolan vakuutukset kattavat käytännössä kaikki vakuutustarpeet autoista kotiin, matkustamiseen, lemmikkeihin, henkivakuutukseen ja yritystoimintaan. Digitaaliset palvelut ovat kattavat: OP-mobiilisovelluksella voi hoitaa sekä pankki- että vakuutusasiat yhdestä paikasta.',
  logo: '/logos/pohjola.svg',
  color: '#FF6600',
  satisfaction: 7.8,
  reviewCount: 12450,
  claimProcessRating: 7.5,
  onlineServiceRating: 8.2,
  priceCompetitiveness: 6.5,
  isAffiliate: false,
  products: [],
  strengths: [
    'Suomen suurin vakuuttaja — laajin palveluvalikoima',
    'OP-bonus jopa 17 % vakuutusmaksuista omistaja-asiakkaille',
    'Pankki- ja vakuutuspalvelut samassa paikassa (OP-mobiili)',
    'Laaja konttoriverkosto ympäri Suomen',
    'Kattavat digitaaliset palvelut ja vakuutuslaskurit',
    'Vahva korvauspalvelu ja laaja kumppaniverkosto',
  ],
  weaknesses: [
    'Hinnat usein markkinoiden kalliimmasta päästä ilman bonuksia',
    'OP-bonus sidottu osuuskunta-asiakkuuteen — ei kaikille',
    'Laaja tuotevalikoima voi tuntua monimutkaiselta',
    'Keskittämisedun menettäminen pelottaa, vaikka kilpailutus kannattaisi',
  ],
  specialFeatures: [
    'OP-bonus (jopa 17 % vakuutusmaksuista)',
    'OP-mobiili — kaikki pankki- ja vakuutusasiat yhdessä',
    'Pohjola Sairaala — oma terveydenhoitoverkosto',
    'Bonusasiakkaan alennukset myös vakuutuskumppaneilla',
  ],
  concentrationBenefits:
    'OP-bonusjärjestelmä on markkinoiden kattavin: omistaja-asiakkaat kerryttävät bonusta kaikista OP-palveluista (lainat, talletukset, sijoitukset, vakuutukset). Bonus voi olla jopa 17 % vakuutusmaksuista, mikä tekee kokonaishinnasta kilpailukykyisen erityisesti paljon OP-palveluja käyttäville.',
  onlineCapabilities: [
    'Vakuutusten osto verkossa',
    'Vahinkoilmoitus verkossa ja sovelluksessa',
    'Vakuutuslaskurit kaikille vakuutustyypeille',
    'Vakuutustodistukset ja asiakirjat verkossa',
    'OP-mobiilisovellus (iOS & Android)',
    'Chat-palvelu',
  ],
  appAvailable: true,
  insuranceTypes: ['auto', 'home', 'travel', 'pet', 'life', 'accident', 'child'],
  faq: [
    {
      question: 'Miten OP-bonus vaikuttaa vakuutusten hintaan?',
      answer:
        'OP-bonusta kertyy kaikista OP-ryhmän palveluista. Bonusta voi käyttää vakuutusmaksujen maksamiseen. Bonusprosentti vaihtelee 0,25–17 % riippuen OP-palveluiden kokonaismäärästä. Keskimäärin OP-asiakkaalle bonus alentaa vakuutusmaksuja 5–10 %.',
    },
    {
      question: 'Voiko Pohjolan vakuutuksen ostaa verkossa?',
      answer:
        'Kyllä, useimmat Pohjolan vakuutukset voi ostaa suoraan op.fi-sivuston kautta tai OP-mobiilisovelluksella. Verkossa saat myös vakuutuslaskurin avulla hinta-arvion ennen ostopäätöstä.',
    },
    {
      question: 'Miten Pohjolan korvauspalvelu toimii?',
      answer:
        'Vahinkoilmoituksen voi tehdä verkossa, sovelluksessa tai puhelimitse. Pohjolalla on laaja kumppaniverkosto (korjaamot, vuokraamot, Pohjola Sairaala), mikä nopeuttaa korvausten käsittelyä. Pienet vahingot käsitellään usein 1–3 arkipäivässä.',
    },
    {
      question: 'Kannattaako OP:n asiakkaana kilpailuttaa vakuutuksia?',
      answer:
        'Kyllä — vaikka OP-bonus on merkittävä etu, se ei aina tee Pohjolan vakuutuksista halvinta vaihtoehtoa. Erityisesti jos et käytä paljon muita OP-palveluja, kilpailutus voi tuoda merkittäviä säästöjä. Suosittelemme vertailemaan hintoja vähintään 2–3 vuoden välein.',
    },
  ],
};

const pohjolaProducts: InsuranceProduct[] = [
  // Auto - Liikennevakuutus (basic)
  {
    id: 'pohjola-auto-liikenne',
    providerId: 'pohjola',
    type: 'auto',
    name: 'Pohjola Liikennevakuutus',
    tier: 'basic',
    priceRange: { min: 210, max: 620, unit: 'eur/year', note: 'Hinta riippuu autosta, iästä ja bonusluokasta' },
    coverage: [
      { name: 'Liikennevakuutus (lakisääteinen)', included: true, description: 'Korvaa ulkopuolisille aiheutetut henkilö- ja omaisuusvahingot' },
      { name: 'Henkilövahingot (oma auto)', included: true, description: 'Kuljettajan ja matkustajien henkilövahingot' },
      { name: 'Omaisuusvahingot (kolmannelle)', included: true, limit: 'Ei ylärajaa henkilövahingoille' },
      { name: 'Kaskovakuutus', included: false },
      { name: 'Hinauspalvelu', included: false },
    ],
    deductibles: [
      { amount: 500, label: '500 € omavastuu' },
      { amount: 200, label: '200 € omavastuu' },
    ],
    highlights: [
      'Lakisääteinen liikennevakuutus kaikille ajoneuvoille',
      'OP-bonusasiakkaille bonusalennus',
      'Vahingon voi ilmoittaa OP-mobiilissa',
    ],
    limitations: [
      'Ei korvaa oman auton vahinkoja (tarvitset kaskon)',
      'Ei sisällä hinauspalvelua',
      'Ei lasivahinkovakuutusta',
    ],
    suitableFor: ['Vanhempien autojen omistajat', 'Vähän ajavat', 'Budjettitietoiset'],
    lastVerified: '2026-03-15',
  },
  // Auto - Osakasko (standard)
  {
    id: 'pohjola-auto-osakasko',
    providerId: 'pohjola',
    type: 'auto',
    name: 'Pohjola Osakasko',
    tier: 'standard',
    priceRange: { min: 380, max: 850, unit: 'eur/year', note: 'Liikennevakuutus + osakasko yhteensä' },
    coverage: [
      { name: 'Liikennevakuutus', included: true },
      { name: 'Palovahinko', included: true, description: 'Tulipalosta aiheutuneet vahingot' },
      { name: 'Varkausvahinko', included: true, description: 'Auton varkaus tai varkausyritys' },
      { name: 'Lasivakuutus', included: true, description: 'Tuulilasin ja ikkunoiden korjaus tai vaihto' },
      { name: 'Eläinvahinko', included: true, description: 'Hirvi- ja muut eläinkolarit' },
      { name: 'Hinauspalvelu', included: true, limit: 'Lähimpään korjaamoon' },
      { name: 'Törmäysvahinko', included: false },
      { name: 'Ilkivaltavahinko', included: false },
      { name: 'Lunastusturva', included: false },
    ],
    deductibles: [
      { amount: 200, label: '200 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
      { amount: 150, label: '150 € omavastuu (lasi)' },
    ],
    highlights: [
      'Hyvä perusturva kohtuuhintaan',
      'Lasivakuutus sisältyy — säästä satoja euroja tuulilasivahingoissa',
      'Eläinvahinkoturva tärkeä maaseudulla ajettaessa',
    ],
    limitations: [
      'Ei korvaa oman auton kolarivahinkoja',
      'Ei ilkivaltavakuutusta',
      'Ei lunastusturvaa',
    ],
    suitableFor: ['5–15 vuotta vanhojen autojen omistajat', 'Maaseudulla ajavat (hirvivahinkoturva)', 'Kohtuullista turvaa hakevat'],
    lastVerified: '2026-03-15',
  },
  // Auto - Täyskasko (comprehensive)
  {
    id: 'pohjola-auto-tayskasko',
    providerId: 'pohjola',
    type: 'auto',
    name: 'Pohjola Täyskasko',
    tier: 'comprehensive',
    priceRange: { min: 650, max: 1800, unit: 'eur/year', note: 'Hinta riippuu auton arvosta ja kuljettajan profiilista' },
    coverage: [
      { name: 'Liikennevakuutus', included: true },
      { name: 'Palovahinko', included: true },
      { name: 'Varkausvahinko', included: true },
      { name: 'Lasivakuutus', included: true },
      { name: 'Eläinvahinko', included: true },
      { name: 'Hinauspalvelu', included: true, limit: 'Enintään 500 km' },
      { name: 'Törmäysvahinko', included: true, description: 'Korvaa kolaritilanteessa oman auton vahingot' },
      { name: 'Ilkivaltavahinko', included: true },
      { name: 'Tieltä suistuminen', included: true },
      { name: 'Lunastusturva', included: false },
      { name: 'Keskeytysturva', included: false },
    ],
    deductibles: [
      { amount: 200, label: '200 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
      { amount: 1000, label: '1 000 € omavastuu' },
      { amount: 150, label: '150 € omavastuu (lasi)' },
    ],
    highlights: [
      'Kattava turva kolarivahinkoja vastaan',
      'Ilkivaltasuoja mukana — tärkeä kaupungissa',
      'Laaja hinauspalvelu jopa 500 km asti',
      'OP-bonusasiakkaille merkittävä alennus',
    ],
    limitations: [
      'Ei lunastusturvaa (lisävalinnainen)',
      'Ei keskeytysturvaa peruspaketissa',
      'Omavastuu kolarissa vähintään 200 €',
    ],
    suitableFor: ['Uudehkojen autojen omistajat (alle 10 v)', 'Kaupungissa pysäköivät', 'Rahoitusauton omistajat'],
    lastVerified: '2026-03-15',
  },
  // Auto - Laaja täyskasko (premium)
  {
    id: 'pohjola-auto-laaja',
    providerId: 'pohjola',
    type: 'auto',
    name: 'Pohjola Laaja Täyskasko',
    tier: 'premium',
    priceRange: { min: 900, max: 2500, unit: 'eur/year', note: 'Laajin turva — sisältää lunastus- ja keskeytysturvan' },
    coverage: [
      { name: 'Liikennevakuutus', included: true },
      { name: 'Palovahinko', included: true },
      { name: 'Varkausvahinko', included: true },
      { name: 'Lasivakuutus', included: true, limit: 'Ei omavastuuta ensimmäisessä korjauksessa' },
      { name: 'Eläinvahinko', included: true },
      { name: 'Hinauspalvelu', included: true, limit: 'Rajaton Suomessa' },
      { name: 'Törmäysvahinko', included: true },
      { name: 'Ilkivaltavahinko', included: true },
      { name: 'Tieltä suistuminen', included: true },
      { name: 'Lunastusturva', included: true, description: 'Korvaa auton käyvän arvon ylittävän hinnan lunastustilanteessa' },
      { name: 'Keskeytysturva', included: true, description: 'Sijaisauto korjauksen ajaksi' },
      { name: 'Autopalveluvakuutus', included: true, description: 'Apua tien päällä 24/7' },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
      { amount: 200, label: '200 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
      { amount: 0, label: '0 € omavastuu (lasi)' },
    ],
    highlights: [
      'Markkinoiden kattavin autoturva',
      'Lunastusturva — saat täyden korvauksen',
      'Sijaisauto korjauksen ajaksi',
      '24/7 autopalvelu kaikkialla Suomessa',
      'Lasivahinko ilman omavastuuta',
    ],
    limitations: [
      'Kalleimmasta päästä markkinoilla',
      'Lunastusturva enintään 3 vuotta käyttöönotosta',
      'Kilpailukykyinen vain OP-bonuksen kanssa',
    ],
    suitableFor: ['Uusien ja arvokkaiden autojen omistajat', 'Paljon ajavat', 'Rahoitus- tai leasingautojen käyttäjät'],
    lastVerified: '2026-03-15',
  },
  // Home - Kotivakuutus
  {
    id: 'pohjola-home-standard',
    providerId: 'pohjola',
    type: 'home',
    name: 'Pohjola Kotivakuutus',
    tier: 'standard',
    priceRange: { min: 120, max: 420, unit: 'eur/year', note: 'Kerrostaloasunto 40–80 m²' },
    coverage: [
      { name: 'Irtaimistovakuutus', included: true, description: 'Korvaa kodin irtaimiston vahingot' },
      { name: 'Putkivuototurva', included: true },
      { name: 'Paloturva', included: true },
      { name: 'Murtovakuutus', included: true },
      { name: 'Oikeusturvavakuutus', included: true, limit: 'Enintään 10 000 €' },
      { name: 'Vastuuvakuutus', included: true, limit: 'Enintään 200 000 €' },
      { name: 'Matkatavaraturva', included: true, description: 'Matkatavarat kotimaassa ja ulkomailla' },
      { name: 'Polkupyörävarkaus', included: false, description: 'Saatavilla laajemmassa turvassa' },
      { name: 'Rikkoutumisturva', included: false },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
      { amount: 300, label: '300 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
    ],
    highlights: [
      'Kattava perusturva kodille ja irtaimistolle',
      'Vastuuvakuutus sisältyy — korvaa toiselle aiheuttamasi vahingot',
      'Oikeusturvavakuutus riita-asioihin',
    ],
    limitations: [
      'Polkupyörävarkaudet eivät kuulu perusturvaan',
      'Rikkoutumisturva vain laajemmassa paketissa',
      'Korvauskatot voivat olla matalia arvotavaroille',
    ],
    suitableFor: ['Kerrostalo- ja rivitaloasukkaat', 'Vuokra-asukkaat', 'Perusturvaa hakevat'],
    lastVerified: '2026-03-15',
  },
  // Home - Laaja kotivakuutus
  {
    id: 'pohjola-home-premium',
    providerId: 'pohjola',
    type: 'home',
    name: 'Pohjola Laaja Kotivakuutus',
    tier: 'premium',
    priceRange: { min: 300, max: 850, unit: 'eur/year', note: 'Omakotitalo tai laaja turva kerrostaloon' },
    coverage: [
      { name: 'Irtaimistovakuutus', included: true, limit: 'Laajat korvauskatot' },
      { name: 'Putkivuototurva', included: true },
      { name: 'Paloturva', included: true },
      { name: 'Murtovakuutus', included: true },
      { name: 'Oikeusturvavakuutus', included: true, limit: 'Enintään 15 000 €' },
      { name: 'Vastuuvakuutus', included: true, limit: 'Enintään 500 000 €' },
      { name: 'Matkatavaraturva', included: true },
      { name: 'Polkupyörävarkaus', included: true, limit: 'Enintään 3 000 €' },
      { name: 'Rikkoutumisturva', included: true, description: 'Kodin elektroniikka ja kodinkoneet' },
      { name: 'Luonnonilmiöturva', included: true, description: 'Myrsky, tulva, raesade' },
      { name: 'Rakennuksen vakuutus', included: true, description: 'Omakotitalon rakennus' },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
      { amount: 300, label: '300 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
    ],
    highlights: [
      'Kattavin kotivakuutus markkinoilla',
      'Polkupyörävarkaus — tärkeä kaupungissa',
      'Rikkoutumisturva kodin elektroniikalle',
      'Omakotitaloille myös rakennuksen vakuutus',
    ],
    limitations: [
      'Kallein kotivakuutusvaihtoehto',
      'Arvotavaroiden korvauskatot saattavat edellyttää erillistä arvotavaravakuutusta',
    ],
    suitableFor: ['Omakotitalon omistajat', 'Paljon arvokasta irtaimistoa omistavat', 'Kokonaisvaltaista turvaa haluavat'],
    lastVerified: '2026-03-15',
  },
  // Travel
  {
    id: 'pohjola-travel-standard',
    providerId: 'pohjola',
    type: 'travel',
    name: 'Pohjola Matkavakuutus',
    tier: 'standard',
    priceRange: { min: 60, max: 180, unit: 'eur/year', note: 'Jatkuva matkavakuutus, yksittäinen henkilö' },
    coverage: [
      { name: 'Matkakulut sairauden johdosta', included: true, limit: 'Enintään 200 000 €' },
      { name: 'Matkatavaravakuutus', included: true, limit: 'Enintään 2 000 €' },
      { name: 'Matkan peruuntuminen', included: true },
      { name: 'Matkan keskeytyminen', included: true },
      { name: 'Matkustajan tapaturmavakuutus', included: true },
      { name: 'Vastuuvakuutus matkalla', included: true, limit: 'Enintään 100 000 €' },
      { name: 'Oikeusturvavakuutus matkalla', included: true },
      { name: 'Myöhästymisturva', included: false },
    ],
    deductibles: [
      { amount: 100, label: '100 € omavastuu' },
      { amount: 200, label: '200 € omavastuu' },
    ],
    highlights: [
      'Jatkuva matkavakuutus — voimassa kaikilla matkoilla',
      'Laaja hoitokuluvakuutus 200 000 € asti',
      'Matkan peruuntumisturva sisältyy',
    ],
    limitations: [
      'Matkan enimmäiskesto yleensä 45 vuorokautta',
      'Extreme-urheilulajit vaativat lisäturvaa',
      'Myöhästymisturvaa ei peruspaketissa',
    ],
    suitableFor: ['Säännöllisesti matkustavat', 'Perheet', 'EU-alueella matkustavat'],
    lastVerified: '2026-03-15',
  },
  // Pet - Dog
  {
    id: 'pohjola-pet-dog',
    providerId: 'pohjola',
    type: 'pet',
    name: 'Pohjola Koiravakuutus',
    tier: 'standard',
    priceRange: { min: 25, max: 65, unit: 'eur/month', note: 'Hinta riippuu rodusta ja koiran iästä' },
    coverage: [
      { name: 'Eläinlääkärikulut (sairaus)', included: true, limit: 'Enintään 5 000 €/vuosi' },
      { name: 'Eläinlääkärikulut (tapaturma)', included: true, limit: 'Enintään 5 000 €/vuosi' },
      { name: 'Henkivakuutus (koiran kuolema)', included: true, description: 'Korvaa koiran hankintahinnan' },
      { name: 'Vastuuvakuutus', included: true, limit: 'Enintään 100 000 €' },
      { name: 'Kadonneen koiran etsintä', included: false },
      { name: 'Fysioterapia', included: false },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu / hoitokerta' },
      { amount: 200, label: '200 € omavastuu / hoitokerta' },
    ],
    highlights: [
      'Laaja eläinlääkärikulujen korvaus',
      'Vastuuvakuutus — korvaa koiran aiheuttamat vahingot',
      'Henkivakuutus koiran kuoleman varalta',
    ],
    limitations: [
      'Olemassa olevat sairaudet eivät kuulu korvauksen piiriin',
      'Ikärajoitukset: vakuutettava ennen 8 vuoden ikää',
      'Rotukohtaiset rajoitukset ja hinnanvaihtelut',
    ],
    suitableFor: ['Koiranomistajat', 'Pentujen omistajat', 'Aktiivisesti koiran kanssa liikkuvat'],
    lastVerified: '2026-03-15',
  },
  // Life
  {
    id: 'pohjola-life-standard',
    providerId: 'pohjola',
    type: 'life',
    name: 'OP Henkivakuutus',
    tier: 'standard',
    priceRange: { min: 8, max: 45, unit: 'eur/month', note: 'Riippuu iästä, terveydentilasta ja korvaussummasta' },
    coverage: [
      { name: 'Kuolemantapauskorvaus', included: true, limit: '50 000 – 500 000 €' },
      { name: 'Pysyvä työkyvyttömyys', included: true },
      { name: 'Vakava sairaus -turva', included: false, description: 'Saatavilla lisäturvana' },
      { name: 'Tapaturmainen kuolema (korotettu korvaus)', included: false },
    ],
    deductibles: [],
    highlights: [
      'Turvaa perheen talouden kuolemantapauksen varalta',
      'Joustava korvaussumma 50 000 – 500 000 €',
      'Pysyvän työkyvyttömyyden turva sisältyy',
    ],
    limitations: [
      'Terveysselvitys vaaditaan',
      'Ikärajoitus: yleensä enintään 65-vuotiaalle',
      'Vakavan sairauden turva lisämaksullinen',
    ],
    suitableFor: ['Perheelliset', 'Asuntolainaa omaavat', 'Yrittäjät'],
    lastVerified: '2026-03-15',
  },
  // Accident
  {
    id: 'pohjola-accident-standard',
    providerId: 'pohjola',
    type: 'accident',
    name: 'Pohjola Tapaturmavakuutus',
    tier: 'standard',
    priceRange: { min: 60, max: 220, unit: 'eur/year', note: 'Aikuisen vakuutus' },
    coverage: [
      { name: 'Tapaturman hoitokulut', included: true, limit: 'Enintään 10 000 €' },
      { name: 'Pysyvä haitta', included: true, limit: 'Enintään 50 000 €' },
      { name: 'Tapaturmainen kuolema', included: true, limit: 'Enintään 20 000 €' },
      { name: 'Hammashoito (tapaturma)', included: true },
      { name: 'Päiväraha', included: false },
    ],
    deductibles: [
      { amount: 0, label: 'Ei omavastuuta' },
    ],
    highlights: [
      'Ei omavastuuta tapaturmien hoitokuluissa',
      'Pysyvän haitan korvaus jopa 50 000 €',
      'Hammashoito tapaturmatilanteissa',
    ],
    limitations: [
      'Korvaa vain tapaturmia — ei sairauksia',
      'Ammattiurheilu yleensä rajattu pois',
      'Päiväraha ei sisälly perusturvaan',
    ],
    suitableFor: ['Aktiiviset harrastajat', 'Lapsiperheet', 'Ulkoilua ja urheilua harrastavat'],
    lastVerified: '2026-03-15',
  },
  // Child
  {
    id: 'pohjola-child-standard',
    providerId: 'pohjola',
    type: 'child',
    name: 'Pohjola Lapsivakuutus',
    tier: 'standard',
    priceRange: { min: 12, max: 30, unit: 'eur/month', note: 'Lapsen ikä vaikuttaa hintaan' },
    coverage: [
      { name: 'Tapaturman hoitokulut', included: true, limit: 'Enintään 15 000 €' },
      { name: 'Sairauden hoitokulut', included: true, limit: 'Enintään 10 000 €' },
      { name: 'Pysyvä haitta (tapaturma)', included: true, limit: 'Enintään 60 000 €' },
      { name: 'Pysyvä haitta (sairaus)', included: true, limit: 'Enintään 30 000 €' },
      { name: 'Fysioterapia', included: true },
      { name: 'Psykoterapia', included: false },
    ],
    deductibles: [
      { amount: 0, label: 'Ei omavastuuta tapaturmissa' },
      { amount: 100, label: '100 € omavastuu sairauksissa' },
    ],
    highlights: [
      'Kattava turva sekä tapaturmien että sairauksien varalta',
      'Ei omavastuuta tapaturmissa — tärkeää leikki-ikäisille',
      'Fysioterapia sisältyy',
    ],
    limitations: [
      'Synnynnäiset sairaudet eivät kuulu korvauksen piiriin',
      'Psykoterapia vain lisäturvana',
      'Hoitokulujen korvauskatot kohtalaisen matalat',
    ],
    suitableFor: ['Vauvaperheet', 'Leikki-ikäisten vanhemmat', 'Kouluikäisten vanhemmat'],
    lastVerified: '2026-03-15',
  },
];

pohjola.products = pohjolaProducts;

// ============================================================
// Provider 2: LähiTapiola (26.4% market share)
// ============================================================

const lahitapiola: InsuranceProvider = {
  id: 'lahitapiola',
  slug: 'lahitapiola',
  name: 'LähiTapiola',
  shortName: 'LähiTapiola',
  founded: 2012,
  ownership: 'Keskinäinen vakuutusyhtiöryhmä (20 alueyhtiötä)',
  marketShare: 25.8,
  size: 'large',
  headquarters: 'Espoo',
  employeeCount: '~3 400',
  customerCount: '1,6 miljoonaa asiakasta',
  website: 'https://www.lahitapiola.fi',
  description:
    'Suomen toiseksi suurin vakuutusryhmä, joka koostuu 20 alueyhtiöstä. Erityisen vahva maaseudulla ja pienissä kaupungeissa. Tarjoaa laajan valikoiman vakuutuksia henkilö-, maatila- ja yritysasiakkaille.',
  longDescription:
    'LähiTapiola on keskinäinen vakuutusyhtiöryhmä, jossa asiakkaat ovat myös omistajia. Ryhmä koostuu 20 alueyhtiöstä, mikä mahdollistaa paikallisen palvelun ympäri Suomen. LähiTapiola on erityisen vahva maaseudulla ja maatilavakuutuksissa. Yhtiö hankki 70 % POP Vakuutuksen emoyhtiöstä vuonna 2023, mikä vahvisti digitaalista kanavaa. LähiTapiolalla on oma sijoitusyhtiö (LähiTapiola Varainhoito) sekä laaja henkivakuutustarjonta. Alueyhtiörakenne tarkoittaa, että hinnat ja palvelu voivat vaihdella alueen mukaan.',
  logo: '/logos/lahitapiola.svg',
  color: '#00A651',
  satisfaction: 7.9,
  reviewCount: 9870,
  claimProcessRating: 7.8,
  onlineServiceRating: 7.5,
  priceCompetitiveness: 6.8,
  isAffiliate: false,
  products: [],
  strengths: [
    'Vahva paikallinen palvelu 20 alueyhtiön kautta',
    'Paras maatilavakuutustarjonta Suomessa',
    'Keskinäinen yhtiö — asiakkaat ovat omistajia',
    'Hyvin kattava tuotevalikoima',
    'Laaja konttori- ja agenttverkosto, erityisesti maaseudulla',
    'Omistaa enemmistön POP Vakuutuksesta — kaksibrändistrategia',
  ],
  weaknesses: [
    'Digitaaliset palvelut hieman jäljessä kilpailijoista',
    'Hinnat vaihtelevat alueyhtiöittäin — ei aina läpinäkyvää',
    'Verkkoasiointi ei yhtä sujuvaa kuin OP:lla tai If:llä',
    'Alueyhtiörakenne voi aiheuttaa epäselvyyttä asiakkaalle',
  ],
  specialFeatures: [
    'Alueyhtiörakenne — paikallinen päätöksenteko',
    'Eläin- ja metsävakuutusten erikoisosaaminen',
    'Turva & Etu -asiakasohjelma (keskittämisedut)',
    'LähiTapiola Kiinteistönvälitys -yhteistyö',
  ],
  concentrationBenefits:
    'LähiTapiolan Turva & Etu -ohjelma tarjoaa keskittämisalennuksia, joiden suuruus riippuu vakuutusten kokonaismäärästä. Tyypillisesti 5–15 % alennus, kun kaikki vakuutukset ovat LähiTapiolassa. Lisäksi alueyhtiöt voivat tarjota paikallisia etuja.',
  onlineCapabilities: [
    'Vakuutusten osto verkossa (useimmat tuotteet)',
    'Vahinkoilmoitus verkossa',
    'Vakuutuslaskurit',
    'OmaLähiTapiola-asiakasportaali',
    'Mobiilisovellus (iOS & Android)',
  ],
  appAvailable: true,
  insuranceTypes: ['auto', 'home', 'travel', 'pet', 'life', 'accident', 'child'],
  faq: [
    {
      question: 'Miten LähiTapiolan alueyhtiöt vaikuttavat vakuutuksiini?',
      answer:
        'LähiTapiola koostuu 20 alueyhtiöstä, joista kukin toimii omalla alueellaan. Vakuutuksesi hoitaa oman alueesi yhtiö. Hinnat ja palvelukanavat voivat vaihdella hieman alueittain, mutta tuotteet ja ehdot ovat pääosin yhtenäiset.',
    },
    {
      question: 'Mikä on LähiTapiolan Turva & Etu -ohjelma?',
      answer:
        'Turva & Etu on LähiTapiolan keskittämisohjelma, jossa saat alennuksia, kun keskität vakuutuksesi LähiTapiolaan. Mitä enemmän vakuutuksia, sitä suurempi alennus. Ohjelma tarjoaa myös muita etuja, kuten kumppanialennuksia.',
    },
    {
      question: 'Onko LähiTapiola ja POP Vakuutus sama yhtiö?',
      answer:
        'LähiTapiola omistaa enemmistön POP Vakuutuksen emoyhtiöstä (Suomen Vahinkovakuutus Oy), mutta POP toimii itsenäisesti omalla brändillään. POP keskittyy digitaaliseen myyntiin ja edullisiin hintoihin, kun taas LähiTapiola tarjoaa laajempaa palvelua ja konttoriverkoston.',
    },
  ],
};

const lahitapiolaProducts: InsuranceProduct[] = [
  {
    id: 'lahitapiola-auto-liikenne',
    providerId: 'lahitapiola',
    type: 'auto',
    name: 'LähiTapiola Liikennevakuutus',
    tier: 'basic',
    priceRange: { min: 200, max: 600, unit: 'eur/year', note: 'Vakuutusmaksu vaihtelee alueyhtiöittäin' },
    coverage: [
      { name: 'Liikennevakuutus (lakisääteinen)', included: true },
      { name: 'Henkilövahingot', included: true },
      { name: 'Omaisuusvahingot (kolmannelle)', included: true },
      { name: 'Kaskovakuutus', included: false },
      { name: 'Hinauspalvelu', included: false },
    ],
    deductibles: [
      { amount: 500, label: '500 € omavastuu' },
      { amount: 200, label: '200 € omavastuu' },
    ],
    highlights: [
      'Lakisääteinen vakuutus kilpailukykyiseen hintaan',
      'Vahinkoilmoitus verkossa tai puhelimitse',
      'Keskittämisalennus Turva & Etu -ohjelmasta',
    ],
    limitations: [
      'Ei korvaa oman auton vahinkoja',
      'Hinnat vaihtelevat alueyhtiöittäin',
    ],
    suitableFor: ['Budjettitietoiset autoilijat', 'Vanhemman auton omistajat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'lahitapiola-auto-tayskasko',
    providerId: 'lahitapiola',
    type: 'auto',
    name: 'LähiTapiola Täyskasko',
    tier: 'comprehensive',
    priceRange: { min: 600, max: 1700, unit: 'eur/year' },
    coverage: [
      { name: 'Liikennevakuutus', included: true },
      { name: 'Palovahinko', included: true },
      { name: 'Varkausvahinko', included: true },
      { name: 'Lasivakuutus', included: true },
      { name: 'Eläinvahinko', included: true },
      { name: 'Hinauspalvelu', included: true },
      { name: 'Törmäysvahinko', included: true },
      { name: 'Ilkivaltavahinko', included: true },
      { name: 'Tieltä suistuminen', included: true },
      { name: 'Lunastusturva', included: false },
    ],
    deductibles: [
      { amount: 200, label: '200 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
      { amount: 1000, label: '1 000 € omavastuu' },
      { amount: 150, label: '150 € omavastuu (lasi)' },
    ],
    highlights: [
      'Kattava turva kolarivahinkoja vastaan',
      'Vahva alueellinen korvauspalvelu',
      'Eläinvahinkoturva erityisesti maaseutualueilla tärkeä',
    ],
    limitations: [
      'Lunastusturva ei sisälly perusturvaan',
      'Hinnat voivat erota alueyhtiöiden välillä',
    ],
    suitableFor: ['Uudehkojen autojen omistajat', 'Keskittämisedusta hyötyvät'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'lahitapiola-home-standard',
    providerId: 'lahitapiola',
    type: 'home',
    name: 'LähiTapiola Kotivakuutus',
    tier: 'standard',
    priceRange: { min: 110, max: 400, unit: 'eur/year', note: 'Kerrostaloasunto, perusturva' },
    coverage: [
      { name: 'Irtaimistovakuutus', included: true },
      { name: 'Putkivuototurva', included: true },
      { name: 'Paloturva', included: true },
      { name: 'Murtovakuutus', included: true },
      { name: 'Vastuuvakuutus', included: true, limit: 'Enintään 200 000 €' },
      { name: 'Oikeusturvavakuutus', included: true },
      { name: 'Matkatavaraturva', included: true },
      { name: 'Polkupyörävarkaus', included: true, limit: 'Enintään 1 500 €' },
      { name: 'Rikkoutumisturva', included: false },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
      { amount: 300, label: '300 € omavastuu' },
    ],
    highlights: [
      'Polkupyörävarkaus kuuluu jo perusturvaan',
      'Paikallinen korvauspalvelu alueyhtiön kautta',
      'Keskittämisalennus yhdessä muiden vakuutusten kanssa',
    ],
    limitations: [
      'Rikkoutumisturva vain laajemmassa paketissa',
      'Korvauskatot vaihtelevat alueyhtiöittäin',
    ],
    suitableFor: ['Kerrostaloasukkaat', 'Pyöräilijät', 'Paikallista palvelua arvostavat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'lahitapiola-travel-standard',
    providerId: 'lahitapiola',
    type: 'travel',
    name: 'LähiTapiola Matkavakuutus',
    tier: 'standard',
    priceRange: { min: 55, max: 170, unit: 'eur/year', note: 'Jatkuva matkavakuutus' },
    coverage: [
      { name: 'Matkakulut sairauden johdosta', included: true, limit: 'Enintään 200 000 €' },
      { name: 'Matkatavaravakuutus', included: true, limit: 'Enintään 1 500 €' },
      { name: 'Matkan peruuntuminen', included: true },
      { name: 'Matkan keskeytyminen', included: true },
      { name: 'Matkustajan tapaturmavakuutus', included: true },
      { name: 'Vastuuvakuutus matkalla', included: true },
    ],
    deductibles: [
      { amount: 100, label: '100 € omavastuu' },
      { amount: 150, label: '150 € omavastuu' },
    ],
    highlights: [
      'Kattava matkavakuutus kohtuuhintaan',
      'Peruuntumisturva sisältyy',
      'Toimii maailmanlaajuisesti',
    ],
    limitations: [
      'Matkan enimmäiskesto 45 vrk',
      'Rajoitukset riskimaissa',
    ],
    suitableFor: ['Lomamatkaajat', 'Euroopassa matkustavat', 'Perheet'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'lahitapiola-pet-dog',
    providerId: 'lahitapiola',
    type: 'pet',
    name: 'LähiTapiola Koiravakuutus',
    tier: 'standard',
    priceRange: { min: 22, max: 60, unit: 'eur/month', note: 'Riippuu rodusta ja iästä' },
    coverage: [
      { name: 'Eläinlääkärikulut (sairaus)', included: true, limit: 'Enintään 4 000 €/vuosi' },
      { name: 'Eläinlääkärikulut (tapaturma)', included: true, limit: 'Enintään 4 000 €/vuosi' },
      { name: 'Henkivakuutus', included: true },
      { name: 'Vastuuvakuutus', included: true },
      { name: 'Fysioterapia', included: true, limit: 'Enintään 500 €/vuosi' },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
      { amount: 200, label: '200 € omavastuu' },
    ],
    highlights: [
      'Fysioterapia sisältyy — harvinaista markkinoilla',
      'Kattava eläinlääkärikulujen korvaus',
      'Maatilojen eläimille myös erikoistuotteet',
    ],
    limitations: [
      'Korvauskatot hieman matalammat kuin kilpailijoilla',
      'Vanhemmilla koirilla korkeammat hinnat',
    ],
    suitableFor: ['Koiranomistajat', 'Maaseudun eläinten omistajat', 'Fysioterapiaa tarvitsevat koirat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'lahitapiola-life-standard',
    providerId: 'lahitapiola',
    type: 'life',
    name: 'LähiTapiola Henkivakuutus',
    tier: 'standard',
    priceRange: { min: 7, max: 40, unit: 'eur/month', note: 'Riippuu iästä ja korvaussummasta' },
    coverage: [
      { name: 'Kuolemantapauskorvaus', included: true, limit: '50 000 – 400 000 €' },
      { name: 'Pysyvä työkyvyttömyys', included: true },
      { name: 'Vakava sairaus', included: false },
    ],
    deductibles: [],
    highlights: [
      'Joustava korvaussumma',
      'Keskittämisetu muiden vakuutusten kanssa',
      'Paikallisen asiantuntijan neuvonta',
    ],
    limitations: [
      'Terveysselvitys vaaditaan',
      'Vakavan sairauden turva lisämaksullinen',
    ],
    suitableFor: ['Perheelliset', 'Asuntolainan ottajat'],
    lastVerified: '2026-03-15',
  },
];

lahitapiola.products = lahitapiolaProducts;

// ============================================================
// Provider 3: If (21.1% market share)
// ============================================================

const ifInsurance: InsuranceProvider = {
  id: 'if',
  slug: 'if',
  name: 'If Vahinkovakuutus',
  shortName: 'If',
  founded: 1999,
  ownership: 'Sampo Oyj (pörssiyhtiö)',
  marketShare: 21.1,
  size: 'large',
  headquarters: 'Espoo (Pohjoismainen pääkonttori: Tukholma)',
  employeeCount: '~8 000 (Pohjoismaat), ~2 000 (Suomi)',
  customerCount: '3,9 miljoonaa asiakasta (Pohjoismaat)',
  website: 'https://www.if.fi',
  description:
    'Pohjoismaiden suurin vahinkovakuuttaja ja Suomen kolmanneksi suurin. Tunnetaan luotettavasta brändistä, kilpailukykyisistä hinnoista ja erinomaisesta digitaalisesta käyttökokemuksesta.',
  longDescription:
    'If on osa Sampo-konsernia ja Pohjoismaiden suurin vahinkovakuutusyhtiö. Suomessa If on kolmanneksi suurin noin 21 % markkinaosuudella. If tunnetaan erityisesti kilpailukykyisistä hinnoistaan nuorille kuljettajille ja digitaalisesta edelläkävijyydestään. Yhtiö on palkittu useissa kuluttajatesteissä "testivoittajana". If:n vahvuutena on pohjoismainen mittakaava, joka mahdollistaa tehokkaan riskien hallinnan ja kilpailukykyisen hinnoittelun. Korvauspalvelu on saanut erinomaisia arvioita — erityisesti nopeus ja asiakaslähtöisyys.',
  logo: '/logos/if.svg',
  color: '#0054A6',
  satisfaction: 8.2,
  reviewCount: 11200,
  claimProcessRating: 8.5,
  onlineServiceRating: 8.8,
  priceCompetitiveness: 7.5,
  isAffiliate: false,
  products: [],
  strengths: [
    'Erinomainen digitaalinen käyttökokemus — markkinoiden paras verkkopalvelu',
    'Kilpailukykyiset hinnat erityisesti nuorille kuljettajille',
    'Pohjoismainen mittakaava tuo tehokkuusetuja',
    'Testivoittaja useissa kuluttajavertailuissa',
    'Nopea ja arvostettu korvauspalvelu',
    'Vahva brändi ja luottamus',
  ],
  weaknesses: [
    'Ei konttoriverkostoa — kaikki palvelu puhelimitse ja verkossa',
    'Keskittämisedut maltillisempia kuin OP:lla',
    'Ei osuuskuntarakennetta — ei omistajabonusta',
    'Maaseudulla heikompi tunnettavuus kuin LähiTapiolalla',
  ],
  specialFeatures: [
    'If Koti — kodin kokonaispalvelu putkimies-, sähkö- ja kodinhoitopalveluineen',
    'Etuohjelma If:n asiakkaille (kumppanialennukset)',
    'Pohjoismainen korvauspalvelu — toimii myös Ruotsissa, Norjassa ja Tanskassa',
    'Digitaalinen ensivahingon arvio (tekoäly)',
  ],
  concentrationBenefits:
    'If:n Kotiturva-alennus: kun keskität vähintään 3 vakuutusta If:lle, saat 10–15 % alennuksen. Lisäksi S-etukorttiin liitetty yhteistyö voi tuoda lisäetuja. Keskittämisetu ei ole yhtä aggressiivinen kuin OP:n bonus, mutta hintataso on lähtökohtaisesti kilpailukykyisempi.',
  onlineCapabilities: [
    'Kaikkien vakuutusten osto verkossa',
    'Vahinkoilmoitus verkossa ja sovelluksessa',
    'Kattavat vakuutuslaskurit',
    'Digitaalinen asiakasportaali',
    'If-mobiilisovellus (iOS & Android)',
    'Chat-palvelu ja chatbot',
    'Videotapaaminen asiantuntijan kanssa',
  ],
  appAvailable: true,
  insuranceTypes: ['auto', 'home', 'travel', 'pet', 'life', 'accident', 'child'],
  faq: [
    {
      question: 'Onko If halvempi kuin OP tai LähiTapiola?',
      answer:
        'If:n perushinnat ovat usein kilpailukykyisiä, erityisesti nuorille kuljettajille ja kaupunkilaisille. Ilman OP-bonusta tai LähiTapiolan keskittämisetua If voi olla edullisin vaihtoehto. Suosittelemme aina vertailemaan todellisia hintoja oman tilanteesi mukaan.',
    },
    {
      question: 'Miten If:n korvauspalvelu toimii?',
      answer:
        'If:n korvauspalvelu on arvioitu markkinoiden parhaaksi. Vahinkoilmoituksen voi tehdä verkossa, sovelluksessa tai puhelimitse. Yksinkertaiset vahingot käsitellään usein saman päivän aikana. If käyttää tekoälyä vahinkoarvioinnissa, mikä nopeuttaa prosessia.',
    },
    {
      question: 'Voiko If:ltä saada palvelua kasvotusten?',
      answer:
        'If:llä ei ole perinteistä konttoriverkostoa Suomessa. Palvelu toimii puhelimitse, verkossa, chatissa ja videotapaamisina. Korvaustilanteissa If:n kumppanikorjaamot tarjoavat lähipalvelua.',
    },
  ],
};

const ifProducts: InsuranceProduct[] = [
  {
    id: 'if-auto-liikenne',
    providerId: 'if',
    type: 'auto',
    name: 'If Liikennevakuutus',
    tier: 'basic',
    priceRange: { min: 190, max: 580, unit: 'eur/year', note: 'Usein markkinoiden edullisimpia, erityisesti nuorille' },
    coverage: [
      { name: 'Liikennevakuutus (lakisääteinen)', included: true },
      { name: 'Henkilövahingot', included: true },
      { name: 'Omaisuusvahingot (kolmannelle)', included: true },
      { name: 'Kaskovakuutus', included: false },
    ],
    deductibles: [
      { amount: 500, label: '500 € omavastuu' },
      { amount: 200, label: '200 € omavastuu' },
    ],
    highlights: [
      'Kilpailukykyinen hinnoittelu kaikissa ikäluokissa',
      'Erityisen edullinen nuorille kuljettajille',
      'Nopea verkko-ostoprosessi',
    ],
    limitations: [
      'Ei oman auton turvaa',
    ],
    suitableFor: ['Nuoret kuljettajat', 'Hintaherkät autoilijat', 'Vanhempien autojen omistajat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'if-auto-osakasko',
    providerId: 'if',
    type: 'auto',
    name: 'If Osakasko',
    tier: 'standard',
    priceRange: { min: 350, max: 800, unit: 'eur/year' },
    coverage: [
      { name: 'Liikennevakuutus', included: true },
      { name: 'Palovahinko', included: true },
      { name: 'Varkausvahinko', included: true },
      { name: 'Lasivakuutus', included: true },
      { name: 'Eläinvahinko', included: true },
      { name: 'Hinauspalvelu', included: true },
      { name: 'Törmäysvahinko', included: false },
      { name: 'Ilkivaltavahinko', included: false },
    ],
    deductibles: [
      { amount: 200, label: '200 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
      { amount: 150, label: '150 € omavastuu (lasi)' },
    ],
    highlights: [
      'Hyvä hinta-laatusuhde',
      'Hinauspalvelu sisältyy',
      'Nopea vahinkoilmoitus If-sovelluksessa',
    ],
    limitations: [
      'Ei kolarivahinkoja',
      'Ei ilkivaltaturvaa',
    ],
    suitableFor: ['5–15-vuotiaat autot', 'Kohtuullista turvaa hakevat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'if-auto-tayskasko',
    providerId: 'if',
    type: 'auto',
    name: 'If Täyskasko',
    tier: 'comprehensive',
    priceRange: { min: 580, max: 1650, unit: 'eur/year' },
    coverage: [
      { name: 'Liikennevakuutus', included: true },
      { name: 'Palovahinko', included: true },
      { name: 'Varkausvahinko', included: true },
      { name: 'Lasivakuutus', included: true },
      { name: 'Eläinvahinko', included: true },
      { name: 'Hinauspalvelu', included: true, limit: 'Rajaton Suomessa' },
      { name: 'Törmäysvahinko', included: true },
      { name: 'Ilkivaltavahinko', included: true },
      { name: 'Tieltä suistuminen', included: true },
      { name: 'Lunastusturva', included: false },
      { name: 'Keskeytysturva', included: false },
    ],
    deductibles: [
      { amount: 200, label: '200 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
      { amount: 1000, label: '1 000 € omavastuu' },
      { amount: 150, label: '150 € omavastuu (lasi)' },
    ],
    highlights: [
      'Testivoittaja — useissa kuluttajavertailuissa paras',
      'Rajaton hinauspalvelu Suomessa',
      'Nopea korvausten käsittely (usein saman päivän aikana)',
      'Digitaalinen vahinkoarvio tekoälyllä',
    ],
    limitations: [
      'Lunastusturva ja keskeytysturva lisämaksullisia',
      'Ei konttoripalvelua',
    ],
    suitableFor: ['Uudehkojen autojen omistajat', 'Digitaalista palvelua arvostavat', 'Nuoret perheet'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'if-auto-premium',
    providerId: 'if',
    type: 'auto',
    name: 'If Superkasko',
    tier: 'premium',
    priceRange: { min: 850, max: 2400, unit: 'eur/year' },
    coverage: [
      { name: 'Liikennevakuutus', included: true },
      { name: 'Palovahinko', included: true },
      { name: 'Varkausvahinko', included: true },
      { name: 'Lasivakuutus', included: true, limit: 'Ei omavastuuta' },
      { name: 'Eläinvahinko', included: true },
      { name: 'Hinauspalvelu', included: true, limit: 'Rajaton Pohjoismaissa' },
      { name: 'Törmäysvahinko', included: true },
      { name: 'Ilkivaltavahinko', included: true },
      { name: 'Tieltä suistuminen', included: true },
      { name: 'Lunastusturva', included: true },
      { name: 'Keskeytysturva', included: true, description: 'Sijaisauto jopa 30 päiväksi' },
      { name: 'Autopalveluvakuutus', included: true },
      { name: 'Pysäköintivakuutus', included: true, description: 'Pysäköintialueella syntyneet vahingot' },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
      { amount: 200, label: '200 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
      { amount: 0, label: '0 € omavastuu (lasi)' },
    ],
    highlights: [
      'If:n kattavin autoturva — sisältää kaiken',
      'Sijaisauto jopa 30 päiväksi korjauksen ajaksi',
      'Pysäköintivakuutus — ainutlaatuinen markkinoilla',
      'Lasivahinko ilman omavastuuta',
      'Hinauspalvelu kaikissa Pohjoismaissa',
    ],
    limitations: [
      'Markkinoiden kalleimpia vaihtoehtoja',
      'Lunastusturva rajattu 3 vuoteen käyttöönotosta',
    ],
    suitableFor: ['Uusien premium-autojen omistajat', 'Paljon ajavat', 'Maksimaalista turvaa haluavat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'if-home-standard',
    providerId: 'if',
    type: 'home',
    name: 'If Kotivakuutus',
    tier: 'standard',
    priceRange: { min: 100, max: 380, unit: 'eur/year', note: 'Kerrostaloasunto' },
    coverage: [
      { name: 'Irtaimistovakuutus', included: true },
      { name: 'Putkivuototurva', included: true },
      { name: 'Paloturva', included: true },
      { name: 'Murtovakuutus', included: true },
      { name: 'Vastuuvakuutus', included: true, limit: 'Enintään 300 000 €' },
      { name: 'Oikeusturvavakuutus', included: true, limit: 'Enintään 10 000 €' },
      { name: 'Matkatavaraturva', included: true },
      { name: 'Polkupyörävarkaus', included: true, limit: 'Enintään 2 000 €' },
      { name: 'Rikkoutumisturva', included: true, description: 'Kodinkoneiden ja elektroniikan rikkoutuminen' },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
      { amount: 300, label: '300 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
    ],
    highlights: [
      'Rikkoutumisturva sisältyy jo perusturvaan — harvinaista markkinoilla',
      'Polkupyörävarkaus 2 000 € asti',
      'If Koti -kodinhoitopalvelu saatavilla',
      'Vastuuvakuutus 300 000 € asti',
    ],
    limitations: [
      'Arvotavaroiden yksittäiskorvausraja voi olla matala',
    ],
    suitableFor: ['Kerrostaloasukkaat', 'Vuokralaiset', 'Kattavaa perusturvaa hakevat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'if-home-premium',
    providerId: 'if',
    type: 'home',
    name: 'If Laaja Kotivakuutus',
    tier: 'premium',
    priceRange: { min: 280, max: 780, unit: 'eur/year', note: 'Omakotitalo tai laaja turva' },
    coverage: [
      { name: 'Irtaimistovakuutus', included: true, limit: 'Korotetut katot' },
      { name: 'Putkivuototurva', included: true },
      { name: 'Paloturva', included: true },
      { name: 'Murtovakuutus', included: true },
      { name: 'Vastuuvakuutus', included: true, limit: 'Enintään 500 000 €' },
      { name: 'Oikeusturvavakuutus', included: true, limit: 'Enintään 15 000 €' },
      { name: 'Matkatavaraturva', included: true },
      { name: 'Polkupyörävarkaus', included: true, limit: 'Enintään 5 000 €' },
      { name: 'Rikkoutumisturva', included: true },
      { name: 'Luonnonilmiöturva', included: true },
      { name: 'Rakennuksen vakuutus', included: true },
      { name: 'Viherkasvivakuutus', included: true, description: 'Pihan puut ja istutukset' },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
      { amount: 300, label: '300 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
    ],
    highlights: [
      'Markkinoiden kattavimpia kotivakuutuksia',
      'Polkupyörävarkaus 5 000 € asti — riittää sähköpyöräänkin',
      'Luonnonilmiöturva myrskyvahinkoja vastaan',
      'If Koti -kodinhoitopalvelu sisältyy',
    ],
    limitations: [
      'Kallis vaihtoehto erityisesti omakotitaloille',
    ],
    suitableFor: ['Omakotitalon omistajat', 'Sähköpyörien omistajat', 'Maksimaalista turvaa haluavat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'if-travel-standard',
    providerId: 'if',
    type: 'travel',
    name: 'If Matkavakuutus',
    tier: 'standard',
    priceRange: { min: 50, max: 160, unit: 'eur/year' },
    coverage: [
      { name: 'Matkakulut sairauden johdosta', included: true, limit: 'Enintään 250 000 €' },
      { name: 'Matkatavaravakuutus', included: true, limit: 'Enintään 2 500 €' },
      { name: 'Matkan peruuntuminen', included: true, limit: 'Enintään 4 000 €' },
      { name: 'Matkan keskeytyminen', included: true },
      { name: 'Matkustajan tapaturmavakuutus', included: true },
      { name: 'Myöhästymisturva', included: true, limit: 'Enintään 300 €' },
    ],
    deductibles: [
      { amount: 100, label: '100 € omavastuu' },
      { amount: 150, label: '150 € omavastuu' },
    ],
    highlights: [
      'Markkinoiden suurin hoitokulukatto: 250 000 €',
      'Myöhästymisturva sisältyy — harvinaista perustasolla',
      'Matkatavaroille korotettu 2 500 € katto',
    ],
    limitations: [
      'Matkan kesto enintään 45 vrk',
      'Riskiurheilulajit vaativat lisäturvaa',
    ],
    suitableFor: ['Aktiiviset matkaajat', 'Eurooppaan matkustavat', 'Kattavaa turvaa arvostavat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'if-pet-dog',
    providerId: 'if',
    type: 'pet',
    name: 'If Koiravakuutus',
    tier: 'standard',
    priceRange: { min: 20, max: 55, unit: 'eur/month' },
    coverage: [
      { name: 'Eläinlääkärikulut (sairaus)', included: true, limit: 'Enintään 6 000 €/vuosi' },
      { name: 'Eläinlääkärikulut (tapaturma)', included: true, limit: 'Enintään 6 000 €/vuosi' },
      { name: 'Henkivakuutus', included: true },
      { name: 'Vastuuvakuutus', included: true },
      { name: 'Kadonneen koiran etsintä', included: true, limit: 'Enintään 500 €' },
    ],
    deductibles: [
      { amount: 100, label: '100 € omavastuu' },
      { amount: 200, label: '200 € omavastuu' },
    ],
    highlights: [
      'Markkinoiden suurimmat korvauskatot: 6 000 €/vuosi',
      'Kadonneen koiran etsintäkulut korvataan',
      'Edulliset kuukausihinnat pienille koirille',
    ],
    limitations: [
      'Rotukohtaiset rajoitukset',
      'Ikärajat: vakuutettava alle 8-vuotiaana',
    ],
    suitableFor: ['Koiranomistajat', 'Pennun hankkijat', 'Suurten koirien omistajat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'if-child-standard',
    providerId: 'if',
    type: 'child',
    name: 'If Lapsivakuutus',
    tier: 'standard',
    priceRange: { min: 10, max: 28, unit: 'eur/month' },
    coverage: [
      { name: 'Tapaturman hoitokulut', included: true, limit: 'Enintään 20 000 €' },
      { name: 'Sairauden hoitokulut', included: true, limit: 'Enintään 15 000 €' },
      { name: 'Pysyvä haitta (tapaturma)', included: true, limit: 'Enintään 80 000 €' },
      { name: 'Pysyvä haitta (sairaus)', included: true, limit: 'Enintään 40 000 €' },
      { name: 'Fysioterapia', included: true },
      { name: 'Psykoterapia', included: true, limit: 'Enintään 1 500 €' },
    ],
    deductibles: [
      { amount: 0, label: 'Ei omavastuuta tapaturmissa' },
      { amount: 100, label: '100 € omavastuu sairauksissa' },
    ],
    highlights: [
      'Markkinoiden kattavimpia lapsivakuutuksia',
      'Psykoterapia sisältyy — tärkeää nykyaikana',
      'Korkeat korvauskatot',
      'Ei omavastuuta tapaturmissa',
    ],
    limitations: [
      'Synnynnäiset sairaudet rajattu',
      'Vakuutettava ennen 18 vuoden ikää',
    ],
    suitableFor: ['Vauvaperheet', 'Urheilevat lapset', 'Laaja turva -hakuiset vanhemmat'],
    lastVerified: '2026-03-15',
  },
];

ifInsurance.products = ifProducts;

// ============================================================
// Provider 4: Fennia (9.9% market share)
// ============================================================

const fennia: InsuranceProvider = {
  id: 'fennia',
  slug: 'fennia',
  name: 'Keskinäinen Vakuutusyhtiö Fennia',
  shortName: 'Fennia',
  founded: 1882,
  ownership: 'Keskinäinen vakuutusyhtiö (vakuutuksenottajat omistavat)',
  marketShare: 9.9,
  size: 'medium',
  headquarters: 'Helsinki',
  employeeCount: '~1 100',
  customerCount: 'Noin 400 000 asiakasta',
  website: 'https://www.fennia.fi',
  description:
    'Suomen neljänneksi suurin vahinkovakuuttaja, joka on erityisen vahva pk-yritysten vakuuttamisessa. Keskinäisenä yhtiönä asiakkaat ovat omistajia. Tarjoaa kilpailukykyiset henkilövakuutukset.',
  longDescription:
    'Fennia on vuonna 1882 perustettu keskinäinen vakuutusyhtiö, joka on erityisen tunnettu pk-yritysten ja yrittäjien vakuuttajana. Henkilöasiakkaille Fennia tarjoaa kilpailukykyisen valikoiman auto-, koti-, matka- ja lemmikkivakuutuksia. Fennian digitaaliset työkalut, erityisesti autovakuutuslaskuri, ovat saaneet hyvää palautetta käytettävyydestään. Fennian omistajuusrakenne keskinäisenä yhtiönä tarkoittaa, että voitot palautuvat asiakkaille etuina ja kilpailukykyisinä hintoina. Fennia-konserniin kuuluu myös Fennia-Henkivakuutus ja Fennia Varainhoito.',
  logo: '/logos/fennia.svg',
  color: '#E30613',
  satisfaction: 7.6,
  reviewCount: 5620,
  claimProcessRating: 7.3,
  onlineServiceRating: 7.8,
  priceCompetitiveness: 7.2,
  isAffiliate: false,
  products: [],
  strengths: [
    'Kilpailukykyinen hinnoittelu henkilövakuutuksissa',
    'Erinomainen autovakuutuslaskuri verkossa',
    'Keskinäinen yhtiö — asiakkaat ovat omistajia',
    'Vahva pk-yritysvakuuttamisen osaaminen',
    'Hyvä hinta-laatusuhde',
  ],
  weaknesses: [
    'Pienempi markkinaosuus — tunnettavuus heikompi',
    'Suppeampi konttoriverkosto kuin OP:lla tai LähiTapiolalla',
    'Ei yhtä laajoja keskittämisetuja kuin isoilla kilpailijoilla',
    'Digitaaliset palvelut hyvät mutta eivät markkinoiden parhaat',
  ],
  specialFeatures: [
    'Yrittäjäpaketti — henkilö- ja yritysvakuutukset samasta paikasta',
    'Fennian yhteisöbonus — keskinäisen yhtiön voitonjako asiakkaille',
    'Hyvä autovakuutuslaskuri helppoon vertailuun',
  ],
  concentrationBenefits:
    'Fennia tarjoaa keskittämisalennuksen, jonka suuruus kasvaa vakuutusten määrän mukaan. Tyypillinen alennus on 5–12 %. Lisäksi Fennia jakaa ylijäämää asiakkailleen yhteisöbonuksena keskinäisenä yhtiönä.',
  onlineCapabilities: [
    'Vakuutusten osto verkossa',
    'Autovakuutuslaskuri',
    'Vahinkoilmoitus verkossa',
    'OmaFennia-asiakasportaali',
    'Mobiilisovellus',
  ],
  appAvailable: true,
  insuranceTypes: ['auto', 'home', 'travel', 'pet', 'life', 'accident', 'child'],
  faq: [
    {
      question: 'Mikä on Fennian yhteisöbonus?',
      answer:
        'Fennia on keskinäinen vakuutusyhtiö, joka voi jakaa ylijäämää asiakkailleen yhteisöbonuksena. Tämä on käytännössä alennusta vakuutusmaksuista, jonka suuruus riippuu yhtiön tuloksesta. Viime vuosina yhteisöbonus on ollut noin 3–5 % vakuutusmaksuista.',
    },
    {
      question: 'Sopiiko Fennia yrittäjälle?',
      answer:
        'Fennia on erityisen vahva pk-yritysten ja yrittäjien vakuuttajana. Voit hoitaa sekä henkilökohtaiset vakuutukset että yritysvakuutukset samasta paikasta. Yrittäjäpaketit ovat kilpailukykyisiä.',
    },
  ],
};

const fenniaProducts: InsuranceProduct[] = [
  {
    id: 'fennia-auto-liikenne',
    providerId: 'fennia',
    type: 'auto',
    name: 'Fennia Liikennevakuutus',
    tier: 'basic',
    priceRange: { min: 195, max: 570, unit: 'eur/year' },
    coverage: [
      { name: 'Liikennevakuutus (lakisääteinen)', included: true },
      { name: 'Henkilövahingot', included: true },
      { name: 'Omaisuusvahingot (kolmannelle)', included: true },
    ],
    deductibles: [
      { amount: 500, label: '500 € omavastuu' },
      { amount: 200, label: '200 € omavastuu' },
    ],
    highlights: [
      'Usein edullisempi kuin OP tai LähiTapiola',
      'Nopea verkko-osto Fennian laskurissa',
      'Yhteisöbonus alentaa hintaa',
    ],
    limitations: [
      'Pienempi korjaamoverkosto kuin isoilla yhtiöillä',
    ],
    suitableFor: ['Hintavertailijat', 'Yrittäjät (samasta paikasta yritysvakuutuksetkin)'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'fennia-auto-tayskasko',
    providerId: 'fennia',
    type: 'auto',
    name: 'Fennia Täyskasko',
    tier: 'comprehensive',
    priceRange: { min: 560, max: 1550, unit: 'eur/year' },
    coverage: [
      { name: 'Liikennevakuutus', included: true },
      { name: 'Palovahinko', included: true },
      { name: 'Varkausvahinko', included: true },
      { name: 'Lasivakuutus', included: true },
      { name: 'Eläinvahinko', included: true },
      { name: 'Hinauspalvelu', included: true },
      { name: 'Törmäysvahinko', included: true },
      { name: 'Ilkivaltavahinko', included: true },
      { name: 'Tieltä suistuminen', included: true },
    ],
    deductibles: [
      { amount: 200, label: '200 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
      { amount: 150, label: '150 € omavastuu (lasi)' },
    ],
    highlights: [
      'Kilpailukykyinen hinta suhteessa kattavuuteen',
      'Yhteisöbonus voi alentaa hintaa jopa 5 %',
      'Hyvä autovakuutuslaskuri vertailuun',
    ],
    limitations: [
      'Ei lunastusturvaa peruspaketissa',
      'Korjaamoverkosto pienempi kuin IF:llä tai OP:lla',
    ],
    suitableFor: ['Hyvää hinta-laatusuhdetta hakevat', 'Yrittäjät'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'fennia-home-standard',
    providerId: 'fennia',
    type: 'home',
    name: 'Fennia Kotivakuutus',
    tier: 'standard',
    priceRange: { min: 95, max: 360, unit: 'eur/year' },
    coverage: [
      { name: 'Irtaimistovakuutus', included: true },
      { name: 'Putkivuototurva', included: true },
      { name: 'Paloturva', included: true },
      { name: 'Murtovakuutus', included: true },
      { name: 'Vastuuvakuutus', included: true, limit: 'Enintään 170 000 €' },
      { name: 'Oikeusturvavakuutus', included: true },
      { name: 'Polkupyörävarkaus', included: false },
      { name: 'Rikkoutumisturva', included: false },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
      { amount: 300, label: '300 € omavastuu' },
    ],
    highlights: [
      'Edullinen kotivakuutus perustarpeisiin',
      'Hyvin hinnoiteltu kerrostaloasuntoihin',
      'Selkeät vakuutusehdot',
    ],
    limitations: [
      'Polkupyörävarkaus ei kuulu perusturvaan',
      'Rikkoutumisturva vain laajemmassa paketissa',
      'Vastuuvakuutuksen katto hieman matalampi kuin kilpailijoilla',
    ],
    suitableFor: ['Budjettitietoiset', 'Kerrostaloasukkaat', 'Ensimmäistä kotivakuutusta hakevat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'fennia-pet-dog',
    providerId: 'fennia',
    type: 'pet',
    name: 'Fennia Koiravakuutus',
    tier: 'standard',
    priceRange: { min: 18, max: 50, unit: 'eur/month' },
    coverage: [
      { name: 'Eläinlääkärikulut (sairaus)', included: true, limit: 'Enintään 5 000 €/vuosi' },
      { name: 'Eläinlääkärikulut (tapaturma)', included: true, limit: 'Enintään 5 000 €/vuosi' },
      { name: 'Henkivakuutus', included: true },
      { name: 'Vastuuvakuutus', included: true },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
    ],
    highlights: [
      'Edullinen perusturva lemmikille',
      'Selkeät korvausehdot',
      'Hyvä hinta-laatusuhde',
    ],
    limitations: [
      'Ei sisällä fysioterapiaa',
      'Korvauskatot hieman keskitasoa',
    ],
    suitableFor: ['Budjettitietoiset koiranomistajat', 'Ensimmäisen koiravakuutuksen ottajat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'fennia-travel-standard',
    providerId: 'fennia',
    type: 'travel',
    name: 'Fennia Matkavakuutus',
    tier: 'standard',
    priceRange: { min: 45, max: 140, unit: 'eur/year' },
    coverage: [
      { name: 'Matkakulut sairauden johdosta', included: true, limit: 'Enintään 150 000 €' },
      { name: 'Matkatavaravakuutus', included: true, limit: 'Enintään 1 500 €' },
      { name: 'Matkan peruuntuminen', included: true },
      { name: 'Matkan keskeytyminen', included: true },
      { name: 'Matkustajan tapaturmavakuutus', included: true },
    ],
    deductibles: [
      { amount: 100, label: '100 € omavastuu' },
    ],
    highlights: [
      'Edullinen matkavakuutus',
      'Peruuntumisturva sisältyy',
    ],
    limitations: [
      'Hoitokulukatto matalampi kuin If:llä',
      'Matkatavaroiden katto matala',
    ],
    suitableFor: ['Satunnaiset matkaajat', 'Budjettitietoiset'],
    lastVerified: '2026-03-15',
  },
];

fennia.products = fenniaProducts;

// ============================================================
// Provider 5: Turva (~3-4% market share)
// ============================================================

const turva: InsuranceProvider = {
  id: 'turva',
  slug: 'turva',
  name: 'Keskinäinen Vakuutusyhtiö Turva',
  shortName: 'Turva',
  founded: 1910,
  ownership: 'Keskinäinen vakuutusyhtiö (ammattiliittotaustainen)',
  marketShare: 3.5,
  size: 'medium',
  headquarters: 'Tampere',
  employeeCount: '~300',
  customerCount: 'Noin 200 000 asiakasta',
  website: 'https://www.turva.fi',
  description:
    'Ammattiliittotaustainen keskinäinen vakuutusyhtiö, joka tunnetaan asiakastyytyväisyydestään ja reilusta hinnoittelusta. Jatkuvasti Suomen tyytyväisimpien vakuutusyhtiöiden joukossa.',
  longDescription:
    'Turva on vuonna 1910 perustettu keskinäinen vakuutusyhtiö, joka on historiallisesti liittynyt suomalaiseen ammattiliikkeeseen. Turva on tunnettu reilusta asiakaspalvelusta ja läpinäkyvästä hinnoittelusta. Yhtiö on pienestä koostaan huolimatta jatkuvasti Suomen asiakastyytyväisimpien vakuuttajien joukossa — usein top 3:ssa. Turva tarjoaa keskeiset henkilövakuutukset kilpailukykyiseen hintaan ja panostaa erityisesti korvausten sujuvuuteen. Turvan filosofia on, että vakuuttamisen tulee olla reilua ja asiakaslähtöistä.',
  logo: '/logos/turva.svg',
  color: '#009639',
  satisfaction: 8.6,
  reviewCount: 3450,
  claimProcessRating: 8.8,
  onlineServiceRating: 7.2,
  priceCompetitiveness: 7.8,
  isAffiliate: false,
  products: [],
  strengths: [
    'Erinomainen asiakastyytyväisyys — jatkuvasti top 3',
    'Reilu ja läpinäkyvä hinnoittelu',
    'Sujuva korvauspalvelu — yksi markkinoiden parhaista',
    'Ammattiliittojäsenille erityisalennuksia',
    'Kilpailukykyiset hinnat keskikokoisissa vakuutuksissa',
  ],
  weaknesses: [
    'Suppea tuotevalikoima — ei lemmikkivakuutusta',
    'Pieni konttoriverkosto',
    'Digitaaliset palvelut kehittyvät hitaammin',
    'Tunnettavuus heikompi kuin kolmella suurimmalla',
  ],
  specialFeatures: [
    'Ammattiliittoalennukset (SAK:n jäsenliitoille)',
    'Asiakashyvitys keskinäisenä yhtiönä',
    'Poikkeuksellisen henkilökohtainen palvelu',
  ],
  concentrationBenefits:
    'Turva tarjoaa 5–10 % keskittämisalennuksen. Ammattiliittojen jäsenet saavat lisäksi liiton neuvotteleman erityisalennuksen, joka voi olla 5–15 % tuotteesta riippuen.',
  onlineCapabilities: [
    'Vakuutusten osto verkossa (perustuotteet)',
    'Vahinkoilmoitus verkossa',
    'Vakuutuslaskuri autolle',
    'OmaTurva-asiakasportaali',
  ],
  appAvailable: false,
  insuranceTypes: ['auto', 'home', 'travel', 'life', 'accident'],
  faq: [
    {
      question: 'Saanko Turvasta alennusta ammattiliiton jäsenenä?',
      answer:
        'Kyllä, monet SAK:n jäsenliitot ovat neuvotelleet jäsenilleen erityisalennuksia Turvan vakuutuksista. Alennus vaihtelee 5–15 % tuotteesta riippuen. Tarkista oman liittosi edut.',
    },
    {
      question: 'Miksi Turva on niin suosittu asiakastyytyväisyydessä?',
      answer:
        'Turva panostaa erityisesti korvausten sujuvuuteen ja henkilökohtaiseen palveluun. Pienenä yhtiönä Turva pystyy tarjoamaan joustavampaa palvelua kuin suuret kilpailijat. Korvaukset maksetaan nopeasti ja ilman turhaa byrokratiaa.',
    },
  ],
};

const turvaProducts: InsuranceProduct[] = [
  {
    id: 'turva-auto-liikenne',
    providerId: 'turva',
    type: 'auto',
    name: 'Turva Liikennevakuutus',
    tier: 'basic',
    priceRange: { min: 185, max: 550, unit: 'eur/year' },
    coverage: [
      { name: 'Liikennevakuutus (lakisääteinen)', included: true },
      { name: 'Henkilövahingot', included: true },
      { name: 'Omaisuusvahingot (kolmannelle)', included: true },
    ],
    deductibles: [
      { amount: 500, label: '500 € omavastuu' },
      { amount: 200, label: '200 € omavastuu' },
    ],
    highlights: [
      'Kilpailukykyinen liikennevakuutus',
      'Ammattiliittoalennus voi laskea hintaa merkittävästi',
      'Yksinkertainen ja selkeä tuote',
    ],
    limitations: [
      'Verkkopalvelu yksinkertaisempi kuin isoilla kilpailijoilla',
    ],
    suitableFor: ['Ammattiliiton jäsenet', 'Hintavertailijat', 'Yksinkertaista vakuutusta hakevat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'turva-auto-tayskasko',
    providerId: 'turva',
    type: 'auto',
    name: 'Turva Täyskasko',
    tier: 'comprehensive',
    priceRange: { min: 520, max: 1450, unit: 'eur/year' },
    coverage: [
      { name: 'Liikennevakuutus', included: true },
      { name: 'Palovahinko', included: true },
      { name: 'Varkausvahinko', included: true },
      { name: 'Lasivakuutus', included: true },
      { name: 'Eläinvahinko', included: true },
      { name: 'Hinauspalvelu', included: true },
      { name: 'Törmäysvahinko', included: true },
      { name: 'Ilkivaltavahinko', included: true },
    ],
    deductibles: [
      { amount: 200, label: '200 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
    ],
    highlights: [
      'Hyvä hinta-laatusuhde',
      'Korvausten käsittely markkinoiden nopeimpia',
      'Reilut vakuutusehdot — vähemmän poikkeuksia',
    ],
    limitations: [
      'Ei niin laajaa lisäturvavalintaa kuin isoilla kilpailijoilla',
    ],
    suitableFor: ['Reilua palvelua arvostavat', 'Ammattiliiton jäsenet'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'turva-home-standard',
    providerId: 'turva',
    type: 'home',
    name: 'Turva Kotivakuutus',
    tier: 'standard',
    priceRange: { min: 90, max: 340, unit: 'eur/year' },
    coverage: [
      { name: 'Irtaimistovakuutus', included: true },
      { name: 'Putkivuototurva', included: true },
      { name: 'Paloturva', included: true },
      { name: 'Murtovakuutus', included: true },
      { name: 'Vastuuvakuutus', included: true },
      { name: 'Oikeusturvavakuutus', included: true },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
      { amount: 300, label: '300 € omavastuu' },
    ],
    highlights: [
      'Edullinen ja reilu kotivakuutus',
      'Selkeät ehdot — vähemmän pieniä poikkeuksia',
      'Korvausten käsittely sujuvaa',
    ],
    limitations: [
      'Suppeampi valikoima lisäturvia',
      'Ei rikkoutumisturvaa perustasossa',
    ],
    suitableFor: ['Yksinkertaista kotivakuutusta hakevat', 'Ammattiliiton jäsenet'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'turva-travel-standard',
    providerId: 'turva',
    type: 'travel',
    name: 'Turva Matkavakuutus',
    tier: 'standard',
    priceRange: { min: 40, max: 130, unit: 'eur/year' },
    coverage: [
      { name: 'Matkakulut sairauden johdosta', included: true, limit: 'Enintään 120 000 €' },
      { name: 'Matkatavaravakuutus', included: true, limit: 'Enintään 1 000 €' },
      { name: 'Matkan peruuntuminen', included: true },
      { name: 'Matkustajan tapaturmavakuutus', included: true },
    ],
    deductibles: [
      { amount: 100, label: '100 € omavastuu' },
    ],
    highlights: [
      'Edullisin matkavakuutus markkinoilla',
      'Peruuntumisturva sisältyy',
    ],
    limitations: [
      'Hoitokulukatto matalampi kuin kilpailijoilla',
      'Matkatavarakatto matala',
    ],
    suitableFor: ['Satunnaisesti matkustavat', 'Budjettimatkailijat'],
    lastVerified: '2026-03-15',
  },
];

turva.products = turvaProducts;

// ============================================================
// Provider 6: Pohjantähti (~2-3% market share)
// ============================================================

const pohjantahti: InsuranceProvider = {
  id: 'pohjantahti',
  slug: 'pohjantahti',
  name: 'Pohjantähti Keskinäinen Vakuutusyhtiö',
  shortName: 'Pohjantähti',
  founded: 1895,
  ownership: 'Keskinäinen vakuutusyhtiö',
  marketShare: 2.5,
  size: 'small',
  headquarters: 'Hämeenlinna',
  employeeCount: '~200',
  customerCount: 'Noin 100 000 asiakasta',
  website: 'https://www.pohjantahti.fi',
  description:
    'Perinteikäs keskinäinen vakuutusyhtiö, joka on erityisen vahva Keski-Suomessa ja Pohjanmaalla. Tunnetaan henkilökohtaisesta palvelusta ja maatilavakuuttamisen osaamisesta.',
  longDescription:
    'Pohjantähti on vuonna 1895 perustettu keskinäinen vakuutusyhtiö, joka toimii erityisesti Keski-Suomessa ja Pohjanmaalla. Yhtiö on tunnettu henkilökohtaisesta palvelusta ja paikallisesta asiantuntemuksesta. Pohjantähdellä on vahva osaaminen maatila- ja metsävakuutuksissa, mutta se tarjoaa myös kattavan valikoiman henkilövakuutuksia. Pienenä yhtiönä Pohjantähti pystyy tarjoamaan joustavaa ja henkilökohtaista palvelua, jota suuret kilpailijat eivät voi tarjota.',
  logo: '/logos/pohjantahti.svg',
  color: '#003399',
  satisfaction: 8.0,
  reviewCount: 1890,
  claimProcessRating: 8.0,
  onlineServiceRating: 6.8,
  priceCompetitiveness: 7.5,
  isAffiliate: false,
  products: [],
  strengths: [
    'Henkilökohtainen palvelu — tunnet vakuutusneuvojasi',
    'Vahva paikallinen läsnäolo Keski-Suomessa ja Pohjanmaalla',
    'Maatila- ja metsävakuutusten erikoisosaaja',
    'Kilpailukykyiset hinnat perustuotteissa',
    'Hyvä asiakastyytyväisyys',
  ],
  weaknesses: [
    'Pieni toiminta-alue — ei valtakunnallinen',
    'Digitaaliset palvelut jäljessä markkinoita',
    'Suppea tuotevalikoima erikoistuotteissa',
    'Tunnettavuus heikko Etelä-Suomessa',
  ],
  specialFeatures: [
    'Paikallinen vakuutusneuvoja joka tuntee alueesi',
    'Maatila- ja metsävakuutusten erikoisosaaminen',
    'Joustava korvauspalvelu',
  ],
  concentrationBenefits:
    'Pohjantähti tarjoaa keskittämisalennuksen, joka on tyypillisesti 5–10 %. Paikallisen palvelun myötä voit neuvotella alennuksista joustavammin kuin isoissa yhtiöissä.',
  onlineCapabilities: [
    'Vakuutusten osto verkossa (rajoitetusti)',
    'Vakuutuslaskuri autolle',
    'Vahinkoilmoitus verkossa',
    'Asiakasportaali',
  ],
  appAvailable: false,
  insuranceTypes: ['auto', 'home', 'travel', 'pet', 'accident'],
  faq: [
    {
      question: 'Toimiiko Pohjantähti koko Suomessa?',
      answer:
        'Pohjantähti on periaatteessa valtakunnallinen, mutta vahvimmin se palvelee Keski-Suomessa, Pohjanmaalla ja Hämeessä. Vakuutuksen voi ottaa mistä tahansa Suomesta, mutta paikallinen palvelu on parhaimmillaan näillä alueilla.',
    },
    {
      question: 'Onko Pohjantähdellä lemmikkivakuutus?',
      answer:
        'Kyllä, Pohjantähti tarjoaa koira- ja kissavakuutuksia. Lisäksi maatilojen eläimille on omat vakuutustuotteensa.',
    },
  ],
};

const pohjantahtiProducts: InsuranceProduct[] = [
  {
    id: 'pohjantahti-auto-liikenne',
    providerId: 'pohjantahti',
    type: 'auto',
    name: 'Pohjantähti Liikennevakuutus',
    tier: 'basic',
    priceRange: { min: 180, max: 530, unit: 'eur/year' },
    coverage: [
      { name: 'Liikennevakuutus (lakisääteinen)', included: true },
      { name: 'Henkilövahingot', included: true },
      { name: 'Omaisuusvahingot (kolmannelle)', included: true },
    ],
    deductibles: [
      { amount: 500, label: '500 € omavastuu' },
      { amount: 200, label: '200 € omavastuu' },
    ],
    highlights: [
      'Edullinen liikennevakuutus',
      'Paikallinen palvelu',
    ],
    limitations: [
      'Verkko-osto rajoitetumpi kuin isoilla kilpailijoilla',
    ],
    suitableFor: ['Keski-Suomen ja Pohjanmaan asukkaat', 'Hintaherkät'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'pohjantahti-auto-tayskasko',
    providerId: 'pohjantahti',
    type: 'auto',
    name: 'Pohjantähti Täyskasko',
    tier: 'comprehensive',
    priceRange: { min: 500, max: 1400, unit: 'eur/year' },
    coverage: [
      { name: 'Liikennevakuutus', included: true },
      { name: 'Palovahinko', included: true },
      { name: 'Varkausvahinko', included: true },
      { name: 'Lasivakuutus', included: true },
      { name: 'Eläinvahinko', included: true },
      { name: 'Hinauspalvelu', included: true },
      { name: 'Törmäysvahinko', included: true },
      { name: 'Ilkivaltavahinko', included: true },
    ],
    deductibles: [
      { amount: 200, label: '200 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
    ],
    highlights: [
      'Kattava täyskasko kilpailukykyiseen hintaan',
      'Henkilökohtainen korvauspalvelu',
      'Paikallinen vakuutusneuvoja auttaa valinnassa',
    ],
    limitations: [
      'Pienemmät lisäturvamahdollisuudet kuin isoilla kilpailijoilla',
    ],
    suitableFor: ['Paikallista palvelua arvostavat', 'Maaseudun autoilijat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'pohjantahti-home-standard',
    providerId: 'pohjantahti',
    type: 'home',
    name: 'Pohjantähti Kotivakuutus',
    tier: 'standard',
    priceRange: { min: 85, max: 320, unit: 'eur/year' },
    coverage: [
      { name: 'Irtaimistovakuutus', included: true },
      { name: 'Putkivuototurva', included: true },
      { name: 'Paloturva', included: true },
      { name: 'Murtovakuutus', included: true },
      { name: 'Vastuuvakuutus', included: true },
      { name: 'Oikeusturvavakuutus', included: true },
    ],
    deductibles: [
      { amount: 200, label: '200 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
    ],
    highlights: [
      'Edullisin kotivakuutus markkinoilla',
      'Paikallinen korvauspalvelu',
    ],
    limitations: [
      'Lisäturvat rajoitetumpia',
    ],
    suitableFor: ['Budjettitietoiset', 'Pohjantähden toiminta-alueen asukkaat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'pohjantahti-pet-dog',
    providerId: 'pohjantahti',
    type: 'pet',
    name: 'Pohjantähti Koiravakuutus',
    tier: 'standard',
    priceRange: { min: 17, max: 48, unit: 'eur/month' },
    coverage: [
      { name: 'Eläinlääkärikulut (sairaus)', included: true, limit: 'Enintään 3 500 €/vuosi' },
      { name: 'Eläinlääkärikulut (tapaturma)', included: true, limit: 'Enintään 3 500 €/vuosi' },
      { name: 'Henkivakuutus', included: true },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
    ],
    highlights: [
      'Edullinen lemmikkivakuutus',
      'Myös maatilojen eläimille tuotteet',
    ],
    limitations: [
      'Korvauskatot markkinoiden matalimpia',
      'Ei vastuuvakuutusta lemmikille',
    ],
    suitableFor: ['Edullista lemmikkivakuutusta hakevat', 'Maatilojen eläinten omistajat'],
    lastVerified: '2026-03-15',
  },
];

pohjantahti.products = pohjantahtiProducts;

// ============================================================
// Provider 7: POP Vakuutus (~2-3% market share)
// ============================================================

const popVakuutus: InsuranceProvider = {
  id: 'pop-vakuutus',
  slug: 'pop-vakuutus',
  name: 'POP Vakuutus',
  shortName: 'POP',
  founded: 2012,
  ownership: 'Suomen Vahinkovakuutus Oy (LähiTapiolan enemmistöomistus)',
  marketShare: 2.5,
  size: 'small',
  headquarters: 'Turku',
  employeeCount: '~120',
  customerCount: 'Yli 200 000 asiakasta',
  website: 'https://www.popvakuutus.fi',
  description:
    'Suomen ensimmäinen täysin digitaalinen vakuutusyhtiö, perustettu 2012. Tunnettu edullisista hinnoistaan ja erinomaisesta asiakastyytyväisyydestä (9,1/10). Markkinoiden nopeimmin kasvava vakuuttaja.',
  longDescription:
    'POP Vakuutus on Suomen ensimmäinen täysin digitaalinen vakuutusyhtiö, joka perustettiin vuonna 2012. POP toimii kokonaan verkossa ilman konttoreita, mikä mahdollistaa edullisen hinnoittelun. Yhtiö on kasvanut nopeasti ja saavuttanut yli 200 000 asiakasta. POP:n asiakastyytyväisyys on huippuluokkaa: 9,1/10, joka on alan korkein Suomessa. LähiTapiola hankki 70 % POP:n emoyhtiöstä, mutta POP jatkaa itsenäisenä digitaalisena brändinä. POP on erityisen suosittu nuorten ja ensivakuutuksen ottajien keskuudessa.',
  logo: '/logos/pop.svg',
  color: '#FF1493',
  satisfaction: 9.1,
  reviewCount: 7830,
  claimProcessRating: 8.3,
  onlineServiceRating: 9.0,
  priceCompetitiveness: 9.2,
  isAffiliate: true,
  affiliateUrl: 'https://www.popvakuutus.fi',
  affiliateDisclosure: 'POP Vakuutus on affiliate-kumppanimme. Saamme pienen korvauksen, kun otat vakuutuksen POP:sta linkkimme kautta. Tämä ei vaikuta hintaasi.',
  products: [],
  strengths: [
    'Markkinoiden edullisimmat hinnat — digitaalinen toimintamalli pitää kulut matalina',
    'Paras asiakastyytyväisyys Suomessa: 9,1/10',
    'Täysin digitaalinen — helppo ja nopea asiointi',
    'Erityisen hyvät hinnat nuorille kuljettajille',
    'Nopeasti kasvava ja innovatiivinen',
  ],
  weaknesses: [
    'Ei konttoreita — kaikki palvelu verkossa ja puhelimitse',
    'Suppea tuotevalikoima (ei henkivakuutusta, ei lapsivakuutusta)',
    'Ei keskittämisetuja perinteisessä mielessä',
    'Uusi yhtiö — pidempi historia puuttuu',
    'Ei henkilökohtaista neuvontaa kasvotusten',
  ],
  specialFeatures: [
    'Vakuutuksen osto alle 3 minuutissa verkossa',
    'Reaaliaikaiset hinnat — ei tarvitse soittaa tai odottaa tarjousta',
    'Vahinkoilmoitus kokonaan verkossa — nopea käsittely',
    'Digitaalisen toiminnan tuomat edulliset hinnat',
  ],
  concentrationBenefits:
    'POP ei tarjoa perinteistä keskittämisetua, mutta edullisen hinnoittelun ansiosta kokonaiskustannus voi olla silti matalampi kuin isojen yhtiöiden keskittämishinnat. POP:n filosofia: jokainen vakuutus erikseen edullisesti, ilman monimutkaisia bonusjärjestelmiä.',
  onlineCapabilities: [
    'Vakuutusten osto verkossa (kaikki tuotteet)',
    'Vahinkoilmoitus verkossa',
    'Vakuutuslaskurit kaikille tuotteille',
    'Asiakasportaali',
    'Chat-tuki',
    'Puhelintuki',
  ],
  appAvailable: false,
  insuranceTypes: ['auto', 'home', 'travel', 'pet'],
  faq: [
    {
      question: 'Miksi POP Vakuutus on niin edullinen?',
      answer:
        'POP toimii kokonaan verkossa ilman konttoriverkostoa, mikä pitää toimintakulut matalina. Säästöt siirretään suoraan asiakkaille edullisempina vakuutusmaksuina. POP:n liiketoimintamalli on yksinkertainen: edulliset hinnat, erinomainen palvelu, digitaalinen asiointi.',
    },
    {
      question: 'Voiko POP:lle soittaa vahinkoilmoituksen?',
      answer:
        'Kyllä. Vaikka POP on digitaalinen yhtiö, vahinkoilmoituksen voi tehdä myös puhelimitse arkisin. Useimmat asiakkaat tekevät ilmoituksen kuitenkin verkossa, koska se on nopeampaa.',
    },
    {
      question: 'Onko POP Vakuutus luotettava?',
      answer:
        'POP Vakuutus on Finanssivalvonnan (FIN-FSA) valvoma suomalainen vakuutusyhtiö. LähiTapiola omistaa enemmistön POP:n emoyhtiöstä, mikä tuo lisävakautta. POP:n asiakastyytyväisyys 9,1/10 puhuu puolestaan — se on markkinoiden korkein.',
    },
  ],
};

const popProducts: InsuranceProduct[] = [
  {
    id: 'pop-auto-liikenne',
    providerId: 'pop-vakuutus',
    type: 'auto',
    name: 'POP Liikennevakuutus',
    tier: 'basic',
    priceRange: { min: 160, max: 480, unit: 'eur/year', note: 'Usein markkinoiden halvin liikennevakuutus' },
    coverage: [
      { name: 'Liikennevakuutus (lakisääteinen)', included: true },
      { name: 'Henkilövahingot', included: true },
      { name: 'Omaisuusvahingot (kolmannelle)', included: true },
    ],
    deductibles: [
      { amount: 500, label: '500 € omavastuu' },
      { amount: 200, label: '200 € omavastuu' },
    ],
    highlights: [
      'Usein markkinoiden edullisin liikennevakuutus',
      'Osto alle 3 minuutissa verkossa',
      'Ei turhia lisämaksuja',
    ],
    limitations: [
      'Vain verkkopalvelu — ei konttoreita',
    ],
    suitableFor: ['Edullisinta hintaa hakevat', 'Nuoret kuljettajat', 'Digitaalisesti taitavat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'pop-auto-osakasko',
    providerId: 'pop-vakuutus',
    type: 'auto',
    name: 'POP Osakasko',
    tier: 'standard',
    priceRange: { min: 290, max: 680, unit: 'eur/year' },
    coverage: [
      { name: 'Liikennevakuutus', included: true },
      { name: 'Palovahinko', included: true },
      { name: 'Varkausvahinko', included: true },
      { name: 'Lasivakuutus', included: true },
      { name: 'Eläinvahinko', included: true },
      { name: 'Hinauspalvelu', included: true },
      { name: 'Törmäysvahinko', included: false },
    ],
    deductibles: [
      { amount: 200, label: '200 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
      { amount: 150, label: '150 € omavastuu (lasi)' },
    ],
    highlights: [
      'Edullisin osakasko markkinoilla',
      'Selkeä tuote ilman piilokustannuksia',
    ],
    limitations: [
      'Ei kolarivahinkoja',
    ],
    suitableFor: ['Vanhempien autojen omistajat', 'Budjettitietoiset'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'pop-auto-tayskasko',
    providerId: 'pop-vakuutus',
    type: 'auto',
    name: 'POP Täyskasko',
    tier: 'comprehensive',
    priceRange: { min: 480, max: 1350, unit: 'eur/year' },
    coverage: [
      { name: 'Liikennevakuutus', included: true },
      { name: 'Palovahinko', included: true },
      { name: 'Varkausvahinko', included: true },
      { name: 'Lasivakuutus', included: true },
      { name: 'Eläinvahinko', included: true },
      { name: 'Hinauspalvelu', included: true },
      { name: 'Törmäysvahinko', included: true },
      { name: 'Ilkivaltavahinko', included: true },
      { name: 'Tieltä suistuminen', included: true },
    ],
    deductibles: [
      { amount: 200, label: '200 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
      { amount: 150, label: '150 € omavastuu (lasi)' },
    ],
    highlights: [
      'Edullisin täyskasko markkinoilla',
      'Kaikki oleelliset turvat mukana',
      'Erinomainen asiakastyytyväisyys 9,1/10',
    ],
    limitations: [
      'Ei lunastusturvaa tai keskeytysturvaa',
      'Ei konttoripalvelua',
    ],
    suitableFor: ['Hintaherkät autoilijat', 'Nuoret kuljettajat', 'Ensimmäisen auton ostajat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'pop-home-standard',
    providerId: 'pop-vakuutus',
    type: 'home',
    name: 'POP Kotivakuutus',
    tier: 'standard',
    priceRange: { min: 80, max: 300, unit: 'eur/year', note: 'Markkinoiden edullisimpia' },
    coverage: [
      { name: 'Irtaimistovakuutus', included: true },
      { name: 'Putkivuototurva', included: true },
      { name: 'Paloturva', included: true },
      { name: 'Murtovakuutus', included: true },
      { name: 'Vastuuvakuutus', included: true },
      { name: 'Oikeusturvavakuutus', included: false },
      { name: 'Polkupyörävarkaus', included: false },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
      { amount: 300, label: '300 € omavastuu' },
    ],
    highlights: [
      'Markkinoiden edullisimpia kotivakuutuksia',
      'Yksinkertainen ja selkeä tuote',
      'Osto verkossa muutamassa minuutissa',
    ],
    limitations: [
      'Ei oikeusturvavakuutusta perustuotteessa',
      'Ei polkupyörävarkautta',
      'Suppea lisäturvavalikoima',
    ],
    suitableFor: ['Budjettitietoiset', 'Vuokra-asukkaat', 'Opiskelijat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'pop-travel-standard',
    providerId: 'pop-vakuutus',
    type: 'travel',
    name: 'POP Matkavakuutus',
    tier: 'standard',
    priceRange: { min: 35, max: 100, unit: 'eur/year', note: 'Markkinoiden edullisimpia' },
    coverage: [
      { name: 'Matkakulut sairauden johdosta', included: true, limit: 'Enintään 100 000 €' },
      { name: 'Matkatavaravakuutus', included: true, limit: 'Enintään 1 000 €' },
      { name: 'Matkan peruuntuminen', included: true },
      { name: 'Matkustajan tapaturmavakuutus', included: true },
    ],
    deductibles: [
      { amount: 100, label: '100 € omavastuu' },
    ],
    highlights: [
      'Markkinoiden edullisin matkavakuutus',
      'Perusturva edulliseen hintaan',
    ],
    limitations: [
      'Hoitokulukatto matalin markkinoilla',
      'Matkatavarakatto matala',
    ],
    suitableFor: ['Budjettimatkailijat', 'Satunnaisesti matkustavat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'pop-pet-dog',
    providerId: 'pop-vakuutus',
    type: 'pet',
    name: 'POP Koiravakuutus',
    tier: 'standard',
    priceRange: { min: 15, max: 42, unit: 'eur/month', note: 'Edullisin koiravakuutus' },
    coverage: [
      { name: 'Eläinlääkärikulut (sairaus)', included: true, limit: 'Enintään 3 000 €/vuosi' },
      { name: 'Eläinlääkärikulut (tapaturma)', included: true, limit: 'Enintään 3 000 €/vuosi' },
      { name: 'Henkivakuutus', included: true },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
      { amount: 200, label: '200 € omavastuu' },
    ],
    highlights: [
      'Markkinoiden edullisin koiravakuutus',
      'Helppo ostaa verkossa',
    ],
    limitations: [
      'Korvauskatot matalimmat markkinoilla',
      'Ei vastuuvakuutusta',
      'Suppea turva verrattuna kalliimpiin vaihtoehtoihin',
    ],
    suitableFor: ['Edullista perusturvaa hakevat', 'Ensimmäisen lemmikkivakuutuksen ottajat'],
    lastVerified: '2026-03-15',
  },
];

popVakuutus.products = popProducts;

// ============================================================
// Provider 8: Aktia (<2% market share)
// ============================================================

const aktia: InsuranceProvider = {
  id: 'aktia',
  slug: 'aktia',
  name: 'Aktia Vakuutus',
  shortName: 'Aktia',
  founded: 1991,
  ownership: 'Aktia Pankki Oyj (pörssiyhtiö)',
  marketShare: 1.0,
  size: 'small',
  headquarters: 'Helsinki',
  employeeCount: '~100 (vakuutus)',
  customerCount: 'Noin 50 000 vakuutusasiakasta',
  website: 'https://www.aktia.fi/vakuutukset',
  description:
    'Aktia Pankin vakuutusyhtiö, joka palvelee erityisesti ruotsinkielistä rannikko-Suomea. Tarjoaa suppean mutta laadukkaan vakuutusvalikoiman pankkipalveluiden rinnalla.',
  longDescription:
    'Aktia Vakuutus on osa Aktia Pankki -konsernia, joka on suomalais-ruotsalainen pankkikonserni. Aktian vakuutuspalvelut keskittyvät erityisesti rannikko-Suomen ruotsinkielisille alueille (Pohjanmaa, Turunmaa, Uusimaa). Tuotevalikoima on suppeampi kuin isoilla kilpailijoilla, mutta pankkipalveluiden integraatio tarjoaa synergiaetuja. Aktian vahvuutena on pankki-vakuutusintegraatio ja kaksikielinen palvelu (suomi/ruotsi).',
  logo: '/logos/aktia.svg',
  color: '#C80064',
  satisfaction: 7.4,
  reviewCount: 980,
  claimProcessRating: 7.0,
  onlineServiceRating: 7.2,
  priceCompetitiveness: 6.5,
  isAffiliate: false,
  products: [],
  strengths: [
    'Pankki- ja vakuutuspalvelut samasta paikasta',
    'Kaksikielinen palvelu (suomi/ruotsi)',
    'Vahva läsnäolo rannikko-Suomessa',
    'Henkilökohtainen pankkiiripohjainen neuvonta',
  ],
  weaknesses: [
    'Suppea vakuutusvalikoima — ei autovakuutusta',
    'Pieni markkinaosuus — vähemmän neuvotteluvoimaa',
    'Rajattu maantieteellinen toiminta-alue',
    'Ei kilpailukykyisimpiä hintoja',
  ],
  specialFeatures: [
    'Ruotsinkielinen palvelu — tärkeää rannikkoalueilla',
    'Pankkiintegraatio — vakuutukset ja pankki samassa paikassa',
    'Henkilökohtainen pankkiiripohjainen neuvonta',
  ],
  concentrationBenefits:
    'Aktia tarjoaa alennuksia, kun yhdistää pankki- ja vakuutuspalvelut. Tyypillinen keskittämisetu on 5–10 %. Alennukset kasvavat pankkipalveluiden (lainat, sijoitukset) volyymin mukana.',
  onlineCapabilities: [
    'Vakuutusten osto verkossa (rajoitetusti)',
    'Vahinkoilmoitus verkossa',
    'Aktia-verkkopankki (vakuutukset näkyvissä)',
  ],
  appAvailable: true,
  insuranceTypes: ['home', 'travel', 'life', 'accident'],
  faq: [
    {
      question: 'Tarjoaako Aktia autovakuutuksia?',
      answer:
        'Ei. Aktia Vakuutus keskittyy koti-, matka-, henki- ja tapaturmavakuutuksiin. Jos tarvitset autovakuutusta, sinun tulee kääntyä toisen vakuutusyhtiön puoleen.',
    },
    {
      question: 'Saako Aktian vakuutuksia myös suomeksi?',
      answer:
        'Kyllä. Vaikka Aktia palvelee perinteisesti erityisesti ruotsinkielisiä alueita, kaikki palvelut ovat saatavilla myös suomeksi. Verkkosivut ja asiakaspalvelu toimivat molemmilla kielillä.',
    },
  ],
};

const aktiaProducts: InsuranceProduct[] = [
  {
    id: 'aktia-home-standard',
    providerId: 'aktia',
    type: 'home',
    name: 'Aktia Kotivakuutus',
    tier: 'standard',
    priceRange: { min: 105, max: 380, unit: 'eur/year' },
    coverage: [
      { name: 'Irtaimistovakuutus', included: true },
      { name: 'Putkivuototurva', included: true },
      { name: 'Paloturva', included: true },
      { name: 'Murtovakuutus', included: true },
      { name: 'Vastuuvakuutus', included: true },
      { name: 'Oikeusturvavakuutus', included: true },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
      { amount: 300, label: '300 € omavastuu' },
    ],
    highlights: [
      'Pankkipalveluiden kanssa yhteensopiva',
      'Kaksikielinen palvelu',
    ],
    limitations: [
      'Ei erityisen kilpailukykyinen hinta',
      'Suppeampi valikoima lisäturvia',
    ],
    suitableFor: ['Aktian pankkiasiakkaat', 'Rannikko-Suomen asukkaat', 'Ruotsinkieliset asiakkaat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'aktia-travel-standard',
    providerId: 'aktia',
    type: 'travel',
    name: 'Aktia Matkavakuutus',
    tier: 'standard',
    priceRange: { min: 50, max: 150, unit: 'eur/year' },
    coverage: [
      { name: 'Matkakulut sairauden johdosta', included: true, limit: 'Enintään 150 000 €' },
      { name: 'Matkatavaravakuutus', included: true, limit: 'Enintään 1 500 €' },
      { name: 'Matkan peruuntuminen', included: true },
      { name: 'Matkustajan tapaturmavakuutus', included: true },
    ],
    deductibles: [
      { amount: 100, label: '100 € omavastuu' },
    ],
    highlights: [
      'Hyvä perusmatkavakuutus',
      'Pankkiasiakkaalle etu',
    ],
    limitations: [
      'Ei erotu kilpailijoista erityisesti',
    ],
    suitableFor: ['Aktian asiakkaat', 'Perusmatkavakuutusta hakevat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'aktia-life-standard',
    providerId: 'aktia',
    type: 'life',
    name: 'Aktia Henkivakuutus',
    tier: 'standard',
    priceRange: { min: 8, max: 40, unit: 'eur/month' },
    coverage: [
      { name: 'Kuolemantapauskorvaus', included: true, limit: '30 000 – 300 000 €' },
      { name: 'Pysyvä työkyvyttömyys', included: false },
    ],
    deductibles: [],
    highlights: [
      'Yksinkertainen henkivakuutus',
      'Sopii asuntolainan turvaksi',
    ],
    limitations: [
      'Ei pysyvän työkyvyttömyyden turvaa perustuotteessa',
      'Korvaussumman yläraja matalampi',
    ],
    suitableFor: ['Asuntolainanottajat', 'Aktian pankkiasiakkaat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'aktia-accident-standard',
    providerId: 'aktia',
    type: 'accident',
    name: 'Aktia Tapaturmavakuutus',
    tier: 'standard',
    priceRange: { min: 50, max: 180, unit: 'eur/year' },
    coverage: [
      { name: 'Tapaturman hoitokulut', included: true, limit: 'Enintään 8 000 €' },
      { name: 'Pysyvä haitta', included: true, limit: 'Enintään 40 000 €' },
      { name: 'Tapaturmainen kuolema', included: true },
    ],
    deductibles: [
      { amount: 0, label: 'Ei omavastuuta' },
    ],
    highlights: [
      'Ei omavastuuta',
      'Yksinkertainen ja selkeä tuote',
    ],
    limitations: [
      'Korvauskatot matalampia kuin kilpailijoilla',
    ],
    suitableFor: ['Aktian asiakkaat', 'Perus tapaturmaturvaa hakevat'],
    lastVerified: '2026-03-15',
  },
];

aktia.products = aktiaProducts;

// ============================================================
// Provider 9: Alandia (niche)
// ============================================================

const alandia: InsuranceProvider = {
  id: 'alandia',
  slug: 'alandia',
  name: 'Alandia Vakuutus',
  shortName: 'Alandia',
  founded: 1938,
  ownership: 'Alandia-konserni (Ahvenanmaa)',
  marketShare: 0.8,
  size: 'niche',
  headquarters: 'Maarianhamina, Ahvenanmaa',
  employeeCount: '~150',
  customerCount: 'Noin 30 000 asiakasta',
  website: 'https://www.alandia.fi',
  description:
    'Ahvenanmaalainen vakuutusyhtiö, joka on erikoistunut merivakuutuksiin ja palvelee erityisesti saaristoalueiden ja ranniikon asukkaita. Vahva niche-vakuuttaja vene- ja merenkulkuvakuutuksissa.',
  longDescription:
    'Alandia on vuonna 1938 perustettu ahvenanmaalainen vakuutusyhtiö, joka on erikoistunut erityisesti merivakuutuksiin (veneet, laivat, merenkulku). Yhtiö tarjoaa myös henkilövakuutuksia Ahvenanmaalla ja rannikkoalueilla. Alandia tunnetaan merivakuutusten erikoisosaamisestaan ja on markkinajohtaja venevakuutuksissa Suomessa ja Pohjoismaissa. Henkilövakuutusten osalta Alandia on niche-toimija, mutta tarjoaa kilpailukykyisiä tuotteita toiminta-alueellaan.',
  logo: '/logos/alandia.svg',
  color: '#00529B',
  satisfaction: 7.7,
  reviewCount: 650,
  claimProcessRating: 7.5,
  onlineServiceRating: 6.5,
  priceCompetitiveness: 6.8,
  isAffiliate: false,
  products: [],
  strengths: [
    'Merivakuutusten markkinajohtaja — paras osaaminen vene- ja laivavakuutuksissa',
    'Vahva paikallinen läsnäolo Ahvenanmaalla ja saaristossa',
    'Erikoistunut riskinarviointiosaaminen merellisessä ympäristössä',
    'Ruotsinkielinen palvelu',
  ],
  weaknesses: [
    'Hyvin suppea maantieteellinen toiminta-alue henkilövakuutuksissa',
    'Suppea henkilövakuutusvalikoima',
    'Ei kilpailukykyinen manner-Suomessa',
    'Digitaaliset palvelut perustasolla',
  ],
  specialFeatures: [
    'Merivakuutusten erikoisosaaminen (veneet, laivat, regatat)',
    'Saaristovakuutukset — tuntee saaristolaiselämän riskit',
    'Ahvenanmaan erityislainsäädännön tuntemus',
  ],
  concentrationBenefits:
    'Alandia tarjoaa keskittämisalennuksia paikallisille asiakkaille. Merkittävin etu tulee veneilijöille: kun yhdistät vene- ja henkilövakuutukset Alandiaan, saat kokonaisvaltaisen merenkulku- ja henkilöturvan yhdellä sopimuksella.',
  onlineCapabilities: [
    'Vakuutusten osto verkossa (rajoitetusti)',
    'Vahinkoilmoitus verkossa',
    'Venevakuutuslaskuri',
  ],
  appAvailable: false,
  insuranceTypes: ['home', 'travel', 'accident'],
  faq: [
    {
      question: 'Tarjoaako Alandia autovakuutuksia?',
      answer:
        'Alandia tarjoaa liikennevakuutuksia pääasiassa Ahvenanmaalla. Manner-Suomessa Alandia keskittyy meri- ja venevakuutuksiin. Autovakuutusta tarvitsevan kannattaa manner-Suomessa kääntyä muiden yhtiöiden puoleen.',
    },
    {
      question: 'Kenelle Alandia sopii?',
      answer:
        'Alandia on erinomainen valinta veneilijöille, saaristolaisille ja Ahvenanmaan asukkaille. Merivakuutuksissa Alandialla on ylivertainen osaaminen. Henkilövakuutuksissa Alandia palvelee parhaiten Ahvenanmaalla ja lähisaaristossa.',
    },
  ],
};

const alandiaProducts: InsuranceProduct[] = [
  {
    id: 'alandia-home-standard',
    providerId: 'alandia',
    type: 'home',
    name: 'Alandia Kotivakuutus',
    tier: 'standard',
    priceRange: { min: 100, max: 380, unit: 'eur/year', note: 'Pääosin Ahvenanmaalla ja saaristossa' },
    coverage: [
      { name: 'Irtaimistovakuutus', included: true },
      { name: 'Putkivuototurva', included: true },
      { name: 'Paloturva', included: true },
      { name: 'Murtovakuutus', included: true },
      { name: 'Vastuuvakuutus', included: true },
      { name: 'Myrskyturva', included: true, description: 'Erikoisturva merenrannan kiinteistöille' },
    ],
    deductibles: [
      { amount: 200, label: '200 € omavastuu' },
      { amount: 500, label: '500 € omavastuu' },
    ],
    highlights: [
      'Myrskyturva — tärkeää rannikolla ja saaristossa',
      'Saaristokohteiden erikoisosaaminen',
      'Paikallinen palvelu Ahvenanmaalla',
    ],
    limitations: [
      'Pääasiassa Ahvenanmaan ja saariston asiakkaille',
      'Suppea lisäturvavalikoima',
    ],
    suitableFor: ['Ahvenanmaan asukkaat', 'Saaristolaiset', 'Rannikolla asuvat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'alandia-travel-standard',
    providerId: 'alandia',
    type: 'travel',
    name: 'Alandia Matkavakuutus',
    tier: 'standard',
    priceRange: { min: 55, max: 160, unit: 'eur/year' },
    coverage: [
      { name: 'Matkakulut sairauden johdosta', included: true, limit: 'Enintään 150 000 €' },
      { name: 'Matkatavaravakuutus', included: true, limit: 'Enintään 1 500 €' },
      { name: 'Matkan peruuntuminen', included: true },
      { name: 'Matkustajan tapaturmavakuutus', included: true },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
    ],
    highlights: [
      'Hyvä perusmatkavakuutus',
      'Sisältää lauttamatkat ja saaristoliikenteen',
    ],
    limitations: [
      'Ei erityisen kilpailukykyinen manner-Suomessa',
    ],
    suitableFor: ['Saaristolaiset', 'Lauttaliikenteen käyttäjät'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'alandia-accident-standard',
    providerId: 'alandia',
    type: 'accident',
    name: 'Alandia Tapaturmavakuutus',
    tier: 'standard',
    priceRange: { min: 55, max: 200, unit: 'eur/year' },
    coverage: [
      { name: 'Tapaturman hoitokulut', included: true, limit: 'Enintään 10 000 €' },
      { name: 'Pysyvä haitta', included: true, limit: 'Enintään 50 000 €' },
      { name: 'Tapaturmainen kuolema', included: true },
    ],
    deductibles: [
      { amount: 0, label: 'Ei omavastuuta' },
    ],
    highlights: [
      'Ei omavastuuta',
      'Sisältää merelliset tapaturmat',
    ],
    limitations: [
      'Suppea verrattuna isojen yhtiöiden tarjontaan',
    ],
    suitableFor: ['Veneilijät ja merenkävijät', 'Ahvenanmaan asukkaat'],
    lastVerified: '2026-03-15',
  },
];

alandia.products = alandiaProducts;

// ============================================================
// Provider 10: Säästöpankki Vakuutus
// ============================================================

const saastopankki: InsuranceProvider = {
  id: 'saastopankki',
  slug: 'saastopankki',
  name: 'Säästöpankki Vakuutus',
  shortName: 'Sp Vakuutus',
  founded: 2015,
  ownership: 'Säästöpankkiliitto (säästöpankkien yhteenliittymä)',
  marketShare: 0.9,
  size: 'small',
  headquarters: 'Espoo',
  employeeCount: '~60',
  customerCount: 'Noin 40 000 vakuutusasiakasta',
  website: 'https://www.saastopankki.fi/vakuutukset',
  description:
    'Säästöpankkien vakuutusyhtiö, joka tarjoaa henkilövakuutuksia säästöpankkien asiakkaille. Uusi ja kasvava toimija, joka yhdistää pankki- ja vakuutuspalvelut.',
  longDescription:
    'Säästöpankki Vakuutus on suhteellisen uusi toimija Suomen vakuutusmarkkinoilla. Se perustettiin palvelemaan säästöpankkien asiakkaita vakuutuspalveluilla. Säästöpankit ovat Suomen vanhin pankkiryhmä (perustettu 1822) ja niillä on vahva paikallinen läsnäolo erityisesti pienissä kaupungeissa. Vakuutusliiketoiminta on vielä kasvuvaiheessa ja tuotevalikoima suppeampi kuin isoilla kilpailijoilla, mutta pankkiintegraatio tuo lisäarvoa olemassa oleville säästöpankkien asiakkaille.',
  logo: '/logos/saastopankki.svg',
  color: '#00A0E3',
  satisfaction: 7.3,
  reviewCount: 780,
  claimProcessRating: 7.0,
  onlineServiceRating: 7.0,
  priceCompetitiveness: 6.8,
  isAffiliate: false,
  products: [],
  strengths: [
    'Pankki- ja vakuutuspalvelut samasta paikasta',
    'Säästöpankkien paikallinen konttoriverkosto',
    'Henkilökohtainen palvelu pienissä kaupungeissa',
    'Kasvava ja kehittyvä toimija',
  ],
  weaknesses: [
    'Suppea vakuutusvalikoima',
    'Uusi toimija — ei pitkää track recordia vakuuttamisessa',
    'Pieni markkinaosuus',
    'Digitaaliset palvelut kehitysvaiheessa',
  ],
  specialFeatures: [
    'Säästöpankkiverkoston paikallinen palvelu',
    'Pankkiasioiden ja vakuutusten yhdistäminen',
  ],
  concentrationBenefits:
    'Säästöpankki tarjoaa keskittämisetuja, kun yhdistät pankki- ja vakuutuspalvelut. Alennus on tyypillisesti 5–8 %. Pankkiasiakkaille tarjotaan ensisijaisesti vakuutuksia osana asiakkuuskokonaisuutta.',
  onlineCapabilities: [
    'Vakuutusten osto verkossa (rajoitetusti)',
    'Vahinkoilmoitus verkossa',
    'Säästöpankin verkkopankki-integraatio',
  ],
  appAvailable: true,
  insuranceTypes: ['home', 'travel', 'life', 'accident'],
  faq: [
    {
      question: 'Tarjoaako Säästöpankki autovakuutuksia?',
      answer:
        'Ei toistaiseksi. Säästöpankki Vakuutuksen tuotevalikoima keskittyy koti-, matka-, henki- ja tapaturmavakuutuksiin. Autovakuutuksen osalta suosittelemme vertailemaan muita yhtiöitä.',
    },
    {
      question: 'Pitääkö olla säästöpankin asiakas saadakseen vakuutuksen?',
      answer:
        'Ei pakollista, mutta säästöpankin asiakkaana saat parhaat keskittämisedut. Vakuutuksen voi periaatteessa ottaa ilman pankkiasiakkuuttakin, mutta pankkiyhteys tuo lisäetuja.',
    },
  ],
};

const saastopankkiProducts: InsuranceProduct[] = [
  {
    id: 'saastopankki-home-standard',
    providerId: 'saastopankki',
    type: 'home',
    name: 'Säästöpankki Kotivakuutus',
    tier: 'standard',
    priceRange: { min: 100, max: 370, unit: 'eur/year' },
    coverage: [
      { name: 'Irtaimistovakuutus', included: true },
      { name: 'Putkivuototurva', included: true },
      { name: 'Paloturva', included: true },
      { name: 'Murtovakuutus', included: true },
      { name: 'Vastuuvakuutus', included: true },
      { name: 'Oikeusturvavakuutus', included: true },
    ],
    deductibles: [
      { amount: 150, label: '150 € omavastuu' },
      { amount: 300, label: '300 € omavastuu' },
    ],
    highlights: [
      'Pankkipalveluiden kanssa yhteensopiva',
      'Paikallinen palvelu säästöpankkikonttoreissa',
    ],
    limitations: [
      'Suppea lisäturvavalikoima',
      'Ei erityisen kilpailukykyinen hinta',
    ],
    suitableFor: ['Säästöpankin asiakkaat', 'Paikallista palvelua arvostavat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'saastopankki-travel-standard',
    providerId: 'saastopankki',
    type: 'travel',
    name: 'Säästöpankki Matkavakuutus',
    tier: 'standard',
    priceRange: { min: 48, max: 140, unit: 'eur/year' },
    coverage: [
      { name: 'Matkakulut sairauden johdosta', included: true, limit: 'Enintään 120 000 €' },
      { name: 'Matkatavaravakuutus', included: true, limit: 'Enintään 1 000 €' },
      { name: 'Matkan peruuntuminen', included: true },
      { name: 'Matkustajan tapaturmavakuutus', included: true },
    ],
    deductibles: [
      { amount: 100, label: '100 € omavastuu' },
    ],
    highlights: [
      'Perusmatkavakuutus kohtuuhintaan',
    ],
    limitations: [
      'Matala hoitokulukatto',
      'Matala matkatavarakatto',
    ],
    suitableFor: ['Säästöpankin asiakkaat', 'Satunnaisesti matkustavat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'saastopankki-life-standard',
    providerId: 'saastopankki',
    type: 'life',
    name: 'Säästöpankki Henkivakuutus',
    tier: 'standard',
    priceRange: { min: 7, max: 35, unit: 'eur/month' },
    coverage: [
      { name: 'Kuolemantapauskorvaus', included: true, limit: '30 000 – 300 000 €' },
      { name: 'Pysyvä työkyvyttömyys', included: false },
    ],
    deductibles: [],
    highlights: [
      'Edullinen henkivakuutus',
      'Sopii asuntolainan turvaksi',
    ],
    limitations: [
      'Ei pysyvän työkyvyttömyyden turvaa',
      'Matalampi korvaussumman yläraja',
    ],
    suitableFor: ['Asuntolainanottajat säästöpankeissa', 'Edullista henkivakuutusta hakevat'],
    lastVerified: '2026-03-15',
  },
  {
    id: 'saastopankki-accident-standard',
    providerId: 'saastopankki',
    type: 'accident',
    name: 'Säästöpankki Tapaturmavakuutus',
    tier: 'standard',
    priceRange: { min: 45, max: 170, unit: 'eur/year' },
    coverage: [
      { name: 'Tapaturman hoitokulut', included: true, limit: 'Enintään 8 000 €' },
      { name: 'Pysyvä haitta', included: true, limit: 'Enintään 40 000 €' },
      { name: 'Tapaturmainen kuolema', included: true },
    ],
    deductibles: [
      { amount: 0, label: 'Ei omavastuuta' },
    ],
    highlights: [
      'Ei omavastuuta',
      'Edullinen perusturva',
    ],
    limitations: [
      'Matalahkot korvauskatot',
    ],
    suitableFor: ['Säästöpankin asiakkaat', 'Edullista tapaturmaturvaa hakevat'],
    lastVerified: '2026-03-15',
  },
];

saastopankki.products = saastopankkiProducts;

// ============================================================
// All Providers Array
// ============================================================

export const providers: InsuranceProvider[] = [
  pohjola,
  lahitapiola,
  ifInsurance,
  fennia,
  turva,
  pohjantahti,
  popVakuutus,
  aktia,
  alandia,
  saastopankki,
];

// ============================================================
// Helper Functions
// ============================================================

/**
 * Get a provider by its URL slug.
 */
export function getProviderBySlug(slug: string): InsuranceProvider | undefined {
  return providers.find((p) => p.slug === slug);
}

/**
 * Get a provider by its unique ID.
 */
export function getProviderById(id: string): InsuranceProvider | undefined {
  return providers.find((p) => p.id === id);
}

/**
 * Get all providers that offer a given insurance type.
 */
export function getProvidersByInsuranceType(type: InsuranceType): InsuranceProvider[] {
  return providers.filter((p) => p.insuranceTypes.includes(type));
}

/**
 * Get all products of a given type across all providers, including provider info.
 */
export function getProductsByType(
  type: InsuranceType
): (InsuranceProduct & { providerName: string; providerSlug: string; isAffiliate: boolean; affiliateUrl?: string })[] {
  const results: (InsuranceProduct & { providerName: string; providerSlug: string; isAffiliate: boolean; affiliateUrl?: string })[] = [];

  for (const provider of providers) {
    for (const product of provider.products) {
      if (product.type === type) {
        results.push({
          ...product,
          providerName: provider.name,
          providerSlug: provider.slug,
          isAffiliate: provider.isAffiliate,
          affiliateUrl: provider.affiliateUrl,
        });
      }
    }
  }

  // Sort by min price ascending
  return results.sort((a, b) => a.priceRange.min - b.priceRange.min);
}

/**
 * Get aggregate market statistics.
 */
export function getMarketStats(): {
  totalProviders: number;
  totalProducts: number;
  avgSatisfaction: number;
} {
  const totalProviders = providers.length;
  const totalProducts = providers.reduce((sum, p) => sum + p.products.length, 0);
  const avgSatisfaction =
    providers.reduce((sum, p) => sum + p.satisfaction, 0) / providers.length;

  return {
    totalProviders,
    totalProducts,
    avgSatisfaction: Math.round(avgSatisfaction * 10) / 10,
  };
}

/**
 * Search providers by name, description, or specialty.
 */
export function searchProviders(query: string): InsuranceProvider[] {
  const lowerQuery = query.toLowerCase();

  return providers.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.shortName.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.strengths.some((s) => s.toLowerCase().includes(lowerQuery)) ||
      p.specialFeatures.some((f) => f.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get top providers sorted by market share. Default limit: 5.
 */
export function getTopProviders(limit: number = 5): InsuranceProvider[] {
  return [...providers].sort((a, b) => b.marketShare - a.marketShare).slice(0, limit);
}
