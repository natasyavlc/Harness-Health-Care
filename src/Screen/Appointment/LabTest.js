import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

// COMPONENT
import Headers from '../../Component/Headers'
import { responsiveHeight } from '../../Component/Helper/ResponsiveUI'
import ListFile from '../../Component/List/ListFile'

// DUMMY DATA
const listFile = [
  { id: 2416, name: 'Anti_HVC_test.pdf' },
  { id: 3782, name: 'Erythrocyte_sedimentation_rate_(ESR).pdf' },
  { id: 8962, name: 'C-reactive_protein_(CRP).pdf' },
]

const LabTest = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Headers
        Hlabel={'Recommended Lab Test'}
        OnBack
        onPress={() => {
          navigation.goBack()
        }} />

      <View style={styles.content}>
        {listFile.map((data, index) => <ListFile key={index} fileName={data.name} />)}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  content: {
    marginHorizontal: responsiveHeight(16)
  }
})

export default LabTest