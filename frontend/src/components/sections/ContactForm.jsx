import { useState } from "react";
import API from "../../services/api";
import SectionHeading from "../common/SectionHeading";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error("Full name is required");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }

    if (!formData.email.includes("@")) {
      toast.error("Enter valid email");
      return false;
    }

    if (!formData.subject.trim()) {
      toast.error("Subject is required");
      return false;
    }

    if (!formData.message.trim()) {
      toast.error("Message is required");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await API.post("/contact", formData);

      toast.success(res.data.message || "Message sent successfully");

      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">

        <SectionHeading
          title="Contact Us"
          subtitle="Need help? Reach out to our team."
        />

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl"
        >

          <div className="grid md:grid-cols-2 gap-4 mb-4">

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-gray-700 text-white outline-none focus:border-cyan-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-gray-700 text-white outline-none focus:border-cyan-500"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded bg-black border border-gray-700 text-white outline-none focus:border-cyan-500"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded bg-black border border-gray-700 text-white outline-none focus:border-cyan-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              loading
                ? "bg-gray-700 text-gray-300 cursor-not-allowed"
                : "bg-cyan-500 text-black hover:bg-cyan-400"
            }`}
          >
            {loading ? "Sending..." : "🚀 Send Message"}
          </button>

        </form>
      </div>
    </section>
  );
}