import React, { useEffect } from 'react'
import { BackHandler, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

// COMPONENT
import HeaderWithDownload from '../../../Component/HeaderWithDownload'
import CustomButton from '../../../Component/CostumeButton/Index'
import CustomText from '../../../Component/CostumeText'

// ICON
import ChevronLeft from '../../../image/Icon/ic_chevron_left.png'
import CardDiagnosisHistory from '../../../Component/Card/CardDiagnosisHistory'

// STYLES
import color from '../../../../Asset/color'
import { responsiveHeight } from '../../../Component/Helper/ResponsiveUI'

// DUMMY DATA
const dataDiagnosis = [
  {
    accident: 'Arm Fracture',
    admissionDate: '28/07/2022',
    dischargeDate: '29/07/2022',
    icd: 'XXX',
    ageStart: 29,
    type: 'Primary',
    severity: 'Moderate',
    doctorNotes: 'Patient had a frequent headache and nauseous, sometimes feeling a sore throat.',
    doctorName: 'Dr. Miles Arthur',
    doctorExpertise: 'Cardiologist at St. Patrick Hospital',
    doctorPhoto: 'https://source.unsplash.com/1024x768/?doctor'
  }
]

const DiagnosisHistory = ({ navigation }) => {

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
        Label={'Diagnosis'}
        withIcon={true}
        ImageProp={ChevronLeft}
        onPress={() => { navigation.goBack() }}
      />

      <ScrollView>
        {
          dataDiagnosis.length > 0 ?
            dataDiagnosis.map((data, index) => {
              return (
                <CardDiagnosisHistory
                  key={index}
                  diagnosis={data.accident}
                  admissionDate={data.admissionDate}
                  dischargeDate={data.dischargeDate}
                  icd={data.icd}
                  ageStart={data.ageStart}
                  severity={data.severity}
                  type={data.type}
                  doctorName={data.doctorName}
                  doctorExpertise={data.doctorExpertise}
                  doctorPhoto={data.doctorPhoto}
                />
              )
            })
            :
            <View style={{ marginTop: '10%' }}>
              <CustomText
                label={'No diagnosis record available'}
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

export default DiagnosisHistory