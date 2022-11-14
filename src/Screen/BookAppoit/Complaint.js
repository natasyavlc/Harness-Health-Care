import { View, SafeAreaView, StatusBar, StyleSheet, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ctext from '../../Component/CostumeText'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import color from '../../../Asset/color'
import Headers from '../../Component/Headers'
import Multiline from '../../Component/MultilineInput/Index'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'

const Complaint = ({ navigation, route }) => {
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
    const { day, month, date, times } = route.params
    const [complaints, setComplaints] = useState('')

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <Headers
                Hlabel={'Complaints'}
                onPress={() => { navigation.goBack() }}
                OnBack={true}
            />
            <View style={style.labelCon}>
                <Ctext
                    label={'Describe any complaints or symptomps in a clear sentences to give the doctor an overview about the patient.'}
                    fontSizes={responsiveHeight(16)}
                    colors={'#424242'}
                    Font={'Inter-400'}
                    align={'center'}
                    lineHeights={responsiveHeight(20)}
                />
            </View>
            <View>
                <Multiline
                    label={'Describe the patient’s complaint.'}
                    label2={'Max. 1024 characters'}
                    value={complaints}
                    onChange={text => setComplaints(text)} />
            </View>
            <View style={style.conButton}>
                <ButtonPrimary
                    label={'Next'}
                    colors={color.Primary_White}
                    Font={'Inter-Semi'}
                    fontSizes={responsiveHeight(14)}
                    bgColor={color.Primary}
                    borderColor={color.bgColors}
                    borderWidth={false}
                    disable={complaints == '' ? true : false}
                    onPress={() => navigation.push('BookStep1', { setShow: true, Setday: day, Setmonth: month, SetDate: date, SetTimes: times, Setcomp: complaints })}
                />
            </View>
        </SafeAreaView>
    )
}

export default Complaint

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.bgColors
    },
    labelCon: {
        marginTop: responsiveHeight(24),
        marginHorizontal: responsiveWidth(32),
        textAlign: 'center',
        marginBottom: responsiveHeight(24)
    },
    conButton: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: responsiveHeight(24)
    },
})