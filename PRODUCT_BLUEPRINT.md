# Vakuutusvertailu — MVP Product Blueprint

**Prepared**: March 2026
**Classification**: Internal — Product Design
**Target Launch**: Q2 2026

---

## Vision

Finland's most transparent and comprehensive insurance comparison platform. Unlike existing Finnish comparison sites that secretly represent a single insurer, Vakuutusvertailu shows all major providers — including those that don't pay us — and explains exactly how we earn money. We win by being the site Finnish consumers trust.

## Core Principles (Non-Negotiable)

1. **Show ALL Providers** — Include every major Finnish insurer, even those without affiliate partnerships. Competitors show only paying partners. We show everyone.
2. **Transparency First** — Disclose methodology, explain rankings, mark affiliate links. Open about how we make money.
3. **Data-Based Estimates for MVP** — Real-time quotes require API partnerships that take 6–12 months to establish. MVP uses carefully researched price ranges based on publicly available data (insurer calculators, published rates, consumer surveys).
4. **Education Before Transaction** — Help consumers understand insurance before they buy. Not a lead-gen form disguised as a comparison tool.
5. **Mobile-First, Finnish-First** — Built for Finnish consumers on mobile devices. All UI in Finnish. Code in English.
6. **No Dark Patterns** — No fake urgency, no "X people are viewing this right now", no manufactured scarcity. Clean, honest UX.

---

## MVP Pages & Information Architecture

### Homepage: `/`

**Hero Section**
```
Vertaa vakuutuksia ja säästä satoja euroja
Puolueeton vakuutusvertailu — näytämme kaikki yhtiöt, myös ne jotka eivät maksa meille.
[Aloita vertailu →]
```

**Insurance Type Cards** (grid layout, 4 primary + 3 secondary)
- Autovakuutus (car icon) — "Vertaa liikenne- ja kaskovakuutuksia"
- Kotivakuutus (home icon) — "Löydä edullisin kotivakuutus"
- Matkavakuutus (plane icon) — "Vertaa matkavakuutuksia"
- Lemmikkivakuutus (paw icon) — "Suojaa lemmikkisi edullisesti"
- Henkivakuutus (shield icon) — "Turvaa perheesi tulevaisuus"
- Tapaturmavakuutus (cross icon) — "Vertaa tapaturmavakuutuksia"
- Lapsivakuutus (child icon) — "Paras turva lapsellesi"

**Trust Bar**
```
✓ 10 vakuutusyhtiötä vertailussa  ✓ 100% puolueeton  ✓ Aina ilmainen
```

**How It Works Section**
1. Valitse vakuutustyyppi
2. Kerro tarpeesi
3. Vertaa hintoja ja ehtoja
4. Siirry vakuutusyhtiön sivulle

**Featured Content** (3 latest blog articles)

**Provider Logos Bar** — All compared insurers with logos for credibility

---

### Car Insurance Comparison: `/autovakuutus`

This is the **anchor product** — highest search volume, highest affiliate revenue, clearest comparison value.

#### Landing Content (above comparison tool)
- H1: "Autovakuutus vertailu 2026 — Löydä halvin ja paras"
- Introduction paragraph explaining liikennevakuutus vs. kaskovakuutus
- Key statistic: "Hintaero voi olla jopa 30–50% eri yhtiöiden välillä"

#### Comparison Input Form

**Step 1: Vehicle Information**
- Auton merkki ja malli (brand & model — dropdown/search)
- Vuosimalli (year of manufacture)
- Moottorin teho kW (engine power)
- Auton käyttöönottovuosi (first registration year)
- Arvioitu ajomäärä vuodessa (annual mileage estimate)

**Step 2: Driver Information**
- Ikä (age range selector)
- Postinumero (postal code — affects pricing by region)
- Bonusluokka (bonus class — S to 0, determines no-claims discount level)
- Nuorin kuljettaja (youngest driver age, if under 25)

