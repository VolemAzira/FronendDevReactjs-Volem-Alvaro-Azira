import { Sequelize } from "sequelize";

const db = new Sequelize("restaurants_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
