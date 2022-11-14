import { Platform, StyleSheet } from 'react-native'
import color from '../../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../../Helper/ResponsiveUI'
const style = StyleSheet.create({
    bgCon: {
        backgroundColor: color.bgColors,
        height: Platform.OS == 'ios' ? responsiveHeight(120) : responsiveHeight(125)
    },
    container: (x) => ({
        height: Platform.OS == 'ios' ? responsiveHeight(119) : responsiveHeight(124),
        width: responsiveWidth(121),
        backgroundColor: x ? x : color.bgColors,
        borderRadius: 8,
        shadowColor: color.Primary_Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        alignItems: 'center',
    }),
    imageCon: {
        height: responsiveHeight(36),
        width: responsiveWidth(36),
        marginTop: responsiveHeight(24),
        marginBottom: responsiveHeight(12)
    },
    Margins: {
        marginTop: responsiveHeight(4)
    }

})

export default style