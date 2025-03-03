import { MedicalReport } from "../models/MedicalReportModel.js";
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
            analysisResult
        });
        await newReport.save();
        res.status(201).json(newReport);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error uploading medical report" });
    }
};



export const getReportsByPatient = async(req, res) => {
    try {

        const { patientId } = req.params;
        const reports = await MedicalReport.find({ patientId }).sort({ uploadDate: -1 });
        if (!reports || reports.length === 0) {
            return res.status(404).json({ message: "No reports found for this patient" });
        }
        res.status(200).json(reports);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching medical reports" });
    }
};


export const getReportById = async(req, res) => {
    try {
        const { id } = req.params;
        const report = await MedicalReport.findById(id);
        if (!report) {
            return res.status(404).json({ message: "Medical report not found" });
        }
        res.status(200).json(report);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching medical report" });
    }
};


export const deleteMedicalReport = async(req, res) => {
    try {
        const { id } = req.params;
        const report = await MedicalReport.findByIdAndDelete(id);
        if (!report) {
            return res.status(404).json({ message: "Medical report not found" });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting medical report" });
    }
};