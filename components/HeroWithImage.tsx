"use client";

import Image from "next/image";
import Button from "./Button";
import { AppStoreButton, GooglePlayButton } from "./StoreButton";
import { GlobeIcon } from "./BrandIcons";

import { APP_URL } from "@/lib/constants";

export default function HeroWithImage({
  disableTopPadding = false,
  disableBottomPadding = false,
}: {
  disableTopPadding?: boolean;
  disableBottomPadding?: boolean;
}) {
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
    <section className="relative bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero content */}
      <div className={`relative z-10 mx-auto max-w-7xl px-6 ${disableTopPadding ? 'pt-0' : 'pt-32'} ${disableBottomPadding ? 'pb-0' : 'pb-16 sm:pb-24'}`}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-sm font-medium text-accent-700">
              <span>Available on iOS, Android &amp; Web</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-6 text-balance">
              Time tracking for
              <span className="text-accent-600"> anything you do.</span>
            </h1>

            <p className="max-w-xl text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
              Track time using customizable Trackers, flexible Sessions, and smart timers. Built for work, life, and everything in between.
            </p>

            <div className="flex flex-row flex-wrap items-stretch justify-center lg:justify-start gap-3 w-full">
              <AppStoreButton />
              <GooglePlayButton />
              <Button
                href={APP_URL}
                variant="ghost-secondary"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 group"
              >
                <GlobeIcon />
                Launch Web App
              </Button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative lg:w-[45%] shrink-0">
            <div className="relative mx-auto flex justify-center lg:justify-end">
              <Image
                src="/hero-image.png"
                alt="SnappTracker App Interface"
                width={1200}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
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
