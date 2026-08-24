export const ThemeToggle = ({ isDark = true, onChange }) => {
  return (
    <label
      className="relative inline-flex items-center cursor-pointer scale-75 md:scale-90"
      title="Toggle Theme"
    >
      <input
        className="sr-only peer"
        type="checkbox"
        checked={isDark}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      <div className="w-20 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-gray-800 peer-checked:to-gray-950 peer-checked:border peer-checked:border-white/20 transition-all duration-500 after:content-['☀️'] after:absolute after:top-1 after:left-1 after:bg-white peer-checked:after:bg-gray-900 after:rounded-full after:h-8 after:w-8 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-10 peer-checked:after:content-['🌙'] after:shadow-md peer-checked:after:shadow-[0_0_10px_rgba(255,255,255,0.2)] after:text-lg"></div>
    </label>
  );
};
