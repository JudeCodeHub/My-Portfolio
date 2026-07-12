import { useState } from "react";
import { Code2, Palette, Settings, Database } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { SiArgo, SiGithubactions } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const clusters = [
  {
    id: "languages",
    title: "Languages",
    icon: Code2,
    accentColor: "#38bdf8", 
    floatDelay: 0,
    floatDuration: 3.5,
    hubColor: "border-sky-400/50 shadow-[0_0_20px_rgba(56,189,248,0.3)]",
    rings: [
      {
        radius: 90,
        duration: 20, direction: 1, color: "border-sky-400/40", textRepeats: 14,
        skills: [
          { name: "JavaScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E", bg: "rgba(247,223,30,0.15)", angleOffset: 30 },
          { name: "Python", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB", bg: "rgba(55,118,171,0.15)", angleOffset: 210 },
        ]
      },
      {
        radius: 165,
        duration: 30, direction: -1, color: "border-sky-400/20", textRepeats: 19,
        skills: [
          { name: "TypeScript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6", bg: "rgba(49,120,198,0.15)", angleOffset: 120 },
          { name: "Java", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#007396", bg: "rgba(0,115,150,0.15)", angleOffset: 300 },
        ]
      }
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Palette,
    accentColor: "#a855f7", 
    floatDelay: 0.5,
    floatDuration: 4,
    hubColor: "border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    rings: [
      {
        radius: 90,
        duration: 25, direction: -1, color: "border-purple-500/40", textRepeats: 14,
        skills: [
          { name: "HTML5", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26", bg: "rgba(227,79,38,0.15)", angleOffset: 45 },
          { name: "React", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB", bg: "rgba(97,218,251,0.15)", angleOffset: 225 },
        ]
      },
      {
        radius: 165,
        duration: 35, direction: 1, color: "border-purple-500/20", textRepeats: 19,
        skills: [
          { name: "CSS3", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6", bg: "rgba(21,114,182,0.15)", angleOffset: 135 },
          { name: "Tailwind", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4", bg: "rgba(6,182,212,0.15)", angleOffset: 315 },
        ]
      }
    ]
  },
  {
    id: "devops",
    title: "DevOps",
    icon: Settings,
    accentColor: "#f97316", 
    floatDelay: 1,
    floatDuration: 4.5,
    hubColor: "border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.3)]",
    rings: [
      {
        radius: 90,
        duration: 28, direction: 1, color: "border-orange-500/40", textRepeats: 21,
        skills: [
          { name: "Git", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032", bg: "rgba(240,80,50,0.15)", angleOffset: 0 },
          { name: "Docker", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED", bg: "rgba(36,150,237,0.15)", angleOffset: 90 },
          { name: "Actions", level: 85, icon: SiGithubactions, color: "#2088FF", bg: "rgba(32,136,255,0.15)", angleOffset: 180 },
          { name: "Kubernetes", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", color: "#326CE5", bg: "rgba(50,108,229,0.15)", angleOffset: 270 },
        ]
      },
      {
        radius: 165,
        duration: 32, direction: -1, color: "border-orange-500/20", textRepeats: 28,
        skills: [
          { name: "Linux", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", color: "#FCC624", bg: "rgba(252,198,36,0.15)", angleOffset: 45 },
          { name: "AWS", level: 75, icon: FaAws, color: "#FF9900", bg: "rgba(255,153,0,0.15)", angleOffset: 135 },
          { name: "Terraform", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", color: "#7C3AED", bg: "rgba(124,58,237,0.15)", angleOffset: 225 },
          { name: "ArgoCD", level: 70, icon: SiArgo, color: "#EF7B4D", bg: "rgba(239,123,77,0.15)", angleOffset: 315 },
        ]
      }
    ]
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    accentColor: "#22c55e", 
    floatDelay: 1.5,
    floatDuration: 4.2,
    hubColor: "border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]",
    rings: [
      {
        radius: 90,
        duration: 25, direction: -1, color: "border-green-500/40", textRepeats: 14,
        skills: [
          { name: "PostgreSQL", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4169E1", bg: "rgba(65,105,225,0.15)", angleOffset: 60 },
        ]
      },
      {
        radius: 165,
        duration: 30, direction: 1, color: "border-green-500/20", textRepeats: 19,
        skills: [
          { name: "MongoDB", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248", bg: "rgba(71,162,72,0.15)", angleOffset: 240 },
        ]
      }
    ]
  }
];

const filters = [
  { id: "All", label: "All", color: "#3b82f6" }, 
  { id: "languages", label: "Languages", color: "#38bdf8" },
  { id: "frontend", label: "Frontend", color: "#a855f7" },
  { id: "devops", label: "DevOps", color: "#f97316" },
  { id: "databases", label: "Databases", color: "#22c55e" },
];

const SkillCard = ({ cluster, cIdx, pausedCluster, setPausedCluster, activeTooltip, setActiveTooltip, isSingleView }) => {
  const isClusterPaused = pausedCluster === cIdx;

  // Framer Motion 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeaveCard = () => {
    x.set(0);
    y.set(0);
  };

  const handleInteract = (rIdx, sIdx, isHover) => {
    const id = `${cIdx}-${rIdx}-${sIdx}`;
    if (isHover) {
      setPausedCluster(cIdx);
      setActiveTooltip(id);
    } else {
      if (activeTooltip === id) {
        setPausedCluster(null);
        setActiveTooltip(null);
      } else {
        setPausedCluster(cIdx);
        setActiveTooltip(id);
      }
    }
  };

  const handleLeaveOrbit = () => {
    setPausedCluster(null);
    setActiveTooltip(null);
  };

  // When filtered down to 1 card, scale it up and let it dominate the space.
  // When showing all 4, conditionally scale them down on smaller breakpoints to prevent horizontal overflow.
  const displayScale = isSingleView 
    ? "scale-90 sm:scale-100 lg:scale-110 2xl:scale-125" 
    : "scale-[0.8] sm:scale-90 md:scale-100 xl:scale-[0.85] 2xl:scale-100";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
      transition={{ duration: 0.4 }}
      className={`w-full ${isSingleView ? 'max-w-[400px]' : 'max-w-full'}`}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ 
          duration: cluster.floatDuration, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: cluster.floatDelay
        }}
        className={`w-full h-full flex flex-col items-center justify-center origin-center transition-transform duration-700 ${displayScale}`}
      >
        <motion.div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeaveCard}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1200,
          }}
          className="relative flex flex-col items-center w-full h-full min-h-[440px]"
        >
          {/* Orbit System Container */}
          <div className="relative flex-1 flex justify-center items-center overflow-visible pointer-events-none">
            
            {/* Subtle Center Hub (Icon only) */}
            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85px] h-[85px] rounded-full bg-slate-900/80 border-[1px] flex flex-col items-center justify-center z-50 backdrop-blur-md ${cluster.hubColor}`}>
              <cluster.icon size={24} style={{ color: cluster.accentColor, opacity: 0.8 }} />
            </div>

            {/* Concentric Rings */}
            {cluster.rings.map((ring, rIdx) => {
              const ringDirClass = ring.direction === 1 ? 'cw' : 'ccw';
              const isOuter = rIdx === 1;

              return (
                <div
                  key={`ring-${cIdx}-${rIdx}`}
                  className="absolute left-1/2 top-1/2 rounded-full pointer-events-none"
                  style={{
                    width: ring.radius * 2,
                    height: ring.radius * 2,
                    marginLeft: -ring.radius,
                    marginTop: -ring.radius,
                  }}
                >
                  {/* Rotating Ring Path */}
                  <div 
                    className={`absolute inset-0 w-full h-full rounded-full orbit-ring ${ringDirClass} ${isClusterPaused ? 'animation-paused' : ''}`}
                    style={{ animationDuration: `${ring.duration}s` }}
                  >
                    <svg width="100%" height="100%" style={{ overflow: "visible", position: "absolute", inset: 0 }}>
                      <circle 
                        cx={ring.radius} 
                        cy={ring.radius} 
                        r={ring.radius} 
                        fill="none" 
                        stroke={cluster.accentColor} 
                        strokeWidth="1.5" 
                        strokeOpacity="0.35" 
                      />
                    </svg>

                    {/* Scattered Icons */}
                    {ring.skills.map((skill, sIdx) => {
                      const tooltipId = `${cIdx}-${rIdx}-${sIdx}`;
                      const isActive = activeTooltip === tooltipId;

                      const badgeSize = 56;
                      const iconSize = 28;

                      return (
                        <div
                          key={skill.name}
                          className="absolute left-0 top-0 w-full h-full pointer-events-none"
                          style={{ transform: `rotate(${skill.angleOffset}deg)` }}
                        >
                          <div
                            className="absolute left-1/2 top-0 pointer-events-auto"
                            style={{ transform: `translate(-50%, -50%)` }}
                          >
                            {/* Counter-rotation wrapper */}
                            <div
                              className={`relative flex flex-col items-center justify-center orbit-item ${ringDirClass} ${isClusterPaused ? 'animation-paused' : ''}`}
                              style={{ animationDuration: `${ring.duration}s` }}
                              onMouseEnter={() => handleInteract(rIdx, sIdx, true)}
                              onMouseLeave={handleLeaveOrbit}
                              onClick={() => handleInteract(rIdx, sIdx, false)}
                            >
                              {/* Static offset cancel wrapper - fixes the permanent tilt */}
                              <div className="relative flex flex-col items-center justify-center" style={{ transform: `rotate(-${skill.angleOffset}deg)` }}>
                                
                                {/* Icon Badge & Tooltip Container */}
                                <div
                                  className={`relative rounded-full flex items-center justify-center backdrop-blur-xl transition-transform duration-300 cursor-pointer ${isActive ? 'scale-125 z-40' : ''}`}
                                  style={{
                                    width: badgeSize,
                                    height: badgeSize,
                                    background: skill.bg,
                                    border: `1px solid ${skill.color}50`,
                                    boxShadow: `0 0 12px ${skill.color}25`,
                                    color: skill.color,
                                  }}
                                >
                                  {typeof skill.icon === 'string' ? (
                                    <img src={skill.icon} alt={skill.name} style={{ width: `${iconSize}px`, height: `${iconSize}px` }} />
                                  ) : (
                                    <skill.icon size={iconSize} />
                                  )}

                                  {/* Tooltip as direct child of Icon */}
                                  <div 
                                    className="absolute bottom-full left-1/2 whitespace-nowrap z-50 transition-all duration-200"
                                    style={{
                                      opacity: isActive ? 1 : 0,
                                      transform: isActive ? "translateX(-50%) scale(1)" : "translateX(-50%) scale(0.9)",
                                      pointerEvents: isActive ? "auto" : "none",
                                      background: "rgba(15,23,42,0.95)",
                                      border: `1px solid ${skill.color}`,
                                      borderRadius: "8px",
                                      padding: "6px 10px",
                                      marginBottom: "8px",
                                      boxShadow: `0 8px 30px rgba(0,0,0,0.5), 0 0 15px ${skill.color}35`
                                    }}
                                  >
                                    <div className="flex items-center justify-center">
                                      <span className="font-bold text-[13px]" style={{ color: skill.color }}>{skill.name}</span>
                                    </div>
                                    <div 
                                      className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2 h-2 border-b border-r rotate-45"
                                      style={{ borderColor: skill.color, background: "rgba(15,23,42,0.95)" }}
                                    />
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const [pausedCluster, setPausedCluster] = useState(null);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleClusters = activeFilter === "All" 
    ? clusters 
    : clusters.filter(c => c.id === activeFilter);

  const isSingleView = activeFilter !== "All";

  return (
    <section id="skills" className="py-12 md:py-20 px-4 relative overflow-hidden bg-secondary/20 min-h-screen">
      
      <style>{`
        @keyframes orbit-cw {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbit-ccw {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        .orbit-ring {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .orbit-ring.cw { animation-name: orbit-cw; }
        .orbit-ring.ccw { animation-name: orbit-ccw; }
        
        .orbit-item {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .orbit-item.cw { animation-name: orbit-ccw; } 
        .orbit-item.ccw { animation-name: orbit-cw; }

        .animation-paused {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="container mx-auto max-w-[1600px] px-2 sm:px-4">
        
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />
        </div>

        {/* Dynamic Pill Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 mb-6 relative z-50">
          {filters.map(filter => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 md:px-8 md:py-2.5 rounded-full font-semibold text-[13px] md:text-[14px] tracking-wide transition-all duration-300 transform hover:scale-105 border 
                  ${isActive 
                    ? 'text-white' 
                    : 'text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700 bg-transparent hover:border-slate-400 dark:hover:border-slate-500'}`}
                style={{
                  background: isActive ? filter.color : undefined,
                  borderColor: isActive ? filter.color : undefined,
                  boxShadow: isActive ? `0 0 20px ${filter.color}50` : "none"
                }}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Grid / Flex layout for displaying the clusters */}
        <motion.div 
          layout 
          className={`
            ${isSingleView 
              ? "flex justify-center items-center w-full mt-4 sm:mt-8 md:mt-12 lg:mt-16 mb-10" 
              : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12 xl:gap-8 2xl:gap-12 mt-4 justify-items-center"}
          `}
        >
          <AnimatePresence mode="popLayout">
            {visibleClusters.map((cluster, cIdx) => (
              <SkillCard 
                key={cluster.id}
                cluster={cluster}
                cIdx={cIdx}
                pausedCluster={pausedCluster}
                setPausedCluster={setPausedCluster}
                activeTooltip={activeTooltip}
                setActiveTooltip={setActiveTooltip}
                isSingleView={isSingleView}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
