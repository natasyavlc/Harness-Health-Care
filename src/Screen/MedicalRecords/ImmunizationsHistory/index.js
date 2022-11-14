import React, { useEffect, useState } from 'react'
import { BackHandler, Dimensions, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import HeaderWithDownload from '../../../Component/HeaderWithDownload'

// COMPONENT
import TabNoBorder from '../../../Component/TabNoBorder'
import CustomButton from '../../../Component/CostumeButton/Index'
import CustomText from '../../../Component/CostumeText'
import CardImmunization from '../../../Component/Card/CardImmunization/Index'

// ICON
import ChevronLeft from '../../../image/Icon/ic_chevron_left.png'

// STYLES
import { responsiveHeight } from '../../../Component/Helper/ResponsiveUI'
import color from '../../../../Asset/color'

const ImmunizationHistory = ({ navigation }) => {
  const [tabValue, setTabValue] = useState(0)
  const resultChildhood = [
    {
      historyImmunization: 'Polio',
      doseOne: 'Vaccine Name - 10 days',
      doseTwo: '',
      doseThree: '',
      note: 'Patient had a frequent headache and nauseous, sometimes feeling a sore throat.',
      imgDoctor: 'https://source.unsplash.com/1024x768/?doctor',
      doctorName: 'Dr. Robert Fox',
      spesialis: 'Cardiologist at St. Patrick Hospital',
    },
    {
      historyImmunization: 'TB',
      doseOne: 'Vaccine Name - 1 month',
      doseTwo: 'Vaccine Name - 2 y.o.',
      doseThree: '',
      note: 'Patient had a frequent headache and nauseous, sometimes feeling a sore throat.',
      imgDoctor: 'https://source.unsplash.com/1024x768/?doctor',
      doctorName: 'Dr. Robert Fox',
      spesialis: 'Cardiologist at St. Patrick Hospital',
    },
  ]
  const resultAdult = [
    {
      historyImmunization: 'Covid - 19',
      doseOne: 'Astra Zenneca - 28 y.o.',
      doseTwo: 'Astra Zenneca - 29 y.o.',
      doseThree: 'Astra Zenneca (Booster) - 29 y.o.',
      note: 'Patient had a frequent headache and nauseous, sometimes feeling a sore throat.',
      imgDoctor: 'https://source.unsplash.com/1024x768/?doctor',
      doctorName: 'Dr. Robert Fox',
      spesialis: 'Cardiologist at St. Patrick Hospital',
    },
  ]

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
        Label={'Immunizations'}
        withIcon={true}
        ImageProp={ChevronLeft}
        onPress={() => { navigation.goBack() }}
      />

      <View style={styles.flexCon}>
        <View>

          <TabNoBorder
            tabTitle={['Childhood', 'Adult']}
            valueTab={tabValue}
            onPressTab={(val) => setTabValue(val)}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.margin}>
          {/* CREATE CONDITION IN HERE */}
          {tabValue === 0 ?
            <>
              <View style={{ height: responsiveHeight(16) }} />
              {resultChildhood.length == 0 ?
                <View style={{ width: '90%', alignSelf: 'center' }}>
                  <CustomText
                    label={'No childhood immunizations record available'}
                    fontSizes={16}
                    Font={'Inters'}
                    colors={color.Text_Grey}
                    align={'center'}
                  />
                </View>
                :
                <>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {resultChildhood.map((field, index) => {
                      return (
                        <View key={index} style={styles.ConCard}>
                          <CardImmunization
                            historyImun={field.historyImmunization}
                            labelDose1={field.doseOne}
                            labelDose2={field.doseTwo}
                            labelDose3={field.doseThree}
                            notesDoctor={field.note}
                            ImgDoctor={field.imgDoctor}
                            doctorName={field.doctorName}
                            spesialis={field.spesialis}
                          />
                        </View>
                      )
                    })}
                  </ScrollView>
                  <View style={{ height: responsiveHeight(110) }} />
                </>
              }
            </>
            :
            <>
              <View style={{ height: responsiveHeight(16) }} />
              {resultAdult.length === 0 ?
                <CustomText
                  label={'No adult immunizations record available'}
                  fontSizes={16}
                  Font={'Inters'}
                  colors={color.Text_Grey}
                  align={'center'}
                />
                :
                <>
                  {resultAdult.map((field, index) => {
                    return (
                      <View key={index} style={styles.ConCard}>
                        <CardImmunization
                          historyImun={field.historyImmunization}
                          labelDose1={field.doseOne}
                          labelDose2={field.doseTwo}
                          labelDose3={field.doseThree}
                          notesDoctor={field.note}
                          ImgDoctor={field.imgDoctor}
                          doctorName={field.doctorName}
                          spesialis={field.spesialis}
                        />
                      </View>
                    )
                  })}
                </>
              }
            </>
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  ConCard: {
    marginBottom: responsiveHeight(16),
  },
  flexCon: {
    height: '100%',
  },
  margin: {
    height: '100%',
    marginHorizontal: responsiveHeight(16)
  }
})

export default ImmunizationHistory