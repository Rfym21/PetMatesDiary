
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface LlmConfigType {
  api_url: string,
  api_key: string
}

const useLlmConfig = defineStore('llmConfig', () => {
  const config = ref<LlmConfigType>({
    api_url: "https://apir.me",
    api_key: "sk-8ZNPhyKXCRUTe5xHE270A5Bd893a421e90920fB58dAa3eA4"
  })

  return {
    config
  }

})

export default useLlmConfig