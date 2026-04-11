'use client';

import { Search, BarChart3, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const steps = [
  {
    number: 1,
    title: 'Valitse vakuutustyyppi',
    description:
      'Kerro mita vakuutusta tarvitset ja mita haluat vertailla.',
    Icon: Search,
  },
  {
    number: 2,
    title: 'Vertaile tarjoajia',
    description:
      'Saat suuntaa-antavan arvion kaikilta 10 vakuutusyhtiolta.',
    Icon: BarChart3,
  },
  {
    number: 3,
    title: 'Tee valinta',
    description:
      'Siirry suoraan parhaan yhtion sivulle ja tee sopimus.',
    Icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-accent-50/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <h2 className="section-title">Nain vertailu toimii</h2>
            <p className="section-subtitle">
              Vakuutusten vertailu on helppoa ja nopeaa
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 150}>
              <div className="relative text-center">
                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+2.5rem)] top-8 hidden h-0.5 w-[calc(100%-5rem)] bg-gradient-to-r from-accent/30 to-accent/10 sm:block" />
                )}

                {/* Step icon */}
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60">
                  <step.Icon className="h-7 w-7 text-accent" />
                </div>

                {/* Step number */}
                <div className="mb-2 text-sm font-bold text-accent">
                  Vaihe {step.number}
                </div>

                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
