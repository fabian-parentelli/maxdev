import mongoose from "mongoose";

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String },
    phone: { type: String },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    role: { type: String, required: true, default: 'user' },
    passId: { type: String },
});

export const userModel = mongoose.model(userCollection, userSchema);