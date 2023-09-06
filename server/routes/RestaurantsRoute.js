import express from "express";
import {
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
  createRestaurant,
  deleteRestaurant,
} from "../controller/RestaurantsController.js";

const RestaurantsRoute = express.Router();

RestaurantsRoute.get("/restaurants", getAllRestaurants);
RestaurantsRoute.get("/restaurants/:id", getRestaurantById);
RestaurantsRoute.post("/restaurants", createRestaurant);
RestaurantsRoute.patch("/restaurants/:id", updateRestaurant);
RestaurantsRoute.delete("/restaurants/:id", deleteRestaurant);

export default RestaurantsRoute;
