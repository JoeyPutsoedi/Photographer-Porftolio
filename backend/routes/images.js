import express from "express";
import {
  addImage,
  deleteImage,
  getImagesByCategory,
} from "../Controllers/imageController";

const router = express.Router();

//Get images
router.get("/:categoryTitle", getImagesByCategory);

//Upload an image
router.post("/", addImage);

//Delete an image
router.delete("/:id", deleteImage);

export default router;
