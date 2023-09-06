import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";

const Card = (props) => {
  const { title, image, price, To, categories, status, rating, Style } = props;

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
    <div className="flex flex-col w-[20rem] shadow-lg hover:shadow-none transition-all ease-linear">
      <div className="bg-white h-[20rem]">
        <img src={image} alt="gambar" className="w-full h-full" />
      </div>
      <br />
      <h3 className="text-2xl font-semibold mb-2 px-2">{title}</h3>
      <div className="flex text-2xl mb-2 px-2">
        {Array.from({ length: filledStars }, (_, index) => (
          <AiFillStar key={`filled-star-${index}`} className="text-yellow-500"/>
        ))}
        {halfStar === 1 && <AiOutlineStar className="text-yellow-500" />}
        {Array.from({ length: emptyStars }, (_, index) => (
          <AiOutlineStar key={`empty-star-${index}`} />
        ))}
      </div>
      <div className="flex justify-between text-sm px-2">
        <div>
          <p>
            {categories} - {price}
          </p>
        </div>
        <div className="flex gap-2 items-center uppercase">
          <BsFillCircleFill className={statusColor} />
          {status}
        </div>
      </div>
      <br />
      <Link to={To} className="bg-blue-900 text-center py-3 text-white">
        LEARN MORE
      </Link>
    </div>
  );
};

export default Card;
