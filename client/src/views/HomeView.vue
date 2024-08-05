<template>
  <div class="page h-screen overflow-hidden" ref="HomePageDOM">
    <ul>
      <li>

        <!-- 头部导航栏 -->
        <topbar></topbar>

        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" lazy-render class="swipe mt-2 mb-2 h-[300px] ">
          <van-swipe-item v-for="image of images" :key="image" class="px-4 overflow-hidden">
            <img class="h-full rounded-lg" :src="image" />
          </van-swipe-item>
        </van-swipe>

        <!-- 内容 -->
        <main class="content pb-20">
          <!-- 猫咪百科 -->
          <div class="cat flex mx-auto w-[calc(100vw-2rem)] justify-between px-1 py-2">

            <div class="cat__left bg-[#ffca0c] h-36 w-7/12 mr-4">猫类知识百科</div>

            <div class="cat__right bg-[#fa7e40] h-36 flex-1 rounded-lg p-2" @click="toCats">

              <div class="image inline-block overflow-hidden rounded-lg w=[50%] h-[50%]">
                <p class="block text-6xl ">😸</p>
              </div>

            </div>

          </div>
          <!-- 小狗百科 -->
          <div class="dog flex mx-auto w-[calc(100vw-2rem)] justify-between px-1 py-2">

            <div class="dog__left bg-[#5bad24] h-36 w-7/12 ml-4 order-2">犬类知识百科</div>

            <div class="dog__right bg-[#467937] h-36 flex-1 order-1">犬类种类大全</div>

          </div>

          <!-- Ai宠物知识问答 -->
          <div class="ai flex mx-auto w-[calc(100vw-2rem)] h-24 justify-between px-1 py-2 bg-lime-500 mb-2">
            Ai宠物知识问答
          </div>
          <!-- Ai辨宠 -->
          <div class="ai flex mx-auto w-[calc(100vw-2rem)] h-24 justify-between px-1 py-2 bg-indigo-600 mb-16" @click="toAiSearch">
            Ai辨宠
          </div>

          <!-- 每日小知识 -->
          <div class="trivia">
            <h3 class="relative text-center text-2xl font-bold mb-4 border-solid border-slate-900 border-b-4 pb-4">
              每天一个小知识<button
                class=" block p-2 text-sm absolute bottom-2 right-6 cursor-pointer hover:bg-slate-200 rounded-md">
                <van-icon name="sort" class="rotate-90" />换一换</button>
            </h3>


            <ul>
              <li v-for="(item, i) of trivia" :key="i"
                class="w-[calc(100vw-2rem)] mx-auto px-3 py-2 mb-2 border-b-2 border-dashed border-slate-700">
                <section>
                  <h3 class="text-xl mb-2 font-bold">{{ item.title }}</h3>
                  <p class="text-md leading-6 text-slate-500">{{ item.desc }}</p>
                </section>
              </li>
            </ul>
          </div>

        </main>

      </li>
    </ul>
  </div>

  <!-- 回到顶部 -->
  <div
    class="animate__animated animate__rubberBand toTop rounded-full fixed bottom-24 right-4 overflow-hidden shadow-[0_0_10px_5px_rgb(226,130,168)] opacity-60 backdrop-filter backdrop-blur"
    v-if="state.toTop" @click="toTop">
    <img class="w-12 h-12 p-1" src="../assets/icon/to_top.png">
  </div>

  <!-- 底部Tabbar栏 -->
  <tabbar v-if="state.showTabbar" class="animate__animated animate__bounceInUp"></tabbar>

</template>

<script setup lang="ts">
import { toRefs, ref, onMounted, nextTick, reactive } from 'vue'
import { useRouter } from 'vue-router'
import topbar from '@/components/topbar.vue'
import tabbar from "@/components/tabbar.vue"
import useSwipeStore from '../stores/swipeStore'
import useDailyTriviaStore from '../stores/dailyTriviaStore'
import { BScrollInit } from '../utils/Bsscroll'
// ----------------------------------------------------------------------------------------------------------------------------------
const dailyTriviaStore = useDailyTriviaStore()
const swipeStore = useSwipeStore()
const { trivia } = toRefs(dailyTriviaStore)
const { images } = toRefs(swipeStore)
const HomePageDOM = ref(null)
const router = useRouter()
// ----------------------------------------------------------------------------------------------------------------------------------
interface state {
  HomePageScroll: any,
  toTop: boolean,
  showTabbar: boolean
}

const state = reactive<state>({
  HomePageScroll: null,
  toTop: false,
  showTabbar: true
})
// ----------------------------------------------------------------------------------------------------------------------------------
onMounted(async () => {
  nextTick(async () => {
    state.HomePageScroll = await BScrollInit(HomePageDOM.value, state.HomePageScroll, null)
    PageInit()
  })
})
// ----------------------------------------------------------------------------------------------------------------------------------
const toCats = () => {
  router.push({ name: 'Species', params: { type: 'cats' } })
}
// ----------------------------------------------------------------------------------------------------------------------------------
// 返回顶部以及底部Tabbar栏的显示与隐藏
const PageInit = () => {
  state.HomePageScroll?.on('scroll', (pos: any) => {
    const innerHeight = window.innerHeight

    if (innerHeight < Math.abs(pos.y)) {
      state.toTop = true
      state.showTabbar = false
    } else {
      state.toTop = false
      state.showTabbar = true
    }
  })
}
// ----------------------------------------------------------------------------------------------------------------------------------
// 返回顶部事件
const toTop = () => {
  const obj = state.HomePageScroll
  obj.scrollTo(0, 0, Math.abs(obj.y / 2))
}
// ----------------------------------------------------------------------------------------------------------------------------------
// 跳转到AiSearch页面
const toAiSearch = () => {
  router.push({ name: 'AiSearch' })
}
// ----------------------------------------------------------------------------------------------------------------------------------

</script>

<style lang="less" scoped></style>