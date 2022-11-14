import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../../Component/Headers'
import CardWithDownload from '../../Component/Card/CardWithDownload/Index'
import { responsiveHeight } from '../../Component/Helper/ResponsiveUI'

const dataRecomendedLab = [
  {
    title: 'Anti_HVC_test.pdf'
  },
  {
    title: 'Erythrocyte_sedimentation_rate_(ESR).pdf'
  },
  {
    title: 'C-reactive_protein_(CRP).pdf'
  },

]
const FinishedRecommendedLabTests = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Headers
        Hlabel={'Recommended Lab Test'}
        onPress={() => {
          navigation.goBack()
        }}
        OnBack={true}
      />
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView style={styles.container}>
        {
          dataRecomendedLab.length > 0 ?
            dataRecomendedLab.map((data, index) => {
              return (
                <View style={styles.conCard}
                  key={index}
                >
                  <CardWithDownload
                    title={data.title}
                  />
                </View>
              )
            })
            :
            <View style={{ marginTop: '10%' }}>
              <CustomText
                label={'Recommended Lab Test'}
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

export default FinishedRecommendedLabTests

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: responsiveHeight(16),
    marginTop: responsiveHeight(16)
  },
  conCard: {
    paddingBottom: responsiveHeight(2)
  }
})