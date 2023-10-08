import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../store/thunks/carThunk";
import CarCard from "./CarCard";
import Loader from "../Loader";
import Error from "../Error";

function OwnerCarList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const { cars, error, isLoading } = useSelector((state) => state.cars);

  console.log("after the use of useSelector------->", cars, error, isLoading);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error msg={"error fetching cars"} />;
  }

  if (!cars || cars.length === 0) {
    return <div>No cars available.</div>;
  }

  return (
    <div>
      <div className="flex justify-center ">
        <input type="text" className="w-2/3 border border-red-500 mt-32 p-5" />
      </div>
      <CarCard cars={cars} />
    </div>
  );
}

export default OwnerCarList;
