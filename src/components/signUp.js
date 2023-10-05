import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/thunks/userThunk";

function SignUp() {
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
    userRole: "user",
  });

  const [confirmPassword, setConfirmPassword] = useState(""); // Separate state for confirm password

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("event target---->", e.target);

    if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setSignUpForm({
        ...signUpForm,
        [name]: value,
      });
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    console.log(signUpForm);
    console.log("Confirm Password:", confirmPassword);
    dispatch(registerUser(signUpForm));
  };

  return (
    <div>
      <div>
        <h1>SignUp</h1>
      </div>
      <div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="name"
            value={signUpForm.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={signUpForm.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={signUpForm.password}
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

export default SignUp;
