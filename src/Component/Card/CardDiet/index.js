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

const CardDiet = ({
    dietPlan = 'Keto diet',
    medicalDiet = false,
    saltIntake = true,
    fatIntake = true,
    doctorName = 'Dr. Miles Arthur',
    doctorExpertise = 'Cardiologist at St. Patrick Hospital',
    doctorPhoto = 'https://source.unsplash.com/1024x768/?doctor'
}) => {
    return (
        <View style={styles.container}>
            <CustomText
                label={'Diet Plan'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <CustomText
                label={dietPlan}
                fontSizes={responsiveHeight(14)}
                Font={'Inters'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Physician prescription or medical diet'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />

            <CustomText
                label={medicalDiet? 'Yes' : 'No'}
                fontSizes={responsiveHeight(14)}
                Font={'Inters'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Salt intake'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />

            <CustomText
                label={saltIntake? 'Yes' : 'No'}
                fontSizes={responsiveHeight(14)}
                Font={'Inters'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Fat intake'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />

            <CustomText
                label={fatIntake? 'Yes' : 'No'}
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

export default CardDiet