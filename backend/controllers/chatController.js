import Groq from "groq-sdk";

export const chatController = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        error: "Message is required",
      });
    }

    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({
        success: false,
        error: "GROQ_API_KEY not found",
      });
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 1024,
        messages: [
          {
            role: "system",
            content:
              "You are NetraSecure AI, a cybersecurity assistant. Provide helpful and professional cybersecurity guidance.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

    return res.status(200).json({
      success: true,
      reply:
        completion.choices[0]?.message?.content ||
        "No response generated",
    });
  } catch (error) {
    console.error("Chat Error:", error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};