'use client';

import { useState, useMemo, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Car,
  Home,
  Plane,
  PawPrint,
  Heart,
  ShieldPlus,
  Baby,
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Trophy,
  TrendingDown,
  Shield,
  Star,
} from 'lucide-react';
import { INSURANCE_TYPES } from '@/lib/constants';
import { getProductsByType, providers, getProviderById } from '@/data/providers';
import {
  formatCurrency,
  estimateAutoPremium,
  estimateHomePremium,
  estimateTravelPremium,
  estimatePetPremium,
  estimateLifePremium,
} from '@/lib/utils';
import type { InsuranceType, InsuranceTier, CoverageItem } from '@/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car, Home, Plane, PawPrint, Heart, ShieldPlus, Baby,
};

// ============================================================
// Step 1: Insurance Type Selection
// ============================================================

function StepInsuranceType({
  selected,
  onSelect,
}: {
  selected: InsuranceType | null;
  onSelect: (type: InsuranceType) => void;
}) {
  return (
    <div>
      <h2 className="mb-6 text-xl font-bold text-navy">
        Valitse vakuutuslaji
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {INSURANCE_TYPES.map((type) => {
          const Icon = iconMap[type.icon];
          const isSelected = selected === type.type;
          return (
            <button
              key={type.type}
              onClick={() => onSelect(type.type)}
              className={`flex flex-col items-center rounded-xl border-2 p-4 text-center transition-all ${
                isSelected
                  ? 'border-teal bg-teal/5 shadow-md'
                  : 'border-gray-200 bg-white hover:border-teal/40 hover:shadow-sm'
              }`}
            >
              {Icon && (
                <Icon
                  className={`mb-2 h-7 w-7 ${isSelected ? 'text-teal' : 'text-gray-400'}`}
                />
              )}
              <span
                className={`text-sm font-medium ${isSelected ? 'text-teal' : 'text-navy'}`}
              >
                {type.shortName}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================
// Step 2a: Auto Insurance Form
// ============================================================

function StepAutoDetails({
  values,
  onChange,
}: {
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="mb-6 text-xl font-bold text-navy">Auton ja kuljettajan tiedot</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Auton arvo (&euro;)</span>
          <input
            type="number"
            value={values.vehicleValue || ''}
            onChange={(e) => onChange('vehicleValue', e.target.value)}
            placeholder="esim. 15000"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Moottorin teho (kW)</span>
          <input
            type="number"
            value={values.enginePower || ''}
            onChange={(e) => onChange('enginePower', e.target.value)}
            placeholder="esim. 110"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Kuljettajan ikä</span>
          <input
            type="number"
            value={values.driverAge || ''}
            onChange={(e) => onChange('driverAge', e.target.value)}
            placeholder="esim. 35"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Bonusluokka (0–13)</span>
          <input
            type="number"
            min="0"
            max="13"
            value={values.bonusClass || ''}
            onChange={(e) => onChange('bonusClass', e.target.value)}
            placeholder="esim. 7"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-gray-700">Kaskon taso</span>
          <select
            value={values.tier || 'standard'}
            onChange={(e) => onChange('tier', e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          >
            <option value="basic">Pelkkä liikennevakuutus</option>
            <option value="standard">Osakasko</option>
            <option value="premium">Täyskasko</option>
            <option value="comprehensive">Laaja täyskasko</option>
          </select>
        </label>
      </div>
    </div>
  );
}

// ============================================================
// Step 2b: Home Insurance Form
// ============================================================

function StepHomeDetails({
  values,
  onChange,
}: {
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="mb-6 text-xl font-bold text-navy">Asunnon tiedot</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Asuntotyyppi</span>
          <select
            value={values.propertyType || 'apartment'}
            onChange={(e) => onChange('propertyType', e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          >
            <option value="apartment">Kerrostalo</option>
            <option value="rowhouse">Rivitalo</option>
            <option value="detached">Omakotitalo</option>
            <option value="holiday">Loma-asunto</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Pinta-ala (m&sup2;)</span>
          <input
            type="number"
            value={values.area || ''}
            onChange={(e) => onChange('area', e.target.value)}
            placeholder="esim. 75"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Rakennusvuosi</span>
          <input
            type="number"
            value={values.yearBuilt || ''}
            onChange={(e) => onChange('yearBuilt', e.target.value)}
            placeholder="esim. 1990"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Irtaimiston arvo (&euro;)</span>
          <input
            type="number"
            value={values.contentsValue || ''}
            onChange={(e) => onChange('contentsValue', e.target.value)}
            placeholder="esim. 30000"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-gray-700">Turvan taso</span>
          <select
            value={values.tier || 'standard'}
            onChange={(e) => onChange('tier', e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          >
            <option value="basic">Perusturva</option>
            <option value="standard">Vakioturva</option>
            <option value="premium">Laaja turva</option>
            <option value="comprehensive">Kattavin turva</option>
          </select>
        </label>
      </div>
    </div>
  );
}

// ============================================================
// Step 2c: Travel Insurance Form
// ============================================================

function StepTravelDetails({
  values,
  onChange,
}: {
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}) {
  const isSingleTrip = (values.tripType || 'annual') === 'single';

  return (
    <div className="space-y-4">
      <h2 className="mb-6 text-xl font-bold text-navy">Matkavakuutuksen tiedot</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Trip type */}
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-gray-700">Matkan tyyppi</span>
          <div className="mt-2 grid grid-cols-2 gap-3">
            {[
              { value: 'single', label: 'Kertamatka' },
              { value: 'annual', label: 'Jatkuva matkavakuutus' },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange('tripType', opt.value)}
                className={`min-h-[44px] rounded-lg border-2 px-4 py-2.5 text-sm font-medium transition-all ${
                  (values.tripType || 'annual') === opt.value
                    ? 'border-teal bg-teal/5 text-teal'
                    : 'border-gray-200 text-gray-600 hover:border-teal/40'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </label>

        {/* Destination */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Matkakohde</span>
          <select
            value={values.destination || 'europe'}
            onChange={(e) => onChange('destination', e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          >
            <option value="nordic">Pohjoismaat</option>
            <option value="europe">Eurooppa</option>
            <option value="worldwide">Maailmanlaajuinen</option>
          </select>
        </label>

        {/* Duration (only for single trip) */}
        {isSingleTrip && (
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Matkan kesto</span>
            <select
              value={values.duration || '1-7'}
              onChange={(e) => onChange('duration', e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
            >
              <option value="1-7">1–7 päivää</option>
              <option value="8-14">8–14 päivää</option>
              <option value="15-30">15–30 päivää</option>
              <option value="31-90">31–90 päivää</option>
            </select>
          </label>
        )}

        {/* Number of travelers */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Matkustajien lukumäärä</span>
          <select
            value={values.travelers || '1'}
            onChange={(e) => onChange('travelers', e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={String(n)}>
                {n} {n === 1 ? 'henkilö' : 'henkilöä'}
              </option>
            ))}
          </select>
        </label>

        {/* Traveler age */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Matkustajan ikä</span>
          <input
            type="number"
            min="1"
            max="99"
            value={values.travelerAge || ''}
            onChange={(e) => onChange('travelerAge', e.target.value)}
            placeholder="esim. 35"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          />
        </label>

        {/* Cancellation coverage */}
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-gray-700">Sisältää peruutusturvan</span>
          <div className="mt-2 grid grid-cols-2 gap-3">
            {[
              { value: 'yes', label: 'Kyll\u00e4' },
              { value: 'no', label: 'Ei' },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange('includesCancellation', opt.value)}
                className={`min-h-[44px] rounded-lg border-2 px-4 py-2.5 text-sm font-medium transition-all ${
                  (values.includesCancellation || 'yes') === opt.value
                    ? 'border-teal bg-teal/5 text-teal'
                    : 'border-gray-200 text-gray-600 hover:border-teal/40'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </label>
      </div>
    </div>
  );
}

// ============================================================
// Step 2d: Pet Insurance Form
// ============================================================

function StepPetDetails({
  values,
  onChange,
}: {
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="mb-6 text-xl font-bold text-navy">Lemmikin tiedot</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Pet type */}
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-gray-700">Eläin</span>
          <div className="mt-2 grid grid-cols-3 gap-3">
            {[
              { value: 'dog', label: 'Koira', emoji: '\ud83d\udc15' },
              { value: 'cat', label: 'Kissa', emoji: '\ud83d\udc08' },
              { value: 'rabbit', label: 'Kani', emoji: '\ud83d\udc07' },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange('petType', opt.value)}
                className={`flex min-h-[44px] flex-col items-center rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                  (values.petType || 'dog') === opt.value
                    ? 'border-teal bg-teal/5 text-teal'
                    : 'border-gray-200 text-gray-600 hover:border-teal/40'
                }`}
              >
                <span className="mb-1 text-xl">{opt.emoji}</span>
                {opt.label}
              </button>
            ))}
          </div>
        </label>

        {/* Breed */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Rotu</span>
          <input
            type="text"
            value={values.breed || ''}
            onChange={(e) => onChange('breed', e.target.value)}
            placeholder="esim. Labradorinnoutaja"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          />
        </label>

        {/* Age */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Ikä: {values.petAge || '3'} vuotta
          </span>
          <input
            type="range"
            min="0"
            max="15"
            step="1"
            value={values.petAge || '3'}
            onChange={(e) => onChange('petAge', e.target.value)}
            className="mt-3 w-full accent-teal"
          />
          <div className="mt-1 flex justify-between text-xs text-gray-400">
            <span>0 v</span>
            <span>15 v</span>
          </div>
        </label>

        {/* Coverage level */}
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-gray-700">Turvan taso</span>
          <div className="mt-2 grid grid-cols-3 gap-3">
            {[
              { value: 'basic', label: 'Perus' },
              { value: 'standard', label: 'Laaja' },
              { value: 'premium', label: 'Premium' },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange('petTier', opt.value)}
                className={`min-h-[44px] rounded-lg border-2 px-4 py-2.5 text-sm font-medium transition-all ${
                  (values.petTier || 'standard') === opt.value
                    ? 'border-teal bg-teal/5 text-teal'
                    : 'border-gray-200 text-gray-600 hover:border-teal/40'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </label>
      </div>
    </div>
  );
}

// ============================================================
// Step 2e: Life Insurance Form
// ============================================================

function StepLifeDetails({
  values,
  onChange,
}: {
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}) {
  const coverageAmount = Number(values.lifeCoverage || '100000');

  return (
    <div className="space-y-4">
      <h2 className="mb-6 text-xl font-bold text-navy">Henkivakuutuksen tiedot</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Age */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Vakuutetun ikä</span>
          <input
            type="number"
            min="18"
            max="70"
            value={values.lifeAge || ''}
            onChange={(e) => onChange('lifeAge', e.target.value)}
            placeholder="esim. 40"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          />
        </label>

        {/* Coverage amount */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Vakuutusmäärä: {formatCurrency(coverageAmount)}
          </span>
          <input
            type="range"
            min="50000"
            max="500000"
            step="10000"
            value={coverageAmount}
            onChange={(e) => onChange('lifeCoverage', e.target.value)}
            className="mt-3 w-full accent-teal"
          />
          <div className="mt-1 flex justify-between text-xs text-gray-400">
            <span>50 000 &euro;</span>
            <span>500 000 &euro;</span>
          </div>
        </label>

        {/* Term */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Vakuutusaika</span>
          <select
            value={values.lifeTerm || '20'}
            onChange={(e) => onChange('lifeTerm', e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal"
          >
            <option value="10">10 vuotta</option>
            <option value="15">15 vuotta</option>
            <option value="20">20 vuotta</option>
            <option value="25">25 vuotta</option>
          </select>
        </label>

        {/* Smoking status */}
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Tupakointi</span>
          <div className="mt-2 grid grid-cols-2 gap-3">
            {[
              { value: 'no', label: 'Ei' },
              { value: 'yes', label: 'Kyll\u00e4' },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange('isSmoker', opt.value)}
                className={`min-h-[44px] rounded-lg border-2 px-4 py-2.5 text-sm font-medium transition-all ${
                  (values.isSmoker || 'no') === opt.value
                    ? 'border-teal bg-teal/5 text-teal'
                    : 'border-gray-200 text-gray-600 hover:border-teal/40'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </label>
      </div>
    </div>
  );
}

// ============================================================
// Step 2f: Generic Details (fallback for accident/child)
// ============================================================

function StepGenericDetails({
  insuranceType,
}: {
  insuranceType: InsuranceType;
}) {
  const typeInfo = INSURANCE_TYPES.find((t) => t.type === insuranceType);
  return (
    <div className="text-center">
      <h2 className="mb-4 text-xl font-bold text-navy">
        {typeInfo?.name} — tiedot
      </h2>
      <p className="text-gray-600">
        Tarkemmat laskentaparametrit {typeInfo?.name.toLowerCase()}lle ovat
        tulossa pian. Katso alla olevat tarjoukset yleishinnoilla.
      </p>
    </div>
  );
}

// ============================================================
// Enhanced Results
// ============================================================

interface ResultItem {
  providerId: string;
  providerName: string;
  productName: string;
  estimatedPrice: number;
  highlights: string[];
  coverage: CoverageItem[];
  coverageScore: number;
  marketShare: number;
  satisfaction: number;
  isAffiliate: boolean;
  affiliateUrl?: string;
  slug: string;
  tier: InsuranceTier;
}

function getCoverageScoreColor(score: number): string {
  if (score >= 0.8) return 'bg-green-100 text-green-700';
  if (score >= 0.5) return 'bg-amber/20 text-amber-700';
  return 'bg-red-100 text-red-700';
}

function getCoverageScoreLabel(score: number): string {
  if (score >= 0.8) return 'Kattava';
  if (score >= 0.5) return 'Hyvä';
  return 'Perus';
}

function ResultsList({
  results,
  insuranceType,
}: {
  results: ResultItem[];
  insuranceType: InsuranceType;
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [showComparison, setShowComparison] = useState(false);

  const sorted = [...results].sort((a, b) => a.estimatedPrice - b.estimatedPrice);

  // Determine badges
  const cheapestPrice = sorted.length > 0 ? sorted[0].estimatedPrice : 0;
  const highestMarketShare = Math.max(...sorted.map((r) => r.marketShare));
  const highestCoverageScore = Math.max(...sorted.map((r) => r.coverageScore));

  const toggleSelected = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else if (next.size < 3) {
        next.add(id);
      }
      return next;
    });
  };

  // Get selected results for comparison
  const selectedResults = sorted.filter((r) => selectedIds.has(r.providerId));

  return (
    <div>
      <h2 className="mb-2 text-xl font-bold text-navy">Tulokset</h2>
      <p className="mb-6 text-sm text-gray-500">
        {sorted.length} tarjousta järjestetty halvimmasta kalleimpaan
      </p>

      {/* Selection toolbar */}
      {selectedIds.size > 0 && (
        <div className="mb-4 flex items-center justify-between rounded-lg bg-teal/10 px-4 py-3">
          <span className="text-sm font-medium text-teal-dark">
            {selectedIds.size}/3 valittu vertailuun
          </span>
          <button
            onClick={() => setShowComparison(true)}
            disabled={selectedIds.size < 2}
            className={`min-h-[44px] rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              selectedIds.size >= 2
                ? 'bg-teal text-white hover:bg-teal-dark'
                : 'cursor-not-allowed bg-gray-200 text-gray-400'
            }`}
          >
            Vertaa valittuja ({selectedIds.size})
          </button>
        </div>
      )}

      {/* Side-by-side comparison modal */}
      {showComparison && selectedResults.length >= 2 && (
        <div className="mb-6 overflow-hidden rounded-xl border-2 border-teal bg-white shadow-lg">
          <div className="flex items-center justify-between bg-teal px-4 py-3 text-white">
            <h3 className="font-semibold">Vertailu</h3>
            <button
              onClick={() => setShowComparison(false)}
              className="min-h-[44px] min-w-[44px] rounded-lg p-2 text-white/80 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-left font-medium text-gray-500"></th>
                  {selectedResults.map((r) => (
                    <th key={r.providerId} className="px-4 py-3 text-center font-semibold text-navy">
                      {r.providerName.split(' ')[0]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-2.5 font-medium text-gray-600">Hinta</td>
                  {selectedResults.map((r) => (
                    <td key={r.providerId} className="px-4 py-2.5 text-center font-bold text-navy">
                      {formatCurrency(r.estimatedPrice)}/v
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-4 py-2.5 font-medium text-gray-600">Kattavuus</td>
                  {selectedResults.map((r) => (
                    <td key={r.providerId} className="px-4 py-2.5 text-center">
                      <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${getCoverageScoreColor(r.coverageScore)}`}>
                        {Math.round(r.coverageScore * 100)}%
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-2.5 font-medium text-gray-600">Tyytyväisyys</td>
                  {selectedResults.map((r) => (
                    <td key={r.providerId} className="px-4 py-2.5 text-center">
                      {r.satisfaction.toFixed(1)}/10
                    </td>
                  ))}
                </tr>
                {/* Coverage comparison rows */}
                {(() => {
                  const allNames = new Set<string>();
                  selectedResults.forEach((r) =>
                    r.coverage.forEach((c) => allNames.add(c.name))
                  );
                  return Array.from(allNames).map((name, idx) => (
                    <tr key={name} className={idx % 2 === 0 ? 'border-b border-gray-100 bg-gray-50' : 'border-b border-gray-100'}>
                      <td className="px-4 py-2 text-xs font-medium text-gray-600">{name}</td>
                      {selectedResults.map((r) => {
                        const item = r.coverage.find((c) => c.name === name);
                        return (
                          <td key={r.providerId} className="px-4 py-2 text-center">
                            {item?.included ? (
                              <Check className="mx-auto h-4 w-4 text-green-600" />
                            ) : (
                              <X className="mx-auto h-4 w-4 text-red-400" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ));
                })()}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Results list */}
      <div className="space-y-4">
        {sorted.map((result, i) => {
          const isCheapest = result.estimatedPrice === cheapestPrice;
          const isMostPopular = result.marketShare === highestMarketShare;
          const isMostComprehensive = result.coverageScore === highestCoverageScore;
          const isExpanded = expandedIndex === i;
          const isSelected = selectedIds.has(result.providerId);

          return (
            <div
              key={result.providerId + '-' + i}
              className={`rounded-xl border bg-white shadow-sm transition-all ${
                isSelected
                  ? 'border-teal ring-2 ring-teal/20'
                  : 'border-gray-200 hover:shadow-md'
              }`}
            >
              <div className="flex flex-col p-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  {/* Badges row */}
                  <div className="mb-2 flex flex-wrap gap-2">
                    {isCheapest && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                        <TrendingDown className="h-3 w-3" />
                        Halvin
                      </span>
                    )}
                    {isMostPopular && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber/20 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                        <Star className="h-3 w-3" />
                        Suosituin
                      </span>
                    )}
                    {isMostComprehensive && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                        <Shield className="h-3 w-3" />
                        Kattavin
                      </span>
                    )}
                    {/* Coverage score badge */}
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${getCoverageScoreColor(result.coverageScore)}`}
                    >
                      {getCoverageScoreLabel(result.coverageScore)} ({Math.round(result.coverageScore * 100)}%)
                    </span>
                  </div>

                  <h3 className="font-semibold text-navy">{result.providerName}</h3>
                  <p className="text-sm text-gray-500">{result.productName}</p>

                  {result.highlights.length > 0 && (
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {result.highlights.slice(0, 3).map((h, j) => (
                        <li
                          key={j}
                          className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-3 sm:mt-0 sm:flex-col sm:items-end sm:gap-3">
                  <div className="text-right">
                    <p className="text-xl font-bold text-navy">
                      {formatCurrency(result.estimatedPrice)}/v
                    </p>
                    <p className="text-xs text-gray-400">
                      ~{formatCurrency(Math.round(result.estimatedPrice / 12))}/kk
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {/* Select for comparison */}
                    <button
                      onClick={() => toggleSelected(result.providerId)}
                      className={`min-h-[44px] rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                        isSelected
                          ? 'border-teal bg-teal/10 text-teal'
                          : 'border-gray-300 text-gray-500 hover:border-teal hover:text-teal'
                      }`}
                    >
                      {isSelected ? 'Valittu' : 'Vertaa'}
                    </button>
                    {result.isAffiliate && result.affiliateUrl ? (
                      <a
                        href={result.affiliateUrl}
                        target="_blank"
                        rel="sponsored nofollow noopener"
                        className="inline-flex min-h-[44px] items-center rounded-lg bg-teal px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
                      >
                        Katso tarjous
                      </a>
                    ) : (
                      <Link
                        href={`/vakuutusyhtiot/${result.slug}`}
                        className="inline-flex min-h-[44px] items-center rounded-lg border border-teal px-5 py-2 text-sm font-semibold text-teal transition-colors hover:bg-teal/5"
                      >
                        Lue lisää
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Expandable details */}
              <div className="border-t border-gray-100 px-5 py-2">
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className="flex min-h-[44px] w-full items-center justify-between py-1 text-sm text-gray-500 hover:text-navy"
                >
                  <span>Näytä kattavuustiedot</span>
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>

              {isExpanded && (
                <div className="border-t border-gray-100 px-5 py-4">
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {result.coverage.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm"
                      >
                        {item.included ? (
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                        ) : (
                          <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" />
                        )}
                        <div>
                          <span className={item.included ? 'text-gray-700' : 'text-gray-400'}>
                            {item.name}
                          </span>
                          {item.limit && item.included && (
                            <span className="ml-1 text-xs text-gray-400">
                              ({item.limit})
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Disclaimer */}
      <div className="mt-6 rounded-lg bg-amber/10 px-4 py-3">
        <p className="text-xs text-gray-600">
          Hinnat ovat arvioita julkisiin tietoihin perustuen. Lopullinen hinta
          riippuu henkilökohtaisista tekijöistä. Siirry vakuutusyhtiön sivulle
          saadaksesi sitovan tarjouksen.
        </p>
      </div>
    </div>
  );
}

// ============================================================
// Main Calculator
// ============================================================

export default function ComparisonCalculator() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialType = (searchParams.get('type') as InsuranceType) || null;
  const initialStep = initialType ? 2 : 1;

  const [step, setStep] = useState(initialStep);
  const [selectedType, setSelectedType] = useState<InsuranceType | null>(initialType);
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const handleTypeSelect = (type: InsuranceType) => {
    setSelectedType(type);
    setFormValues({}); // Reset form when type changes
    router.replace(`?type=${type}`, { scroll: false });
    setStep(2);
  };

  const handleFormChange = (key: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const results = useMemo<ResultItem[]>(() => {
    if (step < 3 || !selectedType) return [];

    const products = getProductsByType(selectedType);

    return products.map((item) => {
      let estimatedPrice = (item.priceRange.min + item.priceRange.max) / 2;

      // Convert monthly prices to annual
      if (item.priceRange.unit === 'eur/month') {
        estimatedPrice *= 12;
      }

      if (selectedType === 'auto' && formValues.vehicleValue) {
        estimatedPrice = estimateAutoPremium({
          vehicleValue: Number(formValues.vehicleValue) || 15000,
          driverAge: Number(formValues.driverAge) || 35,
          bonusClass: Number(formValues.bonusClass) || 7,
          enginePower: Number(formValues.enginePower) || 110,
          tier: formValues.tier || 'standard',
        });
      } else if (selectedType === 'home' && formValues.area) {
        estimatedPrice = estimateHomePremium({
          area: Number(formValues.area) || 75,
          propertyType: formValues.propertyType || 'apartment',
          yearBuilt: Number(formValues.yearBuilt) || 2000,
          contentsValue: Number(formValues.contentsValue) || 30000,
          tier: formValues.tier || 'standard',
        });
      } else if (selectedType === 'travel') {
        estimatedPrice = estimateTravelPremium({
          destination: (formValues.destination as 'nordic' | 'europe' | 'worldwide') || 'europe',
          duration: (formValues.tripType as 'single' | 'annual') || 'annual',
          travelers: Number(formValues.travelers) || 1,
          includesCancellation: (formValues.includesCancellation || 'yes') === 'yes',
          age: Number(formValues.travelerAge) || 35,
        });
      } else if (selectedType === 'pet') {
        estimatedPrice = estimatePetPremium({
          petType: (formValues.petType as 'dog' | 'cat' | 'rabbit') || 'dog',
          breed: formValues.breed || '',
          age: Number(formValues.petAge) || 3,
          tier: formValues.petTier || 'standard',
        });
      } else if (selectedType === 'life') {
        estimatedPrice = estimateLifePremium({
          age: Number(formValues.lifeAge) || 40,
          coverageAmount: Number(formValues.lifeCoverage) || 100000,
          term: Number(formValues.lifeTerm) || 20,
          isSmoker: (formValues.isSmoker || 'no') === 'yes',
        });
      }

      // Compute coverage score
      const includedCount = item.coverage.filter((c) => c.included).length;
      const totalCount = item.coverage.length || 1;
      const coverageScore = includedCount / totalCount;

      // Get provider data
      const provider = getProviderById(item.providerId);

      return {
        providerId: item.providerId,
        providerName: item.providerName,
        productName: item.name,
        estimatedPrice: Math.round(estimatedPrice),
        highlights: item.highlights,
        coverage: item.coverage,
        coverageScore,
        marketShare: provider?.marketShare || 0,
        satisfaction: provider?.satisfaction || 0,
        isAffiliate: item.isAffiliate,
        affiliateUrl: item.affiliateUrl,
        slug: item.providerSlug,
        tier: item.tier,
      };
    });
  }, [step, selectedType, formValues]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Step indicator */}
      <div className="mb-8 flex items-center justify-center gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                s <= step
                  ? 'bg-teal text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`h-0.5 w-8 sm:w-16 ${
                  s < step ? 'bg-teal' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      {step === 1 && (
        <StepInsuranceType
          selected={selectedType}
          onSelect={handleTypeSelect}
        />
      )}

      {step === 2 && selectedType === 'auto' && (
        <StepAutoDetails values={formValues} onChange={handleFormChange} />
      )}

      {step === 2 && selectedType === 'home' && (
        <StepHomeDetails values={formValues} onChange={handleFormChange} />
      )}

      {step === 2 && selectedType === 'travel' && (
        <StepTravelDetails values={formValues} onChange={handleFormChange} />
      )}

      {step === 2 && selectedType === 'pet' && (
        <StepPetDetails values={formValues} onChange={handleFormChange} />
      )}

      {step === 2 && selectedType === 'life' && (
        <StepLifeDetails values={formValues} onChange={handleFormChange} />
      )}

      {step === 2 &&
        selectedType &&
        !['auto', 'home', 'travel', 'pet', 'life'].includes(selectedType) && (
          <StepGenericDetails insuranceType={selectedType} />
        )}

      {step === 3 && selectedType && (
        <ResultsList results={results} insuranceType={selectedType} />
      )}

      {/* Navigation buttons */}
      <div className="mt-8 flex items-center justify-between">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Takaisin
          </button>
        ) : (
          <div />
        )}
        {step < 3 && selectedType && (
          <button
            onClick={() => setStep(step + 1)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-teal px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            {step === 2 ? 'N\u00e4yt\u00e4 tulokset' : 'Seuraava'}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
