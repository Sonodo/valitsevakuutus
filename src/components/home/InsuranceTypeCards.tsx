'use client';

import Link from 'next/link';
import type { LucideProps } from 'lucide-react';
import { Car, Home, Plane, PawPrint, Heart, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

interface InsuranceCard {
  title: string;
  description: string;
  href: string;
  Icon: React.ComponentType<LucideProps>;
}

const CARDS: InsuranceCard[] = [
  {
    title: 'Autovakuutus',
    description: 'Vertaa liikenne- ja kaskovakuutuksia 10 yhtiolta.',
    href: '/autovakuutus',
    Icon: Car,
  },
  {
    title: 'Kotivakuutus',
    description: 'Loyda kattava suoja kodillesi edullisesti.',
    href: '/kotivakuutus',
    Icon: Home,
  },
  {
    title: 'Matkavakuutus',
    description: 'Matkusta turvallisesti, vertaile vakuutukset.',
    href: '/matkavakuutus',
    Icon: Plane,
  },
  {
    title: 'Lemmikkivakuutus',
    description: 'Elainlaakarikulut hallintaan vakuutuksella.',
    href: '/lemmikkivakuutus',
    Icon: PawPrint,
  },
  {
    title: 'Henkivakuutus',
    description: 'Turvaa perheesi talous henkivakuutuksella.',
    href: '/henkivakuutus',
    Icon: Heart,
  },
];

export default function InsuranceTypeCards() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="section-title">Mita vakuutusta etsit?</h2>
            <p className="section-subtitle">
              Vertaa hintoja ja ehtoja kaikissa vakuutuslajeissa
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.href} delay={i * 100}>
              <Link
                href={card.href}
                className="group block rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-accent/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50">
                  <card.Icon className="h-6 w-6 text-accent" />
                </div>

                <h3 className="text-base font-bold text-foreground group-hover:text-accent">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {card.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Vertaile
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
