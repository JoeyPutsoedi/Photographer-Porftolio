import express from "express";
import upload from "../Config/multer.js";
import {
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../Controllers/categoryControllers.js";
//create express app
const app = express();

//create express router
const router = express.Router();

//ROUTES------------------------------------------------------
//Get all Categories
router.get("/", getCategory);

//Create a new category
router.post("/", upload.array("thumbnails", 2), createCategory);

//Delete a Category
router.delete("/:id", deleteCategory);

//Update a Category
router.patch("/:id", upload.array("thumbnails", 2), updateCategory);

export default router;
