import { View, Text, SafeAreaView, StatusBar, StyleSheet, Image, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import Headers from '../../Component/Headers'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import Ctext from '../../Component/CostumeText/index';
import StarRatings from '../../Component/CostumeStar/Index'
import Multiline from '../../Component/MultilineInput/Index'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'
import { AlignJustify } from 'react-native-feather'




const WriteReviews = ({ navigation }) => {
    const image = 'https://source.unsplash.com/1024x768/?doctors';
    const [test, setTest] = useState(0)
    const [comment, setComment] = useState('')

    const onBackPress = () => {
        navigation.goBack();
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
            <Headers
                Hlabel={'Write a Review'}
                OnBack={true}
                onPress={() => { navigation.goBack() }}
            />
            <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: image }} style={style.img} resizeMode='cover' />
                <View style={{ marginTop: responsiveHeight(24) }}>
                    <Ctext
                        label={'How was your experience with'}
                        colors={color.Primary_Black}
                        fontSizes={responsiveHeight(14)}
                        Font={'Inters'}
                    />
                </View>
                <Ctext
                    label={'Robert Fox?'}
                    colors={color.Primary_Black}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inter-Semi'}
                />
                <View style={{ marginTop: responsiveHeight(24) }}>
                    <StarRatings
                        defaultRatings={0}
                        size={responsiveHeight(34)}
                        disable={false}
                        onChange={(e) => setTest(e)}
                    />
                </View>
            </View>
            <View>
                <Multiline
                    label={'Write a Comment'}
                    label2={'Max. 1024 characters'}
                    value={comment}
                    onChange={text => setComment(text)}
                />
            </View>
            <View style={style.conButton}>
                <ButtonPrimary
                    label={'Submit Review'}
                    colors={color.Primary_White}
                    Font={'Inter-Semi'}
                    fontSizes={responsiveHeight(14)}
                    disable={comment == '' ? true : false}
                    bgColor={color.Primary}
                    borderColor={color.bgColors}
                    borderWidth={false}
                // onPress={() => {
                //     navigation.navigate('')
                // }}
                />
            </View>
        </SafeAreaView>
    )
}

export default WriteReviews

const style = StyleSheet.create({
    container: { backgroundColor: color.bgColors, flex: 1 },
    conButton: {
        backgroundColor: 'transparent',
        width: '100%',
        marginTop: responsiveHeight(792),
        position: 'absolute'
    },
    img: {
        width: responsiveHeight(175),
        height: responsiveHeight(175),
        borderRadius: responsiveHeight(175) / 2,
        alignSelf: 'center',
        marginTop: responsiveHeight(56)
    },
    conButton: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: responsiveHeight(24)
        // backgroundColor: 'transparent',
        // width: '100%',
        // marginTop: responsiveHeight(792),
        // position: 'absolute'
    },


})