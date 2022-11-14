import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../../Component/Headers'
import CardMedicationHistory from '../../Component/Card/CardMedicationHistory'
import CustomText from '../../Component/CostumeText/index'
import { responsiveHeight } from '../../Component/Helper/ResponsiveUI'
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
const FinishedMedications = ({navigation}) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Headers
        Hlabel={'Medications'}
        onPress={() => {
          navigation.goBack()
        }}
        OnBack={true}
      />
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
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
                fontSizes={responsiveHeight(16)}
                Font={'Inters'}
                colors={color.Text_Grey}
                align={'center'}
              />
            </View>
        }
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default FinishedMedications

const styles = StyleSheet.create({})