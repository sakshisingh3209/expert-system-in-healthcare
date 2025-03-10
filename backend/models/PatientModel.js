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
        enum: ['Male', 'Female', 'Transgender', 'Other'],
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
    }],
    contactInfo: {
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String
        }
    }

}, { timestamps: true });
export const Patient = mongoose.model('Patient', patientSchema);