import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/thunks/userThunk";

function UserList({ users }) {
  const dispatch = useDispatch();
  const handleDeleteUser = (user) => {
    console.log("delete user", user);
    dispatch(deleteUser(user));
  };
  return (
    <div className="text-black">
      <h1 className="font-bold text-2xl my-8 sm:text-3xl text-left">Users</h1>
      <div className="w-full sm:w-auto overflow-x-auto">
        <div className="text-center mt-4">
          <div className="text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <table className="w-full justify-center divide-y divide-gray-500 card">
          <thead className="bg-gray-50 text-blue-950">
            <tr className="font-bold">
              <th className="w-1/3 sm:w-auto px-4 py-2">Name</th>
              <th className="w-1/3 sm:w-auto px-4 py-2">Email</th>
              <th className="w-1/3 sm:w-auto px-4 py-2">User Role</th>
              <th className="w-1/3 sm:w-auto px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user._id} className="my-2">
                <td className="w-1/3 sm:w-auto px-4 py-2">{user.name}</td>
                <td className="w-1/3 sm:w-auto px-4 py-2">{user.email}</td>
                <td className="w-1/3 sm:w-auto px-4 py-2">{user.userRole}</td>
                <td className="w-1/3 sm:w-auto px-4 py-2">
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="bg-black text-white px-2 text-sm rounded-3xl hover:bg-gray-800">
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
