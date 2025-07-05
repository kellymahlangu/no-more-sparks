"use client";
import CtaButton from '@/components/CtaButton';
import TestimonialCard from '@/components/TestimonialCard';

export default function Home() {
  const testimonials = [
    {
      quote: "Saved me from 3 hours of awkward explanations",
      author: "Jake, 28"
    },
    {
      quote: "Worth every penny to avoid the drama",
      author: "Sarah, 31"
    }
  ];

  const features = [
    {
      icon: "💼", 
      title: "Professional",
      desc: "Trained specialists handle every breakup"
    },
    {
      icon: "🤫",
      title: "Discreet",
      desc: "Complete confidentiality guaranteed"
    },
    {
      icon: "⏱️",
      title: "Fast",
      desc: "Breakups delivered in 24-48 hours"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Breakups <span className="text-red-500">done right</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let our experts handle the hard talk - professionally, compassionately, and finally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton 
              href="/requests/new" 
              text="Start Your Breakup" 
              primary 
            />
            <CtaButton 
              href="/about" 
              text="How It Works" 
              outline 
            />
          </div>
        </div>
      </section>

      {/* Logo/Trust Badges */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-gray-500 mb-8">Featured in:</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            {["TechCrunch", "Vice", "The Cut", "GQ"].map((name) => (
              <div key={name} className="text-xl font-medium text-gray-400">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why <span className="text-red-500">No More Sparks</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Real Breakups, <span className="text-red-500">No Regrets</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-500 text-white">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to end it the right way?
          </h2>
          <p className="text-xl mb-8">
            Our specialists are standing by to handle your breakup.
          </p>
          <CtaButton 
            href="/requests/new" 
            text="Begin Your Breakup →" 
            white 
          />
        </div>
      </section>
    </div>
  );
}