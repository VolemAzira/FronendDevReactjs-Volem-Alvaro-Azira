import Restaurants from "../models/RestaurantsModel.js";
import path from "path";
import fs from "fs";

// Common error response function
const sendErrorResponse = (res, status, message) => {
  console.error(message);
  res.status(status).json({ msg: message });
};

export const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurants.findAll();
    res.json(restaurants);
  } catch (error) {
    sendErrorResponse(res, 500, "Internal Server Error");
  }
};

export const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurants.findOne({
      where: { id: req.params.id },
    });
    if (!restaurant) {
      return res.status(404).json({ msg: "Restaurant not found" });
    }
    res.json(restaurant);
  } catch (error) {
    sendErrorResponse(res, 500, "Internal Server Error");
  }
};

export const createRestaurant = async (req, res) => {
  try {
    const {
      name,
      categories,
      rating,
      price,
      description,
      status,
    } = req.body;

    const file = req.files ? req.files.file : null;
    if (!file) {
      return res.status(400).json({ msg: "No File Uploaded" });
    }

    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = `${Date.now()}${ext}`;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedTypes = [".png", ".jpg", ".jpeg"];

    if (!allowedTypes.includes(ext.toLowerCase())) {
      return res.status(422).json({ msg: "Invalid file type" });
    }
    if (fileSize > 5000000) {
      return res.status(422).json({ msg: "File size too large" });
    }

    file.mv(`./public/images/${fileName}`, async (err) => {
      if (err) {
        sendErrorResponse(res, 500, "Internal Server Error");
      } else {
        try {
          await Restaurants.create({
            name,
            categories,
            rating,
            price,
            status,
            description,
            image: fileName,
            url,
          });
          res.json({ msg: "Restaurant Created" });
        } catch (error) {
          sendErrorResponse(res, 500, "Internal Server Error");
        }
      }
    });
  } catch (error) {
    sendErrorResponse(res, 500, "Internal Server Error");
  }
};

export const updateRestaurant = async (req, res) => {
  const restaurantId = req.params.id;

  try {
    const restaurant = await Restaurants.findOne({
      where: { id: restaurantId },
    });
    if (!restaurant) {
      return res.status(404).json({ msg: "Restaurant not found" });
    }

    const { name, categories, rating, price, status, description } = req.body;

    const file = req.files ? req.files.file : null;
    if (!file) {
      return res.status(400).json({ msg: "No File Uploaded" });
    }

    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = `${Date.now()}${ext}`;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedTypes = [".png", ".jpg", ".jpeg"];

    if (!allowedTypes.includes(ext.toLowerCase())) {
      return res.status(422).json({ msg: "Invalid file type" });
    }
    if (fileSize > 5000000) {
      return res.status(422).json({ msg: "File size too large" });
    }

    // Handle file upload and update the restaurant
    file.mv(`./public/images/${fileName}`, async (err) => {
      if (err) {
        sendErrorResponse(res, 500, "Internal Server Error");
      } else {
        try {
          await restaurant.update({
            name,
            categories,
            rating,
            price,
            status,
            description,
            image: fileName,
            url,
          });
          res.json({ msg: "Restaurant Updated" });
        } catch (error) {
          sendErrorResponse(res, 500, "Internal Server Error");
        }
      }
    });
  } catch (error) {
    sendErrorResponse(res, 500, "Internal Server Error");
  }
};

export const deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurants.findOne({
      where: { id: req.params.id },
    });
    if (!restaurant) {
      return res.status(404).json({ msg: "Restaurant not found" });
    }

    const filepath = `./public/images/${restaurant.image}`;
    fs.unlinkSync(filepath); // Delete the image file
    await Restaurants.destroy({
      where: { id: req.params.id },
    });
    res.json({ msg: "Restaurant Deleted" });
  } catch (error) {
    sendErrorResponse(res, 500, "Internal Server Error");
  }
};
