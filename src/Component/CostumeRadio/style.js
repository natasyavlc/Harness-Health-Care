import { StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'


const style = StyleSheet.create({
    container: (width, border) => ({
        width: width ? responsiveWidth(width) : responsiveWidth(194),
        borderWidth: !border ? null : 1,
        height: responsiveHeight(48),
        justifyContent: 'center',
        borderRadius: responsiveHeight(4),
    }),
    conRadio: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: responsiveWidth(16),
        justifyContent: 'space-between'
    },
    icon: {
        height: responsiveHeight(24), width: responsiveWidth(24), resizeMode: 'contain'
    }
})

export default style