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

const CardFamilyHistory = ({
    disease = 'Asthma',
    earlyAgeDiagnosis = 5,
    finalAgeDiagnosis = 45,
    familySameDiagnosis = ['Spouse'],
    doctorNote = 'Patient had a frequent headache and nauseous, sometimes feeling a sore throat.',
    doctorName = 'Dr. Miles Arthur',
    doctorExpertise = 'Cardiologist at St. Patrick Hospital',
    doctorPhoto = 'https://source.unsplash.com/1024x768/?doctor'
}) => {
    return (
        <View style={styles.container}>
            <CustomText
                label={'Disease'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <CustomText
                label={disease}
                fontSizes={responsiveHeight(14)}
                Font={'Inter-Semi'}
                colors={color.Primary_Black}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Diagnosed at'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <CustomText
                label={`${earlyAgeDiagnosis} y.o. - ${finalAgeDiagnosis} y.o.`}
                fontSizes={responsiveHeight(14)}
                Font={'Inters'}
                colors={color.Primary_Black}
            />
            <View style={{ height: responsiveHeight(16) }} />

            <CustomText
                label={'Family members with same diseases'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <View style={styles.containerLabel}>
                {familySameDiagnosis.map((val, index) => {
                    return (
                        <View style={styles.wrapLabel} key={index}>
                            <Text style={styles.label}>{val}</Text>
                        </View>
                    )
                })}
            </View>

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

export default CardFamilyHistory