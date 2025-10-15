import express from "express";
import { createAdmin, loginAdmin } from "../Controllers/adminController.js";

const router = express.Router();

//create admin
router.post("/createAdmin", createAdmin);
//login admin
router.post("/login", loginAdmin);

export default router;
