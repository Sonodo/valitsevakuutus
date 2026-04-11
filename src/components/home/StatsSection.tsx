'use client';

import ScrollReveal from '@/components/ScrollReveal';
import WaveDivider from '@/components/WaveDivider';

const STATS = [
  { value: '10', label: 'Vakuutusyhtiota' },
  { value: '7', label: 'Vakuutuslajia' },
  { value: '5,5 mrd', label: 'Markkinan koko' },
  { value: '100 %', label: 'Ilmainen palvelu' },
];

export default function StatsSection() {
  return (
    <>
      <WaveDivider color="#0B1F3F" />
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-accent-400 sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-white/50">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider color="#F8FAFC" flip />
    </>
  );
}
