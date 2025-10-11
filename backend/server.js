import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import categoryRoutes from "../backend/routes/categories.js";
import imageRoutes from "../backend/routes/images.js";

//oonfigure .env file to gain access to it's contents
dotenv.config();

//create an express app
const app = express();

//middleware

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://creativerori.vercel.app",
      "https://creativerori-api.onrender.com/",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path);
  next();
});

//backend routes
app.use("/api/categories", categoryRoutes);
app.use("/api/images", imageRoutes);
//Connect to mongo DB
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    //Listen for Requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to Db & Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
