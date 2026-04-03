import { ArrowUp } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* ── Top border glow ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />

      {/* ── Background Cosmic Glow ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 blur-[120px] pointer-events-none -z-10" />

      {/* ── Single Line Bottom Bar ── */}
      <div className="w-full relative z-10 bg-background/20 backdrop-blur-md py-8 mt-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Copyright */}
          <div className="flex-1 flex justify-center md:justify-start">
            <p
              className="text-xs text-muted-foreground font-medium text-center md:text-left"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              © {new Date().getFullYear()} Judechihan. All rights reserved.
            </p>
          </div>

          {/* Center: Abstract Cosmic Design */}
          <div className="flex-1 flex justify-center items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shadow-[0_0_8px_hsl(var(--primary))] animate-pulse" />
            <div
              className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))] animate-pulse"
              style={{ animationDelay: "150ms" }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full bg-primary/60 shadow-[0_0_8px_hsl(var(--primary))] animate-pulse"
              style={{ animationDelay: "300ms" }}
            />
          </div>

          {/* Right: Back to top */}
          <div className="flex-1 flex justify-center md:justify-end">
            <a
              href="#hero"
              className="group flex items-center gap-2 transition-all duration-200"
              aria-label="Back to top"
            >
              <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors">
                Back to top
              </span>
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
                style={{
                  background: "hsl(var(--primary)/0.1)",
                  border: "1px solid hsl(var(--primary)/0.25)",
                }}
              >
                <ArrowUp size={14} className="text-primary" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
