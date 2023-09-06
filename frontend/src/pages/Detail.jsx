import React from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <div>
      <Link to="/">
        <button className="border-2 border-black px-6 py-2 bg-gray-200 ">Back to Home</button>
      </Link>
    </div>
  );
};

export default Detail;
