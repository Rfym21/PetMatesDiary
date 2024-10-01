const Router = require('@koa/router')

const createRouter = () => {
  return new Router()
}

const routerInit = (app, routers) => {
  routers.forEach(router => {
    app
      .use(router.routes())
      .use(router.allowedMethods())
  })

  console.log('路由挂载成功完成！')
}

module.exports = {
  createRouter,
  routerInit
}