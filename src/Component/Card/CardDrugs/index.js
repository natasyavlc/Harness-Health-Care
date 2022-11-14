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

const CardDrugs = ({ data }) => {
    return (
        <View style={styles.container}>
            <CustomText
                label={'Health Habit'}
                fontSizes={responsiveHeight(12)}
                Font={'Inters'}
                colors={color.Text_Grey}
            />
            <CustomText
                label={'Drugs'}
                fontSizes={responsiveHeight(14)}
                Font={'Inter-Semi'}
                colors={color.Primary_Black}
                lineHeights={20}
            />
            <View style={{ height: responsiveHeight(16) }} />
            {
                Object.keys(data).length === 0 ?
                    <>
                        <CustomText
                            label={'No drugs history found'}
                            fontSizes={responsiveHeight(14)}
                            Font={'Inters'}
                            colors={color.Text_Grey}
                            lineHeights={16}
                            align={'center'}
                        />
                        <View style={{ height: responsiveHeight(16) }} />
                    </>
                    :
                    <>
                        <CustomText
                            label={'Type'}
                            fontSizes={responsiveHeight(12)}
                            Font={'Inters'}
                            colors={color.Text_Grey}
                        />

                        <CustomText
                            label={data.type}
                            fontSizes={responsiveHeight(14)}
                            Font={'Inters'}
                            colors={color.Primary_Black}
                            lineHeights={20}
                        />
                        <View style={{ height: responsiveHeight(16) }} />

                        <CustomText
                            label={'Usage'}
                            fontSizes={responsiveHeight(12)}
                            Font={'Inters'}
                            colors={color.Text_Grey}
                        />

                        <CustomText
                            label={data.usage}
                            fontSizes={responsiveHeight(14)}
                            Font={'Inters'}
                            colors={color.Primary_Black}
                            lineHeights={20}
                        />
                        <View style={{ height: responsiveHeight(16) }} />

                        <CustomText
                            label={'Period'}
                            fontSizes={responsiveHeight(12)}
                            Font={'Inters'}
                            colors={color.Text_Grey}
                        />

                        <CustomText
                            label={data.period}
                            fontSizes={responsiveHeight(14)}
                            Font={'Inters'}
                            colors={color.Primary_Black}
                            lineHeights={20}
                        />
                        <View style={{ height: responsiveHeight(16) }} />

                        <CustomText
                            label={'Alcohol Usage Disorder'}
                            fontSizes={responsiveHeight(12)}
                            Font={'Inters'}
                            colors={color.Text_Grey}
                        />

                        <CustomText
                            label={data.disorder ? 'Yes' : 'No'}
                            fontSizes={responsiveHeight(14)}
                            Font={'Inters'}
                            colors={color.Primary_Black}
                            lineHeights={20}
                        />
                        <View style={{ height: responsiveHeight(16) }} />

                        <CustomText
                            label={'Doctor Notes'}
                            fontSizes={responsiveHeight(12)}
                            Font={'Inters'}
                            colors={color.Text_Grey}
                        />

                        <CustomText
                            label={data.doctorNotes}
                            fontSizes={responsiveHeight(14)}
                            Font={'Inters'}
                            colors={color.Primary_Black}
                            lineHeights={20}
                        />
                        <View style={{ height: responsiveHeight(16) }} />
                    </>
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
                doctorPhoto={data.doctorPhoto}
                doctorName={data.doctorName}
                doctorExpertise={data.doctorExpertise}
            />
        </View>
    )
}

export default CardDrugs