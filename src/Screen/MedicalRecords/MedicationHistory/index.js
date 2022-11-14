import React, { useEffect } from 'react'
import { BackHandler, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

// COMPONENT
import HeaderWithDownload from '../../../Component/HeaderWithDownload'
import CustomButton from '../../../Component/CostumeButton/Index'
import CustomText from '../../../Component/CostumeText'

// ICON
import ChevronLeft from '../../../image/Icon/ic_chevron_left.png'
import CardMedicationHistory from '../../../Component/Card/CardMedicationHistory'

// STYLES
import color from '../../../../Asset/color'
import { responsiveHeight } from '../../../Component/Helper/ResponsiveUI'

// DUMMY DATA
const dataMedication = [
  {
    medication: 'Panadol',
    startDate: '28/07/2022',
    instruction: '1 tablet',
    status: 'current',
    doctorNotes: 'Patient had a frequent headache and nauseous, sometimes feeling a sore throat.',
    doctorName: 'Dr. Miles Arthur',
    doctorExpertise: 'Cardiologist at St. Patrick Hospital',
    doctorPhoto: 'https://source.unsplash.com/1024x768/?doctor'
  }
]

const MedicationHistory = ({ navigation }) => {

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
        Label={'Medication'}
        withIcon={true}
        ImageProp={ChevronLeft}
        onPress={() => { navigation.goBack() }}
      />


      <ScrollView>
        {
          dataMedication.length > 0 ?
            dataMedication.map((data, index) => {
              return (
                <CardMedicationHistory
                  key={index}
                  medication={data.medication}
                  startDate={data.startDate}
                  instruction={data.instruction}
                  status={data.status}
                  doctorName={data.doctorName}
                  doctorExpertise={data.doctorExpertise}
                  doctorPhoto={data.doctorPhoto}
                />
              )
            })
            :
            <View style={{ marginTop: '10%' }}>
              <CustomText
                label={'No medication record available'}
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

export default MedicationHistory