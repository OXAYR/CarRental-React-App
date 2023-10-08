import React, { useEffect } from "react";
import UserList from "./UserList";
import Error from "../Error";
import Loader from "../Loader";
import { fetchUsers } from "../../store/thunks/userThunk";
import { useDispatch, useSelector } from "react-redux";

function AllUsers() {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log("users----------->", users);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error msg={"Error fetching all users"} />;
  }
  if (!users) {
    return <div>No users found</div>;
  }
  const filteredUsers = users.filter(
    (user) =>
      user.userRole.toLowerCase() !== "owner"
  );
  return <UserList users={filteredUsers} />;
}

export default AllUsers;
