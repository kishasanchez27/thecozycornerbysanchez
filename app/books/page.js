import Image from "next/image";

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-4xl font-semibold text-indigo-200 mb-12">
          Book Recommendations
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <Image 
              src="/images/book1.png" 
              alt="Modern CSS with Tailwind Book" 
              width={300} 
              height={400} 
              className="rounded shadow-lg"
            />
            <h3 className="font-medium text-slate-200 text-lg">
              Modern CSS with Tailwind
            </h3>
          </div>

          <div className="space-y-3">
            <Image 
              src="/images/book2.png" 
              alt="Next.js Handbook" 
              width={300} 
              height={400}
              className="rounded shadow-lg"
            />
            <h3 className="font-medium text-slate-200 text-lg">
              The Next.js Handbook
            </h3>
          </div>

          <div className="space-y-3">
            <Image 
              src="/images/book3.jpg" 
              alt="Mindset Book" 
              width={300} 
              height={400}
              className="rounded shadow-lg"
            />
            <h3 className="font-medium text-slate-200 text-lg">
              Mindset
            </h3>
          </div>
        </div>
        
      </div>
    </div>
  );
}