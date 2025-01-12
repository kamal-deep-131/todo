import Todo from "../model/todo.model.js";

const showTasks = async (req, res) => {
    try {
        const todo = await Todo.find({ user: req.user.id });

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Tasks not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Tasks fetched successfully",
            todo
        });
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching tasks",
        });
    }
};

export default showTasks