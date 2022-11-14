import { View, ActivityIndicator, SafeAreaView } from 'react-native'
import React, { useEffect,  } from 'react'
import style from './style'
import Logos from '../../Component/Logo/Logos'
import { responsiveHeight } from '../../Component/Helper/ResponsiveUI'
import color from '../../../Asset/color'
const Splash = ({navigation}) => {

useEffect(() => {
    setTimeout(() => {
        navigation.navigate('GettingStart');
    }, 2000);
}, [])


  return (
    <SafeAreaView style={style.container}>
        <View style={style.conNull} />
        <View style={style.conLogo}>     
            <Logos
                logoColor={'white'}
                height={94}
                width={94}
                mode={'contain'}
            />
        </View>
        <View style={style.conload}>
            <ActivityIndicator 
                size={responsiveHeight(60)} 
                color={color.bgColors} 
                animating={true} />
        </View>
    </SafeAreaView>
  )
}

export default Splash