'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = 'vakuutusvertailu-cookie-consent';

function updateGtagConsent(consent: ConsentState) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      ad_storage: consent.marketing ? 'granted' : 'denied',
      ad_user_data: consent.marketing ? 'granted' : 'denied',
      ad_personalization: consent.marketing ? 'granted' : 'denied',
    });
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as ConsentState;
        updateGtagConsent(parsed);
        // Already consented, don't show banner
        return;
      }
    } catch {
      // Invalid stored data, show banner
    }
    setVisible(true);
  }, []);

  const saveConsent = useCallback((state: ConsentState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateGtagConsent(state);
    setVisible(false);
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  }, [saveConsent]);

  const acceptNecessary = useCallback(() => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  }, [saveConsent]);

  const saveCustom = useCallback(() => {
    saveConsent(consent);
  }, [consent, saveConsent]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-navy/10 bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        {!showCustomize ? (
          /* Compact banner */
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-700">
              Käytämme evästeitä parantaaksemme palvelua.{' '}
              <Link
                href="/evasteet"
                className="font-medium text-teal underline hover:text-teal-dark"
              >
                Lue lisää
              </Link>
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowCustomize(true)}
                className="min-h-[44px] rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Muokkaa
              </button>
              <button
                onClick={acceptNecessary}
                className="min-h-[44px] rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Vain välttämättömät
              </button>
              <button
                onClick={acceptAll}
                className="min-h-[44px] rounded-md bg-teal px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-teal-dark"
              >
                Hyväksy kaikki
              </button>
            </div>
          </div>
        ) : (
          /* Customize panel */
          <div className="space-y-3">
            <p className="text-sm font-semibold text-navy">Evästeasetukset</p>

            <div className="grid gap-2 sm:grid-cols-3">
              {/* Necessary — always on */}
              <label className="flex items-start gap-2 rounded-md bg-gray-50 p-2.5">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-0.5 h-4 w-4 rounded border-gray-300"
                />
                <div>
                  <span className="block text-xs font-medium text-gray-900">
                    Välttämättömät
                  </span>
                  <span className="block text-xs text-gray-500">
                    Sivuston toiminta
                  </span>
                </div>
              </label>

              {/* Analytics */}
              <label className="flex cursor-pointer items-start gap-2 rounded-md bg-gray-50 p-2.5 hover:bg-gray-100">
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) =>
                    setConsent((prev) => ({ ...prev, analytics: e.target.checked }))
                  }
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-teal focus:ring-teal"
                />
                <div>
                  <span className="block text-xs font-medium text-gray-900">
                    Analytiikka
                  </span>
                  <span className="block text-xs text-gray-500">
                    Kävijäseuranta (GA4)
                  </span>
                </div>
              </label>

              {/* Marketing */}
              <label className="flex cursor-pointer items-start gap-2 rounded-md bg-gray-50 p-2.5 hover:bg-gray-100">
                <input
                  type="checkbox"
                  checked={consent.marketing}
                  onChange={(e) =>
                    setConsent((prev) => ({ ...prev, marketing: e.target.checked }))
                  }
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-teal focus:ring-teal"
                />
                <div>
                  <span className="block text-xs font-medium text-gray-900">
                    Markkinointi
                  </span>
                  <span className="block text-xs text-gray-500">
                    Kohdennettu mainonta
                  </span>
                </div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <Link
                href="/evasteet"
                className="text-xs text-teal underline hover:text-teal-dark"
              >
                Evästekäytäntö
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowCustomize(false)}
                  className="min-h-[44px] rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Peruuta
                </button>
                <button
                  onClick={saveCustom}
                  className="min-h-[44px] rounded-md bg-teal px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-teal-dark"
                >
                  Tallenna valinnat
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Extend Window type for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
