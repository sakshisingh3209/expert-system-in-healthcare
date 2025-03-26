import { MedicalReport } from "../models/MedicalReportModel.js";

// Upload Medical Report
export const uploadMedicalReport = async(req, res) => {
    try {
        const { patientId, fileUrl, extractedData, analysisResult } = req.body;

        if (!patientId || !fileUrl || !extractedData || !analysisResult || !analysisResult.diseasePrediction) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const newReport = new MedicalReport({
            patientId,
            fileUrl,
            extractedData,
            analysisResult,
        });

        await newReport.save();

        res.status(201).json({
            message: "Medical report uploaded successfully",
            report: newReport
        });
    } catch (error) {
        console.error("Error uploading medical report:", error.message);
        res.status(500).json({ message: "Error uploading medical report" });
    }
};

// Get All Reports for a Patient
export const getReportsByPatient = async(req, res) => {
    try {
        const { patientId } = req.params;

        const reports = await MedicalReport.find({ patientId }).sort({ createdAt: -1 }) || [];

        res.status(200).json(reports); // ✅ Always return an array
    } catch (error) {
        console.error("Error fetching medical reports:", error.message);
        res.status(500).json({ message: "Error fetching medical reports" });
    }
};

// Get Report by ID
export const getReportById = async(req, res) => {
    try {
        const { id } = req.params;

        const report = await MedicalReport.findById(id);

        if (!report) {
            return res.status(404).json({ message: "Medical report not found" });
        }

        res.status(200).json(report);
    } catch (error) {
        console.error("Error fetching medical report:", error.message);
        res.status(500).json({ message: "Error fetching medical report" });
    }
};

// Delete Medical Report
export const deleteMedicalReport = async(req, res) => {
    try {
        const { id } = req.params;

        const report = await MedicalReport.findByIdAndDelete(id);

        if (!report) {
            return res.status(404).json({ message: "Medical report not found" });
        }

        res.status(200).json({ message: "Medical report deleted successfully" });
    } catch (error) {
        console.error("Error deleting medical report:", error.message);
        res.status(500).json({ message: "Error deleting medical report" });
    }
};