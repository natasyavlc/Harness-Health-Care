import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'

// COMPONENT
import TabBar from '../../Component/Tab'
import CustomText from '../../Component/CostumeText'
import EmptyDataWithButton from '../../Component/EmptyDataWithButton'
import CardAppointment from '../../Component/Card/CardAppointment'

// HELPER
import { responsiveHeight } from '../../Component/Helper/ResponsiveUI'
import { dataAppointment } from '../../DummyData/dataAppointment'
import colors from '../../../Asset/color'
import { dataUpcommings } from '../../DummyData/dataUpcommings'

const Index = ({ navigation }) => {

  // STATE
  const [tabValue, setTabValue] = useState(0)
  const [upcoming, setUpcoming] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <CustomText
          label={'My Appointments'}
          fontSizes={18}
          Font={'Inter-Semi'}
          colors={colors.Primary_Black}
        />
        <View style={{ height: responsiveHeight(38) }} />
        <TabBar
          activeOpacity={tabValue}
          titleLeft='Upcoming'
          titleRight='Finished'
          onPressTabLeft={() => setTabValue(0)}
          onPressTabRight={() => setTabValue(1)}
        />
        {
          tabValue === 0 ?
            upcoming ?
              <>
                <View style={{ height: responsiveHeight(24) }} />
                {dataUpcommings.map((data, I) => {
                  return (
                    <View key={I}>
                      {data?.today ?
                        <>
                          <View style={styles.conText}>
                            <CustomText
                              label={'Today'}
                              fontSizes={12}
                              Font={'Inter-Semi'}
                              colors={colors.Text_Grey}
                            />
                          </View>
                        </> : <></>
                      }
                      <CardAppointment
                        image={data.image || data.today[0].image}
                        name={data.name || data.today[0].name}
                        specialist={data.specialist || data.today[0].specialist}
                        reviewer={data.reviewer || data.today[0].reviewer}
                        onPress={() => navigation.navigate("DetailAppointment", { name: data.name, image: data.image })}
                      />
                    </View>
                  )
                })}
              </>
              :
              <EmptyDataWithButton
                message={'You don’t have any appoinment yet.'}
                buttonText={'Find Doctors'}
                onPress={() => navigation.navigate('DoctorList', { prevPage: 'Appointment' })}
              />
            :
            <>
              <View style={{ height: responsiveHeight(24) }} />
              {dataAppointment.map((data, I) => {
                return (
                  <View key={I}>
                    {data?.before3 ?
                      <>
                        <View style={styles.conText}>
                          <CustomText
                            label={'3 Days ago'}
                            fontSizes={responsiveHeight(12)}
                            Font={'Inter-Semi'}
                            colors={colors.Text_Grey}
                          />
                        </View>
                      </> : <></>
                    }
                    <CardAppointment
                      image={data.image}
                      name={data.name}
                      specialist={data.specialist}
                      reviewer={data.reviewer}
                      onPress={() => navigation.navigate("SessionFinished", { name: data.name, image: data.image })}
                    />
                  </View>
                )
              })}
            </>
        }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColors,
    flex: 1
  },
  content: {
    padding: responsiveHeight(16)
  },
  conText: {
    marginBottom: responsiveHeight(16)
  }
})

export default Index