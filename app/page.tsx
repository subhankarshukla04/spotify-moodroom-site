import Aurora from "@/components/Aurora";
import SmoothScroll from "@/components/SmoothScroll";
import Chapter1Hero from "@/components/chapters/Chapter1Hero";
import Chapter2Why from "@/components/chapters/Chapter2Why";
import Chapter3System from "@/components/chapters/Chapter3System";
import Chapter4Build from "@/components/chapters/Chapter4Build";
import Chapter5Output from "@/components/chapters/Chapter5Output";
import Chapter6Outro from "@/components/chapters/Chapter6Outro";

export default function Page() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-ink text-neutral-200">
        <Aurora />
        <Chapter1Hero />
        <Chapter2Why />
        <Chapter3System />
        <Chapter4Build />
        <Chapter5Output />
        <Chapter6Outro />
      </main>
    </SmoothScroll>
  );
}
