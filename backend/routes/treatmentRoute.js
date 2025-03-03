import express from "express"

import {
    addTreatment,
    getTreatmentsByPatient,
    getTreatmentById,
    updateTreatment,
    deleteTreatment

} from "../controllers/treatmentController.js";



const router = express.Router();
router.post("/", addTreatment);
router.get("/:patientId", getTreatmentsByPatient);
router.get("/record/:id", getTreatmentById);
router.put("/:id", updateTreatment);
router.delete("/:id", deleteTreatment);


export default router;