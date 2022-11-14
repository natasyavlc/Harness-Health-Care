import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI';
import colors from '../../../Asset/color';
import Eyes from '../../image/Icons/eyes.png'
import { EyeOff } from 'react-native-feather';

const index = ({
  placeholders,
  isError,
  textError,
  mandatory,
  label,
  value,
  onChangeText,
  keyboardType,
  isPassword,
  onPress,
  bgColor,
  borderColors,
  checkers,
  fontFamilys,
  placeholderStyle,
  placeholderColor,
  fontPlaceholder,
  onFocusInput,
  onBlur,
}) => {
  const [localvalue, setLocalvalue] = useState('');
  const Family = (value) => {
    if (value == 'InterRegular') {
      return 'Inter-Bold'
    } else if (value == 'Inter-400') {
      return 'Inter-Medium'
    } else if (value == 'Inters') {
      return 'Inter-Regular'
    } else {
      return 'PlusJakartaSans-Bold'
    }
  }
  return (
    <View style={style.container}>
      <View style={{ marginVertical: responsiveHeight(5) }}>
        <Text style={{ fontFamily: Family(placeholderStyle), fontSize: responsiveHeight(10), color: placeholderColor }}>
          {label}
          <Text>{mandatory ? '*' : ''}</Text>
        </Text>
      </View>
      <View style={[style.conTextInput, {
        borderColor: isError ? colors.RGB_Red2 : borderColors,
        flexDirection: checkers ? 'row' : null,
        alignItems: checkers ? 'center' : null,
        justifyContent: checkers ? 'space-between' : null,
        backgroundColor: isError ? colors.RGB_Red : colors.RGB_Grey
      }]}>
        <View>
          <TextInput
            placeholder={placeholders}
            value={value}
            keyboardType={keyboardType}
            onChangeText={text => {
              setLocalvalue(text)
              onChangeText(text)
            }}
            style={{ height: responsiveHeight(50), width: checkers ? responsiveWidth(350) : null, fontFamily: Family(fontFamilys), paddingLeft: responsiveWidth(10), fontSize: fontPlaceholder, color: colors.Primary_Black }}
            secureTextEntry={isPassword}
            onBlur={onBlur}
            onFocus={onFocusInput}
            placeholderTextColor={colors.Huest_Grey}
          />
        </View>
        {checkers ?
          <View style={{ marginRight: responsiveWidth(60) }}>
            <Pressable onPress={onPress}>
              {isPassword ?
                <Image
                  source={Eyes}
                  style={{ height: responsiveHeight(20), width: responsiveWidth(20), resizeMode: 'contain' }}
                />
                :
                <EyeOff stroke={colors.Primary_Grey} height={responsiveHeight(20)} width={responsiveWidth(20)} />
              }
            </Pressable>
          </View>
          :
          null
        }
      </View>
    </View>
  )
}
export default index