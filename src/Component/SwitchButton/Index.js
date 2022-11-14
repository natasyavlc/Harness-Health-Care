import { View, Text, Switch, Platform } from 'react-native'
import React from 'react'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
import Ctext from '../../Component/CostumeText/index'
import style from './style'

const Index = ({ onChangeValue, value, label }) => {
    return (
        <View style={style.container}>
            <View>
                <Ctext
                    label={label}
                    fontSizes={responsiveHeight(14)}
                    lineHeights={responsiveHeight(15)}
                    colors={color.Primary_Black}
                    Font={'Inters'}
                />
            </View>
            <View>
                <Switch
                    onValueChange={onChangeValue}
                    value={value}
                    style={ Platform.OS =='ios'?{ transform: [{ scaleX: responsiveWidth(.8) }, { scaleY: responsiveWidth(.8) }] }:{}}
                    trackColor={{ false: "#DDE2E5", true: "#2D5BE3" }}
                    thumbColor={value ? color.bgColors : color.bgColors}
                />
            </View>
        </View>
    )
}

export default Index