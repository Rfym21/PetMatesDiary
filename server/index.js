const Koa = require('koa')
const app = new Koa()
const { bodyParser } = require("@koa/bodyparser")
const { routerInit } = require('./router/router.js')
const config = require('./config/config.js')

const { routers } = config
// 挂载路由
routerInit(app, routers)
// 使用bodyParser来解析请求体
app.use(bodyParser())
// 监听端口
app.listen(config.port,()=>{
  console.log(`http://localhost:${config.port}`)
})