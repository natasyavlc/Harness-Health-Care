import { Image, Text, Pressable, View } from 'react-native'
import React from 'react'

//Icon
import IcDownload from '../../../image/Icons/ic_download.png'
import { styles } from './styles'
const CardWithDownload = ({
    title,
    handleDownload = () => {},
}) => {
  return (
    <View style={styles.Container}>
        <View style={styles.rowCard}>
            <View>
                <Text style={styles.textTitle}>{title}</Text>
                <View style={styles.underline}/>
            </View>
            <Pressable onPress={handleDownload}>
                <Image source={IcDownload} style={styles.img}/>
            </Pressable>
        </View>
    </View>
  )
}

export default CardWithDownload