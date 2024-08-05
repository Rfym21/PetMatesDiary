import { defineStore } from 'pinia'
import type { PetType } from '../types/petType'
import { ref } from 'vue'


const usePetStore = defineStore('petStore', () => {

  const state = ref<PetType>({
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
  })

  return {
    state
  }

})

export default usePetStore