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

      <SectionReveal delay={0.2}>
        <Biography />
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
