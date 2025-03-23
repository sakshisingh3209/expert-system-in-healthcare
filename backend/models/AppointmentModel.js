import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
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
    appointmentDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value >= new Date(); // Ensure future date
            },
            message: 'Appointment date must be in the future'
        }
    },

    status: {
        type: String,
        enum: ['scheduled', 'completed', 'canceled'],
        default: 'scheduled'
    },
    notes: {
        type: String
    }
}, { timestamps: true });

export const Appointment = mongoose.model('Appointment', appointmentSchema);