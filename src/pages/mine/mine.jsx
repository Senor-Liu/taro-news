import React, { useState } from 'react'
import { View, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtAvatar, AtModal } from 'taro-ui'
import { useSelector } from 'react-redux'
import './mine.less'

export default function Mine() {
  const username = useSelector(state => state.username)
  const [isOpened, setIsOpend] = useState(false)

  function signOut() {
    setIsOpend(true)
  }

  function handleCancel() {
    setIsOpend(false)
  }
  function handleConfirm() {
    setIsOpend(false)
    Taro.redirectTo({ url: '/pages/login/login' })
  }

  return (
    <View className='mine'>
      <View className='userinfo-box'>
        <AtAvatar circle image='https://jdc.jd.com/img/100' />
        <View className='username'>{username}</View>
      </View>
      <Button type='default' plain className='sign-out' onClick={signOut}>退出登录</Button>
      <AtModal
        isOpened={isOpened}
        title='提示'
        cancelText='取消'
        confirmText='退出'
        onClose={handleCancel}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        content='确定退出登录'
      />
    </View>
  )
}
