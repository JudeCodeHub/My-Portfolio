import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Shuffle from "./ui/Shuffle";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

const EXPERIENCE_DATA = [
  {
    role: "Software Engineer Intern",
    org: "X4 Digital Labs",
    period: "Jul 2026 — Present",
    bullets: [
      "Build and ship full-stack features across Next.js/React frontends and NestJS APIs in TypeScript, working from design specs through to production.",
      "Containerize services with Docker and work on Linux-based deployments to AWS, keeping local and deployed environments consistent.",
      "Collaborate through Git-based workflows and contribute to systems design discussions on service structure and data flow.",
    ],
    tech: [
      "Next.js",
      "NestJS",
      "React.js",
      "TypeScript",
      "Docker",
      "Linux",
      "Git",
      "AWS",
      "Systems Design",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full md:min-h-screen lg:min-h-[85vh] py-12 md:py-20 lg:py-12 flex flex-col items-center px-4 relative overflow-hidden scroll-mt-20 lg:scroll-mt-0"
    >
      {/* Background glow matching the terminal theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "0px" }}
        variants={fadeUp(0.1)}
        className="w-full max-w-3xl mb-10 md:mb-14 text-center z-10"
      >
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-slate-800 dark:text-white tracking-tight flex gap-3 justify-center items-center">
          <span className="text-orange-500">~$</span>
          <Shuffle text="experience" loop={true} loopDelay={3} />
        </h2>
      </motion.div>

      <div className="w-full max-w-3xl pr-10 md:pr-0 z-10">
        {/* Git-graph timeline */}
        <div className="relative pl-1 md:pl-1">
          {EXPERIENCE_DATA.map((entry, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp(i * 0.15)}
              className="relative pb-12"
            >
              {/* Vertical track segment, scoped to this entry so it shares
                  the same coordinate space as the horizontal connector below
                  and always meets it exactly at the corner. */}
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
                style={{ transformOrigin: "top" }}
                className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 to-orange-500/10 z-10"
              />
              {/* Straight connector from the vertical track into the card, no marker */}
              <span className="absolute left-3.5 top-4.75 w-5.5 h-px bg-orange-500/40" />

              <div className="pl-9">
                <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] overflow-hidden shadow-xl">
                  <div className="h-11 bg-slate-100 dark:bg-[#1a1a1a] border-b border-slate-200 dark:border-white/5 flex items-center px-5 gap-2">
                    <Briefcase size={15} className="text-orange-500 shrink-0" />
                    <span className="text-sm font-mono text-slate-500 dark:text-white/40 truncate">
                      {entry.period}
                    </span>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="font-mono font-bold text-slate-800 dark:text-white text-xl md:text-2xl">
                      {entry.role}
                    </h3>
                    <p className="text-orange-500 text-base md:text-lg font-medium mb-5">
                      {entry.org}
                    </p>
                    <ul className="space-y-2.5">
                      {entry.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="text-sm md:text-base text-slate-600 dark:text-white/70 flex gap-2.5"
                        >
                          <span className="text-orange-500/60 shrink-0">›</span>
                          <span className="text-justify">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {entry.tech && entry.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-100 dark:border-white/5">
                        {entry.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/60 hover:border-orange-500 hover:text-orange-500 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
