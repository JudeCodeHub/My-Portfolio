import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const ScrollPath = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [pathHeight, setPathHeight] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const updateHeight = () => {
      setPathHeight(container.scrollHeight);
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    const interval = setInterval(updateHeight, 1000);
    
    // Scroll visibility logic
    let lastScrollTop = container.scrollTop;
    const handleScroll = () => {
      const st = container.scrollTop;
      if (st > lastScrollTop) {
        setIsScrolling(true); // Scrolling down
      } else {
        setIsScrolling(false); // Scrolling up
      }
      lastScrollTop = st <= 0 ? 0 : st;

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener('resize', updateHeight);
      clearInterval(interval);
      container.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [containerRef]);

  const generatePath = () => {
    if (pathHeight === 0) return "";
    // Start at the right side (where Hero image is)
    let d = "M 850 0 "; 
    const segmentHeight = 1000; // Roughly the height of one full section scrolling
    const segments = Math.ceil(pathHeight / segmentHeight);
    
    let currentX = 850;
    let currentY = 0;
    
    for (let i = 0; i < segments; i++) {
      // Alternate direction: first sweep to Left (150), then sweep back to Right (850)
      const targetX = i % 2 === 0 ? 150 : 850;
      const targetY = currentY + segmentHeight;
      
      // Control points for a smooth, wide S-curve connecting the sections
      const cp1Y = currentY + segmentHeight / 2;
      const cp2Y = targetY - segmentHeight / 2;
      
      d += `C ${currentX} ${cp1Y}, ${targetX} ${cp2Y}, ${targetX} ${targetY} `;
      
      currentX = targetX;
      currentY = targetY;
    }
    return d;
  };

  const pathString = generatePath();
  const offsetDistance = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div 
      className="absolute top-0 inset-x-0 w-full -z-10 pointer-events-none flex justify-center overflow-hidden"
      style={{ height: pathHeight }}
    >
      
      {/* Wrapper to keep SVG and dot perfectly aligned and centered */}
      <motion.div 
        className="relative w-[1000px] flex-shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolling ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* SVG drawing the path */}
        <svg 
          width="1000" 
          height={pathHeight} 
          viewBox={`0 0 1000 ${pathHeight}`}
          className="absolute top-0 opacity-10 overflow-hidden"
        >
          <defs>
            <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Animated glowing path */}
          {pathString && (
            <motion.path
              d={pathString}
              fill="none"
              stroke="url(#glowGradient)"
              strokeWidth="4"
              filter="url(#glow)"
              style={{ pathLength: smoothProgress }}
            />
          )}
        </svg>
        
        {/* The glowing dot (spotter) */}
        {pathString && (
          <motion.div
            className="absolute top-0 left-0 w-3 h-3 rounded-full bg-white"
            style={{
              offsetPath: `path("${pathString}")`,
              offsetDistance: offsetDistance,
              offsetRotate: "0deg",
              marginLeft: "-6px", 
              marginTop: "-6px",
              boxShadow: "0 0 20px 8px rgba(249,115,22, 1), 0 0 40px 15px rgba(249,115,22, 0.6)"
            }}
          />
        )}
      </motion.div>

    </div>
  );
};
