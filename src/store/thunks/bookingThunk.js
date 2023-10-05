import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const { _id } = JSON.parse(localStorage.getItem("user"));

const config = {
  headers: {
    "x-access-token": JSON.parse(localStorage.getItem("auth")),
    "Content-Type": "application/json",
  },
};

const doBooking = createAsyncThunk("booking/do", async (reservation) => {
  const newPayload = { ...reservation, _id };
  const response = await axios.post("/reservation", config, newPayload);
  return response.data;
});

const fetchBookings = createAsyncThunk("bookings/fetch", async () => {
  const response = await axios.get(`/reservation/${_id}`, config);
  return response.data;
});

const fetchAllBookings = createAsyncThunk("allBookings/fetch", async () => {
  const response = await axios.get(`/reservation`, config);
  return response.data;
});

const deleteBookings = createAsyncThunk(
  "bookings/delete",
  async (bookingId) => {
    const response = await axios.delete(`/reservation/${bookingId}`, config);
    return response.data;
  }
);
export { fetchBookings, fetchAllBookings, deleteBookings, doBooking };
