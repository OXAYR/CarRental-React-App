import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const { _id } = JSON.parse(localStorage.getItem("user"));

const config = {
  headers: {
    "x-access-token": JSON.parse(localStorage.getItem("auth")),
    "Content-Type": "application/json",
  },
};

const makeBooking = createAsyncThunk("booking/do", async (reservation) => {
  const newPayload = { ...reservation, _id };
  console.log(config);
  const response = await axios.post("/reservations", newPayload, config);
  console.log("response------->", response);
  return response.data;
});

const fetchBookings = createAsyncThunk("bookings/fetch", async () => {
  try {
    const response = await axios.get(`/reservations/${_id}`, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const fetchAllBookings = createAsyncThunk("allBookings/fetch", async () => {
  const response = await axios.get(`/reservations`, config);
  return response.data;
});

const deleteBookings = createAsyncThunk(
  "bookings/delete",
  async (bookedCarId) => {
    const response = await axios.delete(`/reservations/${bookedCarId}`, config);
    return response.data;
  }
);
export { fetchBookings, fetchAllBookings, deleteBookings, makeBooking };
