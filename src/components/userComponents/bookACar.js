import React from "react";
import { useParams } from "react-router-dom";

function BookACar() {
  const params = useParams();
  console.log("params--------->", params);

  return <div></div>;
}

export default BookACar;
