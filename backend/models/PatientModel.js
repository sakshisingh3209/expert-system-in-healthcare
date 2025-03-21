import mongoose from "mongoose";
const patientSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    medicalHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MedicalHistory'
    }],
    currentMedications: [{
        type: String
    }],
    allergies: [{
        type: String
    }]


}, { timestamps: true });
export const Patient = mongoose.model('Patient', patientSchema);