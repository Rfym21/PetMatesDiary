import BScroll from '@better-scroll/core'
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'

/**
 * 封装 BScroll 初始化方法,优化 BScroll 的使用,减少重复代码，使得DOM结构在变化时能够自动刷新
 * @param {HTMLElement | null} DOM - 要操作的 DOM 元素，可以为空
 * @param {BScrollConstructor<{}> | null} obj - 已有的 BScroll 对象，可以为空
 * @param {{} | null} _rule - 用于初始化 BScroll 的规则对象，可以为空
 * @returns {BScrollConstructor<{}> | null} - 返回新创建或已有的 BScroll 对象，或者在 DOM 不存在时返回空
 * @author @Rfym21(如风雨沐丷)
 * @time 2024-8-3
 */
function BScrollInit(DOM: HTMLElement | null, obj: BScrollConstructor<{}> | null, _rule: {} | null, config: {} | null) {
  // console.log(DOM, obj)


  // 如果没有数据则不初始化
  if (DOM === null) {
    return null
  }

  const rule = _rule || { click: true, probeType: 3 }
  let Object: BScrollConstructor<{}> | null = null

  // 如果已经初始化则销毁
  if (obj !== null) {
    obj.destroy()
  }

  Object = new BScroll(DOM, rule)

  // 使用MutationObserver API 监听DOM变化
  const ObjectRefresh = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList' || mutation.type === 'characterData' || mutation.type === 'attributes') {
        Object && Object.refresh()
      }
    }
  })

  config = config || {
    // 监听子节点的变化,添加,删除,替换
    childList: true,
    // 监听节点属性的变化
    // subtree: true,
    // 监听节点数据的变化
    // characterData: true
  }

  ObjectRefresh.observe(DOM, config)

  return Object

}

export {
  BScrollInit
}