import { View, Text, Image, } from 'react-native'
import React from 'react'
import Ctext from '../CostumeText/index'
import style from './style'
import Warning from '../../image/Icons/alert-circle.png'
import WarningYellow from '../../image/Icons/alert-yellow.png'

import colors from '../../../Asset/color'
import { responsiveHeight } from '../Helper/ResponsiveUI'

const index = ({
  show,
  label,
  isFocus,
  bgColor,
  yellow,
}) => {
  return (
    <View style={style.BigCon(yellow)}>
      {show == true && isFocus ?
        <View style={style.container(yellow)}>
          <Image source={yellow ? WarningYellow : Warning} style={style.conImage} />
          <View style={style.containText}>
            <Ctext
              label={label}
              colors={yellow ? colors.Primary_Black : colors.Primary_Red}
              fontSizes={responsiveHeight(14)}
              Font={'Inters'}
            />
          </View>
        </View> : null
      }
    </View>
  )
}

export default index