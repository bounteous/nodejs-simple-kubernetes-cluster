import { Document } from "mongoose";

export interface IUser extends Document {
    firstName: string;
    secondName: string;
    email: string;
};

export interface ICreateUserInput {
    firstName: IUser['firstName'];
    secondName: IUser['secondName'];
    email: IUser['email'];
}