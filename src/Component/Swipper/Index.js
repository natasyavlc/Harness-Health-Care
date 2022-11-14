import { View, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ctext from '../CostumeText/index'
import style from './style';
import color from '../../../Asset/color';
import { responsiveHeight } from '../Helper/ResponsiveUI';


const Index = ({
    data,
    onPress,
}) => {
    const [change, setChange] = useState(0)

    useEffect(() => {
        onPress
        change
    }, [clickHappens, change, onPress])

    const clickHappens = (itemId) => () => {
        setChange(currentItem => currentItem === itemId ? itemId : itemId)
        onPress(currentItem => currentItem === itemId ? itemId : itemId)
    }
    return (
        <View>
            <ScrollView horizontal={true} style={style.content} showsHorizontalScrollIndicator={false}>
                {data.map((data, I) => {
                    const colors = change == data.id ? color.bgColors : color.Primary
                    return (
                        <Pressable
                            key={I}
                            onPress={clickHappens(data.id)}
                        >
                            <View
                                style={style.conData(change, data.id)}
                                key={I}
                            >
                                <Ctext
                                    label={data.label}
                                    fontSizes={responsiveHeight(12)}
                                    colors={colors}
                                    Font={'Inter-400'}
                                    align={'center'}
                                />
                            </View>
                        </Pressable>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Index