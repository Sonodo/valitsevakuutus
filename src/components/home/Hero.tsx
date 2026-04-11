import Link from 'next/link';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import WaveDivider from '@/components/WaveDivider';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/30 to-navy" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent-400/20 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-accent-400/20 opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pb-32 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 ring-1 ring-white/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            Vakuutusvertailu
          </div>

          {/* H1 */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Loyda oikea{' '}
            <span className="bg-gradient-to-r from-accent-400 to-accent-200 bg-clip-text text-transparent">
              vakuutusturva.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
            Vertaile auto-, koti-, matka- ja henkilovakuutuksia. Loyda kattavin
            turva parhaaseen hintaan.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/vertailu"
              className="btn btn-primary min-h-[48px] px-8 text-base shadow-lg shadow-accent/25"
            >
              Vertaa vakuutuksia
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#how-it-works"
              className="btn min-h-[48px] border border-white/20 bg-transparent px-8 text-base text-white hover:bg-white/10"
            >
              Miten se toimii?
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <div className="flex items-center gap-2 text-white/60">
              <Shield className="h-5 w-5 text-accent-400" />
              <span className="text-sm font-medium">Kaikki vakuutuslajit</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <CheckCircle className="h-5 w-5 text-accent-400" />
              <span className="text-sm font-medium">Kattava vertailu</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <CheckCircle className="h-5 w-5 text-accent-400" />
              <span className="text-sm font-medium">Ilmainen</span>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider color="#F8FAFC" />
    </section>
  );
}
