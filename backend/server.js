import express from "express";
import dotenv from "dotenv";
// import pool from "./db/db.js";
import cors from "cors";
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


const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});