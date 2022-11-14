import React from 'react'
import { Platform, View } from 'react-native'

// STYLES
import styles from './styles'
import color from '../../../../Asset/color'

// COMPONENT
import CustomText from '../../CostumeText'
import Divider from '../../Divider'
import { responsiveHeight } from '../../Helper/ResponsiveUI'
import DoctorBiodata from '../../DoctorBiodata'

const CardDiagnosisHistory = ({
    diagnosis = 'Arm Fracture',
    admissionDate = '28/07/2022',
    dischargeDate = '29/07/2022',
    icd = 'XXX',
    ageStart = 29,
    type = 'Primary',
    severity = 'Moderate',
    doctorNotes,
    doctorName = 'Dr. Miles Arthur',
    doctorExpertise = 'Cardiologist at St. Patrick Hospital',
    doctorPhoto = 'https://source.unsplash.com/1024x768/?doctor',
    isDoctorNotes,
}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.rowContainer, styles.spacing]}>
                <View>
                    <CustomText
                        label={'Diagnosis'}
                        fontSizes={responsiveHeight(12)}
                        Font={'Inters'}
                        colors={color.Text_Grey}
                    />
                    <CustomText
                        label={diagnosis}
                        fontSizes={responsiveHeight(14)}
                        Font={'Inter-Semi'}
                        colors={color.Primary_Black}
                    />
                </View>

                <View style={styles.rowContainer}>
                    <View style={{ marginRight: Platform.OS == 'ios'? responsiveHeight(12) : responsiveHeight(20) }}>
                        <CustomText
                            label={'Admission Date'}
                            fontSizes={responsiveHeight(12)}
                            Font={'Inters'}
                            colors={color.Text_Grey}
                        />
                        <CustomText
                            label={admissionDate}
                            fontSizes={responsiveHeight(14)}
                            Font={'Inters'}
                            colors={color.Primary_Black}
                        />
                    </View>
                    <View>
                        <CustomText
                            label={'Discharge Date'}
                            fontSizes={responsiveHeight(12)}
                            Font={'Inters'}
                            colors={color.Text_Grey}
                        />
                        <CustomText
                            label={dischargeDate}
                            fontSizes={responsiveHeight(14)}
                            Font={'Inters'}
                            colors={color.Primary_Black}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.spacing}>
                <CustomText
                    label={'ICD-10'}
                    fontSizes={responsiveHeight(12)}
                    Font={'Inters'}
                    colors={color.Text_Grey}
                />
                <CustomText
                    label={icd}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inters'}
                    colors={color.Primary_Black}
                />
            </View>

            <View style={styles.spacing}>
                <CustomText
                    label={'Starting Age'}
                    fontSizes={responsiveHeight(12)}
                    Font={'Inters'}
                    colors={color.Text_Grey}
                />
                <CustomText
                    label={`${ageStart} y.o.`}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inters'}
                    colors={color.Primary_Black}
                />
            </View>

            <View style={styles.spacing}>
                <CustomText
                    label={'Type'}
                    fontSizes={responsiveHeight(12)}
                    Font={'Inters'}
                    colors={color.Text_Grey}
                />
                <CustomText
                    label={type}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inters'}
                    colors={color.Primary_Black}
                />
            </View>

            <View style={styles.spacing}>
                <CustomText
                    label={'Severity'}
                    fontSizes={responsiveHeight(12)}
                    Font={'Inters'}
                    colors={color.Text_Grey}
                />
                <CustomText
                    label={severity}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inters'}
                    colors={color.Primary_Black}
                />
            </View>
            {
                isDoctorNotes ? 
                    <View style={styles.spacing}>
                        <CustomText
                            label={'Doctor Notes'}
                            fontSizes={responsiveHeight(12)}
                            Font={'Inters'}
                            colors={color.Text_Grey}
                            lineHeights={20}
                        />
                        <CustomText
                            label={doctorNotes}
                            fontSizes={responsiveHeight(14)}
                            Font={'Inters'}
                            colors={color.Primary_Black}
                            lineHeights={20}
                        />
                    </View>
                :
                <></>
            }

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

export default CardDiagnosisHistory