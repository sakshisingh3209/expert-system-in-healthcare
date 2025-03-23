import mongoose from "mongoose";
const patientSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    DOB: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value <= new Date();
            },
            message: 'Date of birth must be in the past'
        }
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

// Avoid OverwriteModelError
export const Patient = mongoose.models.Patient || mongoose.model('Patient', patientSchema);