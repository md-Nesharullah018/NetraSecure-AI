export default function TestimonialCard({ name, feedback, role }) {
  return (
    <div className="group relative p-6 rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1">

      <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition"></div>

      <div className="relative">

        <div className="text-cyan-400 text-3xl mb-3">“</div>

        <p className="text-gray-300 text-sm leading-relaxed mb-5">
          {feedback}
        </p>

        <div className="text-yellow-400 text-sm mb-4">
          ★ ★ ★ ★ ★
        </div>

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
            {name?.charAt(0)}
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold">{name}</h3>
            {role && (
              <p className="text-gray-500 text-xs">{role}</p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}