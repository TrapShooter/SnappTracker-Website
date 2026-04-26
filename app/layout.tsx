import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnappTracker — Streamlined Time Tracking",
  description:
    "A clean, iOS-inspired time tracker with Cut sessions, Pomodoro, multiple timer modes, and cloud sync. Available on iOS, Android, and the web.",
  metadataBase: new URL("https://snapptracker.com"),
  manifest: "/manifest.json",
  openGraph: {
    title: "SnappTracker — Streamlined Time Tracking",
    description:
      "A clean, iOS-inspired time tracker with Cut sessions, Pomodoro, and cloud sync.",
    url: "https://snapptracker.com",
    siteName: "SnappTracker",
    type: "website",
    images: "/icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnappTracker — Streamlined Time Tracking",
    description:
      "A clean, iOS-inspired time tracker with Cut sessions, Pomodoro, and cloud sync.",
    images: "/icon.png",
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
  maximumScale: 1,
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased overflow-x-hidden`} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">
        <Providers>
          <div className="flex-1 flex flex-col overflow-x-hidden">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
