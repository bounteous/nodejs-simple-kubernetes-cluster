import * as mongoose from 'mongoose';
import { IUser } from './user.type';
import { create } from './user.utils';

describe('User utils type', () => {
    const URL: string = process.env.MONGO_URL as string;
    let connection: any;

    beforeAll(async () => {
        connection = await mongoose.connect(URL, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    afterAll(async () => {
        await connection.close();
    });

    it('create()', async () => {
        try {
            const user: IUser = await create({
                email: 'a',
                firstName: 'b',
                secondName: 'c'
            }) as IUser;

            expect(user.email).toBe('a');
            expect(user.firstName).toBe('b');
            expect(user.secondName).toBe('c');
        } catch (error) {
            console.log(error)
            throw error;
        }
    })
})