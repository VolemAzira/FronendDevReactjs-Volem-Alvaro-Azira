import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import RestaurantsRoute from "./routes/RestaurantsRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(RestaurantsRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
