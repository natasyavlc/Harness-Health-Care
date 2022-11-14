import { Pressable, Text, View, Image } from 'react-native'
import React from 'react'
import style from './style'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
import Primary from '../../../Asset/color/index'
const ButtonPrimary = ({
  fontSizes,
  label,
  colors,
  bgColor,
  borderColor,
  Font,
  borderWidth = true,
  heights = responsiveHeight(55.5),
  width_,
  onPress,
  disable,
  margin,
  ImageProp,
  ImageHeight,
  ImageWidth,
  disableBgColor = Primary.Hue_Grey,
  marginDefault = responsiveHeight(16),
  marginImg = responsiveWidth(10),
  disableTxtColor = Primary.Primary_Grey,
  defaultRight = responsiveHeight(0),
  defaultLeft = responsiveHeight(0),
  defaultVertical = responsiveHeight(0),
}) => {
  const Family = (value) => {
    if (value == 'InterRegular') {
      return 'Inter-Bold'
    } else if (value == 'Inter-400') {
      return 'Inter-Medium'
    } else if (value == 'Inters') {
      return 'Inter-Regular'
    } else if (value == 'Inter-Semi') {
      return 'Inter-SemiBold'
    } else {
      return 'PlusJakartaSans-Bold'
    }
  }
  return (
    <Pressable
      style={[style.container,
      {
        borderColor: disable ? Primary.Primary_White : borderColor,
        backgroundColor: disable ? disableBgColor : bgColor,
        height: borderWidth == true ? null : heights,
        borderWidth: borderWidth ? 2 : null,
        padding: margin ? null : marginDefault,
        marginHorizontal: margin ? null : responsiveWidth(20),
        paddingRight: margin ? defaultRight : null,
        paddingLeft: margin ? defaultLeft : null,
        paddingVertical: margin ? defaultVertical : null
      },
      ]}
      onPress={onPress}
      disabled={disable}
    >
      {ImageProp ?
        <>
          <Image source={ImageProp} style={{ height: ImageHeight ? responsiveHeight(ImageHeight) : null, width: ImageWidth ? responsiveWidth(ImageWidth) : null, resizeMode: 'contain', marginRight: marginImg }} />
        </>
        : null
      }
      <Text style={{ color: disable ? disableTxtColor : colors, fontFamily: Family(Font), fontSize: fontSizes }}>{label}</Text>
    </Pressable>
  )
}

export default ButtonPrimary