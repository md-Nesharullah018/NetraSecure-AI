import React from "react";

const GlassCard = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-lg p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-cyan-500/20">

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="text-cyan-400 text-4xl mb-4">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-white mb-3">
          {title}
        </h3>

        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
};

export default GlassCard;