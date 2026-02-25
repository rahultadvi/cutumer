import express from "express";
import dotenv from "dotenv";
// import pool from "./db/db.js";
import cors from "cors";
import path from "path";
import appointmentRouter from "../backend/routers/appointmentRouter.js";
import callRouter from "../backend/routers/call.routes.js";
import wabhoke from "../backend/routers/wabhoke.routes.js"


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/appointments", appointmentRouter);
app.use("/api", callRouter);
app.use("/twilio",wabhoke);

// ✅ ⭐ React build serve
const __dirname = path.resolve();

// 👇 IMPORTANT — build folder name check karo
app.use(express.static(path.join(__dirname, "dist")));

// ⭐ React Router fallback (MOST IMPORTANT)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});