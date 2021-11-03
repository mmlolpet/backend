import mongoose, { Document, Schema } from "mongoose";
import { IPet } from "../../Interfaces/Pet";
import Logger from "../../Lib/Logger";

// Create a mongoose schema from IPet interface
export const PetSchema: Schema = new Schema({
    uid: {
        type: Number,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    health: {
        type: Number,
        required: true
    },
    happiness: {
        type: Number,
        required: true
    },
    hunger: {
        type: Number,
        required: true
    },
    thirst: {
        type: Number,
        required: true
    },
    energy: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

// increment uid by 1 every time a new user is created
// Check the last uid in the database and add 1 to it
PetSchema.pre("save", function(next) {
    const pet = this as IPet;
    mongoose.model("pet").findOne({}, function (err: mongoose.CallbackError | undefined, result: { uid: number; }) {
        if(err)
        {
            Logger.error(err);
            return next(err);
        }

        if(result)
            pet.uid = result.uid + 1;
        else
            pet.uid = 1;

        next();
    });
});

// Create new model from schema
export const PetModel = mongoose.model<IPet & Document>("pet", PetSchema);