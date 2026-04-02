import { Server, Terminal, Layout, Code, Mail, FileUser } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 dark:bg-sky-500/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Summary & Goals */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground/90">
              Computer Science Undergraduate & DevOps Enthusiast
            </h3>

            <p className="text-muted-foreground leading-relaxed text-justify">
              Currently pursuing a B.Sc. in Computer Science at Eastern University, Sri Lanka, I maintain a 3.78 GPA while building high-availability cloud architectures and automated pipelines.
            </p>

            <p className="text-muted-foreground leading-relaxed text-justify">
              I bridge the gap between design and infrastructure, specializing in container orchestration and GitOps workflows to deliver seamless, scalable software solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              {/* Get In Touch Button */}
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-sky-400/50 bg-transparent text-sky-500 dark:text-sky-400 font-medium transition-all duration-300 hover:border-sky-400 hover:bg-sky-400/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] active:scale-95 flex items-center justify-center gap-2 group"
              >
                <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                Get In Touch
              </a>

              {/* Download CV Button */}
              <a
                href="/MyResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-sky-400/50 bg-transparent text-sky-500 dark:text-sky-400 font-medium transition-all duration-300 hover:border-sky-400 hover:bg-sky-400/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] active:scale-95 flex items-center justify-center gap-2 group"
              >
                <FileUser className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side: Skill Cards */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* Card 1: Cloud & DevOps */}
            <div className="group p-6 rounded-2xl bg-card/40 dark:bg-sky-950/10 border border-black/5 dark:border-sky-400/10 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card/60 dark:hover:bg-sky-900/20 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex shrink-0 items-center justify-center p-3 w-14 h-14 rounded-xl bg-primary/10 ring-1 ring-primary/30 group-hover:scale-110 transition-transform">
                  <Terminal className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg text-foreground">Cloud & DevOps</h4>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                    Mastering AWS, Docker, Kubernetes, and automated CI/CD workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: UI/UX Design */}
            <div className="group p-6 rounded-2xl bg-card/40 dark:bg-sky-950/10 border border-black/5 dark:border-sky-400/10 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card/60 dark:hover:bg-sky-900/20 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex shrink-0 items-center justify-center p-3 w-14 h-14 rounded-xl bg-primary/10 ring-1 ring-primary/30 group-hover:scale-110 transition-transform">
                  <Layout className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg text-foreground">UI/UX Design</h4>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                    Top 8 Finalist in National UI/UX competitions; prototyping in Figma.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Software Engineering */}
            <div className="group p-6 rounded-2xl bg-card/40 dark:bg-sky-950/10 border border-black/5 dark:border-sky-400/10 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card/60 dark:hover:bg-sky-900/20 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex shrink-0 items-center justify-center p-3 w-14 h-14 rounded-xl bg-primary/10 ring-1 ring-primary/30 group-hover:scale-110 transition-transform">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg text-foreground">Software Engineering</h4>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                    Developing functional, full-stack applications and microservices using modern web technologies.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};