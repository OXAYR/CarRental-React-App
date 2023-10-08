import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBookings } from "../../store/thunks/bookingThunk";
import Loader from "../Loader";
import Error from "../Error";
import { fetchUserById } from "../../store/thunks/userThunk";

function UserBookings({ id }) {
  const dispatch = useDispatch();
  const params = useParams();
  const { bookings, error, isLoading } = useSelector((state) => state.bookings);
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchBookings(params.id));
    dispatch(fetchUserById(params.id));
  }, [dispatch, params.id]);

  const formatDate = (dateString) => {
    if (dateString) {
      const date = new Date(dateString);
      return date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error msg={"error fetching bookings"} />;
  }

  if (!bookings || bookings.length === 0) {
    return <div>No bookings available.</div>;
  }

  return (
    <div className="h-screen">
      <div className="container card mx-auto mt-32">
        <h1 className="text-3xl font-semibold mb-4">{user.name} Bookings</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="p-4 border-b">Car Name</th>
              <th className="p-4 border-b">Start Date</th>
              <th className="p-4 border-b">End Date</th>
              <th className="p-4 border-b">Rent</th>
            </tr>
          </thead>
          <tbody>
            {bookings.reservations.bookings.map((booking) => (
              <tr key={booking._id} className="border-b">
                <td className="p-4">{booking.name}</td>
                <td className="p-4">{formatDate(booking.startDate)}</td>
                <td className="p-4">{formatDate(booking.endDate)}</td>
                <td className="p-4">{booking.rent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserBookings;
