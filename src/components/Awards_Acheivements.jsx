import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  BookOpen,
} from "lucide-react";

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
    imageSrc: "public/Achivements&Certification/1.jpg",
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
    imageSrc: "public/Achivements&Certification/2.jpg",
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
    imageSrc: "public/Achivements&Certification/3.jpg",
    accent: "#10b981",
    icon: <BookOpen size={14} />,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function wrap(min, max, v) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

const BASE_SPRING = { type: "spring", stiffness: 300, damping: 30, mass: 1 };
const TAP_SPRING = { type: "spring", stiffness: 450, damping: 18, mass: 1 };

// ─── Card image with placeholder fallback ─────────────────────────────────────

function CardImage({ src, alt, accent }) {
  const [errored, setErrored] = React.useState(false);

  if (!src || errored) {
    return (
      <div
        className="h-full w-full rounded-2xl flex flex-col items-center justify-center gap-2"
        style={{
          background: `linear-gradient(145deg, ${accent}22 0%, ${accent}08 100%)`,
        }}
      >
        <div
          className="rounded-lg"
          style={{
            width: 40,
            height: 40,
            background: `${accent}20`,
            border: `1.5px dashed ${accent}50`,
          }}
        />
        <span
          className="text-[10px] font-mono tracking-[0.18em] uppercase"
          style={{ color: `${accent}70` }}
        >
          Image
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full rounded-2xl object-cover pointer-events-none"
      onError={() => setErrored(true)}
    />
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export const Awards_Acheivements = () => {
  const items = AWARDS_ITEMS;
  const count = items.length;

  const [active, setActive] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activeIndex = wrap(0, count, active);
  const activeItem = items[activeIndex];

  const handlePrev = React.useCallback(() => setActive((p) => p - 1), []);
  const handleNext = React.useCallback(() => setActive((p) => p + 1), []);

  // Keyboard navigation
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  const visibleOffsets = isMobile ? [-1, 0, 1] : [-2, -1, 0, 1, 2];

  const cardWidth = isMobile ? 220 : 280;
  const layoutHeight = isMobile ? "h-[450px]" : "h-[520px]";
  const offsetMultiplier = isMobile ? 250 : 320;

  return (
    <section
      id="achievements"
      className="py-24 px-4 relative overflow-x-hidden"
    >
      <div className="container mx-auto max-w-5xl">
        {/* ── Section heading ── */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Achievements & <span className="text-primary">Certifications</span>
          </h2>
          <div className="mt-4 mb-3 mx-auto w-16 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />
          <p className="mt-3 text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
            Recognition earned through competition, craft, and continuous
            learning
          </p>
        </div>

        {/* ── FocusRail stage ── */}
        <div
          className={`relative flex flex-col ${layoutHeight} w-full rounded-2xl overflow-hidden select-none outline-none`}
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {/* ── Ambient glow ── */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
            {/* Per-item accent glow */}
            <motion.div
              key={`glow-${activeItem.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 55% 45% at 50% 85%, ${activeItem.accent}15 0%, transparent 70%)`,
              }}
            />
          </div>

          {/* ── Card rail ── */}
          <motion.div
            className="relative z-10 flex flex-1 items-center justify-center"
            style={{
              perspective: "1200px",
            }}
          >
            {visibleOffsets.map((offset) => {
              const absIndex = active + offset;
              const index = wrap(0, count, absIndex);
              const item = items[index];

              const isCenter = offset === 0;
              const dist = Math.abs(offset);
              const xOffset = offset * offsetMultiplier;
              const zOffset = -dist * (isMobile ? 100 : 160);
              const scale = isCenter ? 1 : 0.8;
              const rotateY = offset * (isMobile ? -12 : -18);
              const opacity = isCenter ? 1 : Math.max(0.07, 1 - dist * 0.52);
              const blur = isCenter ? 0 : dist * 5;
              const brightness = isCenter ? 1 : 0.45;

              return (
                <motion.div
                  key={absIndex}
                  className="absolute rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    width: cardWidth,
                    aspectRatio: "3/4",
                    zIndex: isCenter ? 20 : 10,
                    border: isCenter
                      ? `1.5px solid ${activeItem.accent}55`
                      : "1px solid rgba(255,255,255,0.07)",
                    transformStyle: "preserve-3d",
                    boxShadow: isCenter
                      ? `0 28px 60px ${activeItem.accent}25, 0 0 0 1px ${activeItem.accent}18`
                      : "0 4px 20px rgba(0,0,0,0.2)",
                  }}
                  initial={false}
                  animate={{
                    x: xOffset,
                    z: zOffset,
                    scale,
                    rotateY,
                    opacity,
                    filter: `blur(${blur}px) brightness(${brightness})`,
                  }}
                  transition={(prop) =>
                    prop === "scale" ? TAP_SPRING : BASE_SPRING
                  }
                  onClick={() => {
                    if (offset !== 0) setActive((p) => p + offset);
                  }}
                >
                  <CardImage
                    src={item.imageSrc}
                    alt={item.title}
                    accent={item.accent}
                  />

                  {/* Gloss overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-white/8 to-transparent pointer-events-none" />

                  {/* Badge — only on active card */}
                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.14, duration: 0.28 }}
                      className="absolute top-3 left-3"
                    >
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-lg"
                        style={{
                          background: item.accent,
                          color: "#ffffff",
                        }}
                      >
                        {item.icon}
                        {item.badge}
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* ── Info + Controls row ── */}
          <div className="relative z-20 w-full flex flex-col md:flex-row items-center justify-between gap-4 px-6 pb-7 pointer-events-auto">
            {/* Animated text block */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left h-28 justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.26 }}
                  className="space-y-1.5"
                >
                  {activeItem.meta && (
                    <span
                      className="text-[11px] font-mono tracking-[0.16em] uppercase"
                      style={{ color: activeItem.accent }}
                    >
                      {activeItem.meta}
                    </span>
                  )}
                  <h3 
                    className="text-xl md:text-2xl font-bold leading-snug"
                    style={{ fontFamily: "'Outfit', sans-serif", color: activeItem.accent }}
                  >
                    {activeItem.title}
                  </h3>
                  <p 
                    className="text-sm text-muted-foreground max-w-xs leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {activeItem.org}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Prev / counter / next */}
              <div
                className="flex items-center gap-1 rounded-full p-1"
                style={{
                  background: "hsl(var(--card) / 0.75)",
                  border: "1px solid hsl(var(--border) / 0.6)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <button
                  onClick={handlePrev}
                  className="rounded-full p-2 text-muted-foreground transition hover:text-foreground hover:bg-white/10 active:scale-95"
                  aria-label="Previous"
                >
                  <ChevronLeft size={17} />
                </button>
                <span className="min-w-[36px] text-center text-[11px] font-mono text-muted-foreground">
                  {activeIndex + 1} / {count}
                </span>
                <button
                  onClick={handleNext}
                  className="rounded-full p-2 text-muted-foreground transition hover:text-foreground hover:bg-white/10 active:scale-95"
                  aria-label="Next"
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
