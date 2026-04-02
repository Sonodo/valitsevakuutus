'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PawPrint, ChevronRight, ChevronLeft, ExternalLink, Info } from 'lucide-react';
import { providers } from '@/data/providers';
import { estimatePetPremium, formatCurrency } from '@/lib/utils';
import type { InsuranceTier } from '@/types';

type Step = 1 | 2 | 3;

type PetType = 'dog' | 'cat' | 'rabbit';

interface FormData {
  petType: PetType;
  breed: string;
  age: number;
  coverageLevel: InsuranceTier;
}

interface ProviderEstimate {
  providerId: string;
  providerName: string;
  providerSlug: string;
  estimated: number;
  highlights: string[];
  isAffiliate: boolean;
  satisfaction: number;
  hasPetProduct: boolean;
}

const PET_TYPE_LABELS: Record<PetType, string> = {
  dog: 'Koira',
  cat: 'Kissa',
  rabbit: 'Kani',
};

const PET_TYPE_EMOJIS: Record<PetType, string> = {
  dog: '',
  cat: '',
  rabbit: '',
};

const DOG_BREEDS = [
  'Sekarotuinen',
  'Labradorinnoutaja',
  'Kultainennoutaja',
  'Saksanpaimenkoira',
  'Suomenajokoira',
  'Suomenpystykorva',
  'Bichon frise',
  'Jämtlanninpystykorva',
  'Chihuahua',
  'Mäyräkoira',
  'Cavalier kingcharlesinspanieli',
  'Bordercollie',
  'Jackrussellinterrieri',
  'Rottweiler',
  'Bulldoggi',
  'Mopsi',
  'Cotondetulear',
  'Shetlanninlammaskoira',
  'Muu rotu',
];

const CAT_BREEDS = [
  'Kotikissa (sekarotuinen)',
  'Maine coon',
  'Ragdoll',
  'Brittiläinen lyhytkarva',
  'Persialainen',
  'Siamilainen',
  'Bengali',
  'Norjalainen metsäkissa',
  'Abessiinialainen',
  'Sphinx',
  'Muu rotu',
];

const RABBIT_BREEDS = [
  'Sekarotuinen',
  'Kääpiökani',
  'Leijonanpääkani',
  'Hollanninkääpiö',
  'Pässikani',
  'Muu rotu',
];

const TIER_LABELS: Record<InsuranceTier, string> = {
  basic: 'Perusturva',
  standard: 'Keskitason turva',
  premium: 'Laaja turva',
  comprehensive: 'Täydellinen turva',
};

const TIER_DESCRIPTIONS: Record<InsuranceTier, string> = {
  basic: 'Kattaa tapaturmat ja perushoidon. Hoitokulukatto yleensä 2 000–3 000 EUR.',
  standard: 'Kattaa tapaturmat, sairaudet ja perushoidon. Hoitokulukatto 5 000 EUR.',
  premium: 'Laaja turva — hoitokulukatto 8 000–10 000 EUR, sisältää erikoishoidon.',
  comprehensive: 'Täydellinen turva ilman merkittäviä rajoituksia. Hoitokulukatto 15 000+ EUR.',
};

function getBreeds(petType: PetType): string[] {
  switch (petType) {
    case 'dog': return DOG_BREEDS;
    case 'cat': return CAT_BREEDS;
    case 'rabbit': return RABBIT_BREEDS;
  }
}

