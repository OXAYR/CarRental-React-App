import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBookings } from "../../store/thunks/bookingThunk";
import Loader from "../Loader";
import Error from "../Error";
import BookingList from "./BookingList";

function AllBookings() {
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

  return <BookingList bookings={allBookings.reservations} />;
}

export default AllBookings;
