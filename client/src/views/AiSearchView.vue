<template>
  <div class="page h-screen overflow-hidden">
    <!-- 顶部返回栏 -->
    <div class="header h-[7vh] 占位"></div>
    <header
      class="w-full h-[7vh] fixed z-20 text-2xl text-center pt-4 pb-2 top-0 font-bold  bg-[rgba(255,255,255,0.7)] backdrop-blur-lg backdrop-filter"
      v-if="state.searchType !== null">
      <h1>Ai智能辨宠</h1>
      <button class="back absolute top-2 p-2 left-2 w-12 h-12 overflow-hidden hover:bg-slate-200 rounded-lg"
        @click="router.go(-1)">
        <img class="w-full h-full" src="../assets/icon/back.png" alt="">
      </button>
    </header>


    <!-- 选择搜索方式 -->
    <div class="search__type mt-20" v-if="state.searchType === null">
      <h2 class="animate__animated animate__wobble text-center font-bold text-3xl">请选择描述方式</h2>

      <!-- 以图片+文字的形式进行描述 -->
      <div
        class="search__type-item animate__animated animate__backInRight search__image shadow-[0_0_10px_5px_rgb(0,0,0,0.2)]"
        @click="state.searchType = true">
        <h3 class="search__type-title">以图片 + 文字形式进行描述</h3>
        <p class="search__type-desc">Ai通过图片分析，加以用户细节描述，进行分析该宠物的品种<br><br>1. 结果更准确<br>2. 响应速度可能较慢</p>
      </div>

      <!-- 以文字形式进行描述 -->
      <div
        class="animate__animated animate__backInLeft search__type-item search__detail shadow-[0_0_10px_5px_rgb(0,0,0,0.2)]"
        @click="state.searchType = false">
        <h3 class="search__type-title">仅以文字形式进行描述</h3>
        <p class="search__type-desc">Ai只依靠通过用户细节描述，进行分析该宠物的品种<br><br>1. 结果准确性差<br>2. 需要条件少</p>
      </div>

    </div>

    <!-- 对话界面 -->
    <div class="chatWarp__page h-[85vh]" v-show="state.searchType !== null">

      <!-- 用户输入区域 -->
      <div
          class="inputMsg animate__animated animate__slideInUp h-[6vh] mx-4 fixed z-10 bottom-2 left-0 right-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-lg order-2 p-1 rounded-full px-6 flex items-center shadow-[0_0_10px_5px_rgb(0,0,0,0.2)]">

          <div class="imgShow absolute bottom-[-162%] overflow-x-auto text-nowrap"
            v-if="state.detail.image.length !== 0">
            <section class="relative inline-block " v-for="(img, i) of state.detail.image" :key="i">
              <img class="w-24 h-24 rounded-lg overflow-hidden mr-2" :src="img.content" alt="">

              <span class="absolute top-0 right-2 bg-[rgba(0,0,0,0.5)]" @click="deleteImage(i)"><img class="w-6 h-6 p-1"
                  src="../assets/icon/close_btn.png" alt=""></span>
            </section>
          </div>

          <van-uploader
            :class="`${(state.searchType && state.detail.image.length === 0) ? 'mx-auto' : ''} w-14 h-14 rounded-lg overflow-hidden p-2`"
            v-model="state.detail.image" :preview-image="false" v-if="state.searchType === true">
            <img class="w-full h-full" src="../assets/icon/photo_btn.png" alt="">
          </van-uploader>


          <input type="text" class="grow h-14 bg-transparent text-black text-lg placeholder:text-slate-500 pl-2"
            placeholder="请描述宠物的特点" v-model="state.content" v-if="state.searchType === false || state.imgUpload">

          <button class="send w-14 h-14 rounded-lg overflow-hidden p-2"
            v-if="state.searchType === false || state.imgUpload">
            <img class="w-full h-full" src="../assets/icon/send_btn.png" alt="">
          </button>

        </div>

      <!-- 聊天内容区域 -->
      <div class="ChatView h-[85vh]">
        <ChatView :searchType="state.searchType" />
      </div>

    </div>

    <div class="footer h-[8vh] 占位"></div>

  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import useAiMsgStore from '../stores/AiMsgStore'
import { UserInfoType } from '../types/userInfoType'
import ChatView from '../components/ChatView.vue'

const router = useRouter()
const AiMsgStore = useAiMsgStore()


interface stateType {
  searchType: boolean | null,
  detail: {
    type: string,
    image: string[] | any,
    desc: string | null
  },
  ContentsScroll: any,
  content: string,
  userInfo: UserInfoType | null,
  imgUpload: boolean
}

const state = reactive<stateType>({
  searchType: null,
  detail: {
    type: '',
    image: [],
    desc: null
  },
  ContentsScroll: null,
  content: '',
  userInfo: null,
  imgUpload: false
})
// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------
watch(() => state.detail.image, () => {
  if (state.imgUpload) {
    return
  } else {
    AiMsgStore.addMsgs([
      {
        role: 'user',
        type: true,
        content: `
      <img class="w-full" src="${state.detail.image[0].content}" alt="">
      `
      },
      {
        role: 'assistant',
        type: true,
        content: `
      <h1 class="text-center font-bold text-xl mb-2">很好，你已经上传了图片！</h1>
      <p class="w-5/6 mx-auto leading-8">
        请继续描述你的宠物，我们将会根据你的描述进行引导，直到我们搜集到完整的数据后，再加以分析该宠物的品种，然后给出最终的结果
      </p>
      `
      }
    ])
    state.detail.image = []
    state.imgUpload = true
  }
})
// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------
// 删除图片
const deleteImage = (index: number) => {
  state.detail.image.splice(index, 1)
}
// ----------------------------------------------------------------------------------------------------------------------------------

</script>

<style lang="css" scoped>
.search__type-item {
  @apply w-3/4 p-4 mx-auto rounded-xl mt-12
}

.search__type-title {
  @apply text-center font-bold text-lg
}

.search__type-desc {
  @apply text-center text-slate-500 leading-8 py-4
}
</style>