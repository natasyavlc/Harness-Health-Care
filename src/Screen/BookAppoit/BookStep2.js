import { View, SafeAreaView, StyleSheet, StatusBar, Platform, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../../Asset/color'
import Headers from '../../Component/Headers'
import Ctext from '../../Component/CostumeText'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'
import TimesBook from '../../Component/CostumeBookTime/Index'

const BookStep2 = ({ navigation, route }) => {

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
    const arr = [
        { label: '08.00 AM', value: true, id: 0, field: true },
        { label: '09.00 AM', value: true, id: 1, field: true },
        { label: '10.00 AM', value: true, id: 2, field: true },
        { label: '11.00 AM', value: true, id: 3, field: true },
        { label: '12.00 AM', value: true, id: 4, field: true },
        { label: '01.00 PM', value: true, id: 5, field: true },
        { label: '02.00 PM', value: true, id: 6, field: true },
        { label: '03.00 PM', value: true, id: 7, field: true },
        { label: '04.00 PM', value: true, id: 8, field: true },
        { label: '05.00 PM', value: false, id: 9, field: true },
        { label: '06.00 PM', value: false, id: 10, field: true },
        { label: '07.00 PM', value: true, id: 11, field: true },
        { label: '08.00 PM', value: true, id: 12, field: true },
        { label: '0', value: true, id: 13, field: false },
        { label: '0', value: true, id: 14, field: false },
        { label: '0', value: true, id: 15, field: false },
    ]
    const { days, months, datess } = route.params
    const [timeBook, setTimeBook] = useState('')
    const dateLabel = Platform.OS == 'ios' ? `${days}, ${months} ${datess.replace('/', ' ')}` : `${days.replace('07:00:00', '')}`


    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <Headers
                Hlabel={'Book an Appointment'}
                onPress={() => { navigation.goBack() }}
                OnBack={true}
            />
            <View style={style.conTitle}>
                <Ctext
                    label={'Appoinment Date'}
                    fontSizes={responsiveHeight(16)}
                    colors={color.Primary_Black}
                    Font={'Inter-Semi'}
                />
            </View>
            <View style={style.conDate}>
                <Ctext
                    label={dateLabel}
                    fontSizes={responsiveHeight(14)}
                    colors={color.Primary_Black}
                    Font={'Inter-400'}
                />
            </View>
            <View style={style.conTitle2}>
                <Ctext
                    label={'What time do you want to book?'}
                    fontSizes={responsiveHeight(16)}
                    colors={color.Primary_Black}
                    Font={'Inter-Semi'}
                />
            </View>
            <View>
                <TimesBook
                    value={arr}
                    onChange={(e) => {
                        setTimeBook(e)
                    }} />
            </View>
            <View style={style.conButton}>
                <ButtonPrimary
                    label={'Book Now'}
                    colors={color.Primary_White}
                    Font={'Inter-Semi'}
                    fontSizes={responsiveHeight(14)}
                    bgColor={color.Primary}
                    borderColor={color.bgColors}
                    borderWidth={false}
                    disable={timeBook == '' ? true : false}
                    onPress={() => {
                        navigation.push('Complaint', { day: days, month: months, date: datess, times: timeBook })
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default BookStep2

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.bgColors
    },
    conTitle: {
        marginTop: responsiveHeight(24),
        marginHorizontal: responsiveWidth(16),
        marginBottom: responsiveHeight(12)
    },
    conTitle2: {
        marginHorizontal: responsiveWidth(16),
        marginBottom: responsiveHeight(12)
    },
    conDate: {
        marginHorizontal: responsiveWidth(16),
        marginBottom: responsiveHeight(36)
    },
    conButton: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: responsiveHeight(24)
    },

})