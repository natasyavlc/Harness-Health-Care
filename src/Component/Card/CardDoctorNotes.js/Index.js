import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'

const CardDoctorNotes = ({
  title,
  notes
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textNotes}>{notes}</Text>
      </View>
    </View>
  )
}

export default CardDoctorNotes