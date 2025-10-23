import Admin from "../Models/adminModel.js";
import jwt from "jsonwebtoken";

//reuseable funtion to generete tokens
const createToken = (id) => {
  return jwt.sign({ _id: id }, process.env.SECRET, { expiresIn: "15d" });
};

//create Admin----------------
export const createAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.signUpAdmin(username, password);

    //create a token
    const token = createToken(admin._id);

    res.status(200).json({ username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//login Admin----------------

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.logInAdmin(username, password);

    //create a token
    const token = createToken(admin._id);

    res.status(200).json({ username, token });
  } catch (error) {
    console.log("Login error:", error.message);

    res.status(400).json({ error: error.message });
  }
};
