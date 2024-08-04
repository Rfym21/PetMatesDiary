<template>
  <div class="ChatWarp animate__animated animate__zoomInDown w-full h-full order-1 overflow-hidden" ref="ChatWarp">
    <ul>
      <li
        v-for="(item, i) in aiMsgStore.state.filter(n => n.role !== 'system' && (n.type === props.searchType || n.type === null))"
        :key="i" :class="`${(i===aiMsgStore.state.length)?'mb-[12vh]':''}`">

        <section class="animate__animated animate__rollIn px-2 py-4 w-full">

          <div class="userImg w-12 rounded-full overflow-hidden shadow-[0_0_10px_5px_rgb(0,0,0,0.2)] mb-2 ml-auto mr-1"
            v-if="item.role === 'user'">
            <img :src="userInfoStore.state?.avatar" alt="">
          </div>

          <div class="botImg w-12 rounded-full overflow-hidden shadow-[0_0_10px_5px_rgb(0,0,0,0.2)] mb-2 mr-auto ml-1"
            v-if="item.role === 'assistant'">
            <img src="../assets/pet/pet_op.png" alt="">
          </div>

          <div class="message text-base leading-7 text-slate-700 rounded-xl bg-slate-200 p-3" v-html="item.content">
          </div>

        </section>

        <!-- <section class="px-2 py-4 w-full">

                  <div class="message text-base leading-7 text-slate-700 rounded-xl bg-slate-200 p-3">

                  </div>

                </section> -->

      </li>
    </ul>

  </div>
</template>

<script setup lang="ts">
import useUserInfoStore from '../stores/userInfoStore'
import useAiMsgStore from '../stores/AiMsgStore'
import { BScrollInit } from '../utils/Bsscroll'
import { ref, watch, nextTick } from 'vue'

const userInfoStore = useUserInfoStore()
const aiMsgStore = useAiMsgStore()
const ChatWarp = ref(null)
let ChatWarpBScroll: any | null = null

const props = defineProps<{
  searchType: boolean | null
}>()


watch(() => aiMsgStore.state.length, () => {
  nextTick(() => {
    ChatWarpBScroll = BScrollInit(ChatWarp.value, ChatWarpBScroll, null, null)
  })
}, { immediate: true })


</script>

<style scoped></style>