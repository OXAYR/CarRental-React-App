import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBookings } from "../../store/thunks/bookingThunk";
import Loader from "../Loader";
import Error from "../Error";
import BookingList from "./BookingList";

function Bookings() {
  const dispatch = useDispatch();
  const { allBookings, isLoading, error } = useSelector(
    (state) => state.bookings
  );

  useEffect(() => {
    dispatch(fetchAllBookings());
  }, [dispatch]);

  console.log("bookings----------->", allBookings.reservations);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error msg={"Error fetching all bookings"} />;
  }
  if (!allBookings || !allBookings.reservations) {
    return <div>No bookings found</div>;
  }
  const { _id } = JSON.parse(localStorage.getItem("user"));
  const filteredBookings = allBookings.reservations.filter(
    (booking) => booking.userId === _id
  );
  return <BookingList bookings={filteredBookings} />;
}

export default Bookings;
