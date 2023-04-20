/**
 * 图片处理-预览图片
 * @param {Array} urls - 图片列表
 * @param {Number} current - 首个预览下标
 */
export function previewImage(urls = [], current = 0) {
  uni.previewImage({
    urls: urls,
    current,
    indicator: 'default',
    loop: true,
    fail(err) {
      console.log('previewImage出错', urls, err)
    },
  })
}

/**
 * 预览文件
 * @param { string } url: 文件下载地址
 * @param { string } name: 文件名称
 */
export const downloadFile = (url, name) => {
  uni.downloadFile({
    url: encodeURI(url),
    success: (res) => {
      if (res.statusCode === 200) {
        uni.getFileSystemManager().saveFile({
          tempFilePath: res.tempFilePath,
          filePath: `${uni.env.USER_DATA_PATH}/${name}`,
          success: (fileRes) => {
            uni.openDocument({
              filePath: fileRes.savedFilePath,
              showMenu: true,
              success: () => console.log('成功打开文档'),
            })
          },
          fail: () => {
            uni.showToast({
              title: '保存文件失败',
              icon: 'none',
            })
          },
        })
      }
    },
    fail: () => {
      uni.showToast({
        title: '下载文件失败',
        icon: 'none',
      })
    },
  })
}

/**
 * 根据经纬度获取两点距离
 * @param la1 第一个坐标点的纬度 如：24.445676
 * @param lo1 第一个坐标点的经度 如：118.082745
 * @param la2 第二个坐标点的纬度
 * @param lo2 第二个坐标点的经度
 * @return { Number } 米
 * @tips 注意经度和纬度参数别传反了, 一般经度为0~180、纬度为0~90
 */
export function calcDistanceLL(la1, lo1, la2, lo2) {
  let La1 = (la1 * Math.PI) / 180.0
  let La2 = (la2 * Math.PI) / 180.0
  let La3 = La1 - La2
  let Lb3 = (lo1 * Math.PI) / 180.0 - (lo2 * Math.PI) / 180.0
  let s =
    2 *
    Math.asin(
      Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2))
    )

  s = s * 6378.137
  s = Math.round(s * 10000) / 10000

  return Math.round(s * 1000)
}
