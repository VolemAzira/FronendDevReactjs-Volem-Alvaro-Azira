import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Restaurants = db.define(
  "restaurants",
  {
    name: DataTypes.STRING,
    categories: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    price: DataTypes.STRING,
    status: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Restaurants;

(async () => {
  await db.sync();
})();
