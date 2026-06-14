import SectionHeading from "../common/SectionHeading";

export default function TrustSecurity() {
  const items = [
    {
      title: "AI Powered Architecture",
      desc: "Advanced machine learning models detect threats in real-time.",
      icon: "🧠",
    },
    {
      title: "Security First Design",
      desc: "Every feature is built with cybersecurity as the top priority.",
      icon: "🛡️",
    },
    {
      title: "Privacy Focused Infrastructure",
      desc: "User data is encrypted and never exposed to third parties.",
      icon: "🔐",
    },
    {
      title: "Startup Ready Ecosystem",
      desc: "Scalable system designed for startups and enterprise usage.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">

        <SectionHeading
          title="Trust & Security"
          subtitle="Built with security at its core"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {items.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-md hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >

              <div className="text-3xl mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition"></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}