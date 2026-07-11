import { useState } from "react";
import { motion } from "framer-motion";
import { CloudCog, Palette, Braces, Mail, FileUser, Infinity } from "lucide-react";
import { SiKubernetes, SiDocker, SiReact, SiTerraform } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import aboutMePic from "../assets/about_me.png";

const cards = [
  {
    icon: Palette,
    title: "Design Intuitive Interfaces",
    desc: "Prototyping user-centric UI/UX designs in Figma with a focus on seamless and engaging user experiences.",
    tags: "Figma · Adobe XD · User Research",
    iconColor: "text-pink-400",
    ringColor: "ring-pink-400/30",
    bgColor: "bg-pink-400/10",
    borderColor: "border-pink-400/50",
    popupShadow: "shadow-[0_10px_40px_-10px_rgba(244,114,182,0.4)]",
  },
  {
    icon: Braces,
    title: "Develop Robust Applications",
    desc: "Building scalable, full-stack applications and microservices using modern web technologies.",
    tags: "React · Node.js · PostgreSQL · TypeScript",
    iconColor: "text-sky-400",
    ringColor: "ring-sky-400/30",
    bgColor: "bg-sky-400/10",
    borderColor: "border-sky-400/50",
    popupShadow: "shadow-[0_10px_40px_-10px_rgba(56,189,248,0.4)]",
  },
  {
    icon: CloudCog,
    title: "Deploy Scalable Infrastructure",
    desc: "Automating CI/CD pipelines and orchestrating cloud environments with Docker, Kubernetes, and AWS.",
    tags: "Docker · Kubernetes · Terraform · ArgoCD",
    iconColor: "text-orange-400",
    ringColor: "ring-orange-400/30",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/50",
    popupShadow: "shadow-[0_10px_40px_-10px_rgba(251,146,60,0.4)]",
  },
];

