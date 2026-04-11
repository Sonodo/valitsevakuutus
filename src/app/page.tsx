import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { providers } from '@/data/providers';
import { getLatestBlogPosts } from '@/data/blog-posts';
import { generalFAQ } from '@/data/faq';
import { INSURANCE_TYPES, SITE_NAME, SITE_URL } from '@/lib/constants';
import HomeContent from './home-content';

export const metadata: Metadata = {
  title: `Vakuutusvertailu 2026 — Vertaa vakuutuksia ja säästä | ${SITE_NAME}`,
  description:
    'Vertaa autovakuutuksia, kotivakuutuksia, matkavakuutuksia ja lemmikkivakuutuksia kattavasti. Löydä halvin vakuutus 10 yhtiön vertailusta. 100% ilmainen palvelu.',
  openGraph: {
    title: `${SITE_NAME} — Vertaa vakuutuksia ja löydä halvin vakuutus`,
    description:
      'Vertaa vakuutuksia kaikilta suomalaisilta vakuutusyhtiöiltä. Löydä halvin vakuutus. Ilmainen ja kattava.',
    url: '/',
    type: 'website',
  },
  alternates: { canonical: SITE_URL },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: generalFAQ.slice(0, 10).map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  const latestPosts = getLatestBlogPosts(3);

  return (
    <>
      <Header />

      <main>
        <HomeContent
          providerCount={providers.length}
          insuranceTypeCount={INSURANCE_TYPES.length}
          providers={providers.map((p) => ({
            id: p.id,
            name: p.name,
            shortName: p.shortName,
            slug: p.slug,
            color: p.color,
            satisfaction: p.satisfaction,
          }))}
          latestPosts={latestPosts.map((post) => ({
            slug: post.slug,
            title: post.title,
            description: post.description,
            category: post.category,
            publishedAt: post.publishedAt,
            readTime: post.readTime,
          }))}
        />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
