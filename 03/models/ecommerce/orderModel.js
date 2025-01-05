import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
            },
        ],
        paymentIntent: {},
        orderStatus: {
            type: String,
            default: "Not Processed",
            enum: [
                "Not Processed",
                "Processing",
                "Dispatched",
                "Cancelled",
                "Completed",
            ],
        },
        orderedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        orderPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        Address: {
            type: String,
            required: true,
            lowercase: true
        }
    }, { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);