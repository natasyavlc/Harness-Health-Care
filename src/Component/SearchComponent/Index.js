import { View, TextInput, Image } from 'react-native'
import React from 'react'
import style from './style'
import PngSearch from '../../image/Icons/search.png'
import color from '../../../Asset/color'

const Index = ({
    placeholder,
    onChangeText
}) => {
    return (
        <View style={style.container}>
            <View style={style.flexCon}>
                <Image source={PngSearch} style={style.conIconSearch} />
                <TextInput
                    placeholder={placeholder}
                    style={style.textInput}
                    onChangeText={text => onChangeText(text)}
                    placeholderTextColor={color.TextInputBG}
                />
            </View>
        </View>
    )
}

export default Index