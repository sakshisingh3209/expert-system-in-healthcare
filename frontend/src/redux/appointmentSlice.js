import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    appointments: [],
};

const appointmentSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        setAppointments: (state, action) => {
            state.appointments.push(action.payload);
        },
        addAppointments: (state, action) => {
            state.appointments = action.payload;
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

export const { setAppointments, addAppointment, cancelAppointment, updateAppointment } =
appointmentSlice.actions;

export default appointmentSlice.reducer;