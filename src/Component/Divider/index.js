import React from 'react'
import { View, Dimensions } from 'react-native'

// STYLE
import color from '../../../Asset/color'

const Divider = ({
    thickness = 1.5,
    divColor = color.borderGray,
    width = Dimensions.get('window').width - 32
}) => {
    return (
        <View
            style={{
                borderTopWidth: thickness,
                borderColor: divColor,
                width: width,
                alignSelf: 'center'
            }}
        />
    )
}

export default Divider