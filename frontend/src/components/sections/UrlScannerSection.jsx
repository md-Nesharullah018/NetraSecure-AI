import { useState } from "react";
import API from "../../services/api";
import SectionHeading from "../common/SectionHeading";
import ScannerResultCard from "../cards/ScannerResultCard";
import toast from "react-hot-toast";

export default function UrlScannerSection() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const isValidUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const scanUrl = async () => {
    if (!url.trim()) {
      toast.error("Please enter a URL");
      return;
    }

    if (!isValidUrl(url)) {
      toast.error("Please enter a valid URL");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const res = await API.post("/scan-url", { url });

      setResult(res.data);

      if (res.data.status === "safe") {
        toast.success("Safe URL detected");
      } else if (res.data.status === "suspicious") {
        toast("⚠️ Suspicious URL detected");
      } else {
        toast.error("Malicious URL detected");
      }

      setHistory((prev) => [
        {
          url,
          status: res.data.status,
          risk: res.data.risk,
          time: new Date().toLocaleTimeString(),
        },
        ...prev.slice(0, 9),
      ]);
    } catch (error) {
      toast.error("Scan failed. Please try again.");

      setResult({
        status: "error",
        risk: "unknown",
        message: "Scan failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setUrl("");
    setResult(null);
    setHistory([]);
    toast.success("All data cleared");
  };

  const clearHistory = () => {
    setHistory([]);
    toast.success("History cleared");
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("URL copied successfully");
    } catch {
      toast.error("Failed to copy URL");
    }
  };

  const exportHistory = () => {
    if (history.length === 0) {
      toast.error("No scan history found");
      return;
    }

    const data = JSON.stringify(history, null, 2);

    const blob = new Blob([data], { type: "application/json" });
    const exportUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = exportUrl;
    a.download = "scan-history.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(exportUrl);

    toast.success("History exported");
  };

  const totalScans = history.length;

  const threatsFound = history.filter(
    (item) =>
      item.status === "suspicious" ||
      item.status === "malicious"
  ).length;

  const safeUrls = history.filter(
    (item) => item.status === "safe"
  ).length;

  return (
    <section
      id="scanner"
      className="py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="max-w-5xl mx-auto">

        <SectionHeading
          title="URL Security Scanner"
          subtitle="Detect phishing, malware and suspicious URLs using AI"
        />

        <div className="grid md:grid-cols-3 gap-4 mt-10 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
            <h3 className="text-3xl font-bold text-cyan-400">
              {totalScans}
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              URLs Scanned
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
            <h3 className="text-3xl font-bold text-red-400">
              {threatsFound}
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Threats Found
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
            <h3 className="text-3xl font-bold text-green-400">
              {safeUrls}
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Safe URLs
            </p>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 backdrop-blur-md shadow-2xl">

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") scanUrl();
              }}
              className="flex-1 bg-black border border-gray-700 rounded-xl p-4 text-white outline-none focus:border-cyan-500 transition"
            />

            <button
              onClick={scanUrl}
              disabled={loading}
              className={`px-6 py-4 rounded-xl font-semibold transition ${
                loading
                  ? "bg-gray-700 text-gray-300 cursor-not-allowed"
                  : "bg-cyan-500 text-black hover:bg-cyan-400 hover:scale-105"
              }`}
            >
              {loading ? "🔍 Scanning..." : "🚀 Scan URL"}
            </button>

            <button
              onClick={clearAll}
              className="px-6 py-4 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
            >
              🗑 Clear
            </button>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-xs text-gray-500">
              🔐 AI Powered Threat Detection
            </span>

            {url && (
              <button
                onClick={copyUrl}
                className="text-cyan-400 text-sm hover:text-cyan-300"
              >
                📋 Copy URL
              </button>
            )}
          </div>

          {loading && (
            <div className="mt-6">
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 animate-pulse w-full"></div>
              </div>

              <p className="text-cyan-400 text-sm mt-3 animate-pulse">
                Scanning URL with AI engine...
              </p>
            </div>
          )}

          {result && (
            <div className="mt-8">
              <ScannerResultCard result={result} />
            </div>
          )}
        </div>

        {history.length > 0 && (
          <div className="mt-10 bg-gray-900/50 border border-gray-800 rounded-3xl p-6">

            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-semibold text-white">
                Recent Scans
              </h3>

              <button
                onClick={clearHistory}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm"
              >
                🗑 Clear History
              </button>
            </div>

            <div className="space-y-3">
              {history.map((item, index) => (
                <div
                  key={index}
                  className="bg-black border border-gray-800 rounded-xl p-4 flex justify-between"
                >
                  <div className="text-cyan-400 break-all">
                    {item.url}
                  </div>

                  <div className="text-xs text-gray-400">
                    {item.time}
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}
      </div>
    </section>
  );
}