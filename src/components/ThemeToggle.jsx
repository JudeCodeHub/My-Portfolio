import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
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
        "fixed max-sm:hidden top-4 right-5 z-50 p-2.5 rounded-full",
        "border transition-all duration-300",
    isDarkMode
      ? "bg-sky-950 border-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.5)] hover:shadow-[0_0_20px_rgba(56,189,248,0.7)]"
      : "bg-white border-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.4)] hover:shadow-[0_0_20px_rgba(56,189,248,0.6)]"
  )}
  >
    {isDarkMode
      ? <Moon className="h-4 w-4 text-sky-400" />
      : <Sun  className="h-4 w-4 text-sky-400" />}
  </button>
  );
};