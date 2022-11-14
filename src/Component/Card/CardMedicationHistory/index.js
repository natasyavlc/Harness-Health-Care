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

const CardMedicationHistory = ({
    medication = 'Panadol',
    startDate = '28/07/2022',
    instruction = '1 tablet',
    status = 'current',
    doctorNote = 'Patient had a frequent headache and nauseous, sometimes feeling a sore throat.',
    doctorName = 'Dr. Miles Arthur',
    doctorExpertise = 'Cardiologist at St. Patrick Hospital',
    doctorPhoto = 'https://source.unsplash.com/1024x768/?doctor'
}) => {
    return (
        <View style={styles.container}>
            <CustomText
                label={'Medication'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <CustomText
                label={medication}
                fontSizes={responsiveHeight(14)}
                Font={'Inters'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Starting Date'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <CustomText
                label={startDate}
                fontSizes={responsiveHeight(14)}
                Font={'Inters'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Instruction'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <CustomText
                label={`${instruction}(s) daily`}
                fontSizes={responsiveHeight(14)}
                Font={'Inters'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Status'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <CustomText
                label={status}
                fontSizes={responsiveHeight(14)}
                Font={'Inters'}
                colors={color.Primary_Black}
                lineHeights={responsiveHeight(20)}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Doctor Notes'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <CustomText
                label={doctorNote}
                fontSizes={responsiveHeight(14)}
                Font={'Inters'}
                colors={color.Primary_Black}
                lineHeights={responsiveHeight(20)}
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

export default CardMedicationHistory