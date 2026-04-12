import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants';
import CookieConsent from '@/components/layout/CookieConsent';
import GoogleAnalytics from '@/components/seo/GoogleAnalytics';
import './globals.css';

const CLARITY_ID = process.env.NODE_ENV === 'production' ? 'w9nc2vecgl' : '';

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Vertaa vakuutuksia ja säästä | Suomen kattava vakuutusvertailu`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'fi_FI',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Vertaa vakuutuksia ja säästä`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Vertaa vakuutuksia ja säästä`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    google: 'txKlddizt2JX0hbBYELQWYtzxdWRnSzohDhFA6nrLuU',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <GoogleAnalytics />
        {CLARITY_ID && (
          <>
            <Script id="ms-clarity" strategy="afterInteractive">
              {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${CLARITY_ID}");`}
            </Script>
            <Script id="clarity-consent-default" strategy="afterInteractive">
              {`(function w(){if(window.clarity){var c=localStorage.getItem("cookie_consent");clarity("consentv2",{analytics_storage:c==="granted"?"granted":"denied",ad_storage:"denied"})}else{setTimeout(w,100)}})();`}
            </Script>
          </>
        )}
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
