import { request } from "@tarojs/taro"

export const newsType = {
  entertainment: 'T1348648517839',
  sports: 'T1348649079062',
  finance: 'T1348648756099'
}

export function getNewsList(type, length) {
  return request({ url: `https://c.m.163.com/nc/article/list/${type}/0-${length}.html` })
}

export function getNewsDetail(docid) {
  return request({ url: `https://c.m.163.com/nc/article/${docid}/full.html` })
}