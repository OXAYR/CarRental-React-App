import React from "react";
import { deleteUser } from "../../store/thunks/userThunk";

function UserSettings() {
  const { name, email, _id } = JSON.parse(localStorage.getItem("user"));

  const handleDeleteButton = (e) => {
    // eslint-disable-next-line no-restricted-globals
    const answer = confirm("Are you sure to delete your account?");
    if (!answer) return;
    deleteUser(_id);
  };
  return (
    <div>
      <div>
        <h1 className="text-center">Settings</h1>
      </div>
      <div>
        Name: {name}
        <br />
      </div>
      <div>Email:{email}</div>
      <div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => localStorage.clear()}>
          Logout
        </button>
      </div>
      <div>
        <button type="submit" class="btn btn-primary" onClick>
          Edit
        </button>
      </div>
      <div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={handleDeleteButton}>
          DeleteAccount
        </button>
      </div>
    </div>
  );
}

export default UserSettings;
