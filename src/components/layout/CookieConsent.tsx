'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'cookie_consent';

type ConsentState = 'pending' | 'granted' | 'denied';

function getStoredConsent(): ConsentState {
  if (typeof window === 'undefined') return 'pending';
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'granted' || stored === 'denied') return stored;
  } catch {
    // localStorage may be unavailable
  }
  return 'pending';
}

function updateGtagConsent(granted: boolean) {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) return;
  const state = granted ? 'granted' : 'denied';
  gtag('consent', 'update', {
    analytics_storage: state,
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}

function updateClarityConsent(granted: boolean, retries = 5) {
  const clarity = (window as unknown as { clarity?: (...args: unknown[]) => void }).clarity;
  if (!clarity) {
    if (retries > 0) setTimeout(() => updateClarityConsent(granted, retries - 1), 200);
    return;
  }
  clarity('consentv2', {
    analytics_storage: granted ? 'granted' : 'denied',
    ad_storage: 'denied',
  });
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>('pending');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = getStoredConsent();
    setConsent(stored);

    if (stored === 'granted') {
      updateGtagConsent(true);
      updateClarityConsent(true);
    } else if (stored === 'denied') {
      updateGtagConsent(false);
      updateClarityConsent(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'granted');
    setConsent('granted');
    updateGtagConsent(true);
    updateClarityConsent(true);
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, 'denied');
    setConsent('denied');
    updateGtagConsent(false);
    updateClarityConsent(false);
  };

  if (!mounted || consent !== 'pending') return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-navy/10 bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
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
              onClick={handleReject}
              className="min-h-[44px] rounded-md border border-gray-300 bg-white px-4 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Hylkää
            </button>
            <button
              onClick={handleAccept}
              className="min-h-[44px] rounded-md bg-teal px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-teal-dark"
            >
              Hyväksy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
