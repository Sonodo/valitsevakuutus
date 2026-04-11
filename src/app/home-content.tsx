'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Shield,
  ShieldCheck,
  Car,
  Home,
  Plane,
  PawPrint,
  Heart,
  ShieldPlus,
  Baby,
  Check,
  Users,
  Zap,
  Search,
  BarChart3,
  Clock,
  TrendingDown,
  Star,
  Scale,
  Minus,
  Plus,
} from 'lucide-react';
import { AnimatedHeading, ScrollReveal, WaveDivider, StatsCounter } from '@/components/landing';

/* ═══════════════════════════════════════════════════════════════════
   Valitse Vakuutus — Premium Landing Page
   12 visually varied sections with Framer Motion animations
   ═══════════════════════════════════════════════════════════════════ */

const ease = [0.25, 0.1, 0.25, 1] as const;

/* ── Data ───────────────────────────────────────────────────────── */

const faqItems = [
  {
    q: 'Onko Valitse Vakuutuksen palvelu ilmainen?',
    a: 'Kyllä, palvelumme on täysin ilmainen kuluttajille. Saatamme saada korvauksen vakuutusyhtiöiltä, mutta se ei vaikuta vertailun tuloksiin tai järjestykseen.',
  },
  {
    q: 'Kuinka usein vakuutustiedot päivitetään?',
    a: 'Tarkistamme vakuutustiedot neljännesvuosittain ja päivitämme aina, kun yhtiöt muuttavat hintojaan tai ehtojaan. Hinta-arviot perustuvat julkisiin hintatietoihin ja vakuutuslaskureihin.',
  },
  {
    q: 'Voiko vakuutusyhtiötä vaihtaa milloin tahansa?',
    a: 'Liikennevakuutuksen voi vaihtaa milloin tahansa. Muissa vakuutuksissa irtisanominen tulee tehdä ennen vakuutuskauden päättymistä, yleensä kuukauden irtisanomisajalla. Hintojen korotus antaa erityisen irtisanomisoikeuden.',
  },
  {
    q: 'Miten vakuutusten kilpailuttaminen kannattaa aloittaa?',
    a: 'Selvitä ensin nykyiset vakuutuksesi: mitä vakuutuksia sinulla on ja mitä ne maksavat. Pyydä sitten tarjoukset 3–5 yhtiöstä. Vertaile kokonaisuutta: hinta + kattavuus + omavastuu + korvauspalvelun laatu.',
  },
  {
    q: 'Siirtyykö autovakuutuksen bonus uuteen yhtiöön?',
    a: 'Kyllä. Bonusluokka on henkilökohtainen ja siirtyy automaattisesti yhtiöstä toiseen. Uusi yhtiö voi tarkistaa bonustietosi suoraan vakuutusyhtiöiden yhteisestä tietojärjestelmästä.',
  },
  {
    q: 'Mitä keskittämisetu tarkoittaa?',
    a: 'Keskittämisetu on alennus asiakkaille, joilla on useita vakuutuksia samassa yhtiössä. Esimerkiksi OP-bonus voi olla jopa 17 %. Keskittämisetu ei aina tarkoita kokonaisedullisinta ratkaisua — kilpailuttaminen voi olla halvempaa.',
  },
];

const howItWorks = [
  {
    step: 1,
    icon: Search,
    title: 'Vertaile',
    desc: 'Selaa kaikkien vakuutusyhtiöiden tuotteita yhdessä paikassa. Suodata vakuutustyypin, hinnan tai kattavuuden mukaan.',
  },
  {
    step: 2,
    icon: BarChart3,
    title: 'Valitse',
    desc: 'Vertaa vakuutuksia rinnakkain — hinta, kattavuus, omavastuu ja asiakastyytyväisyys yhdellä silmäyksellä.',
  },
  {
    step: 3,
    icon: ArrowRight,
    title: 'Vakuuta',
    desc: 'Siirry suoraan vakuutusyhtiön sivuille ja hanki valitsemasi vakuutus. Helppoa ja nopeaa.',
  },
];

