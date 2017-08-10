const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = require('koa-router')()

app.use(async(ctx, next) => {
  await next()  // 变异步为同步操作 执行完毕next然后向下执行   并且next下面为公用部分 每一次执行完middleware都会继续向下执行一次 公用部分
  console.log(ctx.request.method)
  console.log(ctx.path)
  console.log(1)
})

// router是路由处理操作
router.get('/', async (ctx, next) => {
  console.log(2)
  ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`
})

router.get('/a/:id', async (ctx, next) => {
  const id = ctx.params.id
  ctx.response.body = `<h2>hello ${id} </h2>`
})

router.post('/signin', async (ctx, next) => {
  var name = ctx.request.body.name || ''
  var password = ctx.request.body.password || ''
  console.log(`signin with name: ${name}, password: ${password}`)
  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
    <p><a href="/">Try again</a></p>`
  }
})

// 处理传递参数的中间件  要优先router注册到app对象上
app.use(bodyParser())

//  middleware
// router.routes() 就是上面主题函数里面的next参数，并且 async  await 会使其优先执行
app.use(router.routes())
app.listen(3000)
