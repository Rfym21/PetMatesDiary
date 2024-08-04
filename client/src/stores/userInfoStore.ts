import { defineStore } from 'pinia'
import type { UserInfoType } from '../types/userInfoType'
import { reactive } from 'vue'

const useUserInfoStore = defineStore('userInfoStore', () => {
  const state: UserInfoType = reactive({
    username: 'r',
    nickname: '猪猪侠',
    token: '123456',
    id: '1',
    avatar: 'https://vip.helloimg.com/i/2024/08/02/66acac4c626f3.png',
  })

  function updateUserInfo(userInfo: UserInfoType) {
    state.username = userInfo.username
    state.nickname = userInfo.nickname
    state.token = userInfo.token
    state.id = userInfo.id
    state.avatar = userInfo.avatar
  }

  return {
    state,
    updateUserInfo
  }
})

export default useUserInfoStore