export default function PetCalculator() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    petType: 'dog',
    breed: 'Sekarotuinen',
    age: 3,
    coverageLevel: 'standard',
  });
  const [results, setResults] = useState<ProviderEstimate[]>([]);

  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handlePetTypeChange = (petType: PetType) => {
    updateField('petType', petType);
    const breeds = getBreeds(petType);
    updateField('breed', breeds[0]);
  };

  const calculateResults = () => {
    // Filter to providers that offer pet insurance
    const petProviders = providers.filter((p) => p.insuranceTypes.includes('pet'));

    const estimates: ProviderEstimate[] = petProviders.map((provider) => {
      const varianceFactor = 1 + (provider.priceCompetitiveness - 7) * -0.04;

      const baseEstimate = estimatePetPremium({
        petType: formData.petType,
        breed: formData.breed,
        age: formData.age,
        tier: formData.coverageLevel,
      });

      const petProducts = provider.products.filter((p) => p.type === 'pet');
      const highlights = petProducts.length > 0
        ? petProducts[0].highlights.slice(0, 3)
        : provider.strengths.slice(0, 3);

      return {
        providerId: provider.id,
        providerName: provider.name,
        providerSlug: provider.slug,
        estimated: Math.round(baseEstimate * varianceFactor),
        highlights,
        isAffiliate: provider.isAffiliate,
        satisfaction: provider.satisfaction,
        hasPetProduct: petProducts.length > 0,
      };
    });

    estimates.sort((a, b) => a.estimated - b.estimated);
    setResults(estimates);
    setStep(3);
  };

  const goNext = () => {
    if (step === 1) setStep(2);
    else if (step === 2) calculateResults();
  };

  const goBack = () => {
    if (step === 2) setStep(1);
  };

  const resetCalculator = () => {
    setStep(1);
    setResults([]);
  };

  const breeds = getBreeds(formData.petType);

  return (
    <section className="pb-16 pt-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
            <PawPrint className="h-6 w-6 text-orange-600" />
          </div>
          <h1 className="text-3xl font-bold text-navy sm:text-4xl">
            Lemmikkivakuutuslaskuri
          </h1>
        </div>
        <p className="max-w-2xl text-gray-600">
          Laske lemmikkivakuutuksen hinta ja vertaa vakuutusyhtiöiden tarjouksia.
          Eläinlääkärikäynnit voivat maksaa satoja tai tuhansia euroja — vakuutus tuo mielenrauhan.
        </p>
      </div>

      {/* Step indicator */}
      {step < 3 && (
        <div className="mb-8">
          <div className="flex items-center gap-2">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                    s === step
                      ? 'bg-teal text-white'
                      : s < step
                        ? 'bg-teal/20 text-teal'
                        : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {s}
                </div>
                <span
                  className={`text-sm font-medium ${
                    s === step ? 'text-navy' : 'text-gray-400'
                  }`}
                >
                  {s === 1 ? 'Lemmikin tiedot' : 'Turvataso'}
                </span>
                {s < 2 && <div className="mx-2 h-px w-8 bg-gray-300 sm:w-16" />}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Pet info */}
      {step === 1 && (
        <div className="max-w-xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <h2 className="mb-6 text-xl font-bold text-navy">Lemmikin tiedot</h2>

          <div className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Lemmikin tyyppi
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(Object.keys(PET_TYPE_LABELS) as PetType[]).map((pt) => (
                  <label
                    key={pt}
                    className={`flex cursor-pointer flex-col items-center rounded-xl border-2 p-4 transition-colors ${
                      formData.petType === pt
                        ? 'border-teal bg-teal/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="petType"
                      value={pt}
                      checked={formData.petType === pt}
                      onChange={() => handlePetTypeChange(pt)}
                      className="sr-only"
                    />
                    <span className="text-2xl mb-1">{PET_TYPE_EMOJIS[pt]}</span>
                    <span className="text-sm font-semibold text-navy">{PET_TYPE_LABELS[pt]}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Rotu
              </label>
              <select
                value={formData.breed}
                onChange={(e) => updateField('breed', e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-teal focus:ring-2 focus:ring-teal/20"
              >
                {breeds.map((breed) => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                Rotu vaikuttaa hintaan: suuret ja lyhytkuonoiset rodut ovat kalliimpia vakuuttaa.
              </p>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Ikä (vuotta)
              </label>
              <input
                type="number"
                min={0}
                max={20}
                value={formData.age}
                onChange={(e) => updateField('age', Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
              <p className="mt-1 text-xs text-gray-500">
                Vakuutus on edullisinta nuorena. Yli 8-vuotiaan vakuuttaminen on kalliimpaa.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={goNext}
              className="flex min-h-[44px] items-center gap-2 rounded-lg bg-teal px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-dark"
            >
              Seuraava
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Coverage Level */}
      {step === 2 && (
        <div className="max-w-xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <h2 className="mb-6 text-xl font-bold text-navy">Valitse turvataso</h2>

          <div className="space-y-3">
            {(Object.keys(TIER_LABELS) as InsuranceTier[]).map((tier) => (
              <label
                key={tier}
                className={`flex cursor-pointer items-start gap-4 rounded-xl border-2 p-4 transition-colors ${
                  formData.coverageLevel === tier
                    ? 'border-teal bg-teal/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="coverageLevel"
                  value={tier}
                  checked={formData.coverageLevel === tier}
                  onChange={() => updateField('coverageLevel', tier)}
                  className="mt-1 h-4 w-4 text-teal accent-teal"
                />
                <div className="flex-1">
                  <div className="font-semibold text-navy">{TIER_LABELS[tier]}</div>
                  <div className="mt-0.5 text-sm text-gray-600">{TIER_DESCRIPTIONS[tier]}</div>
                </div>
              </label>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={goBack}
              className="flex min-h-[44px] items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              <ChevronLeft className="h-4 w-4" />
              Takaisin
            </button>
            <button
              onClick={goNext}
              className="flex min-h-[44px] items-center gap-2 rounded-lg bg-amber px-6 py-3 font-bold text-white transition-colors hover:bg-amber-light"
            >
              Laske hinta
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Results */}
      {step === 3 && results.length > 0 && (
        <div>
          {/* Summary */}
          <div className="mb-6 rounded-2xl bg-navy p-5 text-white sm:p-6">
            <div className="flex flex-wrap items-center gap-4 text-sm sm:gap-8">
              <div>
                <span className="text-white/60">Lemmikki:</span>{' '}
                <span className="font-semibold">
                  {PET_TYPE_LABELS[formData.petType]}, {formData.breed}, {formData.age} v.
                </span>
              </div>
              <div>
                <span className="text-white/60">Turvataso:</span>{' '}
                <span className="font-semibold">{TIER_LABELS[formData.coverageLevel]}</span>
              </div>
              <button
                onClick={resetCalculator}
                className="ml-auto text-sm font-medium text-teal-light underline hover:text-white"
              >
                Laske uudelleen
              </button>
            </div>
          </div>

          {/* Cheapest highlight */}
          <div className="mb-6 rounded-2xl border-2 border-teal bg-teal/5 p-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="rounded-full bg-teal px-3 py-0.5 text-xs font-bold text-white">
                Halvin
              </span>
            </div>
            <p className="text-lg font-bold text-navy">
              {results[0].providerName} — {formatCurrency(results[0].estimated)}/vuosi
            </p>
            {results.length > 1 && (
              <p className="text-sm text-gray-600">
                Säästäisit jopa{' '}
                <strong className="text-teal">
                  {formatCurrency(results[results.length - 1].estimated - results[0].estimated)}
                </strong>{' '}
                vuodessa verrattuna kalleimpaan vaihtoehtoon.
              </p>
            )}
          </div>

          {/* Results List */}
          <div className="space-y-4">
            {results.map((result, index) => (
              <div
                key={result.providerId}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md sm:p-6"
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
                    <div className="flex flex-wrap gap-2 mb-2">
                      {result.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">
                      Tyytyväisyys: {result.satisfaction.toFixed(1).replace('.', ',')}/10
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-navy">
                        {formatCurrency(result.estimated)}
                      </div>
                      <div className="text-sm text-gray-500">vuodessa</div>
                      <div className="text-sm text-gray-400">
                        {formatCurrency(Math.round(result.estimated / 12))}/kk
                      </div>
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
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-8 rounded-2xl bg-teal/5 border border-teal/20 p-5">
            <h3 className="font-bold text-navy mb-3">Vinkkeja lemmikkivakuutuksen valintaan</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-teal font-bold">1.</span>
                Ota vakuutus mahdollisimman nuorena — pentu- ja poikasika on edullisin vakuuttaa.
              </li>
              <li className="flex gap-2">
                <span className="text-teal font-bold">2.</span>
                Tarkista hoitokulukatto — se määrittää, kuinka paljon vakuutus korvaa vuodessa.
              </li>
              <li className="flex gap-2">
                <span className="text-teal font-bold">3.</span>
                Huomioi odotusaika — useimmissa vakuutuksissa on 30 päivän odotusaika sairauksille.
              </li>
              <li className="flex gap-2">
                <span className="text-teal font-bold">4.</span>
                Rotusairaudet voivat olla rajoitettuja — lue ehdot huolellisesti.
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 rounded-xl bg-amber/5 border border-amber/20 p-4">
            <div className="flex gap-2">
              <Info className="h-5 w-5 text-amber shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">
                Hinta-arviot ovat suuntaa-antavia ja perustuvat julkisiin hintatietoihin.
                Lopullinen vakuutuksen hinta määräytyy vakuutusyhtiön omassa laskurissa
                ja riippuu lemmikin yksilöllisistä tekijöistä.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
