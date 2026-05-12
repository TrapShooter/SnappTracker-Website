import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroWithImage from "@/components/HeroWithImage";

const Walkthrough = dynamic(() => import("@/components/Walkthrough"));
// const DemoSection = dynamic(() => import("@/components/DemoSection"));
const Features = dynamic(() => import("@/components/Features"));
// const Screenshots = dynamic(() => import("@/components/Screenshots"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <main>
        <Header />
        <HeroWithImage />
        <Walkthrough disableTopPadding />
        {/* <DemoSection /> */}
        <Features disableTopPadding />
        {/* <Screenshots /> */}
        <FAQ limit={6} disableTopPadding />
        <Footer />
      </main>
    </div>
  );
}
