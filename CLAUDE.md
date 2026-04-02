# Vakuutusvertailu — Development Guide

## What Is This
Finnish insurance comparison platform. Transparent, multi-insurer comparison across auto, home, travel, pet, and life insurance from all major Finnish providers. The missing mega-vertical — insurance generates 54% of MoneySuperMarket's revenue but barely exists in Finland. Consumer-first: show real coverage differences, not just price. Built as a Vertailu Hub spoke from day one.

## Stack
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX for blog articles and guides
- **Data Layer**: Static TypeScript data files for MVP (no database initially)
- **Future DB**: Neon PostgreSQL when user quotes, lead tracking needed (Phase 3+)
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4
- **Language**: Finnish (fi) — all UI text in Finnish, code/comments in English

## Directory Structure
```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with nav, footer
│   ├── autovakuutus/
│   │   └── page.tsx                # Car insurance comparison
│   ├── kotivakuutus/
│   │   └── page.tsx                # Home insurance comparison
│   ├── matkavakuutus/
│   │   └── page.tsx                # Travel insurance comparison
│   ├── lemmikkivakuutus/
│   │   └── page.tsx                # Pet insurance comparison
│   ├── henkivakuutus/
│   │   └── page.tsx                # Life insurance info
│   ├── tapaturmavakuutus/
│   │   └── page.tsx                # Accident insurance info
│   ├── lapsivakuutus/
│   │   └── page.tsx                # Child insurance info
│   ├── yhtiot/
│   │   └── [slug]/
│   │       └── page.tsx            # Provider detail pages (10 providers)
│   ├── blogi/
│   │   ├── page.tsx                # Blog index
│   │   └── [slug]/
│   │       └── page.tsx            # Individual blog posts
│   ├── oppaat/
│   │   ├── page.tsx                # Guides index
│   │   └── [slug]/
│   │       └── page.tsx            # Individual guides
│   ├── laskurit/
│   │   ├── autovakuutuslaskuri/
│   │   ├── kotivakuutuslaskuri/
│   │   └── saastolaskuri/
│   ├── tietoa/
│   │   ├── page.tsx                # About page
│   │   ├── menetelma/page.tsx      # Methodology
│   │   └── tietosuoja/page.tsx     # Privacy policy
│   ├── sitemap.ts                  # Dynamic sitemap
│   └── robots.ts                   # robots.txt
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── Breadcrumbs.tsx
│   ├── comparison/
│   │   ├── ComparisonForm.tsx      # Multi-step comparison form
│   │   ├── ResultCard.tsx          # Provider result card
│   │   ├── ResultsList.tsx         # Sorted/filtered results
│   │   ├── CoverageMatrix.tsx      # Feature comparison table
│   │   ├── PriceRangeBar.tsx       # Visual price range indicator
│   │   └── FilterControls.tsx      # Sort/filter UI
│   ├── providers/
│   │   ├── ProviderCard.tsx        # Provider summary card
│   │   ├── ProviderLogo.tsx        # Logo with fallback
│   │   └── SatisfactionRating.tsx  # Star rating display
│   ├── content/
│   │   ├── ArticleCard.tsx         # Blog article preview card
│   │   ├── GuideCard.tsx           # Guide preview card
│   │   └── MDXComponents.tsx       # Custom MDX rendering components
│   ├── calculators/
│   │   ├── AutoCalculator.tsx
│   │   ├── HomeCalculator.tsx
│   │   └── SavingsCalculator.tsx
│   ├── trust/
│   │   ├── TransparencyBar.tsx     # "How we make money" disclosure
│   │   ├── AffiliateDisclosure.tsx # "Mainos" badge for affiliate links
│   │   └── TrustSignals.tsx        # Trust badges bar
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Tooltip.tsx
│       ├── StepIndicator.tsx
│       └── ... (shared UI primitives)
├── data/
│   ├── providers.ts                # Insurance provider data (10 companies)
│   ├── products/
│   │   ├── auto.ts                 # Car insurance products per provider
│   │   ├── home.ts                 # Home insurance products
│   │   ├── travel.ts               # Travel insurance products
│   │   ├── pet.ts                  # Pet insurance products
│   │   └── life.ts                 # Life insurance products
│   ├── pricing/
│   │   ├── auto-estimates.ts       # Price estimation models for auto
│   │   ├── home-estimates.ts       # Price estimation models for home
│   │   └── pet-estimates.ts        # Price estimation models for pet
│   └── content/
│       ├── blog/                   # MDX blog articles
│       └── guides/                 # MDX guide content
├── lib/
│   ├── types.ts                    # TypeScript type definitions
│   ├── pricing-engine.ts           # Price estimation logic
│   ├── comparison-utils.ts         # Sorting, filtering, ranking utilities
│   ├── seo.ts                      # SEO metadata generation helpers
│   ├── analytics.ts                # GA4 event tracking helpers
│   └── hub-integration/            # Vertailu Hub spoke contracts
│       ├── auth-callback.ts        # SSO token handling
│       ├── activity-webhook.ts     # Report user actions to hub
│       └── service-catalog.ts      # Expose insurance comparisons to hub
├── styles/
│   └── globals.css                 # Tailwind base + custom styles
└── public/
    ├── logos/                      # Insurance provider logos (SVG preferred)
    ├── icons/                      # Insurance type icons
    └── images/                     # OG images, illustrations
```

## Conventions

