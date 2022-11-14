import { View, Text } from 'react-native'
import React from 'react'

const index = ({
  fontSizes,
  colors,
  Font,
  label,
  lineHeights,
  align = 'left',
  fontWeight,
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
    <View>
      <Text style={{ fontFamily: Family(Font), fontSize: fontSizes, color: colors, lineHeight: lineHeights ? lineHeights : null, textAlign: align, fontWeight: fontWeight }}>{label}</Text>
    </View>
  )
}

export default index