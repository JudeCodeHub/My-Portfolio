import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  GitBranch,
  Layout,
  Server,
  Cloud,
  BrainCircuit,
  TerminalSquare,
  ChevronUp,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";
import Shuffle from "./ui/Shuffle";

const projects = [
  {
    id: 1,
    title: "New Portfolio Project",
    category: "Frontend Development",
    description:
      "A newly added project demonstrating clean UI/UX and modern frontend capabilities.",
    image: "/projects/project5.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/JudeCodeHub/SitePulse.git",
    liveUrl: "https://site-pulse-snowy-three.vercel.app/",
    icon: <TerminalSquare size={20} />,
    accent: "#3b82f6", // blue-500
    terminalName: "sitepulse",
  },
  {
    id: 2,
    title: "GitOps CI/CD Pipeline for Go",
    category: "DevOps",
    description:
      "End-to-end pipeline that builds, tests, and deploys a Go app to Kubernetes using GitOps principles for automated delivery.",
    image: "/projects/project2.png",
    tags: ["GitHub Actions", "Docker", "Kubernetes", "ArgoCD", "Helm"],
    githubUrl: "https://github.com/JudeCodeHub/Go-web-app.git",
    linkedinUrl: "https://lnkd.in/p/gJYUK7A6",
    icon: <Server size={20} />,
    accent: "#10b981",
    terminalName: "gitops-pipeline",
  },
  {
    id: 3,
    title: "Resume Analyzer using NLP",
    category: "AI / ML",
    description:
      "An intelligent system leveraging NLP to parse, analyze, and score resumes against job descriptions for optimized screening.",
    image: "/projects/project4.png",
    tags: ["Python", "NLP", "Machine Learning", "Streamlit"],
    githubUrl: "https://github.com/JudeCodeHub/Resume-Analyzer.git",
    liveUrl: "https://resumindjude.netlify.app/",
    icon: <BrainCircuit size={20} />,
    accent: "#ec4899",
    terminalName: "resumind",
  },
  {
    id: 4,
    title: "CiniVerse: Full-Stack Platform",
    category: "Web App",
    description:
      "A scalable movie database platform with secure authentication, built on a robust MERN stack architecture.",
    image: "/projects/project1.png",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    githubUrl: "https://github.com/JudeCodeHub/CiniVerse.git",
    linkedinUrl: "https://lnkd.in/p/g4cWRg2x",
    icon: <Cloud size={20} />,
    accent: "#f59e0b",
    terminalName: "ciniverse",
  },
  {
    id: 5,
    title: "GR-10 UGC website",
    category: "Academic Project",
    description:
      "Redesigned the official university website for an HCI module, focusing on navigation flow, layout structure, and accessibility.",
    image: "/projects/project3.png",
    tags: ["Figma", "HCI", "UI/UX"],
    figmaUrl:
      "https://www.figma.com/file/PkX0gMzUMNAYHwMvLSHoku/UGC-website-Redesigned",
    icon: <Layout size={20} />,
    accent: "#6366f1",
    terminalName: "ugc-website",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

function RolodexCard({ project, isActive }) {
  return (
    <div
      className={`w-full h-full rounded-2xl flex flex-col overflow-hidden bg-[#0a0a0a]/80 backdrop-blur-md border transition-all duration-700 ease-in-out ${
        isActive
          ? "border-white/20 shadow-[0_0_40px_rgba(249,115,22,0.15)]"
          : "border-white/5 scale-95"
      }`}
    >
      {/* Terminal Header Bar (Macbook Style) */}
      <div className="h-10 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 shrink-0 justify-between">
        <div className="w-14" /> {/* Spacer for perfect centering */}
        <div className="flex items-center justify-center pointer-events-none">
          <TerminalSquare size={14} className="text-white/30 mr-2" />
          <span className="text-white/90 text-xs font-mono">
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
        {/* Full Image Area */}
        <div className="w-full h-full relative shrink-0 group">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover object-left-top transition-all duration-1000 ${isActive ? "opacity-100" : "opacity-30 grayscale"}`}
          />

          {/* Action Links Overlay (Visible on active card) */}
          {isActive && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-wrap justify-center items-center gap-2 md:gap-3 z-20 w-[95%] md:w-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 text-white/90 hover:text-white hover:bg-orange-500 hover:border-orange-500 hover:scale-105 transition-all duration-300 shadow-2xl"
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
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 text-white/90 hover:text-white hover:bg-orange-500 hover:border-orange-500 hover:scale-105 transition-all duration-300 shadow-2xl"
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
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 text-white/90 hover:text-white hover:bg-orange-500 hover:border-orange-500 hover:scale-105 transition-all duration-300 shadow-2xl"
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
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 text-white/90 hover:text-white hover:bg-[#F24E1E] hover:border-[#F24E1E] hover:scale-105 transition-all duration-300 shadow-2xl"
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

  // The radius of the 3D cylinder. Larger = smoother curve.
  const radius = 550;
  const anglePerItem = 60; // degrees

  return (
    <section
      id="projects"
      className="w-full md:min-h-screen py-12 md:py-20 relative overflow-hidden flex flex-col items-center scroll-mt-10"
    >
      {/* Background glow matching the terminal theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.05)_0%,_transparent_60%)] pointer-events-none" />

      {/* Header (Centered) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "0px" }}
        variants={fadeUp(0.1)}
        className="w-full max-w-6xl mb-2 z-20 text-center flex justify-center"
      >
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-white tracking-tight flex justify-center items-center whitespace-nowrap">
          <span className="text-orange-500 shrink-0 mr-3">~$</span>
          <span className="shrink-0 inline-block">
            <Shuffle text="projects" loop={true} loopDelay={3} />
          </span>
        </h2>
      </motion.div>

      {/* Alignment Wrapper matching Navbar for the 3D Wheel */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-[104px] flex flex-col items-start z-10">
        {/* 3D Rolodex Container (Desktop Only) */}
        <div
          className="relative w-full max-w-5xl h-[650px] hidden md:flex items-center justify-center md:translate-x-5 md:ml-8 mt-8"
          style={{ perspective: "2000px" }}
        >
          {/* Navigation Controls (Right Side) */}
          <div className="absolute right-[-70px] top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2 -mt-19">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/20 bg-[#111] text-white flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all shadow-lg active:scale-90"
            >
              <ChevronUp size={20} />
            </button>

            {/* Indicators */}
            <div className="flex flex-col items-center gap-2 py-2">
              {projects.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 transition-all duration-300 rounded-full ${i === activeIndex ? "h-6 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" : "h-2 bg-white/20"}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-white/20 bg-[#111] text-white flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all shadow-lg active:scale-90"
            >
              <ChevronDown size={20} />
            </button>
          </div>

          {/* Rolodex Wheel */}
          <div
            className="relative w-full h-[600px]"
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

        {/* Simple 2D Slider Container (Mobile Only) */}
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

          {/* Mobile controls */}
          <div className="flex items-center gap-6 mt-8 z-30">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-[#111] rounded-full border border-white/20 flex items-center justify-center active:scale-90 shadow-lg text-white"
            >
              <ChevronUp className="-rotate-90" size={20} />
            </button>
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-orange-500 scale-125 shadow-[0_0_8px_rgba(249,115,22,0.8)]" : "bg-white/20"}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-[#111] rounded-full border border-white/20 flex items-center justify-center active:scale-90 shadow-lg text-white"
            >
              <ChevronDown className="-rotate-90" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
