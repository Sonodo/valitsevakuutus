'use client';

import { useState, useMemo } from 'react';
import { Award, Info, TrendingUp, AlertTriangle } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface FormData {
  currentBonusClass: number;
  claimsInLast5Years: number;
  basePremium: number; // Annual premium without bonus discount
}

interface YearProjection {
  year: number;
  bonusClass: number;
  discountPercent: number;
  premium: number;
}

// Finnish bonus system: S0 (0%) to S13 (70%)
const BONUS_TABLE = Array.from({ length: 14 }, (_, i) => ({
  class: i,
  label: `S${i}`,
  discount: Math.min(i * 5, 70),
}));

// After a claim, bonus typically drops 3-4 classes
function bonusAfterClaim(currentClass: number): number {
  return Math.max(0, currentClass - 4);
}

export default function BonusCalculator() {
  const [formData, setFormData] = useState<FormData>({
    currentBonusClass: 7,
    claimsInLast5Years: 0,
    basePremium: 800,
  });
  const [showResults, setShowResults] = useState(false);

  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Current discount
  const currentDiscount = Math.min(formData.currentBonusClass * 5, 70);
  const currentPremium = Math.round(formData.basePremium * (1 - currentDiscount / 100));

  // 10-year projection WITHOUT claims
  const projectionNoClaims = useMemo((): YearProjection[] => {
    const years: YearProjection[] = [];
    let bc = formData.currentBonusClass;
    for (let y = 0; y <= 10; y++) {
      const discount = Math.min(bc * 5, 70);
      years.push({
        year: y,
        bonusClass: bc,
        discountPercent: discount,
        premium: Math.round(formData.basePremium * (1 - discount / 100)),
      });
      bc = Math.min(13, bc + 1);
    }
    return years;
  }, [formData.currentBonusClass, formData.basePremium]);

  // 10-year projection WITH a claim in year 1
  const projectionWithClaim = useMemo((): YearProjection[] => {
    const years: YearProjection[] = [];
    let bc = formData.currentBonusClass;
    for (let y = 0; y <= 10; y++) {
      if (y === 1) {
        bc = bonusAfterClaim(bc);
      } else if (y > 1) {
        bc = Math.min(13, bc + 1);
      }
      const discount = Math.min(bc * 5, 70);
      years.push({
        year: y,
        bonusClass: bc,
        discountPercent: discount,
        premium: Math.round(formData.basePremium * (1 - discount / 100)),
      });
    }
    return years;
  }, [formData.currentBonusClass, formData.basePremium]);

  // Cost of a claim over time
  const claimCostOverTime = useMemo(() => {
    let totalExtra = 0;
    for (let y = 0; y <= 10; y++) {
      totalExtra += projectionWithClaim[y].premium - projectionNoClaims[y].premium;
    }
    return totalExtra;
  }, [projectionNoClaims, projectionWithClaim]);

  const calculate = () => {
    setShowResults(true);
  };

  return (
    <section className="pb-16 pt-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
            <Award className="h-6 w-6 text-purple-700" />
          </div>
          <h1 className="text-3xl font-bold text-navy sm:text-4xl">
            Bonuslaskuri
          </h1>
        </div>
        <p className="max-w-2xl text-gray-600">
          Suomalaisessa autovakuutuksessa bonusjärjestelmä palkitsee vahingottomasta
          ajamisesta. Laske miten bonusluokkasi vaikuttaa vakuutusmaksuun ja miten
          vahinko muuttaa bonuksiasi.
        </p>
      </div>

      {/* Bonus system explanation */}
      <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 sm:p-6">
        <h2 className="text-lg font-bold text-navy mb-3">Miten bonusjärjestelmä toimii?</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-teal/5 p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-teal" />
              <h3 className="font-semibold text-navy">Bonus nousee</h3>
            </div>
            <p className="text-sm text-gray-600">
              Jokainen vahingoton vuosi nostaa bonusluokkaa yhdellä. S0:sta S13:een kestaa 13 vuotta.
            </p>
          </div>
          <div className="rounded-xl bg-amber/5 p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-amber" />
              <h3 className="font-semibold text-navy">Vahinko pudottaa</h3>
            </div>
            <p className="text-sm text-gray-600">
              Yksi vahinkoilmoitus pudottaa bonusluokkaa yleensä 3–4 luokkaa. Pahimmillaan S13 putoaa S9:aan.
            </p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-navy">Maksimialennus</h3>
            </div>
            <p className="text-sm text-gray-600">
              S13 = 70 % alennus. Tämä tarkoittaa, että maksat vain 30 % perusmaksusta.
            </p>
          </div>
        </div>
      </div>

      {/* Full bonus table */}
      <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 sm:p-6">
        <h2 className="text-lg font-bold text-navy mb-4">Bonusluokat S0–S13</h2>
        <div className="overflow-x-auto -mx-5 px-5 sm:-mx-6 sm:px-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="pb-2 text-left font-semibold text-gray-600">Luokka</th>
                <th className="pb-2 text-center font-semibold text-gray-600">Alennus</th>
                <th className="pb-2 text-right font-semibold text-gray-600">Maksat</th>
                <th className="pb-2 text-right font-semibold text-gray-600 hidden sm:table-cell">Esim. 800 EUR perus</th>
              </tr>
            </thead>
            <tbody>
              {BONUS_TABLE.map((row) => (
                <tr
                  key={row.class}
                  className={`border-b border-gray-100 ${
                    row.class === formData.currentBonusClass
                      ? 'bg-teal/5 font-semibold'
                      : ''
                  }`}
                >
                  <td className="py-2">
                    <span className={row.class === formData.currentBonusClass ? 'text-teal' : 'text-navy'}>
                      {row.label}
                    </span>
                    {row.class === 0 && <span className="ml-1 text-xs text-gray-400">(uusi kuljettaja)</span>}
                    {row.class === 13 && <span className="ml-1 text-xs text-gray-400">(maksimi)</span>}
                  </td>
                  <td className="py-2 text-center">{row.discount} %</td>
                  <td className="py-2 text-right">{100 - row.discount} %</td>
                  <td className="py-2 text-right hidden sm:table-cell">
                    {formatCurrency(Math.round(800 * (1 - row.discount / 100)))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Calculator Form */}
      <div className="max-w-xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
        <h2 className="mb-6 text-xl font-bold text-navy">Laske oma bonuksesi vaikutus</h2>

        <div className="space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Nykyinen bonusluokka
            </label>
            <select
              value={formData.currentBonusClass}
              onChange={(e) => updateField('currentBonusClass', Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-teal focus:ring-2 focus:ring-teal/20"
            >
              {BONUS_TABLE.map((row) => (
                <option key={row.class} value={row.class}>
                  {row.label} — {row.discount} % alennus
                  {row.class === 0 ? ' (uusi kuljettaja)' : row.class === 13 ? ' (maksimi)' : ''}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Vakuutuksen perusmaksu (EUR/vuosi, ilman bonusta)
            </label>
            <input
              type="number"
              min={100}
              max={5000}
              step={50}
              value={formData.basePremium}
              onChange={(e) => updateField('basePremium', Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-teal focus:ring-2 focus:ring-teal/20"
            />
            <p className="mt-1 text-xs text-gray-500">
              Perusmaksu ilman bonusalennusta. Jos et tiedä, käytä arviona 600–1 000 EUR.
            </p>
          </div>

          {/* Current state summary */}
          <div className="rounded-xl bg-teal/5 border border-teal/20 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Bonusluokkasi</span>
              <span className="text-lg font-bold text-teal">S{formData.currentBonusClass}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Bonusalennus</span>
              <span className="text-lg font-bold text-teal">{currentDiscount} %</span>
            </div>
            <div className="flex items-center justify-between border-t border-teal/20 pt-2">
              <span className="text-sm font-medium text-gray-600">Vakuutusmaksusi nyt</span>
              <span className="text-xl font-bold text-navy">{formatCurrency(currentPremium)}/vuosi</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={calculate}
            className="flex w-full min-h-[44px] items-center justify-center gap-2 rounded-lg bg-amber px-6 py-3 font-bold text-white transition-colors hover:bg-amber-light"
          >
            <TrendingUp className="h-5 w-5" />
            Näe bonusennuste
          </button>
        </div>
      </div>

      {/* Results */}
      {showResults && (
        <div className="mt-8 space-y-8">
          {/* 10-year projection table */}
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 sm:p-6">
            <h2 className="text-xl font-bold text-navy mb-4">10 vuoden ennuste</h2>
            <div className="overflow-x-auto -mx-5 px-5 sm:-mx-6 sm:px-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="pb-2 text-left font-semibold text-gray-600">Vuosi</th>
                    <th className="pb-2 text-center font-semibold text-gray-600" colSpan={2}>
                      Ilman vahinkoja
                    </th>
                    <th className="pb-2 text-center font-semibold text-gray-600" colSpan={2}>
                      Vahinko 1. vuonna
                    </th>
                    <th className="pb-2 text-right font-semibold text-gray-600">Ero</th>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <th className="pb-1.5" />
                    <th className="pb-1.5 text-center text-xs text-gray-400">Luokka</th>
                    <th className="pb-1.5 text-center text-xs text-gray-400">Maksu</th>
                    <th className="pb-1.5 text-center text-xs text-gray-400">Luokka</th>
                    <th className="pb-1.5 text-center text-xs text-gray-400">Maksu</th>
                    <th className="pb-1.5" />
                  </tr>
                </thead>
                <tbody>
                  {projectionNoClaims.map((row, i) => {
                    const claimRow = projectionWithClaim[i];
                    const diff = claimRow.premium - row.premium;
                    return (
                      <tr
                        key={i}
                        className={`border-b border-gray-100 ${i === 0 ? 'bg-gray-50 font-semibold' : ''}`}
                      >
                        <td className="py-2 text-navy">
                          {i === 0 ? 'Nyt' : `+${i} v.`}
                        </td>
                        <td className="py-2 text-center text-teal font-medium">S{row.bonusClass}</td>
                        <td className="py-2 text-center">{formatCurrency(row.premium)}</td>
                        <td
                          className={`py-2 text-center font-medium ${
                            claimRow.bonusClass < row.bonusClass ? 'text-red-600' : 'text-teal'
                          }`}
                        >
                          S{claimRow.bonusClass}
                        </td>
                        <td className="py-2 text-center">{formatCurrency(claimRow.premium)}</td>
                        <td className={`py-2 text-right font-medium ${diff > 0 ? 'text-red-600' : 'text-gray-400'}`}>
                          {diff > 0 ? `+${formatCurrency(diff)}` : '—'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Claim cost summary */}
          <div className="rounded-2xl bg-red-50 border border-red-200 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-navy mb-1">Vahingon todellinen hinta</h3>
                <p className="text-gray-700">
                  Jos teet vahinkoilmoituksen, bonuksesi putoaa S{formData.currentBonusClass}:sta S{bonusAfterClaim(formData.currentBonusClass)}:aan.
                  Seuraavan 10 vuoden aikana maksat vakuutuksista yhteensä{' '}
                  <strong className="text-red-600">{formatCurrency(claimCostOverTime)} enemmän</strong> kuin
                  ilman vahinkoa.
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Pieni vahinko kannattaa usein maksaa itse, jos korvaussumma on pienempi
                  kuin bonusmenetyksen aiheuttama lisäkustannus.
                </p>
              </div>
            </div>
          </div>

          {/* Max bonus projection */}
          <div className="rounded-2xl bg-green-50 border border-green-200 p-5 sm:p-6">
            <h3 className="font-bold text-navy mb-2">Matka maksimibonus S13:een</h3>
            {formData.currentBonusClass >= 13 ? (
              <p className="text-green-700">
                Sinulla on jo maksimibonus S13! Saat 70 % alennuksen vakuutusmaksusta.
                Jatka turvallista ajoa, niin bonus pysyy korkeana.
              </p>
            ) : (
              <p className="text-gray-700">
                Nykyisestä bonusluokastasi S{formData.currentBonusClass} tarvitset{' '}
                <strong className="text-green-700">
                  {13 - formData.currentBonusClass} vahingoton{formData.currentBonusClass <= 12 ? 'ta' : ''} vuotta
                </strong>{' '}
                saavuttaaksesi maksimibonus S13. Silloin saat 70 % alennuksen, eli maksat
                vain <strong>{formatCurrency(Math.round(formData.basePremium * 0.3))}/vuosi</strong>{' '}
                nykyisen {formatCurrency(currentPremium)} sijaan.
              </p>
            )}
          </div>

          {/* Disclaimer */}
          <div className="rounded-xl bg-amber/5 border border-amber/20 p-4">
            <div className="flex gap-2">
              <Info className="h-5 w-5 text-amber shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">
                Hinta-arviot ovat suuntaa-antavia. Bonusten tarkat vaikutukset ja
                pudotussäännöt vaihtelevat vakuutusyhtiöittäin. Tarkista omat ehtosi
                vakuutusyhtiöltäsi.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
