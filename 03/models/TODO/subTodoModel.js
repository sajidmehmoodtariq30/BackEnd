import mongoose from "mongoose";

const SubTodoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
            lowercase: true
        },
        status: {
            type: Boolean,
            default: false
        },
    },{timestamps: true}
);

export const SubTodo = mongoose.model("SubTodo", SubTodoSchema);