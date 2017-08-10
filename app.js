const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const path = require('path')
const views = require('koa-views')
const logger = require('koa-logger')
const routers = require('./router')
const error = require('koa-onerror')

const app = new Koa()
error(app)
app.use(logger())
router.use(views(path.join(__dirname, '/view'), {map: {html: 'nunjucks'}}))
router.get('/login', routers.Login.getLogin)
router.post('/signin', routers.Login.signin)
router.get('/LoginSuccess', routers.LoginSuccess.LoginSuccess)
router.get('/LoginFail', routers.LoginFail.LoginFail)
router.get('*', async (ctx, next) => {
  ctx.body = '404 err'
})

app.use(bodyParser())
app.use(router.routes())

app.listen(3000)
