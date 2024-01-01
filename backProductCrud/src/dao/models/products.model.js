import mongoose from "mongoose";

const productCollection = 'products';

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: String },
    imgName: { type: String },
    path: { type: String },
    status: { type: Boolean, default: true }
});

export const productModel = mongoose.model(productCollection, productSchema);