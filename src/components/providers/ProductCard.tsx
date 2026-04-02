import Link from 'next/link';
import type { InsuranceProduct, InsuranceProvider } from '@/types';
import { formatPriceRange } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

interface ProductCardProps {
  product: InsuranceProduct;
  provider?: InsuranceProvider;
}

function tierBadgeVariant(tier: string): 'default' | 'info' | 'warning' | 'success' {
  switch (tier) {
    case 'basic':
      return 'default';
    case 'standard':
      return 'info';
    case 'premium':
      return 'warning';
    case 'comprehensive':
      return 'success';
    default:
      return 'default';
  }
}

function tierLabel(tier: string): string {
  switch (tier) {
    case 'basic':
      return 'Perus';
    case 'standard':
      return 'Vakio';
    case 'premium':
      return 'Premium';
    case 'comprehensive':
      return 'Laaja';
    default:
      return tier;
  }
}

export default function ProductCard({ product, provider }: ProductCardProps) {
  const unit = product.priceRange.unit === 'eur/year' ? 'vuosi' : 'kk';

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-teal/30 hover:shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-navy">{product.name}</h3>
          {provider && (
            <p className="text-xs text-gray-500">{provider.name}</p>
          )}
        </div>
        <Badge variant={tierBadgeVariant(product.tier)}>
          {tierLabel(product.tier)}
        </Badge>
      </div>

      {/* Price */}
      <div className="mt-4">
        <p className="text-xl font-bold text-navy">
          {formatPriceRange(product.priceRange.min, product.priceRange.max, unit)}
        </p>
        {product.priceRange.note && (
          <p className="mt-1 text-xs text-gray-400">{product.priceRange.note}</p>
        )}
      </div>

      {/* Coverage highlights */}
      {product.highlights.length > 0 && (
        <ul className="mt-4 space-y-1">
          {product.highlights.slice(0, 4).map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
              <span className="mt-0.5 text-green-500">&#10003;</span>
              {highlight}
            </li>
          ))}
        </ul>
      )}

      {/* Suitable for tags */}
      {product.suitableFor.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.suitableFor.map((tag, i) => (
            <span
              key={i}
              className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-5">
        {provider?.isAffiliate && provider.affiliateUrl ? (
          <div>
            <a
              href={provider.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
            >
              Katso tarjous
            </a>
            <span className="mt-1.5 block text-center text-xs text-gray-400">Mainos</span>
          </div>
        ) : (
          <Link
            href={`/vakuutusyhtiot/${provider?.slug || product.providerId}`}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg border border-teal px-4 py-2.5 text-sm font-semibold text-teal transition-colors hover:bg-teal/5"
          >
            Lue lisää
          </Link>
        )}
      </div>
    </div>
  );
}
