import React from 'react'
import { View, Image, Pressable } from 'react-native'

// COMPONENT
import CostumeText from '../../CostumeText'

// STYLE
import { responsiveHeight } from '../../Helper/ResponsiveUI'
import colors from '../../../../Asset/color'
import styles from './style'

const Index = ({
    onClick,
    icon,
    title,
    value,
    onPress,
}) => {
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.container, { borderWidth: onClick ? responsiveHeight(2) : null, elevation: 5 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: responsiveHeight(24) }}>
                    <View style={styles.rowContainer}>
                        <Image style={styles.img} source={icon} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ marginBottom: responsiveHeight(8) }}>
                            <CostumeText
                                label={title}
                                Font={'Inters'}
                                fontSizes={responsiveHeight(12)}
                                colors={colors.Text_Grey}
                                lineHeights={responsiveHeight(14.52)}
                            />
                        </View>
                        <CostumeText
                            label={value}
                            Font={'Inter-Semi'}
                            fontSizes={responsiveHeight(16)}
                            colors={colors.Primary_Black}
                            lineHeights={responsiveHeight(22.4)}
                        />
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default Index