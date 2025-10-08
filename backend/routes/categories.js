import express from "express";
import multer from "multer";
import {
  createCategory,
  deleteCategory,
  getCategory,
} from "../Controllers/categoryControllers.js";
//create express app
const app = express();

//create express router
const router = express.Router();

//multer setup for parsing file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });
//ROUTES------------------------------------------------------
//Get all Categories
router.get("/", getCategory);

//Create a new category
router.post("/", upload.array("thumbnails", 2), createCategory);

//Delete a Category
router.delete("/:id", deleteCategory);

//Update a Category
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a Category" });
});

export default router;
