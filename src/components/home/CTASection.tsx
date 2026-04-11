'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Glow orbs */}
      <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-accent-400/20 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-accent-400/20 opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Vertaa vakuutuksia helposti
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Vertailemalla vakuutuksia voit loytaa edullisemman vaihtoehdon.
            Selvita oma saastopotentiaalisi.
          </p>

          <Link
            href="/vertailu"
            className="btn btn-primary mt-8 min-h-[48px] px-8 text-base shadow-lg shadow-accent/25"
          >
            Aloita ilmainen vertailu
            <ArrowRight className="h-5 w-5" />
          </Link>

          <p className="mt-5 text-sm text-white/40">
            Ei rekisteroitymista. Ei sitoutumista. 100 % ilmainen palvelu.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
