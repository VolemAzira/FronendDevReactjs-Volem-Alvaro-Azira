import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:3000/restaurants");
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching Restaurants:", error);
      }
    };
    getRestaurants();
  }, []);

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl mb-10">All Restaurants</h1>
      <div className="flex flex-wrap gap-10 justify-center lg:justify-normal">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <Card
              title={restaurant.name}
              image={restaurant.url}
              price={restaurant.price}
              categories={restaurant.categories}
              status={restaurant.status}
              rating={restaurant.rating}
              To={`/detail/${restaurant.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
