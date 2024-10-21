import { defineStore } from 'pinia'
import { ref } from 'vue'

interface stateType { }

const useStatusStore = defineStore('status', () => {
  const state = ref<stateType>({

  })

  return {
    state
  }

})

export default useStatusStore