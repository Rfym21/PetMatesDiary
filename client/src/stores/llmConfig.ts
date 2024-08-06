
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface LlmConfigType {
  api_url: string,
  api_key: string
}

const useLlmConfig = defineStore('llmConfig', () => {
  const config = ref<LlmConfigType>({
    api_url: "https://apir.me",
    api_key: "sk-lFtSlspsYkON9iZ325C8C0B91c334222A4D114C3DbEaA5A4"
  })

  return {
    config
  }

})

export default useLlmConfig