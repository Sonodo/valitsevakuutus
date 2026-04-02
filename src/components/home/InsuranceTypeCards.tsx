import Link from 'next/link';
import type { LucideProps } from 'lucide-react';
import {
  Car,
  Home,
  Plane,
  PawPrint,
  Heart,
  ShieldPlus,
  Baby,
} from 'lucide-react';
import { INSURANCE_TYPES } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Car,
  Home,
  Plane,
  PawPrint,
  Heart,
  ShieldPlus,
  Baby,
};

export default function InsuranceTypeCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">
          Valitse vakuutuslaji
        </h2>
        <p className="mt-3 text-gray-600">
          Vertaa hintoja ja ehtoja kaikissa vakuutuslajeissa
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {INSURANCE_TYPES.map((type) => {
          const Icon = iconMap[type.icon];
          return (
            <Link
              key={type.type}
              href={`/${type.slug}`}
              className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-teal hover:shadow-md"
            >
              <div
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${type.color}15` }}
              >
                {Icon && (
                  <Icon
                    className="h-6 w-6"
                    color={type.color}
                  />
                )}
              </div>

              <h3 className="text-sm font-semibold text-navy group-hover:text-teal sm:text-base">
                {type.name}
              </h3>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                {type.description}
              </p>

              <p className="mt-3 text-xs font-medium text-gray-400">
                {type.averagePrice}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
