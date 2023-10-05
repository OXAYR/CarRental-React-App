import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../store/thunks/carThunk";
import CarCard from "./carCard";

function CarList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const { cars, error, isLoading } = useSelector((state) => state.cars);

  console.log("after the use of useSelector------->", cars, error, isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching cars: {error.message}</div>;
  }

  if (!cars || cars.length === 0) {
    return <div>No cars available.</div>;
  }

  return (
    <div>
      <CarCard cars={cars} />
    </div>
  );
}

export default CarList;
