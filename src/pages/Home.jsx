import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectSection";
import { Awards_Acheivements } from "../components/Awards_Acheivements";
import { ContactSection } from "../components/ContactSection";
import { FooterSection } from "../components/FooterSection";
import { ScrollPath } from "../components/ui/ScrollPath";
import MoltenMetal from "../components/ui/MoltenMetal";
import { useRef } from "react";

export const Home = () => {
  const scrollRef = useRef(null);

  return (
    <div className="relative h-screen w-full bg-background text-foreground overflow-hidden">
      
      {/* ── GLOBAL UNIFIED BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
          <MoltenMetal
            color1="#431407" 
            color2="#f97316" 
            color3="#fdba74" 
            speed={0.35}
            scale={4}
            detail={3}
            glow={1.6}
            coreSize={0.1}
            swirl={1}
            fold={-0.2}
            blackPoint={0.05}
            brightness={1.3}
            colorMode="molten"
            grain={true}
            grainIntensity={0.05}
            mouseInteraction={false}
            mouseStrength={0.3}
            opacity={0.7}
          />
        </div>
        {/* Industrial Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.04] pointer-events-none" />
      </div>

      {/* Navbar sits outside the scroll container, acting perfectly fixed */}
      <div className="absolute inset-x-0 top-0 z-[9999] pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </div>

      {/* Main content takes full screen and scrolls independently */}
      <main ref={scrollRef} className="absolute inset-0 overflow-y-auto overflow-x-hidden scroll-smooth z-10">
        <ScrollPath containerRef={scrollRef} />
        
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Awards_Acheivements />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};
