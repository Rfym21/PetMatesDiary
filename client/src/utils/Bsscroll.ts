import BScroll from '@better-scroll/core'
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'
import ObserveDOM from '@better-scroll/observe-dom'
import MouseWheel from '@better-scroll/mouse-wheel'
import ObserveImage from '@better-scroll/observe-image'
import ScrollBar from '@better-scroll/scroll-bar'
import NestedScroll from '@better-scroll/nested-scroll'

BScroll.use(NestedScroll)
BScroll.use(ScrollBar)
BScroll.use(ObserveImage)
BScroll.use(MouseWheel)
BScroll.use(ObserveDOM)

function BScrollInit(DOM: HTMLElement | null, obj: BScrollConstructor<{}> | null, _rule: {} | null) {

  // 如果没有数据则不初始化
  if (DOM === null) {
    return null
  }

  if (obj === null) {
    // 如果没有对象没有值则初始化

    let Object: BScrollConstructor<{}> | null = obj || null
    let rule: any = {
      click: true,
      probeType: 3,
      observeDOM: true,
      observeImage: true, // 开启 observe-image 插件
      mouseWheel: {
        speed: 100,
        invert: false,
        easeTime: 100
      },
      scrollbar: true
    }

    if (_rule) {
      rule = { ...rule, ..._rule }
    }

    Object = new BScroll(DOM, rule)

    return Object

  } else {
    // 如果有对象传入则刷新
    obj.refresh()
    return obj
  }

}

export {
  BScrollInit
}