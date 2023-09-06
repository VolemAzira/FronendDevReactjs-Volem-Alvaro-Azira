// Navbar.js
import React from "react";
import { BsCircle, BsCircleFill } from "react-icons/bs";

const Navbar = ({
  isOpenNow,
  setIsOpenNow,
  selectedPrice,
  setSelectedPrice,
  selectedCategory,
  setSelectedCategory,
  clearFilters,
}) => {
  return (
    <nav className="mb-10 border-b">
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
          <div
            className="border-b-2 flex items-center gap-2 cursor-pointer"
            onClick={() => setIsOpenNow(!isOpenNow)}
          >
            {isOpenNow ? (
              <BsCircleFill className="text-green-400" />
            ) : (
              <BsCircle />
            )}
            Open Now
          </div>
          <select
            className="border-b-2 cursor-pointer"
            onChange={(e) => setSelectedPrice(e.target.value)}
            value={selectedPrice || ""}
          >
            <option value="" disabled>
              Price
            </option>
            <option value="Rp. 0 - Rp. 50.000">Rp. 0 - Rp. 50.000</option>
            <option value="Rp. 50.000 - Rp. 100.000">
              Rp. 50.000 - Rp. 100.000
            </option>
            <option value="Rp. 100.000 - Rp. 200.000">
              Rp. 100.000 - Rp. 200.000
            </option>
          </select>
          <select
            className="border-b-2 cursor-pointer"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory || ""}
          >
            <option value="" disabled>
              Categories
            </option>
            <option value="Japan">Japan</option>
            <option value="American">American</option>
            <option value="Indonesian">Indonesia</option>
          </select>
        </div>
        <div>
          <button
            className="border px-7 py-2 text-gray-400 hover:bg-gray-100 transition-all ease-in-out delay-75"
            onClick={clearFilters}
          >
            CLEAR ALL
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
