export default function FeatureCard({ title, description, icon, badge }) {
  return (
    <div className="group relative p-6 rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-md hover:border-cyan-500/40 hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-black/20">


      <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition"></div>

      <div className="relative">

        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black border border-cyan-500/20 text-3xl mb-5 group-hover:scale-110 transition">
          {icon}
        </div>
        {badge && (
          <span className="inline-block text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 mb-3">
            {badge}
          </span>
        )}

        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>

      </div>
    </div>
  );
}