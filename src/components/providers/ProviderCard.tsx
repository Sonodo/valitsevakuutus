import Link from 'next/link';
import type { InsuranceProvider } from '@/types';
import { formatSatisfaction, formatPercentage } from '@/lib/utils';
import Badge from '@/components/ui/Badge';
import StarRating from '@/components/ui/StarRating';

interface ProviderCardProps {
  provider: InsuranceProvider;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-teal/30 hover:shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-lg text-sm font-bold text-white"
            style={{ backgroundColor: provider.color }}
          >
            {provider.shortName.slice(0, 2)}
          </div>
          <div>
            <h3 className="font-semibold text-navy">{provider.name}</h3>
            <p className="text-xs text-gray-500">
              Perustettu {provider.founded}
            </p>
          </div>
        </div>
        {provider.isAffiliate && <Badge variant="affiliate">Mainos</Badge>}
      </div>

      {/* Ratings */}
      <div className="mt-4 flex items-center gap-4">
        <div>
          <p className="text-xs text-gray-500">Tyytyväisyys</p>
          <div className="flex items-center gap-1">
            <StarRating rating={provider.satisfaction} max={10} />
            <span className="text-sm font-medium text-navy">
              {formatSatisfaction(provider.satisfaction)}
            </span>
          </div>
        </div>
        <div className="border-l border-gray-200 pl-4">
          <p className="text-xs text-gray-500">Markkinaosuus</p>
          <p className="text-sm font-medium text-navy">
            {formatPercentage(provider.marketShare)}
          </p>
        </div>
        <div className="border-l border-gray-200 pl-4">
          <p className="text-xs text-gray-500">Vakuutuslajit</p>
          <p className="text-sm font-medium text-navy">
            {provider.insuranceTypes.length} kpl
          </p>
        </div>
      </div>

      {/* Strengths */}
      <div className="mt-4">
        <ul className="space-y-1">
          {provider.strengths.slice(0, 3).map((strength, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
              <span className="mt-0.5 text-green-500">&#10003;</span>
              {strength}
            </li>
          ))}
        </ul>
      </div>

      {/* Link */}
      <Link
        href={`/vakuutusyhtiot/${provider.slug}`}
        className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-teal transition-colors hover:text-teal-dark"
      >
        Lue lisää &rarr;
      </Link>
    </div>
  );
}
