import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaBehance, FaInstagram, FaAws } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import StackIcon from "tech-stack-icons";
import profilePic from "../assets/profile1.jpg";

/* ─── Animation Variants ─────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut", delay: 0.3 },
  },
};

const photoFloat = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
  },
};

/* ─── Tech Badge Configs ─────────────────────────────────── */
const techBadges = [
  {
    id: "js",
    icon: "js",
    color: "#F7DF1E",
    bg: "rgba(247,223,30,0.12)",
    border: "rgba(247,223,30,0.35)",
    glow: "rgba(247,223,30,0.25)",
    label: "JavaScript",
    // top-left of arch
    pos: { top: "4%", left: "-8%" },
    mobilePos: { top: "2%", left: "2%" },
    delay: 0.6,
    duration: 3.8,
    wobble: false,
  },
  {
    id: "docker",
    icon: "docker",
    color: "#2496ED",
    bg: "rgba(36,150,237,0.12)",
    border: "rgba(36,150,237,0.35)",
    glow: "rgba(36,150,237,0.25)",
    label: "Docker",
    // top-right of arch (nudged right)
    pos: { top: "8%", right: "-2%" },
    mobilePos: { top: "2%", right: "2%" },
    delay: 0.9,
    duration: 4.5,
    wobble: true,
  },
  {
    id: "aws",
    icon: FaAws,
    color: "#FF9900",
    bg: "rgba(255,153,0,0.12)",
    border: "rgba(255,153,0,0.35)",
    glow: "rgba(255,153,0,0.25)",
    label: "AWS",
    // bottom-left (nudged left)
    pos: { bottom: "10%", left: "-14%" },
    mobilePos: { bottom: "8%", left: "2%" },
    delay: 1.2,
    duration: 4.1,
    wobble: false,
  },
  {
    id: "figma",
    icon: "figma",
    color: "#F24E1E",
    bg: "rgba(242,78,30,0.12)",
    border: "rgba(242,78,30,0.35)",
    glow: "rgba(242,78,30,0.25)",
    label: "Figma",
    // right-middle (nudged right)
    pos: { top: "48%", right: "-6%" },
    mobilePos: { top: "48%", right: "2%" },
    delay: 0.4,
    duration: 3.5,
    wobble: true,
  },
  {
    id: "react",
    icon: SiReact,
    color: "#61DAFB",
    bg: "rgba(97,218,251,0.10)",
    border: "rgba(97,218,251,0.30)",
    glow: "rgba(97,218,251,0.20)",
    label: "React",
    // bottom-right (pulled left)
    pos: { bottom: "6%", right: "1%" },
    mobilePos: { bottom: "4%", right: "2%" },
    delay: 1.5,
    duration: 5.0,
    wobble: false,
  },
  {
    id: "ts",
    icon: "typescript",
    color: "#3178C6",
    bg: "rgba(49,120,198,0.12)",
    border: "rgba(49,120,198,0.35)",
    glow: "rgba(49,120,198,0.25)",
    label: "TypeScript",
    // left-middle (nudged left)
    pos: { top: "42%", left: "-14%" },
    mobilePos: { top: "42%", left: "2%" },
    delay: 1.0,
    duration: 4.3,
    wobble: false,
  },
];

