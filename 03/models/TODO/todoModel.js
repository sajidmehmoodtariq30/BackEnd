import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        description: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        status: {
            type: Boolean,
            default: false
        },
        dueDate: {
            type: Date,
            required: true,
            unique: true,
            lowercase: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ]
    }, { timestamps: true });

export const Todo = mongoose.model("Todo", todoSchema);