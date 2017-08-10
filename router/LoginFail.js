const LoginFail = async (ctx, next) => {
  ctx.state = {
    title: 'login failed',
    content: 'the best is your next login success'
  }
  await ctx.render('LoginFail')
}
module.exports = {
  LoginFail: LoginFail
}
