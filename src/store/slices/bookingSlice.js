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
    builder.addCase(fetchBookings.pending, (state) => (state.isLoading = true));
    builder.addCase(fetchBookings.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.bookings.push(actions.payload);
    });
    builder.addCase(fetchBookings.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    });
    builder.addCase(
      fetchAllBookings.pending,
      (state) => (state.isLoading = true)
    );
    builder.addCase(fetchAllBookings.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.allBookings.push(actions.payload);
    });
    builder.addCase(fetchAllBookings.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    });
  },
});

export const bookingsReducers = bookingSlice;
