<template>
  <!-- Tabbar -->
  <footer
    class="tabbar flex justify-evenly align-bottom fixed bottom-4 bg-slate-300 w-11/12 h-14 mx-auto left-0 right-0 backdrop-blur-3xl backdrop-filter opacity-80 rounded-full py-1 text-sm text-slate-500 shadow-lg">
    <router-link to="/" class="home" @click="active = 0">
      <van-icon name="wap-home" size="2em" :color="`${active === 0 ? '#000000' : ''}`" />
      <p :style="`${active === 0 ? 'color: #000000;' : ''}`">萌宠</p>
    </router-link>
    <router-link to="/shop" class="shop" @click="active = 1">
      <van-icon name="goods-collect" size="2em" :color="`${active === 1 ? '#000000' : ''}`" />
      <p :style="`${active === 1 ? 'color: #000000;' : ''}`">交易</p>
    </router-link>
    <router-link to="/circle" class="circle" @click="active = 2">
      <van-icon name="wechat-moments" size="2em" :color="`${active === 2 ? '#000000' : ''}`" />
      <p :style="`${active === 2 ? 'color: #000000;' : ''}`">圈子</p>
    </router-link>
    <router-link to="/mine" class="mine" @click="active = 3">
      <van-icon name="contact" size="2em" :color="`${active === 3 ? '#000000' : ''}`" />
      <p :style="`${active === 3 ? 'color: #000000;' : ''}`">主页</p>
    </router-link>
  </footer>
</template>

<script setup>
import { ref } from "vue"
const active = ref(0)

</script>

<style lang="less" scoped>
.tabbar {
  * {
    transition: all 0.75s;
  }
}
</style>