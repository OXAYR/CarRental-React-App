import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signUp";
import CarList from "./components/userComponents/carList";
import BookingList from "./components/userComponents/bookingList";
import BookACar from "./components/userComponents/bookACar";
import ManagerCarList from "./components/ManagerComponents/managerCarList";
import CreateCar from "./components/ManagerComponents/createCar";

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
      </Routes>
    </Router>
  );
}

export default App;
