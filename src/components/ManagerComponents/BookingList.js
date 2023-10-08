import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function BookingList({ bookings }) {

  const navigate = useNavigate(); 

  const navigateToUserBookings = (userId) => {

    navigate(`/manager/bookings/userbookings/${userId}`);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="font-bold text-2xl my-8 sm:text-3xl text-left">
        Reservations
      </h1>
      <table className="min-w-full border rounded overflow-hidden">
        <thead className="bg-gray-50 text-blue-950 divide-y divide-gray-500">
          <tr>
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Number of Reservations</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-y-100">
          {bookings.map((booking) => (
            <tr
              key={booking.userId}
              className="bg-white border-b"
              onClick={() => navigateToUserBookings(booking.userId)} // Navigate on click
            >
              <td className="px-4 py-2">{booking.userName}</td>
              <td className="px-4 py-2">{booking.bookingCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingList;
