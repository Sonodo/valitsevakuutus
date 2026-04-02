// ============================================================
// Vakuutusvertailu — Utility Functions
// ============================================================

/**
 * Format currency in Finnish style: 1 234,56 €
 */
export function formatCurrency(amount: number, decimals = 0): string {
  return (
    amount
      .toFixed(decimals)
      .replace('.', ',')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' €'
  );
}

/**
 * Format price range: "200–600 €/vuosi"
 */
export function formatPriceRange(
  min: number,
  max: number,
  unit: string = 'vuosi'
): string {
  return `${formatCurrency(min)}–${formatCurrency(max)}/${unit}`;
}

/**
 * Format percentage: "5,5 %"
 */
export function formatPercentage(value: number, decimals = 1): string {
  return value.toFixed(decimals).replace('.', ',') + ' %';
}

/**
 * Format rating as stars text: "4,2/5"
 */
export function formatRating(rating: number, max = 5): string {
  return `${rating.toFixed(1).replace('.', ',')}/${max}`;
}

/**
 * Format satisfaction: "8,5/10"
 */
export function formatSatisfaction(score: number): string {
  return `${score.toFixed(1).replace('.', ',')}/10`;
}

/**
 * Classify a rating as text
 */
export function classifyRating(
  rating: number,
  max = 10
): 'erinomainen' | 'hyvä' | 'keskitaso' | 'heikko' {
  const normalized = rating / max;
  if (normalized >= 0.85) return 'erinomainen';
  if (normalized >= 0.7) return 'hyvä';
  if (normalized >= 0.5) return 'keskitaso';
  return 'heikko';
}

/**
 * Format date in Finnish: "28.3.2026"
 */
export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
}

/**
 * Format date long Finnish: "28. maaliskuuta 2026"
 */
export function formatDateLong(dateStr: string): string {
  const months = [
    'tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta',
    'toukokuuta', 'kesäkuuta', 'heinäkuuta', 'elokuuta',
    'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta',
  ];
  const d = new Date(dateStr);
  return `${d.getDate()}. ${months[d.getMonth()]} ${d.getFullYear()}`;
}

/**
 * Estimate auto insurance premium
 */
export function estimateAutoPremium(params: {
  vehicleValue: number;
  driverAge: number;
  bonusClass: number;
  enginePower: number;
  tier: string;
}): number {
  const { vehicleValue, driverAge, bonusClass, enginePower, tier } = params;

  // Base traffic insurance (liikennevakuutus)
  let base = 200;
  base += enginePower * 0.8;
  if (driverAge < 25) base *= 1.5;
  else if (driverAge < 30) base *= 1.2;

  // Bonus discount (0-70%)
  const bonusDiscount = Math.min(bonusClass * 5, 70) / 100;
  base *= 1 - bonusDiscount;

  // Add kasko based on tier
  if (tier === 'basic') {
    // Only liikennevakuutus
  } else if (tier === 'standard') {
    base += vehicleValue * 0.02;
  } else if (tier === 'premium') {
    base += vehicleValue * 0.035;
  } else {
    base += vehicleValue * 0.05;
  }

  return Math.round(base);
}

/**
 * Estimate home insurance premium
 */
export function estimateHomePremium(params: {
  area: number;
  propertyType: string;
  yearBuilt: number;
  contentsValue: number;
  tier: string;
}): number {
  const { area, propertyType, yearBuilt, contentsValue, tier } = params;

  let base = 0;
  if (propertyType === 'apartment') base = area * 1.2;
  else if (propertyType === 'rowhouse') base = area * 1.8;
  else base = area * 2.5;

  // Age factor
  const age = new Date().getFullYear() - yearBuilt;
  if (age > 50) base *= 1.3;
  else if (age > 30) base *= 1.15;

  // Contents value factor
  base += contentsValue * 0.002;

  // Tier multiplier
  if (tier === 'standard') base *= 1.2;
  else if (tier === 'premium') base *= 1.5;
  else if (tier === 'comprehensive') base *= 1.8;

  return Math.round(base);
}

/**
 * Slugify a string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/å/g, 'a')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Tailwind classname merge helper
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

/**
 * Calculate reading time from HTML content
 */
