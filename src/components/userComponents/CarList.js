import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../store/thunks/carThunk";
import CarCard from "./CarCard";
import Loader from "../Loader";
import Error from "../Error";

function CarList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const { cars, error, isLoading } = useSelector((state) => state.cars);

  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCars = cars.cars.filter((car) => {
    const carValue = car[selectedFilter]?.toLowerCase() || "";
    const query = searchQuery.toLowerCase();

    if (selectedFilter === "all") {
      return carValue.includes(query);
    } else {
      return carValue.includes(query);
    }
  });

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
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="p-3 border bg-white focus:outline-none border-gray-300 rounded text-black">
          <option value="all">All</option>
          <option value="color">Filter by Color</option>
          <option value="name">Filter by Name</option>
          <option value="type">Filter by Type</option>
          <option value="make">Filter by Make</option>
          <option value="status">Filter by Status</option>
        </select>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="p-2 bg-white focus:outline-none rounded text-black w-2/3"
        />
      </div>
      <CarCard cars={filteredCars} />
    </div>
  );
}

export default CarList;
