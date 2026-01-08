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
  description: "A cozy online bookstore with hand-picked recommendations for every reader.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900`}>
        
        <div className="flex min-h-screen">
          
          <aside className="w-64 bg-slate-800 border-r border-indigo-500/20 p-6">
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

          <main className="flex-1 p-8">{children}</main>
          
        </div>
        
      </body>
    </html>
  );
}