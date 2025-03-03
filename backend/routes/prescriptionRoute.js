import express from "express";
import {
    addPrescription,
    getPrescriptionsByPatient,
    getPrescriptionById,
    updatePrescription,
    deletePrescription,
} from "../controllers/prescriptionController.js";

const router = express.Router();

router.post("/", addPrescription); // Add a new prescription
router.get("/:patientId", getPrescriptionsByPatient); // Get all prescriptions for a patient
router.get("/record/:id", getPrescriptionById); // Get a specific prescription
router.put("/:id", updatePrescription); // Update a prescription
router.delete("/:id", deletePrescription); // Delete a prescription

export default router;