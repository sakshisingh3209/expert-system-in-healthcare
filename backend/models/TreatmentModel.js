import mongoose from "mongoose";
const treatmentSchema = mongoose.Schema({
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
    treatments: [{
        type: String,
        required: true
    }],
    goals: [{
        type: String,
        required: true
    }],
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
}, { timestamps: true });


export const Treatment = mongoose.model('Treatment', treatmentSchema);