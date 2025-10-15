import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

//Hashing password-------------------------------------------
adminSchema.statics.signUpAdmin = async function (username, password) {
  //Validation------------------------------
  if (!username || !password) {
    throw new Error("Username & Password required!!!");
  }

  if (!validator.isEmail(username)) {
    throw new Error("Not a valid username!!!");
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("password not strong enough");
  }
  //find out if a similar username exists on the database
  const exists = await this.findOne({ username });

  //if it Exists
  if (exists) {
    throw Error("Username already in use");
  }

  //add a salt to the password before we hash it
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  //create a document that stores the username & hashed password
  const admin = await this.create({ username, password: hash });

  return admin;
};

export default mongoose.model("Admin", adminSchema);
