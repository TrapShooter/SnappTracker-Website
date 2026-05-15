import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const MATERIAL_ICON_NAMES = [
  'add_2', 'arrow_forward', 'auto_stories', 'bolt', 'business_center', 'calculate',
  'check', 'cloud_upload', 'code', 'coffee', 'content_cut', 'dark_mode',
  'expand_more', 'file_export', 'fitness_center', 'flag',
  'hourglass_bottom', 'leaderboard', 'light_mode', 'mail', 'pause',
  'payments', 'person', 'play_arrow', 'school', 'stop', 'timer', 'work',
].sort()

const MATERIAL_SYMBOLS_URL =
  `https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded` +
  `:opsz,wght,FILL@20..24,400..700,0..1` +
  `&icon_names=${MATERIAL_ICON_NAMES.join(',')}` +
  `&display=block`

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnappTracker | Free Pomodoro & Time Tracker for Work & Life",
  description:
    "A flexible time tracker for work, life, and anything in between. Organize your time with customizable trackers, smart Pomodoro timers, and powerful session management across iOS, Android, and the web.",
  keywords: [
    "Time Tracker",
    "Pomodoro Timer",
    "Work Log",
    "Productivity App",
    "iOS Time Tracking",
    "Free Time Tracker",
    "Cut Sessions",
    "Time Management",
    "Task Tracker",
  ],
  metadataBase: new URL("https://snapptracker.com"),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "SnappTracker | Free Pomodoro & Time Tracker for Work & Life",
    description:
      "A flexible time tracker for work, life, and anything in between. Organize your time with customizable trackers, smart Pomodoro timers, and powerful session management.",
    url: "https://snapptracker.com",
    siteName: "SnappTracker",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SnappTracker | Download Today",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnappTracker | Free Pomodoro & Time Tracker for Work & Life",
    description:
      "A flexible time tracker for work, life, and anything in between. Organize your time with customizable trackers, smart Pomodoro timers, and powerful session management.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased overflow-x-hidden`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SnappTracker",
              "url": "https://snapptracker.com",
              "logo": "https://snapptracker.com/logo.png",
              "sameAs": [
                "https://twitter.com/snapptracker",
                "https://github.com/snapptracker"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Providers>
          <div className="flex-1 flex flex-col">
            {children}
          </div>
        </Providers>
        <Script
          id="material-symbols-font"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `var l=document.createElement('link');l.rel='stylesheet';l.href='${MATERIAL_SYMBOLS_URL}';l.onload=function(){document.documentElement.classList.add('icons-loaded');};document.head.appendChild(l);`,
          }}
        />
      </body>
    </html>
  );
}
