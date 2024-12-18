import { defineStore } from 'pinia'
import type { AiMsgType } from '../types/AiMsgType'
import { reactive } from 'vue'

const useAiMsgStore = defineStore('aiMsgStore', () => {
  const state: AiMsgType[] = reactive([
    {
      type: 'all',
      role: 'assistant',
      content: 'AI系统将通过精密的图像分析技术，结合您提供的宠物详细描述，进行全面的数据处理和智能识别，以精准地揭示您宠物的品种身份。我将深入解析宠物的视觉特征，并与庞大的品种数据库进行智能对比，确保鉴定结果的准确无误。同时，您的补充描述，如宠物的体型、毛发质地、以及独特的行为特征，将被纳入综合考量，以进一步增强品种鉴定的精确度。接下来请根据我的引导完成接下来的步骤。'
    }
  ])

  function addMsg(msg: AiMsgType) {
    state.push(msg)
  }

  function addMsgs(msgs: AiMsgType[]) {
    state.push(...msgs)
  }

  function reset() {
    state.splice(1, state.length)
  }

  return {
    state,
    addMsg,
    addMsgs,
    reset
  }

})

export default useAiMsgStore