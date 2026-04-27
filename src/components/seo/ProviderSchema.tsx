import type { InsuranceProvider, InsuranceProduct, InsuranceType } from '@/types';
import { SITE_URL } from '@/lib/constants';

interface ProviderSchemaProps {
  provider: InsuranceProvider;
}

// Map internal insurance type → Finnish category label used in schema.org
const INSURANCE_CATEGORY_LABEL: Record<InsuranceType, string> = {
  auto: 'Auto- ja liikennevakuutus',
  home: 'Kotivakuutus',
  travel: 'Matkavakuutus',
  pet: 'Lemmikkivakuutus',
  life: 'Henkivakuutus',
  accident: 'Tapaturmavakuutus',
  child: 'Lapsivakuutus',
};

// "auto" products are sold to consumers, but commercial fleet variants exist.
// Comparison site MVP targets consumers only — be honest, mark all as consumers.
const PRODUCT_AUDIENCE = 'consumer';

/**
 * Build the AggregateOffer for an InsuranceProduct.
 * - Always uses lowPrice/highPrice (never invents specificity — comparison sites quote "alkaen X €")
 * - Monthly products use UnitPriceSpecification with unitText: MONTH
 * - Yearly products use unitText: ANN
 */
function buildPriceOffer(product: InsuranceProduct, providerUrl: string) {
  const isMonthly = product.priceRange.unit === 'eur/month';
  return {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: product.priceRange.min,
    highPrice: product.priceRange.max,
    availability: 'https://schema.org/InStock',
    url: providerUrl,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      priceCurrency: 'EUR',
      price: product.priceRange.min,
      unitText: isMonthly ? 'MONTH' : 'ANN',
      referenceQuantity: {
        '@type': 'QuantitativeValue',
        value: 1,
        unitCode: isMonthly ? 'MON' : 'ANN',
      },
    },
  };
}

function buildInsuranceProductSchema(product: InsuranceProduct, provider: InsuranceProvider) {
  const productUrl = `${SITE_URL}/vakuutusyhtiot/${provider.slug}#${product.id}`;
  const providerUrl = provider.affiliateUrl || provider.website;

  return {
    '@context': 'https://schema.org',
    '@type': ['InsuranceProduct', 'FinancialProduct'],
    '@id': productUrl,
    name: product.name,
    category: INSURANCE_CATEGORY_LABEL[product.type],
    url: productUrl,
    description: product.highlights.join(' ') || `${product.name} — ${INSURANCE_CATEGORY_LABEL[product.type]}, taso: ${product.tier}.`,
    provider: {
      '@type': 'Organization',
      name: provider.name,
      url: provider.website,
    },
    areaServed: {
      '@type': 'Country',
      name: 'FI',
    },
    audience: {
      '@type': 'Audience',
      audienceType: PRODUCT_AUDIENCE,
    },
    offers: buildPriceOffer(product, providerUrl),
    additionalProperty: product.deductibles.map((d) => ({
      '@type': 'PropertyValue',
      name: 'Omavastuu',
      value: `${d.amount} €`,
      description: d.label,
    })),
    dateModified: product.lastVerified,
  };
}

export default function ProviderSchema({ provider }: ProviderSchemaProps) {
  const organizationSchema = {
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

  const productSchemas = provider.products.map((p) =>
    buildInsuranceProductSchema(p, provider)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {productSchemas.map((schema, i) => (
        <script
          key={`insurance-product-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
