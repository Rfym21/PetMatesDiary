import BScroll from '@better-scroll/core'
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'

// 滚动优化
const BScrollInit = (DOM: HTMLElement | null, obj: BScrollConstructor<{}> | null, _rule: {} | null) => {
  const rule = _rule || { click: true }
  let Object = null
  console.log(DOM, obj, rule);

  // 如果没有数据则不初始化
  if (DOM === null) {
    console.log('DOM is 为NULL')

    return null
  }

  // 检测是否已经初始化 
  if (obj === null) {
    Object = new BScroll(DOM, rule)
    console.log('BScroll is 初始化')

    return Object
  }

  // 如果已经初始化则刷新
  obj.refresh()
  console.log('BScroll is 重新加载')
  return Object
}

export {
  BScrollInit
}