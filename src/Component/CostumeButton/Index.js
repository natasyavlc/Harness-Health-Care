import { View, Pressable, Image } from 'react-native'
import React from 'react'
import Ctext from '../../Component/CostumeText/index'
import style from './style'
import { responsiveHeight } from '../Helper/ResponsiveUI'

const Index = ({
    Label,
    withIcon = true,
    ImageProp,
    ChevronImg,
    onPress,
    Chevron,
}) => {
  return (
        <View style={style.container}>
                <Pressable onPress={onPress} style={style.conButton}>
                    <View style={style.conFlex}>
                        { withIcon && <Image source={ImageProp} style={style.conImage} />}
                        <Ctext
                            label={Label}
                            fontSizes={responsiveHeight(15)}
                            Font={'Inters'}
                            colors={'black'}
                        />
                    </View>
                    {Chevron?
                        <>
                            <Image source={ChevronImg} style={style.conChev} />
                        </>
                        :null
                    }
                </Pressable>
        </View>
  )
}

export default Index