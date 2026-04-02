import type { InsuranceTypeInfo, NavItem } from '@/types';

// --- Site Configuration ---

export const SITE_NAME = 'Vakuutusvertailu';
export const SITE_URL = 'https://vakuutusvertailu.fi';
export const SITE_DESCRIPTION =
  'Suomen kattavin vakuutusvertailu. Vertaa autovakuutuksia, kotivakuutuksia, matkavakuutuksia, lemmikkivakuutuksia ja henkivakuutuksia — kaikki vakuutusyhtiöt yhdessä paikassa.';
export const SITE_TAGLINE = 'Vertaa. Säästä. Vakuuta.';

// --- Colors (Brand Palette) ---

export const COLORS = {
  navy: '#1a365d',
  navyLight: '#2a4a7f',
  navyDark: '#0f2440',
  teal: '#0891b2',
  tealLight: '#22d3ee',
  tealDark: '#0e7490',
  amber: '#f59e0b',
  amberLight: '#fbbf24',
  green: '#16a34a',
  greenLight: '#22c55e',
  orange: '#ea580c',
  red: '#dc2626',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray500: '#6b7280',
  gray700: '#374151',
  gray900: '#111827',
} as const;

// --- Insurance Types ---

export const INSURANCE_TYPES: InsuranceTypeInfo[] = [
  {
    type: 'auto',
    slug: 'autovakuutus',
    name: 'Autovakuutus',
    shortName: 'Auto',
    description:
      'Vertaa liikenne- ja kaskovakuutuksia. Löydä halvin autovakuutus ja säästä satoja euroja vuodessa.',
    icon: 'Car',
    color: '#0891b2',
    marketSize: '~1,5 mrd €',
    averagePrice: '200–1 200 €/vuosi',
    keyFact: 'Liikennevakuutus on pakollinen kaikille ajoneuvoille',
  },
  {
    type: 'home',
    slug: 'kotivakuutus',
    name: 'Kotivakuutus',
    shortName: 'Koti',
    description:
      'Vertaa kotivakuutuksia ja löydä paras suoja kodillesi. Kerrostalo, rivitalo tai omakotitalo.',
    icon: 'Home',
    color: '#16a34a',
    marketSize: '~800 milj. €',
    averagePrice: '96–600 €/vuosi',
    keyFact: '84 % suomalaisista kotitalouksista on kotivakuutettu',
  },
  {
    type: 'travel',
    slug: 'matkavakuutus',
    name: 'Matkavakuutus',
    shortName: 'Matka',
    description:
      'Vertaa matkavakuutuksia ja matkusta turvallisesti. Kertavakuutus tai jatkuva matkavakuutus.',
    icon: 'Plane',
    color: '#f59e0b',
    marketSize: '~150–200 milj. €',
    averagePrice: '30–300 €/vuosi',
    keyFact: '50–60 % suomalaisista ottaa matkavakuutuksen',
  },
  {
    type: 'pet',
    slug: 'lemmikkivakuutus',
    name: 'Lemmikkivakuutus',
    shortName: 'Lemmikki',
    description:
      'Vertaa lemmikkivakuutuksia koiralle, kissalle ja muille lemmikeille. Eläinlääkärikulut hallintaan.',
    icon: 'PawPrint',
    color: '#ea580c',
    marketSize: '~50–80 milj. €',
    averagePrice: '200–800 €/vuosi',
    keyFact: 'Lemmikkivakuutusmarkkina kasvaa ~16 % vuodessa',
  },
  {
    type: 'life',
    slug: 'henkivakuutus',
    name: 'Henkivakuutus',
    shortName: 'Henki',
    description:
      'Vertaa henkivakuutuksia ja turvaa perheesi talous. Kuolemanvara- ja säästöhenkivakuutukset.',
    icon: 'Heart',
    color: '#7c3aed',
    marketSize: '~4,3 mrd €',
    averagePrice: '100–500 €/vuosi',
    keyFact: 'Vain 26 % suomalaisista on henkivakuutettu',
  },
  {
    type: 'accident',
    slug: 'tapaturmavakuutus',
    name: 'Tapaturmavakuutus',
    shortName: 'Tapaturma',
    description:
      'Vertaa tapaturmavakuutuksia. Vapaa-ajan tapaturmaturva koko perheelle.',
    icon: 'ShieldPlus',
    color: '#dc2626',
    marketSize: '~300 milj. €',
    averagePrice: '50–200 €/vuosi',
    keyFact: 'Työtapaturmavakuutus on työnantajalle pakollinen',
  },
  {
    type: 'child',
    slug: 'lapsivakuutus',
    name: 'Lapsivakuutus',
    shortName: 'Lapsi',
    description:
      'Vertaa lapsivakuutuksia ja turvaa lapsesi tulevaisuus. Tapaturma- ja sairauskuluvakuutukset.',
    icon: 'Baby',
    color: '#ec4899',
    marketSize: '~100 milj. €',
    averagePrice: '100–400 €/vuosi',
    keyFact: 'Lapsivakuutus kannattaa ottaa mahdollisimman nuorena',
  },
];

// --- Finnish Bonus Classes (Auto Insurance) ---

export const BONUS_CLASSES = Array.from({ length: 14 }, (_, i) => ({
  class: i,
  discount: Math.min(i * 5, 70), // 0% to 70% discount
  label: `S${i}${i === 0 ? ' (ei bonusta)' : i === 13 ? ' (maksimibonukset)' : ''}`,
}));

// --- Navigation ---

export const MAIN_NAV: NavItem[] = [
  {
    label: 'Vakuutukset',
    href: '#',
    children: INSURANCE_TYPES.map((t) => ({
      label: t.name,
      href: `/${t.slug}`,
    })),
  },
  { label: 'Vertailu', href: '/vertailu' },
  { label: 'Vakuutusyhtiöt', href: '/vakuutusyhtiot' },
  { label: 'Oppaat', href: '/oppaat' },
  { label: 'Blogi', href: '/blogi' },
];

// --- Footer Links ---

export const FOOTER_LINKS = {
  vakuutukset: INSURANCE_TYPES.map((t) => ({
    label: t.name,
    href: `/${t.slug}`,
  })),
  tietoa: [
    { label: 'Tietoa meistä', href: '/tietoa' },
    { label: 'Näin vertailemme', href: '/metodologia' },
    { label: 'Yhteystiedot', href: '/yhteystiedot' },
    { label: 'Tietosuoja', href: '/tietosuoja' },
  ],
  tyokalut: [
    { label: 'Kaikki laskurit', href: '/laskurit' },
    { label: 'Autovakuutuslaskuri', href: '/laskurit/autovakuutuslaskuri' },
    { label: 'Kotivakuutuslaskuri', href: '/laskurit/kotivakuutuslaskuri' },
    { label: 'Säästölaskuri', href: '/laskurit/saastolaskuri' },
    { label: 'Bonuslaskuri', href: '/laskurit/bonuslaskuri' },
    { label: 'Lemmikkivakuutuslaskuri', href: '/laskurit/lemmikkivakuutuslaskuri' },
    { label: 'Oppaat', href: '/oppaat' },
    { label: 'Blogi', href: '/blogi' },
  ],
};

// --- Insurance Type Helpers ---

export function getInsuranceTypeBySlug(slug: string): InsuranceTypeInfo | undefined {
  return INSURANCE_TYPES.find((t) => t.slug === slug);
}

export function getInsuranceTypeByType(type: string): InsuranceTypeInfo | undefined {
  return INSURANCE_TYPES.find((t) => t.type === type);
}
