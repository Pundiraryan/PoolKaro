import dotenv from "dotenv";
import eventl from "events"
eventl.EventEmitter.defaultMaxListeners = 20;
import express from "express";
import cors from "cors";
import connectToMongo from "./config/db.js";
import userRoutes from "./routes/user.js";

dotenv.config();
connectToMongo();
const app = express();
const PORT = process.env.PORT || 9000;

// apply middleware
app.use(express.json());

// cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("api is running");
});

// routes
app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
  console.log(`Api is running on http://localhost:${PORT}`);
});
