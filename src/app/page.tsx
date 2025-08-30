// app/page.tsx

import CaseStudy from "@/components/caseStudy";
import Hero from "@/components/hero";
import Impact from "@/components/impact";
import OurServices from "@/components/ourServices";
import ScrollDown from "@/components/scrollDown";

export default function Home() {
  return (
    <div className="bg-transparent">
      <Hero />
      <ScrollDown />
      <Impact />
      <CaseStudy />
      <OurServices />
    </div>
  );
}
