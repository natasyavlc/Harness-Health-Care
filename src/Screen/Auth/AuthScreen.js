import { View, SafeAreaView, StyleSheet, StatusBar, BackHandler } from 'react-native';
import React, { useEffect } from 'react';
import Logos from '../../Component/Logo/Logos';
import Ctext from '../../Component/CostumeText'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary';
import colors from '../../../Asset/color';
import { responsiveHeight } from '../../Component/Helper/ResponsiveUI';
const AuthScreen = ({ navigation }) => {
  const onBackPress = () => {
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
      <View style={style.containerNull} />
      <View style={style.ConLogo}>
        <Logos
          logoColor={'blue'}
          height={94}
          width={94}
          mode={'contain'}
        />
      </View>
      <View style={style.ConWelcome}>
        <Ctext
          label={'Welcome !'}
          fontSizes={responsiveHeight(16)}
          Font={'InterRegular'}
          colors={colors.Primary_Black}
        />
      </View>
      <View style={style.conButton}>
        <ButtonPrimary
          label={'Sign In'}
          colors={colors.Primary}
          Font={'InterRegular'}
          fontSizes={responsiveHeight(14)}
          bgColor={colors.bgColors}
          borderColor={colors.Primary}
          borderWidth={true}
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
      <View style={style.conButton}>
        <ButtonPrimary
          label={'Sign Up'}
          colors={colors.Primary_White}
          Font={'InterRegular'}
          fontSizes={responsiveHeight(14)}
          bgColor={colors.Primary}
          borderColor={colors.Primary}
          // borderWidth={true}
          borderWidth={false}
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
      <View style={style.conGuest}>
        <ButtonPrimary
          label={'Sign In as Guest'}
          colors={colors.Primary}
          Font={'InterRegular'}
          fontSizes={responsiveHeight(14)}
          borderColor={colors.Primary}
          // borderWidth={true}
          borderWidth={false}
        />
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColors
  },
  containerNull: {
    flex: 0.3
  },
  ConLogo: {
    flex: 0.5,
  },
  ConWelcome: {
    flex: 0.2,
    alignItems: 'center'
  },
  conButton: {
    flex: 0.1,
  },
  conGuest: {
    flex: 0.1,
  }
})

export default AuthScreen