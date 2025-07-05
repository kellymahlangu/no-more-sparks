export default function TestimonialCard({
    quote,
    author
  }: {
    quote: string;
    author: string;
  }) {
    return (
      <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
        <div className="text-red-400 text-5xl mb-4">“</div>
        <p className="text-gray-700 text-lg mb-6">{quote}</p>
        <p className="text-gray-500 font-medium">— {author}</p>
      </div>
    );
  }