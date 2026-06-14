import { useEffect } from "react";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.history.replaceState(null, "", window.location.pathname);

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Toaster position="top-right" />
      <Home />
    </div>
  );
}

export default App;