import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";

const Box = (props) => {
  const { title, image, price, To, categories, status, rating, children } =
    props;

  const calculateFilledStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - filledStars - halfStar;
    return { filledStars, halfStar, emptyStars };
  };

  const { filledStars, halfStar, emptyStars } = calculateFilledStars(rating);

  const getStatusColor = (status) => {
    if (status === "open") {
      return "text-green-400";
    } else if (status === "close") {
      return "text-red-400";
    } else {
      return "text-gray-400"; // Default jika status tidak dikenali
    }
  };

  const statusColor = getStatusColor(status);

  return (
    <div className="shadow-lg hover:shadow-none transition-all ease-linear w-[20rem] md:flex md:w-[40rem] lg:w-[50rem] items-center p-2">
      <div className="bg-white h-[20rem] mr:m-5 md:w-[40%]">
        <img src={image} alt="gambar" className="w-full h-full" />
      </div>
      <br />
      <div className="md:w-[60%]">
        <h3 className="text-3xl font-bold mb-2 px-2 flex justify-between items-center ">
          {title}
          <div className="flex gap-2 items-center uppercase text-sm">
            <BsFillCircleFill className={statusColor} />
            {status}
          </div>
        </h3>
        <div className="flex text-xl mb-3 px-2 ">
          {Array.from({ length: filledStars }, (_, index) => (
            <AiFillStar
              key={`filled-star-${index}`}
              className="text-yellow-500"
            />
          ))}
          {halfStar === 1 && <AiOutlineStar />}
          {Array.from({ length: emptyStars }, (_, index) => (
            <AiOutlineStar key={`empty-star-${index}`} />
          ))}
        </div>
        <div className="px-2">
          <p className="">{children}</p>
          <br />
          <p className="mb-2">Cateegories : {categories}</p>
          <p>Range Price {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
