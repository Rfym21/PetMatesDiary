<template>
  <main class="page h-screen flex flex-col">
    <!-- 顶部导航栏 -->
    <van-nav-bar title="猫咪大全" left-text="上一页" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <!-- 左边列表 -->
    <!-- <div ref="NavBar" class="overflow-hidden w-full h-full">
      <ul>
        <li v-for="(item, i) of state.cats" :key="i">
          <span class="block h-40">{{ item.country }}</span>
        </li>
      </ul>
    </div> -->


  </main>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import useCatsStore from '../../stores/catsStore'
import { BScrollInit } from '../../utils/Bsscroll'
import type { CatsType } from '../../types/catsType'

const catsStore = useCatsStore()
const router = useRouter()
const NavBar = ref(null)

// 定义状态
interface State {
  NavBarScroll: any,
  cats: CatsType[]
}

const state = reactive<State>({
  NavBarScroll: null,
  cats: []
})

onMounted(async () => {
  state.cats = await catsStore.cats
  nextTick(() => {
    console.log(NavBar.value);
    
    state.NavBarScroll = BScrollInit(NavBar.value, state.NavBarScroll, null)
  })
})


</script>

<style scoped></style>