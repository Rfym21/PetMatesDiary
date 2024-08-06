<template>
  <div class="page w-screen overflow-hidden">

    <!-- 选择搜索方式 -->
    <div class="search__type py-20" v-if="state.searchType === 'null'">
      <h2 class="animate__animated animate__wobble text-center font-bold text-3xl">请选择描述方式</h2>

      <!-- 以图片+文字的形式进行描述 -->
      <div
        class="search__type-item animate__animated animate__backInRight search__image shadow-[0_0_10px_5px_rgb(0,0,0,0.2)]"
        @click="state.searchType = 'image'">
        <h3 class="search__type-title">以图片 + 文字形式进行描述</h3>
        <p class="search__type-desc">Ai通过图片分析，加以用户细节描述，进行分析该宠物的品种<br><br>1. 结果更准确<br>2. 响应速度可能较慢</p>
      </div>

      <!-- 以文字形式进行描述 -->
      <div
        class="animate__animated animate__backInLeft search__type-item search__detail shadow-[0_0_10px_5px_rgb(0,0,0,0.2)]"
        @click="state.searchType = 'text'">
        <h3 class="search__type-title">仅以文字形式进行描述</h3>
        <p class="search__type-desc">Ai只依靠通过用户细节描述，进行分析该宠物的品种<br><br>1. 结果准确性差<br>2. 需要条件少</p>
      </div>

    </div>


    <!-- 对话界面 -->
    <div class="chatWarp__page" v-show="state.searchType !== 'null'">

      <!-- 聊天内容区域 -->
      <div class="ChatView h-screen px-3">
        <ChatView :searchType="state.searchType" :images="state.detail.image" />
      </div>

    </div>



    <!-- 顶部返回栏 -->
    <header
      class="w-full h-[7vh] fixed z-20 text-2xl text-center flex items-center justify-center top-0 font-bold  bg-[rgba(255,255,255,0.7)] backdrop-blur-lg backdrop-filter"
      v-if="state.searchType !== 'null'">
      <h1>Ai智能辨宠</h1>
      <button class="back absolute top-0 p-2 left-2 w-12 h-12 overflow-hidden hover:bg-slate-200 rounded-lg"
        @click="router.go(-1)">
        <img class="w-full h-full" src="../assets/icon/back.png" alt="">
      </button>
    </header>

    <!-- 用户输入区域 -->
    <div
      class="inputMsg animate__animated animate__slideInUp fixed bottom-2 mx-4 z-10 h-[7vh] left-0 right-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-lg order-2 p-1 rounded-full px-6 flex items-center shadow-[0_0_10px_5px_rgb(0,0,0,0.2)]"
      v-if="state.searchType !== 'null'">

      <div class="imgShow absolute bottom-[110%] overflow-hidden" v-if="state.detail.image.length !== 0">
        <ul class="text-nowrap overflow-x-auto">
          <li v-for="(img, i) of state.detail.image" :key="i" class=" inline-block">
            <section class="relative">
              <img class="w-[8vh] h-[8vh] rounded-lg overflow-hidden mr-2" :src="img.content" alt="">

              <span class="absolute top-0 right-2 bg-[rgba(0,0,0,0.5)]" @click="deleteImage(i)"><img class="w-6 h-6 p-1"
                  src="../assets/icon/close_btn.png" alt=""></span>
            </section>
          </li>
        </ul>
      </div>

      <van-uploader
        :class="`${(state.searchType === 'image' && state.detail.image.length === 0) ? 'mx-auto' : ''} rounded-lg overflow-hidden`"
        v-model="state.detail.image" :preview-image="false" v-if="state.searchType === 'image'"
        :disabled="state.sending">
        <img class="h-[5vh] w-[5vh]" :src="`${state.sending ? image_btn_stop : image_btn}`" alt="">
      </van-uploader>


      <input type="text" class="grow h-[8vh] py-2 bg-transparent text-black text-lg placeholder:text-slate-500 pl-2"
        placeholder="请描述宠物的特点" v-model="state.content" v-if="state.searchType === 'text' || state.imgUpload"
        @keydown.enter="send">

      <button class="send h-full rounded-lg overflow-hidden" v-if="state.searchType === 'text' || state.imgUpload"
        @click="send" :disabled="state.sending">
        <img class="h-[5vh] w-[5vh]" :src="`${state.sending ? send_btn_stop : send_btn}`" alt="">
      </button>

    </div>

  </div>

