import mongoose from "mongoose";
const prescriptionSchema = mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    medications: [{
        name: { type: String, required: true },
        dosage: { type: String, required: true },
        frequency: { type: String, required: true },
        duration: { type: String, required: true }
    }],
    dosageInstruction: {
        type: String,
        required: true
    },
    dateIssued: {
        type: Date,
        required: true
    }
}, { timestamps: true });

export const Prescription = mongoose.model('Prescription', prescriptionSchema);