// token存在localStorage中的key
export const TOKEN_KEY = process.env.NODE_ENV === 'development' ? 'univ3basic_dev_token' : 'univ3basic_prod_token'

// TODO: 接口前缀
const BASE_URL_DEV = 'http://192.168.110.29:8080'
const BASE_URL_PROD = 'http://192.168.110.29:8080'
export const BASE_URL = process.env.NODE_ENV === 'development' ? BASE_URL_DEV : BASE_URL_PROD
