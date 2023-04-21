import { defineStore } from 'pinia'
import request from '../utils/request'
import { TOKEN_KEY } from '../static/js/config'

export const useStore = defineStore('store', {
  state: () => ({
    userInfo: { name: 'wzk' },
  }),

  getters: {
    // 获取localStorage的token返回Authorization字段
    authorization: () => {
      const token = JSON.parse(uni.getStorageSync(TOKEN_KEY)) || ''
      return token ? `Bearer ${token}` : ''
    },

    // 计算合适的导航栏高度和状态栏高度
    navBarConfig: () => {
      const statusBarHeight = uni.getSystemInfoSync().statusBarHeight // 状态栏高度
      const { top, height } = uni.getMenuButtonBoundingClientRect() // 胶囊数据
      // 自定义导航栏高度 = 胶囊高度 + 胶囊的padding*2, 如果获取不到设置为38
      const navBarHeight = height ? height + (top - statusBarHeight) * 2 : 38
      return {
        statusBarHeight,
        navBarHeight,
      }
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
