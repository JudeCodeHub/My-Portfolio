import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaBehance,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaAws,
} from "react-icons/fa";
import { SiReact } from "react-icons/si";
import StackIcon from "tech-stack-icons";
import profilePic from "../assets/me5.png";
import TextType from "./ui/TextType";
import MoltenMetal from "./ui/MoltenMetal";
import ProfileCard from "./ui/ProfileCard";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/JudeCodeHub",
    label: "GH",
    color: "text-black group-hover:text-white",
    hoverBg: "hover:bg-black",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/judechihan",
    label: "IN",
    color: "text-[#0A66C2] group-hover:text-white",
    hoverBg: "hover:bg-[#0A66C2]",
  },
  {
    icon: FaMedium,
    href: "https://medium.com/@Judechihan",
    label: "MD",
    color: "text-black group-hover:text-white",
    hoverBg: "hover:bg-black",
  },
  {
    icon: FaBehance,
    href: "https://www.behance.net/jude_dev",
    label: "BE",
    color: "text-[#1769ff] group-hover:text-white",
    hoverBg: "hover:bg-[#1769ff]",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/judejochimson_judechihan",
    label: "IG",
    color: "text-[#E1306C] group-hover:text-white",
    hoverBg: "hover:bg-[#E1306C]",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61563287920654",
    label: "FB",
    color: "text-[#1877F2] group-hover:text-white",
    hoverBg: "hover:bg-[#1877F2]",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/94776345280",
    label: "WA",
    color: "text-[#25D366] group-hover:text-white",
    hoverBg: "hover:bg-[#25D366]",
  },
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <style>{`
        @keyframes mouse-scroll {
          0% { opacity: 0; transform: translateY(-4px); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(12px); }
        }
        .animate-mouse-scroll {
          animation: mouse-scroll 1.5s cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite;
        }
      `}</style>

      {/* ── Main Layout: Asymmetrical & Structural ── */}
      <div className="container relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 xl:gap-8 items-center lg:items-start">
          <div className="col-span-1 lg:col-span-6 flex flex-col gap-8 text-slate-800 dark:text-white xl:ml-[80px] lg:ml-[20px] lg:mt-[20px] mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start gap-4"
            >
              <div className="hidden md:block text-slate-700 dark:text-white/60 italic text-sm md:text-base font-medium dark:font-light tracking-wider text-left">
                "When something is important enough,{" "}
                <br className="hidden sm:block" /> you do it even if the odds
                are not in your favor."
              </div>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-current opacity-50" />
                <span className="font-mono text-xs tracking-[0.3em] uppercase opacity-70 text-orange-500">
                  System Online // v1.0
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="flex flex-col"
            >
              <h1 className="w-fit text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] xl:text-[2.8rem] font-extrabold leading-[1.1] tracking-tight uppercase min-h-[1.2em] whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-[#c2410c] via-[#f97316] to-[#fdba74]">
                <TextType
                  text={[
                    "Judechihan",
                    "Software Engineer",
                    "DevOps Enthusiast",
                  ]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={2000}
                  cursorClassName="text-[#f97316] font-light"
                />
              </h1>
              <div className="mt-6 md:mt-8">
                <p className="text-sm md:text-base lg:text-sm xl:text-base font-mono max-w-xl opacity-80 leading-relaxed border-l-2 border-foreground/30 pl-4 text-left">
                  Building the engine, not just the surface. Focused on scalable
                  systems and resilient infrastructure.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex flex-row items-center justify-start gap-2 md:gap-4 mt-4 w-full"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 md:gap-3 px-4 py-3 md:px-8 md:py-4 bg-foreground text-background font-mono text-xs md:text-sm uppercase tracking-widest overflow-hidden transition-transform active:scale-95"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2 text-center whitespace-nowrap">
                  <Terminal className="w-3 h-3 md:w-4 md:h-4" />
                  DEPLOYED_WORK
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 md:gap-3 px-4 py-3 md:px-8 md:py-4 border border-foreground/30 hover:border-foreground bg-transparent font-mono text-xs md:text-sm uppercase tracking-widest transition-colors active:scale-95 whitespace-nowrap"
              >
                Connect <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Content (Spans 6 cols) - Interactive Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="col-span-1 lg:col-span-6 relative flex flex-col items-center lg:items-center mt-12 lg:mt-0 xl:-mt-8"
          >
            <div className="w-full max-w-sm lg:max-w-[400px] xl:max-w-[500px] mx-auto relative z-20">
              <ProfileCard
                name=""
                title=""
                handle="judechihan"
                status="System Online"
                contactText="Initialize"
                innerGradient="transparent"
                avatarUrl={profilePic}
                showUserInfo={false}
                enableTilt={false}
                behindGlowEnabled={true}
                behindGlowColor="rgba(249, 115, 22, 0.4)"
                className="w-full"
              />

              <div className="hidden md:flex absolute -right-6 lg:-right-16 top-0 bottom-0 my-auto h-fit flex-col gap-4 z-30 justify-center">
                {socials.map((social, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-10 h-10 bg-slate-200/80 dark:bg-white backdrop-blur-md border border-black/10 dark:border-white/20 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:border-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] ${social.hoverBg}`}
                  >
                    <social.icon
                      size={21}
                      className={`transition-colors duration-300 ${social.color}`}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Socials block - row layout under the card */}
              <div className="flex md:hidden w-full flex-row flex-wrap justify-center gap-4 mt-8 z-30">
                {socials.map((social, i) => (
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-10 h-10 bg-slate-200/80 dark:bg-white backdrop-blur-md border border-black/10 dark:border-white/20 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:border-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] ${social.hoverBg}`}
                  >
                    <social.icon
                      size={21}
                      className={`transition-colors duration-300 ${social.color}`}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Universal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hidden md:flex absolute bottom-10 left-0 right-0 mx-auto transform -translate-x-6 flex-col items-center gap-3 z-30 cursor-pointer group w-fit"
        onClick={() => {
          window.location.hash = "#about";
          window.dispatchEvent(
            new CustomEvent("navigateSection", { detail: "about" }),
          );
        }}
      >
        <div className="w-[28px] h-[46px] border-2 border-slate-400 dark:border-white/40 group-hover:border-orange-500/70 rounded-full flex justify-center p-1.5 transition-colors duration-300">
          <div className="w-1.5 h-2 bg-orange-500 rounded-full animate-mouse-scroll" />
        </div>
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-slate-500 dark:text-white/70 group-hover:text-orange-500 transition-colors duration-300">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};
