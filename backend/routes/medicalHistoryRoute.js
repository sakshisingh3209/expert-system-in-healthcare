import express from "express"
import {
    addMedicalHistory,
    getMedicalHistoryById,
    updateMedicalHistory,
    deleteMedicalHistory,
    getMedicalHistoryByPatient
} from "../controllers/medicalHistoryController.js"



const router = express.Router();
router.post("/", addMedicalHistory);
router.get("/:patientId", getMedicalHistoryByPatient);
router.get("/record/:id", getMedicalHistoryById);
router.put("/:id", updateMedicalHistory);
router.delete("/:id", deleteMedicalHistory);


export default router;