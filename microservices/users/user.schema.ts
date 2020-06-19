import * as mongoose from 'mongoose';
import { IUser } from './user.type';

const schema: mongoose.Schema = new mongoose.Schema({
    firstName: { type: String, required: false, unique: false },
    secondName: { type: String, required: false, unique: false },
    email: { type: String, required: true, unique: true },
});

export const UserSchema: mongoose.Model<IUser> = mongoose.model<IUser>('User', schema);