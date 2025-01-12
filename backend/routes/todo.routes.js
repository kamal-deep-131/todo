import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import addTask from "../controllers/addTask.controller.js";
import showTasks from "../controllers/showTasks.controller.js";
import updateTasks from "../controllers/updateTasks.controller.js";

const router = Router();

router.post("/add", authMiddleware, addTask)
router.get("", authMiddleware, showTasks)
router.put("/update/:id", authMiddleware, updateTasks)

export default router