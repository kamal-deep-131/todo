import { Schema, model } from "mongoose";

const todoSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User", // User model reference
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


export default model("Todo", todoSchema);
