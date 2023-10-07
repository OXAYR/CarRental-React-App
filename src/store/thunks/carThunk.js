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
  const newPayload = { ...car, managerId: _id };
  const response = await axios.post("/cars", newPayload, config);
  return response.data;
});

const fetchCars = createAsyncThunk("cars/fetch", async () => {
  const response = await axios.get("/cars", config);
  console.log("response in the thunk---------->", response.data.data);
  return response.data.data;
});

const fetchCarById = createAsyncThunk("cars/fetchCarId", async (carId) => {
  console.log("in the fetch car by id", carId);
  const response = await axios.get(`/cars/${carId}`, config);
  console.log("response in the thunk---------->", response.data);
  return response.data.data;
});

const updateCar = createAsyncThunk("car/update", async ({ carId, newCar }) => {
  console.log("in the update car------->", carId, newCar);
  const response = await axios.put(`/cars/${carId}`, newCar, config);
  return response.data;
});

const deleteCar = createAsyncThunk("car/delete", async (carId) => {
  const response = await axios.delete(`/cars/${carId}`, config);
  return response.data;
});

const fetchManagerCars = createAsyncThunk("managerCars/fetch", async () => {
  console.log("in the fetch manager cars");
  const response = await axios.get(`/cars/manager/${_id}`, config);
  console.log(response);
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
