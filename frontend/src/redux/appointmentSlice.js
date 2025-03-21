import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    appointments: [],
};

const appointmentSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        addAppointment: (state, action) => {
            state.appointments.push(action.payload);
        },
        cancelAppointment: (state, action) => {
            state.appointments = state.appointments.filter(
                (appointment) => appointment.id !== action.payload
            );
        },
        updateAppointment: (state, action) => {
            const index = state.appointments.findIndex(
                (appointment) => appointment.id === action.payload.id
            );
            if (index !== -1) {
                state.appointments[index] = action.payload;
            }
        },
    },
});

export const { addAppointment, cancelAppointment, updateAppointment } =
appointmentSlice.actions;

export default appointmentSlice.reducer;