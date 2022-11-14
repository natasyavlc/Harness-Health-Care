import { StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(33, 33, 33, 0.75)',
        flex: 1,
        justifyContent: 'center',
        padding: responsiveHeight(24)
    },
    conWhite: {
        backgroundColor: color.bgColors,
        height: responsiveHeight(263),
        width: responsiveWidth(380),
        borderRadius: 8,
    },
    textTittle: {
        marginTop: responsiveHeight(24),
        marginBottom: responsiveHeight(12),
        alignItems: 'center'
    },
    textTittle2: {
        marginBottom: responsiveHeight(36),
        alignItems: 'center'
    }
})

export default style