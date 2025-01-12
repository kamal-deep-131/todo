import Todo from "../model/todo.model.js";

const addTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const newTodo = await Todo.create({
            user: req.user.id, // `authMiddleware` sets req.user
            title,
            description,
        });

        await newTodo.save();

        res.status(201).json({
            success: true,
            message: "Task added successfully",
            todo: newTodo,
        });
    }
    catch (error) {
        console.error("Error adding task:", error);
        res.status(500).json({
            success: false,
            message: "Error adding task",
            error: error.message
        })
    }
}

export default addTask