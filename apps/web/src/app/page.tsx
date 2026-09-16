import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Navigation */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-brand-600 tracking-tight">NOX CLEAN</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link href="/services" className="hover:text-brand-600 transition">Services</Link>
            <Link href="/how-it-works" className="hover:text-brand-600 transition">How It Works</Link>
            <Link href="/pricing" className="hover:text-brand-600 transition">Pricing</Link>
            <Link href="/areas" className="hover:text-brand-600 transition">Areas We Cover</Link>
            <Link href="/become-a-cleaner" className="hover:text-brand-600 transition">Become a Cleaner</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-slate-700 hover:text-brand-600 px-3 py-2">
              Sign In
            </Link>
            <Link
              href="/book"
              className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="bg-gradient-to-b from-brand-50 to-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Top-Rated Professional Cleaners, <span className="text-brand-600">Booked Online in Seconds</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Trusted, background-checked cleaners for regular home cleaning, deep cleaning, and end-of-tenancy.
            </p>

            {/* Postcode Availability Checker */}
            <div className="mt-10 max-w-xl mx-auto bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter your postcode (e.g. SW1A 1AA)"
                className="flex-1 px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 uppercase tracking-wide font-semibold placeholder:normal-case placeholder:font-normal"
              />
              <Link
                href="/book"
                className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-xl transition text-center whitespace-nowrap shadow-md"
              >
                Check Availability
              </Link>
            </div>

            <div className="mt-6 flex justify-center items-center gap-8 text-xs sm:text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">✓ 100% Satisfaction Guarantee</span>
              <span className="flex items-center gap-1.5">✓ Fully Vetted & Insured Cleaners</span>
              <span className="flex items-center gap-1.5">✓ Instant Online Booking</span>
            </div>
          </div>
        </section>

        {/* Core Services Overview */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-10">Our Cleaning Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-700 text-xl font-bold mb-4">
                🧹
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Regular Cleaning</h3>
              <p className="text-slate-600 text-sm mb-4">Weekly or fortnightly domestic home cleaning by your dedicated regular cleaner.</p>
              <span className="text-brand-600 font-semibold text-sm">From £16.50 / hr</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-700 text-xl font-bold mb-4">
                ✨
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Deep Cleaning</h3>
              <p className="text-slate-600 text-sm mb-4">A thorough, top-to-bottom clean for your entire property including extra tasks.</p>
              <span className="text-brand-600 font-semibold text-sm">From £22.00 / hr</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-700 text-xl font-bold mb-4">
                🔑
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">End of Tenancy</h3>
              <p className="text-slate-600 text-sm mb-4">Guarantee your deposit return with our comprehensive end-of-tenancy cleaning package.</p>
              <span className="text-brand-600 font-semibold text-sm">Fixed Pricing Available</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-black text-white">NOX CLEAN</span>
            <p className="mt-3 text-sm text-slate-400">The premier online cleaning booking marketplace.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Customer Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/book" className="hover:text-white transition">Book a Clean</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Cleaning Services</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Cleaners</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/become-a-cleaner" className="hover:text-white transition">Become a Cleaner</Link></li>
              <li><Link href="/cleaner/login" className="hover:text-white transition">Cleaner Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Legal & Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/cancellation" className="hover:text-white transition">Cancellation Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-xs text-center text-slate-500">
          © {new Date().getFullYear()} NOX CLEAN. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
