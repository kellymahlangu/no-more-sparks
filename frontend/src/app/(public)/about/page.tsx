"use client";
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-red-500">No More Sparks</span>
          </h1>
          <p className="text-lg text-gray-600">
            The modern, compassionate way to end relationships—professionally handled by experts.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
            How It Works
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-red-100 rounded-full p-3 mr-4">
                <span className="text-red-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800">Submit Your Request</h3>
                <p className="text-gray-600">
                  Tell us about your relationship and how you'd like the breakup handled.
                </p>
              </div>
            </div>
            {/* Repeat for steps 2-4 */}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
            Why Choose No More Sparks
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {[
              "✅ Professional & discreet",
              "✅ Customized breakup approach",
              "✅ Saves time and emotional stress",
              "✅ Follow-up support available"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-4">
            Ready for a kinder goodbye?
          </h3>
          <Link
            href="/requests/new"
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
          >
            Start Your Breakup Request
          </Link>
        </section>
      </div>
    </div>
  );
}