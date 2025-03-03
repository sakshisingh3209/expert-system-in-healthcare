import mongoose from "mongoose";

const medicalHistorySchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    condition: [{
        type: String,
        required: true
    }],
    treatment: [{
        type: String,
        required: true
    }],
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',

    }
}, { timestamps: true });


export const MedicalHistory = mongoose.model('MedicalHistory', medicalHistorySchema);