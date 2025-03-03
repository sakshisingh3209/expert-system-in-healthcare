import mongoose from "mongoose";
const notificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Read', 'Unread'],
        default: 'Unread'
    },

}, { timestamps: true });
export const Notification = mongoose.model('Notification', notificationSchema);