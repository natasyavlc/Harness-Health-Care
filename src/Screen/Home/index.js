import { View, SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'
import TopTab from '../../Component/UserTop/Index'
import DummyUser from '../../DummyData'
import TextInputSearch from '../../Component/SearchComponent/Index'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import CustomeText from '../../Component/CostumeText'
import color from '../../../Asset/color'
import { dataPatients } from '../../DummyData/dataPatients'
import CardPatient from '../../Component/Card/CardPatient/Index'
import { doctorComming } from '../../DummyData/doctorComming'
import CardVitals from '../../Component/VitalCards/Index'
import { dataVitals } from '../../DummyData/dataVitals'
import CardSpecialist from '../../Component/Card/CardSpecialist/Index'
import ModalVital from '../../Component/ModalVital/Index'
import CostumeCardPAtient from '../../Component/Card/CardCustomePatient/Index'
//icons
import eyeSpecialist from '../../image/Icons/eyeSpecialist.png'
import dentalSpecialist from '../../image/Icons/dentalSpecialist.png'
import heartSpecialist from '../../image/Icons/heartSpecialist.png'

const dataPatients1 = [
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

const Home = ({ navigation }) => {
  const [notif, setNotif] = useState(false);
  const [changeText, setChangeText] = useState('')
  const [patient, setPatient] = useState(true)
  const [upcomming, setUpcomming] = useState(true)
  const profileArr = DummyUser.filter(p => p.id);
  const [isVisible, setIsVisible] = useState(false)
  const [onchangeVitals, setOnchangeVitals] = useState('')

  const handlerModal = () => {
    try {
      setIsVisible(!isVisible)
    } catch {
      console.log('error');
    }
  }
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <TopTab data={profileArr[0]} onPress={() => setNotif(!notif)} notif={notif} />
      <View style={style.txtInputCon}>
        <TextInputSearch
          placeholder={'Search Doctor'}
          onChangeText={e => setChangeText(e)}
        />
      </View>
      <ScrollView style={style.ChildCon} showsVerticalScrollIndicator={false} >
        {upcomming ?
          <>
            <View style={style.TextHeader}>
              <View style={style.patientCon}>
                <CustomeText
                  Font={'Inter-Semi'}
                  fontSizes={responsiveHeight(16)}
                  label={'Upcoming Appoinments'}
                  colors={color.Primary_Black}
                />
              </View>
              <View style={style.Addnew}>
                <ButtonPrimary
                  label={'See All'}
                  colors={color.Primary}
                  Font={'Inter-semi'}
                  fontSizes={responsiveHeight(14)}
                  borderWidth={false}
                  disable={false}
                  margin={true}

                />
              </View>
            </View>
            <View>
              {doctorComming.map((field, index) => {
                return (
                  <View key={index} style={style.conCard}>
                    <CardPatient
                      isDoctor={true}
                      isParent={false}
                      label={field.name}
                      lblButton='View Detail'
                      imageCard={field.img}
                      Times={field.time}
                      isButton={true}
                      isAge={false}
                      isShadow={true}
                    />
                  </View>
                )
              })}
            </View>
          </>
          : null
        }
        <View style={style.TextHeader}>
          <View style={style.patientCon}>
            <CustomeText
              Font={'Inter-Semi'}
              fontSizes={responsiveHeight(16)}
              label={'My Patient'}
              colors={color.Primary_Black}
            />
            <View style={[style.Addnew, { marginLeft: responsiveWidth(12) }]}>
              <ButtonPrimary
                label={'+ Add New Patient'}
                colors={color.Primary}
                Font={'Inter-Semi'}
                fontSizes={responsiveHeight(14)}
                borderWidth={false}
                disable={false}
                margin={true}

              />
            </View>
          </View>
          {patient ?
            <View style={style.Addnew}>
              <ButtonPrimary
                label={'See All'}
                colors={color.Primary}
                Font={'Inter-semi'}
                fontSizes={responsiveHeight(14)}
                borderWidth={false}
                disable={false}
                margin={true}
              />
            </View>
            : null
          }
        </View>
        <View>
          {patient ?
            <>
              <ScrollView style={{ flexDirection: 'row', backgroundColor: 'white' }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {dataPatients1.map((field, index) => {
                  return (
                    <View key={index} style={style.conCard2}>
                      <CostumeCardPAtient
                        isParent={true}
                        borderWidth={1}
                        onChacked={field.check}
                        label={field.name}
                        age={field.age}
                        parent={field.parent}
                        imagePatient={field.img}
                        isButton={true}
                        isAge={true}
                        navigation={navigation}
                      />
                    </View>
                  )
                })}
              </ScrollView>
            </>
            :
            <>
              {dataPatients.map((field, index) => {
                return (
                  <View key={index} style={style.conCard}>
                    <CardPatient
                      isParent={false}
                      label={field.name}
                      lblButton='Appoitment'
                      imageCard={field.img}
                      isButton={true}
                      isAge={true}
                      isShadow={true}
                      onPressButton={() => navigation.navigate('BookStep1', { prevPage: 'HomePage' })}
                    />
                  </View>
                )
              })}
            </>
          }
        </View>
        <CustomeText
          Font={'Inter-Semi'}
          fontSizes={responsiveHeight(16)}
          label={'Vitals'}
          colors={color.Primary_Black}
        />
        <View style={style.cardVital} >
          <CardVitals data={dataVitals} onPress={() => setIsVisible(!isVisible)} />
        </View>
        <View style={style.TextHeader}>
          <View style={style.patientCon}>
            <CustomeText
              Font={'Inter-Semi'}
              fontSizes={responsiveHeight(16)}
              label={'Specialist Doctor'}
              colors={color.Primary_Black}
            />
          </View>
          <View style={style.Addnew}>
            <ButtonPrimary
              label={'See All'}
              colors={color.Primary}
              Font={'Inter-semi'}
              fontSizes={responsiveHeight(14)}
              borderWidth={false}
              disable={false}
              margin={true}
              onPress={() => navigation.navigate('DoctorList')}
            />
          </View>
        </View>
        <View style={style.conSpecialistCard}>
          <CardSpecialist
            amountDoctor={259}
            Specialist={'Dental'}
            bgColor={color.Pruple}
            ImageProps={dentalSpecialist}
          />
          <CardSpecialist
            amountDoctor={259}
            Specialist={'Cardio'}
            bgColor={color.midGreen}
            ImageProps={heartSpecialist}
          />
          <CardSpecialist
            ImageProps={eyeSpecialist}
            amountDoctor={259}
            Specialist={'Eye'}
            bgColor={color.GreenGrey}
          />
        </View>
      </ScrollView>
      <View>
        <ModalVital visibles={isVisible} onPress={handlerModal} onChange={e => setOnchangeVitals(e)} />
      </View>
    </SafeAreaView>
  )
}

export default Home

const style = StyleSheet.create({
  container: {
    backgroundColor: color.bgColors,
    flex: 1
  },
  txtInputCon: {
    marginTop: responsiveHeight(16)
  },
  ChildCon: {
    marginTop: responsiveHeight(24),
    marginHorizontal: responsiveWidth(16)
  },
  Addnew: {
    alignItems: 'flex-start',
  },
  patientCon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  TextHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(16)
  },
  conCard: {
    marginBottom: responsiveHeight(24),
  },
  conCard2: {
    marginBottom: responsiveHeight(24),
    marginRight: responsiveWidth(16),
  },
  cardVital: {
    marginTop: responsiveHeight(24),
    marginBottom: responsiveHeight(24),
    alignItems: 'center'
  },
  conSpecialistCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

})