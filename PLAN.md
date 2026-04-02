# Vakuutusvertailu — Development Plan

## Vision
Finland's most comprehensive, transparent insurance comparison site. Help Finnish consumers find the best insurance for their needs — auto, home, travel, pet, life, and health — from all major Finnish providers. Consumer-first: show real coverage differences, not just price. Built as a Vertailu Hub spoke from day one.

## Core Principles (Non-Negotiable)
1. **Coverage transparency** — Don't just compare price. Show what's actually covered and what's excluded. Consumers get burned by cheap insurance with gaps.
2. **All major providers** — Include all Finnish insurers, not just affiliate partners. If a non-partner has the best product, show it.
3. **Insurance education** — Most Finns are underinsured or overpaying because they don't understand their policies. Fix that.
4. **Regulatory compliance** — Insurance distribution is regulated. Every page includes appropriate disclaimers. We're a comparison tool, not an insurance advisor.
5. **No dark patterns** — No fake urgency ("Your policy expires in 3 days!"), no manufactured scarcity, no pre-checked boxes.
6. **Hub-ready** — Designed for Vertailu Hub integration from day one. SSO, activity tracking, deep linking.

## Revenue Model
1. **CPA (Cost Per Acquisition)**: EUR 10-45 per policy via Adtraction/Vakuutustori affiliate networks
2. **Lead generation**: Sell qualified leads to insurers (EUR 5-20 per lead)
3. **AdSense**: Educational content and blog traffic monetization
4. **Future**: Premium comparison tools, policy management dashboard, renewal reminders

## Target Domain
- Primary: vakuutusvertailu.fi ("insurance comparison" in Finnish — exact match domain)
- Alternative: vakuutusvertaa.fi ("compare insurance")
- Status: Research in progress

## Finnish Insurance Providers to Include

### Major Insurers
- **OP Vakuutus** (OP Group) — largest by market share
- **LähiTapiola** — strong in rural/regional Finland
- **If** (Sampo Group) — Nordic leader
- **Pohjola Vakuutus** (OP Group) — corporate + personal
- **Fennia** — SME-focused, growing personal lines
- **Turva** — trade union affiliated
- **Pohjantähti** — regional, competitive pricing

### Specialist / Niche
- **Ifin** (If digital brand)
- **Eurooppalainen** (OP Group travel)
- **Lähivakuutus** (part of LähiTapiola)
- **Folksam** — Swedish, active in Finland
- **Protector Forsikring** — Norwegian, growing in Finland
- **POP Vakuutus** — newer entrant, digital-first

### Comparison / Aggregator APIs
- **Vakuutustori** — Finnish insurance marketplace API
- **Adtraction** — Affiliate network with insurance programs

## Build Phases

