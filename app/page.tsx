import Header from "@/components/Header";
import HeroWithImage from "@/components/HeroWithImage";
import Walkthrough from "@/components/Walkthrough";
import DemoSection from "@/components/DemoSection";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <main>
        <Header />
        <HeroWithImage />
        <Walkthrough disableTopPadding />
        {/* <DemoSection /> */}
        <Features disableTopPadding disableBottomPadding />
        {/* <Screenshots /> */}
        <FAQ limit={6} />
        <Footer />
      </main>
    </div>
  );
}
