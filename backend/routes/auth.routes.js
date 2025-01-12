import { Router } from "express";
import register from "../controllers/register.controller.js";
import login from "../controllers/login.controller.js";

const router = Router();

router.post("/register", register)

router.post("/login", login)

export default router;