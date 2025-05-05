import { Pricing } from '../components/Pricing';

export function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Choose Your Learning Path
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Invest in your future with our flexible pricing options
            </p>
          </div>
        </div>
        <Pricing />
      </div>
    </div>
  );
} 