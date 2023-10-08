import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/thunks/userThunk";

function CreateManager() {
  const [manager, setManager] = useState({
    name: "",
    email: "",
    password: "",
    userRole: "manager",
  });

  const [confirmPassword, setConfirmPassword] = useState(""); 

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("event target---->", e.target);

    if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setManager({
        ...manager,
        [name]: value,
      });
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    console.log(manager);
    console.log("Confirm Password:", confirmPassword);
    dispatch(registerUser(manager));
  };

  return (
    <div>
      <div>
        <h1>Create Manager</h1>
      </div>
      <div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="name"
            value={manager.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={manager.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={manager.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={handleButtonClick}>SignUp</button>
        </div>
      </div>
    </div>
  );
}

export default CreateManager;
