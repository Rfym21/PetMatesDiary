<template>
  <header class="header"></header>
  <div class="ChatWarp animate__animated animate__zoomInDown overflow-hidden" ref="ChatWarp">
    <ul>
      <li
        v-for="(item, i) in aiMsgStore.state.filter(n => n.role !== 'system' && (n.type === props.searchType || n.type === 'all'))"
        :key="i">

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
      <div :class="`box ${images.length ? 'h-[24vh]' : 'h-[15vh]'}`"></div>
    </ul>
  </div>
  <footer class="footer"></footer>
</template>

<script setup lang="ts">
import useUserInfoStore from '../stores/userInfoStore'
import useAiMsgStore from '../stores/AiMsgStore'
import { ref, onMounted, nextTick, reactive } from 'vue'
import { BScrollInit } from '../utils/Bsscroll'

const userInfoStore = useUserInfoStore()
const aiMsgStore = useAiMsgStore()
const ChatWarp = ref(null)

interface State {
  ChatWarpBScroll: any
}

const state: State = reactive({
  ChatWarpBScroll: null,
})

const props = defineProps<{
  searchType: string
  images: any
}>()

onMounted(async () => {
  nextTick(async () => {
    state.ChatWarpBScroll = BScrollInit(ChatWarp.value, state.ChatWarpBScroll, null)
  })
})

</script>

<style scoped>
.ChatWarp {
  margin-top: 7vh;
  height: 93vh
}
</style>