import { View, Image, Pressable, TextInput, } from 'react-native'
import React from 'react'
import Ctext from '../CostumeText/index'
import style from './style'
import Arrow from '../../image/Icons/arrow.png'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
import PngSearch from '../../image/Icons/search.png'

///icon
import star from '../../image/Icon/ic_star.png'

const Headers = ({
    Hlabel,
    onPress,
    OptionsImage,
    IconHeight,
    IconWidth,
    onPressOption,
    OnBack,
    SetSearch,
    Star,
    StarRating,
    StarReviews,
}) => {
    return (
        <View style={[style.container, { flexDirection: OptionsImage ? 'row' : null, alignItems: OptionsImage ? 'center' : null, justifyContent: OptionsImage ? 'space-between' : null }]}>
            <View style={style.conFlex}>
                {OnBack == true ?
                    <Pressable onPress={onPress} style={style.conCevron}>
                        <Image source={Arrow} style={style.conImage} />
                    </Pressable>
                    : null
                }
                {!SetSearch ?
                    <View style={[OnBack ? style.conTittle : {}]}>
                        <Ctext
                            fontSizes={responsiveHeight(18)}
                            label={Hlabel}
                            Font={'Inter-Semi'}
                            colors={color.Primary_Black}
                        />
                        {Star ?
                            <>
                                <View style={style.stars}>
                                    <Image source={star} style={style.icon} />
                                    <Ctext
                                        fontSizes={responsiveHeight(10)}
                                        label={StarRating}
                                        Font={'Inters'}
                                        colors={color.Primary_Black}
                                    />
                                    <Ctext
                                        fontSizes={responsiveHeight(10)}
                                        label={` (${StarReviews} reviews)`}
                                        Font={'Inters'}
                                        colors={color.Primary_Black}
                                    />
                                </View>
                            </>
                            : null
                        }
                    </View>
                    :
                    <>
                        <View style={style.conSearch}>
                            <View style={style.conFlexSearch}>
                                <TextInput
                                    placeholder='Search Doctor'
                                    style={style.txtInputStyle}
                                    placeholderTextColor={color.Text_Grey}
                                />
                                <Image source={PngSearch} style={style.conIconSearch} />
                            </View>
                        </View>
                    </>

                }
            </View>
            {OptionsImage ?
                <>
                    <Pressable onPress={onPressOption}>
                        <Image source={OptionsImage} style={{ height: IconHeight ? responsiveHeight(IconHeight) : null, width: IconWidth ? responsiveWidth(IconWidth) : null, resizeMode: 'contain' }} />
                    </Pressable>
                </>
                : null

            }
        </View>
    )
}

export default Headers