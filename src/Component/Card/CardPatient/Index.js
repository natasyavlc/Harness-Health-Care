import { Image, Platform, Pressable, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../../Helper/ResponsiveUI'
import color from '../../../../Asset/color'
import CustomeText from '../../../Component/CostumeText/index'
import ButtonPrimary from '../../Buttons/ButtonPrimary'
import icPlus from '../../../image/Icons/ic_plus.png'
import icCentang from '../../../image/Icons/ic_centang.png'
import { styles } from './style'
import { limitString } from '../../../Utils/FormaterText'
import IcLink from '../../../image/Icons/ic_link.png'
const Index = ({
    onChecked,
    label = '',
    isParent,
    parent = '',
    lblButtonChecked = 'Booked',
    lblButton = 'Book',
    icButtonChecked = icCentang,
    icButton = icPlus,
    widthImg = responsiveHeight(72),
    heightImg = responsiveHeight(72),
    resizeModeImg,
    isShadow,
    borderWidth,
    imageCard = 'https://source.unsplash.com/1024x768/?doctor',
    age = '57',
    gender = 'Male',
    shadowRadius = responsiveHeight(20),
    shadowOpacity = responsiveHeight(0.1),
    widthOffset = responsiveHeight(2),
    heightOffset = responsiveHeight(20),
    elevation = responsiveHeight(2),
    colorButton = color.Primary_White,
    bgColor = color.Primary,
    onPressChecked = () => { },
    onPressButton = () => { },
    isButton,
    isAge,
    city,
    isDoctor,
    Times,
    onPressLink = () => { },
}) => {
    return (
        <View style={[styles.container, {
            shadowRadius: isShadow ? shadowRadius : null,
            shadowOpacity: isShadow ? shadowOpacity : null,
            shadowOffset: { width: widthOffset, height: heightOffset },
            elevation: Platform.OS == 'android' ? elevation : null,
            borderWidth: borderWidth
        }]}>
            <View style={styles.body}>
                <View style={styles.conImg}>
                    <Image source={{ uri: imageCard }}
                        style={[styles.img, { width: widthImg, height: heightImg, resizeMode: resizeModeImg }]}
                    />
                </View>
                <View style={styles.conRow}>
                    <View style={styles.conText}>
                        <View style={styles.textRow}>
                            <CustomeText
                                label={limitString(label, 12)}
                                Font={'Inter-Semi'}
                                fontSizes={responsiveHeight(14)}
                                lineHeights={responsiveHeight(19.6)}
                                colors={color.Primary_Black}
                            />
                            {isParent ?
                                <View style={styles.box}>
                                    <Text style={styles.textBox}>{parent}</Text>
                                </View>
                                :
                                <></>
                            }
                        </View>
                        {isAge ?
                            <View style={styles.rowContainer}>
                                <Text style={styles.textAge}>{age}</Text>
                                <Text style={styles.textAge}> y.o. {gender}</Text>
                            </View>
                            :
                            isDoctor ?

                                <View style={styles.rowContainer}>
                                    <Text style={styles.textAge}>{Times}</Text>
                                </View>
                                :
                                <View style={styles.rowContainer}>
                                    <Text style={styles.textAge}>{city}</Text>
                                </View>
                        }
                        {isParent ?
                            <Pressable style={styles.ConLink} onPress={onPressLink}>
                                <Image source={IcLink} style={styles.imgLink} />
                                <View>
                                    <Text style={styles.textLink}>{'Medical Records'}</Text>
                                    <View style={styles.line}></View>
                                </View>
                            </Pressable>
                            : <></>
                        }

                    </View>
                    {isButton ?
                        <View style={styles.conButton}>
                            {onChecked ?
                                <ButtonPrimary
                                    label={lblButtonChecked}
                                    ImageProp={icButtonChecked}
                                    ImageHeight={responsiveHeight(8)}
                                    ImageWidth={responsiveHeight(11.2)}
                                    marginImg={responsiveHeight(5)}
                                    fontSizes={responsiveHeight(14)}
                                    Font={'InterRegular'}
                                    colors={color.Primary}
                                    bgColor={color.softBlue}
                                    margin={true}
                                    heights={null}
                                    borderWidth={false}
                                    defaultRight={responsiveHeight(15)}
                                    defaultLeft={responsiveHeight(15)}
                                    defaultVertical={responsiveHeight(12)}
                                    onPress={onPressChecked}
                                />
                                : isDoctor ?
                                    <ButtonPrimary
                                        label={lblButton}
                                        fontSizes={responsiveHeight(14)}
                                        Font={'Inter-400'}
                                        colors={color.Primary}
                                        bgColor={color.bgColors}
                                        margin={true}
                                        defaultRight={responsiveHeight(20)}
                                        defaultLeft={responsiveHeight(20)}
                                        defaultVertical={responsiveHeight(12)}
                                        onPress={onPressButton}
                                        borderWidth={true}
                                        heights={null}
                                        borderColor={color.Primary}
                                    />
                                    :
                                    <ButtonPrimary
                                        label={lblButton}
                                        ImageProp={icButton}
                                        ImageHeight={responsiveHeight(12)}
                                        ImageWidth={responsiveHeight(9)}
                                        marginImg={responsiveHeight(5)}
                                        fontSizes={responsiveHeight(14)}
                                        Font={'InterRegular'}
                                        colors={colorButton}
                                        bgColor={bgColor}
                                        margin={true}
                                        heights={null}
                                        borderWidth={false}
                                        defaultRight={responsiveHeight(25)}
                                        defaultLeft={responsiveHeight(25)}
                                        defaultVertical={responsiveHeight(12)}
                                        onPress={onPressButton}
                                    />
                            }
                        </View>
                        :
                        <></>
                    }
                </View>
            </View>
        </View>
    )
}

export default Index