import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CarList from "./components/userComponents/CarList";
import BookingList from "./components/userComponents/BookingList";
import BookACar from "./components/userComponents/BookACar";
import ManagerCarList from "./components/ManagerComponents/ManagerCarList";
import CreateCar from "./components/ManagerComponents/CreateCar";
import Bookings from "./components/ManagerComponents/Bookings";
import UserBookings from "./components/ManagerComponents/UserBookings";
import Users from "./components/ManagerComponents/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<CarList />} />
        <Route path="/home/bookings" element={<BookingList />} />
        <Route path="/home/bookACar/:carId" element={<BookACar />} />
        <Route path="/manager/cars" element={<ManagerCarList />} />
        <Route path="/manager/createcar" element={<CreateCar />} />
        <Route path="/manager/updatecar/:carId" element={<CreateCar />} />
        <Route path="/manager/bookings" element={<Bookings />} />
        <Route
          path="/manager/bookings/userbookings/:id"
          element={<UserBookings />}
        />
        <Route path="/manager/allusers" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
