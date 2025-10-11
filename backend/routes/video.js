import express from "express";

const router = express.Router();

//add video
router.post("/", (req, res) => {
  res.send("Video posted successfully");
});

//fetch video
router.get("/", (req, res) => {
  res.send("Here are all the videos");
});

//delete video
router.delete("/:id", (req, res) => {
  res.send("Video deleted succesfully");
});

export default router;
