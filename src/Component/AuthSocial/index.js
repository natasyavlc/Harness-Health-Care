import { View, Image, Pressable } from 'react-native'
import React from 'react'
import FB from '../../image/Icons/Facebook.png'
import GO from '../../image/Icons/google.png'
import style from './style'
const index = () => {
  return (
    <View style={style.container}>
      <Pressable style={style.googleCont}>
        <Image source={GO} style={style.imageCon} />
      </Pressable>
      <Pressable style={style.FbCont}>
        <Image source={FB} style={style.imageCon} />
      </Pressable>
    </View>
  )
}

export default index