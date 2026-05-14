import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroWithImage from "@/components/HeroWithImage";

const Walkthrough = dynamic(() => import("@/components/Walkthrough"));
// const DemoSection = dynamic(() => import("@/components/DemoSection"));
// const UseCases = dynamic(() => import("@/components/UseCases"));
const UseCasesA = dynamic(() => import("@/components/UseCasesA"));
const UseCasesC = dynamic(() => import("@/components/UseCasesC"));
const UseCasesE = dynamic(() => import("@/components/UseCasesE"));
const Features = dynamic(() => import("@/components/Features"));
// const Screenshots = dynamic(() => import("@/components/Screenshots"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Footer = dynamic(() => import("@/components/Footer"));

function ReviewLabel({ label }: { label: string }) {
  return (
    <div className="py-2 text-center bg-amber-50 dark:bg-amber-950 border-y border-amber-200 dark:border-amber-800">
      <span className="text-xs font-mono font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <main>
        <Header />
        <HeroWithImage />
        <Walkthrough disableTopPadding />
        {/* <DemoSection /> */}

        <ReviewLabel label="Option A: Bento Grid" />
        <UseCasesA />
        <ReviewLabel label="Option C: Interactive Tab Panel" />
        <UseCasesC />
        <ReviewLabel label="Option E: Segmented Control + Preview" />
        <UseCasesE />

        <Features disableTopPadding />
        {/* <Screenshots /> */}
        <FAQ limit={6} disableTopPadding />
        <Footer />
      </main>
    </div>
  );
}
