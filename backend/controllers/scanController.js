const scanController = (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({
      status: "error",
      message: "URL is required",
    });
  }

  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.toLowerCase();

    // Suspicious patterns
    const suspiciousKeywords = [
      "login",
      "verify",
      "secure",
      "update-account",
      "free-money",
      "gift-card",
      "banking"
    ];

    const isSuspicious = suspiciousKeywords.some(keyword =>
      hostname.includes(keyword) ||
      parsedUrl.pathname.includes(keyword)
    );

    if (isSuspicious) {
      return res.status(200).json({
        status: "suspicious",
        risk: "medium",
        message: "This URL contains suspicious patterns.",
      });
    }

    return res.status(200).json({
      status: "safe",
      risk: "low",
      message: "No obvious threats detected.",
    });

  } catch (error) {
    return res.status(400).json({
      status: "invalid",
      risk: "high",
      message: "Invalid URL format.",
    });
  }
};

export default scanController;