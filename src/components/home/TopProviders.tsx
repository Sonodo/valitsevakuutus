'use client';

import { providers } from '@/data/providers';
import { formatPercentage, formatSatisfaction } from '@/lib/utils';
import ScrollReveal from '@/components/ScrollReveal';

export default function TopProviders() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="section-title">
              Kaikki Suomen suurimmat vakuutusyhtiot
            </h2>
            <p className="section-subtitle">
              10 vakuutusyhtiota &mdash; kattava ja avoin vertailu
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {providers.map((provider, i) => (
            <ScrollReveal key={provider.id} delay={(i % 5) * 80}>
              <div className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-accent/20">
                <div
                  className="mb-3 flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white"
                  style={{ backgroundColor: provider.color }}
                >
                  {provider.shortName.slice(0, 2)}
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {provider.shortName}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Markkinaosuus: {formatPercentage(provider.marketShare)}
                </p>
                <p className="text-xs text-slate-500">
                  Tyytyv.: {formatSatisfaction(provider.satisfaction)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="mt-8 text-center text-sm text-slate-400">
            Hinnat ovat suuntaa-antavia arvioita. Tarkka vakuutusmaksu riippuu
            henkilokohtaisista tekijoista. Pyyda aina tarjous suoraan
            vakuutusyhtiolta.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
