import { StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(33, 33, 33, 0.75)',
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    whiteCon: {
        backgroundColor: color.bgColors,
        height: responsiveHeight(472),
        width: responsiveWidth(428),
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
    },
    H6: { alignItems: 'center', marginTop: responsiveHeight(35), marginBottom: responsiveHeight(36) },
    RadioCon: { marginTop: responsiveHeight(8), marginBottom: responsiveHeight(52) }

})

export default style