import mongoose from "mongoose";

/* 
const userSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        password: String,
        Name: String,
    }
);
*/

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            min: [8, "Password must be at least 8 characters long"],
            max: [15, "Password must be at most 15 characters long"]
        }
    }, {timestamps: true}
);


export const User = mongoose.model("User", userSchema);