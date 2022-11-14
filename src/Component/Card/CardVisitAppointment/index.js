import React from 'react'
import { Text, View } from 'react-native'

// STYLE
import styles from './styles'

// COMPONENT
import CustomText from '../../CostumeText'
import { responsiveHeight } from '../../Helper/ResponsiveUI'

const CardVisitAppointment = ({
    date = 'Saturday, July 27 2022',
    time = new Date().toLocaleTimeString()
}) => {
    return (
        <View style={styles.card}>
            <CustomText
                label={'Visit Schedule'}
                fontSizes={responsiveHeight(10)}
                Font={'Inter-Semi'}
                colors={colors.Primary_Black}
                align='center'
            />
            <View style={{ height: responsiveHeight(8) }} />
            <CustomText
                label={date}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={colors.Primary_Black}
                align='center'
            />
            <View style={{ height: responsiveHeight(4) }} />
            <CustomText
                label={time}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={colors.Primary_Black}
                align='center'
            />
        </View>
    )
}

export default CardVisitAppointment