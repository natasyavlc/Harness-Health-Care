import { SafeAreaView, View, Text, Image, Pressable, BackHandler, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import color from '../../../Asset/color';
import Afford from '../../image/StartImage/Afford.png'
import Book from '../../image/StartImage/Book.png'
import Doctor from '../../image/StartImage/Doctor.png'
import style from './style';
import Logos from '../../Component/Logo/Logos';
import Ctext from '../../Component/CostumeText/index'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI';
const Slide = [
    {
        key: 'one',
        image: Afford,
        title: 'Affordable home care treatment',
        text: 'We will be sending actual doctors, actual\n medical practitioner at your residence in\n competitive price. ',
        backgroundColor: color.bgColors,
    },
    {
        key: 'two',
        image: Book,
        title: 'Book doctor appointment on the go',
        text: 'We will be sending actual doctors, actual\n medical practitioner at your residence in\n competitive price. ',
        backgroundColor: color.bgColors,
    },
    {
        key: 'three',
        image: Doctor,
        title: ' Wait for a doctor to visit your house',
        text: 'We will be sending actual doctors, actual\n medical practitioner at your residence in\n competitive price. ',
        backgroundColor: color.bgColors,
    }
];

const GettingStart = ({ navigation }) => {

    const onBackPress = () => {
        return true
    };
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        };
    }, [])

    const _renderItem = ({ item }) => {
        return (
            <View style={style.conRender}>
                <Image source={item.image} style={style.conImage} />
                <Text style={style.conTitle}>{item.title}</Text>
                <Text style={style.conText}>{item.text}</Text>
            </View>
        );
    }

    const ButtonNext = () => {
        return (
            <View style={style.conButton}>
                <Ctext
                    label={'Next'}
                    colors={color.bgColors}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inter-400'}
                />
            </View>
        )
    }
    const ButtonSkip = () => {
        return (
            <View style={style.conButton2}>
                <Ctext
                    label={'Skip'}
                    colors={color.Primary}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inter-400'}
                />
            </View>
        )
    }
    const ButtonSkip2 = () => {
        return (
            <Pressable style={style.conButton2}>
                <Ctext
                    label={'Skip'}
                    colors={color.Primary}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inter-400'}
                />
            </Pressable>
        )
    }
    const ButtonDone = () => {
        return (
            <View style={style.conButton}>
                <Ctext
                    label={'Getting Started'}
                    colors={color.bgColors}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inter-400'}
                />
            </View>
        )

    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={style.conLogo}>
                <Logos
                    logoColor={'blue'}
                    height={73}
                    width={73}
                    mode={'contain'}
                    fonts={responsiveHeight(20)}
                />
            </View>
            <View style={{ flex: 0.6 }}>
                <AppIntroSlider
                    data={Slide}
                    renderItem={_renderItem}
                    activeDotStyle={{ backgroundColor: color.Primary ,marginTop:responsiveHeight(53),height:responsiveHeight(8),width:responsiveHeight(8) }}
                    dotStyle={{backgroundColor:color.Huest_Grey ,marginTop:responsiveHeight(53),height:responsiveHeight(8),width:responsiveHeight(8) }}
                    renderNextButton={ButtonNext}
                    renderSkipButton={ButtonSkip}
                    showSkipButton={true}
                    showPrevButton={true}
                    showDoneButton={true}
                    renderDoneButton={ButtonDone}
                    renderPrevButton={ButtonSkip2}
                    onDone={() => {
                        navigation.navigate("AuthScreen")
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default GettingStart