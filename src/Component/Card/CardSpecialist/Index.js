import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import color from '../../../../Asset/color'
import CustomText from '../../CostumeText'
import { responsiveHeight } from '../../Helper/ResponsiveUI'

const Index = ({
    amountDoctor,
    Specialist,
    bgColor,
    ImageProps
}) => {
    return (
        <View style={style.bgCon}>
            <View style={style.container(bgColor)}>
                <Image source={ImageProps} style={style.imageCon} />
                <CustomText
                    label={Specialist}
                    fontSizes={responsiveHeight(12)}
                    Font={'InterRegular'}
                    colors={color.bgColors}
                />
                <View style={style.Margins}>
                    <CustomText
                        label={`${amountDoctor} Doctor`}
                        fontSizes={responsiveHeight(12)}
                        Font={'Inters'}
                        colors={color.bgColors}
                    />
                </View>
            </View>
        </View>
    )
}

export default Index