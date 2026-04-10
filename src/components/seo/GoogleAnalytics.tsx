'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-KS4VKK3Q98'
const CONSENT_KEY = 'valitsevakuutus-cookie-consent'

export default function GoogleAnalytics() {
  const [consentGranted, setConsentGranted] = useState(false)

  useEffect(() => {
    // Check stored consent on mount
    try {
      const stored = localStorage.getItem(CONSENT_KEY)
      if (stored) {
        const consent = JSON.parse(stored)
        if (consent.analytics) {
          setConsentGranted(true)
        }
      }
    } catch {
      // No valid consent stored
    }

    // Listen for consent changes from CookieConsent component
    const handleStorage = (e: StorageEvent) => {
      if (e.key === CONSENT_KEY && e.newValue) {
        try {
          const consent = JSON.parse(e.newValue)
          setConsentGranted(consent.analytics === true)
        } catch {
          // ignore
        }
      }
    }

    // Also listen for custom event dispatched by CookieConsent in same tab
    const handleConsentUpdate = () => {
      try {
        const stored = localStorage.getItem(CONSENT_KEY)
        if (stored) {
          const consent = JSON.parse(stored)
          setConsentGranted(consent.analytics === true)
        }
      } catch {
        // ignore
      }
    }

    window.addEventListener('storage', handleStorage)
    window.addEventListener('cookie-consent-update', handleConsentUpdate)
    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener('cookie-consent-update', handleConsentUpdate)
    }
  }, [])

  if (!consentGranted) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            'analytics_storage': 'granted',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
          });
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
