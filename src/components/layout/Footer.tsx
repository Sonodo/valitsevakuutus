import Link from 'next/link';
import { Shield } from 'lucide-react';
import { FOOTER_LINKS, SITE_NAME } from '@/lib/constants';

const CROSS_PRODUCT_LINKS = [
  { label: 'Asuntomaatti', description: 'Asuntojen hintavertailu', href: 'https://asuntomaatti.fi' },
  { label: 'Lainavertailu', description: 'Lainojen vertailu', href: 'https://lainavertailu.fi' },
  { label: 'Energiavertailu', description: 'Sähkön hintavertailu', href: 'https://energiavertailu.fi' },
  { label: 'Alennuskartta', description: 'Tarjoukset ja alennukset', href: 'https://alennuskartta.fi' },
  { label: 'Fixmera', description: 'Kotipalvelut', href: 'https://fixmera.com' },
  { label: 'Lakimaatti', description: 'Oikeudelliset asiakirjat', href: 'https://lakimaatti.fi' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Vakuutukset */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Vakuutukset
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.vakuutukset.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Työkalut */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Työkalut
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.tyokalut.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tietoa */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Tietoa
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.tietoa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Muut palvelumme */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Muut palvelumme
            </h3>
            <ul className="space-y-2">
              {CROSS_PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                    <span className="block text-xs text-white/40">
                      {link.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Yhteystiedot */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Yhteystiedot
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-teal-light" />
                <span className="text-sm font-semibold">{SITE_NAME}</span>
              </div>
              <p className="text-sm text-white/70">
                Suomen kattavin vakuutusvertailu.
                <br />
                Puolueeton ja ilmainen palvelu.
              </p>
              <p className="text-sm text-white/70">
                info@vakuutusvertailu.fi
              </p>
            </div>
          </div>
        </div>

        {/* Transparency Note */}
        <div className="mt-10 rounded-lg bg-white/5 px-4 py-3">
          <p className="text-xs text-white/50">
            Osa linkeistä on affiliate-linkkejä, joista saamme pienen korvauksen. Tämä ei
            vaikuta vertailun järjestykseen tai suosituksiimme.{' '}
            <Link
              href="/metodologia"
              className="text-teal-light underline transition-colors hover:text-white"
            >
              Lue lisää
            </Link>
            .
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {currentYear} {SITE_NAME}. Kaikki oikeudet pidätetään.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/kayttoehdot"
              className="text-xs text-white/40 transition-colors hover:text-white/70"
            >
              Käyttöehdot
            </Link>
            <Link
              href="/evasteet"
              className="text-xs text-white/40 transition-colors hover:text-white/70"
            >
              Evästeet
            </Link>
            <Link
              href="/tietosuoja"
              className="text-xs text-white/40 transition-colors hover:text-white/70"
            >
              Tietosuoja
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
