import React from "react";

function CarCard({ cars }) {
  return (
    <div className="my-8 sm:my-16 md:my-32 text-silver text-left">
      <h1 className="font-bold text-2xl sm:text-3xl text-left">Cars</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {cars.map((car) => (
          <li key={car.id} className="bg-blue shadow-md rounded-lg group">
            <div className="relative bg-white">
              <img
                src="../../assets/car.png"
                alt="carImage"
                className="w-full h-40 object-cover rounded-t-lg bg-white"
              />
            </div>
            <div className="bg-white p-4 rounded-b-lg">
              <div className="flex justify-between">
                <div className="text-lg font-semibold text-blue">
                  {car.name}
                </div>
                <div className="text-lg text-rose-900 font-semibold">
                  Rs. {car.rent} /-
                </div>
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
                <p className="text-sm ml-1">{car.color}</p>
                <div
                  className="ml-2 w-3 h-3 mt-1 rounded-3xl"
                  style={{ background: car.color }}></div>
              </div>
              <button
                onClick={() => reservedCar(car)}
                className={
                  car.status === "Hired"
                    ? "bg-gray-300 w-full text-gray-500 cursor-not-allowed font-medium rounded-lg p-2"
                    : "w-full bg-rose-500 text-red-50 hover:bg-rose-600 font-medium  rounded-lg p-2"
                }
                disabled={car.status === "Hired"}>
                Reserve
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarCard;
