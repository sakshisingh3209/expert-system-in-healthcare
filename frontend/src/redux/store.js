import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import bookingSlice from "./bookingSlice";
import appointmentSlice from "./appointmentSlice"
import userSlice from "./userSlice";
const store = configureStore({
    reducer: {
        auth: authSlice,
        booking: bookingSlice,
        appointment: appointmentSlice,
        user: userSlice
    }
});

export default store;