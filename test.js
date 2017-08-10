const Koa = require('koa')
const router = require('koa-router')()
const views = require('koa-views')
const path = require('path')
const app = new Koa()

app.use(async (ctx, next) => {
  console.log('server in ing')
  await next()
})

router.use(views(path.join(__dirname, '/view'), {map: {html: 'nunjucks'}}))

router.get('/', async (ctx, next) => {
  ctx.state = {title: 'my title', user: 'lishupeng'}
  await ctx.render('index')
})

app.use(router.routes())

app.listen(3000)
