import React from 'react'
import { View, Text, Image } from 'react-native'

// STYLE
import styles from '../CardDetailAppointment/styles'
import colors from '../../../../Asset/color'

// COMPONENT
import CustomText from '../../CostumeText'
import { responsiveHeight } from '../../Helper/ResponsiveUI'

const CardDetailAppointment = ({
    uriImage = 'https://source.unsplash.com/1024x768/?doctors',
    name = "Dr. Robert Fox",
    specialist = "Cardiologist at St. Patrick Hospital"
}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: uriImage }} />
            <View>
                <View style={styles.rowContainer}>
                    <CustomText
                        label={name}
                        fontSizes={responsiveHeight(14)}
                        Font={'Inter-Semi'}
                        colors={colors.Primary_Black}
                    />
                    <View style={styles.label}>
                        <Text style={styles.txtLabel}> Doctor</Text>
                    </View>
                </View>
                <CustomText
                        label={specialist}
                        fontSizes={responsiveHeight(10)}
                        Font={'Inters'}
                        colors={colors.Primary_Black}
                    />
            </View>
        </View>
    )
}

export default CardDetailAppointment