'use client';

import { useState, useCallback } from 'react';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { providers } from '@/data/providers';
import type { InsuranceType, SortOption } from '@/types';

// ============================================================
// FilterControls — Sorting & filtering for comparison results
// ============================================================

interface FilterState {
  sortBy: SortOption;
  maxPrice: number;
  minRating: number;
  selectedProviders: string[];
}

interface FilterControlsProps {
  insuranceType: InsuranceType;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  maxPriceLimit?: number;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'price-asc', label: 'Halvin ensin' },
  { value: 'price-desc', label: 'Kallein ensin' },
  { value: 'satisfaction', label: 'Asiakastyytyväisyys' },
  { value: 'market-share', label: 'Markkinaosuus' },
  { value: 'rating', label: 'Kattavin ensin' },
];

export default function FilterControls({
  insuranceType,
  filters,
  onFiltersChange,
  maxPriceLimit = 2000,
}: FilterControlsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const relevantProviders = providers.filter((p) =>
    p.insuranceTypes.includes(insuranceType)
  );

  const updateFilter = useCallback(
    <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
      onFiltersChange({ ...filters, [key]: value });
    },
    [filters, onFiltersChange]
  );

  const toggleProvider = useCallback(
    (providerId: string) => {
      const current = filters.selectedProviders;
      const next = current.includes(providerId)
        ? current.filter((id) => id !== providerId)
        : [...current, providerId];
      updateFilter('selectedProviders', next);
    },
    [filters.selectedProviders, updateFilter]
  );

  const activeFilterCount =
    (filters.maxPrice < maxPriceLimit ? 1 : 0) +
    (filters.minRating > 0 ? 1 : 0) +
    (filters.selectedProviders.length > 0 &&
    filters.selectedProviders.length < relevantProviders.length
      ? 1
      : 0);

  const clearFilters = () => {
    onFiltersChange({
      sortBy: filters.sortBy,
      maxPrice: maxPriceLimit,
      minRating: 0,
      selectedProviders: relevantProviders.map((p) => p.id),
    });
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Mobile: horizontal scroll of filter chips */}
      <div className="flex items-center gap-3 overflow-x-auto px-4 py-3 lg:hidden">
        {/* Sort chip */}
        <div className="relative flex-shrink-0">
          <select
            value={filters.sortBy}
            onChange={(e) => updateFilter('sortBy', e.target.value as SortOption)}
            className="min-h-[44px] appearance-none rounded-full border border-gray-300 bg-white px-4 py-2 pr-8 text-sm font-medium text-navy focus:border-teal focus:ring-1 focus:ring-teal"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>

        {/* Filter toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex min-h-[44px] flex-shrink-0 items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-gray-50"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Suodata
          {activeFilterCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal text-xs text-white">
              {activeFilterCount}
            </span>
          )}
        </button>

        {activeFilterCount > 0 && (
          <button
            onClick={clearFilters}
            className="flex min-h-[44px] flex-shrink-0 items-center gap-1 rounded-full border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600"
          >
            <X className="h-3.5 w-3.5" />
            Tyhjennä
          </button>
        )}
      </div>

      {/* Desktop: sidebar-style layout */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-4 gap-6 px-6 py-4">
          {/* Sort */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
              Järjestys
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) =>
                updateFilter('sortBy', e.target.value as SortOption)
              }
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Max price */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
              Enimmäishinta: {filters.maxPrice} €/v
            </label>
            <input
              type="range"
              min={0}
              max={maxPriceLimit}
              step={50}
              value={filters.maxPrice}
              onChange={(e) => updateFilter('maxPrice', Number(e.target.value))}
              className="w-full accent-teal"
            />
            <div className="mt-1 flex justify-between text-xs text-gray-400">
              <span>0 €</span>
              <span>{maxPriceLimit} €</span>
            </div>
          </div>

          {/* Min rating */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
              Vähimmäisarvosana: {filters.minRating > 0 ? `${filters.minRating}/10` : 'Kaikki'}
            </label>
            <input
              type="range"
              min={0}
              max={10}
              step={0.5}
              value={filters.minRating}
              onChange={(e) => updateFilter('minRating', Number(e.target.value))}
              className="w-full accent-teal"
            />
            <div className="mt-1 flex justify-between text-xs text-gray-400">
              <span>Kaikki</span>
              <span>10/10</span>
            </div>
          </div>

          {/* Provider selection */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
              Vakuutusyhtiöt
            </label>
            <div className="flex flex-wrap gap-1.5">
              {relevantProviders.map((p) => {
                const isSelected = filters.selectedProviders.includes(p.id);
                return (
                  <button
                    key={p.id}
                    onClick={() => toggleProvider(p.id)}
                    className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                      isSelected
                        ? 'bg-teal text-white'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {p.shortName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile expanded filter panel */}
      {isExpanded && (
        <div className="space-y-5 border-t border-gray-200 px-4 py-4 lg:hidden">
          {/* Max price */}
          <div>
            <label className="mb-2 block text-sm font-medium text-navy">
              Enimmäishinta: {filters.maxPrice} €/v
            </label>
            <input
              type="range"
              min={0}
              max={maxPriceLimit}
              step={50}
              value={filters.maxPrice}
              onChange={(e) => updateFilter('maxPrice', Number(e.target.value))}
              className="w-full accent-teal"
            />
          </div>

          {/* Min rating */}
          <div>
            <label className="mb-2 block text-sm font-medium text-navy">
              Vähimmäisarvosana: {filters.minRating > 0 ? `${filters.minRating}/10` : 'Kaikki'}
            </label>
            <input
              type="range"
              min={0}
              max={10}
              step={0.5}
              value={filters.minRating}
              onChange={(e) => updateFilter('minRating', Number(e.target.value))}
              className="w-full accent-teal"
            />
          </div>

          {/* Provider selection */}
          <div>
            <label className="mb-2 block text-sm font-medium text-navy">
              Vakuutusyhtiöt
            </label>
            <div className="flex flex-wrap gap-2">
              {relevantProviders.map((p) => {
                const isSelected = filters.selectedProviders.includes(p.id);
                return (
                  <button
                    key={p.id}
                    onClick={() => toggleProvider(p.id)}
                    className={`min-h-[44px] rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      isSelected
                        ? 'bg-teal text-white'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {p.shortName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Default filter state factory
export function createDefaultFilters(insuranceType: InsuranceType): FilterState {
  const relevantProviders = providers.filter((p) =>
    p.insuranceTypes.includes(insuranceType)
  );
  return {
    sortBy: 'price-asc',
    maxPrice: 2000,
    minRating: 0,
    selectedProviders: relevantProviders.map((p) => p.id),
  };
}

export type { FilterState };
