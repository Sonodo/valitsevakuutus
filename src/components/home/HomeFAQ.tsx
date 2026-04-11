'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/types';
import ScrollReveal from '@/components/ScrollReveal';

interface HomeFAQProps {
  items: FAQItem[];
}

export default function HomeFAQ({ items }: HomeFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <h2 className="section-title">Usein kysyttya</h2>
            <p className="section-subtitle">
              Vastauksia yleisimpiin vakuutusvertailua koskeviin kysymyksiin
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {items.map((item, index) => (
            <ScrollReveal key={index} delay={index < 6 ? index * 60 : 0}>
              <div className="rounded-2xl bg-white ring-1 ring-slate-200/60 transition-shadow hover:shadow-sm">
                <button
                  className="flex min-h-[44px] w-full items-center justify-between px-6 py-4 text-left"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="pr-4 text-sm font-semibold text-foreground sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="border-t border-slate-100 px-6 pb-5 pt-3">
                    <p className="text-sm leading-relaxed text-slate-500">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
