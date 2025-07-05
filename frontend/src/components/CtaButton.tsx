import Link from 'next/link';

interface CtaButtonProps {
  href: string;
  text: string;
  primary?: boolean;
  outline?: boolean;
  white?: boolean;
}

export default function CtaButton({ 
  href, 
  text, 
  primary = false, 
  outline = false,
  white = false 
}: CtaButtonProps) {
  const baseClasses = "rounded-lg font-medium py-3 px-8 text-lg transition-all duration-200";
  
  let variantClasses = "";
  if (primary) {
    variantClasses = "bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl";
  } else if (outline) {
    variantClasses = "border-2 border-gray-300 hover:border-red-400 text-gray-700";
  } else if (white) {
    variantClasses = "bg-white hover:bg-gray-100 text-red-500 font-semibold";
  }

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {text}
    </Link>
  );
}