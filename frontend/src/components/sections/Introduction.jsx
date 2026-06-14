import SectionHeading from "../common/SectionHeading";

export default function Introduction() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">

      <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <SectionHeading
          title="What is NetraSecure AI?"
          subtitle="Next Generation Cybersecurity Platform"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="group relative p-8 rounded-2xl border border-cyan-500/10 bg-gray-900/60 backdrop-blur-md hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">

            <div className="text-4xl mb-4">🧠</div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">
              AI Security Platform
            </h3>

            <p className="text-gray-400 leading-relaxed">
              NetraSecure AI combines cybersecurity intelligence, threat detection,
              URL analysis and AI assistance into a unified intelligent security ecosystem.
            </p>

            <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition"></div>
          </div>

          <div className="group relative p-8 rounded-2xl border border-cyan-500/10 bg-gray-900/60 backdrop-blur-md hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">

            <div className="text-4xl mb-4">🛡️</div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">
              Smart Protection
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Detect threats faster with AI-powered analysis and receive intelligent
              recommendations to secure your digital assets in real-time.
            </p>

            <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition"></div>
          </div>

        </div>

      </div>
    </section>
  );
}