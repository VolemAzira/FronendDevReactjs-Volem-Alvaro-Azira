import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Box from "../components/Box";

const Detail = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [status, setStatus] = useState("");
  const [rating, setRating] = useState("");
  const [descriptions, setDescriptions] = useState("");

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/restaurants/${id}`
        );
        setName(response.data.name);
        setUrl(response.data.url);
        setPrice(response.data.price);
        setCategories(response.data.categories);
        setStatus(response.data.status);
        setRating(response.data.rating);
        setDescriptions(response.data.description);
      } catch (error) {
        console.error("Error fetching Restaurants:", error);
        setError(error);
      }
    };
    getRestaurants();
  });
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div>
        <Link to="/">
          <button className="border px-7 py-2 hover:bg-gray-100 transition-all ease-in-out delay-75 mb-5">
            Back to Home
          </button>
        </Link>
        <Box
          title={name}
          image={url}
          price={price}
          categories={categories}
          status={status}
          rating={rating}
        >
          {descriptions}
        </Box>
      </div>
    </div>
  );
};

export default Detail;
