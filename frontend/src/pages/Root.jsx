import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="mx-[10%] my-10">
      <Outlet />
    </div>
  );
};

export default Root;
