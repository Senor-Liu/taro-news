import React, { useState, useEffect } from 'react'
import { View, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtMessage } from 'taro-ui'
import { getNewsList } from '../utils/api'
// import VirtualList from '@tarojs/components/virtual-list'
import Thread from './Thread'

// const Row = React.memo(({ id, index, style, data }) => {
//   return (
//     <Thread
//       id={id}
//       index={index}
//       style={style}
//       title={data[index].title}
//       source={data[index].source}
//       date={data[index].mtime}
//       imgsrc={data[index].imgsrc}
//       docid={data[index].postid}
//     />
//   )
// })

// <VirtualList
//   height={listHeight} /* 列表的高度 */
//   width='100%' /* 列表的宽度 */
//   itemData={newsList} /* 渲染列的数据 */
//   itemCount={newsList && newsList.length} /* 渲染列表的长度 */
//   itemSize={70} /* 列表单项的高度 */
// >
//   {Row}
// </VirtualList>

export default function ThreadList(props) {
  const { newsType } = props

  const [newsList, setNewsList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  function getData() {
    Taro.showLoading({
      title: '加载中',
    })
    if (isLoading) { return } // 节流
    setIsLoading(true)
    getNewsList(newsType, newsList.length + 20).then((res) => {
      setIsLoading(false)
      Taro.hideLoading()
      setNewsList(res.data[newsType])
    }).catch((err) => {
      setIsLoading(false)
      Taro.hideLoading()
      Taro.atMessage({ message: '请求数据失败', type: 'error' })
      console.log(err)
    })
  }

  // 根据屏幕高度计算列表高度
  const info = Taro.getSystemInfoSync()
  const { windowHeight, statusBarHeight } = info
  const listHeight = windowHeight - (statusBarHeight || 0)
  // console.log(listHeight, windowHeight, statusBarHeight);

  return (
    <View>
      <AtMessage />
      <ScrollView
        scrollY
        style={{ height: listHeight }}
        onScrollToLower={getData}
      >
        {newsList.map((newsItem) => {
          return (
            <Thread
              key={newsItem.postid}
              title={newsItem.title}
              source={newsItem.source}
              date={newsItem.mtime}
              imgsrc={newsItem.imgsrc}
              docid={newsItem.postid}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}
