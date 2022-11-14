import { View, Image, Pressable } from 'react-native'
import React from 'react'
import Checks from '../../image/Icons/Checked.png'
import Uncheck from '../../image/Icons/Uncheck.png'
import Ctext from '../CostumeText/index'
import style from './style'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'

const index = ({
  value,
  onPress,
  label,
  resize,

}) => {
  return (
    <View style={style.container}>
      <Pressable onPress={onPress} style={{ marginHorizontal: responsiveWidth(10) }}>
        <Image source={value == false ? Uncheck : Checks} style={{ resizeMode: resize, height: responsiveHeight(20), width: responsiveWidth(20) }} />
      </Pressable>
      <Ctext
        label={label}
        fontSizes={responsiveHeight(14)}
        Font={'Inter-400'}
        colors={colors.Primary_Black}
      />
    </View>
  )
}

export default index