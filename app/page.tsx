import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Walkthrough from "@/components/Walkthrough";
import DemoSection from "@/components/DemoSection";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header overlay />
      <Hero />
      <Walkthrough />
      <DemoSection />
      <Features />
      {/* <Screenshots /> */}
      <Footer />
    </main>
  );
}
