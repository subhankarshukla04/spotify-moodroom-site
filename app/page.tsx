import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Lanes from "@/components/Lanes";
import Walkthrough from "@/components/Walkthrough";
import DesignChoices from "@/components/DesignChoices";
import Output from "@/components/Output";
import Roadmap from "@/components/Roadmap";
import About from "@/components/About";

export default function Page() {
  return (
    <main className="min-h-screen bg-ink text-neutral-200">
      <Hero />
      <Why />
      <Problem />
      <HowItWorks />
      <Lanes />
      <Walkthrough />
      <DesignChoices />
      <Output />
      <Roadmap />
      <About />
    </main>
  );
}
