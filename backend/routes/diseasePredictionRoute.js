import express from "express"
import {
    createPrediction,
    getPredictionById,
    getPredictionsByPatient,
    deletePrediction
} from "../controllers/diseasePredictionController.js"



const router = express.Router();
router.post("/", createPrediction);
router.get("/prediction/:id", getPredictionById);
router.get("/:patientId", getPredictionsByPatient);
router.delete("/:id", deletePrediction);

export default router;