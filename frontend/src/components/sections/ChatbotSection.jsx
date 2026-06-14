import { useState, useRef, useEffect } from "react";
import API from "../../services/api";
import SectionHeading from "../common/SectionHeading";
import toast from "react-hot-toast";

export default function ChatbotSection() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const createMessage = (role, text) => ({
    id: Date.now() + Math.random(),
    role,
    text,
  });

  const sendMessage = async () => {
    if (!message.trim()) {
      toast.error("Message cannot be empty");
      return;
    }

    const userMessage = createMessage("user", message);
    setChat((prev) => [...prev, userMessage]);

    const currentMessage = message;
    setMessage("");
    setLoading(true);

    try {
      const res = await API.post("/chat", {
        message: currentMessage,
      });

      const aiMessage = createMessage("ai", res.data.reply);

      setChat((prev) => [...prev, aiMessage]);

      toast.success("Response received");
    } catch (error) {
      toast.error("AI response failed");
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = (id) => {
    setChat((prev) => prev.filter((msg) => msg.id !== id));
    toast.success("Message deleted");
  };

  const clearChat = () => {
    if (chat.length === 0) {
      toast("Chat already empty");
      return;
    }

    setChat([]);
    toast.success("Chat cleared");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <section id="chatbot" className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">

        <SectionHeading
          title="AI Chatbot"
          subtitle="Ask cybersecurity related questions"
        />

        <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">

          <div className="h-[420px] overflow-y-auto p-3 space-y-3 bg-black rounded-lg border border-gray-700">

            {chat.map((msg) => (
              <ChatBubble
                key={msg.id}
                msg={msg}
                onDelete={deleteMessage}
              />
            ))}

            {loading && <TypingIndicator />}

            <div ref={chatEndRef} />
          </div>

          <div className="flex gap-2 mt-4">

            <input
              type="text"
              placeholder="Ask something..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full p-3 rounded bg-black border border-gray-700 text-white outline-none focus:border-cyan-500"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-cyan-500 text-black px-6 py-2 rounded hover:bg-cyan-400 transition disabled:opacity-50"
            >
              Send
            </button>

            <button
              onClick={clearChat}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Clear
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

function ChatBubble({ msg, onDelete }) {
  return (
    <div
      className={`flex ${
        msg.role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div className="relative group max-w-xs">

        <div
          className={`p-3 rounded-lg text-sm whitespace-pre-wrap ${
            msg.role === "user"
              ? "bg-cyan-500 text-black"
              : "bg-gray-800 text-white"
          }`}
        >
          {msg.text}
        </div>

        <button
          onClick={() => onDelete(msg.id)}
          className="absolute -top-2 -right-2 text-xs bg-red-500 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
        >
          ✕
        </button>

      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <p className="text-gray-400 text-sm animate-pulse">
      AI is typing...
    </p>
  );
}