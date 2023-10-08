import React from "react";
import ManagerLayout from "./ManagerLayout";
import UserLayout from "./UserLayout";

function Layout() {
  const { userRole } = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="bg-gray-100">
      {userRole === "manager" ? <ManagerLayout /> : <UserLayout />}
    </div>
  );
}

export default Layout;
