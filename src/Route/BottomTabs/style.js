import { Platform, StyleSheet } from 'react-native'
import colors from '../../../Asset/color'
import { responsiveWidth, responsiveHeight } from '../../Component/Helper/ResponsiveUI'
const style = StyleSheet.create({
    containerBar: {
        height: responsiveHeight(110),
        borderTopColor: colors.bgColors,
        shadowColor: colors.bgColors,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.0,
        shadowRadius: 0,
        elevation: 0,
    },
    container: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    containerImage: {
        height: responsiveHeight(20),
        width: responsiveWidth(20),
        resizeMode: 'contain'
    },
    containerTint: (x) => ({
        backgroundColor: x == 'blue' ? colors.Tint_ColorBG : null,
        height: responsiveHeight(40),
        width: responsiveWidth(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 2,
        padding: responsiveHeight(10),
    })
})

export default style