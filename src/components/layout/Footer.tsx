import Link from 'next/link';
import { Shield } from 'lucide-react';
import { FOOTER_LINKS, SITE_NAME } from '@/lib/constants';

const VALITSE_NETWORK = [
  { label: 'Valitse.fi', href: 'https://valitse.fi' },
  { label: 'Valitse Sahko', href: 'https://valitsesahko.fi' },
  { label: 'Valitse Laina', href: 'https://valitselaina.fi' },
  { label: 'Valitse Liittyma', href: 'https://valitseliittyma.fi' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-accent-600">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Valitse<span className="text-accent-400">Vakuutus</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Suomen kattava vakuutusvertailu. Vertaa hintoja ja ehtoja kattavasti
              kaikista suurimmista vakuutusyhtioista.
            </p>
            <p className="mt-3 text-sm text-white/40"><a href="/yhteystiedot" className="hover:text-white/60 transition-colors">Ota yhteyttä</a></p>
          </div>

          {/* Palvelut (Tyokalut) */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Palvelut
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.tyokalut.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vakuutustyypit */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Vakuutustyypit
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.vakuutukset.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tietoa */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Tietoa
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.tietoa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Valitse Network */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">
            Valitse-verkosto
          </p>
          <div className="flex flex-wrap gap-2">
            {VALITSE_NETWORK.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener"
                className="rounded-full bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Transparency Note */}
        <div className="mt-8 rounded-xl bg-white/5 px-5 py-3">
          <p className="text-xs leading-relaxed text-white/40">
            Osa linkeista on affiliate-linkkeja, joista saamme pienen korvauksen. Tama ei
            vaikuta vertailun jarjestykseen tai suosituksiimme.{' '}
            <Link
              href="/metodologia"
              className="text-accent-400 underline transition-colors hover:text-white"
            >
              Lue lisaa
            </Link>
            .
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {currentYear} {SITE_NAME}. Kaikki oikeudet pidatetaan.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/kayttoehdot"
              className="text-xs text-white/30 transition-colors hover:text-white/60"
            >
              Kayttoehdot
            </Link>
            <Link
              href="/evasteet"
              className="text-xs text-white/30 transition-colors hover:text-white/60"
            >
              Evasteet
            </Link>
            <Link
              href="/tietosuoja"
              className="text-xs text-white/30 transition-colors hover:text-white/60"
            >
              Tietosuoja
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
