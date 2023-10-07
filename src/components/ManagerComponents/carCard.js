import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CarCard({ cars }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDeleteCar = (carId) => {
    // Implement your delete logic here
  };

  const handleEditCar = (carId) => {
    navigate(`/manager/updatecar/${carId}`);
  };

  return (
    <div className="my-8 sm:my-16 md:my-32 text-silver text-left">
      <h1 className="font-bold text-2xl sm:text-3xl text-left">
        Cars You Manage
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {cars.map((car) => (
          <li
            key={car._id}
            className="bg-blue shadow-md rounded-lg group relative hover:shadow-lg">
            <div className="relative">
              <img
                src="../../assets/car.png"
                alt="carimage"
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-white p-4 rounded-b-lg">
              <div className="flex justify-between">
                <div className="text-lg font-semibold text-blue">
                  {car.name}
                </div>
                <div className="text-lg font-semibold">Rs. {car.rent} /-</div>
              </div>
              <div className="text-gray-500 text-sm">
                Status:
                <span
                  className={
                    car.status === "Available"
                      ? "text-blue-500"
                      : "text-red-500"
                  }>
                  {car.status}
                </span>
              </div>
              <div className="text-gray-500 text-sm">
                Make: {car.make} | Type: {car.type} | Model: {car.model}
              </div>
              <div className="text-gray-500 text-sm flex">
                Color:
                <div
                  className="ml-2 w-3 h-3 mt-1 rounded-3xl"
                  style={{ background: car.color }}></div>
                <p className="ml-4">{car.color}</p>
              </div>
              <div className="flex mt-4">
                <button
                  onClick={() => handleDeleteCar(car._id)}
                  className="flex-1 bg-red-500 text-black font-medium rounded-lg p-2 mr-2 opacity-0 group-hover:opacity-100">
                  Delete
                </button>
                <button
                  onClick={() => handleEditCar(car._id)}
                  className="flex-1 bg-blue-400 text-black font-medium rounded-lg p-2 opacity-0 group-hover:opacity-100">
                  Edit
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarCard;
