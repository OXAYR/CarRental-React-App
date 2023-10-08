import { createSlice } from "@reduxjs/toolkit";
import { fetchUserById, fetchUsers } from "../thunks/userThunk";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.message;
    });
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.message;
    });
  },
});

export const usersReducers = userSlice.reducer;
