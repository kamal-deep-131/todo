import { Router } from "express";
import register from "../controllers/register.controller.js";

const router = Router();

router.post("/register", register)

router.get("/login", (req, res) => {
    res.json({
        message: "login"
    });
})

export default router;