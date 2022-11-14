import { View, Modal } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import Ctext from '../CostumeText/index'
import color from '../../../Asset/color'
import CostumeRadios from '../CostumeRadio/CostumeRadios'
import ButtonPrimary from '../Buttons/ButtonPrimary'

const Index = ({
    visibles,
    data,
    onPress,
    onChange
}) => {

    const [day7, setDay7] = useState(false)
    const [day15, setday15] = useState(false)
    const [month1, setMonth1] = useState(false)
    const [month3, setMonth3] = useState(false)
    const [change, setChange] = useState('')


    const handlerChange = (value) => {
        if (value == 1) {
            setDay7(true)
            setday15(false)
            setMonth1(false)
            setMonth3(false)
            setChange('7 days')
            onChange(change)
        } else if (value == 2) {
            setDay7(false)
            setday15(true)
            setMonth1(false)
            setMonth3(false)
            setChange('15 days')
            onChange(change)

        } else if (value == 3) {
            setDay7(false)
            setday15(false)
            setMonth1(true)
            setMonth3(false)
            setChange('1 Month')
            onChange(change)

        } else if (value == 4) {
            setDay7(false)
            setday15(false)
            setMonth1(false)
            setMonth3(true)
            setChange('3 Month')
            onChange(change)

        } else {
            setDay7(false)
            setday15(false)
            setMonth1(false)
            setMonth3(false)
        }

    }
    return (
        <View>
            <Modal
                visible={visibles}
                transparent
            >
                <View style={style.container} >
                    <View style={style.whiteCon}>
                        <View style={style.H6}>
                            <Ctext
                                label={'Vitals Preferences'}
                                colors={color.Primary_Black}
                                fontSizes={16}
                                Font={'Inter-Semi'}
                            />
                        </View>
                        <View style={{ marginHorizontal: 16 }}>
                            <Ctext
                                label={'Showing for:'}
                                colors={color.Text_Grey}
                                fontSizes={12}
                                Font={'Inters'}
                            />
                        </View>
                        <View style={style.RadioCon}>
                            <CostumeRadios
                                label={'7 Days'}
                                width={428}
                                onChange={day7}
                                border={false}
                                onPress={() => handlerChange(1)}
                            />
                            <CostumeRadios
                                label={'15 days'}
                                width={428}
                                onChange={day15}
                                border={false}
                                onPress={() => handlerChange(2)}
                            />
                            <CostumeRadios
                                label={'1 Month'}
                                width={428}
                                onChange={month1}
                                border={false}
                                onPress={() => handlerChange(3)}
                            />
                            <CostumeRadios
                                label={'3 Month'}
                                width={428}
                                onChange={month3}
                                border={false}
                                onPress={() => handlerChange(4)}
                            />
                        </View>
                        <ButtonPrimary
                            label={'Save'}
                            colors={color.Primary_White}
                            Font={'InterRegular'}
                            fontSizes={14}
                            bgColor={color.Primary}
                            borderColor={color.Primary}
                            borderWidth={false}
                            onPress={onPress}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Index