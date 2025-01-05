import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            default: 0,
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        stock: {
            type: Number,
            default: 0,
            required: true,
        },
        sold: {
            type: Number,
            default: 0,
        },
        photo: {
            type: String,
        },
    }, { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);