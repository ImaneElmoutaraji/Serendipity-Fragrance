import { Router } from "express";
import authRoute from "./authRoutes.js";

const routes = Router()
routes.use(authRoute)