const valueProps = [
  {
    icon: Shield,
    title: 'Kattava vertailu',
    description: 'Emme suosi mitään vakuutusyhtiötä. Vertailumme perustuu todellisiin hintoihin, kattavuuteen ja asiakastyytyväisyyteen.',
  },
  {
    icon: Clock,
    title: 'Aina ajan tasalla',
    description: 'Tarkistamme vakuutustiedot säännöllisesti. Näet aina ajankohtaiset hinnat ja ehdot yhdestä paikasta.',
  },
  {
    icon: TrendingDown,
    title: 'Säästä satoja euroja',
    description: 'Suomalaiset maksavat keskimäärin liikaa vakuutuksistaan. Kilpailuttamalla voit säästää 200–500 €/vuosi.',
  },
  {
    icon: Scale,
    title: 'Kaikki yhtiöt',
    description: 'OP, LähiTapiola, If, Fennia, POP Vakuutus ja muut — 10 vakuutusyhtiötä yhdessä paikassa ilman erillisiä hakuja.',
  },
];

const insuranceCategories = [
  { icon: Car, title: 'Autovakuutus', desc: 'Liikenne & kasko', href: '/autovakuutus', bg: 'bg-accent-100', text: 'text-accent-900', iconColor: 'text-accent-600' },
  { icon: Home, title: 'Kotivakuutus', desc: 'Koti & irtaimisto', href: '/kotivakuutus', bg: 'bg-accent-300', text: 'text-white', iconColor: 'text-white/80' },
  { icon: Plane, title: 'Matkavakuutus', desc: 'Turva matkoille', href: '/matkavakuutus', bg: 'bg-accent-400', text: 'text-white', iconColor: 'text-white/80' },
  { icon: PawPrint, title: 'Lemmikkivakuutus', desc: 'Koira & kissa', href: '/lemmikkivakuutus', bg: 'bg-accent', text: 'text-white', iconColor: 'text-white/80' },
];

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

interface HomeContentProps {
  providerCount: number;
  insuranceTypeCount: number;
  providers: Array<{
    id: string;
    name: string;
    shortName: string;
    slug: string;
    color: string;
    satisfaction: number;
  }>;
  latestPosts: Array<{
    slug: string;
    title: string;
    description: string;
    category: string;
    publishedAt: string;
    readTime: number;
  }>;
}

