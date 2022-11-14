import { TextInput, View } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import Ctext from '../CostumeText/index'
import color from '../../../Asset/color'
import { responsiveHeight } from '../Helper/ResponsiveUI'

const Index = ({
    onChange,
    label,
    label2,
    value,
    placeholder,
}) => {
    const [localvalue, setLocalvalue] = useState('');

    return (
        <View>
            <View style={style.container}>
                <View style={style.conTittle}>
                    <Ctext
                        label={label}
                        fontSizes={responsiveHeight(10)}
                        colors={color.softBlack}
                        Font={'Inters'}

                    />
                    <Ctext
                        label={label2}
                        fontSizes={responsiveHeight(10)}
                        colors={color.softBlack}
                        Font={'Inters'}

                    />
                </View>
                <View style={style.conMulti}>
                    <TextInput
                        placeholder={placeholder}
                        value={value}
                        multiline={true}
                        style={style.input}
                        onChangeText={text => {
                            setLocalvalue(text)
                            onChange(text)
                        }}
                        placeholderTextColor={color.Primary_Black}
                    />
                </View>
            </View>
        </View>
    )
}

export default Index