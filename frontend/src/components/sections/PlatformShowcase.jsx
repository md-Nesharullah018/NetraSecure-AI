import SectionHeading from "../common/SectionHeading";

export default function PlatformShowcase() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">

        <SectionHeading
          title="Platform Showcase"
          subtitle="Explore the NetraSecure ecosystem"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="group p-8 rounded-2xl border border-gray-800 bg-gray-900/40 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition">
                Dashboard
              </h3>

              <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                LIVE
              </span>
            </div>

            <div className="h-48 rounded-xl bg-black border border-gray-800 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2 w-3/4">
                <div className="h-10 bg-cyan-500/20 rounded"></div>
                <div className="h-10 bg-blue-500/20 rounded"></div>
                <div className="h-10 bg-purple-500/20 rounded"></div>
                <div className="col-span-3 h-20 bg-gray-800/40 rounded mt-2"></div>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              Real-time security dashboard for threat monitoring and analytics.
            </p>
          </div>

          <div className="group p-8 rounded-2xl border border-gray-800 bg-gray-900/40 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition">
                Mobile App
              </h3>

              <span className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-400">
                BETA
              </span>
            </div>

            <div className="h-48 flex items-center justify-center">
              <div className="w-28 h-44 rounded-xl border border-gray-700 bg-black p-2 flex flex-col gap-2">
                <div className="h-3 bg-orange-500/20 rounded"></div>
                <div className="h-6 bg-orange-500/10 rounded"></div>
                <div className="flex-1 bg-gray-800/30 rounded"></div>
                <div className="h-6 bg-orange-500/10 rounded"></div>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              Mobile-first security alerts and AI assistance on the go.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}