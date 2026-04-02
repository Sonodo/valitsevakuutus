'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';
import { MAIN_NAV, SITE_NAME } from '@/lib/constants';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-teal-light" />
          <span className="text-xl font-bold tracking-tight">{SITE_NAME}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {MAIN_NAV.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-64 rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-teal"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/vertailu"
            className="ml-3 rounded-lg bg-teal px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            Aloita vertailu
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Sulje valikko' : 'Avaa valikko'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="border-t border-white/10 px-4 pb-4 lg:hidden">
          {MAIN_NAV.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="flex w-full items-center justify-between py-3 text-sm font-medium text-white/90"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="ml-4 border-l border-white/20 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-sm text-white/70 transition-colors hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-sm font-medium text-white/90 transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/vertailu"
            className="mt-3 block rounded-lg bg-teal px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
            onClick={() => setMobileOpen(false)}
          >
            Aloita vertailu
          </Link>
        </nav>
      )}
    </header>
  );
}
