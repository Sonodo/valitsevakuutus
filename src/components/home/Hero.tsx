import Link from 'next/link';
import { Shield, CheckCircle, TrendingDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-teal-dark">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-teal-light blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-amber blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Vertaa vakuutuksia ja{' '}
            <span className="text-teal-light">säästä satoja euroja</span>
          </h1>

          <p className="mt-6 text-lg text-white/80 sm:text-xl">
            Suomen kattavin vakuutusvertailu — kaikki vakuutusyhtiöt, kaikki
            vakuutuslajit, yhdessä paikassa.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/vertailu"
              className="inline-flex min-h-[44px] items-center rounded-xl bg-teal px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-teal-dark hover:shadow-xl"
            >
              Aloita vertailu
            </Link>
            <Link
              href="/oppaat"
              className="inline-flex min-h-[44px] items-center rounded-xl border-2 border-white/30 px-8 py-3 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Tutustu oppaisiin
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="h-5 w-5 text-teal-light" />
              <span className="text-sm font-medium">10 vakuutusyhtiötä</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="h-5 w-5 text-teal-light" />
              <span className="text-sm font-medium">7 vakuutuslajia</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <TrendingDown className="h-5 w-5 text-teal-light" />
              <span className="text-sm font-medium">100% ilmainen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
