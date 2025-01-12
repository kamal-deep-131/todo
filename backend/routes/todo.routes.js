import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", authMiddleware, (req, res) => {

    res.send("Hello tasks of kamal")
})

export default router