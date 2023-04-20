// 判断是否是手机号
export const isTelNum = (str) => {
  return /^1[3-9]\d{9}$/.test(str)
}

// 判断身份证是否合法，合法则给出身份证相关信息，不合法返回false
import { idCity } from '../static/js/service'
export const isIdCard = (str) => {
  if (
    !/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
      str
    )
  ) {
    // 身份证号码最后一位校验
    let sum = 0,
      weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
      codes = '10X98765432'
    for (let i = 0; i < str.length - 1; i++) {
      sum += str[i] * weights[i]
    }
    const last = codes[sum % 11] //计算出来的最后一位身份证号码
    if (str[str.length - 1] != last) {
      console.log('你输入的身份证号非法')
      return false
    }
    // 合法
    let birth = ''
    let sex = ''
    const city = idCity[str.substring(0, 2)]
    if (str && str.length >= 14) {
      const birthStr = str.substring(6, 14)
      const year = birthStr.substring(0, 4)
      const month = birthStr.substring(4, 6)
      const day = birthStr.substring(6, 8)
      birth = `${year}-${month}-${day}`
    }
    if (str && str.length >= 17) sex = +id[16] % 2 === 0 ? '女' : '男'

    return {
      sex,
      birth,
      city,
    }
  }
  return false
}

// 判断是否是URL
export const isURL = (str) => {
  return /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(str)
}
