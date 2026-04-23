import Hero from "@/components/Hero";
import DemoSection from "@/components/DemoSection";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <DemoSection />
      <Features />
      <Screenshots />
      <Pricing />
      <Footer />
    </main>
  );
}
