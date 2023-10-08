import { createSlice } from "@reduxjs/toolkit";

import { fetchBookings, fetchAllBookings } from "../thunks/bookingThunk";

const bookingSlice = createSlice({
  name: "users",
  initialState: {
    bookings: [],
    allBookings: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchBookings.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBookings.fulfilled, (state, action) => {
      console.log("booking slice fulfilled", action.payload);
      state.isLoading = false;
      state.bookings = action.payload;
    });
    builder.addCase(fetchBookings.rejected, (state, action) => {
      console.log("booking slice rejected", action.payload);

      state.isLoading = false;
      // state.error = actions.error.message; // Modify the draft (using Immer)
    });
    builder.addCase(fetchAllBookings.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllBookings.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allBookings = action.payload;
    });
    builder.addCase(fetchAllBookings.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const bookingsReducers = bookingSlice.reducer;
