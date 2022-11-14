import React, { useEffect } from 'react'
import { Image, Platform, SafeAreaView, StyleSheet, Text, View, Pressable, BackHandler, Dimensions } from 'react-native'

// COMPONENT
import Headers from '../../Component/Headers'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'
import CustomText from '../../Component/CostumeText'
import CardAppointmentPatient from '../../Component/Card/CardAppointmentPatient'
import CardDetailAppointment from '../../Component/Card/CardDetailAppointment'
import CardVisitAppointment from '../../Component/Card/CardVisitAppointment'
import { ArrowDown } from "react-native-feather";

// HELPER
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import colors from '../../../Asset/color'

// ICON
// import ArrowDown from '../../image/Icon/ic_long_arrow_down.png'

const DetailAppointment = ({ navigation }) => {

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

    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    return (
        <SafeAreaView style={styles.container}>
            <Headers
                Hlabel={'My Appointments'} OnBack={true}
                onPress={() => {
                    navigation.goBack()
                }} />

            <CardDetailAppointment />
            <View style={styles.conArrows}>
                <View style={styles.conFlexs}>
                    <View style={styles.Lines(windowHeight)} />
                    <ArrowDown stroke={colors.Huest_Grey}
                        width={responsiveWidth(32)}
                        height={responsiveHeight(32)}
                        strokeWidth={1}
                        strokeLinecap={0} />
                </View>
            </View>
            {/* <Image
                source={ArrowDown}
                resizeMode='center'
                style={styles.Arrows}
            /> */}
            <View style={styles.VisitAppoit}>
                <CardVisitAppointment />
            </View>
            <View
                style={styles.conAppoit(windowHeight)}
            />
            <CardAppointmentPatient onPress={() => navigation.navigate('AppointmentDetails')} />
            <View style={styles.footerBtn}>
                <ButtonPrimary
                    label={'Edit Appointment'}
                    colors={colors.Primary}
                    Font={'InterRegular'}
                    fontSizes={responsiveHeight(14)}
                    bgColor={colors.bgColors}
                    borderColor={colors.Primary}
                    borderWidth={true}
                />
                <Pressable
                    onPress={() => navigation.navigate('HomePage')}
                    style={styles.press}
                >
                    <CustomText
                        label={'Cancel Appointment'}
                        fontSizes={responsiveHeight(14)}
                        Font={'InterRegular'}
                        colors={colors.Primary_Red}
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
        backgroundColor: '#FFF'
    },
    press: {
        marginTop: responsiveHeight(16),
    },
    footerBtn: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: responsiveHeight(40)
    },
    conAppoit: (x) => ({
        height: Platform.OS === 'ios' ? x < 700 ? responsiveHeight(80) : responsiveHeight(70) : x < 700 ? responsiveHeight(80) : responsiveHeight(65)
    }),
    conArrows: {
        position: 'absolute',
        marginHorizontal: responsiveWidth(214),
        marginTop: Platform.OS == 'ios' ? responsiveHeight(318) : responsiveHeight(267)
    },
    conFlexs: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    VisitAppoit: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    Lines: (windowHeight) => ({
        borderRightWidth: responsiveWidth(1.5),
        borderColor: colors.Huest_Grey, height: windowHeight < 700 ? responsiveHeight(165) : responsiveHeight(150),
        marginBottom: responsiveHeight(-15)
    }),
    // Arrows: {
    //     position: 'absolute',
    //     top: Platform.OS === 'ios' ? responsiveHeight(28) :responsiveHeight(-32),
    //     alignSelf: 'center',
    // },
})

export default DetailAppointment