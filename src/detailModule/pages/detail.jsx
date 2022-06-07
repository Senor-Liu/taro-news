import React, { useState, useEffect } from 'react'
import { View, Text, RichText, Image } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { AtActivityIndicator, AtMessage } from 'taro-ui'
import { getNewsDetail } from '../../utils/api'
import './detail.less'

export default function Detail() {
  const router = useRouter()
  const docid = router.params.docid

  const [loading, setLoading] = useState(true)
  const [newsDetail, setNewsDetail] = useState(null)
  const [showBody, setShowBody] = useState('')

  useEffect(() => {
    getNewsDetail(docid).then((res) => {
      setLoading(false)
      setNewsDetail(res.data[docid])
    }).catch((err) => {
      setLoading(false)
      Taro.atMessage({ message: '请求数据失败', type: 'error' })
      console.log(err)
    })
  }, [])

  useEffect(() => {
    setShowBody(formatBody())
  }, [newsDetail])

  function formatBody() {
    if (newsDetail) {
      let newBody = newsDetail.body.replace(
        /<p/g,
        '<p style="text-indent: 2em;"'
      )
      if (newsDetail.img) {
        let index = 0
        newBody = newBody.replace(
          /<!--IMG#\d+-->/g, () => (
            `<img src='${newsDetail.img[index++].src}' style='width: 100%' />`
          )
        )
        return newBody
      }
      return newBody
    }
  }

  return (
    <View className='at-article'>
      <AtMessage />
      {loading &&
        <AtActivityIndicator
          size='30'
          content='加载中'
          mode='center'
        />}
      <View className='at-article__h2'>{newsDetail && newsDetail.title}</View>
      <View className='at-article__info'>
        {newsDetail && newsDetail.ptime + ' ' + newsDetail.source}
      </View>
      <View className='at-article__p'>
        <RichText nodes={showBody && showBody} />
      </View>
    </View>
  )
}
