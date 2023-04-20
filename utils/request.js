import useStore from '@/store'
import { BASE_URL } from '../static/js/config'

const store = useStore()

function request({ method = 'GET', url, data = {} }) {
  return new Promise((resolve, reject) => {
    const sendData = {
      method: method.toUpperCase(),
      url: BASE_URL + url,
      data,
      header: {
        Authorization: store.authorization,
      },
    }
    uni.showLoading({
      title: '加载中',
      mask: true,
    })
    uni.request({
      ...sendData,
      success: (res) => {
        if (res.data.code === 200) {
          resolve(res.data)
        } else {
          if (res.data.code === 401) {
            // 清除用户信息
            store.clearUserInfo()
            // TODO: 跳转到登录页
            uni.reLaunch({
              // url: '/subpkgs/login/index',
            })
          } else {
            uni.showToast({
              title: res.data.msg,
              icon: 'none',
            })
          }
          reject(res.data.msg)
        }
      },
      fail: (error) => {
        uni.showToast({
          title: error,
          icon: 'none',
        })
        reject(error)
      },
    })
  })
}

export default {
  /**
   * get请求
   * @param url 请求地址
   * @param data 请求的参数
   * @param options 其他请求配置
   */
  get: (url, data, options) => {
    return request({
      ...options,
      url,
      data,
      method: 'GET',
    })
  },
  /**
   * post请求
   * @param url 请求地址
   * @param data 请求的参数
   * @param options 其他请求配置
   */
  post: (url, data, options) => {
    return request({
      ...options,
      url,
      data,
      method: 'POST',
    })
  },
  /**
   * put请求
   * @param url 请求地址
   * @param data 请求的参数
   * @param options 其他请求配置
   */
  put: (url, data, options) => {
    return request({
      ...options,
      url,
      data,
      method: 'PUT',
    })
  },
  /**
   * delete请求
   * @param url 请求地址
   * @param data 请求的参数
   * @param options 其他请求配置
   */
  delete: (url, data, options) => {
    return request({
      ...options,
      url,
      data,
      method: 'DELETE',
    })
  },
}
