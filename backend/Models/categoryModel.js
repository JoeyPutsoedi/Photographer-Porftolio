import mongoose from "mongoose";

const CategorieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    thumbnail: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorieSchema);
