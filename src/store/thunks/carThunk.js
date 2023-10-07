import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const { _id } = JSON.parse(localStorage.getItem("user"));

const config = {
  headers: {
    "x-access-token": JSON.parse(localStorage.getItem("auth")),
    "Content-Type": "application/json",
  },
};

const addCar = createAsyncThunk("car/add", async (car) => {
  const newPayload = { ...car, _id };
  const response = await axios.post("/cars", config, newPayload);
  return response.data;
});

const fetchCars = createAsyncThunk("cars/fetch", async () => {
  const response = await axios.get("/cars", config);
  console.log("response in the thunk---------->", response.data.data);
  return response.data.data;
});

const fetchCarById = createAsyncThunk("cars/fetchCarId", async (carId) => {
  const response = await axios.get(`/cars/${carId}`, config);
  console.log("response in the thunk---------->", response.data);
  return response.data.data;
});

const updateCar = createAsyncThunk("car/update", async (carId, newCar) => {
  const response = await axios.put(`/cars/${carId}`, config, newCar);
  return response.data;
});

const deleteCar = createAsyncThunk("car/delete", async (carId) => {
  const response = await axios.delete(`/cars/${carId}`, config);
  return response.data;
});

const fetchManagerCars = createAsyncThunk("managerCars/fetch", async () => {
  const response = await axios.get(`car/manager/${_id}`, config);
  return response.data;
});

export {
  fetchCars,
  fetchCarById,
  addCar,
  updateCar,
  deleteCar,
  fetchManagerCars,
};
