import { webServer } from "../microservices/http/http.type";
import { ICreateUserInput, IUser } from "../microservices/users/user.type";

export interface Controller {
    server: {
        get: {
            info: () => webServer
        }
    }
    user: {
        post: {
            one: (user: ICreateUserInput) => Promise<IUser | string>,
        },
        get: {
            one: (email: string) => Promise<IUser | null | string>,
            multiple: (firstName: string) => Promise<IUser[] | null | string>
        }
    }
};
