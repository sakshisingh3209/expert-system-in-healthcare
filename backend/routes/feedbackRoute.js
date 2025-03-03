import express from "express";
import { createFeedback, getDoctorFeedback, getPatientFeedback } from "../controllers/feedbackController.js";


const router = express.Router();
router.post("/submit", createFeedback);
router.get("/doctor/:doctorId", getDoctorFeedback);
router.get("/patient/:patientId", getPatientFeedback);

export default router;