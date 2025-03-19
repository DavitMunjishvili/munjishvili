"use client";

import Hero from "@/components/hero";
import Biography from "@/components/biography";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import SectionReveal from "@/components/section-reveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SectionReveal immediate={true}>
        <Hero />
      </SectionReveal>

      <SectionReveal delay={0.2} className="relative">
        <>
          <div className="absolute w-full left-0 -translate-y-1/2 top-0 h-16 backdrop-blur-sm bg-white/0 z-10"></div>
          <Biography />
          <div className="absolute w-full left-0 translate-y-1/2 bottom-0 h-16 backdrop-blur-sm bg-white/0 z-10"></div>
        </>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <Skills />
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <Experience />
      </SectionReveal>
    </main>
  );
}
