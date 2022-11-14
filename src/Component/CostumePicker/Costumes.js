import { StyleSheet, View, Appearance, Platform } from "react-native"
import React from 'react'
import color from "../../../Asset/color";
import PickerModal from './Index'
import { responsiveHeight, responsiveWidth } from "../Helper/ResponsiveUI";
import Ctext from '../CostumeText/index'

const Costumes = ({
    label = "Label",
    onValueChange,
    data,
    selectedValue,
    valueColor = color.Hue_Grey,
    mandatory,
    useTitle = true,
    placeholder = 'placeholder',
    placeholderBold = false,
    marginTop = 10,
    colorPlaceholder,
    colorArrow,
}) => {
    // const noChoosed = data === selectedValue;
    // const colorScheme = Appearance.getColorScheme();

    return (
        <View style={{ marginTop: Platform.OS === 'ios' ? marginTop : 0 }}>
            {useTitle === false ? null :
                <>
                    <View style={style.containerLabel}>
                        <Ctext
                            label={label}
                            fontSizes={responsiveHeight(10)}
                            Font={'Inters'}
                            colors={color.Primary_Black}
                        />
                    </View>
                </>
            }
            <View style={style.box}>
                <View style={style.conViews(useTitle)}>
                    <PickerModal
                        title={label}
                        data={data}
                        onValueChange={onValueChange}
                        placeholder={placeholder === 'placeholder' ? label : placeholder}
                        labelTitle={label}
                        inBox={true}
                        placeholderBold={placeholderBold}
                        colorPlaceholder={colorPlaceholder}
                        colorArrow={colorArrow}
                        marginPicker={responsiveHeight(10)}
                        selectedValue={selectedValue}
                    />
                </View>
            </View>
        </View>
    )
}

export default Costumes;


const style = StyleSheet.create({
    box: {
        width: '100%',
        height: responsiveHeight(54),
        borderColor: '#AAAAAA',
        borderWidth: 1,
        borderRadius: responsiveHeight(10),
        justifyContent: 'center',
        backgroundColor: color.RGB_Grey,
    },
    conViews: (x) => ({
        height: x === false ? responsiveHeight(100) : responsiveHeight(48),
        justifyContent: 'center',

    }),
    containerLabel: {
        marginBottom: responsiveHeight(4)
    }
})
