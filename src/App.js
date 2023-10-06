import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signUp";
import CarList from "./components/userComponents/carList";
import BookingList from "./components/userComponents/bookingList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<CarList />} />
        <Route path="/home/bookings" element={<BookingList />} />
      </Routes>
    </Router>
  );
}

export default App;
