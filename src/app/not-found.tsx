import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24">
        <div className="text-center">
          <p className="text-7xl font-bold text-teal">404</p>
          <h1 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
            Sivua ei löytynyt
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Etsimääsi sivua ei valitettavasti löydy. Se on ehkä siirretty tai poistettu.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-block rounded-lg bg-teal px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-dark"
            >
              Takaisin etusivulle
            </Link>
            <Link
              href="/vertailu"
              className="inline-block rounded-lg bg-navy px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-navy-light"
            >
              Vertaa vakuutuksia
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 text-left">
            <h2 className="mb-4 text-center text-lg font-semibold text-navy">
              Ehkä etsit jotain näistä?
            </h2>
            <div className="mx-auto grid max-w-lg gap-3">
              <Link
                href="/autovakuutus"
                className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-teal"
              >
                Autovakuutus vertailu
              </Link>
              <Link
                href="/kotivakuutus"
                className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-teal"
              >
                Kotivakuutus vertailu
              </Link>
              <Link
                href="/vakuutusyhtiot"
                className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-teal"
              >
                Vakuutusyhtiöt
              </Link>
              <Link
                href="/blogi"
                className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-teal"
              >
                Vakuutusblogi
              </Link>
              <Link
                href="/oppaat"
                className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-teal"
              >
                Vakuutusoppaat
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
