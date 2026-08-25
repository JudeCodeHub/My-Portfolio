import { ArrowUp, Terminal } from "lucide-react";

export const FooterSection = ({ contentPadding = "" }) => {
  return (
    <footer className="relative w-full overflow-hidden bg-background border-t mt-12 md:mt-0">
      <div className={`w-full relative z-10 py-3 md:py-4 md:pl-64 lg:pl-80 ${contentPadding}`}>
        <div className="w-full px-4 md:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 lg:gap-6">
          {/* Left: Terminal Copyright */}
          <div className="flex-1 flex justify-center md:justify-start items-center gap-2">
            <Terminal size={16} className="text-orange-500 lg:w-[18px] lg:h-[18px]" />
            <p className="text-[10px] md:text-[11px] lg:text-xs xl:text-sm text-muted-foreground font-mono uppercase tracking-widest flex items-center">
              <span>© {new Date().getFullYear()} sys@judechihan:~</span>
              <span className="w-2 h-3 lg:w-2.5 lg:h-4 bg-orange-500 ml-1.5 animate-pulse"></span>
            </p>
          </div>

          {/* Center: Abstract System Status */}
          <div className="flex-1 flex justify-center items-center gap-3 hidden md:flex">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-orange-500/80 shadow-[0_0_10px_rgba(249,115,22,0.6)] animate-pulse" />
              <span className="text-[10px] lg:text-xs font-mono text-orange-500 uppercase tracking-widest">
                Sys.Online
              </span>
            </div>
          </div>

          {/* Right: Back to top */}
          <div className="flex-1 flex justify-center md:justify-end">
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
          </div>
        </div>
      </div>
    </footer>
  );
};
