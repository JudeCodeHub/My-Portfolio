import { ArrowUp, Terminal } from "lucide-react";

interface FooterSectionProps {
  contentPadding?: string;
}

export const FooterSection = ({ contentPadding = "" }: FooterSectionProps) => {
  const timestamp = (
    <div className="flex items-center gap-2">
      <Terminal size={16} className="text-orange-500 lg:w-[18px] lg:h-[18px]" />
      <p className="text-[10px] md:text-[11px] lg:text-xs xl:text-sm text-muted-foreground font-mono uppercase tracking-widest flex items-center">
        <span>© {new Date().getFullYear()} sys@judechihan:~</span>
        <span className="w-2 h-3 lg:w-2.5 lg:h-4 bg-orange-500 ml-1.5 animate-pulse"></span>
      </p>
    </div>
  );

  const sysOnline = (
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-orange-500/80 shadow-[0_0_10px_rgba(249,115,22,0.6)] animate-pulse" />
      <span className="text-[10px] lg:text-xs font-mono text-orange-500 uppercase tracking-widest">
        Sys.Online
      </span>
    </div>
  );

  const backToTop = (
    <a
      href="#hero"
      className="group flex items-center gap-2 lg:gap-3 transition-all duration-300 hover:bg-orange-500/10 px-3 py-2 lg:px-5 lg:py-2.5 rounded-sm border border-transparent hover:border-orange-500/30"
      aria-label="Back to top"
    >
      <span className="text-[10px] lg:text-xs font-mono tracking-widest uppercase text-muted-foreground group-hover:text-orange-500 transition-colors">
        [ Return 0 ]
      </span>
      <ArrowUp
        size={14}
        className="text-orange-500 opacity-60 group-hover:opacity-100 group-hover:-translate-y-1 transition-all lg:w-[16px] lg:h-[16px]"
      />
    </a>
  );

  return (
    <footer className="relative w-full overflow-hidden bg-background border-t mt-12 md:mt-0">
      {/* Mobile: stacked, no gutter to work around */}
      <div className={`md:hidden w-full py-3 px-4 flex flex-col items-center gap-4 ${contentPadding}`}>
        {timestamp}
        {backToTop}
      </div>

      {/* Desktop: each item anchored independently to its own true corner
          (left/right) so "Sys.Online" centers on the full bar width instead
          of just the space between them. Safe to sit flush left here even
          though the side nav's items normally reserve that column — the
          footer only shows while "Contact" (the last, non-looping wheel
          item) is selected, so no wheel item ever renders below screen
          center where this bar sits. */}
      <div className={`hidden md:block relative w-full h-14 lg:h-16 ${contentPadding}`}>
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 lg:pl-6">
          {timestamp}
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {sysOnline}
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:pr-6">
          {backToTop}
        </div>
      </div>
    </footer>
  );
};
