import { useEffect, useState, useCallback } from "react";

const STAR_DENSITY = 10000;
const METEOR_COUNT = 4;

const random = (min, max) => Math.random() * (max - min) + min;

export const BackgroundEffects = ({ isDarkMode }) => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const generateStars = useCallback(() => {
    const count = Math.floor(
      (window.innerWidth * window.innerHeight) / STAR_DENSITY
    );

    setStars(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: random(1, 3),
        x: random(0, 100),
        y: random(0, 100),
        opacity: random(0.4, 0.9),
        animationDuration: random(2, 6) + "s",
      }))
    );
  }, []);

  const generateMeteors = useCallback(() => {
    setMeteors(
      Array.from({ length: METEOR_COUNT }, (_, i) => ({
        id: i,
        size: random(1, 2.5),
        x: random(10, 90),
        y: random(0, 25),
        delay: random(0, 15) + "s",        
        animationDuration: random(3, 6) + "s",
      }))
    );
  }, []);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
      generateMeteors(); 
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [generateStars, generateMeteors]);

  // ── Palette tied to your Option-2 toggle ──────────────────────────────────

  const starColor   = isDarkMode ? "255,255,255"   : "15,100,180";
  const meteorColor = isDarkMode ? "167,139,250"   : "56,189,248";
  const blobA       = isDarkMode
    ? "radial-gradient(ellipse at 20% 30%, rgba(139,92,246,0.12) 0%, transparent 60%)"
    : "radial-gradient(ellipse at 20% 30%, rgba(56,189,248,0.10) 0%, transparent 60%)";
  const blobB       = isDarkMode
    ? "radial-gradient(ellipse at 80% 70%, rgba(109,40,217,0.10) 0%, transparent 60%)"
    : "radial-gradient(ellipse at 80% 70%, rgba(14,165,233,0.08) 0%, transparent 60%)";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* ── Ambient nebula blobs ── */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{ background: `${blobA}, ${blobB}` }}
      />

      {/* ── Stars ── */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-pulse-subtle"
          style={{
            width:  star.size + "px",
            height: star.size + "px",
            left:   star.x + "%",
            top:    star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration,
            backgroundColor: `rgba(${starColor}, 0.9)`,
            boxShadow: `0 0 ${star.size * 3}px rgba(${starColor}, 0.5)`,
          }}
        />
      ))}

      {/* ── Meteors ── */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute rounded-full animate-meteor"
          style={{
            width:  meteor.size * 60 + "px",
            height: meteor.size * 1.5 + "px",
            left:   meteor.x + "%",
            top:    meteor.y + "%",
            animationDelay:    meteor.delay,
            animationDuration: meteor.animationDuration,
            background: `linear-gradient(to right, rgba(${meteorColor},0.9), rgba(${meteorColor},0.3), transparent)`,
            boxShadow: `0 0 8px rgba(${meteorColor}, 0.4)`,
          }}
        />
      ))}
    </div>
  );
};