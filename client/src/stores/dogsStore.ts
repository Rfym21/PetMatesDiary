import { defineStore } from 'pinia'
import type { SpeciesType } from '../types/SpeciesType'

const useDogsStore = defineStore('dogStore', () => {
  const state: SpeciesType[] = [
    {
      country: "中国",
      type: "中华田园犬",
      items: [
        {
          name: "柴犬",
          detail: "体型小巧，性格活泼，忠诚度高。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "藏獒",
          detail: "体型巨大，力量强大，用于护卫和狩猎。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "京巴",
          detail: "历史悠久，性格温顺，适合家庭饲养。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "沙皮狗",
          detail: "皮肤松弛，有独特的皱纹，性格独立。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "美国",
      type: "美国犬种",
      items: [
        {
          name: "拉布拉多",
          detail: "友好、活泼，常用于导盲和搜救。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "比特犬",
          detail: "肌肉发达，力量强大，性格坚定。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "贵宾犬",
          detail: "聪明、优雅，有多种大小和毛发类型。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "德国牧羊犬",
          detail: "智力高，工作能力强，常用于警务和军事。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "英国",
      type: "英国犬种",
      items: [
        {
          name: "英国斗牛犬",
          detail: "外表粗壮，性格温和，适合家庭。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "可卡犬",
          detail: "活泼、友好，常用于狩猎和伴侣。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "约克夏梗",
          detail: "小巧、勇敢，毛发长而直。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "西高地白梗",
          detail: "活泼、自信，毛发白色且硬。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "日本",
      type: "日本犬种",
      items: [
        {
          name: "秋田犬",
          detail: "大型犬，忠诚、勇敢，是日本的国宝。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "柴犬",
          detail: "中型犬，活泼、独立，具有独特的狐狸脸。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "日本狆",
          detail: "小型犬，优雅、聪明，毛发长而直。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "土佐犬",
          detail: "大型犬，力量强大，用于斗犬和护卫。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    }
  ]

  return {
    state
  }

})


export default useDogsStore