import React from "react";

const Marquee: React.FC = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-brand-black border-y border-white/10 py-6">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-brand-black z-10 pointer-events-none"></div>
      <div className="animate-marquee whitespace-nowrap flex gap-16">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="text-4xl md:text-5xl font-display font-medium uppercase tracking-tighter flex items-center gap-16 text-white/20"
          >
            <span>We never say no</span>
            <span className="text-brand-accent/50 italic font-light">
              Just execution
            </span>
            <span className="w-2 h-2 rounded-full bg-brand-accent/30"></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