const pillTags = [
  { 
    label: "Kubernetes", icon: SiKubernetes, color: "#326CE5", bg: "rgba(50,108,229,0.15)",
    top: "12%", left: "-6%", delay: 0 
  },
  { 
    label: "Docker", icon: SiDocker, color: "#2496ED", bg: "rgba(36,150,237,0.15)",
    top: "8%", right: "-3%", delay: 0.3 
  },
  { 
    label: "CI/CD", icon: Infinity, color: "#22C55E", bg: "rgba(34,197,94,0.15)",
    top: "78%", left: "-1%", delay: 0.6 
  },
  { 
    label: "Terraform", icon: SiTerraform, color: "#7C3AED", bg: "rgba(124,58,237,0.15)",
    top: "75%", right: "-6%", delay: 0.9 
  },
  { 
    label: "AWS", icon: FaAws, color: "#FF9900", bg: "rgba(255,153,0,0.15)",
    top: "42%", left: "-10%", delay: 1.2 
  },
  { 
    label: "React", icon: SiReact, color: "#61DAFB", bg: "rgba(97,218,251,0.15)",
    top: "45%", right: "-10%", delay: 1.5 
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

export const AboutSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="about" className="pt-[140px] pb-12 md:pb-24 px-4 relative overflow-hidden">
      {/* ── Transition Glow Bridge (Hero to About) ── */}
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-7xl">
        {/* heading */}
        <motion.div 
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />
        </motion.div>

        {/* ── TWO-COLUMN LAYOUT: PHOTO (Left) | BIO TEXT (Right) ── */}
        {/* Grid is set to items-center to perfectly vertically center both columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-250px)] mb-10 md:mb-12">
          
          {/* ── Left: Photo & Pills (50% width) ── */}
          <motion.div 
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-center items-center order-1 relative w-full h-full"
          >
            <div className="relative w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px]">
              
              {/* Decorative shapes (match hero minimal style) */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -left-4 w-16 h-16 border border-sky-400/20 rounded-full" 
              />
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -right-4 w-12 h-12 border border-sky-400/20"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              />

              {/* Circular Photo */}
              <div 
                className="w-full h-full rounded-full overflow-hidden border-2 border-sky-400/60 relative z-10"
                style={{ boxShadow: "0 0 35px 6px rgba(56,189,233,0.3)" }}
              >
                <img 
                  src={aboutMePic} 
                  alt="Judechihan" 
                  className="w-full h-full object-cover" 
                  style={{ objectPosition: "center 30%" }}
                  draggable={false}
                />
              </div>

              {/* Floating Skill Pills */}
              {pillTags.map((pill) => (
                <motion.div
                  key={pill.label}
                  className="absolute z-20 flex items-center gap-[6px] px-4 py-2 rounded-full text-[14px] font-semibold backdrop-blur-md whitespace-nowrap"
                  style={{
                    background: pill.bg,
                    border: `1px solid ${pill.color}`,
                    color: pill.color,
                    boxShadow: `0 0 12px ${pill.color}40`,
                    top: pill.top,
                    left: pill.left,
                    right: pill.right,
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                    delay: pill.delay 
                  }}
                >
                  <pill.icon style={{ width: "16px", height: "16px" }} />
                  {pill.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Bio Text (50% width) ── */}
          <motion.div 
            variants={fadeUp(0.35)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col justify-center gap-5 order-2 lg:pl-10 text-center sm:text-left w-full h-full"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-foreground/90 leading-snug">
              Computer Science Undergraduate
              <span className="block text-primary/80 text-xl sm:text-2xl font-medium mt-1.5">
                & DevOps Enthusiast
              </span>
            </h3>

            {/* ── Feature Icons Row (Tooltip Hovers) ── */}
            <div className="flex justify-center sm:justify-start gap-6 py-2 relative z-30">
              {cards.map((card, i) => {
                const Icon = card.icon;
                const isActive = activeCard === i;
                return (
                  <div 
                    key={card.title} 
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setActiveCard(i)}
                    onMouseLeave={() => setActiveCard(null)}
                    onClick={() => setActiveCard(isActive ? null : i)}
                  >
                    {/* Icon Circle Default State */}
                    <div className={`w-[56px] h-[56px] rounded-full flex items-center justify-center ${card.bgColor} ring-1 ${card.ringColor} transition-all duration-300 ${isActive ? 'scale-110 shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'hover:scale-110'}`}>
                      <Icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>

                    {/* Tooltip Popup */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        opacity: isActive ? 1 : 0, 
                        scale: isActive ? 1 : 0.9,
                        y: isActive ? 0 : 10,
                        pointerEvents: isActive ? "auto" : "none"
                      }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={`absolute bottom-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[260px] p-5 rounded-2xl border ${card.borderColor} ${card.popupShadow} backdrop-blur-xl origin-bottom`}
                      style={{ background: "rgba(15,23,42,0.95)" }}
                    >
                      <h4 
                        className={`font-bold text-[16px] ${card.iconColor} mb-2`}
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {card.title}
                      </h4>
                      <p 
                        className="text-muted-foreground text-[13px] leading-relaxed mb-3"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {card.desc}
                      </p>
                      <p className={`text-[11px] font-semibold ${card.iconColor} tracking-wide opacity-90`}>
                        {card.tags}
                      </p>
                      
                      {/* Tooltip Arrow */}
                      <div className={`absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-3 h-3 border-b border-r ${card.borderColor} rotate-45`} style={{ background: "rgba(15,23,42,0.95)" }} />
                    </motion.div>
                  </div>
                );
              })}
            </div>

            <p 
              className="text-muted-foreground text-sm sm:text-base leading-[1.6]"
              style={{ 
                textAlign: "justify", 
                textAlignLast: "left", 
                hyphens: "auto", 
                WebkitHyphens: "auto",
                wordSpacing: "-0.02em" 
              }}
            >
              Currently pursuing a B.Sc. in Computer Science at Eastern
              University, Sri Lanka, while building high-availability cloud
              architectures and automated pipelines.
            </p>

            <p 
              className="text-muted-foreground text-sm sm:text-base leading-[1.6]"
              style={{ 
                textAlign: "justify", 
                textAlignLast: "left", 
                hyphens: "auto", 
                WebkitHyphens: "auto",
                wordSpacing: "-0.02em" 
              }}
            >
              I bridge the gap between design and infrastructure, specializing
              in container orchestration and GitOps workflows to deliver
              seamless, scalable software solutions.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full border border-sky-400/50 bg-transparent text-sky-400 text-sm font-medium transition-all duration-300 hover:border-sky-300 hover:bg-sky-400/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-95 flex items-center justify-center gap-2 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                Get In Touch
              </a>

              <a
                href="/CV/MyResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full border border-sky-400/50 bg-transparent text-sky-400 text-sm font-medium transition-all duration-300 hover:border-sky-300 hover:bg-sky-400/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-95 flex items-center justify-center gap-2 group"
              >
                <FileUser className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
