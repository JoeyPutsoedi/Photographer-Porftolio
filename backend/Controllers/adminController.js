import Admin from "../Models/adminModel.js";

//create Admin----------------
export const createAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.signUpAdmin(username, password);

    res.status(200).json({ username, admin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//login Admin----------------

export const loginAdmin = async (req, res) => {
  res.json("login user...");
};
