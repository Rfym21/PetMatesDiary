const openai = require('./openai.js')

async function sendMessage() {
  const res = await openai.send([
    {
      role: 'user',
      content: '讲两个笑话'
    }
  ], true)

  // console.log(res.choices[0].message.content)
  for await (const chunk of res) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '')
  }
}

async function getModels() {

}

module.exports = {
  getModels,
  sendMessage
}

sendMessage()