import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "../../Interfaces/User";
import Logger from "../../Lib/Logger";

// Create a monogoose schema for the user
// It will contain what IUser interface contains
// uid should also be unique and increment from 0
export const UserSchema = new Schema({
    uid: {
        type: Number,
        required: true,
        unique: true,
        default: 0
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    pet_uid: {
        type: String,
        required: true,
    },
});

// Create new model from schema
export const UserModel = mongoose.model<IUser & Document>("user", UserSchema);