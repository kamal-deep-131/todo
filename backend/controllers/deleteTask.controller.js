import Todo from "../model/todo.model.js";
import mongoose from "mongoose";

const deleteTask = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid task ID",
        });

    }

    try {
        const todo = await Todo.findOneAndDelete(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            })
        }

        await todo.del

        res.status(200).json({
            success: true,
            message: "Task deleted successfully"
        })

    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({
            success: false,
            message: "Error deleting task"
        })
    }

}

export default deleteTask