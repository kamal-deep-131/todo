import { Router } from "express";

const router = Router();

router.get("/register", (req, res) => {
    res.json({
        message: "register"
    });
})
router.get("/login", (req, res) => {
    res.json({
        message: "login"
    });
})

export default router;