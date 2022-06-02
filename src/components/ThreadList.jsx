import React, { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtDivider, AtActivityIndicator, AtMessage } from 'taro-ui'
import { getNewsList } from '../utils/api'
import VirtualList from '@tarojs/components/virtual-list'
import Thread from './Thread'

const Row = React.memo(({ id, index, data }) => {
  return (
    <Thread
      id={id}
      index={index}
      title={data[index].title}
      source={data[index].source}
      date={data[index].mtime}
      imgsrc={data[index].imgsrc}
    />
  )
})

export default function ThreadList(props) {
  const { newsType } = props

  const [loading, setLoading] = useState(true)
  const [newsList, setNewsList] = useState('')

  useEffect(() => {
    getNewsList(newsType).then((res) => {
      setLoading(false)
      setNewsList(res.data[newsType])
    }).catch((err) => {
      setLoading(false)
      Taro.atMessage({ message: '请求数据失败', type: 'error' })
      console.log(err)
    })
  }, [])

  const info = Taro.getSystemInfoSync()
  const { windowHeight, statusBarHeight, titleBarHeight } = info
  const listHeight = windowHeight - (statusBarHeight || 0) - (titleBarHeight || 0)

  console.log(listHeight, windowHeight, statusBarHeight, titleBarHeight);

  return (
    <View>
      <AtMessage />
      {loading && <AtActivityIndicator size='30' content='加载中' mode='center'></AtActivityIndicator>}
      <VirtualList
        height={700} /* 列表的高度 */
        width='100%' /* 列表的宽度 */
        itemData={newsList} /* 渲染列的数据 */
        itemCount={newsList && newsList.length} /* 渲染列表的长度 */
        itemSize={70} /* 列表单项的高度 */
      >
        {Row}
      </VirtualList>
      <AtDivider content='没有更多了' fontColor='#56abe4' lineColor='#56abe4' />
    </View>
  )
}
