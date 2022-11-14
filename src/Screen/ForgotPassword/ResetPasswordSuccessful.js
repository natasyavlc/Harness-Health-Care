import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'
import Headers from '../../Component/Headers'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import icKey from '../../image/Icons/ic_key.png'
import CustomeText from '../../Component/CostumeText/index'

const ResetPasswordSuccessful = ({ navigation }) => {
    const handleButtonGoHome = () => {

    }
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Headers
                Hlabel={'Forgot Password'}
                onPress={() => {
                    navigation.goBack()
                }}
                OnBack={true}
            />
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={{ marginTop: responsiveHeight(282) }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.conImg}>
                        <Image source={icKey} style={styles.img} />
                    </View>
                    <View>
                        <CustomeText
                            label={'Password is sucessfully reset!'}
                            Font={'Inter-Semi'}
                            fontSizes={responsiveHeight(16)}
                            lineHeights={responsiveHeight(19.2)}
                            align={'center'}
                            colors={color.GT_Grey}
                        />
                    </View>
                    <View style={styles.textView}>
                        <CustomeText
                            label={'Your password has been reset. You account is new ready to use.'}
                            Font={'Inters'}
                            fontSizes={responsiveHeight(16)}
                            lineHeights={responsiveHeight(24.4)}
                            align={'center'}
                            colors={color.GT_Grey}
                        />
                    </View>
                </ScrollView>
                <View style={styles.conButton}>
                    <ButtonPrimary
                        label={'Go to Homepage'}
                        colors={color.Primary_White}
                        Font={'InterRegular'}
                        fontSizes={responsiveHeight(14)}
                        bgColor={color.Primary}
                        borderColor={color.Primary}
                        borderWidth={true}
                        onPress={() => handleButtonGoHome()}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ResetPasswordSuccessful

const styles = StyleSheet.create({
    conImg: {
        borderRadius: responsiveHeight(24),
        width: responsiveHeight(84),
        height: responsiveHeight(84),
        backgroundColor: '#D1FFE2',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: responsiveHeight(32),
        alignSelf: 'center'
    },
    img: {
        height: responsiveHeight(24),
        width: responsiveHeight(24),
        resizeMode: 'contain'
    },
    textView: {
        marginHorizontal: responsiveWidth(40),
        marginBottom: responsiveHeight(16)
    },
    conButton: {
        bottom: responsiveHeight(45)
    }
})