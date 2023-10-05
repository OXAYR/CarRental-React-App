import { configureStore } from "@reduxjs/toolkit";
import { usersReducers } from "./slices/userSlice";
import { carsReducers } from "./slices/carSlice";
import { bookingsReducers } from "./slices/bookingSlice";

export const store = configureStore({
  reducer: {
    users: usersReducers,
    cars: carsReducers,
  },
});
