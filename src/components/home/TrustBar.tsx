'use client';

import { Shield, Users, Award, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const TRUST_ITEMS = [
  { Icon: Shield, label: '10 vakuutusyhtiota' },
  { Icon: Users, label: '7 vakuutuslajia' },
  { Icon: Award, label: 'Kattava vertailu' },
  { Icon: Clock, label: 'Paivitetty 2026' },
];

export default function TrustBar() {
  return (
    <section className="bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 text-slate-500"
              >
                <item.Icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
