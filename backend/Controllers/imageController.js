import Image from "../Models/imageModel";
import Category from "../Models/categoryModel";
//get images------------------------------------------------------
export const getImagesByCategory = async (req, res) => {
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
export const addImage = async (re, res) => {
  try {
    const { categoryTitle, description } = req.body;

    const category = await Category.findOne({ title: categoryTitle });
    if (!category) return res.status(404).json({ error: "Category not found" });

    const uploadToCloudinary = () =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: `portfolio/${categoryTitle}` },
          (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }
        );
        stream.end(req.file.buffer);
      });

    const imageUrl = await uploadToCloudinary();

    const image = new Image({
      category: category._id,
      imageUrl,
      description,
    });

    await image.save();
    res.status(201).json(image);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//delete an image------------------------------------------------
export const deleteImage = async (req, res) => {
  await Image.findByIdandDelete(req.params.id);
  res.json({ message: "image Deleted" });
};
