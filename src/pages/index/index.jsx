import { useState, useEffect } from 'react'
import './index.less'
import { View, Text } from '@tarojs/components'
import { useSelector } from "react-redux"

export default function Index() {
  useEffect(() => {
    console.log('首页加载');
  }, [])

  const username = useSelector(state => state.username)

  return (
    <View className='index'>
      <Text>欢迎{username}</Text>
    </View>
  )

}
