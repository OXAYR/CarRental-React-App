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
  console.log(params.id);
  const { bookings, error, isLoading } = useSelector((state) => state.bookings);
  const { user } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchBookings(params.id));
    dispatch(fetchUserById(params.id));
  }, [dispatch, params.id]);
  useEffect(() => {
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
    <div>
      <h1 className="text-2xl font-semibold mb-4">User Bookings</h1>
      <div className="container card mx-auto mt-8">
        <h2 className="text-lg font-medium mb-2 ">{user.name}</h2>
        <h2 className="text-lg font-medium mb-2">{user.email}</h2>
        <ul>
          {bookings.reservations.bookings.map((booking) => (
            <li key={booking._id} className="mb-4 p-4 border rounded-lg">
              <div>
                <p className="text-base">Car Name: {booking.name}</p>
                <p className="text-base">
                  Start Date: {formatDate(booking.startDate)}
                </p>
                <p className="text-base">
                  End Date: {formatDate(booking.endDate)}
                </p>
                <p className="text-base">Rent: {booking.rent}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserBookings;
