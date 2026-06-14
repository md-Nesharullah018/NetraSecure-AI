export default function Button({
    text,
    onClick,
  }) {
    return (
      <button
        onClick={onClick}
        className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
      >
        {text}
      </button>
    );
  }