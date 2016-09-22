'use strict';
const Koa = require('koa');
import {CSL, LOG} from './lib/logger';

const app = new Koa();

app.use(async function(ctx, next) {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// // logger

app.use(async function(ctx, next) {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    let x = 'sss';
    let ls = `${ctx.method} ${ctx.url} - ${ms}ms - ${x}\n`;
    process.stdout.write(ls);
    LOG.error(ls);
    // console.log(`${ctx.method} ${ctx.url} - ${ms}ms - ${x}`);
});

const x = async function x(ctx, next) {
    await next();
};

app.use((ctx) => {
    ctx.body = 'hell   ll';
});

// process.write(x());
LOG.info('Server started, listening on port: ' + 3333);
app.listen(3333);
