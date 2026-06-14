export default function FinalCTA() {
    return (
      <section className="py-28 px-6 bg-black relative overflow-hidden">

        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full top-10 left-1/2 -translate-x-1/2"></div>
  
        <div className="max-w-5xl mx-auto text-center relative z-10">

          <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-3xl p-12 shadow-lg shadow-black/50">

            <p className="text-cyan-400 text-sm mb-4">
              🔐 Secure • Fast • AI Powered
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Protect Your Digital Future with{" "}
              <span className="text-cyan-400">AI Intelligence</span>
            </h2>

            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Start securing your digital presence with real-time threat detection,
              AI analysis, and advanced cybersecurity protection.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
  
              <button className="bg-cyan-500 text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20">
                Get Started
              </button>
  
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition">
                Contact Team
              </button>
  
            </div>

            <p className="text-xs text-gray-500 mt-8">
              No credit card required • Setup in 2 minutes • Trusted by developers
            </p>
  
          </div>
        </div>
      </section>
    );
  }