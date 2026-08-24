import { cn } from "@/lib/utils";
import { Menu, X, CodeXml } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ui/ThemeToggle";

const navItems = [
  { name: "whoami", href: "#about" },
  { name: "stack", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

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

  return (
    <>
      {/* DESKTOP NAV (Slide Deck Style) */}
      <nav className="hidden md:flex w-full max-w-7xl mx-auto z-50 items-center justify-between px-6 py-6 pt-10 pointer-events-auto">
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
              <span className="text-white font-black text-xl tracking-widest leading-none uppercase">
                Jude<span className="text-orange-500">.</span>dev
              </span>
            </div>
          </div>
        </div>

        {/* Right: Theme Toggle Placeholder */}
        <div className="flex-1 flex items-center justify-end gap-6 lg:pr-[80px]">
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
        <div className="flex items-center gap-4">
          <ThemeToggle isDark={isDark} onChange={toggleTheme} />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-1 text-white hover:text-white/80 transition-colors"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-[#060714]/95 backdrop-blur-2xl z-[99] flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col space-y-8 text-2xl items-center">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-white/80 hover:text-white transition-colors duration-300 font-semibold tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
