import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';

import * as KoaJson from 'koa-json';
import * as KoaLogger from 'koa-logger';

import * as KoaBodyParser from 'koa-bodyparser';

// Modules
import { instanceDb } from './microservices/db/db.module';
import { create as createUser, findOne as findOneUser } from './microservices/users/user.utils';

// Instances
instanceDb();
const app = new Koa();
const router = new KoaRouter();

// Constants
const PORT = process.env.PORT || 2424;

// Middlewares
app.use(KoaJson());
app.use(KoaLogger());
app.use(KoaBodyParser());

// Routes
app.use(router.routes()).use(router.allowedMethods());

router.get('/', async (ctx: Koa.Context, next: () => Promise<any>) => {
    ctx.body = { message: 'Server up and running ...' };
    await next();
});

router.post('/user', async (ctx: Koa.Context, next: () => Promise<any>) => {
    const { email, firstName, secondName } = ctx.request.body;
    ctx.body = await createUser({ email, firstName, secondName });
    await next();
});

router.get('/user', async (ctx: Koa.Context, next: () => Promise<any>) => {
    const email: string = ctx.query.email;
    ctx.body = await findOneUser(email);
    await next();
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));