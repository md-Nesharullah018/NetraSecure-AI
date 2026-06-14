export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white">
              Netra<span className="text-cyan-400">Secure AI</span>
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed max-w-md">
              AI-powered cybersecurity platform designed to
              detect threats, analyze vulnerabilities, and
              protect digital assets with intelligent security
              monitoring.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-gray-500 hover:text-cyan-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="text-gray-500 hover:text-cyan-400 transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-gray-500 hover:text-cyan-400 transition"
              >
                Twitter
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Platform
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#features" className="hover:text-cyan-400">
                  Features
                </a>
              </li>

              <li>
                <a href="#scanner" className="hover:text-cyan-400">
                  URL Scanner
                </a>
              </li>

              <li>
                <a href="#chatbot" className="hover:text-cyan-400">
                  AI Assistant
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>support@netrasecure.ai</p>
              <p>24/7 Security Assistance</p>
              <p>AI Threat Monitoring</p>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 NetraSecure AI. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Securing Digital Assets with AI Intelligence
          </p>

        </div>

      </div>
    </footer>
  );
}