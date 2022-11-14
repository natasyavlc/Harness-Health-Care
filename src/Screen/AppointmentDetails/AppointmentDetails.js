import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderWithStatus from '../../Component/HeaderWithStatus/Index'
import color from '../../../Asset/color'
import CardAppointmentPatient from '../../Component/Card/CardAppointmentPatient'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import CustomButton from '../../Component/CostumeButton/Index'
import CustomText from '../../Component/CostumeText/index'
// ICON
import Chevron from '../../image/Icons/Chevron.png'

const listMedicalRecords = [
    { id: 1, title: 'Medications', detail: 'FinishedMedications' },
    { id: 2, title: 'Recommended Lab Tests', detail: 'FinishedRecommendedLabTests' },
    { id: 3, title: 'Diagnosis', detail: 'FinishedDiagnosis' },
    { id: 4, title: 'Doctor Notes', detail: 'FinishedDoctorNotes' },
]
const AppointmentDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <HeaderWithStatus
            title={'Dr. Robert Fox'}
            onBack={() => { navigation.goBack() }}
            day={'Saturday'}
            dateTime={'July 27 2022 08.00 AM'}
            titleStatus={'Session Finished'}
            isStatus={true}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.conCard}>
                <CardAppointmentPatient />
            </View>
            <View style={styles.conRecord}>
                <CustomText
                    label={'Appoinment Result(s)'}
                    fontSizes={responsiveHeight(16)}
                    Font={'Inter-Semi'}
                    colors={color.Primary_Black}
                    lineHeights={responsiveHeight(19.2)}
                    fontWeight={'600'}
                />
                {
                    listMedicalRecords.map((data, index) => {
                        return (
                        <View key={index}>
                            <CustomButton
                                key={data.id}
                                Label={data.title}
                                withIcon={false}
                                ChevronImg={Chevron}
                                Chevron={true}
                                onPress={() => {
                                    navigation.navigate(data.detail)
                                }}
                            />
                        </View>
                        )
                    })
                }
            </View>
        </ScrollView>
  </SafeAreaView>
  )
}

export default AppointmentDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.bgColors
    },
    conCard:{
        marginTop: responsiveHeight(30),
        marginBottom: responsiveHeight(24)
    },
    conRecord:{
        marginHorizontal: responsiveWidth(16)
    }
})