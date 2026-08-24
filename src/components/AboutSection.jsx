import { motion } from "framer-motion";
import { Mail, FileUser } from "lucide-react";
import aboutMePic from "../assets/aboutme.png";
import MoltenMetal from "./ui/MoltenMetal";
import CircularText from "./ui/CircularText";
import Shuffle from "./ui/Shuffle";



const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

const fadeUpSlow = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: [0.25, 1, 0.5, 1], delay },
  },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: "-100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 2.2, ease: [0.25, 1, 0.5, 1], delay },
  },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.4, ease: [0.25, 1, 0.5, 1], delay },
  },
});

const fadeLeftCard = (delay = 0) => ({
  hidden: { opacity: 0, x: "-100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 3.5, ease: [0.25, 1, 0.5, 1], delay },
  },
});

const fadeRightCard = (delay = 0) => ({
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 3.5, ease: [0.25, 1, 0.5, 1], delay },
  },
});

const fadeUpCard = (delay = 0) => ({
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2.2, ease: [0.25, 1, 0.5, 1], delay },
  },
});

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen pt-28 pb-16 px-4 overflow-hidden block md:flex md:flex-col md:justify-center md:items-center scroll-mt-10 md:scroll-mt-15">
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "0px" }}
        className="container mx-auto max-w-7xl relative z-20 w-full"
      >
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 lg:gap-16 mb-2 md:mb-6 lg:mb-2 mt-0 md:mt-4 lg:mt-6">
          {/* Empty spacer on desktop to push the heading to the right column */}
          <div className="hidden lg:block lg:col-span-5"></div>
          
          <motion.div
            variants={fadeUp(0.1)}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-white tracking-tight flex gap-3 justify-center lg:justify-start items-center">
              <span className="text-orange-500">~$</span>
              <Shuffle text="whoami" loop={true} loopDelay={3} />
            </h2>
          </motion.div>
        </div>

        {/* ── SPLIT LAYOUT: PHOTO (Left) | BIO TEXT (Right) ── */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center mb-8 md:mb-12 mt-0"
        >
          
          {/* ── Left: Profile Image ── */}
          <motion.div
            variants={fadeUp(0.2)}
            className="lg:col-span-5 flex justify-center items-center relative mt-2 md:mt-4 lg:-mt-4"
          >
            <div className="relative w-[200px] h-[200px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px]">
              
              {/* Spinning Text Ring */}
              <div className="absolute -inset-4 md:-inset-6 lg:-inset-8 z-20 pointer-events-none flex items-center justify-center">
                <CircularText
                  text="DESIGN • DEVELOP • DEPLOY • DESIGN • DEVELOP • DEPLOY • "
                  onHover="speedUp"
                  spinDuration={25}
                  className="text-white drop-shadow-[0_0_8px_rgba(249,115,22,1)] text-[10px] md:text-[14px] lg:text-[16px] tracking-[0.3em] uppercase pointer-events-auto"
                />
              </div>



              {/* Circular Photo */}
              <div
                className="w-full h-full rounded-full overflow-hidden border border-orange-500/40 relative z-10 bg-[#090500]"
                style={{ boxShadow: "0 0 40px 10px rgba(249,115,22,0.15)" }}
              >
                <img
                  src={aboutMePic}
                  alt="Judechihan"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 20%" }}
                  draggable={false}
                />
              </div>
            </div>
          </motion.div>

          {/* ── Right: Bio Text ── */}
          <motion.div
            variants={fadeUp(0.4)}
            className="lg:col-span-7 flex flex-col justify-center text-center md:text-left mt-6 md:mt-0 lg:mt-0"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-white leading-snug mb-2 md:mb-3 tracking-tight">
              Software Engineer
            </h3>
            <p className="text-orange-500 font-medium tracking-widest uppercase text-xs md:text-base mb-4 md:mb-8">
              & DevOps Enthusiast
            </p>

            <div className="text-white/80 text-sm md:text-lg leading-relaxed md:leading-loose max-w-2xl mx-auto md:mx-0 font-light tracking-wide text-center md:text-left">
              <p>
                Computer Science undergraduate at Eastern University, Sri Lanka, currently shipping code as a Software Engineer Intern. I build full-stack apps with React and Next.js, then deploy and automate them with Docker, Kubernetes, and Terraform. Clean on the front end, solid underneath, and that's the goal every time.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-10 justify-center md:justify-start">
              <a
                href="#contact"
                onClick={(e) => {
                  if (window.innerWidth >= 768) {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('navigateSection', { detail: 'contact' }));
                  }
                }}
                className="px-8 py-3.5 rounded-full border border-orange-500/50 bg-orange-500/10 text-orange-500 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center justify-center gap-3 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Get In Touch
              </a>
              <a
                href="/CV/MyResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full border border-white/20 bg-transparent text-white/90 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-3 group"
              >
                <FileUser className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Download CV
              </a>
            </div>
          </motion.div>
        </motion.div>



        {/* ── BOTTOM: QUICK STATS ── */}
        <motion.div 
          variants={fadeUpSlow(0.8)}
          className="w-full mt-4 md:mt-12 pt-4 md:pt-8 pb-4 flex flex-row flex-wrap md:flex-nowrap justify-center items-center md:divide-x divide-orange-500/40 gap-y-6 md:gap-y-0"
        >
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center group cursor-default w-1/2 md:w-1/3 py-2 md:py-0"
          >
            <span className="text-3xl md:text-5xl font-black text-white mb-1 md:mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:text-orange-500 group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all duration-300">5+</span>
            <span className="text-orange-500/70 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase">Projects Built</span>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center group cursor-default w-1/2 md:w-1/3 py-2 md:py-0 border-l border-orange-500/40 md:border-none"
          >
            <span className="text-3xl md:text-5xl font-black text-white mb-1 md:mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:text-orange-500 group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all duration-300">WSO2</span>
            <span className="text-orange-500/70 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase">Trained</span>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center group cursor-default w-full md:w-1/3 py-4 md:py-0 mt-2 md:mt-0 md:border-l border-orange-500/40"
          >
            <span className="text-3xl md:text-5xl font-black text-white mb-1 md:mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:text-orange-500 group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all duration-300">10+</span>
            <span className="text-orange-500/70 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase">Technologies</span>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};

