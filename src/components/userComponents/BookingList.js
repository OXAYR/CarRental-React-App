import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bookings from "./Bookings";
import { fetchBookings } from "../../store/thunks/bookingThunk";

function BookingList() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("I am in the use effect");
    dispatch(fetchBookings());
  }, [dispatch]);

  const { bookings, error, isLoading } = useSelector((state) => state.bookings);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching bookings: </div>;
  }

  if (!bookings || bookings.length === 0) {
    return <div>No bookings available.</div>;
  }

  return (
    <div>
      <Bookings bookings={bookings.reservations.bookings} />
    </div>
  );
}

export default BookingList;
