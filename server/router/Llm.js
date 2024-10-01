const { createRouter } = require('./router.js')
const llm = createRouter()

llm.get('/models', async (ctx, next) => {

  ctx.body = {
    code: 200,
    data: [
      {
        id: 1,
        name: 'model1'
      },
      {
        id: 2,
        name: 'model2'
      }
    ]
  }
})

module.exports = llm