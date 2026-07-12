import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { BackgroundEffects } from "@/components/BackgroundEffects";
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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme toggle*/}
      <ThemeToggle />

      {/*Background effects*/}
      <BackgroundEffects />

      {/*Navbar*/}

      <Navbar />

      {/*Main content*/}
      <main>
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
      </main>

      {/*Footer */}
      <FooterSection />
    </div>
  );
};
