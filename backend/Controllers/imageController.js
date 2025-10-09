import Image from "../Models/imageModel.js";
import Category from "../Models/categoryModel.js";
import { uploadToCloudinary } from "../Config/Cloudinary.js";

//get images------------------------------------------------------
export const getImages = async (req, res) => {
  try {
    const category = await Category.findOne({
      title: req.params.categoryTitle,
    });
    if (!category) return res.status(404).json({ error: "Category not found" });

    const images = await Image.find({ category: category._id });
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

//post an image---------------------------------------------------
export const addImage = async (req, res) => {
  try {
    const { categoryTitle } = req.body;
    if (!req.file) return res.status(400).json({ error: "No image uploaded" });

    const category = await Category.findOne({ title: categoryTitle });
    if (!category) return res.status(404).json({ error: "Category not found" });

    // Upload image to Cloudinary
    const imageUrl = await uploadToCloudinary(req.file.buffer);

    const image = new Image({
      category: category._id,
      imageUrl,
    });

    await image.save();
    res.status(201).json(image);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//delete an image------------------------------------------------
export const deleteImage = async (req, res) => {
  await Image.findByIdAndDelete(req.params.id);
  res.json({ message: "image Deleted" });
};
