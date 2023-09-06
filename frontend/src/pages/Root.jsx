import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="mx-[10%] my-5">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
