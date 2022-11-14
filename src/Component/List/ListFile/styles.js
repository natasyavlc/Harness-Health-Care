import { StyleSheet } from 'react-native'
import color from '../../../../Asset/color'
import { responsiveHeight } from '../../Helper/ResponsiveUI'

const style = StyleSheet.create({
    wrapper: {
        height: responsiveHeight(52),
        padding: responsiveHeight(16),
        backgroundColor: color.softBlue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: responsiveHeight(4)
    },
    txtTitle: {
        fontFamily: 'Inter',
        fontSize: responsiveHeight(14),
        lineHeight: responsiveHeight(20),
        color: color.Primary,
        textAlign: 'left',
        textDecorationLine: 'underline'
    },
    icon: {
        width: responsiveHeight(20),
        height: responsiveHeight(20),
    },
})

export default style