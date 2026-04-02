import { ArrowDown, Rocket } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Magic Cosmic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-400/10 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-float" />

      <div className="container max-w-4xl mx-auto text-center z-10 mt-16">
        <div className="space-y-6">
          
          {/* Main Headline */}
          <h1 className="text-xl md:text-7xl font-black tracking-tight leading-tight flex flex-col items-center justify-center">
            <span className="opacity-0 animate-fade-in flex items-center gap-3 text-foreground">
              Hi, I'm 
              <span className="bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                Judechihan
              </span>
            </span>
            <span className="text-3xl md:text-5xl text-foreground/80 mt-2 opacity-0 animate-fade-in-delay-1 font-bold">
              Software & Cloud Infrastructure Enthusiast
            </span>
          </h1>

          {/* Subtitle / Summary */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2 leading-relaxed">
            Computer Science undergraduate building the engine, not just the paint. Focused on scalable microservices, CI/CD automation, and robust cloud infrastructure.
          </p>

          {/* Call to Action Button */}
          <div className="pt-8 flex justify-center opacity-0 animate-fade-in-delay-3">
            <a 
              href="#projects" 
              className="px-6 py-2 rounded-full border border-sky-400/50 bg-transparent text-sky-400 font-medium transition-all duration-300 hover:border-sky-300 hover:bg-sky-400/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-95 flex items-center gap-2 group"
            >
              <Rocket className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-delay-4">
        <span className="text-sm text-muted-foreground mb-4"> Scroll </span>
        <div className="p-2 rounded-full border border-sky-400/30 bg-sky-950/20 shadow-[0_0_10px_rgba(56,189,248,0.2)] animate-bounce">
          <ArrowDown className="h-4 w-4 text-sky-400" />
        </div>
      </div>
    </section>
  );
};