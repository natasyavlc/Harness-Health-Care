import { Image, StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI';
import styles from './style';

// ICON
import ArrowLeft from '../../image/Icons/arrow.png'
import Download from '../../image/Icon/ic_download.png'

const HeaderWithStatus = ({
  title,
  day,
  dateTime,
  onBack,
  isStatus,
  titleStatus,
}) => {
  return (
    <View style={[styles.container, {  }]}>
      <Pressable
          onPress={onBack}
      >
          <Image
              source={ArrowLeft}
              style={[styles.icon,{}]}
              resizeMode='cover'
          />
      </Pressable>
      <View>
        <View style={styles.rowTitle}>
          <Text style={styles.headTitle}>{title}</Text>
          {isStatus ?
            <View style={styles.boxStatus}>
              <Text style={styles.textTitleStatus}>{titleStatus}</Text>
            </View>
          :
            <></>
          }
        </View>
          <Text style={styles.subTitle}>{day}, {dateTime}</Text>
      </View>
     
  </View>
  )
}

export default HeaderWithStatus;