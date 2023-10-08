import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addCar, fetchCarById, updateCar } from "../../store/thunks/carThunk";
import Loader from "../Loader";
import Error from "../Error";

function CreateCar() {
  const { carId } = useParams();
  const { car, isLoading, error } = useSelector((state) => state.cars);
  const isUpdate = !!carId;

  const initialCarState = useMemo(() => {
    return {
      name: isUpdate ? car.car?.name : "",
      model: isUpdate ? car.car?.model : new Date().toISOString().substr(0, 10),
      rent: isUpdate ? car.car?.rent : "", // Change from null to ""
      type: isUpdate ? car.car?.type : "",
      make: isUpdate ? car.car?.make : "",
      color: isUpdate ? car.car?.color : "",
    };
  }, [car, isUpdate]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cars, setCar] = useState(initialCarState);
  const [errors, setError] = useState("");

  const colorOptions = [
    "red",
    "blue",
    "black",
    "grey",
    "white",
    "skyBlue",
    "darkRed",
  ];

  useEffect(() => {
    if (isUpdate) dispatch(fetchCarById(carId));
  }, [dispatch, carId, isUpdate]);

  useEffect(() => {
    if (!isUpdate) {
      setCar(initialCarState);
    }
  }, [isUpdate, initialCarState]);

  const selectColor = (selectedColor) => {
    setCar({ ...cars, color: selectedColor });
  };

  const validateCar = async () => {
    if (
      cars.name !== "" &&
      cars.model !== null &&
      cars.rent !== null &&
      cars.type !== "" &&
      cars.make !== "" &&
      cars.color !== ""
    ) {
      // eslint-disable-next-line
      if (isUpdate) {
        console.log(car);
        dispatch(updateCar({ carId: car.car._id, newCar: cars }));
        navigate("/owner/cars");
      } else {
        dispatch(addCar(cars));
        navigate("/owner/cars");
      }
    } else {
      setError("Please fill in all fields.");
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Error msg={"error creating or updating car"} />;
  }

  return (
    <div className="ml-4 lg:ml-12">
      <div className="my-5 flex flex-col items-center">
        <div className="max-w-md flex flex-wrap justify-between w-full bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h1 className="font-bold text-2xl sm:text-3xl my-5 text-silver">
            {isUpdate ? "Update Car" : "Add a Car"}
          </h1>
          <div className="mb-4 w-full">
            <label
              htmlFor="name"
              className="block text-sm font-bold text-silver">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={cars.name}
              onChange={(e) => setCar({ ...cars, name: e.target.value })}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="model"
              className="block text-sm font-bold text-silver">
              Model
            </label>
            <input
              type="date"
              id="model"
              value={cars.model}
              onChange={(e) => setCar({ ...cars, model: e.target.value })}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              placeholder="Enter model"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="rent"
              className="block text-sm font-bold text-silver">
              Rent
            </label>
            <input
              type="text"
              id="rent"
              value={cars.rent}
              onChange={(e) => setCar({ ...cars, rent: e.target.value })}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              placeholder="Enter rent"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="type"
              className="block text-sm font-bold text-silver">
              Type
            </label>
            <select
              id="type"
              value={cars.type}
              onChange={(e) => setCar({ ...cars, type: e.target.value })}
              className="mt-1 p-2 block w-full border border-gray-300 bg-white rounded-md">
              <option value="" disabled>
                Select type
              </option>
              <option value="Sedan">Sedan</option>
              <option value="Suv">Suv</option>
              <option value="Crossover Suv">Crossover SUV</option>
              <option value="Truck">Truck</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Sports Car">Sports Car</option>
              <option value="Family Car">Family Car</option>
              <option value="Super Car">Super Car</option>
            </select>
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="make"
              className="block text-sm font-bold text-silver">
              Make
            </label>
            <select
              id="make"
              value={cars.make}
              onChange={(e) => setCar({ ...cars, make: e.target.value })}
              className="mt-1 p-2 block w-full border border-gray-300 bg-white rounded-md">
              <option value="" disabled>
                Select Make
              </option>
              <option value="Toyota">Toyota</option>
              <option value="Nissan">Nissan</option>
              <option value="Honda">Honda</option>
              <option value="Suzuki">Suzuki</option>
              <option value="Mercedes">Mercedes</option>
              <option value="BMW">BMW</option>
              <option value="Lemo">Lemo</option>
            </select>
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="color"
              className="block text-sm font-bold text-silver">
              Color
            </label>
            <div className="color-picker flex justify-center gap-5 mt-3">
              {colorOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => selectColor(option)}
                  style={{ backgroundColor: option }}
                  className={`color-option w-9 h-9 rounded-full text-center border border-grey cursor-pointer transition-transform transform hover:scale-110 ${
                    cars.color === option ? "border-black" : ""
                  }`}>
                  <p className="text-sm mt-9">{option}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            className="mt-4 w-full py-2 bg-lightBlue font-bold rounded text-black font-serif bg-blue-300 hover:bg-blue-400"
            onClick={validateCar}>
            {isUpdate ? "Update" : "Add"} Car
          </button>
          {errors && <p className="text-red-600 text-sm">{errors}</p>}
        </div>
      </div>
    </div>
  );
}

export default CreateCar;
