import express from "express";
import mongooose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import categoryRoutes from "../backend/routes/categories.js";

//oonfigure .env file to gain access to it's contents
dotenv.config();

//create an express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path);
  next();
});

//backend routes
app.use("/api/categories", categoryRoutes);

//Listen for Requests
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
