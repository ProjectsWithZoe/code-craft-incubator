import { Check, HelpCircle } from 'lucide-react';

const features = [
  'Access to all projects',
  'Step-by-step guidance',
  'Code reviews',
  'Community support',
];

const plans = [
  {
    name: 'Monthly',
    price: '$9.99',
    period: 'per month',
    description: 'Perfect for those who want to try out our platform',
    features: [...features],
    cta: 'Start Monthly',
    popular: false
  },
  {
    name: 'Lifetime',
    price: '$49.99',
    period: 'one-time',
    description: 'Best value for long-term learners and problem solvers',
    features: [...features, 'Lifetime access', 'Priority support'],
    cta: 'Get Lifetime Access',
    popular: true
  },
  {
    name: 'No/Low Income',
    price: 'On Request',
    period: '',
    description: 'Special pricing for students and those with financial constraints',
    features: [...features],
    cta: 'Apply Now',
    popular: false
  }
];

export function Pricing() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="mt-8 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 ${
                plan.popular ? 'border-2 border-blue-500' : ''
              }`}
            >
              <div className="p-4">
                
                <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    {' '}
                    {plan.period}
                  </span>
                </p>
                <button
                  className={`mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white ${
                    plan.popular
                      ? 'bg-blue-500 hover:bg-blue-600'
                      : 'bg-gray-800 hover:bg-gray-900'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-xs font-semibold text-gray-900 tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center text-sm text-gray-500">
            <HelpCircle className="h-5 w-5 mr-2" />
            <span>Need help choosing? Contact our support team</span>
          </div>
        </div>
      </div>
    </div>
  );
} 