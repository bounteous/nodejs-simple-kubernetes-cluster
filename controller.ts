// Server
import { getWebServer } from './microservices/http/http.util';
import { webServer } from "./microservices/http/http.type";
// User
import { ICreateUserInput } from "./microservices/users/user.type";
import {
    create as userCreate,
    findOne as userFindOne
} from './microservices/users/user.utils';

interface Controller {
    server: {
        get: {
            info: () => webServer
        }
    }
    user: {
        post: {
            one: (user: ICreateUserInput) => Promise<any>,
        },
        get: {
            one: (email: string) => Promise<any>
        }
    }
};

export const controller: Controller = {
    server: {
        get: {
            info: getWebServer
        }
    },
    user: {
        post: {
            one: userCreate
        },
        get: {
            one: userFindOne
        }
    }
};