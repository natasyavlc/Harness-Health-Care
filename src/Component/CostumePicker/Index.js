import {
    View,
    Text,
    Modal,
    TouchableWithoutFeedback,
    Pressable,
    Dimensions,
    ScrollView,
    Image
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
import color from '../../../Asset/color'
import styles from './style'
const { height, width } = Dimensions.get('screen');


const Index = (
    {
        title = "Semua",
        data = ['isi array'],
        onValueChange = () => { },
        inBox = false,
        inBoxLarge = false,
        placeholder = 'placeholder',
        placeholderStyle = '',
        labelTitle = 'label',
        placeholderBold = false,
        colorPlaceholder = '#666666',
        colorArrow = 'black',
        colorValue = '#00193E',
        marginPicker = 0,
        selectedValue,
        stylePick = {},
        sizePlaceholder = 14,
        fromPicker = '',
        disabled = false
    }
) => {
    const [visible, setVisible] = useState(false);
    const [titleDisplay, setTitle] = useState(title);

    useEffect(() => {
        const foundValue = data.find(a => {
            if (selectedValue) {
                return a.value.toString() === selectedValue.toString();
            }
            return;
        });

        if (foundValue) {
            setTitle(foundValue.label);
        } else if (selectedValue === '') {
            setTitle(title);
        }
    }, [selectedValue, data]);

    const handlePick = (val) => {
        onValueChange(val.value);
        setVisible(false);
        setTitle(val.label)
    }

    useEffect(() => {
        if (selectedValue == title) {
            setTitle(title)
        }
    }, [title])

    let arrow = <Image
        source={require('../../image/Icons/Poly.png')}
        style={styles.arrow}
    />
    return (
        <>
            <Modal visible={visible} transparent={true} animationType={'none'} onRequestClose={() => setVisible(false)}>
                <View style={styles.modalBackground}>
                    <TouchableWithoutFeedback onPress={() => setVisible(false)}>
                        <View style={{ width, height, position: 'absolute', backgroundColor: 'transparent', top: 0 }} />
                    </TouchableWithoutFeedback>
                    <View style={styles.containerModal(height)}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {data.map((itm, index) => (
                                <Pressable key={index} style={styles.conItem(height)} underlayColor={'#00000020'} onPress={() => handlePick(itm)}>
                                    <Text style={{ color: 'black' }}>{itm.label}</Text>
                                </Pressable>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <Pressable
                onPress={() => setVisible(!visible)}
                disabled={disabled}
            >
                <View
                    style={[styles.conTitle(marginPicker), { paddingHorizontal: inBox === true ? responsiveHeight(16) : 0 }, stylePick]}
                >
                    <Text
                        numberOfLines={1}
                        ellipsizeMode='tail'
                        style={[{
                            fontSize: responsiveHeight(14),
                            color: selectedValue == '' && selectedValue !== 0 ? color.Text_Grey : color.Primary_Black,
                            fontFamily: 'Inter-Regular',
                            width: '90%',
                            lineHeight: responsiveHeight(20)
                        },]}
                    >
                        {titleDisplay === labelTitle ? placeholder : titleDisplay}
                    </Text>
                    {arrow}
                </View>
            </Pressable>
        </>
    )
}

export default Index