**Step 3: Coverage Level**
- Pelkkä liikennevakuutus (traffic insurance only)
- Osakasko (partial comprehensive)
- Täyskasko (full comprehensive)
- Laaja täyskasko (extended comprehensive)

#### Results Page

**Sort Options**: Halvin ensin (cheapest first) | Kattavin ensin (most comprehensive first) | Suosituin (most popular)

**Filter Options**:
- Hintahaarukka (price range slider)
- Vakuutusyhtiö (provider multi-select)
- Omavastuun taso (deductible level)
- Sisältää: hinaus, lasivakuutus, eläinvahingot (coverage includes: towing, glass, animal damage)

**Result Cards** (one per provider):
```
┌─────────────────────────────────────────────────────┐
│ [IF Logo]  IF Autovakuutus                          │
│                                                      │
│ Liikennevakuutus:     25–35 €/kk                    │
│ Täyskasko:            45–65 €/kk                    │
│ Yhteensä:             70–100 €/kk                   │
│                                                      │
│ ✓ Hinauspalvelu  ✓ Lasivakuutus  ✓ Eläinvahingot   │
│ ✗ Pysäköintivakuutus                                │
│                                                      │
│ ★★★★☆ Asiakastyytyväisyys (4.2/5)                   │
│                                                      │
│ [Lue lisää]  [Siirry IF:n sivulle →]                │
│                                                      │
│ ℹ️ Hinta-arvio perustuu julkisiin hintatietoihin.    │
│    Tarkka hinta riippuu henkilökohtaisista           │
│    tiedoistasi. Mainos.                              │
└─────────────────────────────────────────────────────┘
```

**Price Disclosure**: Every result card clearly states these are estimates, not binding quotes. Affiliate links marked with "Mainos" (advertisement).

**Below Results**: Comparison methodology explanation, FAQ, related articles

---

### Home Insurance Comparison: `/kotivakuutus`

#### Input Form
- Asuntotyyppi (housing type): kerrostalo, rivitalo, omakotitalo, paritalo
- Pinta-ala (m²)
- Postinumero (postal code)
- Irtaimiston arvo (contents value estimate)
- Rakennus vuosi (building year — for omakotitalo)
- Lisäturva (additional coverage): pyörävarkaus, putkivuoto, oikeusturva

#### Result Cards
Similar structure to auto, with coverage comparison matrix:
| Turva | IF | OP | LähiTapiola | Fennia | POP |
|---|---|---|---|---|---|
| Irtaimisto | ✓ | ✓ | ✓ | ✓ | ✓ |
| Putkivuoto | ✓ | ✓ | ✓ | ✗ | ✓ |
| Oikeusturva | ✓ | ✓ | ✓ | ✓ | ✗ |
| Pyörävarkaus | ✓ | ✗ | ✓ | ✓ | ✗ |

---

### Travel Insurance Comparison: `/matkavakuutus`

#### Input Form
- Matkan tyyppi: yksittäinen matka / jatkuva matkavakuutus
- Matkakohde: Pohjoismaat, Eurooppa, Maailmanlaajuinen
- Matkan kesto (for single trip)
- Matkustajien lukumäärä ja ikä
- Aktiivitoiminta: sukellus, laskettelu, extreme-urheilu

---

### Pet Insurance Comparison: `/lemmikkivakuutus`

#### Input Form
- Eläin: koira, kissa, kani, hevonen
- Rotu (breed — affects pricing significantly for dogs)
- Ikä
- Aiemmat sairaudet
- Turvan taso: perus, laaja, premium

---

### Provider Detail Pages: `/yhtiot/[slug]`

One page per insurer. 10 pages for MVP:

1. `/yhtiot/if` — If Vakuutus
2. `/yhtiot/op-pohjola` — OP / Pohjola Vakuutus
3. `/yhtiot/lahitapiola` — LähiTapiola
4. `/yhtiot/fennia` — Fennia
5. `/yhtiot/turva` — Turva
6. `/yhtiot/pohjantahti` — Pohjantähti
7. `/yhtiot/pop-vakuutus` — POP Vakuutus
8. `/yhtiot/aktia` — Aktia
9. `/yhtiot/alandia` — Alandia
10. `/yhtiot/saastopankki-vakuutus` — Säästöpankki Vakuutus

