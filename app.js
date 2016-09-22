require('babel-core/register');
require("babel-polyfill");
const Koa = require('koa');
const app = new Koa();

app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// // logger

// app.use(async function (ctx, next) {
//   const start = new Date();
//   await next();
//   const ms = new Date() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });


app.use(ctx => {
	ctx.body = "hi"
});

app.listen(3333);