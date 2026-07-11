import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  GitBranch,
  Layout,
  Server,
  Cloud,
  BrainCircuit,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "GR-10 UGC website",
    category: "Academic Project",
    description:
      "Redesigned the official university website for an HCI module, focusing on navigation flow, layout structure, and accessibility.",
    image: "/projects/project3.png",
    tags: ["Figma", "HCI", "UI/UX"],
    githubUrl: "https://www.figma.com/design/PkX0gMzUMNAYHwMvLSHoku/GR-10-UGC-website-?node-id=139-148&t=cAui7sBL7yXIGxUg-1",
    icon: <Layout size={20} />,
    accent: "#6366f1",
  },
  {
    id: 2,
    title: "GitOps CI/CD Pipeline for Go",
    category: "DevOps",
    description:
      "End-to-end pipeline that builds, tests, and deploys a Go app to Kubernetes using GitOps principles for automated delivery.",
    image: "/projects/project2.png",
    tags: ["GitHub Actions", "Docker", "Kubernetes", "ArgoCD", "Helm"],
    githubUrl: "https://github.com/JudeCodeHub/Go-web-app.git",
    icon: <Server size={20} />,
    accent: "#10b981",
  },
  {
    id: 3,
    title: "High-Availability AWS Architecture",
    category: "Cloud Engineering",
    description:
      "Deployed a resilient infrastructure with custom VPC, ALB, and Auto Scaling to ensure maximum uptime and scalability.",
    image: "/projects/project1.png",
    tags: ["AWS", "ALB", "ASG", "RDS", "Route53", "CloudWatch"],
    githubUrl: "https://github.com/JudeCodeHub/CiniVerse.git",
    icon: <Cloud size={20} />,
    accent: "#f59e0b",
  },
  {
    id: 4,
    title: "AI-Powered Applicant Tracking System",
    category: "Full Stack / AI",
    description:
      "Web application that provides ATS compatibility scores and AI-driven improvement suggestions for uploaded resumes.",
    image: "/projects/project4.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "AI API"],
    githubUrl: "https://github.com/JudeCodeHub/Resume-Analyzer.git",
    icon: <BrainCircuit size={20} />,
    accent: "#ec4899",
  },
];

// Hook to trigger animation when element enters viewport
function useSlideIn(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return { ref, visible };
}

function ProjectCard({ project, index }) {
  const { ref, visible } = useSlideIn(index * 120);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-72px)",
        transition:
          "opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)",
      }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/40 hover:border-primary/40 shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Colored left-edge accent bar */}
      <span
        className="absolute left-0 top-0 h-full w-1 rounded-l-2xl z-10"
        style={{ background: project.accent, opacity: 0.85 }}
      />

      {/* Image */}
      <div className="h-52 overflow-hidden bg-muted relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-card/80 via-transparent to-transparent" />

        {/* Category pill */}
        <div className="absolute top-3 left-5">
          <span
            className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-full backdrop-blur-md border"
            style={{
              background: `${project.accent}22`,
              borderColor: `${project.accent}55`,
              color: project.accent,
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Icon badge */}
        <div
          className="absolute bottom-3 right-4 w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: project.accent, color: "#fff" }}
        >
          {project.icon}
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-6 pb-7 md:px-8 md:pb-8">
        <h3 
          className="text-[17px] font-bold mb-2 leading-snug transition-colors duration-200"
          style={{ fontFamily: "'Outfit', sans-serif", color: project.accent }}
        >
          {project.title}
        </h3>

        <p 
          className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] font-medium rounded-md border bg-secondary/40 text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
          style={{ color: project.accent }}
        >
          <GitBranch size={15} />
          View Project
          <ArrowRight
            size={13}
            className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
          />
        </a>
      </div>
    </div>
  );
}

// Animated heading words
function SlideHeading() {
  const { ref, visible } = useSlideIn(0);

  return (
    <div
      ref={ref}
      className="text-center mb-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-48px)",
        transition:
          "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <h2 
        className="text-3xl md:text-4xl font-bold text-foreground"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        Featured <span className="text-primary">Projects</span>
      </h2>
      <div className="mt-1 mx-auto w-16 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />
    </div>
  );
}

function SlideSubtitle() {
  const { ref, visible } = useSlideIn(100);

  return (
    <p
      ref={ref}
      className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-40px)",
        transition:
          "opacity 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s",
      }}
    >
      A showcase of my work in software engineering, cloud infrastructure, and
      DevOps.
    </p>
  );
}

function SlideButton() {
  const { ref, visible } = useSlideIn(200);

  return (
    <div ref={ref} className="text-center mt-10">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/JudeCodeHub"
        className="px-6 py-2.5 text-sm rounded-full border border-sky-400/50 bg-transparent text-sky-400 font-medium transition-all duration-300 hover:border-sky-300 hover:bg-sky-400/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-95 flex items-center justify-center gap-2 group w-fit mx-auto"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-32px)",
          transition:
            "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        Check My GitHub
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 md:py-24 px-1 sm:px-3 md:px-6 relative overflow-x-hidden">
      <div className="container mx-auto max-w-7xl">
        <SlideHeading />
        <SlideSubtitle />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-14 lg:gap-x-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <SlideButton />
      </div>
    </section>
  );
};
