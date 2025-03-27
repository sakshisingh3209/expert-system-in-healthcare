import express from "express";
import {
    scheduleAppointment,
    getAppointmentByPatient,
    getAppointmentByDoctor,
    updateAppointmentStatus,
    deleteAppointment,
} from "../controllers/appointmentController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();
router.post("/", authMiddleware, scheduleAppointment);
router.get("/patient/:patientId", authMiddleware, getAppointmentByPatient);
router.get("/doctor/:doctorId", authMiddleware, getAppointmentByDoctor);
router.put("/:id", authMiddleware, updateAppointmentStatus);
router.delete("/:id", authMiddleware, deleteAppointment);

export default router;