import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "top" },
    { label: "Features", id: "features" },
    { label: "Scanner", id: "scanner" },
    { label: "Chatbot", id: "chatbot" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    setOpen(false);

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold text-cyan-400 cursor-pointer tracking-wide"
        >
          NetraSecure <span className="text-white">AI</span>
        </div>

        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-cyan-400 transition duration-200 text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cyan-400 text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 px-6 py-4 space-y-3 border-t border-cyan-500/20">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-gray-300 hover:text-cyan-400 transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}