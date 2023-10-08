import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchManagerCars } from "../../store/thunks/carThunk";
import CarCard from "./CarCard";
import Loader from "../Loader";
import Error from "../Error";

function ManagerCarList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchManagerCars());
  }, [dispatch]);

  const { managerCars, error, isLoading } = useSelector((state) => state.cars);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error msg={"Error fetching the cars you manage" } />;
  }

  if (!managerCars || !managerCars.data || managerCars.data.cars.length === 0) {
    return <div>No cars available.</div>;
  }

  return (
    <div>
      <h1>Cars Managed by you</h1>
      <CarCard cars={managerCars.data.cars} />
    </div>
  );
}

export default ManagerCarList;
