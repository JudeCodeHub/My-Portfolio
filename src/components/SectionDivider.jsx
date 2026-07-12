export const SectionDivider = ({ color = "#38bdf8", align = "left" }) => {
  return (
    <div className="w-full relative h-0 flex items-center justify-center z-50 pointer-events-none" style={{ marginTop: '-1rem', marginBottom: '-1rem' }}>
      <div 
        className="absolute rounded-full"
        style={{
          width: '300px',
          height: '3px',
          // Tapered gradient: solid color head fading to transparent tail
          background: `linear-gradient(to left, transparent 0%, ${color}80 70%, ${color} 100%)`,
          boxShadow: `0 0 20px 2px ${color}60`,
          left: align === "left" ? "20%" : "auto",
          right: align === "right" ? "20%" : "auto",
          transformOrigin: 'center',
          transform: 'rotate(-35deg)',
          animation: 'pulse-subtle 4s ease-in-out infinite'
        }}
      >
        {/* Glowing Head of the meteor */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: '6px',
            height: '6px',
            backgroundColor: '#ffffff',
            boxShadow: `0 0 10px 3px ${color}, 0 0 20px 6px ${color}`,
          }}
        />
      </div>
    </div>
  );
};
