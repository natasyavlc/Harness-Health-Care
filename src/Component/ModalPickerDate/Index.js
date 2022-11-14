import { View, Text, Pressable, Image, Platform } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker';
import style from './style';
import Calendar from '../../image/Icons/Calendar.png'
import Ctext from '../CostumeText/index'
import color from '../../../Asset/color';
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI';


const Index = ({
    label,
    placeholder,
    selectedDate,
    backgroundColor,
    value,
    widthPicker
}) => {

    const [open, setOpen] = useState(false);
    return (
        <View style={[style.construc,{width: widthPicker}]}>
            <View style={style.conplace}>
                <Ctext
                    label={placeholder}
                    fontSizes={responsiveHeight(10)}
                    colors={color.Primary_Black}
                    Font={'Inters'}
                />
            </View>
            <Pressable
                style={style.container}
                onPress={() => {
                    setOpen(!open)
                }}>
                <Ctext
                    label={value || label}
                    fontSizes={responsiveHeight(14)}
                    colors={value ? color.Primary_Black : color.Text_Grey}
                    Font={'Inters'}
                />
                <Image source={Calendar} style={style.conImg} />
            </Pressable>
            <DatePicker
                modal
                textColor='black'
                mode={'date'}
                title={label}
                open={open}
                date={new Date()}
                onDateChange={(item) => {
                    setOpen(false)
                    selectedDate(item)
                }}
                onConfirm={item => {
                    const setNewDate = ('0' + item.getDate()).slice(-2) + '/'
                        + ('0' + (item.getMonth() + 1)).slice(-2) + '/'
                        + item.getFullYear()
                    setOpen(false);
                    selectedDate(setNewDate);
                }}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </View>
    )
}

export default Index