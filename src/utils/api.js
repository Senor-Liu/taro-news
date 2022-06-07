import { request } from "@tarojs/taro"

export const newsType = {
  headline: 'T1348647909107',
  sports: 'T1348649079062',
  finance: 'T1348648756099'
}

export function getNewsList(type) {
  return request({ url: `https://c.m.163.com/nc/article/list/${type}/0-10.html` })
}

export function getNewsDetail(docid) {
  return request({ url: `https://c.m.163.com/nc/article/${docid}/full.html` })
}