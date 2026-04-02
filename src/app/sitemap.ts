import type { MetadataRoute } from 'next';
import { INSURANCE_TYPES, SITE_URL } from '@/lib/constants';
import { providers } from '@/data/providers';
import { blogPosts } from '@/data/blog-posts';
import { guides } from '@/data/guides';
import { comparisons } from '@/data/comparisons';
import { cities } from '@/data/regions';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // ── Static pages ──────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/vertailu`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/vakuutusyhtiot`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blogi`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/oppaat`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/vakuutukset`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/laskurit`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/tietoa`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/metodologia`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/yhteystiedot`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/tietosuoja`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/vertaa`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/kayttoehdot`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/evasteet`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  // ── Insurance type pages (7) ──────────────────────────────
  const insuranceTypePages: MetadataRoute.Sitemap = INSURANCE_TYPES.map((t) => ({
    url: `${SITE_URL}/${t.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // ── Provider detail pages (10) ────────────────────────────
  const providerPages: MetadataRoute.Sitemap = providers.map((p) => ({
    url: `${SITE_URL}/vakuutusyhtiot/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ── Blog posts ────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blogi/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // ── Guides ────────────────────────────────────────────────
  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${SITE_URL}/oppaat/${guide.slug}`,
    lastModified: guide.updatedAt || guide.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // ── Provider VS comparison pages (20) ─────────────────────
  const comparisonPages: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${SITE_URL}/vertaa/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // ── City / regional pages (15) ────────────────────────────
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${SITE_URL}/vakuutukset/${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // ── Calculator pages (5) ──────────────────────────────────
  const calculatorPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/laskurit/autovakuutuslaskuri`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/laskurit/kotivakuutuslaskuri`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/laskurit/bonuslaskuri`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/laskurit/lemmikkivakuutuslaskuri`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/laskurit/saastolaskuri`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  return [
    ...staticPages,
    ...insuranceTypePages,
    ...providerPages,
    ...blogPages,
    ...guidePages,
    ...comparisonPages,
    ...cityPages,
    ...calculatorPages,
  ];
}
