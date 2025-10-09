import Category from "../Models/categoryModel.js";
import { uploadToCloudinary } from "../Config/Cloudinary.js";

//get categories------------------------------------------------------------------------
export const getCategory = async (req, res) => {
  const categories = await Category.find().sort({ createdAt: -1 });
  res.json(categories);
};

//Create a new category-----------------------------------------------------------------
export const createCategory = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });
    if (!req.files || req.files.length < 2) {
      return res.status(400).json({ error: "Two thumbnails required" });
    }

    // Upload all thumbnails
    const uploadedThumbnails = await Promise.all(
      req.files.map((file) => uploadToCloudinary(file.buffer))
    );

    const category = new Category({
      title,
      thumbnail: uploadedThumbnails,
    });

    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a category---------------------------------------------------------------------
export const deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: "Category Deleted" });
};

//update a category---------------------------------------------------------------------
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    let thumbnails;
    if (req.files && req.files.length > 0) {
      thumbnails = await Promise.all(
        req.files.map((file) => uploadToCloudinary(file.buffer))
      );
    }

    const category = await Category.findByIdAndUpdate(
      id,
      { title, ...(thumbnails && { thumbnail: thumbnails }) },
      { new: true }
    );

    if (!category) return res.status(404).json({ error: "Category not found" });

    res.json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
