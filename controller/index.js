const email = async (ctx, next) => {
  ctx.response.body = `<h1>user and pass </h1>
  <form method='post' action='signin'>
  <p>user
    <input type='text' name='user'>
  </p>
  <p>pass
    <input type='text' name='pass'>
  </p>
  <p>
    <input type='submit' value='submit'>
  </p>
  </form>
  `
}

const signin = async (ctx, next) => {
  const {user, pass} = ctx.request.body
  if (user === 'koa' && pass === '12345') {
    ctx.response.body = `<h1>登录成功</h1>`
  } else {
    ctx.response.body = `<h1>登录失败 请重新登录</h1>
    <a href='/'>重新登录</a>
    `
  }
}

module.exports = {
  'GET/': email,
  'POST/signin': signin
}
