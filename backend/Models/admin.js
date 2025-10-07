import mongoose from "moongoose";

const Schema = mongoose.Schema();

const adminSchema = new Schema(
  {
    username: {
      type: string,
      require: true,
    },
    password: {
      type: string,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);
