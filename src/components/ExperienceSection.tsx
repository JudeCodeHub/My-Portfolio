"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useInView,
} from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Zap, type LucideIcon } from "lucide-react";
import Shuffle from "./ui/Shuffle";
import {
  EXPERIENCE_JOURNEY,
  EDUCATION_JOURNEY,
  type JourneyEntry,
} from "@/data/journey";

interface Tone {
  label: string;
  Icon: LucideIcon;
  accentVar: string;
  glowVar: string;
  slideFrom: number;
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay },
  },
});

const TONE: Record<"exp" | "edu", Tone> = {
  exp: {
    label: "experience",
    Icon: Briefcase,
    accentVar: "var(--exp-accent)",
    glowVar: "var(--exp-glow)",
    slideFrom: 24,
  },
  edu: {
    label: "education",
    Icon: GraduationCap,
    accentVar: "var(--edu-accent)",
    glowVar: "var(--edu-glow)",
    slideFrom: -24,
  },
};

const TYPE_SPEED_MS = 14;
const LINE_PAUSE_MS = 350;

interface TypedBulletsProps {
  bullets: string[];
  active: boolean;
  reduceMotion: boolean | null;
}

function TypedBullets({ bullets, active, reduceMotion }: TypedBulletsProps) {
  const [lineIndex, setLineIndex] = useState(reduceMotion ? bullets.length : 0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || !active) return;
    if (lineIndex >= bullets.length) return;

    const currentLine = bullets[lineIndex];
    if (charIndex >= currentLine.length) {
      const t = setTimeout(() => {
        setLineIndex((v) => v + 1);
        setCharIndex(0);
      }, LINE_PAUSE_MS);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => setCharIndex((v) => v + 1), TYPE_SPEED_MS);
    return () => clearTimeout(t);
  }, [active, reduceMotion, lineIndex, charIndex, bullets]);

  const doneLines = reduceMotion ? bullets : bullets.slice(0, lineIndex);
  const typingLine =
    !reduceMotion && lineIndex < bullets.length
      ? bullets[lineIndex].slice(0, charIndex)
      : null;

  return (
    <ul className="space-y-2.5 min-h-px">
      {doneLines.map((b, bi) => (
        <li
          key={bi}
          className="text-sm text-stone-600 dark:text-white/70 text-left flex gap-2.5"
        >
          <span className="shrink-0" style={{ color: "var(--tone-accent)" }}>
            ›
          </span>
          {b}
        </li>
      ))}
      {typingLine !== null && (
        <li className="text-sm text-stone-600 dark:text-white/70 text-left flex gap-2.5">
          <span className="shrink-0" style={{ color: "var(--tone-accent)" }}>
            ›
          </span>
          <span>
            {typingLine}
            <span
              className="inline-block w-1.5 h-3.5 ml-0.5 align-middle animate-pulse"
              style={{ backgroundColor: "var(--tone-accent)" }}
            />
          </span>
        </li>
      )}
    </ul>
  );
}

interface JourneyCardProps {
  entry: JourneyEntry;
  tone: Tone;
  index: number;
  reduceMotion: boolean | null;
}

