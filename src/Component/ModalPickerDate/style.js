import { Platform, StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    construc: {
        width: Platform.OS == 'ios' ? responsiveWidth(386) : responsiveWidth(389)
    },
    container: {
        height: responsiveHeight(53),
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: color.Huest_Grey,
        paddingEnd: responsiveHeight(16),
        paddingStart: responsiveHeight(16),
        borderRadius: 8,
        backgroundColor: color.RGB_Grey,
    },
    conplace: {
        marginBottom: responsiveHeight(4)
    },
    conImg: {
        height: responsiveHeight(20),
        width: responsiveWidth(20),
        resizeMode: 'contain',
    }
})

export default style