#### Provider Page Template
- Company overview (founding year, ownership structure, customer count)
- Available products (which insurance types they offer)
- Pricing overview (price ranges for key products)
- Strengths and weaknesses (honest assessment)
- Customer satisfaction data
- Online capabilities (can you buy online? calculator available?)
- Contact information
- Links to their insurance calculators
- Related articles from our blog

---

### Blog: `/blogi`

10 launch articles (SEO-optimized):

1. **Autovakuutus vertailu 2026: Näin löydät halvimman** — Core comparison guide
2. **Liikennevakuutus vai kaskovakuutus — mitä eroa?** — Educational fundamentals
3. **Kotivakuutuksen valinta: 7 asiaa jotka sinun pitää tietää** — Home insurance guide
4. **Lemmikkivakuutus 2026: Miksi se kannattaa ja mitä se maksaa** — Pet insurance growth angle
5. **Vakuutuksen kilpailutus: Askel askeleelta -opas** — Step-by-step switching guide
6. **Nuoren kuljettajan autovakuutus — näin säästät satoja euroja** — Young driver segment
7. **Omakotitalon vakuutus vs. kerrostalovakuutus — erot ja hinnat** — Home insurance detail
8. **Matkavakuutus Eurooppaan 2026: Vertailu ja vinkit** — Travel insurance seasonal
9. **Vakuutuksen bonusjärjestelmä selitettynä** — Bonus system explainer
10. **Keskittämisetu vai kilpailutus — kumpi säästää enemmän?** — Loyalty vs. comparison angle

---

### Educational Guides: `/oppaat`

5 comprehensive guides:

1. `/oppaat/nain-valitset-autovakuutuksen` — How to choose car insurance (3,000+ words)
2. `/oppaat/kotivakuutus-opas` — Complete home insurance guide
3. `/oppaat/vakuutuksen-irtisanominen` — How to cancel/switch insurance (legal rights)
4. `/oppaat/mita-vakuutus-korvaa` — What does insurance actually cover? (claims guide)
5. `/oppaat/vakuutussanasto` — Insurance glossary (vakuutussanasto A-Ö)

---

### Calculators: `/laskurit`

1. `/laskurit/autovakuutuslaskuri` — Car insurance cost estimator
2. `/laskurit/kotivakuutuslaskuri` — Home insurance cost estimator
3. `/laskurit/saastolaskuri` — Savings calculator ("How much could you save by switching?")

---

### About & Transparency: `/tietoa`

**Critical for trust. Must include:**
- Who we are and why we built this
- How comparison works (methodology)
- Which providers are included and WHY (if some are missing, explain why)
- How we make money (affiliate model explained plainly)
- Which links are affiliate links vs. editorial
- Data handling practices (GDPR)
- Contact information
- Disclaimer: estimates, not binding quotes

---

## Data Architecture

### Insurance Providers Table
```typescript
interface InsuranceProvider {
  id: string;                    // e.g., "if", "op-pohjola"
  name: string;                  // "If Vakuutus"
  slug: string;                  // URL slug
  logo: string;                  // Logo image path
  founded: number;               // Year founded
  ownership: string;             // "Mutual" | "Sampo Group" | "OP Financial Group"
  customerCount: string;         // "3.9M (Nordics)" or "200,000+ (Finland)"
  marketShare: number;           // 0.211 for 21.1%
  customerSatisfaction: number;  // 4.2 out of 5
  onlinePurchase: boolean;       // Can buy online
  hasCalculator: boolean;        // Has online calculator
  calculatorUrl: string;         // URL to their calculator
  website: string;               // Main website URL
  description: string;           // Company description
  strengths: string[];           // ["Strong brand", "Pan-Nordic scale"]
  weaknesses: string[];          // ["No affiliate program"]
  affiliateUrl?: string;         // Affiliate link if partnership exists
  isAffiliate: boolean;          // Transparency flag
  products: InsuranceType[];     // Which product types they offer
}
```

