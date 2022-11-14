import { View, SafeAreaView, StatusBar, StyleSheet, Image, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import Process from '../../image/Icons/Process.png'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import color from '../../../Asset/color'
import Ctext from '../../Component/CostumeText'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'

const BookProcess = ({ navigation }) => {
    const onBackPress = () => {
        navigation.goBack()
        return true
    };
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        };
    }, [])
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("SessionFinished", { NewSession: 'You are going to have a session with Dr. Robert Fox', NewNav: true })
        }, 2000);
    }, [])

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View />
            <View>
                <Image source={Process} style={style.imagContent} />
                <Ctext
                    label={'Looking for a doctor...'}
                    fontSizes={responsiveHeight(16)}
                    Font={'Inter-Semi'}
                    colors={color.Primary_Black}
                    align={'center'}
                />
                <View style={style.conText}>
                    <Ctext
                        label={'We are finding you a doctor. Please wait for a moment.'}
                        fontSizes={responsiveHeight(16)}
                        Font={'Inters'}
                        colors={color.Primary_Black}
                        align={'center'}
                    />
                </View>
            </View>
            <View style={style.conButton}>
                <ButtonPrimary
                    label={'Cancel'}
                    colors={color.Primary}
                    Font={'Inter-400'}
                    fontSizes={responsiveHeight(14)}
                    bgColor={color.bgColors}
                    borderColor={color.bgColors}
                    borderWidth={true}
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default BookProcess

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.bgColors,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    conButton: {
        width: responsiveWidth(396),
        justifyContent: 'flex-end',
        marginBottom: responsiveHeight(24)
    },
    imagContent: {
        resizeMode: 'contain',
        height: responsiveHeight(133),
        width: responsiveWidth(133),
        marginBottom: responsiveHeight(36),
        alignSelf: 'center'
    },
    conText: {
        width: responsiveWidth(304),
        marginTop: responsiveHeight(16)
    }

})