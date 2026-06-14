export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm mb-6">
              AI-Powered Cybersecurity Platform
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              See Threats Before
              <span className="block text-cyan-400">
                They Become Attacks.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 max-w-xl">
              Protect your apps, infrastructure, and digital assets
              with AI-driven threat detection, URL scanning, and real-time monitoring.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={() => scrollToSection("scanner")}
                className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold
                hover:bg-cyan-400 hover:scale-105 transition-all duration-200 shadow-lg shadow-cyan-500/20"
              >
                🚀 Start Security Scan
              </button>

              <button
                onClick={() => scrollToSection("chatbot")}
                className="px-6 py-3 rounded-xl border border-gray-700 text-white
                hover:border-cyan-400 hover:text-cyan-400 hover:scale-105
                transition-all duration-200"
              >
                🤖 Try AI Assistant
              </button>

            </div>

            <div className="flex flex-wrap gap-10 mt-12">

              <div>
                <h3 className="text-3xl font-bold">99.9%</h3>
                <p className="text-gray-500 text-sm">Detection Accuracy</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="text-gray-500 text-sm">Monitoring</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">&lt;1s</h3>
                <p className="text-gray-500 text-sm">Response Time</p>
              </div>

            </div>
          </div>

          <div className="flex justify-center">

            <div className="w-full max-w-md p-6 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm">

              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold">Security Overview</h3>
                <span className="text-green-400 text-sm">● Protected</span>
              </div>

              <div className="space-y-4">

                <div className="p-4 rounded-xl bg-black border border-gray-800 hover:border-cyan-500 transition">
                  <p className="text-gray-500 text-sm">Threat Detection</p>
                  <h4 className="text-cyan-400 font-semibold">Active Monitoring</h4>
                </div>

                <div className="p-4 rounded-xl bg-black border border-gray-800 hover:border-cyan-500 transition">
                  <p className="text-gray-500 text-sm">URL Scanner</p>
                  <h4 className="text-white font-semibold">Safe & Verified</h4>
                </div>

                <div className="p-4 rounded-xl bg-black border border-gray-800 hover:border-cyan-500 transition">
                  <p className="text-gray-500 text-sm">AI Analysis</p>
                  <h4 className="text-white font-semibold">Real-Time Processing</h4>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}