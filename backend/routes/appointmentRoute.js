import express from "express";
import {
    scheduleAppointment,
    getAppointmentByPatient,
    getAppointmentByDoctor,
    updateAppointmentStatus,
    deleteAppointment,
} from "../controllers/appointmentController.js";
const router = express.Router();
router.post("/", scheduleAppointment);
router.get("/patient/:patientId", getAppointmentByPatient);
router.get("/doctor/:doctorId", getAppointmentByDoctor);
router.put("/:id", updateAppointmentStatus);
router.delete("/:id", deleteAppointment);

export default router;