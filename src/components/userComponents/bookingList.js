import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bookings from "./bookings";
import { fetchBookings } from "../../store/thunks/bookingThunk";

function BookingList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const { bookings, error, isLoading } = useSelector((state) => state.bookings);

  console.log(
    "after the use of useSelector------->",
    bookings,
    error,
    isLoading
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching bookings: {error.message}</div>;
  }

  if (!bookings || bookings.length === 0) {
    return <div>No bookings available.</div>;
  }

  return (
    <div>
      <Bookings bookings={bookings} />
    </div>
  );
}

export default BookingList;
