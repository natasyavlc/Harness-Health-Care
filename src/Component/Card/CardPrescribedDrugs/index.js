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

const CardPrescribedDrugs = ({
    name = 'Atorvastatin (Lipitor)',
    onset = 22,
    frequency = '20 mg daily (10 tablets)',
    strength = 'XXX',
    doctorName = 'Dr. Miles Arthur',
    doctorExpertise = 'Cardiologist at St. Patrick Hospital',
    doctorPhoto = 'https://source.unsplash.com/1024x768/?doctor'
}) => {
    return (
        <View style={styles.container}>
            <CustomText
                label={'Name'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <CustomText
                label={name}
                fontSizes={responsiveHeight(14)}
                Font={'Inter-Semi'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Onset'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />

            <CustomText
                label={`${onset} y.o.`}
                fontSizes={responsiveHeight(14)}
                Font={'Inters'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Frequency taken'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />

            <CustomText
                label={frequency}
                fontSizes={responsiveHeight(14)}
                Font={'Inters'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Strength'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />

            <CustomText
                label={strength}
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

export default CardPrescribedDrugs