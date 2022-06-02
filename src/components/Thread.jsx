import React from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtListItem } from 'taro-ui'

export default function Thread(props) {
  const { title, source, date, imgsrc } = props
  
  function handleClick() {
    Taro.navigateTo({ url: '/detailModule/pages/detail' })
  }

  return (
    <View>
      <AtListItem
        title={title}
        note={date + '  ' + source}
        thumb={imgsrc}
        onClick={handleClick}
      />
    </View>
  )
}
