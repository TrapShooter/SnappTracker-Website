import type { Metadata } from "next";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Pricing – SnappTracker",
  description:
    "SnappTracker is free to use. Upgrade to Pro in-app for cloud sync, stats, export, and more. Available on iOS and Android.",
  openGraph: {
    title: "Pricing – SnappTracker",
    description:
      "Start free. Upgrade to Pro for cloud sync, stats, CSV export, and more.",
    url: "https://snapptracker.com/pricing",
  },
  twitter: {
    card: "summary",
    title: "Pricing – SnappTracker",
    description:
      "Start free. Upgrade to Pro for cloud sync, stats, CSV export, and more.",
  },
};

export default function PricingPage() {
  return (
    <main>
      <Header overlay />
      <Pricing />
      <Footer />
    </main>
  );
}
