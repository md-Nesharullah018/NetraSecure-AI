import SectionHeading from "../common/SectionHeading";

export default function HowItWorks() {
  const steps = [
    {
      title: "User Input",
      desc: "User submits URL, file or request for scanning",
      icon: "🧑‍💻",
    },
    {
      title: "AI Analysis",
      desc: "Advanced AI detects vulnerabilities and threats",
      icon: "🧠",
    },
    {
      title: "Insight Generation",
      desc: "System processes risk level and security score",
      icon: "📊",
    },
    {
      title: "Final Report",
      desc: "User gets clear recommendations and fixes",
      icon: "🔐",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">

        <SectionHeading
          title="How It Works"
          subtitle="AI-powered cybersecurity workflow in 4 simple steps"
        />

        <div className="relative mt-12">

          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-cyan-500/20"></div>

          <div className="grid md:grid-cols-4 gap-8 relative">

            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-gray-900 border border-cyan-500/10 p-6 rounded-2xl text-center hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              >

                <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 font-bold group-hover:scale-110 transition">
                  {index + 1}
                </div>

                <div className="text-3xl mb-3">
                  {step.icon}
                </div>

                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {step.desc}
                </p>

                <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition"></div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}