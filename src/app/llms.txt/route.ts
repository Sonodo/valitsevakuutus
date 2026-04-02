export async function GET() {
  const content = `# Vakuutusvertailu
> Suomen kattavin vakuutusvertailu — vertaa vakuutuksia ja säästä

## What is this site?
Vakuutusvertailu (vakuutusvertailu.fi) is a Finnish insurance comparison platform. It provides free, independent comparison of insurance products from Finland's 10 largest insurance providers. The site is an information service — not an insurance intermediary or advisor.

## Insurance types compared (7)
- Autovakuutus (Car insurance) — mandatory liikennevakuutus + optional kasko: /autovakuutus
- Kotivakuutus (Home insurance) — apartment, rowhouse, detached house: /kotivakuutus
- Matkavakuutus (Travel insurance) — single-trip and annual policies: /matkavakuutus
- Lemmikkivakuutus (Pet insurance) — dogs, cats, and other pets: /lemmikkivakuutus
- Henkivakuutus (Life insurance) — term life and savings policies: /henkivakuutus
- Tapaturmavakuutus (Accident insurance) — leisure accident coverage: /tapaturmavakuutus
- Lapsivakuutus (Child insurance) — accident and illness coverage for children: /lapsivakuutus

## Insurance providers compared (10)
1. Pohjola Vakuutus / OP (32.6% market share)
2. LähiTapiola (26.4%)
3. If / Sampo Group (21.1%)
4. Fennia (9.9%)
5. Turva (~3-4%)
6. Pohjantähti (~2-3%)
7. POP Vakuutus (~2-3%)
8. Aktia (<2%)
9. Alandia (niche/maritime)
10. Säästöpankki Vakuutus

## Key pages
- / — Homepage with insurance type overview and comparison tools
- /autovakuutus — Car insurance comparison with coverage details
- /kotivakuutus — Home insurance comparison and pricing estimates
- /matkavakuutus — Travel insurance comparison
- /lemmikkivakuutus — Pet insurance comparison
- /henkivakuutus — Life insurance information and comparison
- /tapaturmavakuutus — Accident insurance comparison
- /lapsivakuutus — Child insurance comparison
- /vakuutusyhtiot — All insurance providers overview
- /vakuutusyhtiot/[slug] — Individual provider detail pages
- /laskurit — Insurance calculators (auto, home, pet, savings, bonus)
- /oppaat — Educational guides about insurance in Finland
- /blogi — Blog with insurance tips and news
- /vertailu — Side-by-side insurance comparison tool
- /tietoa — About us and methodology
- /kayttoehdot — Terms of service
- /tietosuoja — Privacy policy
- /evasteet — Cookie policy

## Important disclaimers
- All price information is estimated and indicative — not binding quotes
- Prices are based on publicly available data from insurers and their online calculators
- Data is updated quarterly — actual prices may differ
- This is an information service, not insurance advice
- Final insurance decisions are between the consumer and the insurance provider
- The site is not registered with FIN-FSA as an insurance agent or broker

## Language
All content is in Finnish (fi). The site targets Finnish consumers.

## Contact
info@vakuutusvertailu.fi
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