### Insurance Products Table
```typescript
interface InsuranceProduct {
  id: string;
  providerId: string;            // FK to provider
  type: InsuranceType;           // "auto" | "home" | "travel" | "pet" | "life" | "accident" | "child"
  name: string;                  // Product name as marketed
  tier: string;                  // "basic" | "standard" | "comprehensive" | "premium"
  priceRange: {
    min: number;                 // EUR/month minimum
    max: number;                 // EUR/month maximum
    unit: "month" | "year";
  };
  coverage: CoverageItem[];      // What's included
  deductible: {
    min: number;
    max: number;
    options: number[];           // Available deductible levels
  };
  highlights: string[];          // Key selling points
  limitations: string[];         // Key exclusions/limitations
  lastVerified: string;          // ISO date when pricing was last checked
  sourceUrl: string;             // Where pricing data came from
}

type InsuranceType = "auto-liikenne" | "auto-kasko" | "home" | "travel" | "pet-dog" | "pet-cat" | "life" | "accident" | "child";

interface CoverageItem {
  name: string;                  // "Hinaus" (towing), "Lasivakuutus" (glass)
  included: boolean;
  details?: string;              // Coverage specifics
}
```

### Price Estimation Models
```typescript
interface PriceEstimateParams {
  // Auto insurance
  vehicleMake?: string;
  vehicleModel?: string;
  vehicleYear?: number;
  enginePowerKw?: number;
  annualMileage?: number;
  driverAge?: number;
  postalCode?: string;
  bonusClass?: string;          // "S" to "0"
  youngestDriverAge?: number;
  coverageLevel?: "liikenne" | "osakasko" | "tayskasko" | "laaja-tayskasko";

  // Home insurance
  housingType?: "kerrostalo" | "rivitalo" | "omakotitalo" | "paritalo";
  areaSqm?: number;
  contentsValue?: number;
  buildingYear?: number;

  // Pet insurance
  animalType?: "dog" | "cat" | "rabbit" | "horse";
  breed?: string;
  animalAge?: number;

  // Travel insurance
  tripType?: "single" | "continuous";
  destination?: "nordics" | "europe" | "worldwide";
  travelers?: number;
}

interface PriceEstimate {
  providerId: string;
  productId: string;
  estimatedPrice: {
    low: number;
    mid: number;
    high: number;
    unit: "month" | "year";
  };
  confidence: "high" | "medium" | "low";  // Based on data freshness
  disclaimer: string;
  calculatorUrl: string;                   // Link to get exact quote
}
```

### Blog/Content Tables
```typescript
interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  category: "autovakuutus" | "kotivakuutus" | "matkavakuutus" | "lemmikkivakuutus" | "oppaat" | "uutiset";
  publishedAt: string;
  updatedAt: string;
  content: string;               // MDX content
  relatedProviders: string[];    // Related provider IDs
  relatedProducts: string[];     // Related product IDs
  targetKeyword: string;         // Primary SEO keyword
  estimatedReadTime: number;     // Minutes
}
```

### User Comparison Tracking
```typescript
interface ComparisonEvent {
  id: string;
  timestamp: string;
  insuranceType: InsuranceType;
  params: PriceEstimateParams;   // What the user entered
  resultsShown: string[];        // Provider IDs shown
  clickedProviders: string[];    // Which providers user clicked
  // NO personal data stored — analytics only
}
```

---

## Key UX Decisions

### Real-Time Quotes vs. Estimated Ranges

**Decision: Data-based estimates for MVP (Phase 1-2). Real-time quotes for Phase 3-4.**

