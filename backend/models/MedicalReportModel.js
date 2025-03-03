import mongoose from "mongoose";
const medicalReportSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        Ref: 'Patient',
        required: true
    },
    fileUrl: {
        type: String,
        required: true
    },
    extractedData: {
        type: Object,
        required: true
    },
    analysisResult: {
        diseasePrediction: {
            type: String,
            required: true
        },
        recommendations: {

            type: String,
            default: "No recommendations"
        }
    },
    uploadDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })
export const MedicalReport = mongoose.model('MedicalReport', medicalReportSchema);