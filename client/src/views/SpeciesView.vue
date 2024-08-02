<template>
  <main class="page h-screen flex flex-col">
    <!-- 顶部导航栏 -->
    <van-nav-bar title="猫咪大全" left-text="上一页" left-arrow @click-left="onCancel"
      class=" border-b-[1px] border-solid border-slate-200">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <div class="warper flex-1 overflow-hidden flex justify-between">
      <!-- 左边列表栏 -->
      <div ref="NavBar" class="overflow-hidden w-[25vw] border-r-[2px] border-solid border-slate-200">
        <ul>
          <li v-for="(item, i) of state.species" :key="i" @click="onSelect(i)" ref="NavBars">
            <span
              :class="`block h-14  py-2 text-center text-ellipsis text-nowrap overflow-hidden text-base leading-10 ${state.active === i ? ' bg-slate-200 text-sky-500 border-l-4 border-solid border-sky-500' : 'px-2'}`">{{
                item.country }}</span>
          </li>
        </ul>
      </div>

      <!-- 右边内容栏 -->
      <div class="content overflow-hidden flex-1" ref="ContentWarp">
        <ul>
          <li v-for="(item, i) of state.species" :key="i" ref="Contents">
            <h1 class="title bg-slate-100 h-10 text-lg py-2 px-4 font-bold">{{ item.type }}</h1>
            <section
              class="desc bg-white border-b-[1px] p-1 border-solid border-slate-200 overflow-hidden flex justify-between"
              v-for="(n, i) of item.items" :key="i">

              <div class="left h-20 w-20 p-2"><img class="w-16 h-16 overflow-hidden rounded-lg shadow shadow-slate-200"
                  :src="n.image" alt=""></div>

              <div class="right flex-1 ml-2">
                <p class="name h-8 px-2 py-1 text-base font-bold text-ellipsis text-wrap overflow-hidden">{{ n.name }}
                </p>
                <p class="desc h-12 px-2 text-sm text-ellipsis text-wrap overflow-hidden">{{ n.detail }}</p>
              </div>

            </section>
          </li>
        </ul>
      </div>


    </div>

  </main>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import useCatsStore from '../stores/catsStore'
import { BScrollInit } from '../utils/Bsscroll'
import type { SpeciesType } from '../types/SpeciesType'
import { computedHeight } from '../utils/computed'

const catsStore = useCatsStore()
const router = useRouter()
const NavBar = ref(null)
const ContentWarp = ref(null)
const Contents = ref(null)
const NavBars = ref(null)
// ----------------------------------------------------------------------------------------------------------------------------------
// 定义组件状态规则
interface State {
  NavBarScroll: any,
  ContentWarpScroll: any,
  species: SpeciesType[],
  active: number,
  contentHeight: number[] | null
  navbarHeight: number[] | null
}

const state = reactive<State>({
  NavBarScroll: null,
  ContentWarpScroll: null,
  species: [],
  active: 0,
  contentHeight: [],
  navbarHeight: []
})
// ----------------------------------------------------------------------------------------------------------------------------------
onMounted(async () => {
  state.species = await catsStore.state
  nextTick(async () => {
    // 初始化左右两侧滚动条
    state.NavBarScroll = await BScrollInit(NavBar.value, state.NavBarScroll, null, null)
    state.ContentWarpScroll = await BScrollInit(ContentWarp.value, state.ContentWarpScroll, null, null)

    // 计算内容栏高度    
    state.contentHeight = await computedHeight(Contents.value)
    state.navbarHeight = await computedHeight(NavBars.value)
    // 同步滚动事件
    onWarpScroll()
  })
})
// ----------------------------------------------------------------------------------------------------------------------------------
// 点击顶部返回键事件
const onCancel = () => {
  router.go(-1)
}
// ----------------------------------------------------------------------------------------------------------------------------------
// 点击左侧列表栏选中事件
const onSelect = (i: number) => {
  state.active = i
  if (Contents.value !== null && state.contentHeight !== null) {
    const time = Math.floor(Math.abs(state.ContentWarpScroll.y - state.contentHeight[i + 1])) / 2
    state.ContentWarpScroll.scrollToElement(Contents.value[i], time)
  }
}
// ----------------------------------------------------------------------------------------------------------------------------------
// 左右两栏同步滚动事件
const onWarpScroll = () => {
  state.ContentWarpScroll.on('scroll', (position: any) => {
    if (state.contentHeight !== null) {
      for (let i = 0; i < state.contentHeight.length; i++) {
        if (Math.abs(position.y) >= state.contentHeight[i] && Math.abs(position.y) < state.contentHeight[i + 1]) {
          state.active = i
          if (NavBars.value !== null && state.navbarHeight !== null) {
            const time = Math.floor(Math.abs(state.NavBarScroll.y - state.navbarHeight[i + 1])) / 10
            state.NavBarScroll.scrollToElement(NavBars.value[i], time)
          }
        }
      }
    }
  })
}

// ----------------------------------------------------------------------------------------------------------------------------------

</script>

<style scoped></style>