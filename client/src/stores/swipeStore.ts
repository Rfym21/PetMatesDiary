import { defineStore } from 'pinia'

const useSwipeStore = defineStore('swipeStore', () => {
  const images = [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
    'https://img.yzcdn.cn/vant/apple-3.jpg',
    'https://img.yzcdn.cn/vant/apple-4.jpg'
  ]

  return { images }
})

export default useSwipeStore