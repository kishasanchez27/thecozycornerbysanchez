import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 py-8 lg:py-16 px-4 lg:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Mobile: stacked, Desktop: side-by-side */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-12 lg:mb-16">
          <Image
            src="/favicon.svg"
            alt="The Cozy Corner"
            width={100}
            height={100}
            priority
            className="rounded shadow-lg lg:w-[140px] lg:h-[140px]"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-4xl font-semibold text-indigo-200 mb-3">
              Welcome to The Cozy Corner
            </h1>
            <p className="text-slate-300 text-base lg:text-lg">
              A cozy online bookstore with hand-picked recommendations for every reader.
            </p>
          </div>

          {/* Hide GIF on mobile, show on desktop */}
          <Image
            src="/images/kid.gif"
            alt="Animation"
            width={300}
            height={300}
            className="hidden lg:block rounded"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            href="/books"
            className="bg-indigo-600 px-8 py-3 rounded text-white hover:bg-indigo-500 text-center"
          >
            Browse Books
          </Link>
          <Link
            href="/about"
            className="border border-indigo-400 px-8 py-3 rounded text-indigo-200 hover:bg-slate-800 text-center"
          >
            Learn More
          </Link>
        </div>
        
      </div>
    </div>
  );
}