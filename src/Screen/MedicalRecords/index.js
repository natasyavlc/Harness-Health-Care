import React, { useEffect } from 'react'
import { BackHandler, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

// COMPONENT
import HeaderWithDownload from '../../Component/HeaderWithDownload'
import CustomButton from '../../Component/CostumeButton/Index'

// ICON
import Chevron from '../../image/Icons/Chevron.png'

// LIST MEDICAL RECORDS
const listMedicalRecords = [
  { id: 1, title: 'Family History', detail: 'FamilyHistory' },
  { id: 2, title: 'Surgical History', detail: 'SurgicalHistory' },
  { id: 3, title: 'Other Hospitalizations/Accidents', detail: 'AccidentHistory' },
  { id: 4, title: 'Health Habit and Personal Accident', detail: 'HealthHabit' },
  { id: 5, title: 'Diagnosis', detail: 'DiagnosisHistory' },
  { id: 6, title: 'Medication', detail: 'MedicationHistory' },
  { id: 7, title: 'Allergies', detail: 'AllergiesHistory' },
  { id: 8, title: 'Immunizations', detail: 'ImmunizationsHistory' },
  { id: 9, title: 'Childhood Diseases', detail: 'ChildhoodDisease' },
  { id: 10, title: 'Medical Problems (Sign & Symptoms)', detail: 'MedicalProblem' },
  { id: 11, title: 'Dental Treatment', detail: 'DentalTreatments' },
  { id: 12, title: 'Blood Transfusion', detail: 'BloodTransfusion' },
  { id: 13, title: 'Prescribed Drugs', detail: 'PrescribedDrugs' },
  { id: 14, title: 'Allergies to Immunization', detail: 'ImmunizationsAllergies' },
  { id: 15, title: 'Gender Related Record', detail: 'GenderRelated' }
]
const Index = ({ navigation }) => {
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
      <HeaderWithDownload onBack={() => { navigation.goBack() }} />
      <ScrollView style={styles.scroller} showsVerticalScrollIndicator={false}>
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
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  scroller: {
    margin: 16
  }
})

export default Index