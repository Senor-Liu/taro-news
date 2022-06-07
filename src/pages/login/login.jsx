import React, { useState } from 'react'
import './login.less'
import { View, Form, Button, Input, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useDispatch } from "react-redux"
import { SET_USERNAME } from '../../redux/constant'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [checkUsername, setCheckUsername] = useState(false)
  const [checkPassword, setCheckPassword] = useState(false)

  const dispatch = useDispatch();

  function handleUserChange(e) {
    setUsername(e.target.value)
  }

  function handlePswdChange(e) {
    setPassword(e.target.value)
  }

  function onSubmit() {
    if (!username) {
      setCheckUsername(true)
      return
    }
    if (!password) {
      setCheckPassword(true)
      return
    }
    dispatch({
      type: SET_USERNAME,
      data: username
    })
    Taro.switchTab({ url: '/pages/index/index' })
  }

  return (
    <View className='login-view'>
      <View className='banner'>
        <Image className='image' mode='widthFix' src='https://tse1-mm.cn.bing.net/th/id/R-C.d8a1ec1a232c194256723734ed6497f9?rik=Opl3RGMHM%2bSLuQ&riu=http%3a%2f%2fimg95.699pic.com%2fvideo_cover%2f79%2f93%2f60%2fa_C8n5shJahkNh1561799360.JPG!%2fboth%2f317x178&ehk=dj2LLZCVB1odVrZSxHU2Kiyb6uhurGbF8S3FSjIz6ZM%3d&risl=&pid=ImgRaw&r=0' />
      </View>
      <Form onSubmit={onSubmit} className='login-form'>
        <Input
          name='username'
          type='text'
          placeholder={checkUsername ? '请输入用户名' : '用户名'}
          placeholderStyle={checkUsername ? 'color:red' : ''}
          value={username}
          onInput={handleUserChange}
        />
        <Input
          name='password'
          type='password'
          placeholder={checkPassword ? '请输入密码' : '密码'}
          placeholderStyle={checkPassword ? 'color:red' : ''}
          value={password}
          onInput={handlePswdChange}
        />
        <Button type='primary' formType='submit'>登录</Button>
      </Form>
    </View>
  )
}