import { cn } from "@/lib/utils";
import { Menu, X, CodeXml } from "lucide-react";
import { useEffect, useState } from "react";
// import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-6 left-0 right-0 mx-auto w-[92%] max-w-7xl z-50 flex items-center justify-between px-6 py-3 rounded-full bg-[#ff6316]/0 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        
        {/* Left: Logo */}
        <div className="flex-1 flex items-center justify-start">
          <a href="#hero" className="flex items-center gap-2 group">
            <CodeXml className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            <span className="text-white font-semibold text-lg tracking-wide hidden sm:block">
              Jude.dev
            </span>
          </a>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        {/* Right: Theme Toggle & CTA */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <div className="hidden md:block">
            {/* <ThemeToggle /> */}
          </div>
          <a
            href="#contact"
            className="hidden md:inline-block bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            Contact
          </a>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center gap-4">
            {/* <ThemeToggle /> */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-1 text-white hover:text-white/80 transition-colors"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-[#060714]/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors mt-4"
          >
            Contact Me
          </a>
        </div>
      </div>
    </>
  );
};
