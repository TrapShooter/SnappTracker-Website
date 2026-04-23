import Link from "next/link";
import Icon from "@/components/Icon";

const APP_STORE_URL = "#"; // TODO: replace with real App Store link

const freeFeatures = [
  "Unlimited trackers & groups",
  "All three timer modes",
  "Manual time entries",
  "Cut session feature",
  "Offline support",
  "Basic history log",
];

const proFeatures = [
  "Everything in Free",
  "Cloud sync across devices",
  "Stats, charts & streaks",
  "Session goals",
  "CSV & JSON export",
  "Billable time tracking",
  "Auto-cut policies",
  "Rounding rules",
];

export default function Pricing() {
  return (
    <section className="bg-zinc-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-lg text-zinc-500 max-w-xl mx-auto">
            Start for free. Upgrade when you need the power features.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Free */}
          <div className="rounded-2xl bg-white border border-zinc-200 p-8">
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Free</p>
            <p className="text-4xl font-bold text-zinc-900 mb-1">$0</p>
            <p className="text-sm text-zinc-400 mb-8">Forever</p>

            <ul className="space-y-3 mb-8">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-zinc-700">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-zinc-400" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="https://app.snapptracker.com"
              className="block w-full rounded-xl border border-zinc-200 py-3 text-center text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
            >
              Get started free
            </Link>
          </div>

          {/* Pro */}
          <div className="rounded-2xl bg-zinc-900 text-white p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 rounded-full bg-[#11aed7] px-3 py-0.5 text-xs font-semibold text-white">
              Pro
            </div>
            <p className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Pro</p>
            <p className="text-4xl font-bold mb-1">In-App Purchase</p>
            <p className="text-sm text-zinc-400 mb-8">Billed via App Store / Google Play</p>

            <ul className="space-y-3 mb-8">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-[#11aed7]" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href={APP_STORE_URL}
              className="block w-full rounded-xl bg-[#11aed7] py-3 text-center text-sm font-semibold text-white hover:bg-[#0a8db3] transition-colors"
            >
              Download &amp; upgrade
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
