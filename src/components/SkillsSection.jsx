import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import { GithubIcon } from "hugeicons-react";
import Shuffle from "./ui/Shuffle";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

const graphData = [
  {
    id: "languages",
    title: "LANGUAGES",
    skills: ["js", "typescript", "python", "java"],
  },
  {
    id: "frontend",
    title: "FRONTEND",
    skills: ["html5", "css3", "react", "nextjs2", "tailwindcss"],
  },
  {
    id: "backend",
    title: "BACKEND",
    skills: ["nodejs", "nestjs", "postgresql", "mongodb"],
  },
  {
    id: "devops",
    title: "DEVOPS",
    skills: [
      "git",
      "docker",
      "github2",
      "kubernetes",
      "linux",
      "aws",
      "terraform",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen py-12 md:pt-20 md:pb-28 flex flex-col justify-start items-center px-4 relative overflow-hidden scroll-mt-20"
    >
      {/* Deep Space Background Glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "0px" }}
        variants={fadeUp(0.1)}
        className="w-full max-w-6xl mb-1 md:mb-2 z-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-white tracking-tight flex gap-3 justify-center">
          <span className="text-orange-500">~$</span>
          <Shuffle text="stack" loop={true} loopDelay={3} />
        </h2>
        <p className="text-white/90 font-mono text-[15px] mt-2 uppercase tracking-[0.3em]">
          // Technologies & Tools I work with
        </p>
      </motion.div>

      <div className="w-full max-w-5xl flex flex-col gap-16 md:gap-10 z-10 mx-auto mt-4 md:mt-6">
        {graphData.map((node, i) => (
          <div
            key={node.id}
            className="relative flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full"
          >
            {/* Main Category Hub (Node) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center"
            >
              {/* Pulsing Orbital Rings */}
              <div className="absolute inset-0 rounded-full border border-orange-500/30 animate-[ping_3s_linear_infinite]" />
              <div
                className="absolute inset-2 rounded-full border border-orange-500/20 animate-[spin_10s_linear_infinite]"
                style={{ borderTopColor: "transparent" }}
              />
              <div
                className="absolute inset-4 rounded-full border border-orange-500/20 animate-[spin_15s_linear_infinite_reverse]"
                style={{ borderBottomColor: "transparent" }}
              />

              {/* Core Node Body */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/80 border-2 border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.4)] flex items-center justify-center backdrop-blur-sm z-10 transition-transform duration-500 hover:scale-110 cursor-pointer">
                <span className="font-mono text-[9px] md:text-[10px] font-bold text-white tracking-widest text-center px-2">
                  {node.title}
                </span>
              </div>
            </motion.div>

            {/* Neural Connection Line (Desktop) */}
            <div className="hidden md:block absolute left-[128px] right-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-orange-500/50 to-transparent -z-10" />

            {/* Skill Nodes Cluster */}
            <div className="flex-1 flex flex-wrap justify-center md:justify-start items-center gap-x-3 gap-y-10 md:gap-5 md:gap-y-10 relative z-10 mt-2 md:mt-0">
              {node.skills.map((skill, sIdx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 + sIdx * 0.1 }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="group relative w-14 h-14 md:w-16 md:h-16 bg-[#0a0a0a] border border-white/10 hover:border-orange-500 rounded-lg flex flex-col items-center justify-center cursor-crosshair transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                >
                  {/* Skill Icon */}
                  <div className="w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.5)] flex items-center justify-center">
                    {skill === "github2" ? (
                      <GithubIcon className="w-full h-full text-white" />
                    ) : (
                      <StackIcon name={skill} />
                    )}
                  </div>

                  {/* Hardware Connection Node (Dot attaching to the main line) */}

                  {/* Floating Data Label */}
                  <div className="absolute -bottom-6 font-mono font-bold text-[9px] md:text-[10px] text-white/90 group-hover:text-orange-500 tracking-widest uppercase transition-colors duration-300 pointer-events-none whitespace-nowrap">
                    {skill === "github2"
                      ? "github"
                      : skill === "nextjs2"
                        ? "nextjs"
                        : skill}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
