import React from 'react'
import { View, Pressable, Text } from 'react-native'

// COMPONENT
import CustomText from '../CostumeText'

// STYLE
import styles from './styles'

// HELPER
import colors from '../../../Asset/color'
import { responsiveHeight } from '../Helper/ResponsiveUI'

const EmptyDataWithButton = ({
    message,
    buttonText,
    onPress
}) => {
    return (
        <View style={styles.container}>
            <CustomText
                label={message}
                fontSizes={responsiveHeight(16)}
                Font={'Inter-400'}
                colors={colors.softBlack}
            />
            <View style={{ height: responsiveHeight(24) }} />
            <View style={{ height: responsiveHeight(65) }}>
                <Pressable
                    onPress={onPress}
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>{buttonText}</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default EmptyDataWithButton