export default function HomeContent({
  providerCount,
  insuranceTypeCount,
  providers,
  latestPosts,
}: HomeContentProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO
          Full viewport, dark navy, animated heading
         ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] overflow-hidden bg-navy">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow orbs */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[128px]" />
          <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-accent-400/10 blur-[128px]" />
          <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-accent-300/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-20 sm:px-6 sm:pb-36 sm:pt-28 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              Vakuutusvertailu 2026
            </motion.div>

            {/* Animated heading */}
            <AnimatedHeading
              text="VERTAA VAKUUTUKSIA."
              className="text-4xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="mt-2 text-4xl font-extrabold uppercase leading-tight tracking-wide sm:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-accent-400 to-accent-200 bg-clip-text text-transparent">
                Säästä satoja euroja.
              </span>
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease }}
              className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80"
            >
              Vertaile auto-, koti-, matka-, lemmikki- ja henkivakuutuksia kaikilta
              suomalaisilta vakuutusyhtiöiltä. Kattava ja ilmainen palvelu.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/autovakuutus"
                className="group inline-flex items-center justify-center border-2 border-accent bg-accent px-6 py-3 sm:px-8 sm:py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                Vertaa vakuutuksia
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/oppaat"
                className="inline-flex items-center justify-center border-2 border-white/30 px-6 py-3 sm:px-8 sm:py-4 text-sm font-bold uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-white hover:text-white"
              >
                Lue oppaat
              </Link>
            </motion.div>

            {/* Hero trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1, ease }}
              className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
            >
              {[
                { value: `${providerCount}`, label: 'vakuutusyhtiötä' },
                { value: `${insuranceTypeCount}`, label: 'vakuutuslajia' },
                { value: '100%', label: 'ilmainen' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  {i > 0 && <div className="h-8 w-px bg-white/10" />}
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                    <p className="text-sm text-slate-400">{item.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Animated wave to white */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider color="#ffffff" />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: TRUST BAR
          Subtle light strip
         ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 sm:px-6 lg:px-8">
          {[
            { icon: Shield, text: 'Laaja vertailu', color: 'text-accent' },
            { icon: Check, text: 'Ilmainen palvelu', color: 'text-emerald-500' },
            { icon: Users, text: `${providerCount} vakuutusyhtiötä`, color: 'text-accent-400' },
            { icon: Zap, text: 'Säännöllisesti tarkistettu data', color: 'text-amber-500' },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <item.icon className={`h-5 w-5 ${item.color}`} />
                {item.text}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: INSURANCE CATEGORIES — Gradient color progression
          Teal gradient steps like Lakimaatti process
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl">
              Mitä vakuutusta etsit?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-500">
              Valitse vakuutuslaji ja löydä sinulle sopivin vaihtoehto parhaaseen hintaan
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {insuranceCategories.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <Link
                  href={item.href}
                  className={`group flex min-h-[180px] flex-col items-center justify-center rounded-xl px-6 py-8 ${item.bg} transition-transform duration-300 hover:scale-[1.03]`}
                >
                  <item.icon className={`h-10 w-10 ${item.iconColor}`} />
                  <p className={`mt-4 text-center text-lg font-bold ${item.text}`}>
                    {item.title}
                  </p>
                  <p className={`mt-1 text-center text-sm font-medium ${item.text} opacity-70`}>
                    {item.desc}
                  </p>
                  <span className={`mt-3 text-xs font-bold uppercase tracking-widest ${item.text} opacity-60 transition-opacity group-hover:opacity-100`}>
                    Vertaile &rarr;
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Additional insurance types below */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: Heart, title: 'Henkivakuutus', desc: 'Turva perheelle', href: '/henkivakuutus', color: 'text-purple-600', bg: 'bg-purple-50' },
              { icon: ShieldPlus, title: 'Tapaturmavakuutus', desc: 'Vapaa-ajan turva', href: '/tapaturmavakuutus', color: 'text-red-600', bg: 'bg-red-50' },
              { icon: Baby, title: 'Lapsivakuutus', desc: 'Lasten tulevaisuus', href: '/lapsivakuutus', color: 'text-pink-600', bg: 'bg-pink-50' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={0.4 + i * 0.1} direction="up">
                <Link
                  href={item.href}
                  className={`group flex items-center gap-4 rounded-xl ${item.bg} px-6 py-5 transition-transform duration-300 hover:scale-[1.02]`}
                >
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                  <div>
                    <p className="font-bold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: VALUE PROPOSITION — 2-column layout
          Dark bg, large heading left, info cards right
         ───────────────────────────────────────────────────────────── */}
      <WaveDivider color="#0B1F3F" flip={false} />
      <section className="bg-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left: large heading and text */}
            <ScrollReveal direction="left">
              <div className="max-w-xl">
                <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-3xl lg:text-4xl">
                  Läpinäkyvä. Kattava. Ilmainen.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/70">
                  Suomalaiset maksavat keskimäärin liikaa vakuutuksistaan. Valitse Vakuutus auttaa löytämään
                  paremman turvan edullisemmin — vertailemalla kaikkien vakuutusyhtiöiden tuotteet kattavasti yhdessä paikassa.
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/50">
                  Kilpailuttamalla vakuutuksesi voit säästää tyypillisesti 200–500 euroa vuodessa
                  menettämättä kattavuutta. Hinta-arviomme perustuvat vakuutusyhtiöiden julkisiin laskureihin.
                </p>
                <div className="mt-8">
                  <Link
                    href="/autovakuutus"
                    className="inline-flex items-center gap-2 border-2 border-accent bg-accent px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-transparent hover:text-white"
                  >
                    Aloita vertailu
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: 2x2 value cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {valueProps.map((vp, i) => (
                <ScrollReveal key={i} delay={i * 0.12} direction="right">
                  <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                    <vp.icon className="h-8 w-8 text-accent-400" />
                    <h3 className="mt-4 text-base font-bold text-white">
                      {vp.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {vp.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: STATS
          Dark bg, CountUp numbers
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-navy pb-20 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <StatsCounter
            stats={[
              { end: providerCount, label: 'Vakuutusyhtiötä' },
              { end: insuranceTypeCount, label: 'Vakuutuslajia' },
              { end: 500, suffix: ' €', label: 'Säästöpotentiaali/v' },
              { end: 0, suffix: ' €', label: 'Hintaa palvelusta' },
            ]}
          />
        </div>
      </section>
      <WaveDivider color="#ffffff" />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: PROVIDERS
          White bg, provider grid with colored initial circles
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl">
                Vakuutusyhtiöt vertailussa
              </h2>
              <p className="mt-3 text-slate-500">
                Vertailemme kaikkia Suomen suurimpia vakuutusyhtiöitä
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {providers.map((provider, i) => (
              <ScrollReveal key={provider.id} delay={i * 0.06} direction="up">
                <Link
                  href={`/yhtiot/${provider.slug}`}
                  className="card-hover group flex flex-col items-center text-center"
                >
                  <div
                    className="mb-3 flex h-14 w-14 items-center justify-center rounded-full text-white text-xl font-bold shadow-lg"
                    style={{ backgroundColor: provider.color }}
                  >
                    {provider.shortName.charAt(0)}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-accent">{provider.shortName}</h3>
                  <div className="mt-1 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs text-slate-500">{provider.satisfaction}/10</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: HOW IT WORKS — Horizontal numbered steps
          Light bg, connected step icons
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="mb-14 text-center">
              <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl">
                Näin helppoa se on
              </h2>
              <p className="mt-3 text-slate-500">
                Löydä paras vakuutus kolmessa askeleessa
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="absolute left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] top-10 hidden h-0.5 bg-gradient-to-r from-accent-200 via-accent-400 to-accent md:block" aria-hidden="true" />

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {howItWorks.map((item, i) => (
                <ScrollReveal key={item.step} delay={i * 0.15} direction="up">
                  <div className="flex flex-col items-center text-center">
                    {/* Numbered circle */}
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-accent/20">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                        {item.step}
                      </div>
                    </div>
                    <item.icon className="mt-6 h-8 w-8 text-accent-400" />
                    <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: SAVINGS HIGHLIGHT — Gradient banner
          Eye-catching savings message
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-accent to-accent-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <ShieldCheck className="mx-auto h-12 w-12 text-white/80" />
            <h2 className="mt-6 text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
              Keskimäärin 300 € säästö vuodessa
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Tutkimusten mukaan vakuutusten kilpailuttaminen säästää suomalaiselle kotitaloudelle
              keskimäärin 200–500 euroa vuodessa. Vertailu on ilmaista — säästöt todellisia.
            </p>
            <div className="mt-8">
              <Link
                href="/autovakuutus"
                className="inline-flex items-center gap-2 border-2 border-white bg-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-accent transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                Aloita säästäminen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: COMPARISON TABLE
          White bg, highlighted "Valitse Vakuutus" column
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl">
              Miksi Valitse Vakuutus?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-500">
              Vertaile eri tapoja löytää paras vakuutus
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <div className="mt-12 overflow-x-auto rounded-lg ring-1 ring-slate-200">
              <table className="w-full min-w-[500px] text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-white">
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-slate-400 sm:px-6">&nbsp;</th>
                    <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-slate-400 sm:px-6">
                      Itse etsiminen
                    </th>
                    <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-slate-400 sm:px-6">
                      Vakuutusmeklari
                    </th>
                    <th className="bg-navy px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-white sm:px-6">
                      Valitse Vakuutus
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white text-sm">
                  {[
                    { label: 'Kattavuus', a: 'Yhtiö kerrallaan', b: '3–5 yhtiötä', c: 'Kaikki 10 yhtiötä' },
                    { label: 'Läpinäkyvyys', a: 'Mainokset vaikuttavat', b: 'Provisiopohjaisuus', c: 'Avoin menetelmä' },
                    { label: 'Vertailu rinnakkain', a: 'Vaikea vertailla', b: 'Rajallinen', c: 'Selkeä taulukko' },
                    { label: 'Ajankäyttö', a: 'Tunteja', b: 'Tapaamiset', c: 'Muutama minuutti' },
                    { label: 'Hinta', a: 'Ilmainen', b: 'Palkkiopohjainen', c: 'Ilmainen' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-5 py-4 font-medium text-slate-900 sm:px-6">{row.label}</td>
                      <td className="px-5 py-4 text-center text-slate-500 sm:px-6">{row.a}</td>
                      <td className="px-5 py-4 text-center text-slate-500 sm:px-6">{row.b}</td>
                      <td className="bg-navy/5 px-5 py-4 text-center font-bold text-navy sm:px-6">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: FAQ ACCORDION
          Light bg, animated expand/collapse
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl">
              Usein kysytyt kysymykset
            </h2>
          </ScrollReveal>

          <div className="mt-10 divide-y divide-slate-200 border-t border-slate-200">
            {faqItems.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05} direction="none">
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="flex w-full items-center justify-between py-6 text-left min-h-[44px]"
                    aria-expanded={openFaqIndex === index}
                  >
                    <span className="pr-4 text-base font-semibold text-slate-900 sm:text-lg">
                      {item.q}
                    </span>
                    {openFaqIndex === index ? (
                      <Minus className="h-5 w-5 shrink-0 text-accent" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-slate-400" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaqIndex === index && (
                      <motion.div
                        key={`faq-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 leading-relaxed text-slate-600">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11: BLOG PREVIEW
          White bg, 3-col article cards
         ───────────────────────────────────────────────────────────── */}
      {latestPosts.length > 0 && (
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="mb-12 flex items-center justify-between">
                <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl">
                  Ajankohtaista
                </h2>
                <Link
                  href="/blogi"
                  className="hidden items-center gap-1 text-sm font-bold uppercase tracking-widest text-accent hover:text-accent-600 sm:flex"
                >
                  Kaikki artikkelit <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {latestPosts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.12} direction="up">
                  <Link
                    href={`/blogi/${post.slug}`}
                    className="card-hover group flex flex-col h-full"
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent">{post.category}</span>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 line-clamp-2 text-sm text-slate-600">{post.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-xs text-slate-400">
                        {post.readTime} min lukuaika
                      </p>
                      <span className="text-xs font-bold uppercase tracking-widest text-accent opacity-0 transition-opacity group-hover:opacity-100">
                        Lue &rarr;
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="mt-8 text-center sm:hidden">
                <Link href="/blogi" className="text-sm font-bold uppercase tracking-widest text-accent hover:text-accent-600">
                  Kaikki artikkelit &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SECTION 12: CTA
          Dark bg with glow, strong call to action
         ───────────────────────────────────────────────────────────── */}
      <WaveDivider color="#0B1F3F" flip={false} />
      <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
        {/* Glow */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[128px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <AnimatedHeading
              as="h2"
              text="Löydä sinulle paras vakuutus"
              className="text-3xl font-extrabold text-white sm:text-4xl"
            />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
              Vertaa vakuutuksia ilmaiseksi ja löydä juuri sinulle sopiva turva parhaaseen hintaan.
              Kattava, läpinäkyvä ja täysin ilmainen palvelu.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/40">
              Tämä on vertailupalvelu, ei vakuutusneuvontaa. Hinta-arviot perustuvat julkisiin hintatietoihin.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/autovakuutus"
                className="group inline-flex items-center gap-2 border-2 border-accent bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                Vertaa vakuutuksia
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/oppaat"
                className="inline-flex items-center gap-2 border-2 border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-white hover:text-white"
              >
                Vakuutusoppaat
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
