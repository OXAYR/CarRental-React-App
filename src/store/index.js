import { configureStore } from "@reduxjs/toolkit";
import { usersReducers } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    users: usersReducers,
  },
});
