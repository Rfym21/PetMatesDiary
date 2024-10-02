const llm = require('../router/Llm.js')

module.exports = config = {
  port: 8201,
  routers: [
    llm
  ],
  openai: {
    random: true,
    channel: [
      {
        baseURL: "https://apir.me/v1",
        apikey: "sk-CvfCTUM5pJW1FadK8cafdwbT0x1Ezs0MjC8jJ5fdDrL3OQRY"
      }
    ]
  }
}