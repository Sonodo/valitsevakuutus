'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/types';

interface HomeFAQProps {
  items: FAQItem[];
}

export default function HomeFAQ({ items }: HomeFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">
          Usein kysyttyä
        </h2>
        <p className="mt-3 text-gray-600">
          Vastauksia yleisimpiin vakuutusvertailua koskeviin kysymyksiin
        </p>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white"
          >
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span className="pr-4 text-sm font-semibold text-navy sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="border-t border-gray-100 px-5 pb-4 pt-3">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
