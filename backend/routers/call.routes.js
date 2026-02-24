import express from "express";
import { callCustomer } from "../controller/call.controller.js";


const router = express.Router();

router.post("/call", callCustomer);

export default router;