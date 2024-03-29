import React, { useEffect } from 'react'
import { BackHandler, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

// COMPONENT
import HeaderWithDownload from '../../../Component/HeaderWithDownload'
import CustomButton from '../../../Component/CostumeButton/Index'
import CustomText from '../../../Component/CostumeText'

// ICON
import ChevronLeft from '../../../image/Icon/ic_chevron_left.png'
import CardSurgicalHistory from '../../../Component/Card/CardSurgicalHistory'

// STYLES
import color from '../../../../Asset/color'
import { responsiveHeight } from '../../../Component/Helper/ResponsiveUI'

// DUMMY DATA
const dataSurgical = [{
  surgery: 'Cataract',
  admissionDate: '28/07/2022',
  dischargeDate: '29/07/2022',
  surgeryAge: 35,
  surgeryDate: '28/07/2022',
  surgeryHospital: 'National Hospital',
  reason: `Injury that changed the tissue that makes up the eye's lens`,
  doctorNotes: 'Patient had a frequent headache and nauseous, sometimes feeling a sore throat.',
  doctorName: 'Dr. Miles Arthur',
  doctorExpertise: 'Cardiologist at St. Patrick Hospital',
  doctorPhoto: 'https://source.unsplash.com/1024x768/?doctor'
}]

const SurgicalHistory = ({ navigation }) => {

  const onBackPress = () => {
    navigation.goBack()
    return true
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithDownload
        btnDownload={false}
        onBack={() => navigation.goBack()}
      />
      <CustomButton
        Label={'Surgical History'}
        withIcon={true}
        ImageProp={ChevronLeft}
        onPress={() => { navigation.goBack() }}
      />

      <ScrollView>
        {
          dataSurgical.length > 0 ?
            dataSurgical.map((data, index) => {
              return (
                <CardSurgicalHistory
                  key={index}
                  surgery={data.surgery}
                  admissionDate={data.admissionDate}
                  dischargeDate={data.dischargeDate}
                  surgeryAge={data.surgeryAge}
                  surgeryDate={data.surgeryDate}
                  surgeryHospital={data.surgeryHospital}
                  reason={data.reason}
                  doctorName={data.doctorName}
                  doctorExpertise={data.doctorExpertise}
                  doctorPhoto={data.doctorPhoto}
                />
              )
            })
            :
            <View style={{ marginTop: '10%' }}>
              <CustomText
                label={'No surgical history available'}
                fontSizes={16}
                Font={'Inters'}
                colors={color.Text_Grey}
                align={'center'}
              />
            </View>
        }
        <View style={{ height: responsiveHeight(24) }} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default SurgicalHistory