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

const CardChildhoodDisease = ({
    diseases = 'Tetanus',
    tetanus = true,
    chronic = false,
    chickenpox = true,
    doctorName = 'Dr. Miles Arthur',
    doctorExpertise = 'Cardiologist at St. Patrick Hospital',
    doctorPhoto = 'https://source.unsplash.com/1024x768/?doctor'
}) => {
    return (
        <View style={styles.container}>
            <CustomText
                label={'Diseases'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <CustomText
                label={diseases}
                fontSizes={responsiveHeight(14)}
                Font={'Inter-Semi'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Tetanus'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <CustomText
                label={tetanus? 'Yes' : 'No'}
                fontSizes={responsiveHeight(14)}
                Font={'Inters'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Chronic'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <CustomText
                label={chronic ? 'Yes' : 'No'}
                fontSizes={responsiveHeight(14)}
                Font={'Inters'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Chickenpox'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <CustomText
                label={chickenpox? 'Yes' : 'No'}
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

export default CardChildhoodDisease