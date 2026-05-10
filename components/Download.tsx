import Button from "./Button";
import { AppleIcon, GooglePlayIcon, GlobeIcon } from "./BrandIcons";

const APP_URL = "https://app.snapptracker.com";
const APP_STORE_URL = "#"; // TODO: replace with real App Store link
const GOOGLE_PLAY_URL = "#"; // TODO: replace with real Google Play link

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
    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
      <Button
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        <AppleIcon />
        Download on the App Store
      </Button>
      <Button
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        <GooglePlayIcon />
        Get it on Google Play
      </Button>
      {showWeb && (
        <Button
          href={APP_URL}
          variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <GlobeIcon />
          Launch Web App
        </Button>
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
              A native iOS experience built around how you actually work. Instant tracking, Cut sessions, Pomodoro mode, and beautiful widgets that live on your home screen.
            </p>
            <Button
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <AppleIcon />
              Download on the App Store
            </Button>
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
            <Button
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <GooglePlayIcon />
              Get it on Google Play
            </Button>
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
            <Button
              href={APP_URL}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <GlobeIcon />
              Launch Web App
            </Button>
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
