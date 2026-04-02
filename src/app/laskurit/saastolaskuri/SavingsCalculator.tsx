'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PiggyBank, TrendingDown, Info, ExternalLink } from 'lucide-react';
import { providers } from '@/data/providers';
import { formatCurrency } from '@/lib/utils';

interface FormData {
  currentProvider: string;
  autoInsuranceCost: number;
  homeInsuranceCost: number;
}

interface SavingsResult {
  providerId: string;
  providerName: string;
  providerSlug: string;
  estimatedAuto: number;
  estimatedHome: number;
  estimatedTotal: number;
  savings: number;
  savingsPercent: number;
  isAffiliate: boolean;
  satisfaction: number;
}

export default function SavingsCalculator() {
  const [formData, setFormData] = useState<FormData>({
    currentProvider: '',
    autoInsuranceCost: 600,
    homeInsuranceCost: 250,
  });
  const [results, setResults] = useState<SavingsResult[] | null>(null);

  const currentTotal = formData.autoInsuranceCost + formData.homeInsuranceCost;

  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const calculate = () => {
    const estimates: SavingsResult[] = providers
      .filter((p) => p.id !== formData.currentProvider)
      .map((provider) => {
        // Use price competitiveness to estimate relative pricing
        // More competitive providers (higher score) = lower prices
        const competitivenessRatio = 1 - (provider.priceCompetitiveness - 5) * 0.06;

        const estimatedAuto = Math.round(formData.autoInsuranceCost * competitivenessRatio);
        const estimatedHome = Math.round(formData.homeInsuranceCost * competitivenessRatio);
        const estimatedTotal = estimatedAuto + estimatedHome;
        const savings = currentTotal - estimatedTotal;
        const savingsPercent = currentTotal > 0 ? (savings / currentTotal) * 100 : 0;

        return {
          providerId: provider.id,
          providerName: provider.name,
          providerSlug: provider.slug,
          estimatedAuto,
          estimatedHome,
          estimatedTotal,
          savings,
          savingsPercent,
          isAffiliate: provider.isAffiliate,
          satisfaction: provider.satisfaction,
        };
      });

    // Sort by savings descending
    estimates.sort((a, b) => b.savings - a.savings);
    setResults(estimates);
  };

  const resetCalculator = () => {
    setResults(null);
  };

  const maxSavings = results && results.length > 0 ? results[0].savings : 0;

  return (
    <section className="pb-16 pt-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber/10">
            <PiggyBank className="h-6 w-6 text-amber" />
          </div>
          <h1 className="text-3xl font-bold text-navy sm:text-4xl">
            Säästölaskuri
          </h1>
        </div>
        <p className="max-w-2xl text-gray-600">
          Selvitä kuinka paljon voit säästää vaihtamalla vakuutusyhtiötä. Syötä nykyiset
          vakuutusmaksusi ja näe potentiaaliset säästöt.
        </p>
      </div>

      {!results ? (
        <div className="max-w-xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <h2 className="mb-6 text-xl font-bold text-navy">Nykyiset vakuutusmaksut</h2>

          <div className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Nykyinen vakuutusyhtiö
              </label>
              <select
                value={formData.currentProvider}
                onChange={(e) => updateField('currentProvider', e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-teal focus:ring-2 focus:ring-teal/20"
              >
                <option value="">Valitse yhtiö...</option>
                {providers.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
                <option value="other">Muu yhtiö</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Autovakuutus (EUR/vuosi)
              </label>
              <input
                type="number"
                min={0}
                max={5000}
                step={10}
                value={formData.autoInsuranceCost}
                onChange={(e) => updateField('autoInsuranceCost', Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
              <p className="mt-1 text-xs text-gray-500">
                Liikennevakuutus + kasko yhteensä. Jätä 0 jos ei autovakuutusta.
              </p>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Kotivakuutus (EUR/vuosi)
              </label>
              <input
                type="number"
                min={0}
                max={3000}
                step={10}
                value={formData.homeInsuranceCost}
                onChange={(e) => updateField('homeInsuranceCost', Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
            </div>

            {/* Current total */}
            <div className="rounded-xl bg-gray-50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Nykyiset maksut yhteensä</span>
                <span className="text-xl font-bold text-navy">
                  {formatCurrency(currentTotal)}/vuosi
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={calculate}
              disabled={currentTotal === 0}
              className="flex w-full min-h-[44px] items-center justify-center gap-2 rounded-lg bg-amber px-6 py-3 font-bold text-white transition-colors hover:bg-amber-light disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <TrendingDown className="h-5 w-5" />
              Laske säästöt
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* Summary */}
          <div className="mb-6 rounded-2xl bg-navy p-5 text-white sm:p-6">
            <div className="flex flex-wrap items-center gap-4 text-sm sm:gap-8">
              <div>
                <span className="text-white/60">Nykyiset maksut:</span>{' '}
                <span className="font-semibold">{formatCurrency(currentTotal)}/vuosi</span>
              </div>
              <div>
                <span className="text-white/60">Auto:</span>{' '}
                <span className="font-semibold">{formatCurrency(formData.autoInsuranceCost)}</span>
              </div>
              <div>
                <span className="text-white/60">Koti:</span>{' '}
                <span className="font-semibold">{formatCurrency(formData.homeInsuranceCost)}</span>
              </div>
              <button
                onClick={resetCalculator}
                className="ml-auto text-sm font-medium text-teal-light underline hover:text-white"
              >
                Laske uudelleen
              </button>
            </div>
          </div>

          {/* Max savings highlight */}
          {maxSavings > 0 && (
            <div className="mb-6 rounded-2xl border-2 border-amber bg-amber/5 p-6 text-center">
              <p className="text-sm font-medium text-gray-600 mb-1">
                Voit säästää jopa
              </p>
              <p className="text-4xl font-bold text-amber sm:text-5xl">
                {formatCurrency(maxSavings)}
              </p>
              <p className="text-lg font-medium text-gray-700">vuodessa</p>
              <p className="mt-2 text-sm text-gray-500">
                vaihtamalla edullisimpaan vakuutusyhtiöön
              </p>
            </div>
          )}

          {/* Results */}
          <div className="space-y-4">
            {results.map((result, index) => (
              <div
                key={result.providerId}
                className={`rounded-2xl bg-white p-5 shadow-sm ring-1 transition-shadow hover:shadow-md sm:p-6 ${
                  result.savings > 0 ? 'ring-gray-200' : 'ring-gray-100 opacity-70'
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-bold text-navy">
                        {result.providerName}
                      </h3>
                      {result.isAffiliate && (
                        <span className="rounded bg-amber/10 px-2 py-0.5 text-xs font-medium text-amber">
                          Mainos
                        </span>
                      )}
                    </div>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>Auto: ~{formatCurrency(result.estimatedAuto)}</span>
                      <span>Koti: ~{formatCurrency(result.estimatedHome)}</span>
                      <span>Tyytyväisyys: {result.satisfaction.toFixed(1).replace('.', ',')}/10</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                    <div className="text-right">
                      <div className="text-xl font-bold text-navy">
                        {formatCurrency(result.estimatedTotal)}/v
                      </div>
                      {result.savings > 0 ? (
                        <div className="text-sm font-semibold text-green-600">
                          Säästöä {formatCurrency(result.savings)} ({result.savingsPercent.toFixed(0)} %)
                        </div>
                      ) : (
                        <div className="text-sm text-gray-400">
                          Ei säästöä
                        </div>
                      )}
                    </div>
                    <Link
                      href={`/vakuutusyhtiot/${result.providerSlug}`}
                      className="flex min-h-[44px] items-center gap-1.5 rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark whitespace-nowrap"
                    >
                      Katso lisää
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Savings bar */}
                {result.savings > 0 && maxSavings > 0 && (
                  <div className="mt-3">
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div
                        className="h-2 rounded-full bg-green-500 transition-all duration-500"
                        style={{
                          width: `${Math.max(5, (result.savings / maxSavings) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-8 rounded-2xl bg-teal/5 border border-teal/20 p-5">
            <h3 className="font-bold text-navy mb-3">Vinkkeja vakuutuksen kilpailuttamiseen</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-teal font-bold">1.</span>
                Pyydä tarjouksia vähintään 3 vakuutusyhtiöltä samanaikaisesti.
              </li>
              <li className="flex gap-2">
                <span className="text-teal font-bold">2.</span>
                Keskittämisedut voivat tuoda jopa 5–17 % alennuksen — kysy kaikista vakuutuksistasi.
              </li>
              <li className="flex gap-2">
                <span className="text-teal font-bold">3.</span>
                Omavastuun nostaminen laskee vakuutusmaksua merkittävästi.
              </li>
              <li className="flex gap-2">
                <span className="text-teal font-bold">4.</span>
                Kilpailuta vakuutukset vähintään 2–3 vuoden välein, vaikka olisit tyytyväinen nykyiseen yhtiöön.
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 rounded-xl bg-amber/5 border border-amber/20 p-4">
            <div className="flex gap-2">
              <Info className="h-5 w-5 text-amber shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">
                Hinta-arviot ovat suuntaa-antavia ja perustuvat julkisiin hintatietoihin.
                Todelliset säästöt riippuvat yksilöllisistä tekijöistä ja vakuutusyhtiön
                lopullisesta tarjouksesta.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
