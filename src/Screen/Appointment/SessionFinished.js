import React, { useEffect, useState } from 'react'
import { SafeAreaView, Image, StyleSheet, Text, Pressable, View, BackHandler } from 'react-native'

// COMPONENT
import CustomText from '../../Component/CostumeText'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'

// STYLE
import colors from '../../../Asset/color'

// HELPER
import { responsiveHeight } from '../../Component/Helper/ResponsiveUI'

const SessionFinished = ({ navigation, route }) => {
    // const { params } = navigation.state // data from route params
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
    const { name, image } = route.params
    const sessions = route.params?.NewSession
    const buttons = route.params?.NewNav
    const [text, setText] = useState(buttons ? 'Appointment Details' : 'Write a Review')
    // useEffect(() => {
    //   console.log(params, 'INI PARAMS');
    // }, [])

    const ImageUri = 'https://source.unsplash.com/1024x768/?doctor';
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <CustomText
                    label={buttons ? '' : 'Session has finished'}
                    fontSizes={responsiveHeight(18)}
                    Font={'InterRegular'}
                    colors={colors.Primary_Black}
                    align='center'
                />
                <Image
                    source={{ uri: image ? image : ImageUri }}
                    style={styles.img}
                />
                <Text style={[styles.caption, { marginBottom: responsiveHeight(175) }]}>
                    {sessions || 'Your session with'}
                    <Text style={[styles.caption, { fontFamily: 'Inter-SemiBold' }]}> {name} </Text>
                    {buttons ? '' : 'has finished. Feel free to share your session experience in the review. Thank your for using HHC.'}
                </Text>
            </View>

            <View style={styles.footerBtn}>
                <ButtonPrimary
                    label={text}
                    colors={colors.Primary_White}
                    Font={'InterRegular'}
                    fontSizes={responsiveHeight(14)}
                    bgColor={colors.Primary}
                    borderColor={colors.Primary}
                    borderWidth={false}
                    onPress={() => text == 'Appointment Details' ? navigation.navigate('DetailAppointment') : navigation.navigate('WriteReviews')}
                />

                <Pressable
                    onPress={() => navigation.navigate('HomePage')}
                    style={styles.press}
                >
                    <CustomText
                        label={'Homepage'}
                        fontSizes={responsiveHeight(14)}
                        Font={'InterRegular'}
                        colors={colors.Primary}
                        align='center'
                    />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16
    },
    img: {
        width: responsiveHeight(175),
        height: responsiveHeight(175),
        borderRadius: responsiveHeight(175) / 2,
        alignSelf: 'center',
        marginVertical: responsiveHeight(24)
    },
    caption: {
        fontFamily: 'Inter-Regular',
        fontSize: responsiveHeight(14),
        color: colors.Primary_Black,
        textAlign: 'center',
        marginHorizontal: 16,
        lineHeight: responsiveHeight(20)
    },
    press: {
        marginTop: responsiveHeight(16),
    },
    footerBtn: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: responsiveHeight(40)
    }
})

export default SessionFinished