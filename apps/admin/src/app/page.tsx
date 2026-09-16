import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 text-slate-100">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <span className="text-xl font-black tracking-tight text-white">NOX CLEAN <span className="text-teal-400 text-xs font-semibold px-2 py-0.5 rounded bg-teal-950 border border-teal-800">ADMIN</span></span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1 text-sm font-medium">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-800 text-white font-semibold">
            📊 Overview KPIs
          </Link>
          <Link href="/bookings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition">
            📅 Booking Management
          </Link>
          <Link href="/cleaners" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition">
            🧼 Cleaner Approval & Verification
          </Link>
          <Link href="/dispatch" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition">
            🧩 Dispatch & Assignment
          </Link>
          <Link href="/pricing" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition">
            🏷️ Dynamic Pricing CMS
          </Link>
          <Link href="/customers" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition">
            👥 Customer Management
          </Link>
          <Link href="/finance" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition">
            💳 Payments & Payouts
          </Link>
          <Link href="/audit-logs" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition">
            🛡️ Audit Logs
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-16 border-b border-slate-800 bg-slate-900/50 px-8 flex items-center justify-between">
          <h1 className="text-lg font-bold text-white">Operations Overview</h1>
          <div className="flex items-center gap-4 text-xs">
            <span className="bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-800 font-semibold">System Online</span>
            <span className="text-slate-400">Admin User</span>
          </div>
        </header>

        <main className="p-8 space-y-8">
          {/* KPI Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Bookings</span>
              <div className="mt-2 text-3xl font-extrabold text-white">0</div>
              <span className="text-xs text-slate-500 mt-1 block">Active this month</span>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Pending Cleaner Approvals</span>
              <div className="mt-2 text-3xl font-extrabold text-amber-400">0</div>
              <span className="text-xs text-slate-500 mt-1 block">Requires document review</span>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Cleaners</span>
              <div className="mt-2 text-3xl font-extrabold text-teal-400">0</div>
              <span className="text-xs text-slate-500 mt-1 block">Available for dispatch</span>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Monthly Revenue</span>
              <div className="mt-2 text-3xl font-extrabold text-white">£0.00</div>
              <span className="text-xs text-slate-500 mt-1 block">Stripe processed</span>
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h2 className="text-base font-bold text-white mb-4">Quick Operations Console</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/dispatch" className="p-4 bg-slate-800/60 hover:bg-slate-800 rounded-lg border border-slate-700/50 block transition">
                <span className="font-semibold text-white text-sm block">Assign Cleaners</span>
                <span className="text-xs text-slate-400 mt-1 block">View unassigned bookings and dispatch available cleaners.</span>
              </Link>
              <Link href="/pricing" className="p-4 bg-slate-800/60 hover:bg-slate-800 rounded-lg border border-slate-700/50 block transition">
                <span className="font-semibold text-white text-sm block">Edit Pricing & Rates</span>
                <span className="text-xs text-slate-400 mt-1 block">Update base hourly rates, add-on costs, or travel fees.</span>
              </Link>
              <Link href="/cleaners" className="p-4 bg-slate-800/60 hover:bg-slate-800 rounded-lg border border-slate-700/50 block transition">
                <span className="font-semibold text-white text-sm block">Approve Cleaner Applications</span>
                <span className="text-xs text-slate-400 mt-1 block">Inspect submitted ID and DBS compliance documents.</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
