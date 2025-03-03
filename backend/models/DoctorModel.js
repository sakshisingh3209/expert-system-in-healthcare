import mongoose from "mongoose";
const doctorSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    licenseNumber: {
        type: String,
        required: true
    },
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }],
    availability: {
        days: [{ type: String }],
        timeSlots: [{ type: String }]
    }
}, { timestamps: true });


export const Doctor = mongoose.model('Doctor', doctorSchema);