import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const APP_URL = "https://app.snapptracker.com";
// TODO: replace with real App Store / Google Play links
const APP_STORE_URL = "#";
const GOOGLE_PLAY_URL = "#";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950">
      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="SnappTracker" width={36} height={36} className="rounded-xl" />
          <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">SnappTracker</span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href={APP_URL}
            className="text-sm font-medium text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Try Web App →
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-24 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#e0f5fe] px-4 py-1.5 text-sm font-medium text-accent-700">
          <span>Available on iOS, Android &amp; Web</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight mb-6">
          Time tracking that
          <br />
          <span className="text-accent-600">gets out of your way</span>
        </h1>

        <p className="max-w-xl text-lg text-zinc-500 dark:text-gray-400 leading-relaxed mb-10">
          SnappTracker&apos;s unique <strong className="text-zinc-700 dark:text-gray-200">Cut</strong> feature lets you
          switch contexts instantly without losing your session flow. Clean design,
          multiple timer modes, and powerful analytics — all in one place.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href={APP_STORE_URL}
            className="flex items-center gap-2.5 rounded-xl bg-zinc-900 dark:bg-white px-5 py-3 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            <AppleIcon />
            Download on the App Store
          </Link>
          <Link
            href={GOOGLE_PLAY_URL}
            className="flex items-center gap-2.5 rounded-xl bg-zinc-900 dark:bg-white px-5 py-3 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            <GooglePlayIcon />
            Get it on Google Play
          </Link>
          <Link
            href={APP_URL}
            className="flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-5 py-3 text-zinc-700 dark:text-white text-sm font-medium hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            Try the web app →
          </Link>
        </div>
      </div>

      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#e0f5fe,transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(17,174,215,0.08),transparent)]"
      />
    </section>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M3.18 23.76c.3.17.64.22.99.14l12.12-6.99-2.81-2.81-10.3 9.66zm-1.43-1.09V1.33c0-.48.26-.89.66-1.11L14.1 12 2.41 23.78c-.4-.22-.66-.63-.66-1.11zM20.49 10.46L17.9 9l-3.05 3.05 3.05 3.05 2.62-1.51c.75-.43.75-1.6-.03-2.13zM4.17.23L16.29 7.22l-2.81 2.81L3.18.37C3.48.2 3.82.16 4.17.23z" />
    </svg>
  );
}
