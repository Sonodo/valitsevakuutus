'use client';

import { useMemo } from 'react';
import { Check, X } from 'lucide-react';
import { providers } from '@/data/providers';
import type { InsuranceType, InsuranceTier, InsuranceProvider, CoverageItem } from '@/types';

// ============================================================
// CoverageMatrix — Side-by-side coverage comparison table
// ============================================================

interface CoverageMatrixProps {
  insuranceType: InsuranceType;
  providerIds?: string[];
  maxProviders?: number;
  tier?: InsuranceTier;
}

interface ProviderCoverage {
  provider: InsuranceProvider;
  coverageMap: Map<string, CoverageItem>;
  coverageScore: number;
}

export default function CoverageMatrix({
  insuranceType,
  providerIds,
  maxProviders = 5,
  tier,
}: CoverageMatrixProps) {
  const data = useMemo(() => {
    // Filter providers that have products for this insurance type
    let relevantProviders = providers.filter((p) =>
      p.products.some((prod) => prod.type === insuranceType)
    );

    // Filter by specific provider IDs if given
    if (providerIds && providerIds.length > 0) {
      relevantProviders = relevantProviders.filter((p) =>
        providerIds.includes(p.id)
      );
    }

    // Build coverage data per provider
    const providerCoverages: ProviderCoverage[] = relevantProviders.map((provider) => {
      // Get the matching product — prefer the tier if specified, otherwise pick best tier
      let products = provider.products.filter((p) => p.type === insuranceType);
      if (tier) {
        const tierProduct = products.find((p) => p.tier === tier);
        if (tierProduct) products = [tierProduct];
      }

      // Pick the product with the most coverage items (most comprehensive)
      const product = products.sort((a, b) => b.coverage.length - a.coverage.length)[0];

      const coverageMap = new Map<string, CoverageItem>();
      let score = 0;
      if (product) {
        for (const item of product.coverage) {
          coverageMap.set(item.name, item);
          if (item.included) score++;
        }
      }

      return {
        provider,
        coverageMap,
        coverageScore: score,
      };
    });

    // Sort by coverage score (most comprehensive first)
    providerCoverages.sort((a, b) => b.coverageScore - a.coverageScore);

    // Limit the number of providers
    const limited = providerCoverages.slice(0, maxProviders);

    // Collect all unique coverage item names across all shown providers
    const allCoverageNames: string[] = [];
    const seen = new Set<string>();
    for (const pc of limited) {
      for (const [name] of pc.coverageMap) {
        if (!seen.has(name)) {
          seen.add(name);
          allCoverageNames.push(name);
        }
      }
    }

    return { providerCoverages: limited, allCoverageNames };
  }, [insuranceType, providerIds, maxProviders, tier]);

  const { providerCoverages, allCoverageNames } = data;

  if (providerCoverages.length === 0 || allCoverageNames.length === 0) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse text-sm">
          {/* Sticky header with provider names */}
          <thead>
            <tr className="sticky top-0 z-10 bg-navy text-white">
              <th className="sticky left-0 z-20 min-w-[180px] bg-navy px-4 py-3 text-left font-semibold">
                Kattavuus
              </th>
              {providerCoverages.map((pc) => (
                <th
                  key={pc.provider.id}
                  className="min-w-[130px] px-3 py-3 text-center font-semibold"
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-sm">{pc.provider.shortName}</span>
                    <span className="text-xs font-normal text-white/70">
                      {pc.coverageScore}/{allCoverageNames.length}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {allCoverageNames.map((name, rowIdx) => (
              <tr
                key={name}
                className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                {/* Sticky first column */}
                <td
                  className={`sticky left-0 z-[5] px-4 py-3 font-medium text-navy ${
                    rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  {name}
                </td>

                {providerCoverages.map((pc) => {
                  const item = pc.coverageMap.get(name);
                  const included = item?.included ?? false;

                  return (
                    <td
                      key={pc.provider.id}
                      className="px-3 py-3 text-center"
                    >
                      {item ? (
                        <div className="flex flex-col items-center gap-0.5">
                          {included ? (
                            <Check className="h-5 w-5 text-green-600" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                          {item.limit && included && (
                            <span className="text-[11px] leading-tight text-gray-500">
                              {item.limit}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 border-t border-gray-200 px-4 py-3 text-xs text-gray-500">
        <div className="flex items-center gap-1.5">
          <Check className="h-4 w-4 text-green-600" />
          <span>Sisältyy</span>
        </div>
        <div className="flex items-center gap-1.5">
          <X className="h-4 w-4 text-red-500" />
          <span>Ei sisälly</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-gray-300">—</span>
          <span>Ei tietoa</span>
        </div>
      </div>
    </div>
  );
}
