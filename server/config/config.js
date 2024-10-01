const llm = require('../router/Llm.js')

module.exports = config = {
  port: 8201,
  routers: [
    llm
  ]
}