import { Keyboard, SafeAreaView, ScrollView, StatusBar, StyleSheet, Pressable, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Headers from '../../Component/Headers'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import CustomeText from '../../Component/CostumeText'
import color from '../../../Asset/color'
import { formaterEmail, formaterText } from '../../Utils/FormaterText'
import ModalToast from '../../Component/ModalToast/index'
import OTP from '../../Component/OTP/OTP'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'
const InputCode = ({ navigation, route }) => {
  const { value, isFormat } = route.params
  const [resultValue, setResultValue] = useState(false);
  const [isError, setIsError] = useState(false)
  const [pin1, setPin1] = useState('')
  const [pin2, setPin2] = useState('')
  const [pin3, setPin3] = useState('')
  const [pin4, setPin4] = useState('')
  const [pin5, setPin5] = useState('')
  const [pin6, setPin6] = useState('')
  const pin1Ref = useRef(null)
  const pin2Ref = useRef(null)
  const pin3Ref = useRef(null)
  const pin4Ref = useRef(null)
  const pin5Ref = useRef(null)
  const pin6Ref = useRef(null)
  const [counter, setCounter] = useState(120);
  const [keyboardStatus, setKeyboardStatus] = useState(false)
  const [data, setData] = useState(123456)

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [keyboardStatus])

  const buttonDisable = () => {
    const x = pin1 && pin2 && pin3 && pin4 && pin5 && pin6;
    return !x;
  }

  useEffect(() => {
    if (counter == 0) {
      setCounter(0)
    } else {
      const interval = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  });

  useEffect(() => {
    let myFunc = num => Number(num)
    var ToarrayData = Array.from(String(data), myFunc);
    var ValueOfPin = [
      pin1,
      pin2,
      pin3,
      pin4,
      pin5,
      pin6,
    ]
    const arrOfNum = ValueOfPin.map(str => {
      return Number(str);
    });
    function isEqual(a, b) {
      const isi = a.join() == b.join();
      if (isi == true) {
        setResultValue(true)
      } else if (isi == false) {
        setResultValue(false)
      }
      return true
    }
    isEqual(ToarrayData, arrOfNum);
  }, [pin1, pin2, pin3, pin4, pin5, pin6])
  useEffect(() => {
    setIsError(false)
  }, [pin1])


  const handleButtonVerify = () => {
    if (resultValue == false) {
      setIsError(true)
    } else {
      setIsError(false)
      navigation.push('ResetPassword')
      setPin1('')
      setPin2('')
      setPin3('')
      setPin4('')
      setPin5('')
      setPin6('')
      setCounter(0)
    }

  }
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Headers
        Hlabel={'Forgot Password'}
        onPress={() => {
          navigation.goBack()
        }}
        OnBack={true}
      />
      <View style={{ flex: 1 }}>
        <View style={{ height: responsiveHeight(122) }}>
          {isError ?
            <View style={styles.conAlert}>
              <ModalToast
                show={isError}
                label={"Invalid verification code"}
                isFocus={isError}
              />
            </View>
            : <></>
          }
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <CustomeText
            Font={'Inters'}
            fontSizes={responsiveHeight(16)}
            label={'A verification code has been sent to:'}
            lineHeights={responsiveHeight(24.4)}
            align={'center'}
            colors={color.GT_Grey}
          />
          <CustomeText
            Font={'Inter-Semi'}
            fontSizes={responsiveHeight(16)}
            label={isFormat == 1 ? formaterText(value) : formaterEmail(value)}
            lineHeights={responsiveHeight(24.4)}
            align={'center'}
            colors={color.GT_Grey}
          />
          <View style={styles.containerOTP}>
            <OTP
              pinRef={pin1Ref}
              isError={isError}
              keyboardType={'number-pad'}
              maxLength={1}
              onChange={(pin1) => {
                setPin1(pin1)
                if (pin1 != '') {
                  pin2Ref.current.focus()
                }
              }}
              value={pin1}
            />
            <OTP
              pinRef={pin2Ref}
              isError={isError}
              keyboardType={'number-pad'}
              maxLength={1}
              onChange={(pin2) => {
                setPin2(pin2)
                if (pin2 != '') {
                  pin3Ref.current.focus()
                } else if (pin6 == '' && pin5 == '' && pin4 == '' && pin3 == '' && pin2 == '') {
                  pin1Ref.current.focus()
                }
              }}
              value={pin2}
            />
            <OTP
              pinRef={pin3Ref}
              isError={isError}
              keyboardType={'number-pad'}
              maxLength={1}
              onChange={(pin3) => {
                setPin3(pin3)
                if (pin3 != '') {
                  pin4Ref.current.focus()
                } else if (pin6 == '' && pin5 == '' && pin4 == '' && pin3 == '') {
                  pin2Ref.current.focus()
                }
              }}
              value={pin3}
            />
            <OTP
              pinRef={pin4Ref}
              isError={isError}
              keyboardType={'number-pad'}
              maxLength={1}
              onChange={(pin4) => {
                setPin4(pin4)
                if (pin4 != '') {
                  pin5Ref.current.focus()
                } else if (pin6 == '' && pin5 == '' && pin4 == '') {
                  pin3Ref.current.focus()
                }
              }}
              value={pin4}
            />
            <OTP
              pinRef={pin5Ref}
              isError={isError}
              keyboardType={'number-pad'}
              maxLength={1}
              onChange={(pin5) => {
                setPin5(pin5)
                if (pin5 != '') {
                  pin6Ref.current.focus()
                } else if (pin6 == '' && pin5 == '') {
                  pin4Ref.current.focus()
                }
              }}
              value={pin5}
            />
            <OTP
              pinRef={pin6Ref}
              isError={isError}
              keyboardType={'number-pad'}
              maxLength={1}
              onChange={(pin6) => {
                setPin6(pin6)
                if (pin6 == '') {
                  pin5Ref.current.focus()
                }
              }}
              value={pin6}
            />

          </View>
          <View style={styles.conCustomeText}>
            <CustomeText
              label={'Resend code in '}
              Font={'Inters'}
              fontSizes={responsiveHeight(16)}
              lineHeights={responsiveHeight(24.4)}
              align={'center'}
              colors={color.GT_Grey}
            />
            <CustomeText
              label={counter}
              Font={'Inters'}
              fontSizes={responsiveHeight(16)}
              lineHeights={responsiveHeight(24.4)}
              align={'center'}
              colors={color.Primary}
            />
            <CustomeText
              label={' second'}
              Font={'Inters'}
              fontSizes={responsiveHeight(16)}
              lineHeights={responsiveHeight(24.4)}
              align={'center'}
              colors={color.GT_Grey}
            />
          </View>
          <Pressable style={styles.conResend} onPress={() => setCounter(120)}>
            <CustomeText
              label={'Resend Code'}
              Font={'Inters'}
              fontSizes={responsiveHeight(14)}
              lineHeights={responsiveHeight(19.6)}
              align={'center'}
              colors={color.Primary}
            />
          </Pressable>
        </ScrollView>
        <View
          style={keyboardStatus === true ? { marginBottom: Platform.OS === 'ios' ? responsiveHeight(300) : null, bottom: responsiveHeight(15) } : { bottom: responsiveHeight(15) }}>
          <ButtonPrimary
            label={'Verify'}
            colors={color.Primary_White}
            Font={'InterRegular'}
            fontSizes={responsiveHeight(14)}
            bgColor={color.Primary}
            borderColor={color.Primary}
            borderWidth={true}
            disable={buttonDisable()}
            onPress={handleButtonVerify}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default InputCode

const styles = StyleSheet.create({
  conAlert: {
    padding: Platform.OS == 'ios' ? responsiveHeight(6) : responsiveHeight(2),
    paddingHorizontal: responsiveWidth(16),
    height: responsiveHeight(56)
  },
  containerOTP: {
    marginTop: responsiveHeight(32),
    flexDirection: 'row',
    marginHorizontal: responsiveHeight(26)
  },
  conCustomeText: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: responsiveHeight(56)
  },
  conResend: {
    marginTop: responsiveHeight(20)
  }
})