import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center h-screen bg-opacity-50 bg-white z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-600"></div>
      <div className="ml-4 text-xl font-semibold text-gray-600">Loading</div>
    </div>
  );
}

export default Loader;
