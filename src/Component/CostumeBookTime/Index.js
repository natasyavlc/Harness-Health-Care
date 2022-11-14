import { View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ctext from '../CostumeText/index'
import color from '../../../Asset/color'
import style from './style'
import { responsiveHeight } from '../Helper/ResponsiveUI'

const Index = ({
    value,
    onChange
}) => {
    const [touch, setTouch] = useState()
    useEffect(() => {
        onChange
        touch
    }, [clickHappens, touch, onChange])

    const clickHappens = (itemId, label) => () => {
        setTouch(currentItem => currentItem === itemId ? itemId : itemId)
        onChange(label)
    }
    return (
        <View style={style.container}>
            {value.map((data, I) => {
                const disable = data.value == false ? true : false
                const disable2 = data.field == false ? true : false
                const conditionText = data.value == false ? color.Text_Grey : touch == data.id ? color.bgColors : data.field == false ? color.bgColors : color.Primary_Black
                return (
                    <View key={I} style={style.conFlex}>
                        <Pressable
                            disabled={disable || disable2}
                            key={I}
                            onPress={clickHappens(data.id, data.label)}
                            style={style.conBg(touch, data.id, data.field)}>
                            <Ctext
                                label={data.label}
                                colors={conditionText}
                                Font={'Inter-400'}
                                fontSizes={responsiveHeight(14)}
                            />
                        </Pressable>
                    </View>

                )
            })}
        </View>
    )
}

export default Index