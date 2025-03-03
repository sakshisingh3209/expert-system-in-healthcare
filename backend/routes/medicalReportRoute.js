import express from "express";
import {
    uploadMedicalReport,
    getReportsByPatient,
    getReportById,
    deleteMedicalReport,
} from "../controllers/medicalReportController.js";

const router = express.Router();

router.post("/", uploadMedicalReport); // Upload a medical report
router.get("/:patientId", getReportsByPatient); // Get all reports for a patient
router.get("/report/:id", getReportById); // Get a specific report by ID
router.delete("/:id", deleteMedicalReport); // Delete a medical report

export default router;