</template>

<script setup lang="ts">
import { onMounted, reactive, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import useAiMsgStore from '../stores/AiMsgStore'
import { UserInfoType } from '../types/userInfoType'
import ChatView from '../components/ChatView.vue'
import usePetStore from '../stores/petStore'
import { showDialog } from 'vant'

// 资源引入
import send_btn from '../assets/icon/send_btn.png'
import send_btn_stop from '../assets/icon/send_btn_stop.png'
import image_btn from '../assets/icon/photo_btn.png'
import image_btn_stop from '../assets/icon/photo_btn_stop.png'
import { AiSearch } from '../api/newapi'
import { InfoVerify } from '../utils/LlmTools'

const router = useRouter()
const AiMsgStore = useAiMsgStore()
const pet = usePetStore()

interface stateType {
  searchType: string,
  detail: {
    type: string,
    image: string[] | any,
    desc: string | null
  },
  content: string,
  userInfo: UserInfoType | null,
  imgUpload: boolean,
  sending: boolean
}

const state = reactive<stateType>({
  searchType: 'null',
  detail: {
    type: '',
    image: [],
    desc: null
  },
  content: '',
  userInfo: null,
  imgUpload: false,
  sending: false
})
// ----------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------------
watch(() => state.detail.image, () => {
  imgUpload()
  console.log(state.detail.image);

})

watch(() => state.searchType, () => {
  if (state.searchType === 'image') {
    imgUpload()
  }
})
// ----------------------------------------------------------------------------------------------------------------------------------
onMounted(async () => {
  nextTick(async () => {

  })
})
// ----------------------------------------------------------------------------------------------------------------------------------
// 删除图片
const deleteImage = (index: number) => {
  state.detail.image.splice(index, 1)
}
// ----------------------------------------------------------------------------------------------------------------------------------
// 上传图片引导
const imgUpload = () => {

  if (state.detail.image.length === 0 && state.searchType) {
    AiMsgStore.addMsg({
      type: 'image',
      role: 'assistant',
      content: `
      <h1 class="text-center font-bold text-xl mb-2">请发送一张宠物的照片吧！</h1>
      <p class="w-2/3 mx-auto leading-8">
        1. 请确保照片清晰<br>
        2. 请确保照片中有宠物的特征<br>
        3. 请确保照片中只有一只宠物
      </p>
      `
    })
    state.imgUpload = false
    return
  } else if (state.detail.image.length === 1 && state.searchType && state.imgUpload === false) {
    AiMsgStore.addMsgs([
      {
        role: 'user',
        type: 'image',
        content: `
      <img class="w-full" src="${state.detail.image[0].content}" alt="">
      `
      },
      {
        role: 'assistant',
        type: 'image',
        content: `
      <h1 class="text-center font-bold text-xl mb-2">很好，你已经上传了图片！</h1>
      <p class="w-5/6 mx-auto leading-8">
        请继续描述你的宠物，我们将会根据你的描述进行引导，直到我们搜集到完整的数据后，再加以分析该宠物的品种，然后给出最终的结果
      </p>
      `
      }
    ])
    state.imgUpload = true
  }
}
// ----------------------------------------------------------------------------------------------------------------------------------
// 发送消息事件
const send = async () => {
  // 如果用户没有输入任何内容，或者选择了图片模式没有上传图片，则不发送
  if (state.content.trim() === '' && ((pet.state.images && pet.state.images.length === 0) || state.searchType === 'image')) {
    showDialog({ message: "请先输入内容或上传图片" })
    return
  }

  state.sending = true

  const res = await AiSearch(state.searchType, state.content)

  if (InfoVerify(res)){
    console.log("数据完整")
  }else{
    console.log("数据不完整")
    
  }

    state.sending = false
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