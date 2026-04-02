import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-teal-dark to-teal">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-amber blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
          Valmis vertailemaan?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Suomalaiset maksavat vakuutuksistaan keskimäärin 200–500 euroa liikaa
          vuodessa. Selvitä oma säästöpotentiaalisi.
        </p>

        <Link
          href="/vertailu"
          className="mt-8 inline-flex min-h-[44px] items-center rounded-xl bg-white px-8 py-3 text-base font-semibold text-teal-dark shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
        >
          Aloita ilmainen vertailu nyt
        </Link>

        <p className="mt-4 text-sm text-white/60">
          Ei rekisteröitymistä. Ei sitoutumista. 100 % ilmainen palvelu.
        </p>
      </div>
    </section>
  );
}
