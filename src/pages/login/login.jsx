import React, { useState } from 'react'
import './login.less'
import { View, Form, Button, Input } from '@tarojs/components'
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
      { }
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