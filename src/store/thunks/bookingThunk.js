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

const fetchBookings = createAsyncThunk("bookings/fetch", async (userId) => {
  try {
    console.log(userId);
    const response = await axios.get(`/reservations/${userId}`, config);
    console.log(response.data.message);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

const fetchAllBookings = createAsyncThunk("allBookings/fetch", async () => {
  const response = await axios.get(`/reservations`, config);
  return response.data.data;
});

const deleteBookings = createAsyncThunk(
  "bookings/delete",
  async (bookedCarId) => {
    const response = await axios.delete(
      `/reservations/${bookedCarId}`,
      config,
      _id
    );
    return response.data;
  }
);
export { fetchBookings, fetchAllBookings, deleteBookings, makeBooking };
