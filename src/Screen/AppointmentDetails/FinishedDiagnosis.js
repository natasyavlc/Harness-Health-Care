import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../../Component/Headers'
import CardDiagnosisHistory from '../../Component/Card/CardDiagnosisHistory'
import { responsiveHeight } from '../../Component/Helper/ResponsiveUI'


const dataDiagnosis = [
    {
      accident: 'Depression',
      admissionDate: '28/07/2022',
      dischargeDate: '29/07/2022',
      icd: 'XXX',
      ageStart: 29,
      type: 'Primary',
      severity: 'Moderate',
      doctorName: 'Dr. Miles Arthur',
      doctorExpertise: 'Cardiologist at St. Patrick Hospital',
      doctorPhoto: 'https://source.unsplash.com/1024x768/?doctor'
    }
  ]
const FinishedDiagnosis = ({navigation}) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Headers
        Hlabel={'Diagnosis'}
        onPress={() => {
          navigation.goBack()
        }}
        OnBack={true}
      />
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView style={styles.container}>
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
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default FinishedDiagnosis

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})