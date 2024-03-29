import React from 'react'
import { View, Text, Dimensions } from 'react-native'

// COMPONENT
import CustomText from '../../CostumeText'
import Divider from '../../Divider'
import DoctorBiodata from '../../DoctorBiodata'

// STYLE
import styles from './styles'
import color from '../../../../Asset/color'
import { responsiveHeight } from '../../Helper/ResponsiveUI'

const CardGenderRelatedMan = ({
    urinate = true,
    urinateTimes = 2,
    urinatePain = false,
    doctorName = 'Dr. Miles Arthur',
    doctorExpertise = 'Cardiologist at St. Patrick Hospital',
    doctorPhoto = 'https://source.unsplash.com/1024x768/?doctor'
}) => {
    return (
        <View style={styles.container}>
            <CustomText
                label={'Do you usually urinate during the night?'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <CustomText
                label={urinate ? 'Yes' : 'No'}
                fontSizes={responsiveHeight(14)}
                Font={'Inter-Semi'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'If yes, number of times'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />

            <CustomText
                label={urinateTimes}
                fontSizes={responsiveHeight(14)}
                Font={'Inters'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Do you feel pain or burning during urination?'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />

            <CustomText
                label={urinatePain ? 'Yes' : 'No'}
                fontSizes={responsiveHeight(14)}
                Font={'Inters'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <Divider />

            <View style={{ height: responsiveHeight(16) }} />
            <CustomText
                label={'Diagnosed by :'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <DoctorBiodata
                doctorPhoto={doctorPhoto}
                doctorName={doctorName}
                doctorExpertise={doctorExpertise}
            />
        </View>
    )
}

export default CardGenderRelatedMan