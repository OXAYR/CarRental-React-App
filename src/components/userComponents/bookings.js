import React from "react";
import { deleteBookings } from "../../store/thunks/bookingThunk";

function Bookings({ bookings }) {
  const formatDate = (dateString) => {
    if (dateString) {
      console.log(dateString);
      const date = new Date(dateString);
      const month = parseInt(date.getMonth()) + 1;
      return date.getDate() + "/" + month + "/" + date.getFullYear();
    }
  };

  return (
    <div className="h-screen">
      <div className="container card mx-auto mt-32">
        <h1 className="text-3xl font-semibold mb-4">My Bookings</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="p-4 border-b">Car Name</th>
              <th className="p-4 border-b">Start Date</th>
              <th className="p-4 border-b">End Date</th>
              <th className="p-4 border-b">Rent</th>
              <th className="p-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b">
                <td className="p-4">{booking.name}</td>
                <td className="p-4">{formatDate(booking.startDate)}</td>
                <td className="p-4">{formatDate(booking.endDate)}</td>
                <td className="p-4">{booking.rent}</td>
                <td className="p-4">
                  <button
                    onClick={() => deleteBookings(booking.carId)}
                    className="bg-black text-white px-2 rounded-2xl hover:bg-gray-800">
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bookings;
