import axios from "axios"
import useLlmConfig from "../stores/llmConfig"
import usePetStore from "../stores/petStore"
import { InfoVerify } from "../utils/LlmTools"

// import useUserInfoStore from "../stores/userInfoStore"

const petStore = usePetStore()

// 导入配置
const config = useLlmConfig().config

// 创建一个axios实例,用于llm的请求
const llm = axios.create({
  baseURL: config.api_url,
  // 设置超时时间为一分钟
  timeout: 1000 * 60,
  // 设置密钥
  headers: {
    "Authorization": `Bearer ${config.api_key}`,
    "Content-Type": "application/json"
  }
})

// 请求拦截器
// llm.interceptors.request.use(config => { })

// 响应拦截器
// llm.interceptors.response.use(response => {

//   return response
// }, error => {

//   return Promise.reject(error)
// })


const AiSearch = async (searchType: string, messages: string | null) => {
  // 判断messages是否为空
  if (messages === '' && messages === null) {
    return false
  }

  // 拿到收集的宠物信息
  const state = petStore.state
  // 定义一个提示信息
  let prompt: string = `
  在回答问题之前,请先阅读以下信息,明白你的职责:
  1. 你只能处理有关与宠物的信息,不要处理其他无关信息
  2. 不得回复涉及政治的问题
  3. 不得回复涉及黄赌毒的问题
  4. 回复语言要文明,不得出现辱骂等不文明用语,统一使用简体中文
  `

  // 创建一个聊天模板
  if (InfoVerify(state) === false) {
    // 如果信息不完整,则继续收集信息
    prompt += `
    这是一段描述宠物的文字
    
    ${messages}
    
    请根据这段文字进行分析,提取出宠物的特征,并补全这份信息
    你需要按照以下要求完成任务:
    1. 返回的信息必须是一个对象,且只输出对象,不要输出其他无关内容
    2. 你不需要注重显示格式,因为这份数据将会被直接存储,所以直接给出数据即可
    3. 如果从这段文字中无法提取出某项数据,请将这项value设置为null,必须保留key
    4. 数据key不需要使用""包裹,对象数据中不要出现\n等换行符,直接返回JSON.stringify()后的数据

    对象格式如下:

    {
        images: null,             // 照片
        species: null,            // 物种
        coat: null,               // 毛发长短
        fur_type: null,           // 毛发类型(蓬松,卷毛,顺滑)
        fur_color: null,          // 毛发颜色
        temperament: null,        // 目测性格
        size: null,               // 体型
        limbs: null,              // 四肢长短
        ears: null,               // 耳部现状
        tail: null                // 尾部
    }
    `
  } else {
    // 如果信息完整,则直接进行搜索
    prompt += `
  
    `

  }


  try {

    if (searchType === 'image') {
      // 图片和文本形式进行搜索

      // 检测是否有图片
      if (state.images === null) {
        return false
      }

      // 请求llm
      const { data } = await llm.post('/v1/chat/completions', {

      })

      console.log(data)

    }
    else if (searchType === 'text') {
      // 仅以文字形式进行搜索

      let raw = JSON.stringify({
        "model": "gemini-1.5-pro",
        "max_tokens": 4096,
        "messages": [{
          "role": "user",
          "content": prompt
        }]
      })
      let { data } = await llm({
        method: 'POST',
        timeout: (180 * 1000),
        url: '/v1/chat/completions',
        data: raw
      })
      data = JSON.parse(data.choices[0].message.content)
      console.log(data)
      return data

    }
    else {
      // 未知的搜索类型
      return false
    }

  }


  // 处理报错信息
  catch (error) {
    console.log(error)
    return false
  }

}


llm.prototype.AiSearch = AiSearch
llm.prototype.InfoVerify = InfoVerify

export {
  llm,
  AiSearch,
}
