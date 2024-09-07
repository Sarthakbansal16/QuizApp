import express from "express"
import { verifyToken } from "../middlewares/jwt.js";
import { getProfile, loginUser, registerUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("get-user-info",verifyToken,getProfile);


export default router;