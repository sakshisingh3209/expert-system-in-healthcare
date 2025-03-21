import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDoctor: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setSelectedDoctor: (state, action) => {
      state.selectedDoctor = action.payload;
    },
    clearSelectedDoctor: (state) => {
      state.selectedDoctor = null;
    },
  },
});

export const { setSelectedDoctor, clearSelectedDoctor } = bookingSlice.actions;
export default bookingSlice.reducer;
