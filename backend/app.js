import 'dotenv/config'; // Sabse upar, sabse pehle
import express from "express";
import cors from "cors";

import chatRoutes from "./routes/chatRoutes.js";
import scanRoutes from "./routes/scanRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/chat", chatRoutes);
app.use("/scan-url", scanRoutes);
app.use("/contact", contactRoutes);

app.get("/", (req, res) => {
  res.json({ success: true, message: "NetraSecure AI Backend Running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));