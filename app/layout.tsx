import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <link rel="preload" as="image" href="/mockups/iPhone-body.png" fetchPriority="high" />
        <link rel="preload" as="image" href="/mockups/Dashboard.png" fetchPriority="high" />
        <link rel="preload" as="image" href="/mockups/Pomodoro.png" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..24,400..700,1,0&display=swap"
        />
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
      </body>
    </html>
  );
}
