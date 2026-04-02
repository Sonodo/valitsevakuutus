import { Search, BarChart3, PiggyBank } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Valitse vakuutuslaji',
    description: 'Valitse vertailtava vakuutustyyppi ja kerro tarpeistasi.',
    Icon: Search,
  },
  {
    number: 2,
    title: 'Vertaa tarjouksia',
    description: 'Näe kaikkien vakuutusyhtiöiden hinnat ja ehdot rinnakkain.',
    Icon: BarChart3,
  },
  {
    number: 3,
    title: 'Säästä rahaa',
    description: 'Siirry valitsemasi yhtiön sivulle ja tee sopimus — ilmaiseksi.',
    Icon: PiggyBank,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Näin vertailu toimii
          </h2>
          <p className="mt-3 text-gray-600">
            Vakuutusten vertailu on helppoa ja nopeaa
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Numbered circle */}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white">
                  <step.Icon className="h-6 w-6" />
                </div>
              </div>

              {/* Step number */}
              <div className="mb-2 text-sm font-semibold text-teal">
                Vaihe {step.number}
              </div>

              <h3 className="mb-2 text-lg font-bold text-navy">
                {step.title}
              </h3>

              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
