import React from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtListItem } from 'taro-ui'

export default function Thread(props) {
  const { style, title, source, date, imgsrc, docid } = props
  
  function handleClick() {
    Taro.navigateTo({ url: `/detailModule/pages/detail?docid=${docid}` })
  }

  return (
    <View style={style}>
      <AtListItem
        title={title}
        note={date + '  ' + source}
        thumb={imgsrc}
        onClick={handleClick}
      />
    </View>
  )
}
