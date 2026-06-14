import SectionHeading from "../common/SectionHeading";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      feedback:
        "NetraSecure AI helped us identify suspicious links quickly.",
      role: "Security Analyst",
    },
    {
      name: "Sarah Johnson",
      feedback:
        "Excellent AI-powered cybersecurity experience. Very fast and accurate.",
      role: "IT Manager",
    },
    {
      name: "Michael Brown",
      feedback:
        "Simple interface with powerful security tools. Highly recommended.",
      role: "Developer",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">

        <SectionHeading
          title="Testimonials"
          subtitle="What our users say about NetraSecure AI"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-md hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >

              <div className="text-cyan-400 text-3xl mb-3">“</div>

              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                {item.feedback}
              </p>

              <div className="text-yellow-400 text-sm mb-4">
                ★ ★ ★ ★ ★
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-white text-sm font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-xs">
                    {item.role}
                  </p>
                </div>

              </div>

              <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}