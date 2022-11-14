import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Headers from '../../Component/Headers/index'
import CustomeText from '../../Component/CostumeText'
import { responsiveHeight } from '../../Component/Helper/ResponsiveUI'

// Icon
import icMessage from '../../image/Icons/ic_message.png'
import icEmail from '../../image/Icons/ic_email.png'
import icWa from '../../image/Icons/ic_wa.png'

// Component
import CardForgotPassword from '../../Component/Card/CardForgotPassword/Index';
import color from '../../../Asset/color'
import { formaterEmail, formaterText } from '../../Utils/FormaterText'

const ForgotPassword = ({ navigation }) => {
  const [isClickMessage, setIsClickMessage] = useState(false)
  const [isClickWhatsapp, setIsClickWhatsapp] = useState(false)
  const [isClickEmail, setIsClickEmail] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('0813333333333')
  const [email, setEmail] = useState('testing@example.com')

  const handlerMessage = () => {
    navigation.navigate('InputCode', {
      value: phoneNumber,
      isFormat: 1
    })
    setIsClickMessage(true)
    setIsClickWhatsapp(false)
    setIsClickEmail(false)
  }
  const handlerWhatsapp = () => {
    navigation.navigate('InputCode', {
      value: phoneNumber,
      isFormat: 1
    })
    setIsClickMessage(false)
    setIsClickWhatsapp(true)
    setIsClickEmail(false)
  }
  const handlerEmail = () => {
    navigation.navigate('InputCode', {
      value: email,
      isFormat: 2
    })
    setIsClickMessage(false)
    setIsClickWhatsapp(false)
    setIsClickEmail(true)
  }
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Headers
        Hlabel={'Forgot Password'}
        onPress={() => {
          navigation.goBack()
        }}
        OnBack={true}
      />
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={{ marginTop: responsiveHeight(38), flex: 1 }}>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <View style={{ marginHorizontal: responsiveHeight(15) }}>
            <CustomeText
              Font={'Inters'}
              fontSizes={responsiveHeight(16)}
              label={'Select from one of the methods below to get your verification code.'}
              lineHeights={responsiveHeight(24.4)}
              align={'center'}
              colors={color.GT_Grey}
            />
          </View>
          <View style={{ marginTop: responsiveHeight(24) }}>
            <View style={{ marginBottom: responsiveHeight(16) }}>
              <CardForgotPassword
                icon={icMessage}
                title={'Send text message'}
                value={formaterText(phoneNumber)}
                onClick={isClickMessage}
                onPress={handlerMessage}
              />
            </View>
            <View style={{ marginBottom: responsiveHeight(16) }}>
              <CardForgotPassword
                icon={icWa}
                title={'Send WhatsApp message'}
                value={formaterText(phoneNumber)}
                onClick={isClickWhatsapp}
                onPress={handlerWhatsapp}
              />
            </View>
            <View style={{ marginBottom: responsiveHeight(16) }}>
              <CardForgotPassword
                icon={icEmail}
                title={'Send email'}
                value={formaterEmail(email)}
                onClick={isClickEmail}
                onPress={handlerEmail}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ForgotPassword