import { createSlice } from "@reduxjs/toolkit";
import { fetchCarById, fetchCars, fetchManagerCars } from "../thunks/carThunk";

const carSlice = createSlice({
  name: "users",
  initialState: {
    cars: [],
    managerCars: [],
    car: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchCars.pending, (state, actions) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, actions) => {
      state.isLoading = false;
      console.log("payload about push in the cars----->", actions.payload);
      state.cars = actions.payload;
      console.log("payload after push in the cars----->", state.cars);
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
      state.managerCars = actions.payload;
    });
    builder.addCase(fetchManagerCars.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.message;
    });
    builder.addCase(fetchCarById.pending, (state, actions) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCarById.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.car = actions.payload;
    });

    builder.addCase(fetchCarById.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.error.message;
    });
  },
});

export const carsReducers = carSlice.reducer;
