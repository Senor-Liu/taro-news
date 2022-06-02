import Taro from "@tarojs/taro"

export const newsType = {
  featured: 'T1467284926140',
  sports: 'T1348649079062',
  entertainment: 'T1348648517839'
}

export function getNewsList(type) {
  return Taro.request({ url: `http://c.3g.163.com/nc/article/list/${type}/0-20.html` })
}