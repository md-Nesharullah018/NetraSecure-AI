import {
    FaRobot,
    FaShieldAlt,
    FaMobileAlt,
    FaSearch,
    FaEye,
    FaBell
  } from "react-icons/fa";
  
  import FeatureCard from "../cards/FeatureCard";
  import SectionHeading from "../common/SectionHeading";
  
  export default function Features() {
  
    const features = [
      {
        title: "AI Chatbot",
        description:
          "Cybersecurity related AI assistance.",
        icon: <FaRobot />
      },
      {
        title: "URL Scanner",
        description:
          "Analyze suspicious URLs.",
        icon: <FaSearch />
      },
      {
        title: "Threat Detection",
        description:
          "AI powered threat analysis.",
        icon: <FaShieldAlt />
      },
      {
        title: "Mobile Security",
        description:
          "Smart device protection.",
        icon: <FaMobileAlt />
      },
      {
        title: "Deepfake Detection",
        description:
          "Identify manipulated content.",
        icon: <FaEye />
      },
      {
        title: "Real Time Monitoring",
        description:
          "Live threat alert system.",
        icon: <FaBell />
      }
    ];
  
    return (
      <section
        id="features"
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
  
          <SectionHeading
            title="Features"
            subtitle="Advanced AI Security Tools"
          />
  
          <div className="grid md:grid-cols-3 gap-6">
  
            {features.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }