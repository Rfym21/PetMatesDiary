const OpenAI = require('openai')
const config = require('../config/config.js')

const InitConfig = () => {
  const openaiConfig = {
    baseURL: "",
    apiKey: ""
  }
  try {
    if (config.openai.random) {
      // 随机获取一个baseURL
      const randomIndex = Math.floor(Math.random() * config.openai.channel.length)
      openaiConfig.baseURL = config.openai.channel[randomIndex].baseURL
      openaiConfig.apiKey = config.openai.channel[randomIndex].apikey
    } else {
      // 获取第一个baseURL
      openaiConfig.baseURL = config.openai.channel[0].baseURL
      openaiConfig.apiKey = config.openai.channel[0].apikey
    }
    return openaiConfig
  } catch (e) {
    console.log("OpenConfig 初始化失败！ => ", e)
  }

}

// 初始化OpenAI配置
const openaiConfig = InitConfig()

// 初始化OpenAI
const openai = new OpenAI({
  baseURL: openaiConfig.baseURL,
  apiKey: openaiConfig.apiKey
})

async function send(messages, stream = false, model, config = {}) {
  if (!messages || !messages.length) {
    return false
  }

  model = model || "gpt-4o"

  try {
    if (stream) {
      // 流式对话
      const stream = await openai.chat.completions.create({
        model,
        messages,
        stream: true,
        ...config
      })
      return stream
      // 中断流输出
      // stream.controller.abort()
    } else {
      // 普通对话
      const chatCompletion = await openai.chat.completions.create(
        {
          messages,
          model,
          stream: false,
          ...config
        }
      )

      return chatCompletion
    }

  } catch (e) {
    console.log("Openai 发送请求时出错！ => ", e)
  }

}

async function models() {

}

openai.send = send
openai.models = models

module.exports = openai

/* 

[
  {
    role: 'user',
    content: 'Say this is a test'
  }
]

*/