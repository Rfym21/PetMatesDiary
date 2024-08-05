import axios from "axios"
import useLlmConfig from "../stores/llmConfig"
import usePetStore from "../stores/petStore"
import { toRefs } from "vue"
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
    "Authorization": `Bearer ${config.api_key}`
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


const AiSearch = async (searchType: string) => {
  
  const state = toRefs(petStore.state)
  if (searchType === 'image') {

  } else {

  }

}

llm.prototype.AiSearch = AiSearch

export {
  llm,
  AiSearch
}
