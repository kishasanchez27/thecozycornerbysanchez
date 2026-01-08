import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Cozy Corner",
  description: "A cozy online bookstore with great recommendations for every reader.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900`}>
        
        {/* Mobile header - shows on small screens */}
        <header className="lg:hidden bg-slate-800 border-b border-indigo-500/20 p-4">
          <h1 className="text-xl font-bold text-indigo-100 mb-4">The Cozy Corner</h1>
          <nav className="flex gap-4 text-sm">
            <Link href="/" className="text-slate-300 hover:text-indigo-300">Home</Link>
            <Link href="/about" className="text-slate-300 hover:text-indigo-300">About</Link>
            <Link href="/books" className="text-slate-300 hover:text-indigo-300">Books</Link>
            <Link href="/contact" className="text-slate-300 hover:text-indigo-300">Contact</Link>
          </nav>
        </header>

        <div className="flex min-h-screen">
          
          {/* Desktop sidebar - hidden on mobile */}
          <aside className="hidden lg:block w-64 bg-slate-800 border-r border-indigo-500/20 p-6">
            <h1 className="text-xl font-bold text-indigo-100 mb-8">The Cozy Corner</h1>
            
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-slate-300 hover:text-indigo-300 hover:bg-slate-700 p-2 rounded">
                Home
              </Link>
              <Link href="/about" className="text-slate-300 hover:text-indigo-300 hover:bg-slate-700 p-2 rounded">
                About
              </Link>
              <Link href="/books" className="text-slate-300 hover:text-indigo-300 hover:bg-slate-700 p-2 rounded">
                Books
              </Link>
              <Link href="/contact" className="text-slate-300 hover:text-indigo-300 hover:bg-slate-700 p-2 rounded">
                Contact
              </Link>
            </nav>
            
            <div className="mt-auto pt-8 text-xs text-slate-500">
              © 2026 The Cozy Corner
            </div>
          </aside>

          <main className="flex-1 p-4 lg:p-8">{children}</main>
          
        </div>

        {/* Mobile footer */}
        <footer className="lg:hidden text-center text-xs text-slate-500 py-4">
          © 2026 The Cozy Corner
        </footer>
        
      </body>
    </html>
  );
}