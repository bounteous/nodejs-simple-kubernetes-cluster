import { UserSchema } from "./user.schema";
import { ICreateUserInput } from "./user.type";

export async function create(user: ICreateUserInput): Promise<any> {
    try {
        const instance = new UserSchema();
        instance.email = user.email;
        instance.firstName = user.firstName;
        instance.secondName = user.secondName;
    
        console.log(`New user created -> ${JSON.stringify(user)}`);

        return await instance.save();
    } catch (error) {
        console.error(error);
        return 'Error creating new user';
    }
}

export async function findOne(email: string): Promise<any> {
    try {
        return UserSchema.findOne({ email });
    } catch (error) {
        console.error(error);
        return 'Error finding user';
    }
}