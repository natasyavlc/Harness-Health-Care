import { TextInput, View } from 'react-native'
import React from 'react'
import color from '../../../Asset/color'
import { styles } from './style'

const OTP = ({
    navigation, 
    isError,
    pinRef,
    keyboardType,
    maxLength,
    onChange,
    value,
}) => {
  return (
    <View style={styles.container}>
      <View style={[
        styles.textInputView,{
            backgroundColor: isError ? '#FFF5F5': '#FAFAFA', 
            borderColor: isError ? color.Primary_Red : color.TextInputBG
            }
        ]}>
        <TextInput
            ref={pinRef} 
            keyboardType={keyboardType}
            maxLength={maxLength}
            onChangeText={onChange}
            value={value}
            style={[styles.textInputText,{color: isError ? color.Primary_Red : color.Primary_Black}]}
        />
      </View>
    </View>
  )
}

export default OTP

