import type { InsuranceProvider } from '@/types';
import { SITE_URL } from '@/lib/constants';

interface ProviderSchemaProps {
  provider: InsuranceProvider;
}

export default function ProviderSchema({ provider }: ProviderSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: provider.name,
    url: provider.website,
    description: provider.description,
    foundingDate: String(provider.founded),
    address: {
      '@type': 'PostalAddress',
      addressLocality: provider.headquarters,
      addressCountry: 'FI',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: provider.satisfaction.toFixed(1),
      bestRating: '10',
      worstRating: '0',
      ratingCount: provider.reviewCount,
    },
    sameAs: [provider.website],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${provider.name} — Arvostelu ja vertailu`,
    url: `${SITE_URL}/vakuutusyhtiot/${provider.slug}`,
    description: provider.description,
    about: {
      '@type': 'Organization',
      name: provider.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}
