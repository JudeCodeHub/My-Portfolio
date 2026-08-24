import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

export const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef(null);

  const isString = typeof children === "string";

  const splitContent = useMemo(() => {
    if (isString) {
      return children.split(/(\s+)/).map((word, index) => {
        if (word.match(/^\s+$/)) return word;
        return (
          <span className="word" key={index}>
            {word}
          </span>
        );
      });
    }
    // If not a string, treat the entire child as the target element.
    return <div className="word w-full">{children}</div>;
  }, [children, isString]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use the provided ref if valid, otherwise window
    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // We use setTimeout to ensure GSAP registers after the DOM is fully painted, especially important when routing.
    const ctx = gsap.context(() => {
      // Rotate animation (only visible if baseRotation !== 0)
      if (baseRotation !== 0) {
        gsap.fromTo(
          el,
          { transformOrigin: "0% 50%", rotate: baseRotation },
          {
            ease: "none",
            rotate: 0,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top bottom",
              end: rotationEnd,
              scrub: true,
            },
          },
        );
      }

      const wordElements = el.querySelectorAll(".word");

      // Opacity animation
      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity, willChange: "opacity" },
        {
          ease: "none",
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=10%",
            end: wordAnimationEnd,
            scrub: true,
          },
        },
      );

      // Blur animation
      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            ease: "none",
            filter: "blur(0px)",
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top bottom-=10%",
              end: wordAnimationEnd,
              scrub: true,
            },
          },
        );
      }
    }, el);

    return () => {
      ctx.revert();
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <div ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <div className={`scroll-reveal-text flex flex-wrap ${textClassName}`}>
        {splitContent}
      </div>
    </div>
  );
};
