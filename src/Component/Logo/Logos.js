import { View, Text, Image, } from 'react-native'
import React from 'react'
import Harnes from '../../image/Icons/Harness.png';
import Harnes_White from '../../image/Icons/HarnessWhite.png';
import Styles from './style'
import CText from '../CostumeText'
import Colors from '../../../Asset/color';
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI';
const Logos = ({
  logoColor,
  height,
  width,
  mode,
  fonts,
}) => {
  const ChangeLogo = (value) => {
    if (value == 'white') {
      return Harnes_White
    } else if (value == 'blue') {
      return Harnes
    }
  }
  const ChangeColors = (value) => {
    if (value == 'white') {
      return Colors.bgColors
    } else if (value == 'blue') {
      return Colors.Primary
    }
  }
  return (
    <View style={Styles.container}>
      <View>
        <Image source={ChangeLogo(logoColor)} style={{ height: responsiveHeight(height), width: responsiveWidth(width), resizeMode: mode }} />
      </View>
      <View>
        <CText
          label={'Harness Health Care'}
          fontSizes={fonts ? fonts : responsiveHeight(24)}
          font={'JakartaBold'}
          colors={ChangeColors(logoColor)}
        />
      </View>
    </View>
  )
}

export default Logos