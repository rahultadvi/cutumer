import express from "express";
import { createAppointment, getAppointments } from "../controller/appointment.Controller.js";


const router = express.Router();

router.post("/", createAppointment);
router.get("/", getAppointments);

export default router;