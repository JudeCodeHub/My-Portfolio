import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy, BookOpen } from "lucide-react";
import Shuffle from "./ui/Shuffle";
import DepthCarousel from "./ui/DepthCarousel";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

// ─── Data ─────────────────────────────────────────────────────────────────────

const AWARDS_ITEMS = [
  {
    id: 1,
    title: "Yarl Geek Senior Challenge (YGC)",
    description:
      "Developed and pitched an innovative software solution, competing against top regional teams in a rigorous technology and business challenge.",
    meta: "Competition • 2025",
    badge: "Finalist",
    org: "Yarl IT Hub",
    imageSrc: "/Achivements&Certification/1.jpg",
    accent: "#6366f1",
    icon: <Trophy size={14} />,
  },
  {
    id: 2,
    title: "Cre8X 2.0 – National UI/UX Design Competition",
    description:
      "Designed and prototyped a user-centric digital experience, securing a top 8 position nationwide for usability, aesthetics, and problem-solving.",
    meta: "Competition • 2025",
    badge: "Finalist",
    org: "General Sir John Kotelawala Defence University",
    imageSrc: "/Achivements&Certification/2.jpg",
    accent: "#6366f1",
    icon: <Trophy size={14} />,
  },
  {
    id: 3,
    title: "Linux System Administration & DevOps Engineering",
    description:
      "Completed hands-on training covering Linux system administration, modern DevOps tooling, automation practices, and CI/CD methodologies.",
    meta: "DevOps • 06/2025 – 01/2026",
    badge: "Certification",
    org: "WSO2 - Industry Sponsored Training Program",
    imageSrc: "/Achivements&Certification/3.jpg",
    accent: "#10b981",
    icon: <BookOpen size={14} />,
  },
];

export const Awards_Acheivements = () => {
  const items = AWARDS_ITEMS;
  const [active, setActive] = React.useState(0);
  const activeItem = items[active];

  const handleNext = () =>
    setActive((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  const handlePrev = () =>
    setActive((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  const [dimensions, setDimensions] = React.useState({
    width: 380,
    height: 450,
    containerHeight: 520,
  });

  React.useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 1280) {
          setDimensions({ width: 380, height: 450, containerHeight: 520 });
        } else if (window.innerWidth >= 1024) {
          setDimensions({ width: 280, height: 340, containerHeight: 400 });
        } else {
          setDimensions({ width: 380, height: 450, containerHeight: 520 });
        }
      }
    };
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const carouselItems = React.useMemo(() => {
    return items.map((item) => ({
      image: item.imageSrc,
      alt: item.title,
      badge: item.badge,
      icon: item.icon,
    }));
  }, [items]);

  return (
    <section
      id="achievements"
      className="py-12 md:py-24 lg:py-8 xl:py-20 px-4 relative overflow-hidden max-w-[100vw] w-full flex flex-col justify-center items-center lg:min-h-[85vh] scroll-mt-10 lg:scroll-mt-0"
    >
      <div className="container mx-auto max-w-5xl w-full">
        {/* ── Section heading ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "0px" }}
          variants={fadeUp(0.1)}
          className="w-full max-w-6xl mb-10 z-10 text-center mx-auto translate-y-[4px] mt-18"
        >
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-slate-800 dark:text-white tracking-tight flex flex-wrap justify-center items-center md:whitespace-nowrap mb-4 mt-2 px-2">
            <span className="text-orange-500 shrink-0 mr-2 md:mr-3">~$</span>
            <span className="shrink-0 inline-block text-center leading-tight">
              <span className="hidden md:inline-block">
                <Shuffle
                  text="honors & achievements"
                  loop={true}
                  loopDelay={3}
                />
              </span>
              <span className="inline-block md:hidden">
                <Shuffle text="achievements" loop={true} loopDelay={3} />
              </span>
            </span>
          </h2>
          <p className="hidden md:block text-slate-700 dark:text-white/90 font-mono text-[13px] md:text-[15px] mt-3 uppercase tracking-[0.2em] md:tracking-[0.3em]">
            // Recognition earned through competition, craft, and continuous
            learning
          </p>
        </motion.div>

        {/* ── Carousel Stage ── */}
        <div className="relative flex flex-col items-center w-full rounded-2xl overflow-hidden mt-2 md:mt-8">
          {/* Ambient Glow */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
            <motion.div
              key={`glow-${activeItem.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 55% 45% at 50% 85%, #f9731615 0%, transparent 70%)`,
              }}
            />
          </div>

          <div
            className="hidden md:block"
            style={{
              height: `${dimensions.containerHeight}px`,
              width: "100%",
              position: "relative",
              zIndex: 10,
            }}
          >
            <DepthCarousel
              items={carouselItems}
              cardWidth={dimensions.width}
              cardHeight={dimensions.height}
              radius={18}
              depth={220}
              spread={90}
              tilt={22}
              tiltDirection="right"
              perspective={1400}
              visibleCards={3}
              falloff={0.2}
              blur={6}
              autoplay={false}
              loop={false}
              onChange={(idx) => setActive(idx)}
            />
          </div>

          {/* Simple Mobile Carousel */}
          <div className="flex flex-col md:hidden w-full items-center mt-2 mb-4 z-20">
            <div className="w-[85vw] h-[360px] relative rounded-xl overflow-hidden border border-white/20 shadow-[0_0_20px_rgba(249,115,22,0.15)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <img
                    src={items[active].imageSrc}
                    alt={items[active].title}
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Badge Overlay (Shifted left for mobile) */}
                  <div className="absolute top-4 right-10 bg-orange-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 border border-orange-400/50 shadow-lg text-white">
                    {items[active].icon}
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                      {items[active].badge}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-6 mt-6">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-[#111] rounded-full border border-white/20 flex items-center justify-center active:scale-90 shadow-lg text-white transition-all hover:bg-orange-500 hover:border-orange-500"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {items.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? "bg-orange-500 scale-125 shadow-[0_0_8px_rgba(249,115,22,0.8)]" : "bg-slate-300 dark:bg-white/20"}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-10 h-10 bg-[#111] rounded-full border border-white/20 flex items-center justify-center active:scale-90 shadow-lg text-white transition-all hover:bg-orange-500 hover:border-orange-500"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Info Section below */}
          <div className="relative z-20 w-full mt-3 flex flex-col items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.26 }}
                className="space-y-3 w-full max-w-5xl px-4 flex flex-col items-center"
              >
                <div className="flex flex-col items-center gap-2">
                  {activeItem.meta && (
                    <span className="text-xs font-mono tracking-[0.16em] uppercase text-orange-500">
                      {activeItem.meta}
                    </span>
                  )}
                </div>
                <h3 className="text-xl md:text-2xl lg:text-xl xl:text-3xl font-bold leading-snug text-slate-800 dark:text-white font-outfit px-2">
                  {activeItem.title}
                </h3>
                <p className="text-sm md:text-base lg:text-sm xl:text-base text-slate-600 dark:text-white/60 leading-relaxed font-inter">
                  {activeItem.org}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