export function calculateReadTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

// ============================================================
// Pet Insurance Estimation
// ============================================================

/**
 * Estimate pet insurance premium
 */
export function estimatePetPremium(params: {
  petType: 'dog' | 'cat' | 'rabbit';
  breed: string;
  age: number;
  tier: string;
}): number {
  const { petType, breed, age, tier } = params;

  // Base premium by pet type
  let base = 0;
  if (petType === 'dog') base = 350;
  else if (petType === 'cat') base = 220;
  else base = 120; // rabbit

  // Breed risk factor — large/brachycephalic breeds cost more
  const highRiskDogBreeds = [
    'saksanpaimenkoira', 'bulldoggi', 'mäyräkoira', 'rottweiler',
    'labradorinnoutaja', 'kultainennoutaja', 'bernhardinkoira',
    'tanskandoggi', 'bullmastiffi',
  ];
  const highRiskCatBreeds = [
    'persialainen', 'maine coon', 'ragdoll', 'bengali', 'sphinx',
  ];

  const breedLower = breed.toLowerCase();
  if (petType === 'dog' && highRiskDogBreeds.some((b) => breedLower.includes(b))) {
    base *= 1.3;
  } else if (petType === 'cat' && highRiskCatBreeds.some((b) => breedLower.includes(b))) {
    base *= 1.2;
  }

  // Age factor — older pets cost more
  if (age <= 1) base *= 0.9;
  else if (age <= 3) base *= 1.0;
  else if (age <= 6) base *= 1.2;
  else if (age <= 9) base *= 1.5;
  else base *= 1.8;

  // Tier multiplier
  if (tier === 'basic') base *= 0.7;
  else if (tier === 'standard') base *= 1.0;
  else if (tier === 'premium') base *= 1.4;
  else if (tier === 'comprehensive') base *= 1.8;

  return Math.round(base);
}

// ============================================================
// Travel Insurance Estimation
// ============================================================

/**
 * Estimate travel insurance premium
 */
export function estimateTravelPremium(params: {
  destination: 'nordic' | 'europe' | 'worldwide';
  duration: 'single' | 'annual';
  travelers: number;
  includesCancellation: boolean;
  age: number;
}): number {
  const { destination, duration, travelers, includesCancellation, age } = params;

  // Base premium by destination
  let base = 0;
  if (destination === 'nordic') base = 30;
  else if (destination === 'europe') base = 55;
  else base = 95; // worldwide

  // Duration
  if (duration === 'annual') base *= 2.5;

  // Travelers
  base *= travelers;

  // Cancellation coverage
  if (includesCancellation) base += 25 * travelers;

  // Age factor
  if (age >= 65) base *= 1.6;
  else if (age >= 50) base *= 1.25;
  else if (age < 18) base *= 0.7;

  return Math.round(base);
}

// ============================================================
// Life Insurance Estimation
// ============================================================

/**
 * Estimate life insurance premium (annual)
 */
export function estimateLifePremium(params: {
  age: number;
  coverageAmount: number; // 50,000 - 500,000 €
  term: number; // 10, 15, 20, 25 years
  isSmoker: boolean;
}): number {
  const { age, coverageAmount, term, isSmoker } = params;

  // Base rate per 1000 € of coverage
  let ratePerThousand = 0.8;

  // Age factor — risk increases with age
  if (age < 30) ratePerThousand *= 0.6;
  else if (age < 40) ratePerThousand *= 0.8;
  else if (age < 50) ratePerThousand *= 1.2;
  else if (age < 55) ratePerThousand *= 1.6;
  else if (age < 60) ratePerThousand *= 2.2;
  else ratePerThousand *= 3.0;

  // Smoker surcharge
  if (isSmoker) ratePerThousand *= 1.8;

  // Term factor — longer terms cost slightly less per year
  if (term <= 10) ratePerThousand *= 1.1;
  else if (term <= 15) ratePerThousand *= 1.0;
  else if (term <= 20) ratePerThousand *= 0.95;
  else ratePerThousand *= 0.9;

  const annual = (coverageAmount / 1000) * ratePerThousand;
  return Math.round(annual);
}
