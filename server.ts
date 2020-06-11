import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';

import * as KoaJson from 'koa-json';
import * as KoaLogger from 'koa-logger';

import * as KoaBodyParser from 'koa-bodyparser';

// Instances
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

app.listen(PORT, () => console.log(`Listening http://0.0.0.0:${PORT}`));