/* ─── Social Sidebar ─────────────────────────────────────── */
const socials = [
  { icon: FaGithub,    href: "https://github.com/JudeCodeHub",                    label: "GitHub",    size: 15, color: "#e8e8e8",  bg: "#1a1a1a" },
  { icon: FaLinkedin,  href: "https://linkedin.com/in/judechihan",                 label: "LinkedIn",  size: 15, color: "#ffffff",  bg: "#0A66C2" },
  { icon: FaBehance,   href: "https://www.behance.net/jude_dev",                   label: "Behance",   size: 15, color: "#ffffff",  bg: "#1769FF" },
  { icon: FaInstagram, href: "https://www.instagram.com/judejochimson_judechihan", label: "Instagram", size: 15, color: "#ffffff",  bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" },
];

/* ═══════════════════════════════════════════════════════════ */
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative pt-[180px] pb-[70px] flex items-center px-4 overflow-hidden"
    >
      {/* Ambient Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-400/10 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-float" />

      {/* ── Two-Column Grid ───────────────────────────────── */}
      <div className="container max-w-7xl mx-auto mt-20 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT COLUMN ─────────────────────────────── */}
          <div className="flex flex-col justify-center gap-6 order-2 lg:order-1 text-center lg:text-left">

            <div className="flex flex-col gap-3 mb-[-8px]">
              {/* Eyebrow */}
              <motion.p
                variants={fadeUp(0)}
                initial="hidden"
                animate="visible"
                className="text-sm font-semibold tracking-widest uppercase text-sky-400"
              >
                ✦ Welcome to my portfolio!
              </motion.p>

              {/* Quote */}
              <motion.p
                variants={fadeUp(0.1)}
                initial="hidden"
                animate="visible"
                className="italic leading-relaxed text-muted-foreground"
                style={{ fontSize: "0.95rem" }}
              >
                "Make it work, make it right, make it fast."
              </motion.p>
            </div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-foreground"
            >
              Hey, I'm{" "}
              <span className="bg-linear-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.45)]">
                Judechihan
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp(0.35)}
              initial="hidden"
              animate="visible"
              className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Building the engine, not just the surface — focused on{" "}
              <span className="text-sky-400 font-medium">scalable systems</span>,
              automation, and resilient cloud infrastructure.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp(0.5)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.07, boxShadow: "0 0 28px rgba(14,165,233,0.55)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-[0_0_14px_rgba(14,165,233,0.4)] transition-shadow duration-300"
              >
                <Rocket className="w-4 h-4" />
                View My Work
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.07, boxShadow: "0 0 24px rgba(14,165,233,0.35)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-sky-400/60 text-sky-400 font-semibold text-sm bg-transparent hover:bg-sky-400/10 transition-all duration-300"
              >
                Contact Me
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN ─────────────────────────────── */}
          {/* ml-auto + pl push the whole column slightly right for breathing room */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="relative" style={{ marginLeft: "clamp(0px, 4vw, 56px)" }}>

              {/* ── Floating Tech Badges ─────────────────── */}
              {techBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.id}
                    className="absolute z-30 pointer-events-none flex"
                    style={badge.pos}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -12, 0],
                      rotate: badge.wobble ? [0, 4, 0, -4, 0] : 0,
                    }}
                    transition={{
                      opacity:  { duration: 0.5, delay: badge.delay },
                      scale:    { duration: 0.5, delay: badge.delay },
                      y: {
                        duration: badge.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: badge.delay,
                      },
                      rotate: badge.wobble ? {
                        duration: badge.duration * 1.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: badge.delay,
                      } : undefined,
                    }}
                    whileHover={{ scale: 1.15, pointerEvents: "auto" }}
                  >
                    {/* Badge */}
                    <div
                      className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-[56px] lg:h-[56px] rounded-[12px] lg:rounded-[16px]"
                      style={{
                        background: badge.bg,
                        border: `1px solid ${badge.border}`,
                        boxShadow: `0 0 18px 2px ${badge.glow}, 0 4px 20px rgba(0,0,0,0.4)`,
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                      }}
                    >
                      <div className="w-5 h-5 md:w-6 md:h-6 lg:w-[28px] lg:h-[28px] flex items-center justify-center">
                        {typeof badge.icon === "string" ? (
                          <StackIcon name={badge.icon} />
                        ) : (
                          <badge.icon size={28} color={badge.color} />
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* ── Photo Arch Card ──────────────────────── */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                className="relative z-10"
              >
                <motion.div animate={photoFloat.animate}>
                  <div 
                    className="w-[240px] h-[320px] md:w-[280px] md:h-[380px] lg:w-[340px] lg:h-[460px] rounded-[120px] md:rounded-[140px] lg:rounded-[170px] overflow-hidden border-2 border-sky-400/60"
                    style={{
                      boxShadow: "0 0 50px 8px rgba(56,189,248,0.25), 0 0 100px 20px rgba(56,189,248,0.10)",
                    }}
                  >
                    <img
                      src={profilePic}
                      alt="Judechihan — Developer"
                      draggable={false}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 10%",
                        display: "block",
                        userSelect: "none",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* ── Vertical "Follow Me" Social Sidebar ─── */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20 hidden lg:flex"
                style={{ right: "-90px" }}
              >
                <span
                  className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground font-semibold"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  Follow Me
                </span>

                <div className="w-px h-8 bg-sky-400/30" />

                {socials.map(({ icon: Icon, href, label, size, color, bg }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.92 }}
                    className="transition-transform duration-200"
                  >
                    <span style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      background: bg,
                      color: color,
                      flexShrink: 0,
                    }}>
                      <Icon size={size} />
                    </span>
                  </motion.a>
                ))}

                <div className="w-px h-8 bg-sky-400/30" />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
