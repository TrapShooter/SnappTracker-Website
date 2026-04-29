import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Download from "@/components/Download";

export const metadata: Metadata = {
  title: "Download – SnappTracker",
  description:
    "Download SnappTracker for iPhone, Android, or use it directly in your browser. Free to start, available everywhere.",
  openGraph: {
    title: "Download SnappTracker",
    description:
      "Available on iOS, Android, and the web. Start tracking your time in seconds.",
    url: "https://snapptracker.com/download",
  },
  twitter: {
    card: "summary",
    title: "Download SnappTracker",
    description:
      "Available on iOS, Android, and the web. Start tracking your time in seconds.",
  },
};

export default function DownloadPage() {
  return (
    <main>
      <Header />
      <Download />
      <Footer />
    </main>
  );
}