**Rationale**:
- Real-time quotes require API partnerships with each insurer — no Finnish insurer offers a public quote API
- API partnerships take 6–12 months to negotiate, with technical integration adding 2–3 months per insurer
- Data-based estimates can launch immediately using publicly available pricing data from insurer calculators
- Estimated price ranges (low/mid/high) provide genuine value — consumers can identify which providers to investigate further
- Clear disclosure that these are estimates, with links to each insurer's calculator for exact quotes

**Data Collection Methodology for Estimates**:
1. Run sample quotes through each insurer's public calculator quarterly
2. Build pricing models based on key variables (age, location, vehicle, coverage)
3. Cross-reference with published rate announcements and industry data
4. Label all estimates with "Päivitetty: [date]" and "Arvio perustuu julkisiin hintatietoihin"

### Trust & Transparency Design

**Transparency Bar** (visible on every comparison page):
```
Näin vertailumme toimii: Vertaamme [X] vakuutusyhtiön tuotteita. Osa linkeistä on
mainoslinkkejä, joista saamme pienen korvauksen. Tämä ei vaikuta vertailujärjestykseen
tai suosituksiimme. Lue lisää →
```

**Affiliate Link Marking**: Every affiliate link displays "Mainos" badge and `rel="sponsored nofollow"` attribute.

