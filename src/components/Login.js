import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../store/thunks/userThunk";

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("event target---->", e.target);

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleLoginButtonClick = (e) => {
    console.log(loginForm);
    dispatch(authenticateUser(loginForm));
    navigate("/home");
  };

  const handleSignupButtonClick = () => {
    navigate("/signup");
  };

  return (
    <div className="card flex flex-col items-center justify-center mx-96 mt-32">
      <div>
        <h1 className="text-center text-3xl font-bold">Login</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <div className="flex flex-col items-center">
            <label className="text-sm font-medium">Email:</label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              name="email"
              value={loginForm.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col items-center mt-4">
            <label className="text-sm font-medium">Password:</label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="password"
              name="password"
              value={loginForm.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col justify-between mt-4">
            <button
              onClick={handleLoginButtonClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded-md">
              Login
            </button>
            <button
              onClick={handleSignupButtonClick}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md">
              SignUp
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
