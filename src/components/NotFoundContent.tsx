"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home as HomeIcon } from "lucide-react";

const ASCII_404 = [
  "█   █  ███  █   █",
  "█   █ █   █ █   █",
  "█████ █   █ █████",
  "    █ █   █     █",
  "    █  ███      █",
].join("\n");

const DIAGNOSTIC_LINES = [
  "$ locate --route requested",
  "error: route not found in routing table",
  "scanning known routes...",
  "  → /             [init]         reachable",
  "  → /#about        [whoami]       reachable",
  "  → /#experience   [experience]   reachable",
  "recommendation: return to init",
];

export const NotFoundContent = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= DIAGNOSTIC_LINES.length) return;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 220);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-12 text-foreground relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.06)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative w-full max-w-xl rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] overflow-hidden shadow-2xl z-10">
        <div className="h-10 bg-slate-100 dark:bg-[#1a1a1a] border-b border-slate-200 dark:border-white/5 flex items-center px-4 justify-between">
          <div className="w-14" />
          <div className="flex-1 text-center text-slate-400 dark:text-white/40 text-xs font-mono select-none">
            ~/404
          </div>
          <div className="flex gap-2 w-14 justify-end">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
        </div>

        <div className="p-6 md:p-8 font-mono">
          <pre className="text-orange-500 text-[10px] xs:text-xs sm:text-sm leading-tight mb-6 overflow-x-auto">
            {ASCII_404}
          </pre>

          <div className="space-y-1 mb-8 text-xs sm:text-sm min-h-34">
            {DIAGNOSTIC_LINES.slice(0, visibleLines).map((line, i) => (
              <p
                key={i}
                className={
                  line.startsWith("error")
                    ? "text-red-400"
                    : line.startsWith("  →")
                      ? "text-slate-500 dark:text-white/60"
                      : line.startsWith("recommendation")
                        ? "text-orange-500"
                        : "text-slate-400 dark:text-white/40"
                }
              >
                {line}
                {i === visibleLines - 1 &&
                  visibleLines < DIAGNOSTIC_LINES.length && (
                    <span className="inline-block w-2 h-3.5 bg-orange-500 ml-1 animate-pulse align-middle" />
                  )}
              </p>
            ))}
            {visibleLines >= DIAGNOSTIC_LINES.length && (
              <span className="inline-block w-2 h-3.5 bg-orange-500 animate-pulse align-middle" />
            )}
          </div>

          <Link
            href="/#hero"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:scale-105"
          >
            <HomeIcon className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
