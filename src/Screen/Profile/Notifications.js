import { View, SafeAreaView, StyleSheet, StatusBar, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import Headers from '../../Component/Headers'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import SwitchButton from '../../Component/SwitchButton/Index'

const Notifications = ({ navigation }) => {
  const [isAllow, setIsAllow] = useState(false)
  const [isBanner, setIsBanner] = useState(false)
  const [isSound, setIsSound] = useState(false)
  const [isChat, setIsChat] = useState(false)
  const [isApp, setIsApp] = useState(false)

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
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={style.conHeaders}>
        <Headers
          Hlabel={'Notifications'}
          OnBack={true}
          onPress={() => { navigation.goBack() }}
        />
      </View>
      <View style={style.conSwitch}>
        <SwitchButton
          onChangeValue={() => { setIsAllow(!isAllow) }}
          value={isAllow}
          label={'Allow Notifications'} />
        <SwitchButton onChangeValue={() => { setIsBanner(!isBanner) }}
          value={isBanner}
          label={'Banner Notifications'} />
        <SwitchButton
          onChangeValue={() => { setIsSound(!isSound) }}
          value={isSound}
          label={'Sound Notifications'} />
      </View>
      <SwitchButton
        onChangeValue={() => { setIsChat(!isChat) }}
        value={isChat}
        label={'Chat'} />
      <SwitchButton
        onChangeValue={() => { setIsApp(!isApp) }}
        value={isApp}
        label={'App Update'} />
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  container: {
    backgroundColor: color.bgColors,
    flex: 1,
  },
  conSwitch: { marginBottom: responsiveHeight(24) }
})

export default Notifications