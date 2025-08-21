import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import coingeckoRoutes from "./routes/coingecko.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/coingecko", coingeckoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
