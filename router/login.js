const email = async (ctx, next) => {
  ctx.state = {title: 'please info the user and password'}
  await ctx.render('login')
}

const signin = async (ctx, next) => {
  const {user, password} = ctx.request.body
  if (user === 'koa' && password === '12345') {
    ctx.redirect('/LoginSuccess')
  } else {
    ctx.redirect('/LoginFail')
  }
}

module.exports = {
  'getLogin': email,
  'signin': signin
}
