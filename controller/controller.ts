import { Controller } from './controller.type';

import { getWebServer } from '../microservices/http/http.util';
import {
    create as userCreate,
    findOne as userFindOne,
    findMultiple as userFindMultiple
} from '../microservices/users/user.utils';

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
            one: userFindOne,
            multiple: userFindMultiple
        }
    }
};