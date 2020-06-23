import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';

import * as KoaJson from 'koa-json';
import * as KoaLogger from 'koa-logger';

import * as KoaBodyParser from 'koa-bodyparser';

// Modules
import { instanceDb } from './microservices/db/db.module';
import { controller } from './controller/controller';

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
    ctx.body = controller.server.get.info()

    await next();
});

router.post('/user', async (ctx: Koa.Context, next: () => Promise<any>) => {
    const { email, firstName, secondName } = ctx.request.body;
    ctx.body = await controller.user.post.one({ email, firstName, secondName });

    await next();
});

router.get('/user', async (ctx: Koa.Context, next: () => Promise<any>) => {
    const email: string = ctx.query.email;
    ctx.body = await controller.user.get.one(email);

    await next();
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));