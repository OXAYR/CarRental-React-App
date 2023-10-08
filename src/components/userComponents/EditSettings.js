import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "../../store/thunks/userThunk";

function EditSettings() {
  const { userId } = useParams();
  const { name, email } = JSON.parse(localStorage.getItem("user"));
  const [newName, setName] = useState(name);
  const [newPassword, setNewPassword] = useState(" ");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateUser = () => {
    console.log("In the update password --->", userId);

    const updatedUser = {
      id: userId,
      name: newName,
      password: newPassword,
    };

    dispatch(updateUser(updatedUser));

    navigate("/");

    setNewPassword("");
    setName("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Account Settings</h1>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Name:</label>
          <input
            className="bg-gray-200 p-2 rounded w-full text-center"
            value={newName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Email:</label>
          <p className="bg-gray-200 p-2 rounded">{email}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">New Password</label>
          <input
            type="password"
            className="bg-gray-200 p-2 rounded text-center w-full"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleUpdateUser}
          className="bg-blue text-black px-4 py-2 rounded bg-yellow-400 mr-2">
          Update
        </button>
      </div>
    </div>
  );
}

export default EditSettings;
