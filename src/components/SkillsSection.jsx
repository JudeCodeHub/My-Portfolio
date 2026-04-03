import { useState } from "react";
import { cn } from "@/lib/utils";

const categoryGlow = {
  languages: { border: "#fb923caa", shadow: "0 0 22px rgba(251,146,60,0.35)" },
  databases: { border: "#34d399aa", shadow: "0 0 22px rgba(52,211,153,0.35)" },
  devops: { border: "#38bdf8aa", shadow: "0 0 22px rgba(56,189,248,0.35)" },
  frontend: { border: "#a78bfaaa", shadow: "0 0 22px rgba(167,139,250,0.35)" },
};

const skills = [
  // Programming Languages
  { name: "Java", level: 80, category: "languages" },
  { name: "Python", level: 85, category: "languages" },
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "TypeScript", level: 85, category: "languages" },

  // Databases
  { name: "PostgreSQL", level: 80, category: "databases" },
  { name: "MongoDB", level: 75, category: "databases" },

  // DevOps
  { name: "Docker", level: 85, category: "devops" },
  { name: "Kubernetes", level: 75, category: "devops" },
  { name: "Terraform", level: 70, category: "devops" },
  { name: "GitHub Actions", level: 85, category: "devops" },
  { name: "ArgoCD", level: 70, category: "devops" },
  { name: "AWS", level: 75, category: "devops" },
  { name: "Git", level: 90, category: "devops" },
  { name: "Linux", level: 80, category: "devops" },

  // Frontend Technologies
  { name: "React", level: 85, category: "frontend" },
  { name: "HTML", level: 90, category: "frontend" },
  { name: "CSS", level: 85, category: "frontend" },
];

const categories = ["all", "languages", "databases", "devops", "frontend"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );
  return (
    <section id="skills" className="py-12 md:py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-1">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="mt-2 mx-auto w-16 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover border border-transparent
                         transition-all duration-300"
              onMouseEnter={(e) => {
                const g = categoryGlow[skill.category];
                if (!g) return;
                e.currentTarget.style.borderColor = g.border;
                e.currentTarget.style.boxShadow = g.shadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
