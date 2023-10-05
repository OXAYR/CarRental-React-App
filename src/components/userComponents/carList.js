import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../store/thunks/carThunk";
import CarCard from "./carCard";

function CarList() {
  const dispatch = useDispatch();
  const { cars, error, isloading } = useSelector((state) => {
    return state.cars;
  });

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (isloading) {
    return <div>isLoading</div>;
  } else if (error) {
    return <div>error fetching cars</div>;
  }

  return (
    <div>
      <CarCard cars={cars} />
    </div>
  );
}

export default CarList;
