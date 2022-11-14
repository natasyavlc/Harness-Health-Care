import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import Ctext from '../CostumeText/index'
import color from '../../../Asset/color'
import star from '../../image/Icon/ic_star.png'
import Peoples from '../../image/Icons/Peoples.png'
import { responsiveHeight } from '../Helper/ResponsiveUI'

const Index = ({
    data,
}) => {
    return (
        <View style={style.container}>
            <View style={style.conImage}>
                <Image source={{ uri: data?.image } || data?.image} style={style.Imagecon} />
            </View>
            <View style={style.conFrame}>
                <Ctext
                    label={data?.name}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inter-Semi'}
                    colors={color.Primary_Black}
                />
                <View style={style.stars}>
                    <Image source={star} style={style.icon} />
                    <Ctext
                        label={data?.rate}
                        fontSizes={responsiveHeight(10)}
                        Font={'Inters'}
                        colors={color.Primary_Black}
                    />
                    <Ctext
                        label={` (${data?.reviewer} reviews)`}
                        fontSizes={responsiveHeight(10)}
                        Font={'Inters'}
                        colors={color.Primary_Black}
                    />
                </View>
                <View style={style.specialist}>
                    <Ctext
                        label={data?.specialist}
                        fontSizes={responsiveHeight(10)}
                        Font={'Inters'}
                        colors={color.Primary_Black}
                    />
                </View>
                <View style={style.conFrameDetail}>
                    <View style={style.conDetails}>
                        <Image source={Peoples} style={style.conPng} />
                        <View style={style.conText}>
                            <Ctext
                                label={`1000+`}
                                fontSizes={responsiveHeight(12)}
                                Font={'Inter-Semi'}
                                colors={color.Primary}
                            />
                        </View>
                        <View style={style.conSubText}>
                            <Ctext
                                label={'Patients'}
                                fontSizes={responsiveHeight(12)}
                                Font={'Inters'}
                                colors={color.Primary_Black}
                            />
                        </View>
                    </View>
                    <View style={style.conDetails}>
                        <Image source={Peoples} style={style.conPng} />
                        <View style={style.conText}>
                            <Ctext
                                label={`20+`}
                                fontSizes={responsiveHeight(12)}
                                Font={'Inter-Semi'}
                                colors={color.Primary}
                            />
                        </View>
                        <View style={style.conSubText}>
                            <Ctext
                                label={'Years of practice'}
                                fontSizes={responsiveHeight(12)}
                                Font={'Inters'}
                                colors={color.Primary_Black}

                            />
                        </View>
                    </View>
                    <View style={style.conDetails}>
                        <Image source={Peoples} style={style.conPng} />
                        <View style={style.conText}>
                            <Ctext
                                label={`${data?.reviewer}+`}
                                fontSizes={responsiveHeight(12)}
                                Font={'Inter-Semi'}
                                colors={color.Primary}
                            />
                        </View>
                        <View style={style.conSubText}>
                            <Ctext
                                label={'Reviews'}
                                fontSizes={responsiveHeight(12)}
                                Font={'Inters'}
                                colors={color.Primary_Black}

                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Index