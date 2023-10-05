import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "../thunks/carThunk";

const carSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchCars.pending, (state, actions) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.data.push(actions.payload);
    });
    builder.addCase(fetchCars.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.message;
    });
  },
});

export const carsReducers = carSlice.reducer;
