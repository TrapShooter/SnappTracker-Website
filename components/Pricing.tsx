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

export default function Pricing({ hideHeader }: { hideHeader?: boolean }) {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {!hideHeader && (
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Simple, honest pricing
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Start for free. Upgrade when you need the power features.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 flex flex-col">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Free</p>
            <p className="text-4xl font-bold text-gray-900 dark:text-white mb-1">$0</p>
            <p className="text-md text-gray-400 dark:text-gray-500 mb-8">Forever</p>

            <ul className="space-y-3 mb-8 flex-1">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-md text-gray-700 dark:text-gray-300">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-gray-400 dark:text-gray-500" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="https://app.snapptracker.com"
              className="block w-full rounded-xl border border-gray-200 dark:border-gray-700 py-3 text-center text-md font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Get started free
            </Link>
          </div>

          {/* Pro */}
          <div className="rounded-2xl bg-gray-950 dark:bg-white text-white dark:text-gray-900 p-8 relative overflow-hidden flex flex-col">
            <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">Pro</p>
            <p className="text-4xl font-bold mb-1">In-App Purchase</p>
            <p className="text-md text-gray-400 dark:text-gray-500 mb-8">Billed via App Store / Google Play</p>

            <ul className="space-y-3 mb-8 flex-1">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-md text-gray-300 dark:text-gray-700">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-accent-600" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href={APP_STORE_URL}
              className="block w-full rounded-xl bg-accent-600 py-3 text-center text-md font-semibold text-white hover:bg-accent-700 transition-colors"
            >
              Download &amp; upgrade
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
