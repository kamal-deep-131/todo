import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import addTask from "../controllers/addTask.controller.js";

const router = Router();

router.post("/add", authMiddleware, addTask)

export default router