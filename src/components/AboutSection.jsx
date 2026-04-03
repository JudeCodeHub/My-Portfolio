import { CloudCog, Palette, Braces, Mail, FileUser } from "lucide-react";

const cards = [
  {
    icon: CloudCog,
    title: "Cloud & DevOps",
    desc: "Mastering AWS, Docker, Kubernetes, and automated CI/CD workflows.",
    iconColor: "text-orange-400",
    ringColor: "ring-orange-400/30",
    bgColor: "bg-orange-400/10",
    borderHover: "hover:border-orange-400/50",
    glowHover: "hover:shadow-[0_0_24px_rgba(251,146,60,0.12)]",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Top 8 Finalist in National UI/UX competitions; prototyping in Figma.",
    iconColor: "text-pink-400",
    ringColor: "ring-pink-400/30",
    bgColor: "bg-pink-400/10",
    borderHover: "hover:border-pink-400/50",
    glowHover: "hover:shadow-[0_0_24px_rgba(244,114,182,0.12)]",
  },
  {
    icon: Braces,
    title: "Software Engineering",
    desc: "Developing full-stack applications and microservices using modern web technologies.",
    iconColor: "text-sky-400",
    ringColor: "ring-sky-400/30",
    bgColor: "bg-sky-400/10",
    borderHover: "hover:border-sky-400/50",
    glowHover: "hover:shadow-[0_0_24px_rgba(56,189,248,0.12)]",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-5xl">

        {/* heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ── Left: Bio ── */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground/90 leading-snug">
              Computer Science Undergraduate
              <span className="block text-primary/80 text-xl font-medium mt-1">
                & DevOps Enthusiast
              </span>
            </h3>

            <p className="text-muted-foreground leading-relaxed text-justify text-sm">
              Currently pursuing a B.Sc. in Computer Science at Eastern University,
              Sri Lanka, while building high-availability cloud architectures and
              automated pipelines.
            </p>

            <p className="text-muted-foreground leading-relaxed text-justify text-sm">
              I bridge the gap between design and infrastructure, specializing in
              container orchestration and GitOps workflows to deliver seamless,
              scalable software solutions.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#contact"
                className="group px-6 py-2.5 rounded-full border border-sky-400/40
                           text-sky-400 text-sm font-medium flex items-center justify-center gap-2
                           transition-all duration-300 hover:border-sky-400
                           hover:bg-sky-400/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]
                           active:scale-95"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                Get In Touch
              </a>

              <a
                href="/MyResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-2.5 rounded-full border border-sky-400/40
                           text-sky-400 text-sm font-medium flex items-center justify-center gap-2
                           transition-all duration-300 hover:border-sky-400
                           hover:bg-sky-400/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]
                           active:scale-95"
              >
                <FileUser className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                Download CV
              </a>
            </div>
          </div>

          {/* ── Right: Skill Cards ── */}
          <div className="flex flex-col gap-4">
            {cards.map(({ icon: Icon, title, desc, iconColor, ringColor, bgColor, borderHover, glowHover }) => (
              <div
                key={title}
                className={`group p-5 rounded-2xl flex items-center gap-5
                            bg-card/40 dark:bg-background/40
                            border border-border/30 backdrop-blur-md
                            transition-all duration-300 ${borderHover} ${glowHover}`}
              >
                {/* ── Circular colored icon ── */}
                <div className="relative shrink-0">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center
                                 ${bgColor} ring-1 ${ringColor}
                                 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  {/* outer pulse ring on hover */}
                  <div
                    className={`absolute inset-0 rounded-full ring-1 ${ringColor}
                                 scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-100
                                 transition-all duration-500`}
                  />
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-base">{title}</h4>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};