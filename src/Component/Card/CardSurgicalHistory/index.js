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

const CardSurgicalHistory = ({
    surgery = 'Cataract',
    admissionDate = '28/07/2022',
    dischargeDate = '29/07/2022',
    surgeryAge = 35,
    surgeryDate = '28/07/2022',
    surgeryHospital = 'National Hospital',
    reason = `Injury that changed the tissue that makes up the eye's lens`,
    doctorNotes = 'Patient had a frequent headache and nauseous, sometimes feeling a sore throat.',
    doctorName = 'Dr. Miles Arthur',
    doctorExpertise = 'Cardiologist at St. Patrick Hospital',
    doctorPhoto = 'https://source.unsplash.com/1024x768/?doctor'
}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.rowContainer, styles.spacing]}>
                <View>
                    <CustomText
                        label={'Surgery'}
                        fontSizes={responsiveHeight(12)}
                        Font={'Inters'}
                        colors={color.Text_Grey}
                    />
                    <CustomText
                        label={surgery}
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
                    label={'Age at Surgery'}
                    fontSizes={responsiveHeight(12)}
                    Font={'Inters'}
                    colors={color.Text_Grey}
                />
                <CustomText
                    label={`${surgeryAge} y.o.`}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inters'}
                    colors={color.Primary_Black}
                />
            </View>

            <View style={styles.spacing}>
                <CustomText
                    label={'Surgery Date'}
                    fontSizes={responsiveHeight(12)}
                    Font={'Inters'}
                    colors={color.Text_Grey}
                />
                <CustomText
                    label={surgeryDate}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inters'}
                    colors={color.Primary_Black}
                />
            </View>

            <View style={styles.spacing}>
                <CustomText
                    label={'Hospital of Surgery'}
                    fontSizes={responsiveHeight(12)}
                    Font={'Inters'}
                    colors={color.Text_Grey}
                />
                <CustomText
                    label={surgeryHospital}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inters'}
                    colors={color.Primary_Black}
                />
            </View>

            <View style={styles.spacing}>
                <CustomText
                    label={'Reason'}
                    fontSizes={responsiveHeight(12)}
                    Font={'Inters'}
                    colors={color.Text_Grey}
                />
                <CustomText
                    label={reason}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inters'}
                    colors={color.Primary_Black}
                />
            </View>

            <View style={styles.spacing}>
                <CustomText
                    label={'Doctor Notes'}
                    fontSizes={responsiveHeight(12)}
                    Font={'Inters'}
                    colors={color.Text_Grey}
                    lineHeights={responsiveHeight(18)}
                />
                <CustomText
                    label={doctorNotes}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inters'}
                    colors={color.Primary_Black}
                    lineHeights={responsiveHeight(18)}
                />
            </View>

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

export default CardSurgicalHistory