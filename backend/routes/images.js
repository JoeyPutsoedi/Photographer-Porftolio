import express from "express";
import upload from "../Config/multer.js";
import {
  addImage,
  deleteImage,
  getImages,
} from "../Controllers/imageController.js";

const router = express.Router();

//Get images
router.get("/:categoryTitle", getImages);

//Upload an image
router.post("/", upload.array("image"), addImage);

//Delete an image
router.delete("/:category/:id", deleteImage);

export default router;
