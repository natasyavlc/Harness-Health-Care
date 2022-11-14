import { View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import RadioUncheck from '../../image/Icons/RadioUn.png'
import Radio from '../../image/Icons/Radio.png'
import style from './style'
import Ctext from '../CostumeText/index'
import color from '../../../Asset/color'
import { responsiveHeight } from '../Helper/ResponsiveUI'

const CostumeRadios = ({ onChange, onPress, label, width, border }) => {

    return (
        <View style={[style.container(width, border), { borderColor: onChange ? color.Rgb_Blue : 'rgba(238, 238, 238, 1)', backgroundColor: !onChange ? color.bgColors : color.Rgb_HueBlue, }]}>
            <View style={style.conRadio}>
                <Ctext
                    label={label}
                    fontSizes={responsiveHeight(16)}
                    Font={'Inters'}
                    colors={color.Primary_Black}
                />
                <Pressable onPress={onPress}>
                    <Image style={style.icon} source={onChange ? Radio : RadioUncheck} />
                </Pressable>
            </View>
        </View>
    )
}

export default CostumeRadios