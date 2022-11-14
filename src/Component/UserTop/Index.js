import { View, Image, Pressable } from 'react-native'
import React from 'react'
import Ctext from '../CostumeText/index'
import color from '../../../Asset/color'
import style from './style'
import { responsiveHeight } from '../Helper/ResponsiveUI'
import Bell from '../../image/Icons/bell.png'
import BellNotif from '../../image/Icons/BellOn.png'
const Index = ({
    data,
    onPress,
    notif
}) => {
    return (
        <View style={style.container}>
            <View style={style.flexCon}>
                <Ctext
                    label={`Hi,${data?.username?.replace('Hawkins', '')}`}
                    fontSizes={responsiveHeight(24)}
                    colors={color.Primary_Black}
                    Font={'Inter-Semi'}
                />
                <View style={style.ConImage}>
                    <Pressable onPress={onPress}>
                        <Image source={notif ? BellNotif : Bell} style={style.bellNot} />
                    </Pressable>
                    <Image source={data.image} style={style.Profiles} />
                </View>
            </View>
        </View>
    )
}

export default Index