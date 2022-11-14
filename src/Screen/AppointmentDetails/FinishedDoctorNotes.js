import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../../Component/Headers'
import CardDoctorNotes from '../../Component/Card/CardDoctorNotes.js/Index'
import CustomText from '../../Component/CostumeText/index'
import color from '../../../Asset/color'
import { responsiveHeight } from '../../Component/Helper/ResponsiveUI'
const dataDoctorNotes = [
  {
    title: 'Doctor Notes',
    notes: 'Patient had a frequent headache and nauseous, sometimes feeling a sore throat.'
  },

]
const FinishedDoctorNotes = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Headers
        Hlabel={'Doctor Notes'}
        onPress={() => {
          navigation.goBack()
        }}
        OnBack={true}
      />
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView style={styles.container}>
        {
          dataDoctorNotes.length > 0 ?
            dataDoctorNotes.map((data, index) => {
              return (
                <CardDoctorNotes
                  key={index}
                  title={data.title}
                  notes={data.notes}
                />
              )
            })
            :
            <View style={{ marginTop: '10%' }}>
              <CustomText
                label={'No diagnosis record available'}
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

export default FinishedDoctorNotes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: responsiveHeight(16),
    marginTop: responsiveHeight(16)
  },
})