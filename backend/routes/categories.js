import express from "express";

//create express app
const app = express();

//create express router
const router = express.Router();

//Get all Categories
router.get("/", (req, res) => {
  res.json({ mssg: "This is a category" });
});

//get a single Category
router.get("/:id", (req, res) => {
  res.json({ mssg: "This is a single category" });
});

//Create a new category
router.post("/", (req, res) => {
  res.json({ mssg: "Create a new Category" });
});

//Delete a Category
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a Category" });
});

//Update a Category
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a Category" });
});

export default router;
