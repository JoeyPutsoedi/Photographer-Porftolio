import mongoose from "mongoose";

const imageSchema = mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    imageUrl: [String],
  },
  { timestamps: true }
);

export default mongoose.model("image", imageSchema);
