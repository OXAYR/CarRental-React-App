import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../store/thunks/userThunk";

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

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
  };

  const handleSignupButtonClick = () => {};

  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={loginForm.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={loginForm.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <button onClick={handleLoginButtonClick}>Login</button>
          </div>
          <div>
            <button onClick={handleSignupButtonClick}>SignUp</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
