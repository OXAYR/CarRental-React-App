import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchManagerCars } from "../thunks/carThunk";

const carSlice = createSlice({
  name: "users",
  initialState: {
    cars: [],
    managerCars: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchCars.pending, (state, actions) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.cars.push(actions.payload);
    });
    builder.addCase(fetchCars.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.message;
    });
    builder.addCase(fetchManagerCars.pending, (state, actions) => {
      state.isLoading = true;
    });
    builder.addCase(fetchManagerCars.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.managerCars.push(actions.payload);
    });
    builder.addCase(fetchManagerCars.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.message;
    });
  },
});

export const carsReducers = carSlice.reducer;
