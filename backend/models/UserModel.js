import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true
    },

    role: {
        type: String,
        enum: ['Doctor', 'patient', 'Admin'],
        default: 'patient',
        required: true
    },
    profilePicture: {
        type: String,
        default: "",
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    lastLogin: { type: Date },
}, {
    timestamps: true
});


export const User = mongoose.model('User', userSchema);