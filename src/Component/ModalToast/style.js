import { StyleSheet } from 'react-native'
import colors from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container: (x) => ({
        flexDirection: 'row',
        alignItems: 'center',
        padding: responsiveHeight(13),
        borderRadius: 5,
        borderWidth: 1,
        borderColor: x ? colors.hardYellow : colors.RGB_Red2,
        backgroundColor: x ? colors.RGB_HuestYellow : colors.RGB_Red,
    }),
    BigCon: (x) => ({
        flex: 1,
        backgroundColor: x ? 'transparent' : colors.bgColors,
        borderRadius: 5,
        shadowColor: colors.Primary_Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2

    }),
    conImage: {
        height: responsiveHeight(12),
        width: responsiveWidth(12),
        resizeMode: 'contain',
        marginRight: responsiveWidth(10)
    },
    containText: { width: responsiveWidth(346) },
})

export default style