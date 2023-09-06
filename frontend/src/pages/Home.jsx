// Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar"; // Import the Navbar component

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

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

  // Filter restaurants based on the "Open Now" option, selected category, and price
  const filteredRestaurants = restaurants
    .filter((restaurant) => !isOpenNow || restaurant.status === "open")
    .filter((restaurant) =>
      selectedCategory ? restaurant.categories.includes(selectedCategory) : true
    )
    .filter((restaurant) =>
      selectedPrice ? restaurant.price.includes(selectedPrice) : true
    );
  return (
    <div className="min-h-screen">
      {/* Use the Navbar component */}
      <Navbar
        isOpenNow={isOpenNow}
        setIsOpenNow={setIsOpenNow}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        clearFilters={() => {
          setIsOpenNow(false);
          setSelectedPrice(null);
          setSelectedCategory(null);
        }}
      />
      <h1 className="text-2xl mb-10">All Restaurants</h1>
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start lg:justify-between">
        {filteredRestaurants.map((restaurant) => (
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
