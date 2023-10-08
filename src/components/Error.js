import React from "react";

function Error({ msg }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/public/error.svg" alt="error" className="w-16 h-16 mb-4" />
      <div className="text-red-500 text-lg font-semibold">{msg}</div>
    </div>
  );
}

export default Error;