### Phase 1: Foundation + Auto Insurance (Weeks 1-4)
- Project scaffold (Next.js 16, TypeScript, Tailwind v4, Neon PostgreSQL)
- TypeScript types (Provider, InsuranceProduct, ComparisonResult, Quote, etc.)
- Provider data model and initial data (all Finnish auto insurers)
- Homepage with hero, trust signals, insurance type navigation
- Auto insurance comparison calculator:
  - Multi-step form (vehicle info → driver info → coverage level → results)
  - Results page with sortable/filterable provider comparison
  - Coverage detail comparison (side-by-side what's included)
- Provider directory (all insurers, filterable by insurance type)
- 5 provider detail pages (top 5 auto insurers)
- Layout: Header, Footer, Navigation
- SEO foundation (sitemap, robots, metadata)
- Mobile-first responsive design
- Legal pages (privacy, terms, insurance disclaimers)

### Phase 2: Home + Travel Insurance (Weeks 5-7)
- Home insurance comparison calculator:
  - Form (property type → size → location → contents value → results)
  - Coverage comparison (fire, water, theft, liability, natural disasters)
- Travel insurance comparison:
  - Form (destination → duration → travelers → coverage level → results)
  - Family vs. individual plans
  - Annual vs. single-trip comparison
- 10 more provider detail pages
- 6 educational guides:
  - Autovakuutuksen valinta — Näin löydät parhaan
  - Kotivakuutus — Mitä se kattaa ja mitä ei?
  - Matkavakuutus — Tarvitsetko sitä todella?
  - Vakuutuksen kilpailutus — Näin säästät satoja euroja
  - Bonusjärjestelmä autovakuutuksessa
  - Omavastuun valinta — Milloin kannattaa maksaa enemmän?

### Phase 3: Content + Remaining Verticals (Weeks 8-10)
- Pet insurance comparison calculator
- Life insurance comparison (term life, mortgage protection)
- 12 blog articles targeting key SEO keywords:
  - Autovakuutus vertailu 2026 — halvimmat vakuutukset
  - Kotivakuutuksen hinta — mistä se koostuu?
  - Matkavakuutus vertailu — paras matkavakuutus 2026
  - Lemmikkivakuutus — kannattaako se?
  - Henkivakuutus vertailu — kenelle ja miksi?
  - Vakuutusyhtiön vaihto — näin teet sen helposti
  - Kaskovakuutus vs. liikennevakuutus — erot selitettynä
  - Taloyhtiön vakuutus vs. kotivakuutus — älä maksa turhasta
  - Nuoren kuljettajan autovakuutus — näin säästät
  - Sähköauton vakuutus — mitä pitää tietää?
  - Vakuutuskorvauksen hakeminen — vaihe vaiheelta
  - Alivakuuttaminen — miksi se on riski?
- 4 interactive tools:
  - Vakuutuslaskuri (insurance needs calculator)
  - Bonuslaskuri (auto insurance bonus calculator)
  - Säästölaskuri (how much you save by switching)
  - Kattavuusvertailu (coverage comparison tool)

### Phase 4: SEO & Polish (Weeks 11-12)
- OG image generation for all page types
- JSON-LD structured data (InsuranceProduct, Organization, Article, FAQPage)
- Regional SEO pages (insurance by city/region)
- Insurance type × provider comparison pages ("If vs LähiTapiola autovakuutus")
- About, methodology, contact pages
- Error handling (404, error boundaries)
- Accessibility pass (WCAG compliance)
- Performance optimization (Core Web Vitals)

### Phase 5: Hub Integration + Launch (Weeks 13-14)
- Vertailu Hub spoke contracts implementation:
  - SSO auth callback
  - Activity webhook (comparisons, clicks, conversions)
  - Service catalog API
  - Deep link support (accept pre-filled parameters from hub)
- Cross-sell hooks (e.g., home insurance prompt on Asuntomaatti, auto insurance on moving funnel)
- GA4 + conversion tracking setup
- GSC sitemap submission
- Affiliate program activation (Adtraction, direct partnerships)
- AdSense application
- Soft launch → public launch

## Target Pages: 150+
- Homepage + 6 insurance type landing pages
- Comparison calculator pages (6 types)
- Provider directory + ~20 provider detail pages
- 6 educational guides
- 12 blog articles
- 4 interactive tools
- ~20 provider comparison pair pages ("A vs B")
- ~15 regional/city SEO pages
- Legal/info pages (privacy, terms, about, methodology, contact)
- Hub integration pages (auth callback, dashboard)

## Key SEO Keywords
- autovakuutus vertailu
- kotivakuutus vertailu
- halvin autovakuutus
- matkavakuutus vertailu
- lemmikkivakuutus hinta
- vakuutusvertailu
- paras kotivakuutus
- henkivakuutus vertailu
- vakuutuksen kilpailutus
- kaskovakuutus hinta

## Key Metrics
- **Comparison completions** — Users who complete a full comparison flow
- **Click-through rate** — % who click through to a provider
- **CPA conversions** — Policies purchased via affiliate links
- **Lead quality score** — Provider feedback on lead quality
- **Coverage views** — % who view detailed coverage comparison (engagement signal)
- **Return rate** — Users who come back for another insurance type (cross-sell success)

## Regulatory Notes
- **Vakuutusten tarjoamisesta annettu laki (234/2018)** — Insurance Distribution Act
- **Finanssivalvonta** — FIN-FSA oversees insurance distribution
- **IDD compliance** — EU Insurance Distribution Directive requirements
- **Disclaimer required**: "Tämä on vertailupalvelu, ei vakuutusneuvontaa. Lopullinen hinta riippuu yksilöllisistä tekijöistä."
- **Affiliate disclosure**: Must clearly indicate which providers are affiliate partners