### Code Style
- All code in TypeScript (strict mode)
- Components: PascalCase function components
- Files: PascalCase for components, kebab-case for utilities
- Finnish UI text, English code and comments
- No inline styles — all styling via Tailwind classes
- Server Components by default, Client Components only when interactivity required (forms, filters)

### Data Freshness
- All price data includes `lastVerified: string` (ISO date)
- Display "Päivitetty: [date]" on every comparison page
- Quarterly manual update of pricing data from insurer calculators
- Never present estimates as binding quotes

### SEO Requirements
- Every page needs: title, meta description, OG image, canonical URL
- Schema.org structured data: FinancialProduct (comparison), Article (blog), FAQPage (guides), BreadcrumbList
- Internal linking: every page links to at least 3 related pages
- All images have descriptive alt text in Finnish
- Dynamic sitemap.xml via Next.js sitemap.ts

### Affiliate Compliance (Non-Negotiable)
- All affiliate/referral links MUST have `rel="sponsored nofollow"`
- All affiliate links display visible "Mainos" badge (Finnish advertising disclosure)
- TransparencyBar component appears on every comparison page
- Provider cards clearly state if link is affiliate: `isAffiliate: boolean`
- Methodology page explains ranking algorithm — affiliate status does NOT influence sort order
- Disclaimer on every comparison page: "Tämä on vertailupalvelu, ei vakuutusneuvontaa. Hinta-arviot perustuvat julkisiin hintatietoihin. Lopullinen hinta riippuu yksilöllisistä tekijöistä."

### Insurance Regulatory Compliance
- Vakuutusten tarjoamisesta annettu laki (234/2018) — Insurance Distribution Act
- EU Insurance Distribution Directive (IDD) applies to comparison/aggregator sites
- MVP operates as information-only site (no FIN-FSA registration required)
- If facilitating actual purchases later, must register as vakuutusasiamies with FIN-FSA
- Professional development: 15h/year for anyone involved in insurance distribution

### Mobile-First Design
- All layouts designed mobile-first, then enhanced for desktop
- Touch targets minimum 44px
- Comparison forms use progressive disclosure (step-by-step)
- Result cards stack vertically on mobile, grid on desktop
- No horizontal scrolling

### Performance
- Target Lighthouse Performance >90 on all pages
- Static generation (SSG) for all content pages
- Images: WebP format, proper sizing, lazy loading below fold
- Font: Inter, self-hosted, font-display: swap
- Minimal client-side JavaScript

### Content
- Blog articles in MDX format in `src/data/content/blog/`
- Guides in MDX format in `src/data/content/guides/`
- All content must be grammatically correct Finnish
- Dates in Finnish format: "15.4.2026" or "15. huhtikuuta 2026"
- Currency: "25 €/kk" or "300 €/vuosi" (euro sign after number, Finnish convention)

## Color Palette
- Primary: #1a365d (deep navy — trust/authority)
- Secondary: #0891b2 (teal — action/comparison)
- Accent: #f59e0b (amber — savings/CTAs)
- Success: #059669 (green — coverage included)
- Warning: #ea580c (orange — coverage excluded)
- Background: #f8fafc (cool gray)
- Card: #ffffff
- Text primary: #1e293b
- Text secondary: #475569

## Insurance Providers in Scope (10 for MVP)
1. Pohjola Vakuutus / OP (32.6% market share)
2. LähiTapiola (26.4%)
3. If / Sampo Group (21.1%)
4. Fennia (9.9%)
5. Turva (~3-4%)
6. Pohjantähti (~2-3%)
7. POP Vakuutus (~2-3%, fastest-growing, primary affiliate partner candidate)
8. Aktia (<2%)
9. Alandia (niche/maritime)
10. Säästöpankki Vakuutus (savings bank arm)

## Insurance Types (Priority Order)
1. Autovakuutus (auto) — mandatory liikennevakuutus + optional kasko, highest volume
2. Kotivakuutus (home) — 84% penetration, high comparison value
3. Matkavakuutus (travel) — seasonal peaks, quick affiliate wins
4. Lemmikkivakuutus (pet) — growing 16%+ CAGR, underserved in comparison
5. Henkivakuutus (life) — high CPA, consultative sale
6. Tapaturmavakuutus (accident) — often bundled, lower standalone comparison
7. Lapsivakuutus (child) — emotional purchase, good content angle

## Hub Integration (Vertailu Hub Spoke)
Must implement from the start:
1. **Auth callback** — Accept SSO token from Vertailu Hub
2. **Activity webhook** — Report user actions (comparisons, clicks, conversions)
3. **Service catalog API** — Expose insurance categories and available comparisons
4. **Deep link support** — Accept pre-filled parameters (e.g., address from Asuntomaatti for home insurance)

## Key References
- MARKET_RESEARCH.md — Full Finnish insurance market analysis (providers, regulation, competitors, affiliate programs)
- PRODUCT_BLUEPRINT.md — MVP design, data architecture, monetization phasing, UX decisions
- SEO_STRATEGY.md — Keyword research (40,000-70,000 monthly searches), content plan, technical SEO
- PLAN.md — Build phases and development timeline

## Build & Deploy
```bash
npm run dev         # Local development (localhost:3000)
npm run build       # Production build
npm run start       # Production server
npm run lint        # ESLint check
npm run type-check  # TypeScript strict check
```

## Environment Variables
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # Google Analytics 4
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXX   # Google AdSense (Phase 1)
# No secrets required for MVP — all data is static
# Phase 3+: DATABASE_URL for Neon PostgreSQL
```
