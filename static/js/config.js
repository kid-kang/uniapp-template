// token存在localStorage中的key
// export const TOKEN_KEY = process.env.NODE_ENV === 'development' ? 'univ3basic_dev_token' : 'univ3basic_prod_token'
export const TOKEN_KEY = 'univ3basic_dev_token' // process有时会报错，看编辑器心情把！所这里选择直接点

// TODO: 接口前缀
const BASE_URL_DEV = 'http://192.168.110.29:8080'
const BASE_URL_PROD = 'http://192.168.110.29:8080'
// export const BASE_URL = process.env.NODE_ENV === 'development' ? BASE_URL_DEV : BASE_URL_PROD
export const BASE_URL = 'http://192.168.110.29:8080' //同上
