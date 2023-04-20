import { defineStore } from 'pinia'
import request from '../utils/request'
import { TOKEN_KEY } from '../static/js/config'

export const useStore = defineStore('store', {
  state: () => ({
    userInfo: {},
  }),

  getters: {
    // 获取localStorage的token返回Authorization字段
    authorization: () => {
      const token = JSON.parse(uni.getStorageSync(TOKEN_KEY)) || ''
      return token ? `Bearer ${token}` : ''
    },
  },

  actions: {
    // token失效，清除用户信息
    clearUserInfo() {
      this.userInfo = {}
    },

    // 登录
    async login() {
      uni.login({
        provider: 'weixin',
        success: async ({ code }) => {
          // TODO: 拿着code发起后端请求
          const res = await request.get('url', { code })
          // TODO: 拿着返回的结果存入localStorage
          uni.setStorage({
            key: TOKEN_KEY,
            data: res.data,
          })
          // TODO: 跳转到首页
          uni.reLaunch({
            // url: '/index',
          })
        },
      })
    },

    // 退出登录
    async logout() {
      // TODO: 退出接口
      const res = await request.post('url')
      uni.removeStorageSync(TOKEN_KEY)
      this.userInfo = {}
      // TODO: 跳转到登录页
      uni.reLaunch({
        // url: '/login',
      })
    },
  },
  unistorage: true, // 开启后对 state 的数据读写都将持久化
})
