// import mongoose from "mongoose";

// const doctorSchema = mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     specialization: {
//         type: String,
//         required: true
//     },
//     licenseNumber: {
//         type: String,
//         required: true
//     },
//     patients: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Patient'
//     }],
//     availability: {
//         days: [{ type: String }],
//         timeSlots: [{ type: String }]
//     },
//     rating: {
//         type: Number,
//         required: true
//     },
//     fee: {
//         type: Number,
//         required: true
//     }
// }, { timestamps: true });

// export const Doctor = mongoose.model('Doctor', doctorSchema);
import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
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
    },
    rating: {
        type: Number,

    },
    fee: {
        type: Number,

    }
}, { timestamps: true });

// Avoid OverwriteModelError
export const Doctor = mongoose.models.Doctor || mongoose.model('Doctor', doctorSchema);