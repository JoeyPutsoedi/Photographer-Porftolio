import Category from "../Models/categoryModel.js";

//get categories------------------------------------------------------------------------
export const getCategory = async (req, res) => {
  const categories = await Category.find().sort({ createdAt: -1 });
  res.json(categories);
};

//Create a new category-----------------------------------------------------------------
export const createCategory = async (req, res) => {
  try {
    const { title } = req.body;

    //Upload Thumbnails to Cloudinary
    const uploadThumbnails = req.files.map((file) =>
      cloudinary.uploader.upload_stream(
        { folder: "portfolio/categories" },
        (error, result) => {
          if (error) throw new Error(error);
          return result.secure.url;
        }
      )
    );

    // Cloudinary upload_stream returns via a stream, so we wrap it in a promise
    const uploadToCloudinary = (file) =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "portfolio/categories" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }
        );
        stream.end(file.buffer);
      });

    const thumbnails = await Promise.all(req.files.map(uploadToCloudinary));

    const category = await Category.create({ title, thumbnails });
    await category.save();
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a category
export const deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: "Category Deleted" });
};
//update a category
// export const upadateCategory = async (req, res) => {};
