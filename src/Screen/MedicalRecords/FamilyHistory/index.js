import React, { useEffect } from 'react'
import { BackHandler, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

// COMPONENT
import HeaderWithDownload from '../../../Component/HeaderWithDownload'
import CustomButton from '../../../Component/CostumeButton/Index'
import CardFamilyHistory from '../../../Component/Card/CardFamilyHistory'
import CustomText from '../../../Component/CostumeText'

// ICON
import ChevronLeft from '../../../image/Icon/ic_chevron_left.png'
import { responsiveHeight } from '../../../Component/Helper/ResponsiveUI'

// STYLE
import color from '../../../../Asset/color'

// DUMMY DATA
const familyHistory = [
  {
    disease: 'Asthma',
    earlyAgeDiagnosis: 5,
    finalAgeDiagnosis: 45,
    familySameDiagnosis: ['Father', 'Grandfather'],
    doctorNote: 'Patient had a frequent headache and nauseous, sometimes feeling a sore throat.',
    doctorName: 'Dr. Robert Fox',
    doctorExpertise: 'Cardiologist at St. Patrick Hospital',
    doctorPhoto: 'https://source.unsplash.com/1024x768/?doctors'
  },
  {
    disease: 'ADHD',
    earlyAgeDiagnosis: 5,
    finalAgeDiagnosis: 45,
    familySameDiagnosis: ['Spouse'],
    doctorNote: 'Patient had a frequent headache and nauseous, sometimes feeling a sore throat.',
    doctorName: 'Dr. Miles Arthur',
    doctorExpertise: 'Cardiologist at St. Patrick Hospital',
    doctorPhoto: 'https://source.unsplash.com/1024x768/?doctor'
  }
]

const FamilyHistory = ({ navigation }) => {
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
        Label={'Family History'}
        withIcon={true}
        ImageProp={ChevronLeft}
        onPress={() => { navigation.goBack() }}
      />

      <ScrollView>
        {familyHistory.length > 0 ?
          familyHistory.map((data, i) => {
            return (
              <CardFamilyHistory
                key={i}
                disease={data.disease}
                earlyAgeDiagnosis={data.earlyAgeDiagnosis}
                finalAgeDiagnosis={data.finalAgeDiagnosis}
                familySameDiagnosis={data.familySameDiagnosis}
                doctorNote={data.doctorNote}
                doctorName={data.doctorName}
                doctorExpertise={data.doctorExpertise}
                doctorPhoto={data.doctorPhoto}
              />
            )
          })
          :
          <View style={{ marginTop: '10%' }}>
            <CustomText
              label={'No Family Record available'}
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

export default FamilyHistory