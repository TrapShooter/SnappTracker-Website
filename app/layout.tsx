import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnappTracker — Streamlined Time Tracking",
  description:
    "A clean, iOS-inspired time tracker with Cut sessions, Pomodoro, multiple timer modes, and cloud sync. Available on iOS, Android, and the web.",
  metadataBase: new URL("https://snapptracker.com"),
  openGraph: {
    title: "SnappTracker — Streamlined Time Tracking",
    description:
      "A clean, iOS-inspired time tracker with Cut sessions, Pomodoro, and cloud sync.",
    url: "https://snapptracker.com",
    siteName: "SnappTracker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnappTracker — Streamlined Time Tracking",
    description:
      "A clean, iOS-inspired time tracker with Cut sessions, Pomodoro, and cloud sync.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
