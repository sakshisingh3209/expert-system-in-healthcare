import mongoose from "mongoose";
const diseasePredictionsSchema = new mongoose.Schema({
    patientId: {


        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    prediction: {
        type: String,
        required: true,
    },
    confidenceScore: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    recommendations: {
        type: [String],
        default: []
    }
}, { timestamps: true });
export const DiseasePrediction = mongoose.model('DiseasePrediction', diseasePredictionsSchema);