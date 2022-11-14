import { StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    conFlex: {
        marginBottom: responsiveHeight(4)
    },
    conBg: (touch, data, i) => ({
        backgroundColor: touch == data ? color.Primary : i == false ? color.bgColors : color.Rgb_HueBlue,
        marginHorizontal: responsiveWidth(4),
        width: responsiveWidth(96),
        height: responsiveHeight(49),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    })
})

export default style