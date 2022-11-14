import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CardPatient from '../../Component/Card/CardPatient/Index'
import Headers from '../../Component/Headers'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import CustomeText from '../../Component/CostumeText'
import color from '../../../Asset/color'
import icAdd from '../../image/Icons/ic_add.png'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'
const Index = ({ navigation }) => {
  const [resultPatients, setResultPatients] = useState([])
  const dataPatients = [
    {
      img: 'https://source.unsplash.com/1024x768/?doctor',
      name: 'Guy Hawkins',
      age: '57',
      gender: 'Male',
      parent: 'Father',
      check: true
    },
    {
      img: 'https://source.unsplash.com/1024x768/?patient',
      name: 'Jenny Wilson',
      age: '30',
      gender: 'Female',
      parent: 'Mother',
      check: false
    },
    {
      img: 'https://source.unsplash.com/1024x768/?doctor',
      name: 'Albert Flores',
      age: '30',
      gender: 'Male',
      parent: 'Father',
      check: false
    },
    {
      img: 'https://source.unsplash.com/1024x768/?doctor',
      name: 'Kristin Watson',
      age: '30',
      gender: 'Female',
      parent: 'Mother',
      check: false
    }
  ]
  const handleAddPatients = () => {
    navigation.navigate('RegisterNewPatient')
  }
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Headers
        Hlabel={'My Patients'}
        onPress={() => {
          navigation.goBack()
        }}
      />
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

      {dataPatients.length !== 0 ?
        <>
          <View style={styles.buttonRegist}>
            <ButtonPrimary
              label={'Register New Patient'}
              ImageProp={icAdd}
              borderWidth={responsiveHeight(1)}
              ImageHeight={responsiveHeight(14)}
              ImageWidth={responsiveHeight(14)}
              marginImg={responsiveHeight(13)}
              fontSizes={responsiveHeight(14)}
              Font={'InterRegular'}
              colors={color.Primary}
              bgColor={'#FFFFFF'}
              borderColor={color.Primary}
              margin={true}
              defaultRight={responsiveHeight(34)}
              defaultLeft={responsiveHeight(34)}
              defaultVertical={responsiveHeight(16)}
              onPress={handleAddPatients}
            />
          </View>
          {dataPatients.map((field, index) => {
            return (
              <View key={index} style={styles.conCard}>
                <CardPatient
                  isParent={true}
                  onChecked={field.check}
                  borderWidth={responsiveHeight(1)}
                  label={field.name}
                  age={field.age}
                  parent={field.parent}
                  imageCard={field.img}
                  isButton={true}
                  isAge={true}
                  onPressLink={()=> navigation.navigate('MedicalRecords')}
                  onPressButton={() => navigation.navigate('BookStep1', { prevPage: 'Patients' })}
                />
              </View>
            )
          })}
        </>
        :
        <View style={styles.conEmpty}>
          <CustomeText
            Font={'Inters'}
            fontSizes={responsiveHeight(16)}
            label={'You don’t have any registered patient member yet.'}
            lineHeights={responsiveHeight(24.4)}
            align={'center'}
            colors={color.GT_Grey}
          />
          <View style={styles.conButton}>
            <ButtonPrimary
              label={'Register New Patient'}
              ImageProp={icAdd}
              borderWidth={responsiveHeight(1)}
              ImageHeight={responsiveHeight(14)}
              ImageWidth={responsiveHeight(14)}
              marginImg={responsiveHeight(13)}
              fontSizes={responsiveHeight(14)}
              Font={'InterRegular'}
              colors={color.Primary}
              bgColor={'#FFFFFF'}
              borderColor={color.Primary}
              margin={true}
              defaultRight={responsiveHeight(34)}
              defaultLeft={responsiveHeight(34)}
              defaultVertical={responsiveHeight(16)}
              onPress={handleAddPatients}
            />
          </View>
        </View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  conEmpty: {
    marginTop: responsiveHeight(301),
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: responsiveWidth(41)
  },
  conButton: {
    marginTop: responsiveHeight(16)
  },
  conCard: {
    marginBottom: responsiveHeight(16)
  },
  buttonRegist: {
    marginHorizontal: responsiveWidth(16),
    marginBottom: responsiveHeight(24)
  }
})
export default Index