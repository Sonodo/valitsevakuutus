# Vakuutusvertailu — Status

**Project**: Vakuutusvertailu — Finnish Insurance Comparison
**Status**: MVP COMPLETE — Publication-ready — all fixes applied, awaiting deployment
**Created**: 2026-03-27
**Last Updated**: Session #075 — 2026-04-01

## Overview
Finnish insurance comparison platform — the missing mega-vertical. Insurance generates 54% of MoneySuperMarket's revenue but barely exists in Finland. Non-life insurance market is EUR 5.6B in annual premiums, with 30-50% price differences between providers for equivalent coverage. No Finnish site currently offers genuine multi-insurer comparison with transparent methodology. Compare auto, home, travel, pet, and life insurance from 10 Finnish providers.

## Current Sprint
MVP COMPLETE. Pending domain registration and deployment.

## Recent Progress

### Session #069-070: Full MVP Build (2026-03-28)
- **Wave 1 — Scaffold + Foundation**: Next.js 16 project, 46 pages, 10 insurance providers, 7 insurance types, full SEO metadata
- **Wave 2 — Content Expansion**: Expanded to 90 unique pages total
  - 6 interactive calculators (auto, home, pet, travel, life, savings)
  - 20 VS comparison pages (provider-vs-provider)
  - 15 city-specific pages
  - OG image generation for all pages
  - Cookie consent with Google Consent Mode v2
- **Final totals**: 165 routes, 79 source files, 12 blog articles, 6 guides, 71+ FAQ items, 75 OG images

### Research Phase (2026-03-27)
- Comprehensive market research completed (MARKET_RESEARCH.md)
  - 10 insurance providers profiled with market shares, products, digital capabilities
  - 7 insurance types sized (auto EUR 754M+ premiums, home 84% penetration, pet growing 16% CAGR)
  - Regulatory landscape mapped (IDD, FIN-FSA, KKV requirements)
  - 8 existing competitors analyzed (all weak — none offer genuine multi-insurer comparison)
  - Affiliate program landscape mapped (POP Vakuutus / Little Buck Oy is primary partner opportunity)
  - Global best practices analyzed (MoneySuperMarket, Check24, Insplanet/Zmarta)
  - Finnish consumer behavior profiled (Finance Finland 2025 survey data)
- Product blueprint completed (PRODUCT_BLUEPRINT.md)
  - MVP pages designed (40+ unique, 80+ effective with dynamic routes)
  - Data architecture defined (TypeScript interfaces for providers, products, pricing)
  - UX decisions documented (data-based estimates for MVP, real-time quotes Phase 3-4)
  - Monetization plan phased (AdSense → POP affiliate → lead gen → API integration)
  - Revenue projections: EUR 200-500/month at launch → EUR 20,000-40,000/month by Q4 2027
- SEO strategy completed (SEO_STRATEGY.md)
  - 40+ keywords researched across 4 tiers
  - Total addressable monthly searches: 40,000-70,000
  - Content plan: 10 blog articles + 5 guides + 10 provider pages at launch
  - Technical SEO setup defined (Schema.org, sitemaps, internal linking)
- Development guide updated (CLAUDE.md)
  - Full directory structure, conventions, color palette, component library defined

## Blockers
- Domain not yet registered (vakuutusvertailu.fi preferred)
- No affiliate partnerships established yet (POP Vakuutus / Little Buck Oy is primary target)
- Deploy repo not yet created on GitHub

## Next Steps
1. **Register domain** — vakuutusvertailu.fi (check availability)
2. **Create deploy repo** — GitHub repo for Vercel deployment
3. **Deploy to Vercel** — Configure domain, environment variables, production build
4. **Partnership outreach** — Contact Little Buck Oy / POP Vakuutus, apply to Adtraction
5. **Post-launch SEO monitoring** — Track indexing, keyword rankings, Search Console setup

## Key Decisions Made
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-27 | Insurance chosen as next mega-vertical | 54% of MoneySuperMarket revenue; massive white space in Finland |
| 2026-03-27 | Start with auto insurance | Highest search volume, mandatory product, most standardized |
| 2026-03-27 | Static data for MVP, no database | Faster to launch, no API partnerships needed, upgrade to Neon in Phase 3 |
| 2026-03-27 | Data-based price estimates, not real-time quotes | No Finnish insurer offers public quote API; estimates launch immediately |
| 2026-03-27 | Information-only model (no FIN-FSA registration for MVP) | Reduces regulatory burden; register as vakuutusasiamies when direct partnerships materialize |
| 2026-03-27 | POP Vakuutus as primary affiliate target | Only insurer actively participating in comparison sites via Little Buck Oy |

## Market Analysis
- **Finnish non-life insurance market**: EUR 5.6B annual premiums (2024)
- **Top 4 control 90%**: Pohjola/OP (32.6%), LähiTapiola (26.4%), If (21.1%), Fennia (9.9%)
- **Online comparison penetration**: <5% (vs 40%+ in UK)
- **Price variance**: 30-50% between providers for equivalent coverage
- **Finnish consumers declining coverage**: Home insurance down from 95% to 84% (2014-2025)
- **Key competitors**: All weak — Kilpailuttaja (1 insurer), Vakuutustenvertailu (limited), VertaaEnsin (content only)
- **Revenue per policy (CPA)**: EUR 20-80 estimated per auto/home policy

## Viability: 9.0/10
Massive white space, globally proven model. Insurance is the single highest-revenue vertical in comparison platforms worldwide. Finnish market is underserved with no genuine multi-insurer comparison. Growing price sensitivity among Finnish consumers creates tailwind.
