import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bookings from "./Bookings";
import { fetchBookings } from "../../store/thunks/bookingThunk";
import Loader from "../Loader";
import Error from "../Error";

function BookingList() {
  const dispatch = useDispatch();
  const { _id } = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    console.log("I am in the use effect");
    dispatch(fetchBookings(_id));
  }, [dispatch, _id]);

  const { bookings, error, isLoading } = useSelector((state) => state.bookings);

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
      <Bookings bookings={bookings.reservations.bookings} />
    </div>
  );
}

export default BookingList;
