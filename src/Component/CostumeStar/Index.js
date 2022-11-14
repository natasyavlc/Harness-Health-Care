import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './style'

const Index = ({
    size,
    defaultRatings,
    onChange,
    disable,
}) => {

    const [defaultRating, setDefaultRating] = useState(defaultRatings)
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])

    const Starsfill = require('../../image/Icon/Stars.png')
    const StarsUnfill = require('../../image/Icon/StarsUn.png')
    useEffect(() => {
        defaultRatings
        defaultRating
        disable
    }, [defaultRating, defaultRatings, disable])

    const handlerChange = (item) => {
        setDefaultRating(item)
        onChange(item)
    }
    return (
        <View style={style.container}>
            {maxRating.map((item, key) => {
                return (
                    <Pressable
                        disabled={disable}
                        activeOpacity={0.7}
                        key={item}
                        style={style.containerPadding(size)}
                        onPress={() => handlerChange(item)}
                    >
                        <Image resizeMode='contain' source={item <= defaultRating ? Starsfill : StarsUnfill} style={style.imageCon(size)} />

                    </Pressable>
                )
            })}
        </View>
    )
}

export default Index