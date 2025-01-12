import express from "express";
import "dotenv/config";
import cors from "cors"

const app = express();

// middelware to parse json 
app.use(express.json());

//cross origin
app.use(cors())

//Accept json data
app.use(express.json({ limit: '100kb' }))

app.get("/", (req, res) => {
    res.send("Hello World!")
})

//auth routes
import authRoutes from "./routes/auth.routes.js";
app.use("/api/v1/auth", authRoutes);

//todo routes 
import todoRoutes from "./routes/todo.routes.js";
app.use("/api/v1/todo", todoRoutes);

export default app;
