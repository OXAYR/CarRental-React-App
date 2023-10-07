import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarById } from "../../store/thunks/carThunk";
import { makeBooking } from "../../store/thunks/bookingThunk";
import { useNavigate } from "react-router-dom";

function BookACar() {
  const params = useParams();
  const dispatch = useDispatch();
  const [reservation, setReservation] = useState({
    startDate: "",
    endDate: "",
  });
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (params && params.carId) {
      dispatch(fetchCarById(params.carId));
    }
  }, [dispatch, params]);

  const { car, isLoading, error } = useSelector((state) => state.cars);
  console.log("car in the object------->", car.car);

  const todayDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  console.log("car id", car._id);
  const validateReservation = () => {
    if (!reservation.startDate || !reservation.endDate) {
      setErrors("Please select start and end dates.");
    } else {
      const newReservation = {
        carId: car.car._id,
        rent: car.car.rent,
        ...reservation,
      };
      if (dispatch(makeBooking(newReservation))) navigate("/home/bookings");
    }
  };
  if (isLoading) {
    return <div>isLoading</div>;
  }
  if (error) {
    return <div>error booking car</div>;
  }
  if (car && car.car) {
    return (
      <div className="ml-4 lg:ml-32">
        <div className="my-5 flex flex-col items-center">
          <div className="max-w-4xl flex flex-wrap items-center w-full bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="w-full sm:w-1/2 justify-center pr-4">
              <h1 className="font-bold text-2xl sm:text-3xl my-5 text-silver text-center">
                Make A Reservation
              </h1>
              <div className="mb-4 w-full pr-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-silver text-center">
                  Name
                </label>
                <p className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                  {car.car.name}
                </p>
              </div>
              <div className="flex">
                <div className="mb-4 w-full sm:w-1/2 pr-2">
                  <label
                    htmlFor="model"
                    className="block text-sm font-bold text-silver">
                    Model
                  </label>
                  <p className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                    {formatDate(car.car.model)}
                  </p>
                </div>
                <div className="mb-4 w-full sm:w-1/2 pl-2">
                  <label
                    htmlFor="rent"
                    className="block text-sm font-bold text-silver">
                    Rent
                  </label>
                  <p className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                    {car.car.rent}
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mb-4 w-full sm:w-1/2 pr-2">
                  <label
                    htmlFor="type"
                    className="block text-sm font-bold text-silver">
                    Type
                  </label>
                  <p className="mt-1 p-2 block w-full border border-gray-300 bg-white rounded-md">
                    {car.car.type}
                  </p>
                </div>
                <div className="mb-4 w-full sm:w-1/2 pl-2">
                  <label
                    htmlFor="make"
                    className="block text-sm font-bold text-silver">
                    Make
                  </label>
                  <p className="mt-1 p-2 block w-full border border-gray-300 bg-white rounded-md">
                    {car.car.make}
                  </p>
                </div>
              </div>
              <div className="mb-4 w-full">
                <div className="text-gray-500 text-sm flex justify-center">
                  Color:
                  <div
                    className="ml-2 w-5 h-5 rounded-3xl"
                    style={{ background: car.color }}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="mb-4 w-full sm:w-1/2 pr-2">
                  <label
                    htmlFor="model"
                    className="block text-sm font-bold text-silver">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="model"
                    value={reservation.startDate}
                    onChange={(e) =>
                      setReservation({
                        ...reservation,
                        startDate: e.target.value,
                      })
                    }
                    min={todayDate}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    placeholder="Enter start date"
                  />
                </div>
                <div className="mb-4 w-full sm:w-1/2 pl-2">
                  <label
                    htmlFor="rent"
                    className="block text-sm font-bold text-silver">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="rent"
                    value={reservation.endDate}
                    onChange={(e) =>
                      setReservation({
                        ...reservation,
                        endDate: e.target.value,
                      })
                    }
                    min={reservation.startDate}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    placeholder="Enter End Date"
                  />
                </div>
              </div>
              <p style={{ color: "red" }} className="text-red-600 text-sm">
                {errors}
              </p>
            </div>
            <div className="w-full sm:w-1/2 pl-2 flex justify-center items-center">
              <img
                src="../../assets/carView.png"
                alt="car-view"
                title="car-view"
                className="cursor-pointer bg-gradient-to-b from-white to-gray-50 rounded-lg"
              />
            </div>
            <div className="w-full">
              <button
                className="mt-4 w-full py-2 bg-lightBlue font-bold rounded-lg text-white font-serif bg-rose-500 hover:bg-rose-600"
                onClick={validateReservation}>
                Make A Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookACar;
