"use client";

import Button from "./Button";
import { AppleIcon, GooglePlayIcon, GlobeIcon } from "./BrandIcons";

const APP_URL = "https://app.snapptracker.com";
// TODO: replace with real App Store / Google Play links
const APP_STORE_URL = "#";
const GOOGLE_PLAY_URL = "#";

export default function Hero() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SnappTracker",
    description: "A flexible time tracker for work, life, and anything in between. Organize your time with customizable trackers, smart Pomodoro timers, and powerful session management.",
    operatingSystem: "iOS, Android, Web",
    applicationCategory: "ProductivityApplication",
    applicationSubCategory: "Time Management, Pomodoro Timer",
    featureList: [
      "Customizable Trackers",
      "Flexible Sessions with Cut feature",
      "Smart Pomodoro Timer",
      "Countdown Timer",
      "Stopwatch Mode",
      "Cloud Sync across all devices",
      "Privacy-first local storage",
      "CSV & JSON Data Export"
    ],
    screenshot: "https://snapptracker.com/og-image.jpg",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "120",
    },
  };

  return (
    <section className="relative bg-gray-50 dark:bg-gray-950">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto px-6 pt-32 sm:pb-20 sm:pt-40 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-sm font-medium text-accent-700">
          <span>Available on iOS, Android &amp; Web</span>
        </div>

        {/* <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-6 max-w-[800px]">
          Flexible time tracking
          {" "}
          <br className="hidden sm:block" />
          <span className="text-accent-600">for anything you do</span>
        </h1> */}

        {/* <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-6 max-w-[800px]">
          Time tracking for work, life,
          {" "}
          <br className="hidden sm:block" />
          <span className="text-accent-600">and everything in between.</span>
        </h1> */}

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-6 max-w-[800px]">
          Time tracking for
          {" "}
          <br className="hidden sm:block" />
          <span className="text-accent-600">anything you do.</span>
        </h1>

        <p className="max-w-xl text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
          Track time using customizable Trackers, flexible Sessions, and smart timers. Built for work, life, and everything in between.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
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
      </div>

      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#e0f5fe,transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(17,174,215,0.08),transparent)]"
      />
    </section>
  );
}

