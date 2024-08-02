import { defineStore } from 'pinia'

const useSwipeStore = defineStore('swipeStore', () => {
  const images = [
    'https://vip.helloimg.com/i/2024/08/02/66ac65a6a3263.jpg',
    'https://vip.helloimg.com/i/2024/08/02/66ac65a76abeb.jpg',
    'https://vip.helloimg.com/i/2024/08/02/66ac7fbf8795d.jpg',
    'https://vip.helloimg.com/i/2024/08/02/66ac7fbfb2825.jpg',
    'https://vip.helloimg.com/i/2024/08/02/66ac7fbfb454e.jpg',
    'https://vip.helloimg.com/i/2024/08/02/66ac7fc6842e6.jpg',
    'https://vip.helloimg.com/i/2024/08/02/66ac7fcbcf32b.jpg',
    'https://vip.helloimg.com/i/2024/08/02/66ac7fd02027e.jpg'
  ]

  return { images }
})

export default useSwipeStore