import SectionHeading from "../common/SectionHeading";

export default function WhyChooseUs() {
  const points = [
    {
      title: "AI Driven Security",
      desc: "Advanced AI models detect threats in real-time with high accuracy.",
      icon: "🤖",
    },
    {
      title: "Unified Security Ecosystem",
      desc: "All cybersecurity tools integrated into one powerful platform.",
      icon: "🔗",
    },
    {
      title: "Easy To Use",
      desc: "Simple interface designed for both beginners and professionals.",
      icon: "⚡",
    },
    {
      title: "Scalable Infrastructure",
      desc: "Built to handle startups to enterprise-level workloads.",
      icon: "📈",
    },
    {
      title: "Privacy Focused Architecture",
      desc: "User data is encrypted and never exposed or misused.",
      icon: "🔐",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">

        <SectionHeading
          title="Why Choose NetraSecure AI"
          subtitle="Built for modern businesses & security teams"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {points.map((item, index) => (
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