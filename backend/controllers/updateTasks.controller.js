import Todo from "../model/todo.model.js";
import mongoose from "mongoose";

const updateTask = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid task ID",
        });
    }

    try {
        const { title, description } = req.body;

        if (!title && !description) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            })
        }

        todo.title = title;
        todo.description = description;

        await todo.save();

        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            todo
        })
    }
    catch (error) {
        console.error("Error updating task:", error);
    }
}

export default updateTask