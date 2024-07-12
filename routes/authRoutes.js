import express from "express";
import { register} from "../controllers/AuthController.js";

const authRoute = express.Router();

authRoute.post("/register", register);
//authRoute.post("/login", login);

export default authRoute;