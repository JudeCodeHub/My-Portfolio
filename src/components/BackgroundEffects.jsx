import { useEffect, useState, useCallback } from "react";

const createStars = () => {
  if (typeof window === "undefined") return [];
  const numberOfStars = Math.floor(
    (window.innerWidth * window.innerHeight) / 10000,
  );

  const newStars = [];
  for (let i = 0; i < numberOfStars; i++) {
    newStars.push({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
    });
  }

  return newStars;
};

const createMeteors = () => {
  const numberOfMeteors = 4;
  const newMeteors = [];

  for (let i = 0; i < numberOfMeteors; i++) {
    newMeteors.push({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      delay: Math.random() * 15,
      animationDuration: Math.random() * 3 + 3,
    });
  }

  return newMeteors;
};

export const BackgroundEffects = () => {
  const [stars, setStars] = useState(createStars);
  const [meteors] = useState(createMeteors);

  const handleResize = useCallback(() => {
    setStars(createStars());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft Atmosphere Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-sky-400/5 md:bg-sky-400/10 blur-[100px] md:blur-[150px]" />
      <div className="absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-400/5 md:bg-purple-400/10 blur-[120px] md:blur-[180px]" />

      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
