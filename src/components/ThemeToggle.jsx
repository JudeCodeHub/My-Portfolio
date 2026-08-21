import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    const isLight = localStorage.getItem("theme") === "light";
    if (isLight) {
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2.5 rounded-full flex items-center justify-center",
        "border transition-all duration-300",
        isDarkMode
          ? "bg-[#2d1b69] border-[#7c3aed] shadow-[0_0_12px_rgba(124,58,237,0.5)] hover:shadow-[0_0_20px_rgba(124,58,237,0.7)]"
          : "bg-[#2d1b69] border-[#7c3aed] shadow-[0_0_12px_rgba(124,58,237,0.4)] hover:shadow-[0_0_20px_rgba(124,58,237,0.6)]",
      )}
    >
      {isDarkMode ? (
        <Moon className="h-4 w-4 text-[#a78bfa]" />
      ) : (
        <Sun className="h-4 w-4 text-[#a78bfa]" />
      )}
    </button>
  );
};
