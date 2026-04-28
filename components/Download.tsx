import Link from "next/link";

const APP_URL = "https://app.snapptracker.com";
const APP_STORE_URL = "#"; // TODO: replace with real App Store link
const GOOGLE_PLAY_URL = "#"; // TODO: replace with real Google Play link

// ─── Shared icon components ───────────────────────────────────────────────────

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

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

// ─── Image placeholder ────────────────────────────────────────────────────────

function ImagePlaceholder({ label, aspectRatio = "3/5" }: { label: string; aspectRatio?: string }) {
  return (
    <div
      className="w-full rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm font-medium select-none"
      style={{ aspectRatio }}
    >
      {label}
    </div>
  );
}

// ─── Store buttons ────────────────────────────────────────────────────────────

function StoreButtons({ showWeb = false }: { showWeb?: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3">
      <Link
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 rounded-xl bg-gray-900 dark:bg-white px-5 py-3 text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
      >
        <AppleIcon />
        Download on the App Store
      </Link>
      <Link
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 rounded-xl bg-gray-900 dark:bg-white px-5 py-3 text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
      >
        <GooglePlayIcon />
        Get it on Google Play
      </Link>
      {showWeb && (
        <Link
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-5 py-3 text-gray-700 dark:text-white text-sm font-medium hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <GlobeIcon />
          Launch Web App
        </Link>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Download() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-950">
        {/* Background gradient */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#e0f5fe,transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(17,174,215,0.08),transparent)]"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20 sm:pt-40 sm:pb-28 text-center flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-50 dark:bg-[rgba(17,174,215,0.12)] px-4 py-1.5 text-sm font-medium text-[#0891b2] dark:text-[#22d3ee]">
            iOS · Android · Web
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
            Get SnappTracker,<br />
            <span className="text-accent-600">your way</span>
          </h1>
          <p className="max-w-xl text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
            Available on iPhone, Android, and in your browser. Start free, upgrade when you're ready.
          </p>
          <StoreButtons showWeb />
        </div>
      </section>

      {/* ── Z-pattern sections ───────────────────────────────────────── */}

      {/* Row 1: Text left, image right (iPhone) */}
      <section className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              iPhone
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Designed for <span className="text-accent-600">iPhone</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              A native iOS experience built around how you actually work. Instant timers, Cut sessions, Pomodoro mode, and beautiful widgets that live on your home screen.
            </p>
            <Link
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-gray-900 dark:bg-white px-5 py-3 text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
            >
              <AppleIcon />
              Download on the App Store
            </Link>
          </div>

          {/* Image slot */}
          <div className="max-w-xs mx-auto lg:mx-0 lg:ml-auto w-full">
            <ImagePlaceholder label="iPhone screenshot" aspectRatio="9/19" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-100 dark:border-gray-800" />
      </div>

      {/* Row 2: Image left, text right (Android) */}
      <section className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image slot (appears first on mobile, second via order on desktop) */}
          <div className="max-w-xs mx-auto lg:mx-0 w-full order-last lg:order-first">
            <ImagePlaceholder label="Android screenshot" aspectRatio="9/19" />
          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Android
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Also on <span className="text-accent-600">Android</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              The same clean, distraction-free experience on your Android device. Full feature parity, cloud sync, and a home screen widget to keep your time front and center.
            </p>
            <Link
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-gray-900 dark:bg-white px-5 py-3 text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
            >
              <GooglePlayIcon />
              Get it on Google Play
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-100 dark:border-gray-800" />
      </div>

      {/* Row 3: Text left, image right (Web App) */}
      <section className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Web
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Works in your <span className="text-accent-600">browser too</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              No install needed. Open the web app and start tracking in seconds. Your sessions sync instantly across every device you use.
            </p>
            <Link
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-5 py-3 text-gray-700 dark:text-white text-sm font-medium hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <GlobeIcon />
              Open Web App →
            </Link>
          </div>

          {/* Image slot */}
          <div className="max-w-lg mx-auto lg:mx-0 lg:ml-auto w-full">
            <ImagePlaceholder label="Web app screenshot" aspectRatio="16/10" />
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-6 py-20 sm:py-24 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to take control of your time?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Free to download. No account required to get started.
          </p>
          <StoreButtons showWeb />
        </div>
      </section>

    </div>
  );
}
