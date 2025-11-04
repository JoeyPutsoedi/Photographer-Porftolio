import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import categoryRoutes from "./routes/categories.js";
import imageRoutes from "./routes/images.js";
import videoRoutes from "./routes/video.js";
import adminRoutes from "./routes/admin.js";
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
      "https://backend-creativerori.fly.dev",
      "https://creativerori-api.onrender.com",
      "https://creativerori.online",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use((req, res, next) => {
  console.log(req.path);
  next();
});

//backend routes
app.use("/api/categories", categoryRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/", adminRoutes);
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
