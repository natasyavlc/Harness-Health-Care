import { View, StyleSheet, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform, ScrollView, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../../Asset/color'
import Headers from '../../Component/Headers'
import CardAppointment from '../../Component/Card/CardAppointment'
import { dataAppointment } from '../../DummyData/dataAppointment'
import { responsiveHeight } from '../../Component/Helper/ResponsiveUI'
import Swiper from '../../Component/Swipper/Index'
import { dataDoctor } from '../../DummyData/dataDoctor'


const DoctorList = ({ navigation }) => {
    const [click, setClick] = useState(0)

    const onBackPress = () => {
        navigation.goBack()
    };
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        };
    }, [])
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{ flex: 1 }}>
            <SafeAreaView style={style.container}>
                <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
                <Headers
                    onPress={() => { navigation.goBack() }}
                    OnBack={true}
                    SetSearch={true}
                />
                <View style={style.conSwipper}>
                    <Swiper data={dataDoctor} onPress={e => setClick(e)} />
                </View>
                <View style={style.content}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ height: responsiveHeight(16) }} />
                        {dataAppointment.map((data, I) => {
                            return (
                                <View key={I}>
                                    <CardAppointment
                                        image={data.image}
                                        name={data.name}
                                        specialist={data.specialist}
                                        reviewer={data.reviewer}
                                        onPress={() => navigation.navigate("DoctorDetails", { name: data.name, image: data.image, data: data })}
                                    />
                                </View>

                            )
                        })}
                        {dataAppointment.map((data, I) => {
                            return (
                                <View key={I}>
                                    <CardAppointment
                                        image={data.image}
                                        name={data.name}
                                        specialist={data.specialist}
                                        reviewer={data.reviewer}
                                        onPress={() => navigation.navigate("DoctorDetails", { name: data.name, image: data.image, data: data })}
                                    />
                                </View>

                            )
                        })}
                        <View style={{ height: responsiveHeight(130) }} />
                    </ScrollView>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default DoctorList

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.bgColors
    },
    content: {
        marginTop: responsiveHeight(4),
        paddingHorizontal: responsiveHeight(16)
    },
    conSwipper: {
        marginTop: responsiveHeight(24),
        paddingHorizontal: responsiveHeight(16)
    }
})