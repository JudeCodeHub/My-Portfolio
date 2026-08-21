import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectSection";
import { Awards_Acheivements } from "../components/Awards_Acheivements";
import { ContactSection } from "../components/ContactSection";
import { FooterSection } from "../components/FooterSection";
import { SectionDivider } from "../components/SectionDivider";

export const Home = () => {
  return (
    <div className="relative h-screen w-full bg-background text-foreground overflow-hidden">
      {/* Navbar sits outside the scroll container, acting perfectly fixed */}
      <div className="absolute inset-x-0 top-0 z-[9999] pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </div>

      {/* Main content takes full screen and scrolls independently */}
      <main className="absolute inset-0 overflow-y-auto overflow-x-hidden scroll-smooth">
        <HeroSection />
        <SectionDivider color="#38bdf8" align="right" />

        <AboutSection />
        <SectionDivider color="#38bdf8" align="left" />

        <SkillsSection />
        <SectionDivider color="#a855f7" align="right" />

        <ProjectsSection />
        <SectionDivider color="#f97316" align="left" />

        <Awards_Acheivements />
        <SectionDivider color="#22c55e" align="right" />

        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};
