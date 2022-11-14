import { View, StyleSheet, Text, SafeAreaView, StatusBar, Pressable, Platform, Modal, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../../Asset/color'
import Headers from '../../Component/Headers'
import Calendars from '../../Component/CostumeCalendar/Index'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'
import { responsiveHeight } from '../../Component/Helper/ResponsiveUI'
import Moment from 'moment'
import ModalBookStep3 from '../../Component/ModalAppoit/Index'
import DummyUser from '../../DummyData';


const BookStep1 = ({ navigation, route }) => {

    const profileArr = DummyUser.filter(o => o.id);
    const show = route.params?.setShow || false
    const dayData = route.params?.Setday?.replace('07:00:00', '') || ''
    const monthData = route.params?.Setmonth || ''
    const datesData = route.params?.SetDate || ''
    const BookTimes = route.params?.SetTimes || ''
    const desCompline = route.params?.Setcomp || ''

    const [dates, setDates] = useState()
    const [days, setDays] = useState('')
    const [Month, setMonth] = useState('')
    const [years, setYears] = useState('')
    const [visible, setVisible] = useState(show)

    const onBackPress = () => {
        var scBefore = route.params?.prevPage
        if (scBefore == 'HomePage') {
            navigation.navigate(scBefore)
        } else if (scBefore == 'Patients') {
            navigation.navigate(scBefore)
        }
        else {
            navigation.navigate('HomePage')
        }
        return true
    };
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        };
    }, [])

    useEffect(() => {
        dates
        days
        Month
        years
    }, [dates, days, Month, years])

    const onChangeVal = (val) => {
        const news = Moment(val, 'YYYY/MM/DD').format('YYYY');
        setYears(news)
        setDates(Moment(val, 'YYYY/MM/DD').format('DD/YYYY'))
        var d = new Date(val).toLocaleString('en-us', { weekday: 'long' })
        var M = new Date(val).toLocaleString('en-us', { month: 'long' })
        setDays(d)
        setMonth(M)
    }
    return (

        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <Headers
                Hlabel={'Book an Appointment'}
                onPress={() => onBackPress()}
                OnBack={true}
            />
            <View style={{ flex: 1 }}>
                <Calendars onChangeValue={(val) => onChangeVal(val)} />
                {dates ?
                    <View style={style.conButtonFloat}>
                        <ButtonPrimary
                            label={Platform.OS == 'ios' ? `Book For : ${days}, ${Month} ${dates.replace('/', ' ')}` : `Book For : ${days.replace('07:00:00', '')}`}
                            colors={color.Primary_White}
                            Font={'Inter-Semi'}
                            fontSizes={responsiveHeight(14)}
                            bgColor={color.Primary}
                            borderColor={color.bgColors}
                            borderWidth={false}
                            onPress={() => {
                                navigation.push('BookStep2', { days: days, months: Month, datess: dates })
                            }}
                        />
                    </View>
                    : <></>
                }
                <ModalBookStep3
                    visible={visible}
                    days={dayData}
                    month={monthData}
                    dates={datesData}
                    desc={desCompline}
                    times={BookTimes}
                    dataUser={profileArr}
                    Confirm={() => {
                        setVisible(!visible)
                        navigation.push('BookProcess')
                    }}
                    Cancel={() => setVisible(!visible)}
                />
            </View>
        </SafeAreaView>
    )
}

export default BookStep1

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.bgColors,

    },
    conButtonFloat: {
        backgroundColor: 'transparent',
        width: '100%',
        marginTop: responsiveHeight(700),
        position: 'absolute'
    }
})