**Ranking Algorithm Disclosure**: Methodology page explains exactly how results are sorted:
1. Default sort: estimated price (cheapest first)
2. Coverage match (how well the product matches user's selected coverage needs)
3. Customer satisfaction rating
4. Affiliate status does NOT influence ranking (disclosed explicitly)

### Disclosure Requirements (Legal Compliance)

Per IDD and KKV requirements:
- State that we are an information service, not an insurance intermediary (for MVP)
- Disclose all affiliate relationships
- Mark paid links with "Mainos" (Finnish advertising disclosure requirement)
- Include disclaimer that prices are estimates
- Link to each provider's official calculator for binding quotes
- Privacy policy covering analytics data collection

---

## Monetization Plan (Phased)

### Phase 1: MVP Launch (Month 0–3) — EUR 0–500/month
- **Google AdSense**: Display ads on blog articles and educational guides
- **Affiliate Links**: Outbound links to insurer calculators with UTM tracking
  - Initially: track clicks and self-report to potential partners
  - Vakuutustori/Adtraction: Apply for income protection insurance affiliate
- **Target Traffic**: 5,000–15,000 monthly visitors (organic SEO ramp)

### Phase 2: First Partnerships (Month 3–6) — EUR 500–3,000/month
- **POP Vakuutus / Little Buck Oy Partnership**: Primary target. POP already participates in multiple comparison sites. Approach through Little Buck Oy agency agreement.
- **Adtraction Network**: Expand to additional Finnish insurance advertisers on the platform
- **Direct Insurer Approaches**: Pitch data (click volume, demographic quality) to 3-5 insurers
- **Estimated CPA**: EUR 20–50 per auto insurance policy referred
- **Target Traffic**: 15,000–40,000 monthly visitors

### Phase 3: Lead Generation (Month 6–12) — EUR 3,000–15,000/month
- **Quote Request Forms**: Add optional "Pyydä tarjous" (request quote) forms
- **Lead Sales**: Sell qualified leads to partner insurers at EUR 30–80/lead
- **Lead Qualification**: Name, phone, email, insurance type, estimated value
- **Compliance**: Explicit consent for data sharing, GDPR-compliant
- **Target Traffic**: 40,000–80,000 monthly visitors

### Phase 4: API Integration (Month 12–18) — EUR 15,000–50,000/month
- **Real-Time Quotes**: Establish API connections with willing insurers
- **Instant Purchase Flow**: Users get binding quotes and can initiate purchase
- **Commission Model Shift**: From CPA per lead to CPA per policy issued (higher value)
- **FIN-FSA Registration**: Register as vakuutusasiamies for compliant distribution
- **Target Traffic**: 80,000–150,000 monthly visitors

### Revenue Projections (Conservative)

| Quarter | Monthly Visitors | Revenue Model | Est. Monthly Revenue |
|---|---|---|---|
| Q3 2026 | 8,000 | AdSense + basic affiliate | EUR 200–500 |
| Q4 2026 | 20,000 | AdSense + POP affiliate + Adtraction | EUR 1,000–3,000 |
| Q1 2027 | 35,000 | + 2-3 insurer partnerships | EUR 3,000–8,000 |
| Q2 2027 | 50,000 | + lead generation | EUR 8,000–15,000 |
| Q3 2027 | 70,000 | + more partnerships, optimization | EUR 12,000–25,000 |
| Q4 2027 | 90,000 | + API integration pilot | EUR 20,000–40,000 |

---

## Technical Architecture (MVP)

### Stack
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Data Layer**: Static JSON/TypeScript data files (no database for MVP)
- **Content**: MDX for blog articles and guides
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4 + custom event tracking
- **SEO**: Dynamic OG images, structured data (Schema.org), XML sitemap

### Page Count Target: 80+ pages

| Section | Pages | Type |
|---|---|---|
| Homepage | 1 | Static |
| Insurance comparison pages | 7 | Dynamic (form + results) |
| Provider detail pages | 10 | Static data-driven |
| Blog articles | 10 | MDX |
| Educational guides | 5 | MDX |
| Calculator pages | 3 | Interactive |
| Info pages (about, methodology, privacy) | 4 | Static |
| **Total** | **~40 unique pages** | |

With dynamic routes (provider × insurance type combinations), effective page count for SEO exceeds 80.

### Performance Targets
- Lighthouse Performance: >90
- LCP: <2.5s
- CLS: <0.1
- FID: <100ms
- Core Web Vitals: All green

---

## Design System

### Color Palette
- **Primary**: Deep navy (#1a365d) — trust, authority, insurance industry standard
- **Secondary**: Bright teal (#0891b2) — modern, approachable, comparison/action
- **Accent**: Warm amber (#f59e0b) — attention, CTAs, savings highlights
- **Success**: Green (#059669) — coverage included, savings
- **Warning**: Orange (#ea580c) — coverage excluded, important notes
- **Background**: Cool gray (#f8fafc) with white cards
- **Text**: Near-black (#1e293b) for body, slate (#475569) for secondary

### Typography
- **Headings**: Inter (bold, clean, modern)
- **Body**: Inter (regular, excellent readability)
- **Mono**: JetBrains Mono (price numbers, statistics)

### Component Library
- Provider cards with logos
- Coverage comparison matrices
- Price range indicators (bar visualization)
- Star ratings
- Filter/sort controls
- Progressive form wizard (step indicator)
- Tooltip system for insurance term definitions
- Affiliate disclosure badges
- Trust signals bar

---

## Launch Checklist

### Pre-Launch
- [ ] Data collection: Run sample quotes through all 10 insurer calculators
- [ ] Legal review: Verify IDD compliance for information-only model
- [ ] Privacy policy and cookie consent implementation
- [ ] All affiliate links marked with rel="sponsored nofollow" and "Mainos" badge
- [ ] Methodology page written and reviewed
- [ ] Mobile responsiveness tested on iOS Safari and Android Chrome
- [ ] Schema.org structured data on all pages (FAQPage, Article, Organization)
- [ ] XML sitemap generated
- [ ] robots.txt configured
- [ ] Google Search Console set up and sitemap submitted
- [ ] GA4 configured with custom events (comparison started, provider clicked, guide read)

### Post-Launch (Week 1)
- [ ] Submit to Google Search Console
- [ ] Apply for Google AdSense
- [ ] Apply to Adtraction network
- [ ] Contact Little Buck Oy / POP Vakuutus for partnership discussion
- [ ] Monitor Core Web Vitals
- [ ] Social media profiles created (LinkedIn, Twitter/X)

### Month 1 Targets
- [ ] 10 blog articles published and indexed
- [ ] First organic traffic from long-tail keywords
- [ ] AdSense approved and running
- [ ] At least 1 affiliate partnership established
- [ ] 5,000+ unique visitors
