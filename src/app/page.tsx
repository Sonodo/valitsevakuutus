import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import InsuranceTypeCards from '@/components/home/InsuranceTypeCards';
import HowItWorks from '@/components/home/HowItWorks';
import TopProviders from '@/components/home/TopProviders';
import HomeFAQ from '@/components/home/HomeFAQ';
import CTASection from '@/components/home/CTASection';
import { generalFAQ } from '@/data/faq';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Vakuutusvertailu 2026 — Vertaa vakuutuksia ja säästä | ${SITE_NAME}`,
  description:
    'Vertaa autovakuutuksia, kotivakuutuksia ja lemmikkivakuutuksia puolueettomasti. Löydä halvin vakuutus 10 yhtiön vertailusta. 100% ilmainen palvelu.',
  alternates: {
    canonical: SITE_URL,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: generalFAQ.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <InsuranceTypeCards />
        <HowItWorks />
        <TopProviders />
        <HomeFAQ items={generalFAQ} />
        <CTASection />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
