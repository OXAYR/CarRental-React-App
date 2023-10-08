import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const { userRole, _id } = JSON.parse(localStorage.getItem("user"));

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  try {
    const response = await axios.get("/users/all");
    console.log(response.data.data.users);
    return response.data.data.users;
  } catch (error) {
    // Handle errors here, e.g., throw an error or return an error object
    throw error;
  }
});
const fetchUserById = createAsyncThunk("usersById/fetch", async (userId) => {
  try {
    const response = await axios.get(`/users/${userId}`);
    console.log(response.data.data.user);
    return response.data.data.user;
  } catch (error) {
    // Handle errors here, e.g., throw an error or return an error object
    throw error;
  }
});

const registerUser = createAsyncThunk("users/register", async (userData) => {
  const response = await axios.post("/users/register", userData);

  console.log("in the user thunk----->", response.data);
  return response.data;
});

const authenticateUser = createAsyncThunk(
  "users/authenticate",
  async (userData) => {
    const response = await axios.post("/users/authenticate", userData);
    console.log("in the user thunk authentication----->", response.data.data);
    localStorage.setItem("user", JSON.stringify(response.data.data.user));
    localStorage.setItem("auth", JSON.stringify(response.data.data.token));
    return response.data;
  }
);
const updateUser = createAsyncThunk("users/update", async (newUser) => {
  const response = axios.put(`/users/${_id}`, newUser);
  return response.data;
});
const deleteUser = createAsyncThunk("users/delete", async (user) => {
  if (user.userRole.toLowerCase() === "user") {
    const response = await axios.delete(`/users/${user._id}`);
    return response.data;
  } else {
    const response = await axios.delete(`/users/deletemanager/${user._id}`);
    return response.data;
  }
});

export {
  fetchUsers,
  registerUser,
  authenticateUser,
  updateUser,
  deleteUser,
  fetchUserById,
};
