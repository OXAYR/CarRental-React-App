import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = axios.get("/users/");
  return response.data;
});

const registerUser = createAsyncThunk("users/register", async (userData) => {
  const response = axios.post("/users/register", userData);

  console.log("in the user thunk----->", response.data);
  return response.data;
});

const authenticateUser = createAsyncThunk("users/authenticate", async () => {
  const response = axios.post("/users/authenticate");
  return response.data;
});
const updateUser = createAsyncThunk("users/update", async () => {
  const response = axios.put("/users");
  return response.data;
});
const deleteUser = createAsyncThunk("users/delete", async () => {
  const response = axios.get("/users");
  return response.data;
});

export { fetchUsers, registerUser, authenticateUser, updateUser, deleteUser };
