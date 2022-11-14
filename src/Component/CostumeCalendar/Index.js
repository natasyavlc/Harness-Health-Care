import React from 'react'
import { Platform, View } from 'react-native';
import Calendar from "react-native-calendar-range-picker";
import color from '../../../Asset/color';
import { responsiveHeight } from '../Helper/ResponsiveUI';
const CUSTOM_LOCALE = {
    monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: '•',
    year: '',
}

const Index = ({
    onChangeValue
}) => {
    return (
        <View>
            <Calendar
                locale={CUSTOM_LOCALE}
                startDate={new Date()}
                singleSelectMode={true}
                onChange={(date) => {
                    onChangeValue(date)
                }}
                disabledBeforeToday={true}
                futureYearRange={2}
                initialNumToRender={2}
                pastYearRange={0}
                isMonthFirst={true}

                style={{
                    container: {
                        height: '100%',
                        width: '100%'
                    },
                    weekContainer: {
                        backgroundColor: color.Rgb_HueBlue,
                    },
                    monthNameText: {
                        backgroundColor: color.Rgb_HueBlue,
                        paddingTop: responsiveHeight(5),
                        marginLeft: '-4.5%',
                        width: '104.5%',
                        height: responsiveHeight(49),
                        textAlign: 'center',
                        fontSize: responsiveHeight(14),
                        justifyContent: 'center',
                        fontFamily: 'Inter-SemiBold',
                        color: color.Primary_Black
                    },
                    dayNameText: {
                        backgroundColor: color.Rgb_HueBlue,
                        width: '100%',
                        height: '100%',
                        fontSize: responsiveHeight(14),
                        color: 'rgba(117, 117, 117, 1)',
                        textAlign: 'center',
                        fontFamily: 'Inter-Regular'

                    },
                    dayText: {
                        fontSize: responsiveHeight(14),
                        fontFamily: 'Inter-SemiBold',
                    },
                    dayTextColor: color.Primary_Black,
                    holidayColor: color.Primary_Black,
                    todayColor: 'red',
                    disabledTextColor: color.Huest_Grey,
                    selectedDayTextColor: 'white',
                    selectedDayBackgroundColor: color.Primary,

                }}
            />
        </View>
    )
}

export default Index
