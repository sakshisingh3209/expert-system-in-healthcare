import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import bookingSlice from "./bookingSlice";
import appointmentSlice from "./appointmentSlice"

const store = configureStore({
    reducer: {
        auth: authSlice,
        booking: bookingSlice,
        appointment: appointmentSlice
    }
});

export default store;