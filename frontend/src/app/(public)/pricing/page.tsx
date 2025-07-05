import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: "The Spark Fade",
      price: "$49",
      description: "For amicable, straightforward goodbyes",
      features: [
        "Text message breakup",
        "Basic script customization",
        "24h delivery guarantee",
        "1 follow-up message"
      ],
      cta: "Choose Fade",
      popular: false
    },
    {
      name: "The Clean Break",
      price: "$99",
      description: "Most popular - phone call breakup",
      features: [
        "10-min voice call breakup",
        "Personalized script",
        "Specialist vetting",
        "3 follow-up messages",
        "Priority scheduling"
      ],
      cta: "Choose Clean Break",
      popular: true
    },
    {
      name: "The Ghostbuster",
      price: "$199",
      description: "Full-service closure package",
      features: [
        "In-person breakup (local)",
        "Custom strategy session",
        "Proof of breakup",
        "7-day support window",
        "Legal disclaimer"
      ],
      cta: "Go Premium",
      popular: false
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-red-500">No More Sparks</span> Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your breakup style – we handle the awkwardness.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl shadow-md overflow-hidden ${plan.popular ? "ring-2 ring-red-500 transform md:-translate-y-4" : "border border-gray-200"}`}
            >
              {plan.popular && (
                <div className="bg-red-500 text-white text-center py-1 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8 bg-white">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500"> / breakup</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/requests/new?plan=${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`block text-center py-3 px-6 rounded-lg font-medium transition ${plan.popular ? "bg-red-500 hover:bg-red-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"}`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ/Footer */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Common Questions</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about#faq" className="text-red-500 hover:underline">
              Is this service confidential?
            </Link>
            <Link href="/about#faq" className="text-red-500 hover:underline">
              Can I get a refund?
            </Link>
            <Link href="/about#faq" className="text-red-500 hover:underline">
              How are specialists trained?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}