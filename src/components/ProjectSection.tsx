"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TerminalSquare,
  ChevronUp,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";
import Shuffle from "./ui/Shuffle";
import { PROJECTS as projects, type Project } from "@/data/projects";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay },
  },
});

interface RolodexCardProps {
  project: Project;
  isActive: boolean;
}

function RolodexCard({ project, isActive }: RolodexCardProps) {
  return (
    <div
      className={`w-full h-full rounded-2xl flex flex-col overflow-hidden bg-white/90 dark:bg-[#0a0a0a]/80 backdrop-blur-md border transition-all duration-700 ease-in-out ${
        isActive
          ? "border-slate-300 dark:border-white/20 shadow-[0_0_40px_rgba(249,115,22,0.15)]"
          : "border-slate-200 dark:border-white/5 scale-95"
      }`}
    >
      <div className="h-10 bg-slate-100 dark:bg-[#1a1a1a] border-b border-slate-200 dark:border-white/5 flex items-center px-4 shrink-0 justify-between">
        <div className="w-14" />
        <div className="flex items-center justify-center pointer-events-none">
          <TerminalSquare size={14} className="text-slate-400 dark:text-white/30 mr-2" />
          <span className="text-slate-700 dark:text-white/90 text-xs font-mono">
            ~/{project.terminalName}.sh
          </span>
        </div>
        <div className="flex gap-2 w-14 justify-end">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-full h-full relative shrink-0 group">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover ${project.mobileImagePosition === "center" ? "object-center md:object-left-top" : "object-left-top"} transition-all duration-1000 ${isActive ? "opacity-100" : "opacity-30 grayscale"}`}
          />

          {isActive && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-wrap justify-center items-center gap-2 md:gap-3 z-20 w-[95%] md:w-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/95 backdrop-blur-xl border border-white/10 text-white/90 hover:text-white hover:bg-orange-500 hover:border-orange-500 hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  <FaGithub size={14} />
                  <span className="text-xs font-medium tracking-wide">
                    Source
                  </span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/95 backdrop-blur-xl border border-white/10 text-white/90 hover:text-white hover:bg-orange-500 hover:border-orange-500 hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  <ExternalLink size={14} />
                  <span className="text-xs font-medium tracking-wide text-white">
                    Live Demo
                  </span>
                </a>
              )}

              {project.linkedinUrl && (
                <a
                  href={project.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/95 backdrop-blur-xl border border-white/10 text-white/90 hover:text-white hover:bg-orange-500 hover:border-orange-500 hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  <FaLinkedin size={14} />
                  <span className="text-xs font-medium tracking-wide text-white">
                    LinkedIn Post
                  </span>
                </a>
              )}

              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/95 backdrop-blur-xl border border-white/10 text-white/90 hover:text-white hover:bg-[#F24E1E] hover:border-[#F24E1E] hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  <FaFigma size={14} />
                  <span className="text-xs font-medium tracking-wide text-white">
                    Figma Design
                  </span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const [radius, setRadius] = useState(550);
  const anglePerItem = 60;

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 1280) {
          setRadius(550);
        } else if (window.innerWidth >= 768) {
          setRadius(400);
        } else {
          setRadius(550);
        }
      }
    };
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <section
      id="projects"
      className="w-full md:min-h-screen lg:min-h-[85vh] py-12 md:py-12 lg:py-6 xl:py-10 relative overflow-hidden flex flex-col items-center scroll-mt-10 lg:scroll-mt-0"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.05)_0%,_transparent_60%)] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "0px" }}
        variants={fadeUp(0.1)}
        className="w-full max-w-6xl mb-2 z-20 text-center flex justify-center -translate-y-0.75"
      >
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-slate-800 dark:text-white tracking-tight flex justify-center items-center whitespace-nowrap">
          <span className="text-orange-500 shrink-0 mr-3">~$</span>
          <span className="shrink-0 inline-block">
            <Shuffle text="projects" loop={true} loopDelay={3} />
          </span>
        </h2>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 xl:px-[104px] flex flex-col items-start md:items-center lg:items-center xl:items-start z-10">
        <div
          className="relative w-full max-w-5xl h-[min(65vh,700px)] md:max-w-2xl md:h-[min(62vh,520px)] lg:max-w-2xl lg:h-[min(62vh,520px)] xl:max-w-5xl xl:h-[min(65vh,700px)] min-h-[360px] hidden md:flex items-center justify-center md:translate-x-3 md:ml-6 lg:translate-x-0 lg:ml-0 xl:translate-x-3 xl:ml-6 mt-4 lg:mt-2 xl:mt-4 -translate-y-0.75"
          style={{ perspective: "2000px" }}
        >
          <div className="absolute right-[-48px] top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
            <button
              onClick={handlePrev}
              className="w-7 h-7 rounded-full border border-slate-300 dark:border-white/20 bg-white dark:bg-[#111] text-slate-700 dark:text-white flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all shadow-lg active:scale-90"
            >
              <ChevronUp size={14} />
            </button>

            <div className="flex flex-col items-center gap-2 py-2">
              {projects.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 transition-all duration-300 rounded-full ${i === activeIndex ? "h-6 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" : "h-2 bg-slate-300 dark:bg-white/20"}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-7 h-7 rounded-full border border-slate-300 dark:border-white/20 bg-white dark:bg-[#111] text-slate-700 dark:text-white flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all shadow-lg active:scale-90"
            >
              <ChevronDown size={14} />
            </button>
          </div>

          <div
            className="relative w-full h-full"
            style={{ transformStyle: "preserve-3d", willChange: "transform" }}
          >
            {projects.map((project, i) => {
              const offset = i - activeIndex;
              const rotateX = offset * -anglePerItem;
              const isActive = offset === 0;
              const absOffset = Math.abs(offset);
              const isVisible = absOffset <= 2;

              return (
                <motion.div
                  key={i}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={false}
                  animate={{
                    rotateX: rotateX,
                    z: -absOffset * 50,
                    opacity: isActive ? 1 : isVisible ? 1 : 0,
                    filter: isActive ? "blur(0px)" : "blur(2px)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    mass: 0.8,
                  }}
                  style={{
                    transformOrigin: `50% 50% -${radius}px`,
                    backfaceVisibility: "hidden",
                    pointerEvents: isVisible ? "auto" : "none",
                    zIndex: projects.length - absOffset,
                    willChange: "transform, opacity, filter",
                  }}
                >
                  <RolodexCard project={project} isActive={isActive} />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="w-full flex flex-col md:hidden items-center mt-4">
          <div className="w-[90vw] h-[350px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <RolodexCard project={projects[activeIndex]} isActive={true} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-6 mt-8 z-30">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-white dark:bg-[#111] rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center active:scale-90 shadow-lg text-slate-700 dark:text-white"
            >
              <ChevronUp className="-rotate-90" size={20} />
            </button>
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-orange-500 scale-125 shadow-[0_0_8px_rgba(249,115,22,0.8)]" : "bg-slate-300 dark:bg-white/20"}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-white dark:bg-[#111] rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center active:scale-90 shadow-lg text-slate-700 dark:text-white"
            >
              <ChevronDown className="-rotate-90" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
