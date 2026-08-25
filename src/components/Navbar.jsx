import { cn } from "@/lib/utils";
import { Menu, X, CodeXml, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "./ui/ThemeToggle";
import { StaggeredMenu } from "./ui/StaggeredMenu";

const navItems = [
  { name: "whoami", href: "#about" },
  { name: "stack", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Initialize theme from HTML class or localStorage on mount
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = (checked) => {
    setIsDark(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/Background_Audio.mp3" loop />
      {/* DESKTOP NAV (Slide Deck Style) */}
      <nav className="hidden md:flex w-full max-w-7xl mx-auto z-50 items-center justify-between px-6 py-6 lg:py-4 xl:py-6 lg:pt-6 xl:pt-10 pointer-events-auto">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center justify-start lg:pl-[80px]">
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => {
              window.location.hash = "#start";
              window.dispatchEvent(
                new CustomEvent("navigateSection", { detail: "start" }),
              );
            }}
          >
            <CodeXml className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform duration-300" />

            {/* Logo Text */}
            <div className="hidden sm:flex flex-col justify-center">
              <span className="text-foreground dark:text-white font-black text-xl tracking-widest leading-none uppercase">
                Jude<span className="text-orange-500">.</span>dev
              </span>
            </div>
          </div>
        </div>

        {/* Right: Theme Toggle Placeholder */}
        <div className="flex-1 flex items-center justify-end gap-4 lg:pr-[80px]">
          <button 
            onClick={toggleAudio}
            className="p-2 rounded-full border border-orange-500/30 text-orange-500 hover:bg-orange-500 hover:text-white transition-all shadow-[0_0_10px_rgba(249,115,22,0.1)] active:scale-95 bg-white dark:bg-[#0a0a0a]"
            aria-label={isPlaying ? "Mute audio" : "Play audio"}
          >
            {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
          <ThemeToggle isDark={isDark} onChange={toggleTheme} />
        </div>
      </nav>

      {/* MOBILE NAV (Old Style) */}
      <nav className="md:hidden absolute top-6 left-0 right-0 mx-auto w-[92%] z-50 flex items-center justify-between px-6 py-3 rounded-full bg-[#ff6316]/0 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.5)] pointer-events-auto">
        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="#start" className="flex items-center gap-2 group">
            <CodeXml className="w-7 h-7 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex items-center gap-1.5">
          <button 
            onClick={toggleAudio}
            className="p-1 rounded-full border border-orange-500/30 text-orange-500 hover:bg-orange-500 hover:text-white transition-all shadow-[0_0_10px_rgba(249,115,22,0.1)] active:scale-95 bg-white/50 dark:bg-[#0a0a0a]/50"
            aria-label={isPlaying ? "Mute audio" : "Play audio"}
          >
            {isPlaying ? <Volume2 size={14} /> : <VolumeX size={14} />}
          </button>
          <div className="-mx-3.5 h-8 flex items-center justify-center">
            <ThemeToggle isDark={isDark} onChange={toggleTheme} />
          </div>
          <StaggeredMenu
            items={[
              { label: "Init", link: "#hero" },
              { label: "Who Am I", link: "#about" },
              { label: "Stack", link: "#skills" },
              { label: "Projects", link: "#projects" },
              { label: "Awards", link: "#awards" },
              { label: "Certs", link: "#certifications" },
              { label: "Contact", link: "#contact" }
            ]}
            colors={['#3f3f46', '#27272a']}
            menuButtonColor={isDark ? '#fff' : '#000'}
            openMenuButtonColor="#fff"
            accentColor="#ff6316"
          />
        </div>
      </nav>
    </>
  );
};
