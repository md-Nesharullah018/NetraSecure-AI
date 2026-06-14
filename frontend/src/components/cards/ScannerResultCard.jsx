const ScannerResultCard = ({ result }) => {
  if (!result) return null;

  const isSafe = result.status === "safe";

  const riskColor =
    result.risk === "high"
      ? "text-red-400"
      : result.risk === "medium"
      ? "text-yellow-400"
      : "text-green-400";

  return (
    <div
      className={`mt-6 p-6 rounded-2xl border backdrop-blur-md shadow-lg transition-all duration-300 ${
        isSafe
          ? "border-green-500/40 bg-green-500/10 shadow-green-500/10"
          : "border-red-500/40 bg-red-500/10 shadow-red-500/10"
      }`}
    >

      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-white">
          🔍 Scan Result
        </h3>

        <span
          className={`px-3 py-1 text-xs rounded-full font-semibold ${
            isSafe
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {isSafe ? "SAFE" : "THREAT DETECTED"}
        </span>
      </div>

      <div className="space-y-3 text-sm text-gray-300">

        <p>
          <span className="text-white font-medium">Status:</span>{" "}
          <span className={isSafe ? "text-green-400" : "text-red-400"}>
            {result.status}
          </span>
        </p>

        <p>
          <span className="text-white font-medium">Risk Level:</span>{" "}
          <span className={riskColor}>
            {result.risk}
          </span>
        </p>

        <p className="pt-2 text-gray-300 leading-relaxed">
          <span className="text-white font-medium">Message:</span>{" "}
          {result.message}
        </p>

      </div>

      <div className="mt-5 text-xs text-gray-500">
        Powered by NetraSecure AI Threat Engine
      </div>

    </div>
  );
};

export default ScannerResultCard;