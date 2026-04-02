// ============================================================
// Vakuutusvertailu — Type Definitions
// ============================================================

// --- Insurance Types ---

export type InsuranceType =
  | 'auto'
  | 'home'
  | 'travel'
  | 'pet'
  | 'life'
  | 'accident'
  | 'child';

export type InsuranceTier = 'basic' | 'standard' | 'premium' | 'comprehensive';

// --- Provider Types ---

export type ProviderSize = 'large' | 'medium' | 'small' | 'niche';

export interface InsuranceProvider {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  founded: number;
  ownership: string;
  marketShare: number; // percentage
  size: ProviderSize;
  headquarters: string;
  employeeCount: string;
  customerCount: string;
  website: string;
  description: string;
  longDescription: string;
  logo: string;
  color: string;
  satisfaction: number; // 0-10 scale
  reviewCount: number;
  claimProcessRating: number; // 0-10
  onlineServiceRating: number; // 0-10
  priceCompetitiveness: number; // 0-10
  isAffiliate: boolean;
  affiliateUrl?: string;
  affiliateDisclosure?: string;
  products: InsuranceProduct[];
  strengths: string[];
  weaknesses: string[];
  specialFeatures: string[];
  concentrationBenefits: string; // keskittämisetu description
  onlineCapabilities: string[];
  appAvailable: boolean;
  insuranceTypes: InsuranceType[];
  faq: FAQItem[];
}

// --- Product Types ---

export interface CoverageItem {
  name: string;
  included: boolean;
  limit?: string;
  description?: string;
}

export interface DeductibleOption {
  amount: number;
  label: string;
}

export interface InsuranceProduct {
  id: string;
  providerId: string;
  type: InsuranceType;
  name: string;
  tier: InsuranceTier;
  priceRange: PriceRange;
  coverage: CoverageItem[];
  deductibles: DeductibleOption[];
  highlights: string[];
  limitations: string[];
  suitableFor: string[];
  lastVerified: string; // ISO date
}

export interface PriceRange {
  min: number;
  max: number;
  unit: 'eur/year' | 'eur/month';
  note?: string;
}

// --- Comparison Types ---

export interface ComparisonFilters {
  insuranceType: InsuranceType;
  tier?: InsuranceTier;
  sortBy: SortOption;
  maxPrice?: number;
  minRating?: number;
  onlyAffiliate?: boolean;
}

export type SortOption =
  | 'price-asc'
  | 'price-desc'
  | 'rating'
  | 'satisfaction'
  | 'market-share';

export interface ComparisonResult {
  provider: InsuranceProvider;
  product: InsuranceProduct;
  estimatedPrice: number;
  matchScore: number;
}

// --- Auto Insurance Specific ---

export interface AutoInsuranceParams {
  vehicleType: 'car' | 'motorcycle' | 'moped' | 'trailer';
  vehicleYear: number;
  vehicleValue: number;
  enginePower: number; // kW
  postalCode: string;
  driverAge: number;
  bonusClass: number; // 0-13 in Finland
  annualMileage: number;
  coverageLevel: InsuranceTier;
}

// --- Home Insurance Specific ---

export interface HomeInsuranceParams {
  propertyType: 'apartment' | 'rowhouse' | 'detached' | 'holiday';
  area: number; // m²
  yearBuilt: number;
  postalCode: string;
  buildingMaterial: 'wood' | 'brick' | 'concrete' | 'other';
  coverageLevel: InsuranceTier;
  contentsValue: number;
}

// --- Travel Insurance Specific ---

export interface TravelInsuranceParams {
  destination: 'nordic' | 'europe' | 'worldwide';
  duration: 'single' | 'annual';
  travelers: number;
  includesCancellation: boolean;
  medicalLimit: number;
}

// --- Pet Insurance Specific ---

export interface PetInsuranceParams {
  petType: 'dog' | 'cat' | 'rabbit';
  breed: string;
  age: number;
  coverageLevel: InsuranceTier;
}

// --- Content Types ---

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string; // Full HTML
  category: BlogCategory;
  author: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  readTime: number; // minutes
  tags: string[];
  relatedProviders?: string[]; // provider slugs
  relatedInsuranceTypes?: InsuranceType[];
  targetKeyword: string;
  tableOfContents?: TOCItem[];
}

export type BlogCategory =
  | 'vertailu'
  | 'opas'
  | 'uutiset'
  | 'vinkit'
  | 'lakiasiat';

export interface Guide {
  slug: string;
  title: string;
  description: string;
  content: string; // Full HTML
  category: InsuranceType | 'general';
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  targetKeyword: string;
  tableOfContents: TOCItem[];
  relatedGuides?: string[];
  relatedInsuranceTypes?: InsuranceType[];
}

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// --- Calculator Types ---

export interface CalculatorResult {
  providerId: string;
  providerName: string;
  productName: string;
  estimatedMonthly: number;
  estimatedYearly: number;
  coverageScore: number;
  highlights: string[];
}

// --- SEO Types ---

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

// --- Insurance Type Metadata ---

export interface InsuranceTypeInfo {
  type: InsuranceType;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string; // Lucide icon name
  color: string;
  marketSize: string;
  averagePrice: string;
  keyFact: string;
}

// --- Navigation ---

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
