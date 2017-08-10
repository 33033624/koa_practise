const LoginSuccess = async (ctx, next) => {
  ctx.state = {title: 'hello', content: 'welcome to koa practise, your login is very success'}
  await ctx.render('LoginSuccess')
}
module.exports = {
  LoginSuccess: LoginSuccess
}
