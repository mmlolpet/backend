
import { NextFunction, Request, Response } from "express";
import { PetModel } from "../../../../Database/Schemas/PetSchame";
import { UserModel } from "../../../../Database/Schemas/UserSchema";
import { IPet } from "../../../../Interfaces/Pet";
import { APIError, APISuccess } from "../../../Responses/Response";

// Create new user from UserModel
export async function createUser(req: Request, res: Response, next: NextFunction)
{
    // Then make sure the uid is unique from the database
    // If it is, then create the user
    // If it is not, then return an error

    // Check if the uid is unique by trying to get the user from the database
    // If the user is found, then the uid is not unique
    // If the user is not found, then the uid is unique
    const User = await UserModel.findOne({ uid: req.body.uid });
    
    if(User)
        // If the user is found, then the uid is not unique
        return APIError({
            message: "The uid is not unique",
        }, 400)(res);

    // Create a new pet for the user
    const NewPet = await (new PetModel(<IPet>{
        nickname: "mmlol",
        age: 0,
        energy: 100,
        happiness: 100,
        hunger: 100,
        thirst: 100,
        health: 100,
    })).save();
    
    req.body.pet_uid = NewPet.uid;

    // Assuming the uid is unique
    // Create the user
    const NewUser = new UserModel(req.body);
    await NewUser.save();

    // Send the user back to the client
    APISuccess(NewUser)(res);
}