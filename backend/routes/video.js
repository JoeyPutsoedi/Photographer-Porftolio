import express from "express";
import {
  addVideo,
  deleteVideo,
  fetchVideo,
} from "../Controllers/videoController.js";
import upload from "../Config/multer.js";
const router = express.Router();

//add video
router.post("/", upload.single("video"), addVideo);

//fetch video
router.get("/", fetchVideo);

//delete video
router.delete("/:id", deleteVideo);

export default router;
