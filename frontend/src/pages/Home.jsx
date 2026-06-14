import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import Introduction from "../components/sections/Introduction";
import Features from "../components/sections/Features";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import PlatformShowcase from "../components/sections/PlatformShowcase";
import HowItWorks from "../components/sections/HowItWorks";
import TrustSecurity from "../components/sections/TrustSecurity";
import ChatbotSection from "../components/sections/ChatbotSection";
import UrlScannerSection from "../components/sections/UrlScannerSection";
import ContactForm from "../components/sections/ContactForm";
import Testimonials from "../components/sections/Testimonials";
import FinalCTA from "../components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <Hero />
      <Introduction />
      <Features />
      <WhyChooseUs />
      <PlatformShowcase />
      <HowItWorks />
      <TrustSecurity />
      <ChatbotSection />
      <UrlScannerSection />
      <ContactForm />
      <Testimonials />
      <FinalCTA />

      <Footer />
    </div>
  );
}