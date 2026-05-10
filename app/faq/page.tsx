import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - SnappTracker",
  description:
    "Find answers to common questions about SnappTracker, sessions, the Cut feature, pricing, and more.",
  openGraph: {
    title: "Frequently Asked Questions - SnappTracker",
    description:
      "Everything you need to know about SnappTracker. Pricing, platforms, sessions, and more.",
    url: "https://snapptracker.com/faq",
  },
};

export default function FAQPage() {
  return (
    <main>
      <Header />
      <FAQ isPage={true} />
      <Footer />
    </main>
  );
}
