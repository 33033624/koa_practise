const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const fs = require('fs')
const path = require('path')


const files = fs.readdirSync(path.join(__dirname, '/controller'))
const jsfile = files.filter(item => {
  return item.endsWith('.js')
})

jsfile.map(item => {
  const url = path.join(__dirname, '/controller/', item)
  let mapping = require(url)
  var keys = Object.keys(mapping)
  var values = Object.values(mapping)
  keys.forEach((item, k) => {
    if (item.startsWith('GET')) {
      router.get(item.slice(3), values[k])
    } else if (item.startsWith('POST')) {
      router.post(item.slice(4), values[k])
    } else {
      console.log('no path')
    }
  })
})

app.use(bodyParser())
app.use(router.routes())
// SSL options
var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
}
app.listen(3000)
