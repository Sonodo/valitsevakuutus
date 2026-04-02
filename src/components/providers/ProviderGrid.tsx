import type { InsuranceProvider } from '@/types';
import ProviderCard from '@/components/providers/ProviderCard';

interface ProviderGridProps {
  providers: InsuranceProvider[];
}

export default function ProviderGrid({ providers }: ProviderGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {providers.map((provider) => (
        <ProviderCard key={provider.id} provider={provider} />
      ))}
    </div>
  );
}
