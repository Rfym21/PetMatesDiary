import { defineStore } from 'pinia'
import type { SpeciesType } from '../types/SpeciesType'

const useCatsStore = defineStore('catStore', () => {
  const state: SpeciesType[] = [
    {
      country: "中国",
      type: "中华田园猫",
      items: [
        {
          name: "橘猫",
          detail: "常见于农村，体型较大，性格温顺。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "三花猫",
          detail: "毛色为黑、白、橘三色，通常为母猫，性格温和。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "狸花猫",
          detail: "身体有明显的条纹，活泼好动。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "黑猫",
          detail: "全身黑色，被认为有辟邪的作用。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "英国",
      type: "英国短毛猫",
      items: [
        {
          name: "蓝猫",
          detail: "灰蓝色短毛，性格温顺。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "金色猫",
          detail: "毛色金黄，友善且聪明。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "银色猫",
          detail: "毛色银白，性格独立。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "美国",
      type: "缅因猫",
      items: [
        {
          name: "经典缅因猫",
          detail: "体型大，长毛，温和友善。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "银缅因猫",
          detail: "毛色银灰，性格活泼。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "俄罗斯",
      type: "西伯利亚猫",
      items: [
        {
          name: "传统西伯利亚猫",
          detail: "长毛，抗寒，性格温顺。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "新西伯利亚猫",
          detail: "毛色多样，适应力强。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "日本",
      type: "日本短尾猫",
      items: [
        {
          name: "短毛日本短尾猫",
          detail: "短毛，活泼好动。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "长毛日本短尾猫",
          detail: "长毛，温顺安静。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "泰国",
      type: "暹罗猫",
      items: [
        {
          name: "传统暹罗猫",
          detail: "毛色深浅不一，聪明好动。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "现代暹罗猫",
          detail: "体型更为修长，性格外向。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "土耳其",
      type: "土耳其安哥拉猫",
      items: [
        {
          name: "白色安哥拉猫",
          detail: "全身白色，毛发长而丝滑。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "黑色安哥拉猫",
          detail: "全身黑色，毛发长而浓密。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "埃及",
      type: "埃及猫",
      items: [
        {
          name: "斑点埃及猫",
          detail: "短毛，身体有斑点，聪明警觉。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "加拿大",
      type: "斯芬克斯猫",
      items: [
        {
          name: "无毛斯芬克斯猫",
          detail: "无毛，皮肤温暖，友善且好奇。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "法国",
      type: "沙特尔猫",
      items: [
        {
          name: "蓝色沙特尔猫",
          detail: "短毛，毛色蓝灰，性格温顺且独立。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "新加坡",
      type: "新加坡猫",
      items: [
        {
          name: "传统新加坡猫",
          detail: "短毛，小巧玲珑，温顺且聪明。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "苏格兰",
      type: "苏格兰折耳猫",
      items: [
        {
          name: "短毛苏格兰折耳猫",
          detail: "短毛，耳朵向前折，性格温顺。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "长毛苏格兰折耳猫",
          detail: "长毛，耳朵向前折，友善爱玩。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "挪威",
      type: "挪威森林猫",
      items: [
        {
          name: "棕虎斑",
          detail: "毛色为棕色，带有黑色条纹。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "黑色",
          detail: "全身纯黑，毛发长而厚实。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "白色",
          detail: "全身纯白，毛发长而浓密。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "澳大利亚",
      type: "澳大利亚雾猫",
      items: [
        {
          name: "蓝色雾猫",
          detail: "毛色蓝灰，性格温顺且友好。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "巧克力色雾猫",
          detail: "毛色深褐，聪明活泼。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "印度",
      type: "孟买猫",
      items: [
        {
          name: "经典孟买猫",
          detail: "全身黑色，毛发短且光滑，眼睛呈金色或铜色。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "埃塞俄比亚",
      type: "阿比西尼亚猫",
      items: [
        {
          name: "赤色阿比西尼亚猫",
          detail: "毛色赤褐色，性格外向。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "蓝色阿比西尼亚猫",
          detail: "毛色蓝灰色，活泼好动。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    },
    {
      country: "缅甸",
      type: "缅甸猫",
      items: [
        {
          name: "棕色缅甸猫",
          detail: "全身棕色，毛发短而光滑。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "蓝色缅甸猫",
          detail: "全身蓝灰色，毛发短而有光泽。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        },
        {
          name: "香槟色缅甸猫",
          detail: "全身淡黄褐色，毛发短而细腻。",
          image: "https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png"
        }
      ]
    }
  ]



  return {
    state
  }
})

export default useCatsStore