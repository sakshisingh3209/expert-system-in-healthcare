import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    doctorInfo: JSON.parse(localStorage.getItem('doctorInfo')) || null,
    isAuthenticated: !!localStorage.getItem('doctorInfo'),
    activeSection: 'appointments',
};

const doctorSlice = createSlice({
    name: 'doctor',
    initialState,
    reducers: {
        setDoctor: (state, action) => {
            state.doctorInfo = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('doctorInfo', JSON.stringify(action.payload));
            console.log("Doctor info saved:", action.payload); // ✅ Debugging
        },
        logoutDoctor: (state) => {
            state.doctorInfo = null;
            state.isAuthenticated = false;
            state.activeSection = 'appointments';
            localStorage.removeItem('doctorInfo');
            console.log("Doctor logged out"); // ✅ Debugging
        },
        setActiveSection: (state, action) => {
            state.activeSection = action.payload;
        },
        updateDoctorProfile: (state, action) => {
            state.doctorInfo = {
                ...state.doctorInfo,
                ...action.payload, // ✅ Merge updated data with existing data
                specialization: action.payload.specialization || (state.doctorInfo && state.doctorInfo.specialization),

            };
            localStorage.setItem('doctorInfo', JSON.stringify(state.doctorInfo));
            console.log("Doctor profile updated:", state.doctorInfo); // ✅ Debugging
        },
    },
});

export const { setLoading, setDoctor, logoutDoctor, setActiveSection, updateDoctorProfile } = doctorSlice.actions;

export default doctorSlice.reducer;