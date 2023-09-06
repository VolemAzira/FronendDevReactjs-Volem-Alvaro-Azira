import React, { useState } from "react";
import { BsCircle, BsCircleFill } from "react-icons/bs";

const Navbar = () => {
  const [circle, setCircle] = useState(false);

  return (
    <nav className="mb-10 border-b py-5">
      <div className="border-b-2 mb-5 pb-3">
        <h1 className="text-3xl">Restaurants</h1>
        <br />
        <p className="md:w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde
          nihil totam dignissimos accusamus veritatis blanditiis.
        </p>
      </div>
      <div className="justify-between items-center md:flex">
        <div className="flex gap-5 mb-5">
          Filter by:
          <div className="border-b-2 flex items-center gap-2 cursor-pointer" onClick={() => setCircle(!circle)}>
            {circle ? <BsCircleFill color="#38bdf8"/> : <BsCircle />}
            Open Now
          </div>
          <select className="border-b-2 cursor-pointer">
            <option value="">Price</option>
            <option value="">100-500</option>
            <option value="">500-1000</option>
          </select>
          <select className="border-b-2 cursor-pointer">
            <option value="">Categories</option>
            <option value="">100-500</option>
            <option value="">500-1000</option>
          </select>
        </div>
        <div>
          <button className="border px-7 py-2 text-gray-400 hover:bg-gray-100 transition-all ease-in-out delay-75">CLEAR ALL</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