function JourneyCard({ entry, tone, index, reduceMotion }: JourneyCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const cardVariants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
      }
    : {
        hidden: { opacity: 0, x: tone.slideFrom },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, ease: "easeOut" as const, delay: index * 0.12 },
        },
      };

  const BadgeIcon = entry.badge === "Current" ? Zap : tone.Icon;

  return (
    <div
      className="relative pl-5.5"
      style={
        {
          "--tone-accent": tone.accentVar,
          "--tone-glow": tone.glowVar,
        } as CSSProperties
      }
    >
      <motion.span
        initial={reduceMotion ? { opacity: 0 } : { scale: 0 }}
        whileInView={reduceMotion ? { opacity: 1 } : { scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.12 }}
        className="absolute -left-1.5 top-6 -translate-y-1/2 z-10 flex items-center justify-center"
      >
        {entry.current && !reduceMotion && (
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: "var(--tone-accent)" }}
            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" as const }}
          />
        )}
        <span
          className="relative w-3 h-3 rounded-full border-2 dark:shadow-[0_0_8px_var(--tone-glow)]"
          style={{
            borderColor: "var(--tone-accent)",
            backgroundColor: entry.current
              ? "var(--tone-accent)"
              : "hsl(var(--background))",
          }}
        />
      </motion.span>

      <span
        className="absolute left-1.5 top-6 -translate-y-1/2 w-4 h-px opacity-40"
        style={{ backgroundColor: "var(--tone-accent)" }}
      />

      <motion.div
        ref={cardRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={cardVariants}
        className="group relative flex flex-col lg:min-h-135 rounded-2xl bg-white dark:bg-white/3 backdrop-blur-md border border-stone-200 dark:border-white/8 shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.08)] dark:shadow-none hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_25px_var(--tone-glow)] hover:border-(--tone-accent) hover:-translate-y-1 transition-all duration-250 ease-out overflow-hidden"
      >
        <div className="h-9 bg-stone-100 dark:bg-[#1a1a1a] border-b border-stone-200 dark:border-white/5 flex items-center px-4 justify-between">
          <span className="w-14" />
          <span className="font-mono text-[11px] text-stone-400 dark:text-white/30 select-none">
            ~/{tone.label}.log
          </span>
          <div className="flex gap-1.5 w-14 justify-end">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
        </div>

        <div className="relative flex flex-col flex-1 p-6">
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(to right, var(--tone-accent), transparent)",
            }}
          />

          <div className="flex items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-1.5 font-mono text-xs text-stone-500 dark:text-white/40">
              <Calendar size={13} />
              {entry.dates}
            </div>
            <span
              className="shrink-0 inline-flex items-center gap-1.5 text-[10px] font-mono font-bold px-3 py-1.5 rounded-lg leading-none text-white tracking-wide"
              style={{
                background: `linear-gradient(0deg, color-mix(in srgb, var(--tone-accent) 65%, black) 0%, var(--tone-accent) 100%)`,
                boxShadow: `0 0.5em 1em -0.4em color-mix(in srgb, var(--tone-accent) 70%, transparent)`,
              }}
            >
              <BadgeIcon size={11} />
              {entry.badge}
            </span>
          </div>

          <h3
            className={`font-mono font-bold text-left text-stone-900 dark:text-white text-lg md:text-xl ${entry.org ? "mb-1.5" : "mb-5"}`}
          >
            {entry.role}
          </h3>
          {entry.org && (
            <p
              className="text-sm md:text-base font-medium mb-5 text-left"
              style={{ color: "var(--tone-accent)" }}
            >
              {entry.org}
            </p>
          )}

          <TypedBullets
            bullets={entry.bullets}
            active={isInView}
            reduceMotion={reduceMotion}
          />

          {entry.chips && entry.chips.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-stone-100 dark:border-white/5">
              {entry.chips.map((chip) => (
                <span
                  key={chip}
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-stone-500 dark:text-white/60 hover:border-(--tone-accent) hover:text-(--tone-accent) transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}

          <div className="flex justify-center mt-4">
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: "var(--tone-accent)",
                boxShadow: "0 0 8px var(--tone-glow)",
              }}
              animate={reduceMotion ? undefined : { opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface JourneyColumnProps {
  kind: "exp" | "edu";
  entries: JourneyEntry[];
  orderClass: string;
}

function JourneyColumn({ kind, entries, orderClass }: JourneyColumnProps) {
  const tone = TONE[kind];
  const columnRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: columnRef,
    offset: ["start 0.85", "end 0.5"],
  });
  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className={orderClass}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-2 mb-6 pl-5.5 font-mono text-sm font-bold uppercase tracking-wider"
        style={{ color: tone.accentVar }}
      >
        <tone.Icon size={16} />
        {tone.label}
      </motion.div>

      <div ref={columnRef} className="relative">
        <div
          className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
          style={{
            backgroundColor: `color-mix(in srgb, ${tone.accentVar} 15%, transparent)`,
          }}
        />
        <motion.div
          className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
          style={{
            scaleY: reduceMotion ? 1 : railScale,
            transformOrigin: "top",
            background: `linear-gradient(to bottom, ${tone.accentVar}, transparent)`,
          }}
        />

        <div className="flex flex-col gap-8">
          {entries.map((entry, i) => (
            <JourneyCard
              key={i}
              entry={entry}
              tone={tone}
              index={i}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full md:min-h-screen lg:min-h-[85vh] py-12 md:py-20 lg:py-12 flex flex-col items-center px-4 relative overflow-hidden scroll-mt-20 lg:scroll-mt-0"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "0px" }}
        variants={fadeUp(0.1)}
        className="w-full max-w-5xl mb-3 md:mb-4 text-center z-10"
      >
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-stone-900 dark:text-white tracking-tight flex gap-3 justify-center items-center">
          <span className="text-orange-500">~$</span>
          <Shuffle text="journey" loop={true} loopDelay={3} />
        </h2>
      </motion.div>

      <div className="w-full max-w-5xl z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-12">
        <JourneyColumn
          kind="edu"
          entries={EDUCATION_JOURNEY}
          orderClass="order-2 md:order-1 md:col-span-5"
        />
        <JourneyColumn
          kind="exp"
          entries={EXPERIENCE_JOURNEY}
          orderClass="order-1 md:order-2 md:col-span-7"
        />
      </div>
    </section>
  );
};
