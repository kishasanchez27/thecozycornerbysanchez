import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex items-center gap-8 mb-16">
          <Image
            src="/favicon.ico"
            alt="The Cozy Corner"
            width={140}
            height={140}
            priority
            className="rounded shadow-lg"
          />
          <div>
            <h1 className="text-4xl font-semibold text-indigo-200 mb-3">
              Welcome to The Cozy Corner
            </h1>
            <p className="text-slate-300 text-lg">
              A cozy online bookstore with hand-picked recommendations for every reader.
            </p>
          </div>

          <Image
          src="/images/kid.gif"
          alt="Animation"
          width={400}
          height={400}
          className="rounded"
          />

        </div>

        <div className="flex gap-4">
          <Link
            href="/books"
            className="bg-indigo-600 px-8 py-3 rounded text-white hover:bg-indigo-500"
          >
            Browse Books
          </Link>
          <Link
            href="/about"
            className="border border-indigo-400 px-8 py-3 rounded text-indigo-200 hover:bg-slate-800"
          >
            Learn More
          </Link>
        </div>
        
      </div>
    </div>
  );
}