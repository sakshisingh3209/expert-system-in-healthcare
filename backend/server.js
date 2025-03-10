import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import jwt from "jsonwebtoken"
import connectDB from "./config/db.js"
import notificationRoutes from "./routes/notificationRoute.js"

import diseasePredictionRoutes from "./routes/diseasePredictionRoute.js";
import medicalReportRoutes from "./routes/medicalReportRoute.js";
import medicalHistoryRoutes from "./routes/medicalHistoryRoute.js";
import treatmentRoutes from "./routes/treatmentRoute.js";
import prescriptionRoutes from "./routes/prescriptionRoute.js";
import appointmentRoutes from "./routes/appointmentRoute.js";
import doctorRoutes from "./routes/doctorRoute.js";
import feedbackRoutes from "./routes/feedbackRoute.js";
import userRoutes from "./routes/userRoute.js";
import patientRoutes from "./routes/patientRoute.js";
import adminRoutes from "./routes/adminRoute.js";
dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/v1/notifications", notificationRoutes);
app.use("/api/v1/disease-predictions", diseasePredictionRoutes);
app.use("/api/v1/medical-reports", medicalReportRoutes);
app.use("/api/v1/medical-history", medicalHistoryRoutes);
app.use("/api/v1/treatments", treatmentRoutes);
app.use("/api/v1/prescription", prescriptionRoutes);
app.use("/api/v1/appointments", appointmentRoutes);
app.use("/api/v1/doctors", doctorRoutes);
app.use("/api/v1/feedback", feedbackRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/patients", patientRoutes);
app.use("/api/v1/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});