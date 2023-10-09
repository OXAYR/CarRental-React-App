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
  try {
    const newPayload = { ...car, managerId: _id };
    const response = await axios.post("/cars", newPayload, config);
    return response.data;
  } catch (error) {
    alert(error);
  }
});

const fetchCars = createAsyncThunk("cars/fetch", async () => {
  try {
    const response = await axios.get("/cars", config);
    console.log("response in the thunk---------->", response.data.data);
    return response.data.data;
  } catch (error) {
    alert(error);
  }
});

const fetchCarById = createAsyncThunk("cars/fetchCarId", async (carId) => {
  try {
    console.log("in the fetch car by id", carId);
    const response = await axios.get(`/cars/${carId}`, config);
    console.log("response in the thunk---------->", response.data);
    return response.data.data;
  } catch (error) {
    alert(error);
  }
});

const updateCar = createAsyncThunk("car/update", async ({ carId, newCar }) => {
  try {
    console.log("in the update car------->", carId, newCar);
    const response = await axios.put(`/cars/${carId}`, newCar, config);
    return response.data;
  } catch (error) {
    alert(error);
  }
});

const deleteCar = createAsyncThunk("car/delete", async (carId) => {
  try {
    const response = await axios.delete(`/cars/${carId}`, config);
    return response.data;
  } catch (error) {
    alert(error);
  }
});

const fetchManagerCars = createAsyncThunk("managerCars/fetch", async () => {
  try {
    console.log("in the fetch manager cars");
    const response = await axios.get(`/cars/manager/${_id}`, config);
    console.log(response);
    return response.data;
  } catch (error) {
    alert(error)
  }
});

export {
  fetchCars,
  fetchCarById,
  addCar,
  updateCar,
  deleteCar,
  fetchManagerCars,
};
