import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import bookingSlice from "./bookingSlice";
import appointmentSlice from "./appointmentSlice"
import userSlice from "./userSlice";
import doctorSlice from "./doctorSlice"
const store = configureStore({
    reducer: {
        auth: authSlice,
        booking: bookingSlice,
        appointment: appointmentSlice,
        user: userSlice,
        doctor: doctorSlice
    }
});

export default store;