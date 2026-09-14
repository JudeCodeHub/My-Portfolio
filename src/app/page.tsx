"use client";

import { useEffect, useLayoutEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectSection";
import { Awards_Acheivements } from "@/components/Awards_Acheivements";
import { ContactSection } from "@/components/ContactSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FooterSection } from "@/components/FooterSection";
import OptionWheel from "@/components/ui/OptionWheel";

const MoltenMetal = dynamic(() => import("@/components/ui/MoltenMetal"), {
  ssr: false,
});

interface Section {
  name: string;
  id: string;
  component: ReactNode;
}

const SECTIONS: Section[] = [
  { name: "Init", id: "hero", component: <HeroSection /> },
  { name: "whoami", id: "about", component: <AboutSection /> },
  { name: "journey", id: "experience", component: <ExperienceSection /> },
  { name: "stack", id: "skills", component: <SkillsSection /> },
  { name: "Projects", id: "projects", component: <ProjectsSection /> },
  { name: "Awards", id: "awards", component: <Awards_Acheivements /> },
  { name: "Certs", id: "certifications", component: <CertificationsSection /> },
  { name: "Contact", id: "contact", component: <ContactSection /> },
];

function useIsMobile() {
  // Defaults to true (mobile) rather than false: the server has no way to
  // know the visitor's screen width, so whatever this starts as is what
  // paints first, for every visitor, before JS has loaded. On a real phone
  // over a real network that gap is long enough to be visible, so it must
  // default to the layout that's actually correct for a phone (the plain
  // stacked sections) rather than the desktop OptionWheel UI.
  const [isMobile, setIsMobile] = useState(true);

  useLayoutEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
}

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const router = useRouter();

  useEffect(() => {
    const handleNavigation = (hash: string) => {
      const targetHash = hash.replace("#", "");
      if (!targetHash) return;

      const index = SECTIONS.findIndex((s) => s.id === targetHash);
      if (index !== -1) {
        if (!isMobile) setActiveIndex(index);
        return;
      }

      router.replace("/404");
    };

    const onHashChange = () => handleNavigation(window.location.hash);
    const onCustomNav = (e: Event) =>
      handleNavigation((e as CustomEvent<string>).detail);

    onHashChange();

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("navigateSection", onCustomNav);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("navigateSection", onCustomNav);
    };
  }, [isMobile, router]);

  return (
    <div
      className={`relative w-full bg-background text-foreground ${isMobile ? "min-h-screen" : "h-screen overflow-hidden"}`}
    >
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0,
          }}
        >
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.04] pointer-events-none" />
      </div>

      <div className="fixed inset-x-0 top-0 z-[9999] pointer-events-none pl-0 md:pl-32 lg:pl-48 flex justify-center">
        <div className="pointer-events-auto w-full">
          <Navbar />
        </div>
      </div>

      {isMobile ? (
        <main className="relative z-10 pointer-events-auto w-full overflow-x-hidden">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <Awards_Acheivements />
          <CertificationsSection />
          <ContactSection />
          <FooterSection />
        </main>
      ) : (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 lg:w-48 z-[50] pointer-events-auto">
            <OptionWheel
              items={SECTIONS.map((s) => s.name)}
              defaultSelected={activeIndex}
              onChange={(index) => {
                setActiveIndex(index);
                window.location.hash = SECTIONS[index].id;
              }}
              loop={false}
              side="left"
              textColor="var(--wheel-text)"
              activeColor="#f97316"
              curve={0.5}
              tilt={4}
              inset={60}
              fontSize={2.2}
              spacing={2.2}
            />
          </div>

          <main className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto pl-8 md:pl-32 lg:pl-48">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full max-h-screen overflow-y-auto overflow-x-hidden flex flex-col justify-center"
              >
                {SECTIONS[activeIndex].component}
              </motion.div>
            </AnimatePresence>
          </main>

          <AnimatePresence>
            {activeIndex === SECTIONS.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="fixed bottom-0 left-0 w-full z-[100] pointer-events-auto"
              >
                <FooterSection />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
