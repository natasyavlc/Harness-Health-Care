import { View, FlatList, Image, Pressable } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import DotSyle from './DotStyle/Index';
import style from './style';
import Ctext from '../CostumeText/index';
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI';
import color from '../../../Asset/color';
import SettingIcon from '../../image/Icons/adjust.png';


const Index = ({
    data = [],
    onPress,
}) => {

    const ref = useRef(null);
    const [localIndex, setLocalIndex] = useState(0);
    const onSwap = React.useRef((x) => {
        setLocalIndex(x?.changed[0]?.index)
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 55 })
    const _renderItem = ({ item, index }) => {
        return (
            <View
                key={index.toString()}
                style={style.vitalContainer(localIndex)}>
                <View style={style.RenderFlex}>
                    <View style={style.conProfile}>
                        <Image source={{ uri: item.image }} style={style.conImage} />
                        <Ctext
                            label={item.name}
                            fontSizes={responsiveHeight(10)}
                            colors={color.Primary_Black}
                            Font={'Inters'}
                        />
                    </View>
                    <Pressable onPress={onPress}>
                        <Image source={SettingIcon} style={style.iconSetting} />
                    </Pressable>
                </View>
                <View style={style.initCon}>
                    <View style={{ flex: 1 }}>
                        <View style={[style.initFlex]}>
                            <Ctext
                                label={'Blood Pressure'}
                                fontSizes={responsiveHeight(10)}
                                colors={color.Primary_Black}
                                Font={'Inters'}
                            />
                            <Ctext
                                label={item.bloodPresure}
                                fontSizes={responsiveHeight(14)}
                                colors={color.Primary_Black}
                                Font={'InterRegular'}
                            />
                        </View>
                        <View style={[style.initFlex, { marginTop: responsiveHeight(16) }]}>
                            <Ctext
                                label={'Heart Rate'}
                                fontSizes={responsiveHeight(10)}
                                colors={color.Primary_Black}
                                Font={'Inters'}
                            />
                            <Ctext
                                label={item.HeartRate}
                                fontSizes={responsiveHeight(14)}
                                colors={color.Primary_Black}
                                Font={'InterRegular'}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={[style.initFlex]}>
                            <Ctext
                                label={'O2 Saturation'}
                                fontSizes={responsiveHeight(10)}
                                colors={color.Primary_Black}
                                Font={'Inters'}
                            />
                            <Ctext
                                label={item.o2}
                                fontSizes={responsiveHeight(14)}
                                colors={color.Primary_Black}
                                Font={'InterRegular'}
                            />
                        </View>
                        <View style={[style.initFlex, { marginTop: responsiveHeight(16) }]}>
                            <Ctext
                                label={'Respiration'}
                                fontSizes={responsiveHeight(10)}
                                colors={color.Primary_Black}
                                Font={'Inters'}
                            />
                            <Ctext
                                label={item.Respiration}
                                fontSizes={responsiveHeight(14)}
                                colors={color.Primary_Black}
                                Font={'InterRegular'}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={[style.initFlex]}>
                            <Ctext
                                label={'Temperature'}
                                fontSizes={responsiveHeight(10)}
                                colors={color.Primary_Black}
                                Font={'Inters'}
                            />
                            <Ctext
                                label={item.temp}
                                fontSizes={responsiveHeight(14)}
                                colors={color.Primary_Black}
                                Font={'InterRegular'}
                            />
                        </View>
                        <View style={[style.initFlex, { marginTop: responsiveHeight(16) }]}>
                            <Ctext
                                label={'Height/Weight'}
                                fontSizes={responsiveHeight(10)}
                                colors={color.Primary_Black}
                                Font={'Inters'}
                            />
                            <Ctext
                                label={`${item.h}/${item.w}`}
                                fontSizes={responsiveHeight(14)}
                                colors={color.Primary_Black}
                                Font={'InterRegular'}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={style.container}>
            <FlatList
                horizontal={true}
                data={data}
                ref={ref}
                style={{ width: '100%' }}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onSwap.current}
                viewabilityConfig={viewConfigRef.current}
                renderItem={_renderItem}
            />
            <DotSyle index={localIndex} data={data} />
        </View>
    )
}

export default Index